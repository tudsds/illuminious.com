import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 */
export const users = sqliteTable("users", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  openId: text("openId").notNull().unique(),
  name: text("name"),
  email: text("email"),
  loginMethod: text("loginMethod"),
  role: text("role").notNull().default("user"),
  createdAt: text("createdAt").notNull().default(sql`(datetime('now'))`),
  updatedAt: text("updatedAt").notNull().default(sql`(datetime('now'))`),
  lastSignedIn: text("lastSignedIn").notNull().default(sql`(datetime('now'))`),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Admin accounts for CMS access
 * Separate from OAuth users - uses username/password authentication
 */
export const admins = sqliteTable("admins", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  passwordHash: text("passwordHash").notNull(),
  name: text("name"),
  email: text("email"),
  isSuperAdmin: integer("isSuperAdmin", { mode: "boolean" }).notNull().default(false),
  createdAt: text("createdAt").notNull().default(sql`(datetime('now'))`),
  updatedAt: text("updatedAt").notNull().default(sql`(datetime('now'))`),
  lastSignedIn: text("lastSignedIn"),
});

export type Admin = typeof admins.$inferSelect;
export type InsertAdmin = typeof admins.$inferInsert;

/**
 * Posts table for News and Blog content
 * Supports rich content with images, videos, and links
 */
export const posts = sqliteTable("posts", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  featuredImage: text("featuredImage"),
  type: text("type").notNull(), // "news" | "blog"
  tags: text("tags", { mode: "json" }).$type<string[]>(),
  category: text("category"),
  status: text("status").notNull().default("draft"), // "draft" | "published"
  authorName: text("authorName"),
  authorId: integer("authorId", { mode: "number" }),
  readTime: integer("readTime", { mode: "number" }),
  publishedAt: text("publishedAt"),
  createdAt: text("createdAt").notNull().default(sql`(datetime('now'))`),
  updatedAt: text("updatedAt").notNull().default(sql`(datetime('now'))`),
});

export type Post = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;

/**
 * Contact form submissions / Inquiries
 */
export const contactSubmissions = sqliteTable("contact_submissions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  message: text("message").notNull(),
  source: text("source"),
  status: text("status").notNull().default("new"), // "new" | "read" | "replied" | "archived"
  adminNotes: text("adminNotes"),
  handledBy: integer("handledBy", { mode: "number" }),
  createdAt: text("createdAt").notNull().default(sql`(datetime('now'))`),
  updatedAt: text("updatedAt").notNull().default(sql`(datetime('now'))`),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;
