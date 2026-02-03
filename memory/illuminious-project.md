# Illuminious Project Memory

## Project Overview
**Illuminious LLC** - Global electronics supply chain provider offering EMS, OEM, ODM, DFM, and overseas warehouse services.
- Website: https://illuminious.com
- Repository: https://github.com/tudsds/illuminious.com
- Local Path: /mnt/d/web3/illuminious-web

## Tech Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Backend**: Express 4, tRPC 11
- **Database**: MySQL/TiDB with Drizzle ORM
- **Package Manager**: pnpm

## Brand Colors Reference
| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Navy | #132843 | `illuminious-navy` | Primary dark, headers |
| Blue | #3966A2 | `illuminious-blue` | Primary brand, CTAs |
| Sky | #6191D3 | `illuminious-sky` | Accent, gradients |
| Light | #D6DEEE | `illuminious-light` | Backgrounds, borders |
| White | #F8F6F6 | - | Text on dark |

### Cyberpunk Theme (Startups Page)
| Name | Hex | Usage |
|------|-----|-------|
| Black | #0a0a0f | Background |
| Cyan | #00D4FF | Primary accent |
| Purple | #8B5CF6 | Secondary accent |
| Pink | #FF00FF | Highlights |

## Project Status

### Completed Phases (as of 2026-02-01)
- Phase 1-7: Initial setup, components, pages, admin CMS
- Phase 8: Startups Program page (cyberpunk theme)
- Phase 9-10: Contact, animations, SEO
- Phase 13-17: UI fixes, logo updates, color fixes
- Phase 18: Marketing optimization plan
- Phase 19-22: Admin portal fixes
- Phase 23: Full site reconstruction (Jan 28, 2026)

### Pending Tasks
- [ ] Privacy Policy page (/privacy)
- [ ] Terms & Conditions page (/terms)
- [ ] WhatsApp floating button (need phone number)
- [ ] GA4 configuration (need Measurement ID)
- [ ] Meta Pixel configuration (need Pixel ID)
- [ ] Email service integration (need Resend API Key)
- [ ] Image alt tags optimization

### Removed Features
- Admin Portal (removed in Phase 23, Jan 28, 2026)

## Site Structure

### Main Pages
1. **Home** (/) - Hero, services overview, global network
2. **About** (/about) - Company story, team, certifications
3. **Services** (/services) - End-to-end solutions
   - NPI & Engineering (/services/npi-engineering)
   - PCB Assembly (/services/pcb-assembly)
   - Box Build (/services/box-build)
   - Plastic Injection (/services/plastic-injection)
   - Supply Chain (/services/supply-chain)
4. **Factory Tour** (/factory-tour)
5. **Case Studies** (/case-studies)
6. **Industries** (/industries/*) - IoT, Consumer Electronics, Automotive, Medical
7. **Capabilities** (/capabilities/*) - Manufacturing, Quality, IoT
8. **Blog** (/blog)
9. **Contact** (/contact)

### Special Pages
- **Startups Program** (/startups) - Cyberpunk theme, co-branded with Future Factory

## Recent Changes Log

### 2026-02-01
- Modified About page CTA section:
  - Background: gradient → white
  - Title: white → Navy (#132843)
  - "Get a Quote" button: white → Sky blue bg + white text
  - "Book a Factory Tour" button: outline → Navy bg + white text

## Git Configuration
```bash
user.email: james@illuminious.com
user.name: James
SSH Key: /home/jamesg27/.ssh/id_ed25519
```

## Local Development
```bash
cd /mnt/d/web3/illuminious-web
pnpm install
pnpm dev
# Server: http://localhost:3000
```

## API Keys Needed (from user)
- GA4 Measurement ID
- Meta Pixel ID
- Resend API Key
- WhatsApp Business Number

## Key Files
| File | Purpose |
|------|---------|
| README.md | Project documentation |
| todo.md | Task list and phases |
| client/src/index.css | Brand colors definition |
| client/src/pages/*.tsx | Page components |
| client/src/components/*.tsx | Shared components |

## User Information
- Name: James
- Telegram: @Shehekbe (6510649520)
- Preferred language: Chinese/Mandarin
- AI name preference: 征酱 (Zheng-chan)
