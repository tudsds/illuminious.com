# Illuminious Website

A professional, enterprise-grade website for **Illuminious LLC**, a US-based global electronics manufacturing and supply chain provider specializing in EMS, OEM, ODM, NPI, PCB assembly, and comprehensive hardware development solutions.

## 🎯 Overview

Illuminious.com serves as the primary digital platform for showcasing our end-to-end electronics manufacturing capabilities to hardware startups, established enterprises, and B2B clients worldwide. The website features a modern, professional design aesthetic with smooth animations and comprehensive SEO optimization for maximum online visibility.

### ✨ Key Features

- **Comprehensive Service Portfolio**: 22+ dedicated service pages covering the complete hardware development lifecycle
- **Industry Solutions**: Specialized pages for IoT, Consumer Electronics, Automotive, Medical Devices, Industrial Equipment, and Telecommunications
- **Content Marketing**: Blog system with Markdown support for technical articles and industry insights
- **Case Studies & News**: Dynamic content showcase for client success stories and company updates
- **SEO & Analytics**: Full integration with GTM, GA4, Meta Pixel, and comprehensive on-page SEO
- **Virtual Pageview Tracking**: Automated SPA route tracking for accurate analytics on all pages
- **Mobile-First Design**: Fully responsive across all device types and screen sizes
- **Cross-Platform Compatibility**: SVG-based flag icons for consistent rendering across all operating systems
- **Floating Contact Widget**: Smart contact form that adapts to page themes
- **Performance Optimized**: Fast loading times with optimized images and code splitting

## 🚀 Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2 | UI framework |
| TypeScript | 5.9 | Type safety |
| Tailwind CSS | 4.1 | Styling framework |
| wouter | 3.3 | Lightweight routing |
| Framer Motion | 12.23 | Animations |
| Lucide React | 0.453 | Icon system |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Express | 4.21 | Server framework |
| tRPC | 11.6 | Type-safe API |
| Drizzle ORM | 0.44 | Database ORM |
| Turso (LibSQL) | Latest | Database |
| Zod | 4.1 | Schema validation |

### Build & Development
| Technology | Version | Purpose |
|------------|---------|---------|
| Vite | 7.1 | Build tool |
| esbuild | 0.25 | Bundler |
| tsx | 4.19 | TypeScript execution |
| pnpm | 10.28 | Package manager |

### Deployment & Hosting
- **Platform**: Vercel (auto-deploy from GitHub)
- **Domain**: illuminious.com
- **CDN**: Vercel Edge Network

## 📁 Project Structure

```
illuminious.com/
├── client/                      # Frontend React application
│   ├── public/
│   │   ├── images/             # All website images (400+ assets)
│   │   │   ├── flags/          # SVG country flags
│   │   │   └── *.jpg           # Service, industry, case study images
│   │   ├── sitemap.xml         # SEO sitemap
│   │   └── robots.txt          # Search engine directives
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── Header.tsx     # Main navigation
│   │   │   ├── Footer.tsx     # Site footer with contact info
│   │   │   ├── FloatingContact.tsx  # Smart contact widget
│   │   │   ├── FlagIcon.tsx   # Cross-platform flag renderer
│   │   │   └── SEO.tsx        # Per-page SEO component
│   │   ├── pages/             # Page components
│   │   │   ├── services/      # 22 service pages
│   │   │   ├── industries/    # 6 industry pages
│   │   │   ├── capabilities/  # Capabilities pages
│   │   │   ├── blog_posts/    # Markdown blog content
│   │   │   ├── Home.tsx       # Homepage
│   │   │   ├── About.tsx      # Company overview
│   │   │   ├── Services.tsx   # Services overview
│   │   │   ├── Blog.tsx       # Blog listing
│   │   │   ├── News.tsx       # News listing
│   │   │   ├── CaseStudies.tsx # Case studies listing
│   │   │   ├── Startups.tsx   # Cyberpunk-themed startups program
│   │   │   └── Contact.tsx    # Contact page with form
│   │   ├── hooks/             # Custom React hooks
│   │   ├── contexts/          # React context providers
│   │   ├── lib/               # Utilities and helpers
│   │   ├── App.tsx            # Main app with routing & analytics
│   │   ├── index.css          # Global styles & Tailwind config
│   │   └── main.tsx           # React entry point
│   └── index.html             # HTML template with GTM & Meta tags
├── server/                     # Backend Express/tRPC server
│   ├── _core/                 # Server infrastructure
│   ├── routers.ts             # tRPC API routes
│   └── db.ts                  # Database queries
├── drizzle/                   # Database schema
│   └── schema.ts              # Table definitions
├── shared/                    # Shared types between client/server
├── docs/                      # Documentation
│   ├── SOP-AI-Agent-Complete-Guide.md
│   ├── Content-Writing-Guide-Blog.md
│   ├── Content-Writing-Guide-News.md
│   └── Content-Writing-Guide-Case-Studies.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Brand Identity

### Primary Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| **Navy** | `#132843` | Primary dark, headers, footers |
| **Blue** | `#3966A2` | Brand color, CTAs, links |
| **Sky** | `#6191D3` | Accents, hover states |
| **Light** | `#D6DEEE` | Backgrounds, borders |
| **White** | `#F8F6F6` | Text on dark backgrounds |

### Cyberpunk Theme (Startups Program)
| Color | Hex | Usage |
|-------|-----|-------|
| **Black** | `#0a0a0f` | Background |
| **Cyan** | `#00D4FF` | Primary accent |
| **Purple** | `#8B5CF6` | Secondary accent |
| **Pink** | `#FF00FF` | Highlights & glows |

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: 18.0.0 or higher
- **pnpm**: 10.0.0 or higher (recommended)
- **Git**: Latest version

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tudsds/illuminious.com.git
   cd illuminious.com
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and fill in required values:
   - `TURSO_DATABASE_URL` - Your Turso database URL
   - `TURSO_AUTH_TOKEN` - Turso authentication token
   - `RESEND_API_KEY` - Resend API key for contact forms
   - `JWT_SECRET` - Secret for admin session tokens
   - `ADMIN_DEFAULT_PASSWORD` - Initial admin password

4. **Initialize database**
   ```bash
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open browser**
   Navigate to `http://localhost:3000`

## 📄 Site Pages

### Core Pages (7)
- **/** - Homepage with hero, services overview, stats
- **/about** - Company story, timeline, capabilities
- **/services** - Services overview with 22+ sub-pages
- **/contact** - Contact form with GTM tracking
- **/startups** - Cyberpunk-themed startups program
- **/privacy** - Privacy policy
- **/terms** - Terms of service

### Service Pages (22)
1. NPI Engineering
2. PCB Assembly (PCBA)
3. SMT Assembly
4. Through-Hole Assembly
5. Testing & Inspection
6. Box Build Assembly
7. Injection Molding
8. Supply Chain Management
9. Design for Manufacturing (DFM)
10. US Fulfillment
11. Original Design Manufacturing (ODM)
12. Electronics Manufacturing Services (EMS)
13. Original Equipment Manufacturing (OEM)
14. Rapid Prototyping
15. PCB Design
16. Component Sourcing
17. Quality Control
18. Logistics
19. Packaging
20. Testing
21. Molding
22. Assembly

### Industry Pages (6)
1. IoT Devices
2. Consumer Electronics
3. Automotive
4. Medical Devices
5. Industrial Equipment
6. Telecommunications

### Content Pages (3)
- **/blog** - Technical articles and industry insights
- **/news** - Company news and announcements
- **/case-studies** - Client success stories

## ✏️ Content Management

### Blog Posts
Blog content is stored as Markdown files in `client/src/pages/blog_posts/`:
- `sustainable-manufacturing-2026.md`
- `choosing-right-manufacturing-partner.md`
- `dfm-guide-for-startups.md`
- `iot-device-manufacturing-guide.md`
- `pcba-testing-methods.md`
- `supply-chain-diversification-strategy.md`

To add a new blog post:
1. Create a new `.md` file in `client/src/pages/blog_posts/`
2. Update `Blog.tsx` to include the new post in the `blogPosts` array
3. Add the new route to `sitemap.xml`

### Editing Page Content
Most content is in React components under `client/src/pages/`. To edit:

**Text Content**: Look for JSX/HTML in the component files
**Images**: Replace files in `client/public/images/` (keep same filename or update path)
**Service Details**: Edit the component arrays (features, benefits, process, faqs)

### Contact Information
Update in the following files:
- `client/src/components/Footer.tsx` - Footer contact details
- `client/src/pages/Contact.tsx` - Contact page
- `client/src/components/FloatingContact.tsx` - Floating widget

## 🎯 SEO & Analytics

### Tracking Integration
All tracking codes are configured in `client/index.html`:

| Service | ID | Status |
|---------|-------|--------|
| **Google Tag Manager** | GTM-TV3WNHSZ | ✅ Active |
| **Google Analytics 4** | G-8903WGE2L3 | ✅ Active |
| **Meta Pixel** | 1480233550376270 | ✅ Active |
| **Google Search Console** | - | ⚠️ Pending verification |

### Virtual Pageview Tracking
The website implements automated SPA (Single Page Application) route tracking in `App.tsx`:
- **GTM**: `virtual_page_view` event pushed to dataLayer on every route change
- **GA4**: `page_view` event with path, title, and location
- **Meta Pixel**: `PageView` event on route changes
- **Auto-scroll**: Page scrolls to top on navigation

### Sitemap
`client/public/sitemap.xml` includes:
- All static pages
- All 22 service pages
- All 6 industry pages
- All blog post detail pages
- All case study detail pages
- Proper priority and changefreq settings

### Meta Tags
Each page uses the `<SEO>` component for:
- Page title
- Meta description
- Open Graph tags (Facebook/Instagram)
- Twitter Cards
- Canonical URLs

## 🚀 Deployment

### Automatic Deployment (Vercel)
The site is configured for automatic deployment:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Vercel Auto-Deploy**
   - Vercel monitors the `main` branch
   - Automatic build triggered on push
   - Deployment completes in 2-3 minutes
   - Live at `illuminious.com`

### Manual Build
```bash
# Build production bundle
pnpm build

# Output directory
dist/
```

### Environment Variables (Production)
Set in Vercel Dashboard > Settings > Environment Variables:
- `TURSO_DATABASE_URL`
- `TURSO_AUTH_TOKEN`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `JWT_SECRET`
- `ADMIN_DEFAULT_PASSWORD`
- `NODE_ENV=production`

## 🖼️ Image Management

### Image Organization
All images are centralized in `client/public/images/`:
- **Total Images**: 400+ assets
- **Naming Convention**: Descriptive names (e.g., `hero-global-supply-chain.jpg`)
- **Deployed Images**: Prefixed with `DEPLOYED_` to indicate production use
- **Flag Icons**: SVG files in `images/flags/` for cross-platform compatibility

### Adding/Replacing Images
1. Place new image in `client/public/images/`
2. Reference in code as `/images/filename.jpg`
3. Recommended sizes:
   - Hero images: 1920×1080px
   - Service images: 1200×800px
   - Thumbnails: 600×400px
   - Logos: 400×400px PNG with transparency

### Flag Icons
Use the `<FlagIcon>` component instead of emoji:
```tsx
import FlagIcon from "@/components/FlagIcon";

<FlagIcon code="us" className="w-6 h-6" />
```
Available codes: `us`, `cn`, `vn`, `mx`, `tw`, `th`, `my`, etc.

## 🧪 Development Commands

```bash
# Development server (localhost:3000)
pnpm dev

# Type checking
pnpm check

# Format code
pnpm format

# Database migrations
pnpm db:push

# Production build
pnpm build

# Start production server
pnpm start
```

## 🔧 Customization Guide

### Changing Brand Colors
Edit `client/src/index.css`:
```css
:root {
  --illuminious-navy: #132843;
  --illuminious-blue: #3966A2;
  --illuminious-sky: #6191D3;
  --illuminious-light: #D6DEEE;
}
```

### Adding a New Service Page
1. Create `client/src/pages/services/NewService.tsx`
2. Add route in `client/src/App.tsx`
3. Add link in `client/src/pages/Services.tsx`
4. Add entry to `client/public/sitemap.xml`

### Modifying Navigation
Edit `client/src/components/Header.tsx`:
- Desktop menu: `desktopMenu` array
- Mobile menu: Same links rendered in mobile drawer

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3.0s
- **Total Bundle Size**: ~200KB (gzipped)

## 🐛 Troubleshooting

### Common Issues

**Images not loading**
- Verify file exists in `client/public/images/`
- Check path starts with `/images/`
- Clear browser cache

**Styles not applying**
- Restart dev server: `pnpm dev`
- Check Tailwind class names
- Verify `index.css` imports

**Database errors**
- Verify `TURSO_DATABASE_URL` in `.env`
- Run `pnpm db:push` to sync schema
- Check Turso dashboard for database status

**Build failures**
- Run `pnpm check` for TypeScript errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
- Check for missing dependencies

## 📚 Documentation

Additional documentation available in `docs/`:
- `SOP-AI-Agent-Complete-Guide.md` - Complete development workflow
- `Content-Writing-Guide-Blog.md` - Blog writing standards
- `Content-Writing-Guide-News.md` - News writing standards
- `Content-Writing-Guide-Case-Studies.md` - Case study templates

## 📝 License

This project is proprietary to Illuminious LLC. All rights reserved.

## 📞 Support

**Technical Support**
- Email: info@illuminious.com
- Website: https://illuminious.com

**Development Team**
- CTO: Ethan Yip (叶一辰)
- Repository: https://github.com/tudsds/illuminious.com

---

*Last Updated: February 8, 2026*
*Version: 2.0*
