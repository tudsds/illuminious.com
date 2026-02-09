# Case Studies Content Writing Guide
# 案例研究内容撰写指南

> **文档版本**: v1.0  
> **适用对象**: 内容创作者、AI 写作助手、销售团队  
> **目标**: 创建有说服力、数据驱动的客户成功故事，促进潜在客户转化

---

## 一、Case Studies 板块定位与差异化

### 1.1 核心定位
**Case Studies 是 Illuminious 的"社会证明"和"转化引擎"**

| 维度 | Case Studies 定位 |
|------|------------------|
| **内容性质** | 客户成功故事、项目展示、成果证明 |
| **目标受众** | 决策者（CEO、CTO、采购 VP）、有明确需求的潜在客户 |
| **阅读时长** | 5-8 分钟（1200-2000 字） |
| **更新频率** | 每月 1-2 个（基于实际项目） |
| **核心价值** | 建立信任、展示能力、促进转化、支持销售 |

### 1.2 与 Blog、News 的差异化

| 对比维度 | Blog | News | Case Studies |
|---------|------|------|-------------|
| **内容类型** | 教育性文章 | 公司公告 | 客户成功故事 |
| **写作视角** | 行业专家 | 公司官方 | 客户视角 + 公司视角 |
| **目的** | 教育受众、SEO 引流 | 建立信任、展示动态 | 证明能力、促进转化 |
| **内容来源** | 内部专业知识 | 公司动态 | 真实客户项目 |
| **数据重点** | 通用最佳实践 | 公司里程碑 | 具体客户成果 |
| **CTA 强度** | 软性 | 中性 | 明确转化导向 |

### 1.3 案例研究的价值

| 价值类型 | 说明 |
|---------|------|
| **信任建立** | 展示真实客户和可验证成果 |
| **能力证明** | 具体展示如何解决复杂问题 |
| **情感共鸣** | 让潜在客户看到"和我一样"的成功 |
| **销售支持** | 为销售团队提供有力的说服材料 |
| **差异化** | 展示与竞争对手的不同之处 |

---

## 二、案例分类体系

### 2.1 按行业分类

| 行业 | 目标受众 | 关键痛点 |
|------|---------|---------|
| **Consumer IoT** | 智能硬件创业者、产品经理 | 快速上市、成本控制、质量稳定 |
| **Medical/Healthcare** | 医疗设备公司、合规专员 | FDA 合规、质量体系、可追溯性 |
| **Industrial/B2B** | 工业设备制造商、工程师 | 可靠性、环境适应性、认证 |
| **Automotive** | 汽车 Tier 1/2 供应商 | IATF 标准、供应链多样化、PPAP |
| **Consumer Electronics** | 消费电子品牌 | 大规模生产、成本优化、上市速度 |

### 2.2 按解决方案分类

| 解决方案类型 | 适用场景 |
|-------------|---------|
| **NPI & Prototyping** | 从概念到原型的快速转化 |
| **Scale-Up Manufacturing** | 小批量到大生产的过渡 |
| **Supply Chain Diversification** | 降低单一来源风险 |
| **Quality Transformation** | 质量问题和返工率改善 |
| **Cost Optimization** | 在不牺牲质量的前提下降低成本 |

### 2.3 按客户规模分类

| 客户类型 | 特点 | 关注点 |
|---------|------|--------|
| **Startup** | 首次量产、资源有限 | 风险控制、灵活性、指导 |
| **Scale-Up** | 快速增长、需求激增 | 产能弹性、质量一致性 |
| **Enterprise** | 成熟企业、流程严格 | 合规、文档、供应链安全 |

---

## 三、SEO 策略整合

### 3.1 关键词策略

#### 行业 + 解决方案关键词（高转化）
```
[Industry] + [Solution] + success story
IoT manufacturing case study
Medical device manufacturing success
Automotive electronics manufacturing example
Industrial IoT manufacturing partner
Consumer electronics manufacturing case study
```

#### 痛点关键词
```
how to scale hardware production
manufacturing partner selection case study
supply chain diversification example
FDA compliant manufacturing success
reduce manufacturing costs case study
```

#### 品牌 + 关键词
```
Illuminious case study
Illuminious customer success
Illuminious manufacturing results
```

### 3.2 SEO 标题公式

**公式 1: 客户类型 + 行业 + 成果**
```
[Customer Type] + [Industry] + [Result] | Case Study
```
**示例**: "Smart Home Device Manufacturer: 35% Cost Reduction | Case Study"

**公式 2: 挑战 + 解决方案**
```
How [Customer] + [Achieved Result] + with [Solution] | Case Study
```
**示例**: "How a Medical Device Startup Achieved FDA Approval on First Try | Case Study"

**公式 3: 行业 + 关键词**
```
[Industry] + [Keyword] + Success Story | Illuminious
```
**示例**: "Industrial IoT Platform: Global Certification Success Story | Illuminious"

### 3.3 URL 规范

```
/case-studies/[customer-type]-[challenge]-[result]
```

**示例**:
- `/case-studies/smart-home-device-scaling`
- `/case-studies/medical-device-fda-approval`
- `/case-studies/industrial-iot-global-certification`

### 3.4 Meta Description

- **长度**: 150-160 字符
- **结构**: [客户] + [挑战] + [解决方案] + [成果]

**示例**:
```
Learn how a US smart home company scaled from 1,000 to 50,000 units/month with 35% cost reduction using Illuminious global manufacturing network.
```

---

## 四、案例研究结构模板

### 4.1 核心数据结构

```typescript
{
  id: "unique-id",
  slug: "customer-challenge-result",
  title: "[Customer Type] + [Industry]",
  industry: "具体行业分类",
  
  // 三个核心要素
  challenge: "客户面临的具体挑战（1-2 句话）",
  solution: "我们的解决方案概述（1-2 句话）",
  
  // 可量化的成果（3 个指标）
  results: [
    { 
      metric: "指标名称", 
      value: "数值", 
      description: "详细说明" 
    },
    { 
      metric: "指标名称", 
      value: "数值", 
      description: "详细说明" 
    },
    { 
      metric: "指标名称", 
      value: "数值", 
      description: "详细说明" 
    }
  ],
  
  // 客户证言
  testimonial: "客户直接引语，描述合作体验",
  
  // 图片和标签
  image: "/images/[relevant-image].jpg",
  tags: ["标签1", "标签2", "标签3"], // 用于分类和筛选
  
  // 详细内容（完整案例页面）
  fullContent: `
    <h2>Background（背景）</h2>
    <p>客户公司介绍、产品、市场地位</p>
    
    <h2>The Challenge（挑战）</h2>
    <p>具体问题、痛点、影响、尝试过的解决方案</p>
    
    <h2>Our Solution（解决方案）</h2>
    <p>详细的解决方案、实施过程、关键决策</p>
    <ul>
      <li>具体措施 1</li>
      <li>具体措施 2</li>
      <li>具体措施 3</li>
    </ul>
    
    <h2>Results（成果）</h2>
    <p>详细的数据、改善、长期影响</p>
    
    <h2>Looking Forward（展望）</h2>
    <p>持续合作、未来计划、客户满意度</p>
  `
}
```

### 4.2 详细页面结构（2000-3000 字）

#### 1. Hero Section（首屏）
- 客户名称和行业
- 三个成果指标突出显示
- 高质量图片

#### 2. Background（背景 - 200-300 字）
- 客户公司是谁
- 他们的产品/服务
- 市场地位和目标

#### 3. The Challenge（挑战 - 300-400 字）
- 具体问题和痛点
- 为什么这个问题重要
- 之前尝试的解决方案（如有）
- 不解决的影响

#### 4. Our Solution（解决方案 - 500-700 字）
- 为什么选择 Illuminious
- 具体的解决方案
- 实施过程和时间线
- 关键决策点
- 遇到的挑战及如何解决

#### 5. Results（成果 - 300-400 字）
- 详细的数据和指标
- 定性和定量的改善
- 长期影响
- 业务成果

#### 6. Testimonial（客户证言）
- 直接引语
- 署名（职位、公司）
-  ideally 包含具体细节

#### 7. Looking Forward（展望 - 150-200 字）
- 持续合作关系
- 未来项目或扩展
- 客户满意度

---

## 五、写作风格指南

### 5.1 叙述视角

**主要视角**: 客户视角（第三人称）
- "The client needed..."
- "They were facing..."
- "The company achieved..."

**次要视角**: Illuminious 视角（"我们"）
- "We implemented..."
- "Our team provided..."
- "We recommended..."

### 5.2 故事结构（经典三幕式）

**第一幕：设定（Setup）**
- 介绍客户和他们的世界
- 建立"正常状态"
- 引入挑战/问题

**第二幕：冲突（Confrontation）**
- 详细描述挑战
- 尝试的解决方案
- 选择 Illuminious 的决策点
- 实施过程

**第三幕：解决（Resolution）**
- 解决方案的成果
- 数据和具体改善
- 新状态（更好的正常）
- 未来展望

### 5.3 语言风格

**数据驱动**
- 使用具体数字："35% cost reduction" 而非 "significant savings"
- 提供时间线："8 weeks" 而非 "quickly"
- 量化改善："99.7% quality rate" 而非 "high quality"

**以成果为导向**
- 每段都指向一个具体成果
- 避免空洞的形容词
- 用动词展示行动

**专业但易懂**
- 解释技术术语
- 避免过度 jargon
- 假设读者是决策者（非技术专家）

### 5.4 避免的陷阱

| 陷阱 | 错误示例 | 正确示例 |
|------|---------|---------|
| **过于宣传** | "Illuminious is the best manufacturer..." | "Illuminious provided..." |
| **模糊语言** | "significant improvements" | "35% reduction in..." |
| **忽略客户** | 全文都是"我们"做了什么 | 平衡"客户"和"我们"的视角 |
| **泄露机密** | 具体产品名称、内部流程 | 泛化的描述、获得授权的信息 |
| **过度承诺** | "We guarantee similar results" | "Results may vary based on..." |

---

## 六、各类型案例专项指南

### 6.1 Consumer IoT 案例

**目标读者**: 智能硬件创业者、产品经理

**关键痛点**:
- 从原型到量产的挑战
- 成本压力（与成熟品牌竞争）
- 上市时间压力
- 质量控制

**推荐数据指标**:
- Cost Reduction: XX%
- Time to Market: X Weeks
- Quality Rate: XX.X%
- Volume Scaled: X,000 to XX,000 units/month

**结构侧重**:
1. 快速增长的需求
2. 成本与质量的平衡
3. 快速上市的压力
4. 全球制造网络的价值
5. 成果：成本、时间、质量

**示例标题**:
- "Smart Home Device Manufacturer: Scaling from 1K to 50K Units with 35% Cost Savings"
- "How a Wearable Startup Reduced Manufacturing Costs by 40% Without Sacrificing Quality"

### 6.2 Medical Device 案例

**目标读者**: 医疗设备公司创始人、合规专员、工程师

**关键痛点**:
- FDA 合规要求
- 质量体系建立
- 可追溯性和文档
- 成本与合规的平衡

**推荐数据指标**:
- FDA Approval: "First Try" / "X Days"
- Traceability: "100%"
- Cost Savings: XX% vs US manufacturers
- Time to Market: X Months

**结构侧重**:
1. 严格的法规要求
2. 有限的预算
3. 寻找合规的海外制造
4. 文档和质量系统
5. 成果：FDA 批准、成本节省

**示例标题**:
- "Medical Device Startup Achieves FDA 510(k) Clearance on First Attempt"
- "How a Health Tech Company Saved 45% on Manufacturing While Maintaining ISO 13485 Compliance"

### 6.3 Industrial IoT 案例

**目标读者**: 工业设备制造商、工程师、产品经理

**关键痛点**:
- 恶劣环境适应性
- 多市场认证
- 可靠性和耐久性
- 全球部署支持

**推荐数据指标**:
- Certifications: "X Markets"
- Temperature Range: "-40°C to +85°C"
- IP Rating: "IP67"
- Field Failure Rate: "0%" / "< X%"

**结构侧重**:
1. 极端环境挑战
2. 多市场认证复杂性
3. 产品可靠性要求
4. 端到端解决方案
5. 成果：认证通过、零故障

**示例标题**:
- "Industrial IoT Platform: Achieving Global Certification for 5 Markets"
- "Ruggedized Sensor Manufacturer Achieves Zero Field Failures in First Year"

### 6.4 Automotive 案例

**目标读者**: 汽车 Tier 1/2 供应商、质量经理

**关键痛点**:
- IATF 16949 标准
- 供应链多样化需求
- PPAP 文档要求
- 交付时间压力

**推荐数据指标**:
- Quality Standard: "IATF 16949"
- Supply Chain: "Diversified"
- Lead Time Reduction: XX%
- PPAP Approval: "First Try"

**结构侧重**:
1. 供应链风险
2. 汽车行业严格标准
3. 寻找合格的替代供应商
4. 质量系统对接
5. 成果：供应链安全、交期改善

**示例标题**:
- "Automotive Tier 2 Supplier Diversifies Supply Chain While Maintaining IATF Standards"
- "How an Automotive Electronics Company Reduced Lead Times by 40% with US Warehouse Program"

---

## 七、数据指标指南

### 7.1 选择指标的原则

**SMART 原则**:
- **S**pecific: 具体明确（"35%" 而非 "significant"）
- **M**easurable: 可量化（有数据支撑）
- **A**chievable: 可实现（真实可信）
- **R**elevant: 相关性（与读者痛点相关）
- **T**ime-bound: 有时限（"in 6 months"）

### 7.2 推荐的指标类型

#### 财务指标
- Cost Reduction: XX%
- Cost Savings: $XXX,XXX
- ROI: XXX%

#### 时间指标
- Time to Market: X Weeks/Months
- Lead Time Reduction: XX%
- Development Cycle: X Months

#### 质量指标
- Quality Rate: XX.X%
- First Pass Yield: XX%
- Field Failure Rate: X%
- Customer Returns: X%

#### 运营指标
- Volume Scaled: X,XXX to XX,XXX units/month
- Production Capacity Increase: XX%
- On-Time Delivery: XX%

#### 合规指标
- Certifications Achieved: "X Markets"
- Audit Results: "Zero Findings"
- Compliance Status: "ISO XXXXX Certified"

### 7.3 指标展示格式

```typescript
{
  metric: "Cost Reduction",      // 简洁的指标名称
  value: "35%",                  // 突出的数值
  description: "Landed cost savings through global manufacturing" // 详细说明
}
```

### 7.4 Results 区域响应式设计规范

**颜色规范（严格遵循）**:
- 背景色：必须使用 `bg-illuminious-light` (Light #D6DEEE)
- 文字颜色：必须使用 `text-illuminious-navy` (Navy #132843)
- 辅助文字：使用 `text-illuminious-navy/70` (70%透明度)
- **禁止**使用其他颜色（如blue、sky等），确保视觉统一

**HTML结构模板**：

```html
<!-- 移动端优先的响应式Results网格 -->
<div class="results-grid grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div class="result-card bg-illuminious-light p-4 sm:p-6 rounded-lg text-center">
    <div class="result-value text-2xl sm:text-3xl font-bold text-illuminious-navy mb-1">
      35%
    </div>
    <div class="result-label text-sm text-illuminious-navy/70 mb-2">
      Cost Reduction
    </div>
    <p class="text-sm text-illuminious-navy/70">
      Landed cost savings through global manufacturing
    </p>
  </div>
  <!-- 重复2次，共3个指标 -->
</div>
```

**响应式断点说明**：

| 设备类型 | 断点 | 网格列数 | 内边距 | 字号 |
|---------|------|---------|--------|------|
| **移动端** | < 640px | 1列 (grid-cols-1) | p-4 | value: text-2xl, label: text-sm |
| **平板** | 640px - 1024px | 3列 (grid-cols-3) | p-4 | value: text-2xl, label: text-sm |
| **桌面端** | > 1024px | 3列 (grid-cols-3) | p-6 | value: text-3xl, label: text-sm |

**移动端优化要点**：
1. **单列布局**：手机端使用单列显示，避免内容拥挤
2. **垂直堆叠**：3个指标卡片垂直排列，便于滚动浏览
3. **触摸友好**：卡片间距适中（gap-4），易于点击
4. **文字大小**：保持可读性，value文字不小于text-2xl
5. **避免换行**：数字和标签保持单行显示

**预览卡片样式（CaseStudies.tsx列表页）**：

```tsx
// 响应式Results预览 - 手机端单列，平板/桌面端3列
<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
  {study.results.map((result) => (
    <div key={result.metric} className="text-center p-3 rounded-lg bg-illuminious-light">
      <div className="text-lg sm:text-sm font-bold text-illuminious-navy">
        {result.value}
      </div>
      <div className="text-sm sm:text-xs text-illuminious-navy/70">
        {result.metric}
      </div>
    </div>
  ))}
</div>
```

**重要提醒**：
- ✅ 只能使用 `bg-illuminious-light` 作为背景色
- ✅ 只能使用 `text-illuminious-navy` 作为主要文字色
- ❌ 禁止使用 `text-illuminious-blue` 或其他颜色
- ❌ 禁止使用 `bg-illuminious-blue/20` 等变体背景色
- ✅ 使用 `sm:` 前缀实现响应式断点切换

---

## 八、客户证言指南

### 8.1 证言的价值
- 增加可信度（真实客户的声音）
- 提供情感连接
- 补充数据无法表达的满意度
- 帮助潜在客户产生共鸣

### 8.2 获取证言的方法

1. **项目完成时** - 最佳时机，成果新鲜
2. **定期访谈** - 每季度与重要客户沟通
3. **满意度调查** - 包含开放性问题
4. **成功案例采访** - 专门的案例研究访谈

### 8.3 证言撰写技巧

**好的证言特点**:
- 具体而非泛泛："They reduced our costs by 35%" 而非 "They did a great job"
- 包含情感："We were worried about... but they..."
- 有对比："Unlike our previous supplier..."
- 有细节：具体的产品、服务、人员

**证言结构**:
```
[问题/挑战] + [解决方案] + [成果] + [推荐]
```

**示例**:
```
"We were struggling to scale production while maintaining quality. 
Illuminious not only helped us increase volume by 50x but also 
improved our first-pass yield to 99.7%. Their US-based project 
management made communication seamless. I highly recommend them 
to any hardware startup facing similar challenges."
```

### 8.4 证言署名格式

- **职位**: 具体职位（"CEO", "VP of Operations", "Product Manager"）
- **公司**: 公司名称（或"Fortune 500 Medical Device Company"如果需保密）
- **可选**: 照片、LinkedIn 链接（需授权）

---

## 九、视觉元素规范

### 9.1 案例图片类型

#### 产品图片
- 实际产品的清晰照片
- 展示产品特点
- 如果有多个角度更好

#### 工厂/生产图片
- 设备照片
- 生产线照片
- 质量控制过程

#### 图表和图形
- 成果对比图（Before/After）
- 增长曲线
- 流程图
- 认证标志

### 9.2 图片规范

- **主图**: 16:9 宽高比，1200x675px
- **产品图**: 白色或透明背景
- **工厂图**: 展示专业环境
- **图表**: 品牌色（Navy #132843, Blue #3966A2）

### 9.3 图片路径

```
/images/case-study-[subject].jpg
/images/industry-[industry].jpg
```

---

## 十、CTA 与转化优化

### 10.1 案例中的 CTA

**页面底部 CTA**（强转化导向）:
```
"Ready to Achieve Similar Results?"
"Let's discuss how we can help your project succeed."
```

**CTA 按钮**:
- Primary: "Start Your Project" → /contact
- Secondary: "Book a Factory Tour" → /factory-tour

### 10.2 相关内容推荐

在案例页面底部展示相关案例：
- 同行业其他案例
- 相似挑战的案例
- 最新发布的案例

### 10.3 销售支持材料

每个案例应提供可下载版本（PDF）:
- 销售团队可以发送给潜在客户
- 包含完整内容
- 品牌格式统一
- 联系信息突出

---

## 十一、客户保密与授权

### 11.1 保密原则

**必须获得书面授权**:
- 使用客户公司名称
- 使用具体产品信息
- 使用客户照片或 Logo
- 分享具体财务数据

**匿名化处理**（无授权时）:
- "A leading smart home technology company"
- "A Fortune 500 medical device manufacturer"
- "A US-based industrial IoT company"
- 模糊具体产品细节

### 11.2 授权流程

1. **项目完成后** 发送案例研究邀请
2. **提供初稿** 让客户审核
3. **修改敏感信息** 根据反馈调整
4. **获得最终批准** 书面确认
5. **发布并分享** 发送链接给客户

### 11.3 行业特殊考虑

**医疗行业**:
- 需更严格的 HIPAA/隐私合规
- 可能需要客户法务审核
- 避免任何患者相关信息

**汽车行业**:
- 客户可能有严格的供应商保密协议
- 需要高级管理层批准
- 可能需要等待产品上市后才能发布

---

## 十二、发布前检查清单

### 12.1 内容质量检查

- [ ] 挑战描述具体且真实
- [ ] 解决方案详细且可理解
- [ ] 所有数据有来源且准确
- [ ] 客户证言自然且有意义
- [ ] 无拼写和语法错误
- [ ] 获得客户授权（如使用真实名称）

### 12.2 SEO 检查

- [ ] 标题包含行业、挑战、成果
- [ ] Meta description 150-160 字符
- [ ] URL 简洁且描述性
- [ ] 图片有 Alt 文本
- [ ] 包含内部链接

### 12.3 品牌合规检查

- [ ] 强调 US 管理和工程支持
- [ ] 避免 "cheap" 等词汇
- [ ] 使用 "partner" 而非 "supplier"
- [ ] 语气专业且以成果为导向
- [ ] CTA 清晰且转化导向

### 12.4 数据检查

- [ ] 所有数字准确且有来源
- [ ] 时间线清晰
- [ ] 对比基准明确（如"vs US manufacturers"）
- [ ] 不夸大或过度承诺

---

## 十三、示例案例完整解析

### 示例 1: Smart Home Device Scaling

**标题**: Smart Home Device Manufacturer: Scaling from 1K to 50K Units with 35% Cost Savings

**核心数据**:
- Cost Reduction: 35%
- Time to Market: 8 Weeks
- Quality Rate: 99.7%

**结构分析**:
1. **背景**: 美国智能家居公司，创新恒温器产品，市场增长快
2. **挑战**: 从 1,000 增加到 50,000 单位/月，需要降低 30% 成本
3. **解决方案**: Three-Phase Rocket 方法（NPI → Pilot → Scale）
4. **成果**: 35% 成本降低，8 周上市，99.7% 良率
5. **证言**: 强调达到与竞争对手价格平价

**SEO 亮点**:
- 关键词: "smart home", "scaling", "cost reduction", "manufacturing"
- 行业明确（Consumer IoT）
- 具体成果（35%, 8 weeks, 99.7%）

### 示例 2: Medical Device FDA Approval

**标题**: Medical Device Startup Achieves FDA 510(k) Clearance on First Attempt

**核心数据**:
- FDA Approval: "First Try"
- Traceability: "100%"
- Cost Savings: 45% vs US manufacturers

**结构分析**:
1. **背景**: 医疗设备创业公司，新型患者监护设备
2. **挑战**: FDA 合规 + 完整可追溯 + 有限预算
3. **解决方案**: 专用洁净室 + 完整追溯系统 + 文档支持
4. **成果**: 首次提交即获批准，45% 成本节省
5. **证言**: 强调文档和质量系统超预期

**SEO 亮点**:
- 关键词: "medical device", "FDA", "510(k)", "compliance"
- 针对医疗行业决策者

### 示例 3: Industrial IoT Certifications

**标题**: Industrial IoT Platform: Achieving Global Certification for 5 Markets

**核心数据**:
- Certifications: "5 Markets"
- Temperature Range: "-40°C to +85°C"
- IP Rating: "IP67"

**结构分析**:
1. **背景**: 工业物联网公司，恶劣环境传感器
2. **挑战**: 宽温、IP67、5 大市场认证
3. **解决方案**: 外壳设计 + 组件选择 + 环境测试 + 认证支持
4. **成果**: 5 市场同时上市，零现场故障
5. **证言**: 强调真正的一站式服务

---

## 十四、常见问题 FAQ

**Q: 案例研究应该多长？**
A: 列表页摘要 100-150 字，详情页 1200-2000 字（阅读时间 5-8 分钟）。

**Q: 可以使用真实客户名称吗？**
A: 必须获得客户书面授权。如果没有授权，使用匿名化描述（"A leading smart home company"）。

**Q: 多久发布一个新案例？**
A: 建议每月 1-2 个，基于实际完成的项目。质量比数量重要。

**Q: 如何处理敏感的商业信息？**
A: 与客户确认可以分享的信息边界。通常可以分享百分比改善，但避免分享具体财务数字（除非获得明确授权）。

**Q: 可以包含还在进行中的项目吗？**
A: 不建议。案例研究应基于已完成的项目，有可量化的成果。

**Q: 如果客户没有可量化的成果怎么办？**
A: 可以使用定性成果（"improved communication", "reduced stress"），但最好有一些数据（即使是估算的）。

**Q: 如何处理失败的案例？**
A: 案例研究应展示成功案例。如果有挑战或失败，展示如何克服。如果项目完全失败，不要作为案例研究。

---

*本指南由 Illuminious 市场和销售团队共同维护，确保案例研究内容既符合品牌标准又有效支持销售转化。*
