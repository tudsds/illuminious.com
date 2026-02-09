# Blog Content Writing Guide
# 博客内容撰写指南

> **文档版本**: v1.0  
> **适用对象**: 内容创作者、AI 写作助手  
> **目标**: 确保所有博客内容符合 Illuminious 品牌标准并优化 SEO 表现

---

## 一、Blog 板块定位与差异化

### 1.1 核心定位
**Blog 是 Illuminious 的"知识中心"和"教育平台"**

| 维度 | Blog 定位 |
|------|----------|
| **内容性质** | 教育性、指导性、深度分析 |
| **目标受众** | 硬件创业者、产品经理、工程师、采购决策者 |
| **阅读时长** | 6-12 分钟（1500-3000 字） |
| **更新频率** | 每周 1-2 篇 |
| **核心价值** | 建立行业权威、提供实用价值、培养潜在客户 |

### 1.2 与 News、Case Studies 的差异化

| 对比维度 | Blog | News | Case Studies |
|---------|------|------|-------------|
| **内容类型** | 教育性文章 | 公司公告 | 客户成功故事 |
| **写作视角** | 行业专家 | 公司官方 | 客户视角 |
| **目的** | 教育受众、SEO 引流 | 建立信任、展示动态 | 证明能力、促进转化 |
| **CTA 重点** | 订阅、阅读更多 | 联系咨询 | 开始项目 |
| **关键词类型** | 信息类、长尾词 | 品牌词 | 行业+解决方案词 |

### 1.3 现有分类体系

博客内容分为以下 6 个主要类别：

1. **Startup Guide** - 硬件创业指南
   - 目标读者：早期硬件创业公司创始人
   - 主题示例：如何选择制造商、原型设计、众筹准备

2. **Technical** - 技术深度文章
   - 目标读者：工程师、技术产品经理
   - 主题示例：DFM 最佳实践、IoT 设备制造、PCB 设计

3. **Industry Insights** - 行业洞察
   - 目标读者：行业观察者、战略决策者
   - 主题示例：市场趋势、技术发展方向、供应链分析

4. **Supply Chain** - 供应链优化
   - 目标读者：采购经理、运营总监
   - 主题示例：多元化策略、成本控制、风险管理

5. **Regulated Industries** - 受监管行业
   - 目标读者：医疗、汽车等法规严格行业的从业者
   - 主题示例：FDA 合规、ISO 认证、汽车质量标准

---

## 二、SEO 策略整合

### 2.1 关键词策略（来自 Illuminious-SEO-GEO-Advertising-Plan.md）

#### Tier 1: 核心高意图关键词（优先布局）
```
electronics manufacturing services
ems manufacturing
pcb assembly services
npi services
rapid prototyping services
box build assembly
indonesia manufacturing
hardware startup manufacturing
```

#### Tier 2: 长尾关键词（博客重点）
```
"electronics manufacturing services usa"
"rapid prototyping shenzhen"
"tariff free manufacturing indonesia"
"dfm review services"
"startup friendly manufacturer"
"medical device manufacturing iso 13485"
"automotive electronics manufacturing iatf"
```

#### 否定关键词（避免使用）
```
job, career, hiring, salary, diy, how to make
pcb design software, free, open source, software
course, tutorial, trainee, internship
```

### 2.2 SEO 标题公式

**标准公式**:
```
[核心关键词] + [价值主张/差异化] + | Illuminious
```

**示例**:
- How to Choose the Right Manufacturing Partner for Your Hardware Startup | Illuminious
- Design for Manufacturing: Best Practices for Electronics Products | Illuminious
- AI Hardware Trends to Watch in 2026 | Illuminious

### 2.3 Meta Description 要求

- **长度**: 150-160 字符
- **结构**: [痛点/问题] + [解决方案] + [CTA/价值]
- **必须包含**: 1-2 个目标关键词

**示例**:
```
Selecting the right manufacturing partner is critical for hardware startups. Learn key factors including quality systems, communication, and scalability from Illuminious experts.
```

---

## 三、文章结构模板

### 3.1 标准文章结构（1500-3000 字）

```typescript
{
  id: number,
  slug: "url-friendly-slug", // 短横线连接，包含关键词
  title: "SEO 优化的标题（60字符以内）",
  excerpt: "150-160字符的摘要，包含关键词",
  content: `
    <h2>引言/背景（200-300字）</h2>
    <p>问题陈述 + 为什么重要 + 文章价值预览</p>
    
    <h2>核心概念解释（300-500字）</h2>
    <p>定义关键术语，建立知识基础</p>
    
    <h2>主要内容部分（800-1500字）</h2>
    <h3>子主题 1</h3>
    <p>详细解释 + 实例</p>
    
    <h3>子主题 2</h3>
    <p>详细解释 + 实例</p>
    
    <h3>子主题 3</h3>
    <p>详细解释 + 实例</p>
    
    <h2>最佳实践/行动指南（300-500字）</h2>
    <ul>
      <li>可执行的步骤 1</li>
      <li>可执行的步骤 2</li>
      <li>可执行的步骤 3</li>
    </ul>
    
    <h2>常见错误/注意事项（200-300字）</h2>
    <p>帮助读者避免陷阱</p>
    
    <h2>结论（150-200字）</h2>
    <p>总结要点 + 下一步建议 + 软性 CTA</p>
  `,
  publishedAt: new Date("YYYY-MM-DD"),
  readTime: 8-12, // 根据字数计算
  authorName: "Illuminious Team", // 或具体作者
  featuredImage: "/images/[relevant-image].jpg",
  category: "对应分类",
}
```

### 3.2 内容格式规范

#### 标题层级
- **H1**: 文章标题（仅一个，在组件中处理）
- **H2**: 主要章节（3-6 个）
- **H3**: 子章节（每个 H2 下 2-4 个）
- **H4**: 必要时使用，避免太深

#### 段落规范
- 每段 2-4 句话
- 使用短句（< 25 词）
- 段间距适当，避免大段文字

#### 列表使用
- 使用项目符号列出 3-7 个相关项目
- 使用编号列表表示步骤或优先级
- 每个列表项保持平行结构

#### 强调格式
- **粗体**: 关键词、重要概念
- *斜体*: 引用、术语首次出现
- `代码`: 技术术语、文件路径

---

## 四、写作风格指南

### 4.1 品牌声音

| 特质 | 表现方式 | 示例 |
|------|---------|------|
| **专业权威** | 基于数据、引用标准、展示专业知识 | "According to ISO 13485 requirements..." |
| **实用导向** | 提供可执行的建议、避免纯理论 | "Here's how to implement this in your next design review..." |
| **平易近人** | 使用主动语态、避免过度 jargon | "We recommend" vs "It is recommended" |
| **自信但不傲慢** | 展示能力但不贬低竞争对手 | "Our approach offers several advantages..." |

### 4.2 语言规范

#### 必须使用
- ✅ "US-managed" / "US engineering"
- ✅ "Asia Pacific" (而非 "China")
- ✅ "tariff optimization" (而非 "0% tariff")
- ✅ "manufacturing partner" (而非 "supplier")
- ✅ "NPI" (New Product Introduction)

#### 避免使用
- ❌ "Chinese manufacturer" (强调 US 公司属性)
- ❌ "cheap" / "low cost" (用 "cost-effective" / "optimized")
- ❌ "factory" (单独使用时，用 "facility" / "production center")
- ❌ 过度承诺 ("guarantee", "always", "never")

### 4.3 人称使用

| 场景 | 推荐用法 |
|------|---------|
| 公司立场 | "We at Illuminious..." / "Our team..." |
| 给读者建议 | "You should..." / "We recommend..." |
| 行业通用 | "Manufacturers typically..." |
| 客户视角 | "Our customers often find..." |

---

## 五、分类专项指南

### 5.1 Startup Guide 类

**目标读者画像**:
- 第一次做硬件的创业创始人
- 技术背景，对制造了解有限
- 关注：成本、质量、时间、风险

**内容特点**:
- 步骤清晰，可执行性强
- 包含 checklist 和模板
- 预警常见陷阱
- 强调"从原型到量产"的旅程

**推荐标题模式**:
- "How to [Action] for Your Hardware Startup"
- "The Complete Guide to [Topic]"
- "X Things Every Hardware Founder Should Know About [Topic]"

**关键词重点**:
- hardware startup
- prototype to production
- manufacturing partner selection
- crowdfunding manufacturing

**示例文章**:
- "How to Choose the Right Manufacturing Partner for Your Hardware Startup"
- "From Kickstarter to Mass Production: A Timeline Guide"

### 5.2 Technical 类

**目标读者画像**:
- 硬件工程师、产品经理
- 有一定技术基础
- 关注：最佳实践、技术标准、实现细节

**内容特点**:
- 技术深度适中（不要太浅显也不要太学术）
- 包含具体参数和标准引用
- 提供设计建议和检查清单
- 配图/图表增强理解

**推荐标题模式**:
- "[Topic]: Best Practices for [Application]"
- "Understanding [Technical Concept] in Electronics Manufacturing"
- "Complete Guide to [Technical Process]"

**关键词重点**:
- DFM (Design for Manufacturing)
- PCB assembly
- SMT, AOI, ICT
- RF design
- IoT device manufacturing

**示例文章**:
- "Design for Manufacturing: Best Practices for Electronics Products"
- "Complete Guide to IoT Device Manufacturing"

### 5.3 Industry Insights 类

**目标读者画像**:
- 战略决策者、投资者
- 行业观察者
- 关注：趋势、市场动态、竞争格局

**内容特点**:
- 数据驱动，引用行业报告
- 前瞻性观点
- 全球视角
- 简洁有力，不要过于技术化

**推荐标题模式**:
- "[Topic] Trends to Watch in [Year]"
- "The Future of [Industry/Technology]"
- "How [Trend] is Changing [Industry]"

**关键词重点**:
- electronics manufacturing trends
- supply chain strategy
- AI hardware
- Industry 4.0
- manufacturing technology

**示例文章**:
- "AI Hardware Trends to Watch in 2026"
- "Q4 2025 Electronics Manufacturing Industry Outlook"

### 5.4 Supply Chain 类

**目标读者画像**:
- 采购经理、运营总监
- 关注：成本、风险、效率、合规

**内容特点**:
- 战略性和操作性并重
- 包含成本分析和 ROI 计算
- 风险管理视角
- 地缘政治和贸易因素

**推荐标题模式**:
- "Building a [Adjective] Global Supply Chain Strategy"
- "How to [Action] Your Manufacturing Supply Chain"
- "The Case for [Strategy]: [Benefit]"

**关键词重点**:
- supply chain diversification
- global manufacturing
- tariff optimization
- manufacturing footprint
- supply chain resilience

**示例文章**:
- "Building a Resilient Global Supply Chain Strategy"
- "Supply Chain Diversification: The Indonesia Advantage"

### 5.5 Regulated Industries 类

**目标读者画像**:
- 医疗、汽车等行业的工程师和合规专员
- 关注：法规要求、认证流程、质量体系

**内容特点**:
- 准确引用法规和标准
- 强调合规风险和后果
- 提供认证路线图
- 案例说明（非具体客户）

**推荐标题模式**:
- "[Regulation] Compliance in [Industry] Manufacturing"
- "Understanding [Standard] for [Application]"
- "[Certification] Requirements: A Practical Guide"

**关键词重点**:
- ISO 13485 (medical)
- FDA 510(k)
- IATF 16949 (automotive)
- CE marking
- medical device manufacturing

**示例文章**:
- "FDA Compliance in Medical Device Manufacturing"
- "ISO 13485: What Electronics Manufacturers Need to Know"

---

## 六、视觉元素规范

### 6.1 特色图片 (Featured Image)

- **尺寸**: 16:9 宽高比（推荐 1200x675px）
- **风格**: 专业、干净、科技感
- **内容**: 与主题相关的设备、工厂场景、产品图
- **避免**: 人物肖像（除非获得授权）、低质量图片

**图片路径**: `/images/[descriptive-name].jpg`

### 6.2 内容内图片

- 使用图表解释复杂概念
- 流程图展示制造步骤
- 对比表格展示选项
- 每个主要章节至少一个视觉元素

### 6.3 Alt 文本规范

所有图片必须包含描述性 Alt 文本：
```html
<img src="..." alt="SMT assembly line with automated pick-and-place machines" />
```

---

## 七、CTA 与转化优化

### 7.1 软性 CTA（文章内）

**位置**: 结论部分

**示例**:
- "Ready to implement these DFM principles? Contact our engineering team for a free design review."
- "Learn more about our NPI services and how we can help bring your product to market faster."
- "Subscribe to our newsletter for more manufacturing insights."

### 7.2 避免硬性推销

- ❌ "Buy our services now!"
- ✅ "Learn how we can help..."

### 7.3 内部链接策略

每篇文章应包含 2-4 个内部链接：
- 链接到相关服务页面（/services/*）
- 链接到相关行业页面（/industries/*）
- 链接到相关博客文章

**示例**:
```html
<p>Once you've optimized your design for manufacturing, the next step is finding the right 
<a href="/services/npi-engineering">NPI engineering partner</a> to bring your product to life.</p>
```

---

## 八、发布前检查清单

### 8.1 SEO 检查

- [ ] 标题 < 60 字符，包含关键词
- [ ] Meta description 150-160 字符
- [ ] URL slug 简洁，包含关键词
- [ ] H1 使用文章标题
- [ ] 至少 2 个 H2 章节
- [ ] 关键词自然出现 3-5 次
- [ ] 内部链接 2-4 个
- [ ] 图片有 Alt 文本

### 8.2 内容质量检查

- [ ] 无语法和拼写错误
- [ ] 段落长度适中
- [ ] 列表使用正确
- [ ] 专业术语已解释
- [ ] 数据有来源
- [ ] 链接可正常访问

### 8.3 品牌合规检查

- [ ] 强调 US 公司属性
- [ ] 避免 "cheap" 等词汇
- [ ] 使用 "partner" 而非 "supplier"
- [ ] 语气专业且平易近人
- [ ] CTA 符合场景

---

## 九、示例文章完整解析

### 示例: "How to Choose the Right Manufacturing Partner for Your Hardware Startup"

**SEO 元素**:
- 标题包含关键词："manufacturing partner", "hardware startup"
- URL: `/blog/choosing-right-manufacturing-partner`
- 分类: Startup Guide

**结构分析**:
1. **引言**: 强调制造伙伴对硬件创业的重要性
2. **评估因素**:
   - 质量管理体系
   - 沟通响应
   - 技术能力
   - 可扩展性
3. **红旗警告**: 列出需要避免的问题
4. **决策建议**: 从小试项目开始

**关键词分布**:
- "manufacturing partner" - 8 次
- "hardware startup" - 5 次
- "quality" - 6 次

**CTA**:
- 软性引导联系
- 相关文章推荐

---

## 十、常见问题 FAQ

**Q: 博客文章应该多长？**
A: 理想长度 1500-2500 字，阅读时间 8-12 分钟。Technical 类可以更长（2500-3000 字），Industry Insights 可以更短（1000-1500 字）。

**Q: 多久发布一次？**
A: 建议每周 1-2 篇，保持内容新鲜度同时确保质量。

**Q: 可以使用客户名称吗？**
A: 博客文章通常不使用具体客户名称（那是 Case Studies 的用途）。可以使用匿名化示例。

**Q: 可以引用竞争对手吗？**
A: 可以客观引用作为对比，但不要贬低。例如："Unlike traditional manufacturers who require..."

**Q: 技术术语需要解释吗？**
A: 首次出现时应简要解释，或在括号中给出全称。例如："DFM (Design for Manufacturing)"

---

*本指南由 Illuminious 内容团队维护，定期更新以反映最新的 SEO 最佳实践和品牌策略。*
