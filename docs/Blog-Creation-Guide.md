# Blog Creation Guide

Complete guide for creating professional blog articles for the Illuminious website.

## Overview

Blog articles provide educational content about electronics manufacturing, supply chain optimization, DFM best practices, and hardware startup guidance. These articles establish Illuminious as a thought leader and drive organic traffic.

---

## Article Structure

### TypeScript Template

```typescript
{
  id: [next available number],
  slug: "[descriptive-url-slug]",
  title: "[Compelling Title: 8-12 Words]",
  excerpt: "[Engaging summary: 20-30 words highlighting key value proposition]",
  content: `[structured HTML content]`,
  publishedAt: new Date("YYYY-MM-DD"),
  readTime: [estimated minutes],
  authorName: "Illuminious Team",
  featuredImage: "/images/[descriptive-image-name].jpg",
  category: "[Industry Insights|Technical|Startup Guide|Supply Chain|Regulated Industries]",
}
```

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Sequential number | `8` |
| `slug` | URL-friendly identifier | `"sustainable-manufacturing-2026"` |
| `title` | 8-12 words, benefit-driven | `"Sustainable Manufacturing: Building Eco-Friendly Electronics in 2026"` |
| `excerpt` | 20-30 word summary | `"Discover how leading electronics manufacturers are reducing environmental impact..."` |
| `content` | HTML content with styling classes | See templates below |
| `publishedAt` | Publication date | `new Date("2026-02-06")` |
| `readTime` | Estimated minutes to read | `9` |
| `featuredImage` | Path to hero image | `"/images/blog-sustainable-manufacturing.jpg"` |
| `category` | Content classification | `"Industry Insights"` |

---

## Content Styling Templates

### 1. Lead Introduction

Creates visual emphasis for the opening paragraph.

```html
<div class="lead-text">
  <p><strong>[Key concept]</strong> [Context and significance]. [Supporting details with <strong>key emphasis</strong>].</p>
</div>
```

**Example:**
```html
<div class="lead-text">
  <p><strong>Sustainability is no longer just a marketing buzzword—it's becoming a business imperative.</strong> Consumers, investors, and regulators are demanding that electronics manufacturers take responsibility for their environmental impact. In 2026, sustainable manufacturing practices are separating industry leaders from laggards.</p>
</div>
```

---

### 2. Feature Grid (2x2 Layout)

Use for showcasing 4 related items, benefits, or key points.

```html
<div class="feature-grid">
  <div class="feature-item">
    <h4>[Icon] [Title]</h4>
    <p>[Description with <strong>key stats</strong>]</p>
  </div>
  <!-- Repeat for 4 items -->
</div>
```

**Example:**
```html
<div class="feature-grid">
  <div class="feature-item">
    <h4>🌍 1. Regulatory Pressure</h4>
    <p>The EU's Green Deal and similar regulations worldwide are mandating lower carbon footprints and responsible material sourcing.</p>
  </div>
  <div class="feature-item">
    <h4>💚 2. Consumer Demand</h4>
    <p>Studies show <strong>73% of consumers</strong> are willing to pay more for sustainable products.</p>
  </div>
  <div class="feature-item">
    <h4>📈 3. Investor Expectations</h4>
    <p>ESG criteria are increasingly important for funding and valuations.</p>
  </div>
  <div class="feature-item">
    <h4>💰 4. Cost Savings</h4>
    <p>Energy efficiency and waste reduction directly impact the bottom line.</p>
  </div>
</div>
```

---

### 3. Check List

Use for action items, best practices, or requirements.

```html
<ul class="check-list">
  <li><strong>[Bold key term]:</strong> [Description]</li>
  <li><strong>[Bold key term]:</strong> [Description]</li>
</ul>
```

**Example:**
```html
<ul class="check-list">
  <li><strong>Lead-free solder:</strong> Use lead-free and halogen-free PCBs to reduce toxic substances</li>
  <li><strong>Recycled plastics:</strong> Incorporate bio-based materials for product enclosures</li>
  <li><strong>Conflict-free minerals:</strong> Verify ethical sourcing practices</li>
  <li><strong>Rare earth reduction:</strong> Design to reduce dependency on rare earth elements</li>
</ul>
```

---

### 4. Highlight Box

For important callouts, warnings, or key statistics.

```html
<div class="highlight-box">
  <h4>[Icon] [Title]</h4>
  <p>[Context text]</p>
  <ul>
    <li>[Bullet points]</li>
  </ul>
</div>
```

**Example:**
```html
<div class="highlight-box">
  <h4>📊 Measuring and Reporting Impact</h4>
  <p>You can't manage what you don't measure. Leading manufacturers track:</p>
  <ul>
    <li>Carbon footprint (Scope 1, 2, and 3 emissions)</li>
    <li>Water usage and recycling rates</li>
    <li>Waste diversion from landfills</li>
    <li>Renewable energy percentage</li>
  </ul>
</div>
```

---

### 5. Evaluation Criteria

For partner selection criteria, checklists, or phased approaches.

```html
<div class="evaluation-criteria">
  <div class="criterion">
    <span class="badge">[Category Label]</span>
    <p><strong>[Key point]</strong> [Details]</p>
  </div>
  <!-- Repeat for multiple criteria -->
</div>
```

**Example:**
```html
<div class="evaluation-criteria">
  <div class="criterion">
    <span class="badge">Certification</span>
    <p><strong>ISO 14001 environmental management</strong> certification as a baseline requirement.</p>
  </div>
  <div class="criterion">
    <span class="badge">Transparency</span>
    <p><strong>Request carbon footprint data</strong> and reduction targets from potential partners.</p>
  </div>
</div>
```

---

### 6. Benefits Grid (6 Items)

For showcasing advantages in a 3x2 grid layout.

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
    <h5>💵 Cost Reduction</h5>
    <p>Lower energy and material costs through efficiency improvements</p>
  </div>
  <div class="benefit">
    <h5>🏆 Brand Value</h5>
    <p>Enhanced reputation and increased customer loyalty</p>
  </div>
  <div class="benefit">
    <h5>🛡️ Risk Mitigation</h5>
    <p>Regulatory compliance and future-proofing</p>
  </div>
  <div class="benefit">
    <h5>💳 Green Financing</h5>
    <p>Access to preferential financing rates</p>
  </div>
  <div class="benefit">
    <h5>👥 Talent Attraction</h5>
    <p>Improved employee recruitment and retention</p>
  </div>
  <div class="benefit">
    <h5>🌟 Market Access</h5>
    <p>Entry to eco-conscious markets</p>
  </div>
</div>
```

---

### 7. Conclusion Box

Strong closing with call-to-action.

```html
<div class="conclusion-box">
  <h3>Looking Ahead</h3>
  <p>[Forward-looking statement]</p>
  <p><strong>[Call to action or key takeaway]</strong></p>
</div>
```

**Example:**
```html
<div class="conclusion-box">
  <h3>Looking Ahead</h3>
  <p>Sustainability will continue to reshape electronics manufacturing. Companies that invest in green practices today will be better positioned for tomorrow's regulatory environment and consumer expectations.</p>
  <p><strong>The question is no longer whether to embrace sustainable manufacturing—but how quickly you can make the transition.</strong></p>
</div>
```

---

## Image Acquisition

### Method 1: Browser-Based Image Search (Recommended)

**Step 1: Start browser and navigate to Unsplash**
```bash
# Open Unsplash with relevant search keywords
browser: open (profile: "openclaw", url: "https://unsplash.com/s/photos/electronics-manufacturing")
```

**Step 2: Search and select image**
```bash
# View available images
browser: snapshot

# Click on preferred image
browser: act (request: {kind: "click", ref: "[image-ref]"})

# Note the image ID from URL: /photos/[IMAGE_ID]
```

**Step 3: Download the image**
```bash
# Download using image ID
curl -o client/public/images/blog-[filename].jpg "https://unsplash.com/photos/[IMAGE_ID]/download?force=true"

# Or use sized URL (recommended)
curl -o client/public/images/blog-[filename].jpg "https://images.unsplash.com/photo-[IMAGE_ID]?w=1200&q=80"
```

### Method 2: Direct URL Download

If you already know the Unsplash image URL:
```bash
curl -o client/public/images/blog-[filename].jpg "https://images.unsplash.com/photo-[ID]?w=1200&q=80"
```

### Image Guidelines

| Aspect | Requirement |
|--------|-------------|
| **Source** | Unsplash (free, commercial use allowed) |
| **Minimum width** | 1200px for featured images |
| **Format** | JPG for photos, PNG for graphics |
| **Brand alignment** | Blue tones, professional manufacturing/tech themes |
| **Naming** | `blog-[topic]-[descriptor].jpg` |
| **Storage** | `client/public/images/` |

### Quick Reference: Unsplash URLs

```
Original:  https://unsplash.com/photos/[IMAGE_ID]/download?force=true
1200px:    https://images.unsplash.com/photo-[IMAGE_ID]?w=1200&q=80
800px:     https://images.unsplash.com/photo-[IMAGE_ID]?w=800&q=80
400px:     https://images.unsplash.com/photo-[IMAGE_ID]?w=400&q=80
```

---

## Content Writing Guidelines

### Tone & Style

- **Professional yet accessible** - Expert knowledge without jargon overload
- **Data-driven** - Include specific statistics and research
- **Action-oriented** - Provide actionable advice readers can implement
- **Direct address** - Use "you" and "your" to engage readers

### Structure Best Practices

| Element | Best Practice |
|---------|---------------|
| **Title** | 8-12 words, benefit-driven, include year for trends |
| **Excerpt** | Compelling hook that creates curiosity |
| **Length** | 800-1500 words, 8-12 minute read time |
| **Sections** | Use numbered lists (1., 2., 3.) for sequential processes |
| **Emphasis** | Bold key terms, statistics, and actionable advice |
| **Subheadings** | Use H2 for main sections, H3 for subsections with emoji icons |

### SEO Optimization

- Include primary keyword in title and first paragraph
- Use descriptive subheadings (H2, H3)
- Add relevant tags naturally throughout content
- Category should match existing taxonomy
- Include internal links to related content

### Categories

- **Industry Insights** - Market trends, future predictions, industry analysis
- **Technical** - DFM, manufacturing processes, technical guides
- **Startup Guide** - Advice for hardware startups, scaling tips
- **Supply Chain** - Logistics, diversification, optimization
- **Regulated Industries** - Medical, automotive compliance guides

---

## Workflow Checklist

- [ ] Research topic and gather data/statistics
- [ ] Create article outline with key points
- [ ] Write content using HTML templates
- [ ] Search and download featured image
- [ ] Add image to `client/public/images/`
- [ ] Update `featuredImage` path in article object
- [ ] Review and edit for clarity and accuracy
- [ ] Test locally to verify rendering
- [ ] Commit and push to GitHub
- [ ] Verify Vercel deployment
- [ ] Send Telegram notification to owner

---

## Example: Complete Blog Article

See `client/src/pages/Blog.tsx` for full examples, including:
- "Sustainable Manufacturing: Building Eco-Friendly Electronics in 2026"
- "How to Choose the Right Manufacturing Partner for Your Hardware Startup"
- "Design for Manufacturing: Best Practices for Electronics Products"

---

## Related Resources

- **Skill File**: `illuminious-web/SKILL.md`
- **Source File**: `client/src/pages/Blog.tsx`
- **Template Reference**: See existing blog posts in Blog.tsx
- **Image Storage**: `client/public/images/`
