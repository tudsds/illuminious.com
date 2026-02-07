---
name: illuminious-web
description: Manage and modify the Illuminious LLC website (illuminious.com). Use when the user requests any changes to the website, including page modifications, content updates, style changes, or new feature additions. This skill handles the complete workflow from pulling latest code, checking project status via todo/README, creating checkpoints, making changes, verifying completion, and pushing to main.
---

# Illuminious Website Management

Complete workflow for modifying the Illuminious LLC website.

---

## Project Overview

| 属性 | 详情 |
|------|------|
| **Repository** | `github.com:tudsds/illuminious.com` |
| **Local Path** | `/home/codespace/.openclaw/workspace/illuminious/illuminious.com` |
| **Primary Remote** | `origin` (HTTPS with token) |
| **Branch** | `main` (direct push allowed) |
| **Tech Stack** | React 19 + TypeScript + Tailwind CSS + Express + tRPC |
| **Deployment** | Vercel (auto-deploy on push) |

---

## Required Workflow (ALWAYS FOLLOW)

### Step 1: Pull Latest Code (MANDATORY FIRST STEP)

```bash
cd /home/codespace/.openclaw/workspace/illuminious/illuminious.com
git checkout main
git pull origin main
```

### Step 2: Check Project Status

Read these files to understand current project state:
1. **`todo.md`** - Check ongoing tasks, phases, and checkpoints
2. **`README.md`** - Verify project structure and important notes
3. **`SESSION-STATE.md`** - Review my working memory for context

### Step 3: Analyze Requirements & Create Checkpoints

Based on user's instruction:
1. Identify which page(s) need modification (see Page File Mapping below)
2. Open relevant file(s) to understand current implementation
3. **Add checkpoint(s) to `SESSION-STATE.md`**:

```markdown
## Current Checkpoints
- [ ] [Task description]
```

### Step 4: Make Modifications

1. Edit relevant page file(s) in `client/src/pages/`
2. Update components in `client/src/components/` if needed
3. Modify styles in `client/src/index.css` if needed
4. **Update checkpoints in `SESSION-STATE.md`**:

```markdown
- [x] [Task description] - Completed
```

### Step 5: Verify Build

```bash
cd /home/codespace/.openclaw/workspace/illuminious/illuminious.com
pnpm install
pnpm build
```

**Must pass before push.** If build fails, fix errors first.

### Step 6: Commit & Push to Main

```bash
cd /home/codespace/.openclaw/workspace/illuminious/illuminious.com
git add -A
git commit -m "[type]: [descriptive message]"
git push origin main
```

### Step 7: Report Completion

Provide concise report:
1. Files modified
2. Checkpoints completed
3. Build status
4. Deployment confirmation

---

## Page File Mapping

| URL Path | File Location |
|----------|---------------|
| `/` | `client/src/pages/Home.tsx` |
| `/about` | `client/src/pages/About.tsx` |
| `/services` | `client/src/pages/Services.tsx` |
| `/services/npi-engineering` | `client/src/pages/services/NPI.tsx` |
| `/services/pcb-assembly` | `client/src/pages/services/PCBA.tsx` |
| `/services/box-build` | `client/src/pages/services/BoxBuild.tsx` |
| `/services/injection-molding` | `client/src/pages/services/Injection.tsx` |
| `/services/supply-chain` | `client/src/pages/services/SupplyChain.tsx` |
| `/industries` | `client/src/pages/Industries.tsx` |
| `/industries/iot` | `client/src/pages/industries/IoT.tsx` |
| `/industries/consumer` | `client/src/pages/industries/Consumer.tsx` |
| `/industries/automotive` | `client/src/pages/industries/Automotive.tsx` |
| `/industries/medical` | `client/src/pages/industries/Medical.tsx` |
| `/capabilities` | `client/src/pages/Capabilities.tsx` |
| `/capabilities/quality` | `client/src/pages/capabilities/Quality.tsx` |
| `/capabilities/iot` | `client/src/pages/capabilities/IoTSpecialization.tsx` |
| `/factory-tour` | `client/src/pages/FactoryTour.tsx` |
| `/case-studies` | `client/src/pages/CaseStudies.tsx` |
| `/blog` | `client/src/pages/Blog.tsx` |
| `/news` | `client/src/pages/News.tsx` |
| `/startups` | `client/src/pages/Startups.tsx` |
| `/contact` | `client/src/pages/Contact.tsx` |

---

## Key Components

| Component | File Location | Purpose |
|-----------|---------------|---------|
| Header | `client/src/components/Header.tsx` | Navigation, mega menu |
| Footer | `client/src/components/Footer.tsx` | Footer content, offices |
| SEO | `client/src/components/SEO.tsx` | Meta tags |
| FloatingContact | `client/src/components/FloatingContact.tsx` | Contact button |

---

## Brand Colors Reference

| Color Name | Hex | Tailwind Class |
|------------|-----|----------------|
| Navy | `#132843` | `text-illuminious-navy` / `bg-illuminious-navy` |
| Blue | `#3966A2` | `text-illuminious-blue` / `bg-illuminious-blue` |
| Sky | `#6191D3` | `text-illuminious-sky` / `bg-illuminious-sky` |
| Light | `#D6DEEE` | `text-illuminious-light` / `bg-illuminious-light` |

**Critical Rule**: Dark backgrounds MUST use `text-white`, NOT `text-illuminious-light/XX`.

---

## Known Pitfalls (CRITICAL)

### Pitfall 1: Array Syntax Errors

**Location**: `CaseStudies.tsx`, `News.tsx`, `Blog.tsx`

**Problem**: Missing commas between array elements cause build failures.

```typescript
// WRONG - Missing comma
{
  id: "case-1",
  // ...
}
{
  id: "case-2",  // ERROR: Expected "]" but found "{"
}

// RIGHT
{
  id: "case-1",
  // ...
},
{
  id: "case-2",
  // ...
}
```

**Prevention**:
- Always add comma after `}` (except last element)
- Run `pnpm build` locally before push
- Never place HTML tags after template literal closing backtick

### Pitfall 2: wouter Routing

```typescript
// WRONG
import { Link } from "react-router-dom";
<Link to="/about">

// RIGHT
import { Link, useLocation } from "wouter";
<Link href="/about">
```

### Pitfall 3: Custom Tailwind Classes

Custom classes (`text-illuminious-navy`, etc.) are defined in `client/src/index.css`. Standard Tailwind classes work normally.

### Pitfall 4: Legacy Service Pages

`services/` directory contains 11 unused files (DFM, EMS, ODM, etc.). Only 5 are active: NPI, PCBA, BoxBuild, Injection, SupplyChain.

### Pitfall 5: Image Path

Images must go in `client/public/images/`. Reference as `/images/filename.png` (not `client/public/`).

### Pitfall 6: Database Optional

Server works without database. Console warnings about DB connection are harmless.

---

## Common Tasks

### Changing Text Content

1. Identify page from URL mapping
2. Look for data arrays at TOP of file
3. Modify text in array or JSX

### Changing Colors

1. Find element's `className`
2. Replace with appropriate brand color class
3. Ensure contrast matches background

### Adding New Page

1. Create file in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add to Header `navItems` if needed
4. Add to Footer `footerLinks` if needed

---

## Creating Content

### Blog Posts

**Structure:**
```typescript
{
  id: [number],
  slug: "[url-slug]",
  title: "[8-12 words]",
  excerpt: "[20-30 words]",
  content: `[HTML content]`,
  publishedAt: new Date("YYYY-MM-DD"),
  readTime: [minutes],
  authorName: "Illuminious Team",
  featuredImage: "/images/[filename].jpg",
  category: "[Industry Insights|Technical|Startup Guide|Supply Chain]",
}
```

**Templates:**
- Lead intro: `<div class="lead-text">`
- Feature grid: `<div class="feature-grid">`
- Benefits grid: `<div class="benefits-grid">`
- Highlight box: `<div class="highlight-box">`
- Conclusion: `<div class="conclusion-box">`

**Image Acquisition:**
```bash
curl -o client/public/images/[filename].jpg "https://images.unsplash.com/photo-[ID]?w=1200&q=80"
```

### News Articles

**Structure:** Similar to blog, but:
- More concise (400-800 words)
- Categories: Company News, Industry Updates, Events, Partnerships
- Include 5 W's in first 2 paragraphs

### Case Studies

**Structure:**
```typescript
{
  id: "[unique-id]",
  slug: "[url-slug]",
  title: "[Result-focused]",
  industry: "[Sector]",
  challenge: "[2-3 sentences]",
  solution: "[2-3 sentences]",
  results: [
    { metric: "[Name]", value: "[Result]", description: "[Details]" },
  ],
  content: `[HTML]`,
  image: "/images/[filename].jpg",
  tags: ["[Tag1]", "[Tag2]"],
  testimonial: "[Quote]",
}
```

**Required:** 3+ quantified results, customer testimonial, technical details.

---

## Completion Report Format

After task completion, report:

```
**任务完成。** ✅

## 执行摘要

| 项目 | 详情 |
|------|------|
| **修改文件** | [file1], [file2] |
| **Commit** | [hash] |
| **构建状态** | ✅ 通过 |
| **部署状态** | Vercel 自动部署中 |

## 变更内容
- [Brief description]

等待下一步指令。📋
```

---

## Critical Reminders

- **ALWAYS pull first** before making changes
- **ALWAYS read todo.md and README.md** before starting
- **ALWAYS run pnpm build** before push
- **ALWAYS update SESSION-STATE.md** with checkpoints
- **Push directly to main** - no feature branches
- **Use text-white on dark backgrounds** - never light gray
- **Add commas between array elements** - prevent build failures

---

*Skill version: 2.0 (Norma Edition)*  
*Last updated: 2026-02-06*  
*Environment: Codespace/Linux*
