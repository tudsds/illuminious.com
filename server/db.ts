import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";
import { users, admins, posts, contactSubmissions, type InsertUser, type Admin, type Post, type ContactSubmission } from "../drizzle/schema";
import * as crypto from 'crypto';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db) {
    if (!process.env.TURSO_DATABASE_URL) {
      console.error("[Database] TURSO_DATABASE_URL environment variable is not set!");
      return null;
    }
    if (!process.env.TURSO_AUTH_TOKEN) {
      console.error("[Database] TURSO_AUTH_TOKEN environment variable is not set!");
      return null;
    }
    try {
      _db = drizzle({
        connection: {
          url: process.env.TURSO_DATABASE_URL,
          authToken: process.env.TURSO_AUTH_TOKEN,
        },
      });
      console.log("[Database] Successfully connected to Turso");
    } catch (error) {
      console.error("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Password hashing utilities
function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(':');
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const existing = await db.select().from(users).where(eq(users.openId, user.openId)).limit(1);

    if (existing.length > 0) {
      const updateSet: Record<string, unknown> = {
        updatedAt: new Date().toISOString(),
      };
      if (user.name !== undefined) updateSet.name = user.name;
      if (user.email !== undefined) updateSet.email = user.email;
      if (user.loginMethod !== undefined) updateSet.loginMethod = user.loginMethod;
      if (user.lastSignedIn !== undefined) updateSet.lastSignedIn = typeof user.lastSignedIn === 'string' ? user.lastSignedIn : new Date().toISOString();
      if (user.role !== undefined) updateSet.role = user.role;

      await db.update(users).set(updateSet).where(eq(users.openId, user.openId));
    } else {
      await db.insert(users).values({
        openId: user.openId,
        name: user.name ?? null,
        email: user.email ?? null,
        loginMethod: user.loginMethod ?? null,
        role: user.role ?? "user",
        lastSignedIn: typeof user.lastSignedIn === 'string' ? user.lastSignedIn : new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ Admin Functions ============

export async function createAdmin(admin: { username: string; password: string; name?: string; email?: string; isSuperAdmin?: boolean }): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const passwordHash = hashPassword(admin.password);

  try {
    await db.insert(admins).values({
      username: admin.username,
      passwordHash,
      name: admin.name || null,
      email: admin.email || null,
      isSuperAdmin: admin.isSuperAdmin || false,
    });

    const result = await db.select().from(admins).where(eq(admins.username, admin.username)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create admin:", error);
    return null;
  }
}

export async function verifyAdmin(username: string, password: string): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(admins).where(eq(admins.username, username)).limit(1);

  if (result.length === 0) return null;

  const admin = result[0];
  if (!verifyPassword(password, admin.passwordHash)) return null;

  // Update last signed in
  await db.update(admins).set({ lastSignedIn: new Date().toISOString(), updatedAt: new Date().toISOString() }).where(eq(admins.id, admin.id));

  return admin;
}

export async function getAdminById(id: number): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(admins).where(eq(admins.id, id)).limit(1);
  return result[0] || null;
}

export async function getAdminByUsername(username: string): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
  return result[0] || null;
}

export async function getAllAdmins(): Promise<Admin[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(admins).orderBy(desc(admins.createdAt));
}

export async function deleteAdmin(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.delete(admins).where(eq(admins.id, id));
  return true;
}

// ============ Post Functions ============

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    + '-' + Date.now().toString(36);
}

export async function createPost(post: { title: string; content: string; excerpt?: string; featuredImage?: string; type: 'news' | 'blog'; status?: 'draft' | 'published'; authorName?: string; authorId?: number }): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const slug = generateSlug(post.title);

  try {
    await db.insert(posts).values({
      title: post.title,
      slug,
      content: post.content,
      excerpt: post.excerpt || null,
      featuredImage: post.featuredImage || null,
      type: post.type,
      status: post.status || 'draft',
      authorName: post.authorName || null,
      authorId: post.authorId || null,
      publishedAt: post.status === 'published' ? new Date().toISOString() : null,
    });

    const result = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create post:", error);
    return null;
  }
}

export async function updatePost(id: number, post: Partial<{ title: string; content: string; excerpt: string; featuredImage: string; status: 'draft' | 'published'; authorName: string }>): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const updateData: Record<string, unknown> = { ...post, updatedAt: new Date().toISOString() };

  if (post.status === 'published') {
    const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
    if (existing[0] && !existing[0].publishedAt) {
      updateData.publishedAt = new Date().toISOString();
    }
  }

  await db.update(posts).set(updateData).where(eq(posts.id, id));

  const result = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return result[0] || null;
}

export async function deletePost(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.delete(posts).where(eq(posts.id, id));
  return true;
}

export async function getPostById(id: number): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return result[0] || null;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
  return result[0] || null;
}

export async function getPostsByType(type: 'news' | 'blog', publishedOnly: boolean = true): Promise<Post[]> {
  const db = await getDb();
  if (!db) return [];

  if (publishedOnly) {
    return await db.select().from(posts)
      .where(and(eq(posts.type, type), eq(posts.status, 'published')))
      .orderBy(desc(posts.publishedAt));
  }

  return await db.select().from(posts)
    .where(eq(posts.type, type))
    .orderBy(desc(posts.createdAt));
}

export async function getAllPosts(): Promise<Post[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(posts).orderBy(desc(posts.createdAt));
}

// ============ Contact Submission Functions ============

export async function createContactSubmission(submission: { name: string; email: string; company?: string; phone?: string; message: string; source?: string }): Promise<ContactSubmission | null> {
  const db = await getDb();
  if (!db) return null;

  try {
    await db.insert(contactSubmissions).values({
      name: submission.name,
      email: submission.email,
      company: submission.company || null,
      phone: submission.phone || null,
      message: submission.message,
      source: submission.source || null,
    });

    // Get the last inserted submission
    const result = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.id)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create contact submission:", error);
    return null;
  }
}

export async function getAllContactSubmissions(): Promise<ContactSubmission[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
}

export async function updateContactSubmissionStatus(id: number, status: 'new' | 'read' | 'replied' | 'archived'): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.update(contactSubmissions).set({ status, updatedAt: new Date().toISOString() }).where(eq(contactSubmissions.id, id));
  return true;
}

export async function deleteContactSubmission(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
  return true;
}

// ============ Initialize Default Super Admin ============

export async function initializeDefaultAdmin(): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD;
  if (!defaultPassword) {
    console.warn('[Database] ADMIN_DEFAULT_PASSWORD not set, skipping default admin creation');
    return;
  }

  const existing = await getAdminByUsername('illuminious');
  if (!existing) {
    await createAdmin({
      username: 'illuminious',
      password: defaultPassword,
      name: 'Super Admin',
      email: 'admin@illuminious.com',
      isSuperAdmin: true,
    });
    console.log('[Database] Default super admin created');
  }
}
