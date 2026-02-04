import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyContactSubmission } from "./_core/notification";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import * as db from "./db";
import { SignJWT, jwtVerify } from "jose";

const ADMIN_COOKIE_NAME = "admin_session";

if (!process.env.JWT_SECRET) {
  console.error("[Security] JWT_SECRET environment variable is not set! Admin auth will not work.");
}
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "");

// Initialize default admin on server start
db.initializeDefaultAdmin().catch(console.error);

// Admin session management
async function createAdminToken(adminId: number): Promise<string> {
  return await new SignJWT({ adminId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
}

async function verifyAdminToken(token: string): Promise<number | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload.adminId as number;
  } catch {
    return null;
  }
}

export const appRouter = router({
  system: systemRouter,

  // Admin authentication
  admin: router({
    login: publicProcedure
      .input(z.object({
        username: z.string(),
        password: z.string(),
      }))
      .mutation(async ({ input, ctx }) => {
        const admin = await db.verifyAdmin(input.username, input.password);
        if (!admin) {
          throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid credentials" });
        }

        const token = await createAdminToken(admin.id);
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(ADMIN_COOKIE_NAME, token, {
          ...cookieOptions,
          maxAge: 24 * 60 * 60 * 1000, // 24 hours
        });

        return {
          success: true,
          admin: {
            id: admin.id,
            username: admin.username,
            name: admin.name,
            isSuperAdmin: admin.isSuperAdmin,
          },
        };
      }),

    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(ADMIN_COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    }),

    me: publicProcedure.query(async ({ ctx }) => {
      const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
      if (!token) return null;

      const adminId = await verifyAdminToken(token);
      if (!adminId) return null;

      const admin = await db.getAdminById(adminId);
      if (!admin) return null;

      return {
        id: admin.id,
        username: admin.username,
        name: admin.name,
        isSuperAdmin: admin.isSuperAdmin,
      };
    }),

    createAdmin: publicProcedure
      .input(z.object({
        username: z.string().min(3),
        password: z.string().min(6),
        name: z.string().optional(),
        email: z.string().email().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
        if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

        const adminId = await verifyAdminToken(token);
        if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

        const currentAdmin = await db.getAdminById(adminId);
        if (!currentAdmin?.isSuperAdmin) {
          throw new TRPCError({ code: "FORBIDDEN", message: "Only super admin can create new admins" });
        }

        const existing = await db.getAdminByUsername(input.username);
        if (existing) {
          throw new TRPCError({ code: "CONFLICT", message: "Username already exists" });
        }

        const newAdmin = await db.createAdmin({
          username: input.username,
          password: input.password,
          name: input.name,
          email: input.email,
          isSuperAdmin: false,
        });

        return { success: true, admin: newAdmin };
      }),

    listAdmins: publicProcedure.query(async ({ ctx }) => {
      const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
      if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

      const adminId = await verifyAdminToken(token);
      if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

      const currentAdmin = await db.getAdminById(adminId);
      if (!currentAdmin?.isSuperAdmin) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }

      const adminsList = await db.getAllAdmins();
      return adminsList.map(a => ({
        id: a.id,
        username: a.username,
        name: a.name,
        email: a.email,
        isSuperAdmin: a.isSuperAdmin,
        createdAt: a.createdAt,
        lastSignedIn: a.lastSignedIn,
      }));
    }),

    deleteAdmin: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
        if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

        const adminId = await verifyAdminToken(token);
        if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

        const currentAdmin = await db.getAdminById(adminId);
        if (!currentAdmin?.isSuperAdmin) {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        if (input.id === adminId) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Cannot delete yourself" });
        }

        await db.deleteAdmin(input.id);
        return { success: true };
      }),
  }),

  // Posts (News & Blog)
  posts: router({
    list: publicProcedure
      .input(z.object({
        type: z.enum(["news", "blog"]).optional(),
        publishedOnly: z.boolean().optional().default(true),
      }))
      .query(async ({ input }) => {
        if (input.type) {
          return await db.getPostsByType(input.type, input.publishedOnly);
        }
        return await db.getAllPosts();
      }),

    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await db.getPostBySlug(input.slug);
      }),

    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getPostById(input.id);
      }),

    create: publicProcedure
      .input(z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        excerpt: z.string().optional(),
        featuredImage: z.string().optional(),
        type: z.enum(["news", "blog"]),
        status: z.enum(["draft", "published"]).optional(),
        authorName: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
        if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

        const adminId = await verifyAdminToken(token);
        if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

        const post = await db.createPost({
          ...input,
          authorId: adminId,
        });

        return post;
      }),

    update: publicProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        content: z.string().optional(),
        excerpt: z.string().optional(),
        featuredImage: z.string().optional(),
        status: z.enum(["draft", "published"]).optional(),
        authorName: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
        if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

        const adminId = await verifyAdminToken(token);
        if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

        const { id, ...updateData } = input;
        return await db.updatePost(id, updateData);
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
        if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

        const adminId = await verifyAdminToken(token);
        if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

        await db.deletePost(input.id);
        return { success: true };
      }),
  }),

  // Contact submissions
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        company: z.string().optional(),
        phone: z.string().optional(),
        message: z.string().min(1),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const submission = await db.createContactSubmission(input);

        if (!submission) {
          console.error("[Contact] Failed to save submission to database");
          throw new TRPCError({ 
            code: "INTERNAL_SERVER_ERROR", 
            message: "Failed to save contact submission. Please check database configuration." 
          });
        }

        // Send email notification via Resend (fire-and-forget, don't block the response)
        notifyContactSubmission({
          name: input.name,
          email: input.email,
          company: input.company,
          phone: input.phone,
          source: input.source,
          message: input.message,
        }).catch((err) => {
          console.warn("[Contact] Failed to send email notification:", err);
        });

        return { success: true, id: submission.id };
      }),

    list: publicProcedure.query(async ({ ctx }) => {
      const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
      if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

      const adminId = await verifyAdminToken(token);
      if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

      return await db.getAllContactSubmissions();
    }),

    updateStatus: publicProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "read", "replied", "archived"]),
      }))
      .mutation(async ({ input, ctx }) => {
        const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
        if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

        const adminId = await verifyAdminToken(token);
        if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

        await db.updateContactSubmissionStatus(input.id, input.status);
        return { success: true };
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
        if (!token) throw new TRPCError({ code: "UNAUTHORIZED" });

        const adminId = await verifyAdminToken(token);
        if (!adminId) throw new TRPCError({ code: "UNAUTHORIZED" });

        await db.deleteContactSubmission(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
