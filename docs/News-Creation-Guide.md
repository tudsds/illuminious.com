# News Creation Guide

Complete guide for creating professional news articles for the Illuminious website.

## Overview

News articles highlight company announcements, industry updates, events, and partnerships. Unlike blog posts, news articles are timely, factual, and focused on specific announcements or developments.

---

## Article Structure

### TypeScript Template

```typescript
{
  id: [next available number],
  slug: "[descriptive-url-slug]",
  title: "[Newsworthy Title: 8-12 Words]",
  excerpt: "[Summary: 20-30 words highlighting the announcement]",
  content: `[structured HTML content]`,
  publishedAt: new Date("YYYY-MM-DD"),
  category: "[Company News|Industry Updates|Events|Partnerships]",
  featuredImage: "/images/[descriptive-image-name].jpg",
}
```

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Sequential number | `1` |
| `slug` | URL-friendly identifier | `"illuminious-achieves-iso-14001-certification"` |
| `title` | Newsworthy headline | `"Illuminious Achieves ISO 14001 Environmental Management Certification"` |
| `excerpt` | Announcement summary | `"We are proud to announce that Illuminious has achieved ISO 14001:2015 certification..."` |
| `content` | HTML content with styling classes | See templates below |
| `publishedAt` | Publication date | `new Date("2026-02-06")` |
| `category` | Content classification | `"Company News"` |
| `featuredImage` | Path to hero image | `"/images/news-iso-certification.jpg"` |

---

## Content Categories

### Company News
Internal announcements, milestones, achievements, and company developments.

**Examples:**
- Facility expansions
- New certifications (ISO, quality standards)
- Employee milestones
- Technology investments
- Awards and recognitions

### Industry Updates
Market trends, regulatory changes, technology shifts affecting the industry.

**Examples:**
- New regulations affecting manufacturing
- Industry report summaries
- Technology breakthroughs
- Market analysis
- Trade show highlights

### Events
Trade shows, conferences, webinars, and company events.

**Examples:**
- Event participation announcements
- Webinar schedules
- Conference presentations
- Open house events
- Customer appreciation events

### Partnerships
New collaborations, vendor relationships, strategic alliances.

**Examples:**
- New manufacturing partnerships
- Technology integrations
- Distribution agreements
- Startup accelerator collaborations
- Supplier announcements

---

## Content Styling Templates

### 1. Announcement Lead

Opening paragraph that immediately communicates the key announcement.

```html
<div class="lead-text">
  <p><strong>[Key announcement]</strong> [Context and significance]. This development [impact statement].</p>
</div>
```

**Example:**
```html
<div class="lead-text">
  <p><strong>Illuminious is proud to announce that we have achieved ISO 14001:2015 certification</strong> for our Environmental Management System (EMS) across all global manufacturing facilities. This prestigious certification recognizes our commitment to sustainable manufacturing practices and environmental responsibility.</p>
</div>
```

---

### 2. Key Details Highlight Box

Essential 5W1H information organized for quick scanning.

```html
<div class="highlight-box">
  <h4>📋 Key Details</h4>
  <ul class="check-list">
    <li><strong>What:</strong> [Description of announcement/change]</li>
    <li><strong>When:</strong> [Timeline or effective date]</li>
    <li><strong>Where:</strong> [Locations affected]</li>
    <li><strong>Who:</strong> [Parties involved]</li>
    <li><strong>Impact:</strong> [How this affects customers/partners]</li>
  </ul>
</div>
```

**Example:**
```html
<div class="highlight-box">
  <h4>📋 Key Details</h4>
  <ul class="check-list">
    <li><strong>What:</strong> ISO 14001:2015 Environmental Management System certification achieved</li>
    <li><strong>When:</strong> Certification completed January 2026, effective immediately</li>
    <li><strong>Where:</strong> All global manufacturing facilities in Indonesia, Vietnam, and Mexico</li>
    <li><strong>Impact:</strong> Enhanced sustainability credentials for customers and partners</li>
  </ul>
</div>
```

---

### 3. Quote Section

Executive or stakeholder quotes add credibility and human interest.

```html
<div class="quote-box">
  <blockquote>
    <p>"[Quote from executive or stakeholder]"</p>
  </blockquote>
  <cite>— [Name], [Title] at [Company]</cite>
</div>
```

**Example:**
```html
<div class="quote-box">
  <blockquote>
    <p>"Achieving ISO 14001 certification is a significant milestone that reflects our genuine commitment to environmental stewardship. Our customers can be confident that their products are manufactured with sustainability as a core priority."</p>
  </blockquote>
  <cite>— Sarah Chen, VP of Operations at Illuminious</cite>
</div>
```

---

### 4. Feature Grid (4 Items)

Use for benefits, impacts, or key features of the announcement.

```html
<div class="feature-grid">
  <div class="feature-item">
    <h4>[Icon] [Title]</h4>
    <p>[Description with <strong>key details</strong>]</p>
  </div>
  <!-- Repeat for 4 items -->
</div>
```

**Example:**
```html
<div class="feature-grid">
  <div class="feature-item">
    <h4>♻️ Waste Reduction Programs</h4>
    <p><strong>Zero-waste-to-landfill initiatives</strong> at all facilities with comprehensive recycling systems.</p>
  </div>
  <div class="feature-item">
    <h4>⚡ Energy Efficiency</h4>
    <p><strong>30% reduction in energy consumption</strong> through LED lighting and smart HVAC systems.</p>
  </div>
  <div class="feature-item">
    <h4>💧 Water Conservation</h4>
    <p><strong>Closed-loop water systems</strong> and advanced wastewater treatment.</p>
  </div>
  <div class="feature-item">
    <h4>📊 Continuous Monitoring</h4>
    <p><strong>Real-time tracking</strong> of environmental metrics with quarterly reporting.</p>
  </div>
</div>
```

---

### 5. Evaluation Criteria (Phased Approach)

For implementation timelines or process descriptions.

```html
<div class="evaluation-criteria">
  <div class="criterion">
    <span class="badge">[Phase Name]</span>
    <p><strong>[Key activity]:</strong> [Description of activities and outcomes]</p>
  </div>
  <!-- Repeat for each phase -->
</div>
```

**Example:**
```html
<div class="evaluation-criteria">
  <div class="criterion">
    <span class="badge">Phase 1: Assessment</span>
    <p><strong>Comprehensive environmental audit:</strong> Baseline measurement of energy, water, waste, and emissions across all facilities.</p>
  </div>
  <div class="criterion">
    <span class="badge">Phase 2: Implementation</span>
    <p><strong>System upgrades and training:</strong> New equipment, process improvements, and staff training.</p>
  </div>
  <div class="criterion">
    <span class="badge">Phase 3: Certification</span>
    <p><strong>Third-party audit:</strong> Independent certification body verification.</p>
  </div>
</div>
```

---

### 6. Benefits Grid (6 Items)

For customer benefits or future goals.

```html
<div class="benefits-grid">
  <div class="benefit">
    <h5>[Icon] [Title]</h5>
    <p>[Brief description]</p>
  </div>
  <!-- Repeat for 6 items -->
</div>
```

**Example:**
```html
<div class="benefits-grid">
  <div class="benefit">
    <h5>🎯 Carbon Neutrality</h5>
    <p>Achieve carbon-neutral operations by 2027.</p>
  </div>
  <div class="benefit">
    <h5>📈 50% Waste Reduction</h5>
    <p>Reduce manufacturing waste intensity by 50%.</p>
  </div>
  <div class="benefit">
    <h5>☀️ Renewable Energy</h5>
    <p>100% renewable electricity by 2026.</p>
  </div>
  <div class="benefit">
    <h5>🌊 Water Positive</h5>
    <p>Water replenishment projects by 2028.</p>
  </div>
  <div class="benefit">
    <h5>♻️ Circular Economy</h5>
    <p>Expand product take-back programs.</p>
  </div>
  <div class="benefit">
    <h5>📊 Transparency</h5>
    <p>Annual sustainability reports.</p>
  </div>
</div>
```

---

### 7. Conclusion Box

Call-to-action or next steps.

```html
<div class="conclusion-box">
  <h3>[Heading]</h3>
  <p>[Closing statement with <strong>key message</strong>]</p>
</div>
```

**Example:**
```html
<div class="conclusion-box">
  <h3>Partner With a Sustainable Manufacturer</h3>
  <p>As environmental regulations tighten and consumers demand more sustainable products, partnering with an ISO 14001-certified manufacturer gives you a competitive advantage. <strong>Contact us today</strong> to learn how our certified sustainable manufacturing can support your product goals.</p>
</div>
```

---

## Content Writing Guidelines

### Tone & Style

- **Journalistic and objective** - Report facts clearly without marketing fluff
- **Timely and relevant** - Connect to current events, trends, or milestones
- **Customer-focused** - Emphasize benefits and value to the audience
- **Concise** - News articles should be 400-800 words

### Structure Best Practices

| Element | Best Practice |
|---------|---------------|
| **Inverted pyramid** | Most important information first |
| **5 W's in first 2 paragraphs** | Who, What, When, Where, Why |
| **Active voice** | "Illuminious achieved..." not "Achievement was made by..." |
| **Quotes** | Include at least one executive or stakeholder quote |
| **Length** | 400-800 words, 2-5 minute read time |

### SEO Optimization

- Include company name in title when appropriate
- Use descriptive, newsworthy headlines
- Include relevant keywords naturally
- Add category tags for filtering

---

## Image Acquisition

### Direct Download

```bash
curl -o client/public/images/news-[filename].jpg "https://images.unsplash.com/photo-[ID]?w=1200&q=80"
```

### Image Guidelines

| Aspect | Requirement |
|--------|-------------|
| **Source** | Unsplash (free, commercial use) |
| **Minimum width** | 1200px |
| **Format** | JPG for photos |
| **Naming** | `news-[topic]-[descriptor].jpg` |
| **Storage** | `client/public/images/` |
| **Theme** | Professional, manufacturing, technology, team |

---

## Workflow Checklist

- [ ] Identify newsworthy topic or announcement
- [ ] Gather key details (5 W's)
- [ ] Write content using HTML templates
- [ ] Include executive/team quote
- [ ] Search and download featured image
- [ ] Add image to `client/public/images/`
- [ ] Update `featuredImage` path
- [ ] Review for factual accuracy
- [ ] Proofread for clarity and grammar
- [ ] Commit and push to GitHub
- [ ] Verify deployment
- [ ] Send Telegram notification

---

## Post-Publication Notification Template

```
主人~ 💕 最新的新闻资讯已发布！

📰 新闻标题：[News Title]
🔗 访问链接：https://illuminious.com/news/[slug]
📂 文件位置：client/src/pages/News.tsx
📅 发布日期：[Date]
📋 分类：[Category]
✅ GitHub 状态：已推送并部署

新闻摘要：
• [Key point 1]
• [Key point 2]

Vercel 正在自动部署中~ ✨
```

---

## Source File

**Location:** `client/src/pages/News.tsx`

---

*Document version: 2.0*  
*Last updated: 2026-02-06*
