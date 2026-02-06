# Content Creation Guide for Illuminious Website

Complete guide for creating Blog articles, News posts, and Case Studies for the Illuminious website.

---

## Table of Contents

1. [Blog Articles](#1-blog-articles)
2. [News Posts](#2-news-posts)
3. [Case Studies](#3-case-studies)
4. [Shared Resources](#4-shared-resources)

---

## 1. Blog Articles

Blog articles provide educational content about electronics manufacturing, supply chain optimization, DFM best practices, and hardware startup guidance.

### Article Structure

```typescript
{
  id: [next available number],
  slug: "[descriptive-url-slug]",
  title: "[Compelling Title: 8-12 Words]",
  excerpt: "[Engaging summary: 20-30 words]",
  content: `[structured HTML content]`,
  publishedAt: new Date("YYYY-MM-DD"),
  readTime: [estimated minutes],
  authorName: "Illuminious Team",
  featuredImage: "/images/[descriptive-image-name].jpg",
  category: "[Industry Insights|Technical|Startup Guide|Supply Chain|Regulated Industries]",
}
```

### Content Templates

#### Lead Introduction
```html
<div class="lead-text">
  <p><strong>[Key concept]</strong> [Context]. [Supporting details with <strong>key emphasis</strong>].</p>
</div>
```

#### Feature Grid (2x2)
```html
<div class="feature-grid">
  <div class="feature-item">
    <h4>[Icon] [Title]</h4>
    <p>[Description with <strong>key stats</strong>]</p>
  </div>
  <!-- Repeat for 4 items -->
</div>
```

#### Benefits Grid (6 Items)
```html
<div class="benefits-grid">
  <div class="benefit">
    <h5>[Icon] [Title]</h5>
    <p>[Brief description]</p>
  </div>
  <!-- Repeat for 6 items -->
</div>
```

#### Conclusion Box
```html
<div class="conclusion-box">
  <h3>Looking Ahead</h3>
  <p>[Forward-looking statement]</p>
  <p><strong>[Call to action]</strong></p>
</div>
```

### Categories

- **Industry Insights** - Market trends, future predictions
- **Technical** - DFM, manufacturing processes
- **Startup Guide** - Hardware startup advice
- **Supply Chain** - Logistics, diversification
- **Regulated Industries** - Medical, automotive compliance

---

## 2. News Posts

News articles highlight company announcements, industry updates, events, and partnerships. Timely, factual, and focused on specific announcements.

### Article Structure

```typescript
{
  id: [next available number],
  slug: "[descriptive-url-slug]",
  title: "[Newsworthy Title: 8-12 Words]",
  excerpt: "[Summary: 20-30 words]",
  content: `[structured HTML content]`,
  publishedAt: new Date("YYYY-MM-DD"),
  category: "[Company News|Industry Updates|Events|Partnerships]",
  featuredImage: "/images/[descriptive-image-name].jpg",
}
```

### Content Categories

| Category | Examples |
|----------|----------|
| Company News | Certifications, expansions, milestones |
| Industry Updates | Market trends, regulatory changes |
| Events | Trade shows, conferences, webinars |
| Partnerships | Collaborations, vendor relationships |

### Content Templates

#### Announcement Lead
```html
<div class="lead-text">
  <p><strong>[Key announcement]</strong> [Context]. This development [impact statement].</p>
</div>
```

#### Key Details Box
```html
<div class="highlight-box">
  <h4>📋 Key Details</h4>
  <ul class="check-list">
    <li><strong>What:</strong> [Description]</li>
    <li><strong>When:</strong> [Timeline]</li>
    <li><strong>Where:</strong> [Locations]</li>
    <li><strong>Impact:</strong> [How this affects customers]</li>
  </ul>
</div>
```

#### Quote Section
```html
<div class="quote-box">
  <blockquote>
    <p>"[Executive or stakeholder quote]"</p>
  </blockquote>
  <cite>— [Name], [Title] at [Company]</cite>
</div>
```

---

## 3. Case Studies

Case studies showcase successful customer projects, demonstrating capabilities through real-world examples. Powerful social proof and sales tools.

### Article Structure

```typescript
{
  id: "[unique-id]",
  slug: "[descriptive-url-slug]",
  title: "[Result-Focused Title]",
  industry: "[Customer Industry]",
  challenge: "[2-3 sentence description]",
  solution: "[2-3 sentence description]",
  results: [
    { metric: "[Name]", value: "[Result]", description: "[Details]" },
  ],
  content: `[structured HTML]`,
  image: "/images/[image-name].jpg",
  tags: ["[Tag1]", "[Tag2]"],
  testimonial: "[Customer quote]",
}
```

### Required Elements

- [ ] Customer name and industry
- [ ] 3+ quantified results with numbers
- [ ] Customer testimonial with attribution
- [ ] Technical solution details
- [ ] High-quality product/process image
- [ ] Industry-relevant tags (3-5)

### Content Templates

#### Challenge Lead
```html
<div class="lead-text">
  <p><strong>The Challenge:</strong> [Compelling description of customer problem, pain points, and stakes].</p>
</div>
```

#### Solution Box
```html
<div class="highlight-box">
  <h4>💡 The Solution</h4>
  <p>[Solution overview]. Key elements included:</p>
  <ul class="check-list">
    <li><strong>[Element 1]:</strong> [Specific action]</li>
    <li><strong>[Element 2]:</strong> [Specific action]</li>
  </ul>
</div>
```

#### Results Grid
```html
<h2>📊 Measurable Results</h2>
<div class="results-grid">
  <div class="result-card">
    <div class="result-value">[Number]</div>
    <div class="result-label">[Metric Name]</div>
    <p>[Brief explanation]</p>
  </div>
  <!-- Repeat for 3 results -->
</div>
```

#### Process Steps
```html
<h2>🔍 How We Did It</h2>
<div class="process-steps">
  <div class="step">
    <h4>1. [Phase Name]</h4>
    <p>[Description]. <strong>[Key milestone]</strong>.</p>
  </div>
  <!-- Repeat for each phase -->
</div>
```

#### Testimonial Box
```html
<div class="testimonial-box">
  <blockquote>
    <p>"[Compelling customer quote]"</p>
  </blockquote>
  <div class="testimonial-author">
    <strong>[Name]</strong>, [Title] at [Company]
  </div>
</div>
```

### Tags Reference

**Industry**: Consumer Electronics, Medical Device, Industrial IoT, Automotive  
**Capability**: Rapid NPI, Scale-Up, FDA Compliance, Cost Reduction  
**Technology**: IoT, Wearables, AI Hardware, Robotics  
**Challenge**: Startup, Supply Chain, Quality, Time-to-Market

---

## 4. Shared Resources

### Image Acquisition

**Source**: Unsplash (free, commercial use allowed)

```bash
# Download image
curl -o client/public/images/[filename].jpg "https://images.unsplash.com/photo-[ID]?w=1200&q=80"
```

**Naming Convention**:
- Blog: `blog-[topic]-[descriptor].jpg`
- News: `news-[topic]-[descriptor].jpg`
- Case Study: `case-study-[client]-[descriptor].jpg`

**Requirements**:
- Minimum width: 1200px for featured images
- Format: JPG for photos, PNG for graphics
- Theme: Professional, manufacturing, technology

### Common Styling Classes

| Class | Purpose |
|-------|---------|
| `lead-text` | Opening paragraph emphasis |
| `feature-grid` | 2x2 feature display |
| `benefits-grid` | 3x2 benefits display |
| `highlight-box` | Important callouts |
| `quote-box` | Customer/executive quotes |
| `conclusion-box` | Strong closing with CTA |
| `check-list` | Action items, best practices |
| `process-steps` | Phased approach display |
| `results-grid` | Quantified results showcase |
| `evaluation-criteria` | Selection criteria |

### Tone Guidelines

| Content Type | Tone |
|--------------|------|
| Blog | Professional yet accessible, data-driven |
| News | Journalistic, objective, timely |
| Case Study | Results-oriented, narrative-driven |

---

## Workflow Checklist

### For All Content Types
- [ ] Research topic and gather data
- [ ] Create outline with key points
- [ ] Write content using HTML templates
- [ ] Search and download featured image
- [ ] Add image to `client/public/images/`
- [ ] Review for clarity and accuracy
- [ ] Test locally (`pnpm dev`)
- [ ] Commit and push to GitHub
- [ ] Verify Vercel deployment

---

## Source Files

- **Blog**: `client/src/pages/Blog.tsx`
- **News**: `client/src/pages/News.tsx`
- **Case Studies**: `client/src/pages/CaseStudies.tsx`
- **Images**: `client/public/images/`

---

*Document version: 2.0 (Consolidated)*  
*Last updated: 2026-02-06*  
*Replaces: Blog-Creation-Guide.md, News-Creation-Guide.md, Case-Studies-Creation-Guide.md*
