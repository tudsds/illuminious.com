---
name: illuminious-web
description: Manage and modify the Illuminious LLC website (illuminious.com). Use when the user wants to modify the website, update content, fix UI issues, add pages, or deploy changes. Triggers on requests like "修改网站", "update the website", "change color", "add page", or any mention of "illuminious" combined with web development tasks.
---

# Illuminious Website Development

## Overview

This skill provides the standard operating procedure (SOP) for modifying the Illuminious website, a React-based electronics manufacturing company site.

**Project Info:**
- Repository: https://github.com/tudsds/illuminious-web
- Local Path: `/mnt/d/web3/illuminious-web`
- Live Site: https://illuminious.com
- Tech Stack: React 19, TypeScript, Tailwind CSS 4, Express 4, tRPC 11

## Standard Operating Procedure (SOP)

### Phase 1: Pre-Modification Analysis

**MUST execute before any code changes:**

1. **Sync Latest Code**
   ```bash
   cd /mnt/d/web3/illuminious-web
   git config core.sshCommand "ssh -i /home/jamesg27/.ssh/id_ed25519"
   git checkout main
   git pull origin main
   ```

2. **Analyze Project State**
   - Read `README.md` for project overview
   - Read `todo.md` for current task status
   - Check recent commits: `git log --oneline -10`
   - Load `references/project-memory.md` for context

### Phase 2: Modification

1. **Locate Target Files**
   ```bash
   find /mnt/d/web3/illuminious-web -type f \( -name "*.tsx" -o -name "*.ts" \) | xargs grep -l "search-term"
   ```

2. **Make Changes**
   - Use `read` tool to view files
   - Use `edit` tool for precise modifications
   - Follow existing code style
   - Use brand colors (see [references/project-memory.md](references/project-memory.md))

### Phase 3: Commit & Push

```bash
git config user.email "james@illuminious.com"
git config user.name "James"
git add <files>
git commit -m "descriptive message"
git push origin main
```

### Phase 4: Local Preview

```bash
pnpm install
pnpm dev
# Access at http://localhost:3000
```

### Phase 5: Report

Send Telegram notification with:
- Summary of changes
- Commit hash
- Preview URL
- Any issues or next steps

## Quick Reference

### Brand Colors
| Color | Hex | Tailwind Class |
|-------|-----|----------------|
| Navy | #132843 | `text-illuminious-navy`, `bg-illuminious-navy` |
| Blue | #3966A2 | `text-illuminious-blue`, `bg-illuminious-blue` |
| Sky | #6191D3 | `text-illuminious-sky`, `bg-illuminious-sky` |
| Light | #D6DEEE | `bg-illuminious-light` |
| White | #F8F6F6 | `text-white` |

### Page Locations
- Home: `client/src/pages/Home.tsx`
- About: `client/src/pages/About.tsx`
- Services: `client/src/pages/Services.tsx`
- Contact: `client/src/pages/Contact.tsx`
- Startups: `client/src/pages/Startups.tsx`
- Service subpages: `client/src/pages/services/*.tsx`

### Common Tasks
| Task | Command/File |
|------|--------------|
| Find text in files | `find ... | xargs grep -l "text"` |
| Change colors | Edit Tailwind classes in .tsx files |
| Add new page | Create in `client/src/pages/`, add route in `App.tsx` |
| Start dev server | `pnpm dev` (http://localhost:3000) |

## Constraints

1. **Never modify other apps** (Google Drive, MATLAB, etc.)
2. **Always pull before modifying**
3. **Test locally before reporting completion**
4. **Use WSL for git operations**
5. **Report via Telegram after each task**

## Resources

- **Project Details**: [references/project-memory.md](references/project-memory.md)
- **Pending Tasks**: Check `todo.md` in project root
- **Tech Docs**: Check `README.md` in project root
