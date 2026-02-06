# SOP: Local Development for Illuminious Website (Mac/Linux)

> 本文档为 Mac/Linux 环境的开发指南。原 Windows/WSL 版本见 `SOP-Local-Development.md`

---

## Prerequisites

- macOS 12+ 或 Linux (Ubuntu 20.04+)
- Node.js 22+ installed
- pnpm 10.x installed
- Git configured with SSH or HTTPS access

### Installation

**macOS (using Homebrew):**
```bash
# Install Node.js
brew install node@22

# Install pnpm
npm install -g pnpm

# Verify
node --version  # v22.x.x
pnpm --version  # 10.x.x
```

**Linux (Ubuntu/Debian):**
```bash
# Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Verify
node --version
pnpm --version
```

---

## Project Setup

### Step 1: Clone Repository

```bash
# Using HTTPS (with token for private repos)
git clone https://github.com/tudsds/illuminious.com.git
cd illuminious.com

# Or using SSH (if SSH key configured)
git clone git@github.com:tudsds/illuminious.com.git
cd illuminious.com
```

### Step 2: Configure Git

```bash
# Set user info (if not globally configured)
git config user.email "norma@illuminious.com"
git config user.name "Norma (AI Secretary)"

# Verify remote
git remote -v
# Should show: origin  https://github.com/tudsds/illuminious.com.git (fetch/push)
```

---

## Step 3: Install Dependencies

```bash
# Install all dependencies
pnpm install

# If you see "Ignored build scripts" warning, run:
pnpm install --force
```

---

## Step 4: Start Development Server

```bash
# Start dev server
pnpm dev

# Or with explicit Node environment
NODE_ENV=development pnpm dev
```

Server will start on **http://localhost:3000/** (auto-increments to 3001-3020 if busy)

**Expected output:**
```
Server running at http://localhost:3000
[Vite] Development server ready
```

### Stop Server

Press `Ctrl + C` in terminal

---

## Project Structure

```
illuminious.com/
├── client/                  # Frontend (React + Vite)
│   ├── public/images/       # Static assets
│   └── src/
│       ├── pages/           # Page components
│       │   ├── Home.tsx
│       │   ├── About.tsx
│       │   ├── Services.tsx
│       │   └── services/    # Service sub-pages
│       │       ├── NPI.tsx
│       │       ├── PCBA.tsx
│       │       ├── BoxBuild.tsx
│       │       ├── Injection.tsx
│       │       └── SupplyChain.tsx
│       ├── components/      # Reusable components
│       │   ├── Header.tsx   # Mega menu navigation
│       │   ├── Footer.tsx
│       │   └── SEO.tsx
│       └── index.css        # Brand colors & styles
├── server/                  # Backend (Express + tRPC)
│   ├── _core/
│   │   └── index.ts         # Server entry
│   └── routers.ts           # API routes
├── shared/                  # Shared types
├── drizzle/                 # Database schema
└── docs/                    # Documentation
```

---

## Brand Color System

Defined in `client/src/index.css`:

| Color | Hex | Tailwind Class |
|-------|-----|----------------|
| Navy | `#132843` | `text-illuminious-navy` / `bg-illuminious-navy` |
| Blue | `#3966A2` | `text-illuminious-blue` / `bg-illuminious-blue` |
| Sky | `#6191D3` | `text-illuminious-sky` / `bg-illuminious-sky` |
| Light | `#D6DEEE` | `text-illuminious-light` / `bg-illuminious-light` |

**Text Color Rules:**
- Dark backgrounds → `text-white`
- Light backgrounds → `text-illuminious-navy` (headings) / `text-muted-foreground` (body)

---

## Common Development Tasks

### Edit Text Content

```bash
# Homepage
vim client/src/pages/Home.tsx

# About page
vim client/src/pages/About.tsx

# Services
vim client/src/pages/Services.tsx
```

Content is typically in:
1. **Data arrays at top of file** (e.g., `const features = [...]`)
2. **JSX markup in return statement**

### Change Colors

```tsx
// Before
<p className="text-muted-foreground">Text</p>

// After
<p className="text-white">Text</p>
```

### Add Images

1. Place image in `client/public/images/`
2. Reference as: `src="/images/your-image.png"`

### Add New Page

1. Create `client/src/pages/YourPage.tsx`
2. Add route in `client/src/App.tsx`:
   ```tsx
   import YourPage from "./pages/YourPage";
   <Route path="/your-page" component={YourPage} />
   ```

---

## Build for Production

```bash
# Build
pnpm build

# Output in dist/ directory
ls -la dist/
```

---

## Git Workflow

### Pull Latest

```bash
git checkout main
git pull origin main
```

### Commit Changes

```bash
# Check status
git status

# Stage all changes
git add -A

# Commit with descriptive message
git commit -m "Fix: update contact phone number"
```

### Push to GitHub

```bash
git push origin main
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `pnpm: command not found` | `npm install -g pnpm` |
| `node: not found` | Reinstall Node.js 22+ |
| Port 3000 in use | Server auto-tries 3001-3020 |
| EPERM errors | Check file permissions: `ls -la` |
| Git auth failed | Check remote URL: `git remote -v` |

---

## Quick Reference Commands

```bash
# Full workflow
git pull origin main
pnpm install
pnpm dev
# ... make edits ...
git add -A
git commit -m "Description"
git push origin main

# Available scripts
pnpm dev      # Start dev server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm check    # Type check
```

---

## Environment Variables (Optional)

Create `.env` file for local development:

```bash
# Database (optional - site works without it)
DATABASE_URL=mysql://user:pass@localhost/illuminious
JWT_SECRET=your-secret-key
ADMIN_DEFAULT_PASSWORD=admin123
```

---

*文档创建: 2026-02-06*  
*维护者: Norma (AI Secretary)*
