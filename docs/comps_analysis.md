# Competitive Analysis & Website Reconstruction Blueprint

> **Version**: v1.0
> **Date**: February 8, 2026
> **Reference Sites**: foxtronicsems.com (primary), jabil.com (blog style reference)
> **Target Site**: illuminious.com
> **Purpose**: Serve as the single source of truth for rebuilding Illuminious.com to look and feel like a real electronics manufacturer/factory, not a trading company.

---

## 1. Executive Summary

The current Illuminious website, while functional, reads more like a trading company or sourcing agent than a vertically integrated electronics manufacturer. The primary reference site, foxtronicsems.com, demonstrates the gold standard for how an EMS (Electronics Manufacturing Services) company should present itself online: deep technical content, educational explanations of manufacturing processes, prominent certifications, real factory imagery, and a professional yet accessible tone that serves both experienced OEMs and first-time hardware founders.

This document provides a comprehensive blueprint for reconstructing Illuminious.com to match the depth, authority, and manufacturing credibility of foxtronicsems.com, while incorporating the data-driven blog article style of jabil.com and aligning with the keyword and advertising strategy defined in SEO-GEO-PUSH-PLAN.md.

---

## 2. Site Architecture & Page Map

### 2.1 Required Pages (Based on Foxtronics + SEO Plan)

| Category | Page Path | SEO Priority | Content Depth | Foxtronics Equivalent |
|----------|-----------|-------------|---------------|----------------------|
| **Homepage** | `/` | P0 | Very High (8,000+ chars) | foxtronicsems.com/ |
| **About** | `/about` | P1 | Very High (10,000+ chars) | foxtronicsems.com/about/ |
| **Services Overview** | `/services` | P0 | High (5,000+ chars) | foxtronicsems.com (services section) |
| **NPI Engineering** | `/services/npi-engineering` | P0 | Very High (8,000+ chars) | Prototyping (NPI) section |
| **EMS Manufacturing** | `/services/ems` | P0 | Very High (8,000+ chars) | PCBA Contract Manufacturing |
| **Box Build** | `/services/box-build` | P0 | Very High (8,000+ chars) | Box Build Assembly |
| **PCB Assembly** | `/services/pcb-assembly` | P1 | Very High (8,000+ chars) | PCB Assembly main page |
| **SMT Assembly** | `/services/smt-assembly` | P1 | Very High (8,000+ chars) | foxtronicsems.com/pcb-assembly/smt-assembly/ |
| **Through-Hole** | `/services/through-hole` | P1 | High (5,000+ chars) | Through-Hole Assembly |
| **Injection Molding** | `/services/injection-molding` | P1 | High (5,000+ chars) | Injection Molding & Coating |
| **ODM** | `/services/odm` | P1 | High (5,000+ chars) | Design & Engineering |
| **OEM** | `/services/oem` | P1 | High (5,000+ chars) | Turnkey Project Management |
| **Supply Chain** | `/services/supply-chain` | P1 | High (5,000+ chars) | Supply Chain Management |
| **US Fulfillment** | `/services/us-fulfillment` | P1 | High (5,000+ chars) | Aftermarket Services |
| **Rapid Prototyping** | `/services/rapid-prototyping` | P1 | High (5,000+ chars) | Rapid Prototyping |
| **DFM Analysis** | `/services/dfm` | P1 | High (5,000+ chars) | Design for Manufacturability |
| **Testing & Inspection** | `/services/testing` | P1 | High (5,000+ chars) | Testing & Integration |
| **Industries Overview** | `/industries` | P0 | High (5,000+ chars) | Industries section |
| **Medical** | `/industries/medical` | P1 | High (5,000+ chars) | Medical & Life Sciences |
| **Automotive** | `/industries/automotive` | P1 | High (5,000+ chars) | (No direct equivalent) |
| **Industrial** | `/industries/industrial` | P1 | High (5,000+ chars) | Industrial & Automation |
| **Consumer** | `/industries/consumer` | P1 | High (5,000+ chars) | Commercial Electronics |
| **IoT** | `/industries/iot` | P1 | High (5,000+ chars) | Emerging Technologies |
| **Case Studies** | `/case-studies` | P1 | Medium (3,000+ chars) | (Blog-style) |
| **Startups** | `/startups` | P0 | Very High (8,000+ chars) | (Unique to Illuminious) |
| **Contact** | `/contact` | P0 | Medium (2,000+ chars) | Contact Us |
| **Factory Tour** | `/factory-tour` | P1 | High (5,000+ chars) | Facilities page |
| **Blog** | `/blog` | P2 | Index page | Blog index |
| **News** | `/news` | P2 | Index page | News & Updates |
| **Quality** | `/capabilities/quality` | P1 | High (5,000+ chars) | Quality Policy & Certifications |
| **Privacy** | `/privacy` | P3 | Standard | Privacy Policy |
| **Terms** | `/terms` | P3 | Standard | Terms of Service |

### 2.2 Navigation Structure

**Header Navigation** (Desktop):

```
Logo (left) | About | Services ▼ | Industries ▼ | Capabilities ▼ | Resources ▼ | Startups | Contact (right, CTA button)
```

**Services Dropdown**:
```
Manufacturing Services          Solutions                    Engineering
├── SMT Assembly               ├── EMS Manufacturing        ├── NPI Engineering
├── PCB Assembly (PCBA)        ├── OEM Services             ├── DFM Analysis
├── Through-Hole Assembly      ├── ODM Services             ├── Rapid Prototyping
├── Box Build Assembly         ├── Supply Chain Management   └── Testing & Inspection
├── Injection Molding          └── US Fulfillment
```

**Industries Dropdown**:
```
├── Medical Devices
├── Automotive Electronics
├── Industrial & Automation
├── Consumer Electronics
├── IoT & Smart Devices
```

**Capabilities Dropdown**:
```
├── Quality & Certifications
├── IoT Specialization
```

**Resources Dropdown**:
```
├── Blog
├── News & Updates
├── Case Studies
├── Factory Tour
```

**Footer** (Multi-column):
```
Column 1: Manufacturing Services    Column 2: Solutions           Column 3: Industries
- SMT Assembly                      - EMS Manufacturing           - Medical Devices
- PCB Assembly                      - OEM Services                - Automotive
- Through-Hole Assembly             - ODM Services                - Industrial & Automation
- Box Build Assembly                - Supply Chain                - Consumer Electronics
- Injection Molding                 - US Fulfillment              - IoT & Smart Devices
- Testing & Inspection              - NPI Engineering
                                    - DFM Analysis
                                    - Rapid Prototyping

Column 4: Company                   Column 5: Contact
- About Us                          - Email: info@illuminious.com
- Quality & Certifications          - Phone: +1 (650) XXX-XXXX
- Factory Tour                      - Palo Alto, CA (HQ)
- Case Studies                      - Shenzhen, China
- Blog                              - Batam, Indonesia
- News & Updates
- Startups Program
- Careers
- Privacy Policy
- Terms of Service
```

---

## 3. Visual Design Specifications

### 3.1 Color Palette (Keep Existing)

The current Illuminious color scheme should be maintained. The existing blue/dark theme with green accents is appropriate for a manufacturing company.

### 3.2 Typography (Change Required)

| Element | Current | Target | Weight |
|---------|---------|--------|--------|
| Headings (H1-H3) | Various | **Inter** | 700 (Bold), 600 (Semibold) |
| Body Text | Various | **Open Sans** | 400 (Regular), 600 (Semibold) |
| Navigation | Various | **Inter** | 500 (Medium) |
| Buttons/CTAs | Various | **Inter** | 600 (Semibold) |
| Code/Technical | Various | **JetBrains Mono** or system monospace | 400 |

### 3.3 Layout Patterns (From Foxtronics)

**Hero Sections**: Every page must have a full-width hero section with a background image (real factory photo), page title on the left, and a brief description paragraph on the right. The image should have a dark overlay (50-70% opacity) to ensure text readability.

**Content Sections**: Alternate between white background sections and dark (navy/dark blue) background sections. Each section should be full-width with content constrained to a max-width container (1200-1400px).

**Card Layouts**: Use card-based layouts for services, industries, and capabilities. Each card should have an icon or small image, a title, a brief description (2-3 sentences), and a "Learn More" link/button.

**Tabbed Interfaces**: Use tabbed navigation for organizing related content (e.g., service categories, facility locations). Tabs should be clearly labeled and responsive.

**Stats/Metrics Bar**: Include a prominent statistics section on the homepage showing key metrics (e.g., "10+ Years Experience", "ISO 9001 Certified", "500K+ PCBAs Delivered", "3 Global Facilities", "100+ Skilled Engineers").

**Certification Logos Bar**: Display certification logos (ISO 9001, ISO 13485, IPC, ITAR, etc.) prominently on the homepage and relevant service pages.

---

## 4. Content Style Guide

### 4.1 Tone & Voice

The content must read as if written by experienced manufacturing engineers who are explaining their craft to potential customers. The tone should be professional, technical, and authoritative, but also accessible to non-experts (especially startup founders who may not have hardware manufacturing experience).

**Key principles**:

1. **Explain everything**: Do not assume the reader knows what SMT assembly, DFM, or NPI means. Every technical term should be explained in context, similar to how foxtronicsems.com explains "Surface Mount Technology (SMT) assembly is a highly automated method of mounting electronic components directly onto the surface of printed circuit boards (PCBs)."

2. **Use specific details**: Instead of "we have modern equipment," write "our 8 fully automated SMT lines feature Yamaha YSM20R pick-and-place machines with 01005 capability, 3D solder paste inspection, and inline automated optical inspection."

3. **Show manufacturing authority**: Use language that demonstrates deep knowledge of manufacturing processes, quality standards, and industry requirements.

4. **Address customer concerns directly**: Especially for startups, address concerns about IP protection, minimum order quantities, communication barriers, and quality assurance.

### 4.2 Content Length Requirements

| Page Type | Minimum Characters | Minimum Words | Sections (H2) |
|-----------|-------------------|---------------|----------------|
| Homepage | 8,000 | 1,400 | 6-8 |
| About | 10,000 | 1,800 | 8-10 |
| Service Detail | 8,000 | 1,400 | 7-10 |
| Industry Page | 5,000 | 900 | 5-7 |
| Blog Article | 12,000 | 2,000 | 6-8 |
| Case Study | 8,000 | 1,400 | 5-7 |
| News Article | 5,000 | 900 | 4-6 |

### 4.3 Service Page Template (Based on Foxtronics)

Every service detail page must follow this structure:

1. **Hero Section**: Full-width image with service title and brief description
2. **Introduction** (2-3 paragraphs): What this service is and why it matters
3. **"What is [Service]?" Section**: Educational explanation for non-experts, defining the technology/process
4. **"Our [Service] Capabilities" Section**: Grid of capability cards with specific details (equipment, tolerances, certifications)
5. **Testing & Quality Section**: Relevant testing methods and quality controls for this service
6. **Quality & Certifications**: Applicable certifications with badges
7. **Portfolio/Gallery**: Image carousel showing examples of work (if applicable)
8. **Prototyping to Production**: How this service scales from prototype to volume
9. **Industries Served**: Which industries benefit from this service
10. **FAQ Section**: 5-6 frequently asked questions with detailed answers
11. **CTA Section**: "Ready to Get Started?" with contact button

### 4.4 Internal Linking Strategy

Every page must include internal links within the body text. Keywords should be linked to their relevant service or industry pages. For example:

- "SMT assembly" → links to `/services/smt-assembly`
- "PCB assembly" → links to `/services/pcb-assembly`
- "DFM review" → links to `/services/dfm`
- "rapid prototyping" → links to `/services/rapid-prototyping`
- "box build" → links to `/services/box-build`
- "injection molding" → links to `/services/injection-molding`
- "medical devices" → links to `/industries/medical`
- "automotive electronics" → links to `/industries/automotive`
- "IoT devices" → links to `/industries/iot`
- "startups program" → links to `/startups`
- "factory tour" → links to `/factory-tour`
- "contact us" → links to `/contact`

All internal links must open in the same tab (_self). External links (if any) must open in a new tab (_blank).

---

## 5. Image Strategy

### 5.1 Image Style Requirements

All images must look like real photographs taken in an actual electronics manufacturing facility. They must NOT look AI-generated. Key requirements:

- **Lighting**: Natural factory lighting with realistic shadows and highlights
- **Focus**: Shallow depth of field for product close-ups, wider depth for facility shots
- **Subjects**: Real PCBs, SMT machines, workers in ESD gear, testing equipment, box build stations, injection molding machines
- **Products**: AI companions, AI glasses, wearable devices, AI recording pens, AI necklaces, PCB boards, projectors, speakers, alarm clocks
- **Actions**: PCBA assembly, quality inspection, box building, SMT placement, injection molding
- **Logo usage**: Illuminious logo may appear as background element only (realistic acrylic or plastic sticker), never on products or equipment. Logo must follow realistic physics (lighting, shadows, blur matching surroundings)
- **No other logos**: No logos other than Illuminious should appear in any image

### 5.2 Image Usage by Page

| Page | Image Count | Image Types |
|------|-------------|-------------|
| Homepage | 5-8 | Hero carousel, service cards, facility photos, industry shots |
| About | 4-6 | Team photo, facility exterior, equipment, certifications |
| Service Detail | 3-5 | Hero, equipment close-up, process shots, portfolio |
| Industry Page | 2-3 | Hero, industry-specific product/application |
| Blog Article | 1 | Hero image only (per instruction 9) |
| Case Study | 1-2 | Hero, product/result photo |
| News | 1 | Hero image |
| Factory Tour | 6-10 | Facility panoramas, equipment, clean room, testing lab |

### 5.3 Logo Usage Rules

- **Dark backgrounds**: Use `illuminious-logo-white`
- **Light backgrounds**: Use `illuminious-logo-blue`
- **Dynamic backgrounds** (e.g., header that changes on scroll): Logo must switch from white to blue (or vice versa) when background changes
- **Logo format**: PNG with transparency, compressed for web

---

## 6. SEO & Keyword Integration

### 6.1 Primary Keywords (From SEO-GEO-PUSH-PLAN.md)

| Keyword | Target Page | Monthly Search Volume | Priority |
|---------|------------|----------------------|----------|
| electronics manufacturing services | `/services/ems` | 2,400 | P0 |
| ems manufacturing | `/services/ems` | 1,300 | P0 |
| pcb assembly services | `/services/pcb-assembly` | 1,900 | P0 |
| npi services | `/services/npi-engineering` | 880 | P0 |
| rapid prototyping services | `/services/rapid-prototyping` | 1,600 | P0 |
| box build assembly | `/services/box-build` | 720 | P1 |
| indonesia manufacturing | `/services/ems` | 590 | P1 |
| hardware startup manufacturing | `/startups` | 480 | P0 |
| contract electronics manufacturing | `/services/ems` | 1,000+ | P0 |
| smt assembly services | `/services/smt-assembly` | 800+ | P1 |
| dfm analysis | `/services/dfm` | 500+ | P1 |
| medical device manufacturing | `/industries/medical` | 1,200+ | P1 |

### 6.2 Long-Tail Keywords

| Keyword | Target Page |
|---------|------------|
| electronics manufacturing services usa | `/about` |
| rapid prototyping shenzhen | `/services/npi-engineering` |
| tariff free manufacturing indonesia | `/services/box-build` |
| dfm review services | `/services/dfm` |
| startup friendly manufacturer | `/startups` |
| medical device manufacturing iso 13485 | `/industries/medical` |
| automotive electronics manufacturing iatf | `/industries/automotive` |
| pcb assembly prototype to production | `/services/pcb-assembly` |
| ai hardware manufacturing | `/startups` |
| wearable manufacturing startup | `/startups` |

### 6.3 Meta Tags Strategy

Every page must have unique, keyword-optimized meta tags:

- **Title**: `[Primary Keyword] | [Secondary Keyword] | Illuminious` (max 60 chars)
- **Description**: Include primary keyword, value proposition, and CTA (max 155 chars)
- **H1**: One per page, include primary keyword
- **H2s**: Include secondary/related keywords naturally
- **Image alt text**: Descriptive, include relevant keywords

### 6.4 Structured Data

Maintain existing structured data (Organization, Service, LocalBusiness) and ensure it is updated to reflect any new pages or content changes.

---

## 7. Blog & Article Style Guide (Jabil + Foxtronics Hybrid)

### 7.1 Article Template Structure

Based on jabil.com/blog/ and foxtronicsems.com blog articles:

1. **Hero Section**: Full-width image with article title overlay, category tag, date, author name
2. **Author Section**: Author name and title (no photo required)
3. **Table of Contents**: Auto-generated from H2 headings, displayed as sidebar or inline
4. **Article Body**: Long-form content with H2 sections, data tables, charts (HTML/CSS), and internal links
5. **Data Visualizations**: Use HTML/CSS bar charts, comparison tables, and statistics callouts (NOT images for charts/tables per instruction 9)
6. **Internal Links**: Keywords linked to relevant service/industry pages
7. **CTA Section**: Contact form or "Get a Quote" button at the bottom
8. **Related Articles**: 3 related article cards
9. **Previous/Next Navigation**: Links to adjacent articles

### 7.2 Visual Elements in Articles

Articles must include rich visual elements rendered via HTML/Markdown (NOT images):

- **Data tables**: Comparison tables, specification tables, feature matrices
- **Statistics callouts**: Large numbers with labels (e.g., "84% of companies faced component shortages")
- **Bar/column charts**: Simple CSS-based charts showing data
- **Highlight boxes**: Colored boxes for key takeaways, definitions, or important notes
- **Blockquotes**: For expert quotes or important statements
- **Ordered/numbered lists**: For step-by-step processes
- **Feature grids**: 2x2 or 3x2 grids of feature cards within articles

### 7.3 Article Content Requirements

- **Length**: 2,000-3,000 words minimum
- **Sections**: 6-8 H2 sections with descriptive titles
- **Data**: Include statistics, percentages, and data points with source citations
- **Internal links**: Minimum 5 internal links per article to service/industry pages
- **Author**: Every article must have an author name and title
- **Date**: Publication date clearly displayed
- **Category**: Each article tagged with a category
- **Max 1 image per article** (hero image only, per instruction 9)

---

## 8. Technical Requirements

### 8.1 Tracking & Analytics

All tracking codes must remain functional and automatically sync:

- **GTM**: GTM-TV3WNHSZ (container must fire on all pages including SPA virtual pageviews)
- **GA4**: G-8903WGE2L3 (must track pageviews, events, and conversions)
- **Meta Pixel**: 1480233550376270 (must track PageView, Lead, Contact events)
- **Google Search Console**: sitemap.xml must be updated with all new/changed URLs

### 8.2 SPA Virtual Pageview Tracking

The existing virtual pageview tracking in App.tsx must be maintained. Every route change must push a `virtual_page_view` event to the GTM dataLayer, and fire corresponding GA4 and Meta Pixel pageview events.

### 8.3 Sitemap Requirements

The sitemap.xml must include ALL pages listed in section 2.1, plus all individual blog posts, news articles, and case studies. Each URL must have appropriate `changefreq` and `priority` values.

### 8.4 Responsive Design

All pages must be fully responsive across desktop (1920px+), laptop (1366px), tablet (768px), and mobile (375px). The design must follow B2B overseas user aesthetics with clean layouts, professional typography, and ample whitespace.

### 8.5 Font Loading

Import Inter and Open Sans from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

---

## 9. Key Differentiators to Emphasize

Based on SEO-GEO-PUSH-PLAN.md, the following value propositions must be prominently featured throughout the site:

1. **US-Managed**: Contracts signed in the US, protected by US law. Palo Alto headquarters.
2. **Factory-Direct**: Own facilities, not a trading company or broker. Vertically integrated.
3. **Dual-Factory Flexibility**: Shenzhen for NPI speed, Batam FTZ for tariff-optimized production.
4. **Risk-Free**: US contracts, IP protection, quality guarantees.
5. **Tariff-Free**: Batam Free Trade Zone manufacturing avoids tariffs.
6. **Startup-Friendly**: No MOQ, dedicated engineering support, startup pricing.
7. **72-Hour Prototyping**: Rapid turnaround on prototypes from Shenzhen facility.
8. **Vertically Integrated**: SMT, through-hole, testing, injection molding, box build, fulfillment all in-house.

---

## 10. Comparison: Current vs. Target State

| Aspect | Current State | Target State |
|--------|--------------|-------------|
| Homepage content | ~5,600 chars | 8,000+ chars |
| Service page content | ~2,000-3,000 chars | 8,000+ chars each |
| About page content | ~3,000 chars | 10,000+ chars |
| Blog article length | ~1,500 words | 2,000-3,000 words |
| Blog visual elements | Plain text only | Tables, charts, callouts, highlight boxes |
| Service page structure | Basic description | Full template (What is X?, Capabilities, FAQ, CTA) |
| Internal linking | Minimal | Heavy (5+ links per page) |
| Font | System/default | Inter + Open Sans |
| Educational content | Minimal | Extensive (explain all technical terms) |
| FAQ sections | None | On every service page |
| Certification display | Mentioned in text | Visual badges/logos prominently displayed |
| Stats/metrics | Minimal | Prominent stats bar on homepage |
| Image style | Mix of AI/stock | Real factory photos only |
| Logo behavior | Static | Dynamic (white/blue based on background) |
