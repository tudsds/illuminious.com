# Illuminious Website — Vercel Migration Plan

## Executive Summary

Migrate the Illuminious LLC website from the Manus AI development platform to **Vercel**, replacing all Manus-proprietary dependencies with open, self-owned services:

| Concern | Current (Manus) | Target (Vercel) |
|---------|-----------------|-----------------|
| Hosting | Manus `.manus.space` | Vercel |
| Database | MySQL/TiDB (Manus-managed) | **Turso (LibSQL)** |
| Email Notifications | Manus Forge Notification API | **Resend** |
| File Storage | Manus Forge S3 Proxy | Vercel Blob _or_ remove (static images only) |
| Google Maps | Manus Forge Maps Proxy | Direct Google Maps JS API |
| OAuth / User Auth | Manus OAuth SDK | Remove (not needed for marketing site) |
| AI Services | Manus Forge LLM / Image Gen | Remove (not needed in production) |
| Vite Plugin | `vite-plugin-manus-runtime` | Remove |

---

## Environment Variables (Vercel Dashboard)

The following environment variables must be configured in the Vercel project settings. **Do NOT commit secrets to the repository.**

### Required

| Variable | Description |
|----------|-------------|
| `TURSO_DATABASE_URL` | Turso LibSQL connection URL |
| `TURSO_AUTH_TOKEN` | Turso authentication token |
| `RESEND_API_KEY` | Resend API key for email sending |
| `RESEND_FROM_EMAIL` | Sender email address (e.g. `info@illuminious.com`) |
| `JWT_SECRET` | Strong random secret for admin session tokens (generate with `openssl rand -hex 32`) |
| `NODE_ENV` | `production` |

### Removed (Manus-specific, no longer needed)

| Variable | Reason |
|----------|--------|
| `VITE_APP_ID` | Manus platform identifier |
| `OAUTH_SERVER_URL` | Manus OAuth server |
| `OWNER_OPEN_ID` | Manus user identifier |
| `BUILT_IN_FORGE_API_URL` | Manus Forge API gateway |
| `BUILT_IN_FORGE_API_KEY` | Manus Forge API key |
| `VITE_FRONTEND_FORGE_API_KEY` | Manus Forge frontend key |
| `VITE_FRONTEND_FORGE_API_URL` | Manus Forge frontend URL |

---

## Manus "Backhands" Audit

A full audit of all Manus integrations that create vendor lock-in:

### 1. Manus Forge API (Backend Gateway)

All backend services route through `forge.butterfly-effect.dev`, Manus's proprietary API gateway. If Manus goes down or revokes access, the following break:

| Service | File | Impact |
|---------|------|--------|
| File Storage (S3 Proxy) | `server/storage.ts` | Image uploads fail |
| Google Maps Proxy | `server/_core/map.ts` | Maps on Contact page break |
| Image Generation | `server/_core/imageGeneration.ts` | AI image gen unavailable |
| Data API | `server/_core/dataApi.ts` | Generic data wrapper fails |
| Notifications | `server/_core/notification.ts` | Owner notifications stop |
| LLM | `server/_core/llm.ts` | AI chat features break |

### 2. Manus OAuth (Authentication Lock-in)

| File | What it does |
|------|-------------|
| `server/_core/sdk.ts` | Manus SDK integration for auth |
| `server/_core/oauth.ts` | OAuth callback handler for Manus OAuth server |
| `server/_core/context.ts` | Authenticates every tRPC request via Manus SDK |
| `server/_core/cookies.ts` | Session cookie management tied to Manus |

The entire user authentication system depends on Manus's OAuth server. If that server is unavailable, no users can log in.

### 3. Manus Vite Plugin (Frontend Runtime)

| File | What it does |
|------|-------------|
| `vite.config.ts` | Loads `vite-plugin-manus-runtime` into build pipeline |
| `package.json` | Lists `vite-plugin-manus-runtime` as dev dependency |

This plugin injects Manus runtime code into the frontend build. It is not needed outside the Manus platform.

### 4. Manus Frontend Map Proxy

| File | What it does |
|------|-------------|
| `client/src/components/Map.tsx` | Loads Google Maps JS from `forge.butterfly-effect.dev/v1/maps/proxy` instead of Google's CDN |

### 5. Manus Platform Metadata

| Path | What it is |
|------|-----------|
| `.manus/` | Manus DB query logs |
| `.claw/` | Manus AI agent skill files |
| `client/src/components/ManusDialog.tsx` | "Login with Manus" dialog component |

### 6. Allowed Hosts Lock-in

`vite.config.ts` restricts dev server access to `*.manus.computer`, `*.manuscomputer.ai`, etc.

### 7. Security Issues Left by Manus

| Issue | File | Severity |
|-------|------|----------|
| `bypassAuth = true` — anyone can create/edit/delete posts | `server/routers.ts:225,257,275,297` | CRITICAL |
| Hardcoded admin password `Djpcs17529#` in source code | `server/db.ts:340`, `README.md:165` | CRITICAL |
| Weak JWT secret fallback `"illuminious-admin-secret-key"` | `server/routers.ts:13` | HIGH |
| No rate limiting on public endpoints | `server/_core/index.ts` | MEDIUM |

---

## Migration Phases

### Phase 1: Database — MySQL/TiDB to Turso (LibSQL)

Turso uses LibSQL (a fork of SQLite), which is serverless-friendly and works with Vercel edge functions.

#### Files to Modify

| File | Change |
|------|--------|
| `drizzle/schema.ts` | Rewrite from `drizzle-orm/mysql-core` to `drizzle-orm/sqlite-core`. Replace `mysqlTable` → `sqliteTable`, `mysqlEnum` → `text` with check constraints, `int().autoincrement()` → `integer().primaryKey({ autoIncrement: true })`, `timestamp` → `text` (ISO strings) or `integer` (unix epoch), `boolean` → `integer({ mode: 'boolean' })`, remove `onUpdateNow()` |
| `drizzle.config.ts` | Change `dialect: "mysql"` → `dialect: "turso"`, update `dbCredentials` to `{ url: process.env.TURSO_DATABASE_URL, authToken: process.env.TURSO_AUTH_TOKEN }` |
| `server/db.ts` | Replace `drizzle-orm/mysql2` import with `drizzle-orm/libsql`. Replace `drizzle(process.env.DATABASE_URL)` with `drizzle({ connection: { url: process.env.TURSO_DATABASE_URL, authToken: process.env.TURSO_AUTH_TOKEN } })`. Replace `onDuplicateKeyUpdate` with LibSQL-compatible upsert (`onConflictDoUpdate`). |
| `server/_core/env.ts` | Replace `databaseUrl` with `tursoUrl` and `tursoAuthToken` |
| `package.json` | Remove `mysql2`. Add `@libsql/client`. |
| `drizzle/migrations/*` | Delete all existing MySQL migrations. Regenerate for SQLite after schema rewrite. |

#### Schema Translation Reference

| MySQL (current) | SQLite/Turso (target) |
|-----------------|----------------------|
| `int("id").autoincrement().primaryKey()` | `integer("id", { mode: "number" }).primaryKey({ autoIncrement: true })` |
| `varchar("field", { length: N })` | `text("field")` |
| `text("field")` | `text("field")` |
| `mysqlEnum("field", [...])` | `text("field")` (validate in app code or use Zod) |
| `timestamp("field").defaultNow()` | `text("field").default(sql\`(datetime('now'))\`)` |
| `timestamp("field").defaultNow().onUpdateNow()` | `text("field").default(sql\`(datetime('now'))\`)` (handle `updatedAt` in app code) |
| `boolean("field")` | `integer("field", { mode: "boolean" })` |
| `json("field")` | `text("field", { mode: "json" })` |
| `.onDuplicateKeyUpdate(...)` | `.onConflictDoUpdate(...)` |

### Phase 2: Email Notifications — Manus → Resend

Replace Manus's notification service with Resend for contact form email alerts.

#### Files to Modify

| File | Change |
|------|--------|
| `server/_core/notification.ts` | **Rewrite entirely.** Replace Manus Forge notification call with Resend API. Send HTML email to `info@illuminious.com` when contact form is submitted. |
| `server/routers.ts` (contact.submit) | After `db.createContactSubmission(input)`, call the new Resend notification function to email the form data. |
| `package.json` | Add `resend` package. |
| `server/_core/env.ts` | Add `resendApiKey` and `resendFromEmail` variables. |

#### Email Template Specification

When a contact form is submitted, send an HTML email with:

- **To:** `info@illuminious.com`
- **From:** `info@illuminious.com` (via Resend)
- **Subject:** `New Contact Form Submission from [Name]`
- **Body (HTML):** Professional template containing:
  - Submitter's **name**
  - Submitter's **email** (as clickable mailto link)
  - **Company** (if provided)
  - **Phone** (if provided)
  - **Source** page (which page the form was submitted from)
  - **Message** (full text)
  - Timestamp of submission

### Phase 3: Remove All Manus Dependencies

#### Files to Delete

| File/Directory | Reason |
|----------------|--------|
| `.manus/` | Manus platform metadata |
| `.claw/` | Manus AI agent skill files |
| `client/src/components/ManusDialog.tsx` | Manus login dialog |
| `client/src/components/AIChatBox.tsx` | Unused AI chat component |
| `server/_core/sdk.ts` | Manus SDK integration |
| `server/_core/oauth.ts` | Manus OAuth handler |
| `server/_core/imageGeneration.ts` | Manus image generation service |
| `server/_core/dataApi.ts` | Manus data API wrapper |
| `server/_core/llm.ts` | Manus LLM integration |
| `server/_core/voiceTranscription.ts` | Unused voice transcription |
| `client/src/pages/ComponentShowcase.tsx` | Development artifact |
| `docs/SOP-AI-Agent-Complete-Guide.md` | Manus-specific AI workflow doc |

#### Files to Modify

| File | Change |
|------|--------|
| `vite.config.ts` | Remove `vite-plugin-manus-runtime` import and plugin. Remove Manus `allowedHosts`. |
| `package.json` | Remove deps: `vite-plugin-manus-runtime`, `@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`, `mysql2`. Add deps: `@libsql/client`, `resend`. |
| `server/_core/context.ts` | Remove Manus SDK auth. Simplify to pass `req`/`res` only (admin auth uses JWT cookies already). |
| `server/_core/env.ts` | Remove all Manus env vars (`appId`, `oAuthServerUrl`, `ownerOpenId`, `forgeApiUrl`, `forgeApiKey`). Add Turso and Resend vars. |
| `server/_core/index.ts` | Remove `registerOAuthRoutes(app)` call. Remove OAuth import. |
| `server/routers.ts` | Remove `auth` router (Manus OAuth). Remove `storagePut` import. Remove `uploadImage` endpoint or rework for local/Vercel Blob storage. |
| `server/storage.ts` | Either delete (if image uploads not needed) or replace with Vercel Blob storage. |
| `client/src/components/Map.tsx` | Replace Manus Forge Maps proxy URL with direct Google Maps JavaScript API loading from `maps.googleapis.com`. Requires a `VITE_GOOGLE_MAPS_API_KEY` env var. |
| `client/index.html` | Remove any Manus-specific scripts or meta tags if present. Clean up Umami analytics placeholder if not using. |
| `shared/const.ts` | Review for Manus-specific constants. |

### Phase 4: Security Fixes

| Fix | File | Detail |
|-----|------|--------|
| Remove auth bypass | `server/routers.ts` | Set `bypassAuth = false` or remove the bypass pattern entirely. Enforce admin JWT check on `posts.create`, `posts.update`, `posts.delete`, `posts.uploadImage`. |
| Remove hardcoded password | `server/db.ts` | Read initial admin password from `ADMIN_DEFAULT_PASSWORD` env var. Remove the plaintext password from source code. |
| Remove hardcoded password from docs | `README.md`, `todo.md` | Remove all password references. |
| Remove JWT secret fallback | `server/routers.ts` | Change to `process.env.JWT_SECRET` with a startup check that throws if not set. No fallback. |
| Add rate limiting | `server/_core/index.ts` | Add `express-rate-limit` middleware on `/api/trpc` for `contact.submit` (e.g. 5 requests per 15 min per IP). |

### Phase 5: Vercel Deployment Configuration

#### New Files to Create

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel project configuration |
| `api/trpc/[trpc].ts` | Vercel serverless function for tRPC (if using serverless approach) |
| `.env.example` | Document required environment variables (no secrets) |

#### `vercel.json` Configuration

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/public",
  "framework": null,
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

**Note:** The exact configuration depends on the deployment approach chosen:

- **Option A — Serverless Functions (Recommended for Vercel):** Split the Express server into individual `/api/*.ts` serverless functions. tRPC supports Vercel's `@trpc/server/adapters/fetch` adapter natively. The frontend is served as static files.
- **Option B — Custom Express Server:** Use `@vercel/node` to run the full Express app. Simpler migration but less Vercel-native (no edge functions, cold starts).

**Recommendation:** Option A — Serverless. The tRPC fetch adapter is lightweight and Vercel-native. The frontend already builds to static files via Vite.

#### Server Restructuring for Serverless (Option A)

| Current | Target |
|---------|--------|
| `server/_core/index.ts` (Express monolith) | `api/trpc/[trpc].ts` (Vercel serverless tRPC handler) |
| Express middleware (`express.json`, etc.) | Not needed (Vercel handles body parsing) |
| `server/_core/vite.ts` (dev server) | Not needed (Vercel handles static serving) |
| Port scanning logic | Not needed (Vercel manages infrastructure) |

The `api/trpc/[trpc].ts` file would:
1. Import the `appRouter` and `createContext`
2. Use `@trpc/server/adapters/fetch` or `@trpc/server/adapters/standalone`
3. Export a Vercel-compatible handler

### Phase 6: Frontend Cleanup

| File | Change |
|------|--------|
| `client/src/App.tsx` | Remove routes for deleted pages (ComponentShowcase, etc.). Verify all remaining routes work. |
| `client/src/components/Header.tsx` | Remove any Manus-related nav items or admin gear icon if it links to Manus features. |
| `client/src/components/Footer.tsx` | No changes expected. |
| `client/src/components/FloatingContact.tsx` | No changes expected (uses tRPC contact.submit). |
| `client/src/pages/News.tsx`, `Blog.tsx` | These consume tRPC `posts.list` — will work as-is after backend migration. |
| `client/src/pages/Contact.tsx` | Uses tRPC `contact.submit` — will work as-is. |

### Phase 7: Build & Testing

| Step | Command / Action |
|------|-----------------|
| Install new dependencies | `pnpm install` |
| Generate Turso migrations | `pnpm db:push` (after schema rewrite) |
| Verify DB connection | Test against Turso instance |
| Local build test | `pnpm build` — ensure no Manus imports remain |
| Type check | `pnpm check` — fix all TypeScript errors |
| Test tRPC endpoints | Verify contact form, posts CRUD, admin auth |
| Test Resend integration | Submit contact form → verify email arrives at `info@illuminious.com` |
| Deploy to Vercel | Connect GitHub repo → set env vars → deploy |
| Verify production | Test all pages, forms, and admin portal on Vercel URL |

---

## Recommended Execution Order

```
1. Phase 3 — Remove Manus dependencies (clean slate)
2. Phase 1 — Database migration (MySQL → Turso)
3. Phase 2 — Email notifications (Manus → Resend)
4. Phase 4 — Security fixes
5. Phase 5 — Vercel deployment configuration
6. Phase 6 — Frontend cleanup
7. Phase 7 — Build, test, deploy
```

Phase 3 goes first because removing Manus code simplifies every subsequent step — you're not working around dead imports.

---

## Files Summary: Complete Change Inventory

### Files to DELETE (13)

```
.manus/                                      (directory)
.claw/                                       (directory)
client/src/components/ManusDialog.tsx
client/src/components/AIChatBox.tsx
server/_core/sdk.ts
server/_core/oauth.ts
server/_core/imageGeneration.ts
server/_core/dataApi.ts
server/_core/llm.ts
server/_core/voiceTranscription.ts
client/src/pages/ComponentShowcase.tsx
drizzle/migrations/                          (regenerate after schema rewrite)
drizzle/meta/                                (regenerate after schema rewrite)
```

### Files to REWRITE (6)

```
drizzle/schema.ts                            (MySQL → SQLite types)
drizzle.config.ts                            (MySQL → Turso dialect)
server/db.ts                                 (mysql2 → libsql driver, upsert syntax)
server/_core/notification.ts                 (Manus Forge → Resend email)
server/_core/env.ts                          (replace all env vars)
server/storage.ts                            (Manus Forge → remove or Vercel Blob)
```

### Files to MODIFY (9)

```
vite.config.ts                               (remove Manus plugin + hosts)
package.json                                 (swap dependencies)
server/_core/index.ts                        (remove OAuth, restructure for Vercel)
server/_core/context.ts                      (remove Manus SDK auth)
server/routers.ts                            (fix security, remove Manus auth, add Resend call)
client/src/components/Map.tsx                (direct Google Maps API)
client/src/App.tsx                           (remove dead routes)
README.md                                    (update for Vercel deployment)
todo.md                                      (remove hardcoded password)
```

### Files to CREATE (3)

```
vercel.json                                  (Vercel configuration)
api/trpc/[trpc].ts                           (serverless tRPC handler)
.env.example                                 (document required env vars)
```

### Dependencies to REMOVE (from package.json)

```
vite-plugin-manus-runtime
@aws-sdk/client-s3
@aws-sdk/s3-request-presigner
mysql2
streamdown                                   (used only in AIChatBox)
```

### Dependencies to ADD (to package.json)

```
@libsql/client                               (Turso/LibSQL driver)
resend                                       (email service)
express-rate-limit                           (API rate limiting)
```
