# Illuminious Website

A professional, modern website for **Illuminious LLC**, a global electronics supply chain provider offering EMS, OEM, ODM, DFM, and overseas warehouse services.

## Overview

This website is designed to showcase Illuminious's comprehensive manufacturing and supply chain capabilities, targeting hardware startups and established companies seeking reliable manufacturing partners. The site features a modern Silicon Valley tech aesthetic with smooth animations inspired by Apple and Google.

### Key Features

- **Multi-page Structure**: Home, About Us, Our Services (with 11 sub-pages), News, Blog, Startups Program, and Contact Us
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Admin CMS**: Full-featured admin portal at `/admin` for managing News and Blog content with rich text editor
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data for Google, Meta, and Twitter advertising
- **Google Tag Manager**: Pre-integrated GTM (ID: GTM-5M6CMP6S) for analytics and ad tracking
- **Cyberpunk Theme**: Special "Illuminious Startups Program" page with unique visual style (co-branded with Future Factory)
- **Floating Contact Form**: Auto-popup contact widget that adapts to page theme
- **Thank You Page**: Animated confirmation page with GTM tracking

## Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19, TypeScript, Tailwind CSS 4 |
| Backend | Express 4, tRPC 11 |
| Database | MySQL/TiDB with Drizzle ORM |
| Animation | Framer Motion |
| Authentication | Manus OAuth |
| Styling | Tailwind CSS with custom brand colors |

## Project Structure

```
illuminious-website/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (images, logos)
│   │   └── images/        # All website images
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   │   └── services/  # Service sub-pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # React contexts
│   │   ├── lib/           # Utility libraries
│   │   ├── App.tsx        # Main app with routing
│   │   ├── index.css      # Global styles and brand colors
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template with SEO meta tags
├── server/                 # Backend Express/tRPC server
│   ├── routers.ts         # API routes
│   ├── db.ts              # Database queries
│   └── _core/             # Core server infrastructure
├── drizzle/               # Database schema and migrations
│   └── schema.ts          # Database table definitions
├── shared/                # Shared types and constants
└── package.json           # Dependencies and scripts
```

## Brand Colors

The website uses a carefully selected color palette:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Navy | `#132843` | Primary dark color, headers |
| Blue | `#3966A2` | Primary brand color, CTAs |
| Sky | `#6191D3` | Accent color, gradients |
| Light | `#D6DEEE` | Backgrounds, borders |
| White | `#F8F6F6` | Text on dark backgrounds |

### Cyberpunk Theme (Startups Program)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Black | `#0a0a0f` | Background |
| Cyan | `#00D4FF` | Primary accent |
| Purple | `#8B5CF6` | Secondary accent |
| Pink | `#FF00FF` | Highlights |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager
- MySQL/TiDB database (for full functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/illuminious-website.git
   cd illuminious-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables (create `.env` file):
   ```env
   DATABASE_URL=mysql://user:password@host:port/database
   JWT_SECRET=your-secret-key
   ```

4. Push database schema:
   ```bash
   pnpm db:push
   ```

5. Start development server:
   ```bash
   pnpm dev
   ```

6. Open http://localhost:3000 in your browser

## Modifying Content

### Changing Text Content

Most text content is located in the page component files under `client/src/pages/`. Here's how to modify different sections:

#### Home Page (`client/src/pages/Home.tsx`)
- Hero section text: Look for the `<h1>` and `<p>` tags in the Hero section
- Services section: Modify the `services` array
- Stats section: Update the `stats` array

#### About Page (`client/src/pages/About.tsx`)
- Company story: Edit the text in the "Our Story" section
- Timeline: Modify the `timeline` array
- Capabilities: Update the `capabilities` array

#### Service Pages (`client/src/pages/services/*.tsx`)
Each service page follows the same template structure. Edit:
- `title`, `subtitle`, `description` props
- `features` array for feature cards
- `benefits` array for benefit list
- `process` array for process steps
- `faqs` array for FAQ section

### Changing Images

1. Place new images in `client/public/images/`
2. Reference them in components using `/images/your-image.png`
3. Recommended image sizes:
   - Hero images: 1920x1080px
   - Service images: 800x600px
   - Logo: 200x200px (PNG with transparency)

### Updating Contact Information

Edit the following files:
- `client/src/components/Footer.tsx` - Footer contact info
- `client/src/pages/Contact.tsx` - Contact page details
- `client/src/components/FloatingContact.tsx` - Floating form email

### Managing News and Blog

1. Access the admin portal at `/admin` (hidden, not linked in navigation)
2. Log in with admin credentials:
   - **Username**: `illuminious`
   - **Password**: `Djpcs17529#`
3. Use the dashboard to:
   - Create, edit, and delete News articles and Blog posts
   - Use the rich text editor with bold, italic, underline, links, images, and YouTube embeds
   - Save drafts or publish immediately
   - View all contact form submissions
   - Add new admin users (super admin only)

**Note**: The super admin account can add other admin users through the Admin Management section.

## Deployment Guide

### Option 1: Deploy via Manus (Recommended)

1. Save a checkpoint in Manus
2. Click the "Publish" button in the Management UI
3. Your site will be available at `your-project.manus.space`
4. Configure custom domain in Settings > Domains

### Option 2: Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Option 3: Deploy to Your Own Server

1. Build the project:
   ```bash
   pnpm build
   ```

2. The build output will be in `dist/` directory

3. Set up a Node.js server to run:
   ```bash
   NODE_ENV=production node dist/index.js
   ```

4. Configure your web server (nginx/Apache) to proxy to the Node.js server

### Environment Variables for Production

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MySQL connection string |
| `JWT_SECRET` | Secret for session tokens |
| `NODE_ENV` | Set to `production` |

## SEO and Advertising

The website is optimized for advertising on Google, Meta (Facebook/Instagram), Twitter, and WhatsApp.

### Meta Tags

All SEO meta tags are configured in `client/index.html`:
- Title and description
- Open Graph tags (Facebook/Instagram)
- Twitter Cards
- Structured data (JSON-LD)

### Updating SEO Information

1. Edit `client/index.html` for global meta tags
2. Each page has its own `<SEO>` component for page-specific tags
3. Update the `og:image` URL to your production domain

### Creating Social Media Images

For best results on social platforms:
- Create an OG image at 1200x630px
- Save as `client/public/images/og-image.png`
- Update the URL in `index.html`

## Using AI Tools for Future Modifications

### With Claude or ChatGPT

1. Share the relevant file content with the AI
2. Describe the changes you want to make
3. Ask for the modified code
4. Copy the code back into your project

Example prompt:
```
I have a React component for my services page. I want to add a new service called "Quality Assurance". Here's my current code:
[paste code]
Please add a new service with appropriate icon and description.
```

### With Manus

1. Open your project in Manus
2. Describe the changes you want in natural language
3. Manus will automatically modify the code
4. Review changes and save a checkpoint

### Common Modification Tasks

| Task | Files to Modify |
|------|----------------|
| Add new page | Create in `pages/`, add route in `App.tsx` |
| Change colors | Edit `client/src/index.css` |
| Update navigation | Edit `client/src/components/Header.tsx` |
| Add new service | Create in `pages/services/`, add to `Services.tsx` |
| Modify footer | Edit `client/src/components/Footer.tsx` |

## Troubleshooting

### Common Issues

**Images not loading**
- Ensure images are in `client/public/images/`
- Check file paths start with `/images/`

**Styles not applying**
- Run `pnpm dev` to restart the dev server
- Clear browser cache

**Database connection errors**
- Verify `DATABASE_URL` is correct
- Ensure database server is running

### Getting Help

- Check the browser console for JavaScript errors
- Review server logs for backend issues
- Ensure all dependencies are installed with `pnpm install`

## License

This project is proprietary to Illuminious LLC. All rights reserved.

## Contact

For technical support or questions about this website:
- Email: info@illuminious.com
- Website: https://illuminious.com
