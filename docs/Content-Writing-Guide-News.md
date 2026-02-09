# News Content Writing Guide
# 新闻内容撰写指南

> **文档版本**: v1.0  
> **适用对象**: 内容创作者、AI 写作助手、市场团队  
> **目标**: 确保所有新闻内容符合 Illuminious 品牌标准并有效传达公司动态

---

## 一、News 板块定位与差异化

### 1.1 核心定位
**News 是 Illuminious 的"官方声音"和"动态窗口"**

| 维度 | News 定位 |
|------|----------|
| **内容性质** | 公司公告、里程碑、行业观点 |
| **目标受众** | 现有客户、潜在客户、投资者、行业媒体 |
| **阅读时长** | 2-5 分钟（500-1000 字） |
| **更新频率** | 每月 2-4 篇（有重要动态时） |
| **核心价值** | 建立信任、展示成长、保持曝光 |

### 1.2 与 Blog、Case Studies 的差异化

| 对比维度 | Blog | News | Case Studies |
|---------|------|------|-------------|
| **内容类型** | 教育性文章 | 公司公告 | 客户成功故事 |
| **写作视角** | 行业专家 | 公司官方 | 客户视角 |
| **目的** | 教育受众、SEO 引流 | 建立信任、展示动态 | 证明能力、促进转化 |
| **发布时效** | 常青内容 | 时效性强 | 项目完成后发布 |
| **语气** | 教育性、指导性 | 正式、新闻式 | 故事性、数据驱动 |

### 1.3 新闻价值判断标准

在撰写新闻稿前，先评估是否具有新闻价值：

| 新闻类型 | 新闻价值 | 示例 |
|---------|---------|------|
| **公司扩张** | ⭐⭐⭐⭐⭐ | 新设施、新团队、新市场 |
| **认证获得** | ⭐⭐⭐⭐⭐ | ISO、行业认证、奖项 |
| **合作伙伴** | ⭐⭐⭐⭐ | 战略合作协议、渠道合作 |
| **产品/服务发布** | ⭐⭐⭐⭐ | 新服务线、技术升级 |
| **里程碑** | ⭐⭐⭐⭐ | 产量突破、客户数量、周年庆 |
| **行业观点** | ⭐⭐⭐ | 高管观点、市场分析 |
| **公司活动** | ⭐⭐ | 展会参与、网络研讨会 |

**不具新闻价值的内容**（应放在 Blog 中）：
- 一般性的行业教育内容
- 纯粹的产品功能介绍
- 内部流程变更（除非影响客户）

---

## 二、新闻分类体系

### 2.1 现有分类

| 分类 | 说明 | 频率 |
|------|------|------|
| **Company News** | 公司扩张、里程碑、重大投资 | 季度 1-2 篇 |
| **Partnership** | 战略合作协议、渠道合作、技术合作 | 按实际发生 |
| **Operations** | 运营更新、设施升级、流程优化 | 季度 1 篇 |
| **Certification** | ISO 认证、行业资质、奖项荣誉 | 按实际获得 |
| **Industry Insights** | 高管观点、行业分析、趋势预测 | 季度 1-2 篇 |

### 2.2 新增分类建议

根据业务发展可考虑增加：
- **Product Launch** - 新服务/产品发布
- **Team Spotlight** - 高管任命、团队扩张
- **Events** - 展会、研讨会参与
- **Awards** - 行业奖项、荣誉（可合并到 Certification）

---

## 三、SEO 策略整合

### 3.1 关键词策略

News 文章的 SEO 重点与 Blog 不同：

#### 品牌词优先
```
Illuminious
Illuminious manufacturing
Illuminious electronics
Illuminious partnership
Illuminious expansion
Illuminious certification
```

#### 新闻类长尾词
```
electronics manufacturing news
hardware manufacturing updates
EMS industry news
manufacturing partnership announcement
ISO 13485 certification news
```

#### 避免
- 过于通用的行业词（竞争太激烈）
- 时效性太强的词（不利于长期排名）

### 3.2 SEO 标题公式

**标准公式**:
```
Illuminious + [动作/成就] + [具体内容] | News
```

**示例**:
- "Illuminious Expands Manufacturing Capacity in Southeast Asia"
- "Illuminious Achieves ISO 13485 Certification for Medical Devices"
- "Strategic Partnership with Future Factory Announced"

### 3.3 URL 规范

```
/news/[action]-[subject]-[detail]
```

**示例**:
- `/news/illuminious-expands-manufacturing-capacity`
- `/news/partnership-with-future-factory`
- `/news/iso-13485-certification-achieved`

### 3.4 Meta Description

- **长度**: 150-160 字符
- **结构**: [公司名] + [动态] + [价值/意义]

**示例**:
```
Illuminious announces expansion of manufacturing capabilities in Batam Free Trade Zone, Indonesia with new 50,000 sq ft facility for high-volume electronics assembly.
```

---

## 四、新闻文章结构模板

### 4.1 标准新闻结构（倒金字塔）

```typescript
{
  id: number,
  slug: "action-subject-detail",
  title: "Illuminious [Action] [Subject] | News",
  excerpt: "150-160字符摘要，包含关键信息",
  content: `
    <h2>Lead Paragraph（导语）</h2>
    <p>最重要的信息：谁、什么、何时、何地、为什么。1-2句话概括全文。</p>
    
    <h2>Details（详细内容）</h2>
    <p>背景信息、具体细节、数据支持。回答读者可能有的问题。</p>
    
    <h2>Key Benefits/Implications（关键影响）</h2>
    <ul>
      <li>对客户的影响</li>
      <li>对公司的意义</li>
      <li>对行业的价值</li>
    </ul>
    
    <h2>Quotes（引语）</h2>
    <p>高管或相关方的直接引语，增加可信度。</p>
    
    <h2>Looking Ahead（展望未来）</h2>
    <p>下一步计划、长期愿景、如何参与。</p>
  `,
  publishedAt: new Date("YYYY-MM-DD"),
  readTime: 2-5, // 根据字数
  featuredImage: "/images/[relevant-image].jpg",
  category: "对应分类",
}
```

### 4.2 不同分类的结构侧重

#### Company News（公司新闻）
```
1. 导语 - 宣布重大动态
2. 背景 - 为什么现在做这个决定
3. 具体细节 - 设施/团队/市场详情
4. 战略意义 - 对公司的长期价值
5. 客户受益 - 如何帮助现有和潜在客户
6. 未来计划 - 下一步是什么
```

#### Partnership（合作公告）
```
1. 导语 - 宣布合作
2. 合作伙伴介绍 - 对方是谁，为什么重要
3. 合作内容 - 具体合作范围和形式
4. 客户价值 - 合作如何使客户受益
5. 双方引语 - 各自高管的评论
6. 如何参与 - 客户如何获得合作收益
```

#### Certification（认证公告）
```
1. 导语 - 宣布获得认证
2. 认证介绍 - 这是什么认证，标准是什么
3. 认证过程 - 如何获得的，花了多长时间
4. 业务意义 - 可以服务哪些新客户/市场
5. 质量承诺 - 对质量的持续承诺
6. 下一步 - 如何联系了解更多
```

#### Industry Insights（行业观点）
```
1. 导语 - 当前市场状况概述
2. 数据支持 - 引用行业数据和趋势
3. 观点阐述 - 公司的独特洞察
4. 客户建议 - 给读者的实用建议
5. 公司定位 - 我们如何帮助应对趋势
```

---

## 五、写作风格指南

### 5.1 新闻写作原则

| 原则 | 说明 | 示例 |
|------|------|------|
| **倒金字塔** | 最重要信息在前 | 导语包含所有关键信息 |
| **客观性** | 陈述事实，避免过度宣传 | 用数据说话 |
| **简洁性** | 短段落，短句子 | 每段 1-3 句话 |
| **时效性** | 强调时间要素 | "today", "this quarter" |
| **引语** | 使用直接引语增加可信度 | CEO 或相关方评论 |

### 5.2 语气与声音

**正式但平易近人**
- ✅ "We are excited to announce..."
- ❌ "We are incredibly thrilled and delighted to announce..."

**自信但不傲慢**
- ✅ "This expansion strengthens our ability to..."
- ❌ "This makes us the best manufacturer in the world..."

**以读者为中心**
- ✅ "This partnership enables our customers to..."
- ❌ "This partnership helps us grow our business..."

### 5.3 语言规范

#### 必须使用
- ✅ "announce" / "proud to announce"
- ✅ "strategic" (用于重要合作)
- ✅ "commitment to"
- ✅ "strengthen" / "enhance"

#### 避免使用
- ❌ 过度形容词 ("revolutionary", "game-changing", "unprecedented")
- ❌ 模糊词汇 ("very", "really", "amazing")
- ❌ 行业 jargon 不加解释
- ❌ 过度承诺 ("guarantee")

### 5.4 被动语态 vs 主动语态

**优先主动语态**:
- ✅ "We expanded our facilities..."
- ❌ "Our facilities were expanded..."

**被动语态仅在需要时使用**:
- "The certification was awarded after..." (强调认证本身而非授予者)

---

## 六、各类新闻专项指南

### 6.1 扩张公告 (Expansion News)

**关键要素**:
- 具体数字（面积、产能、投资金额）
- 地理位置的战略意义
- 新设施的技术能力
- 对客户的直接好处
- 创造就业机会（可选）

**示例结构**:
```
标题: Illuminious Expands Manufacturing Capacity in Southeast Asia

导语: Illuminious is proud to announce a significant expansion of our 
manufacturing capabilities in the Batam Free Trade Zone, Indonesia.

关键数据:
- 50,000 sq ft new facility
- State-of-the-art SMT lines with 0201 capability
- Dedicated clean room space
- Expanded box build capacity

战略意义:
- Diversified manufacturing options
- Batam Free Trade Zone advantages
- Streamlined customs processes
```

### 6.2 合作公告 (Partnership News)

**关键要素**:
- 双方公司介绍
- 合作的具体内容
- 客户如何受益
- 双方高管引语
- 合作开始时间

**示例结构**:
```
标题: Strategic Partnership with Future Factory Announced

导语: Illuminious partners with Future Factory to enhance AI hardware 
manufacturing capabilities and startup support services.

合作内容:
- Preferential manufacturing terms
- Dedicated NPI support
- Joint DFM workshops
- Streamlined prototype-to-production pathways

引语示例:
"This partnership reflects our shared commitment to supporting hardware 
innovation," said [Name], [Title] at Illuminious.
```

### 6.3 认证公告 (Certification News)

**关键要素**:
- 认证名称和版本（如 ISO 13485:2016）
- 认证涵盖的范围
- 认证过程简述
- 认证的业务意义
- 可以服务的新市场/客户类型

**示例结构**:
```
标题: Illuminious Achieves ISO 13485 Certification for Medical Devices

导语: Our manufacturing facilities have successfully achieved ISO 13485:2016 
certification, enabling us to serve medical device customers.

认证价值:
- Consistent quality management for medical devices
- Regulatory compliance with FDA and international requirements
- Risk-based approach to product development
- Full traceability and documentation control

业务影响:
- Support medical device customers through entire product lifecycle
- Design and development through manufacturing
- Post-market activities support
```

### 6.4 运营更新 (Operations News)

**关键要素**:
- 更新的具体内容
- 为什么做出这个改变
- 对客户体验的影响
- 时间表（如适用）

**示例结构**:
```
标题: New US Warehouse Facility Now Operational

导语: Our new state-of-the-art fulfillment center in Los Angeles is now 
fully operational, enabling faster delivery times.

设施能力:
- 20,000 sq ft warehouse and fulfillment space
- Same-day shipping for orders before 2 PM PST
- Real-time inventory visibility
- Kitting and light assembly services

客户好处:
- Significantly reduced lead times for US deliveries
- Pre-positioned inventory for rapid fulfillment
- Integrated with global manufacturing operations
```

### 6.5 行业观点 (Industry Insights)

**关键要素**:
- 当前市场状况数据
- 独特洞察和观点
- 对读者的实用建议
- 公司的相关定位

**示例结构**:
```
标题: Q4 2025 Electronics Manufacturing Industry Outlook

概述:
As we close out 2025, the electronics manufacturing industry continues 
to evolve rapidly.

关键趋势:
- Supply chain diversification
- Focus on resilience
- Digital supply chain tools adoption
- Sustainability and ESG compliance

市场动态:
Strong demand in IoT, wearables, and industrial electronics sectors.

展望:
We expect 2026 to bring continued growth opportunities.
```

---

## 七、引语使用指南

### 7.1 引语的作用
- 增加可信度和人性化
- 提供公司视角
- 解释"为什么"而不仅是"什么"

### 7.2 引语格式

```html
<p>"[直接引语内容]，" said [姓名], [职位] at Illuminious. 
"[继续引语或补充评论]。"</p>
```

**示例**:
```html
<p>"This expansion represents a significant investment in our ability to 
support innovative companies worldwide," said James Gong, CEO at Illuminious. 
"The Batam facility strengthens our global footprint while providing our 
customers with diversified manufacturing options."</p>
```

### 7.3 引语撰写技巧

1. **自然口语化** - 像说话而不是写作
2. **有信息量** - 包含实质性内容
3. **简短有力** - 1-2 句话
4. **避免陈词滥调** - 避免 "We are excited..." 过度使用

---

## 八、视觉元素规范

### 8.1 特色图片 (Featured Image)

- **类型**: 新闻相关的高质量照片
- **尺寸**: 16:9 宽高比（推荐 1200x675px）
- **内容建议**:
  - 设施照片（扩张新闻）
  - 签约仪式照片（合作新闻）
  - 证书照片（认证新闻）
  - 团队照片（团队新闻）
  - 活动现场（活动新闻）

**图片路径**: `/images/[news-type]-[subject].jpg`

### 8.2 图片 Alt 文本

格式: `"[描述] - Illuminious [新闻类型]"`

**示例**:
```html
<img src="/images/about-factory-equipment.jpg" 
     alt="New manufacturing facility equipment - Illuminious expansion" />
```

---

## 九、CTA 与转化优化

### 9.1 新闻中的 CTA

**软性 CTA**（不推销，引导了解更多）:
- "Contact us to learn how this expansion benefits your projects."
- "Learn more about our [relevant service]."
- "Subscribe to our newsletter for the latest updates."

**避免**:
- 硬推销语言
- 与新闻内容无关的 CTA

### 9.2 相关链接

每篇新闻应包含 1-2 个相关页面链接：
- 相关的服务页面
- 相关的行业页面
- 工厂参观页面
- 联系页面

**示例**:
```html
<p>With this new facility, we are well-positioned to support the growing 
demand for <a href="/services/npi-engineering">NPI engineering services</a>. 
<a href="/contact">Contact us</a> to discuss your project requirements.</p>
```

---

## 十、发布前检查清单

### 10.1 内容检查

- [ ] 导语包含所有关键信息（5W1H）
- [ ] 事实准确，数据有来源
- [ ] 引语自然且有意义
- [ ] 段落简短（1-3 句话）
- [ ] 无语法和拼写错误
- [ ] 专业术语已解释

### 10.2 SEO 检查

- [ ] 标题包含 "Illuminious" 和关键词
- [ ] Meta description 150-160 字符
- [ ] URL 简洁且描述性
- [ ] 图片有 Alt 文本
- [ ] 有 1-2 个内部链接

### 10.3 品牌合规检查

- [ ] 语气正式但平易近人
- [ ] 避免过度宣传词汇
- [ ] 强调客户价值而非公司成就
- [ ] 使用 "partner" 而非 "supplier"
- [ ] 体现 US 公司属性

### 10.4 时效性检查

- [ ] 日期正确
- [ ] "today"/"this week" 等词汇在发布日准确
- [ ] 事件时间线清晰

---

## 十一、示例新闻完整解析

### 示例 1: 扩张公告

**标题**: Illuminious Expands Manufacturing Capacity in Southeast Asia

**结构分析**:
1. **导语**: 宣布在印尼巴淡岛扩建制造能力
2. **具体数据**: 50,000 平方英尺设施、SMT 生产线、洁净室
3. **战略优势**: 巴淡自由贸易区优势、简化海关流程
4. **客户价值**: 支持多元化制造需求
5. **未来展望**: 支持全球创新公司

**SEO 亮点**:
- 关键词: "manufacturing capacity", "Southeast Asia", "Indonesia"
- 品牌词: "Illuminious"
- URL: `/news/illuminious-expands-manufacturing-capacity`

### 示例 2: 合作公告

**标题**: Strategic Partnership with Future Factory Announced

**结构分析**:
1. **导语**: 宣布与 Future Factory 战略合作
2. **合作范围**: 制造优惠、NPI 支持、DFM 工作坊
3. **客户价值**: 为创业公司提供端到端支持
4. **共同愿景**: 支持硬件创新
5. **参与方式**: 如何获得合作收益

**SEO 亮点**:
- 关键词: "partnership", "Future Factory", "hardware accelerator"
- 合作双方名称提升搜索可见度

### 示例 3: 认证公告

**标题**: Illuminious Achieves ISO 13485 Certification for Medical Devices

**结构分析**:
1. **导语**: 宣布获得 ISO 13485:2016 认证
2. **认证意义**: 医疗器械质量管理体系
3. **认证价值**: 一致性质量、法规合规、风险管理
4. **业务扩展**: 可服务医疗器械客户全生命周期
5. **质量承诺**: 持续投资质量体系

**SEO 亮点**:
- 关键词: "ISO 13485", "medical devices", "certification"
- 针对医疗器械行业搜索

---

## 十二、常见问题 FAQ

**Q: 新闻应该多长？**
A: 500-1000 字，阅读时间 2-5 分钟。保持简洁，聚焦关键信息。

**Q: 可以发布"软新闻"吗？**
A: 可以，但需确保有价值。高管观点、行业分析都是有价值的软新闻。

**Q: 发布频率应该是多少？**
A: 有真正的新闻时发布。宁可少而精，不要频繁发布无价值内容。建议每月 2-4 篇。

**Q: 可以包含未来计划吗？**
A: 可以，但要谨慎。只说确定会发生的事，避免过度承诺。

**Q: 如何处理敏感信息？**
A: 不披露客户具体名称（除非获得明确授权）、不透露具体财务数字（除非公开）、不批评竞争对手。

**Q: 新闻需要 CEO 审批吗？**
A: 重大新闻（扩张、认证、重要合作）建议 CEO 或高管审批。常规运营更新市场团队可自主发布。

---

*本指南由 Illuminious 市场团队维护，确保所有新闻内容符合品牌标准和传播策略。*
