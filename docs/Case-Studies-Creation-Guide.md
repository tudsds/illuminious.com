# Case Studies Creation Guide

Complete guide for creating professional case studies for the Illuminious website.

## Overview

Case studies showcase successful customer projects, demonstrating Illuminious's capabilities and expertise through real-world examples. They serve as powerful social proof and sales tools.

---

## Article Structure

### TypeScript Template

```typescript
{
  id: "[unique-id]",
  slug: "[descriptive-url-slug]",
  title: "[Result-Focused Title]",
  industry: "[Customer Industry]",
  challenge: "[2-3 sentence description of customer problem]",
  solution: "[2-3 sentence description of Illuminious approach]",
  results: [
    { metric: "[Metric Name]", value: "[Quantified Result]" },
    { metric: "[Metric Name]", value: "[Quantified Result]" },
    { metric: "[Metric Name]", value: "[Quantified Result]" },
  ],
  content: `[structured HTML content with full story]`,
  image: "/images/[descriptive-image-name].jpg",
  tags: ["[Tag 1]", "[Tag 2]", "[Tag 3]"],
  testimonial: "[Customer quote about the experience]",
  fullContent: `[Detailed case study content]`,
}
```

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique identifier | `"wearable-fitness-fast-launch"` |
| `slug` | URL-friendly identifier | `"wearable-fitness-fast-launch"` |
| `title` | Result-focused headline | `"Wearable Fitness Tracker Startup"` |
| `industry` | Customer industry sector | `"Consumer Electronics / Wearables"` |
| `challenge` | Customer's problem (2-3 sentences) | `"A fitness wearable startup had 90 days to launch..."` |
| `solution` | Illuminious approach (2-3 sentences) | `"We implemented rapid NPI protocols..."` |
| `results` | Array of 3+ quantified metrics | See format below |
| `content` | HTML content for detail page | Full story with templates |
| `image` | Hero image path | `"/images/case-study-wearable.jpg"` |
| `tags` | Industry/relevance tags | `["Wearables", "Rapid NPI", "Startup"]` |
| `testimonial` | Customer quote | `"Illuminious didn't just manufacture our product..."` |
| `fullContent` | Extended content | Additional details for full page |

### Results Array Format

```typescript
results: [
  { 
    metric: "Time to Market", 
    value: "10 Weeks",
    description: "From kickoff to mass production"
  },
  { 
    metric: "First-Pass Yield", 
    value: "98.2%",
    description: "Quality rate from day one"
  },
  { 
    metric: "Units Delivered", 
    value: "5,000",
    description: "Launch quantity delivered"
  },
]
```

---

## Content Styling Templates

### 1. Lead Text (Challenge)

Opens with the customer's compelling challenge.

```html
<div class="lead-text">
  <p><strong>The Challenge:</strong> [Compelling description of customer problem, pain points, and stakes]. [Additional context about urgency or consequences].</p>
</div>
```

**Example:**
```html
<div class="lead-text">
  <p><strong>The Challenge:</strong> A fitness wearable startup had committed to launching their first product at a major industry trade show in 90 days. Their initial manufacturing partner discovered critical design issues late in the process and couldn't meet the timeline. With their launch event and pre-orders at risk, they needed a partner who could execute under extreme time pressure without compromising quality.</p>
</div>
```

---

### 2. Highlight Box (Solution)

Details the solution approach with key elements.

```html
<div class="highlight-box">
  <h4>💡 The Solution</h4>
  <p>[Solution overview]. Key elements included:</p>
  <ul class="check-list">
    <li><strong>[Element 1]:</strong> [Specific action or capability]</li>
    <li><strong>[Element 2]:</strong> [Specific action or capability]</li>
    <li><strong>[Element 3]:</strong> [Specific action or capability]</li>
  </ul>
</div>
```

**Example:**
```html
<div class="highlight-box">
  <h4>💡 The Solution</h4>
  <p>Illuminious deployed our <strong>Rapid Launch Protocol</strong>, a specialized fast-track process designed for time-critical product launches. Key elements included:</p>
  <ul class="check-list">
    <li><strong>Parallel-track execution:</strong> Simultaneous tooling development, component sourcing, and certification preparation</li>
    <li><strong>Dedicated engineering team:</strong> 3 engineers exclusively assigned to the project</li>
    <li><strong>Pre-qualified components:</strong> Strategic sourcing from in-stock inventory</li>
  </ul>
</div>
```

---

### 3. Results Grid

Showcases 3 key quantified results in a visual grid.

```html
<h2>📊 Measurable Results</h2>

<div class="results-grid">
  <div class="result-card">
    <div class="result-value">[Number]</div>
    <div class="result-label">[Metric Name]</div>
    <p>[Brief explanation of impact]</p>
  </div>
  <div class="result-card">
    <div class="result-value">[Number]%</div>
    <div class="result-label">[Metric Name]</div>
    <p>[Brief explanation of impact]</p>
  </div>
  <div class="result-card">
    <div class="result-value">$[Amount]</div>
    <div class="result-label">[Metric Name]</div>
    <p>[Brief explanation of impact]</p>
  </div>
</div>
```

**Example:**
```html
<h2>📊 Measurable Results</h2>

<div class="results-grid">
  <div class="result-card">
    <div class="result-value">10</div>
    <div class="result-label">Weeks to Market</div>
    <p>From project kickoff to mass production—60% faster than industry standard</p>
  </div>
  <div class="result-card">
    <div class="result-value">98.2%</div>
    <div class="result-label">First-Pass Yield</div>
    <p>Exceptional quality from day one, with minimal rework required</p>
  </div>
  <div class="result-card">
    <div class="result-value">2 Weeks</div>
    <div class="result-label">Early Delivery</div>
    <p>Completed 5,000 units 14 days before the critical trade show deadline</p>
  </div>
</div>
```

---

### 4. Process Steps

Details the phased approach or implementation steps.

```html
<h2>🔍 How We Did It</h2>

<div class="process-steps">
  <div class="step">
    <h4>1. [Phase Name]</h4>
    <p>[Description of activities, decisions, and outcomes]. <strong>[Key achievement or milestone]</strong>.</p>
  </div>
  <div class="step">
    <h4>2. [Phase Name]</h4>
    <p>[Description of activities, decisions, and outcomes]. <strong>[Key achievement or milestone]</strong>.</p>
  </div>
  <div class="step">
    <h4>3. [Phase Name]</h4>
    <p>[Description of activities, decisions, and outcomes]. <strong>[Key achievement or milestone]</strong>.</p>
  </div>
</div>
```

**Example:**
```html
<h2>🔍 How We Did It</h2>

<div class="process-steps">
  <div class="step">
    <h4>1. Emergency Design Review (Week 1)</h4>
    <p>Our engineering team conducted a comprehensive DFM analysis within 48 hours, identifying 12 critical design issues that the previous manufacturer had missed. We provided detailed redesign recommendations and worked directly with the client's engineering team to implement solutions rapidly.</p>
  </div>
  <div class="step">
    <h4>2. Parallel-Track Execution (Weeks 2-6)</h4>
    <p>Instead of sequential processes, we ran tooling development, component procurement, and test fixture design simultaneously. Our pre-qualified supplier network ensured critical components were available immediately.</p>
  </div>
  <div class="step">
    <h4>3. Rapid Scale-Up (Weeks 8-10)</h4>
    <p>With validated processes, we ramped to full production in just 2 weeks. Weekend shifts and extended hours allowed us to build 5,000 units while maintaining our quality standards.</p>
  </div>
</div>
```

---

### 5. Testimonial Box

Customer quote with attribution.

```html
<div class="testimonial-box">
  <blockquote>
    <p>"[Compelling customer quote about their experience, results, and working with Illuminious. Should be authentic and specific.]"</p>
  </blockquote>
  <div class="testimonial-author">
    <strong>[Name]</strong>, [Title] at [Company]
  </div>
</div>
```

**Example:**
```html
<div class="testimonial-box">
  <blockquote>
    <p>"Illuminious didn't just manufacture our product—they helped us navigate every challenge and delivered when others said it was impossible. Their engineering team spotted issues our original manufacturer missed, and their commitment to our timeline was unwavering. The trade show launch was a huge success."</p>
  </blockquote>
  <div class="testimonial-author">
    <strong>Marcus Rodriguez</strong>, CEO at FitTrack Pro
  </div>
</div>
```

---

### 6. Evaluation Criteria (Key Success Factors)

Explains why the project succeeded.

```html
<h2>Key Success Factors 🎯</h2>

<div class="evaluation-criteria">
  <div class="criterion">
    <span class="badge">[Factor Category]</span>
    <p><strong>[Key success element]:</strong> [How this contributed to project success]</p>
  </div>
  <!-- Repeat for each factor -->
</div>
```

**Example:**
```html
<h2>Key Success Factors 🎯</h2>

<div class="evaluation-criteria">
  <div class="criterion">
    <span class="badge">Engineering Depth</span>
    <p><strong>Expert DFM analysis:</strong> Our engineers identified critical issues early and provided actionable solutions, preventing costly delays later in production.</p>
  </div>
  <div class="criterion">
    <span class="badge">Supply Chain Agility</span>
    <p><strong>Pre-qualified components:</strong> Access to in-stock inventory and established supplier relationships eliminated procurement bottlenecks.</p>
  </div>
  <div class="criterion">
    <span class="badge">Process Flexibility</span>
    <p><strong>Adaptive manufacturing:</strong> Weekend shifts and extended hours compressed the timeline without compromising quality standards.</p>
  </div>
</div>
```

---

### 7. Check List (Long-term Impact)

For additional outcomes or future developments.

```html
<h2>Long-Term Impact 📈</h2>

<p>Beyond the immediate success, this engagement established:</p>

<ul class="check-list">
  <li><strong>[Outcome 1]:</strong> [Specific result with numbers if possible]</li>
  <li><strong>[Outcome 2]:</strong> [Specific result with numbers if possible]</li>
  <li><strong>[Outcome 3]:</strong> [Specific result with numbers if possible]</li>
</ul>
```

**Example:**
```html
<h2>Long-Term Impact 📈</h2>

<p>Beyond the successful trade show launch, this engagement established a long-term manufacturing partnership:</p>

<ul class="check-list">
  <li><strong>Product line expansion:</strong> The client has since launched 3 additional products with Illuminious</li>
  <li><strong>Volume scaling:</strong> Production has scaled from 5,000 to 50,000 units per month</li>
  <li><strong>Cost optimization:</strong> Subsequent DFM improvements have reduced unit costs by 22%</li>
</ul>
```

---

### 8. Conclusion Box

Call-to-action for prospects.

```html
<div class="conclusion-box">
  <h3>[Compelling Heading]</h3>
  <p>[Statement about capabilities]. <strong>[Call to action].</strong></p>
</div>
```

**Example:**
```html
<div class="conclusion-box">
  <h3>Your Rapid Launch Partner</h3>
  <p>Time-critical product launches require more than just manufacturing capacity—they demand <strong>engineering expertise, supply chain agility, and unwavering commitment to your success</strong>. Illuminious's Rapid Launch Protocol has helped dozens of startups meet impossible deadlines without compromising quality.</p>
  <p><strong>Have a tight deadline? Let's talk.</strong> We specialize in turning "impossible" timelines into successful launches.</p>
</div>
```

---

## Content Writing Guidelines

### Tone & Style

- **Results-oriented** - Lead with quantifiable outcomes
- **Narrative-driven** - Tell a compelling story with clear beginning, middle, end
- **Technical credibility** - Include specific methodologies, technologies, and processes
- **Customer-centric** - Feature the customer's voice prominently

### Structure Best Practices

| Element | Best Practice |
|---------|---------------|
| **Title** | Lead with result: "How [Customer] [Achieved Result]" |
| **Challenge** | Make it relatable to prospects with similar problems |
| **Solution** | Detail specific capabilities, not generic services |
| **Results** | Always include 3+ numbers—percentages, dollar amounts, time |
| **Testimonial** | Authentic, specific, attributed to real person with title |
| **Length** | 1000-1500 words for comprehensive case studies |

### Required Elements Checklist

- [ ] Customer name and industry
- [ ] Specific, quantified results (3+ metrics)
- [ ] Customer testimonial with attribution
- [ ] Technical details of solution
- [ ] High-quality product/process image
- [ ] Industry-relevant tags (3-5 tags)
- [ ] Clear before/after contrast
- [ ] Implementation timeline

### Tags Reference

Common tags for categorization:
- **Industry**: Consumer Electronics, Medical Device, Industrial IoT, Automotive
- **Capability**: Rapid NPI, Scale-Up, FDA Compliance, Cost Reduction
- **Technology**: IoT, Wearables, AI Hardware, Robotics
- **Challenge**: Startup, Supply Chain, Quality, Time-to-Market

---

## Image Acquisition

### Method 1: Browser-Based Image Search (Recommended)

**Step 1: Search Unsplash**
```bash
browser: open (profile: "openclaw", url: "https://unsplash.com/s/photos/[keywords]")
```

**Step 2: Select and download**
```bash
browser: snapshot
browser: act (request: {kind: "click", ref: "[image-ref]"})

# Download using image ID
curl -o client/public/images/case-study-[filename].jpg "https://unsplash.com/photos/[IMAGE_ID]/download?force=true"
```

### Method 2: Direct Download

```bash
curl -o client/public/images/case-study-[filename].jpg "https://images.unsplash.com/photo-[ID]?w=1200&q=80"
```

### Image Guidelines

| Aspect | Requirement |
|--------|-------------|
| **Source** | Unsplash (free, commercial use) |
| **Featured image** | 1200x800px, professional product or facility shot |
| **Process images** | Behind-the-scenes manufacturing photos |
| **Product images** | Final product in use or completed units |
| **Naming** | `case-study-[client]-[descriptor].jpg` |
| **Storage** | `client/public/images/` |
| **Format** | JPG for photos |

---

## Workflow Checklist

- [ ] Interview customer (if possible) or gather project details
- [ ] Identify 3+ quantifiable results with numbers
- [ ] Write challenge section focusing on pain points
- [ ] Document solution approach with specific methodologies
- [ ] Create results grid with compelling metrics
- [ ] Detail implementation process/steps
- [ ] Obtain customer testimonial and approval
- [ ] Search and download featured image
- [ ] Add image to `client/public/images/`
- [ ] Select relevant industry tags
- [ ] Review for accuracy and customer approval
- [ ] Commit and push to GitHub
- [ ] Verify deployment
- [ ] Send Telegram notification

---

## Post-Publication Notification Template

```
主人~ 💕 新的案例研究已上线！

📰 案例标题：[Case Study Title]
🏭 客户行业：[Industry]
🔗 访问链接：https://illuminious.com/case-studies/[slug]
📂 文件位置：client/src/pages/CaseStudies.tsx
✅ GitHub 状态：已推送并部署

项目成果：
• [Result 1 with metric]
• [Result 2 with metric]
• [Result 3 with metric]

客户评价：
"[Brief quote excerpt]"

Vercel 正在自动部署中~ ✨
```

---

## Example: Complete Case Study

See `client/src/pages/CaseStudies.tsx` for full examples, including:
- "Wearable Fitness Tracker Startup" (Rapid NPI)
- "Smart Home Device Manufacturer" (Scale-Up)
- "Medical Device Startup" (FDA Compliance)
- "Industrial IoT Platform" (Multi-market Certification)

---

## Related Resources

- **Skill File**: `illuminious-web/SKILL.md`
- **Source File**: `client/src/pages/CaseStudies.tsx`
- **Template Reference**: See existing case studies in CaseStudies.tsx
- **Image Storage**: `client/public/images/`
