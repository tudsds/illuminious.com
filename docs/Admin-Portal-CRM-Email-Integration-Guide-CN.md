# Admin Portal 与 CRM/邮箱功能集成指南

本文档详细介绍如何从零开始搭建 Admin Portal 的外部 CRM 和邮箱功能，包括所需准备、价格对比、以及具体配置步骤。

---

## 目录

1. [功能概述](#功能概述)
2. [邮箱服务集成](#邮箱服务集成)
3. [CRM系统集成](#crm系统集成)
4. [您需要提供的信息](#您需要提供的信息)
5. [价格汇总](#价格汇总)
6. [实施步骤](#实施步骤)

---

## 功能概述

Admin Portal 需要以下外部服务来实现完整功能：

| 功能 | 所需服务 | 用途 |
|------|----------|------|
| 首次登录邮箱绑定 | 邮件发送服务 | 发送验证邮件确认邮箱 |
| 密码找回/重置 | 邮件发送服务 | 发送密码重置链接 |
| 询盘自动通知 | 邮件发送服务 | 新询盘时通知管理员 |
| 客户关系管理 | CRM系统 | 管理客户信息和跟进 |
| 询盘自动同步 | CRM集成 | 将网站询盘自动导入CRM |

---

## 邮箱服务集成

### 方案对比

以下是三种主流邮件发送服务的对比，按价格从低到高排列：

| 服务商 | 免费额度 | 付费价格 | 优点 | 缺点 |
|--------|----------|----------|------|------|
| **Resend** | 3,000封/月 | $20/月起（50,000封） | 开发者友好、API简洁、支持React Email | 较新的服务 |
| **SendGrid** | 100封/天 | $19.95/月起（50,000封） | 成熟稳定、文档完善 | 配置较复杂 |
| **AWS SES** | 无免费额度 | $0.10/1,000封 | 最便宜、高可靠性 | 需要AWS账户、配置复杂 |

### 推荐方案：Resend（最低成本）

**为什么选择 Resend：**
- 每月3,000封免费邮件，对于中小企业完全够用
- API设计简洁，集成只需几行代码
- 支持自定义发件域名
- 提供邮件模板功能

### Resend 配置步骤

#### 步骤1：注册 Resend 账户

1. 访问 [https://resend.com](https://resend.com)
2. 点击 "Start for free" 注册账户
3. 验证您的邮箱地址

#### 步骤2：添加发件域名

1. 登录 Resend 控制台
2. 点击 "Domains" → "Add Domain"
3. 输入您的域名（例如：illuminious.com）
4. 按照提示添加以下 DNS 记录：

```
类型: TXT
名称: resend._domainkey
值: (Resend提供的值)

类型: TXT  
名称: @
值: v=spf1 include:amazonses.com ~all
```

5. 等待DNS验证完成（通常需要几分钟到几小时）

#### 步骤3：获取 API Key

1. 在 Resend 控制台点击 "API Keys"
2. 点击 "Create API Key"
3. 命名为 "Illuminious Website"
4. 选择权限 "Full access"
5. 复制生成的 API Key（只显示一次，请妥善保存）

#### 步骤4：在网站中配置

您需要提供以下信息给我：

```
RESEND_API_KEY=re_xxxxxxxxxx
RESEND_FROM_EMAIL=noreply@illuminious.com
```

---

## CRM系统集成

### 方案对比

| CRM系统 | 免费版本 | 付费价格 | 适合场景 | API支持 |
|---------|----------|----------|----------|---------|
| **HubSpot** | 免费CRM（无限联系人） | $45/月起（专业版） | 中小企业、营销自动化 | 完善 |
| **Zoho CRM** | 3用户免费 | $14/用户/月起 | 预算有限的小企业 | 完善 |
| **Salesforce** | 无免费版 | $25/用户/月起 | 大型企业 | 最完善 |
| **Pipedrive** | 无免费版 | $14.90/用户/月起 | 销售团队 | 良好 |

### 推荐方案：HubSpot Free CRM（零成本）

**为什么选择 HubSpot Free CRM：**
- 完全免费，无用户数限制
- 可存储无限联系人
- 提供完善的 API 接口
- 自带邮件追踪和任务管理
- 可随时升级到付费版本

### HubSpot 配置步骤

#### 步骤1：注册 HubSpot 账户

1. 访问 [https://www.hubspot.com/products/crm](https://www.hubspot.com/products/crm)
2. 点击 "Get free CRM"
3. 使用公司邮箱注册（建议使用 @illuminious.com 邮箱）
4. 完成账户设置向导

#### 步骤2：创建 Private App 获取 API 访问

1. 登录 HubSpot 后，点击右上角 ⚙️ 设置图标
2. 在左侧菜单选择 "Integrations" → "Private Apps"
3. 点击 "Create a private app"
4. 填写应用信息：
   - App name: Illuminious Website
   - Description: Website inquiry integration
5. 在 "Scopes" 标签页选择以下权限：
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `crm.objects.deals.read`
   - `crm.objects.deals.write`
6. 点击 "Create app"
7. 复制生成的 Access Token

#### 步骤3：配置联系人属性

为了更好地管理网站询盘，建议在 HubSpot 中添加以下自定义属性：

1. 进入 Settings → Properties
2. 点击 "Create property"
3. 添加以下属性：

| 属性名称 | 字段类型 | 用途 |
|----------|----------|------|
| inquiry_source | Dropdown | 询盘来源（网站/展会/推荐等） |
| product_interest | Multiple checkboxes | 感兴趣的服务 |
| project_stage | Dropdown | 项目阶段 |
| estimated_volume | Number | 预估订单量 |

#### 步骤4：在网站中配置

您需要提供以下信息给我：

```
HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxx
HUBSPOT_PORTAL_ID=12345678
```

---

## 您需要提供的信息

为了完成集成，请提供以下信息：

### 1. 邮箱服务（选择一个）

**如果选择 Resend：**
- [ ] Resend API Key
- [ ] 发件邮箱地址（例如：noreply@illuminious.com）
- [ ] 域名 DNS 管理权限（用于添加验证记录）

**如果选择 SendGrid：**
- [ ] SendGrid API Key
- [ ] 发件邮箱地址
- [ ] 域名 DNS 管理权限

### 2. CRM系统（选择一个）

**如果选择 HubSpot：**
- [ ] HubSpot Private App Access Token
- [ ] HubSpot Portal ID

**如果选择 Zoho CRM：**
- [ ] Zoho Client ID
- [ ] Zoho Client Secret
- [ ] Zoho Refresh Token

### 3. 通用信息

- [ ] 管理员通知邮箱（收到新询盘时通知谁）
- [ ] 公司名称（用于邮件签名）
- [ ] 公司Logo URL（用于邮件模板）

---

## 价格汇总

### 最低成本方案（推荐）

| 服务 | 月费用 | 说明 |
|------|--------|------|
| Resend 邮件服务 | **$0** | 免费额度3,000封/月 |
| HubSpot CRM | **$0** | 免费版本 |
| **总计** | **$0/月** | 完全免费 |

### 中等规模方案

| 服务 | 月费用 | 说明 |
|------|--------|------|
| Resend 邮件服务 | $20 | 50,000封/月 |
| HubSpot CRM Starter | $45 | 更多营销功能 |
| **总计** | **$65/月** | |

### 企业级方案

| 服务 | 月费用 | 说明 |
|------|--------|------|
| SendGrid Pro | $89.95 | 100,000封/月 |
| HubSpot Professional | $450 | 完整营销自动化 |
| **总计** | **$539.95/月** | |

---

## 实施步骤

完成上述准备后，请按以下步骤进行：

### 第一阶段：邮件服务集成（1-2小时）

1. **注册邮件服务账户**
   - 访问 Resend 官网注册
   - 验证邮箱

2. **配置发件域名**
   - 在 Resend 添加域名
   - 在您的域名DNS中添加验证记录
   - 等待验证完成

3. **获取API密钥**
   - 创建 API Key
   - 将密钥发送给我

4. **我来完成代码集成**
   - 配置邮件发送功能
   - 创建邮件模板
   - 测试发送

### 第二阶段：CRM集成（2-3小时）

1. **注册CRM账户**
   - 访问 HubSpot 注册免费CRM
   - 完成初始设置

2. **创建API访问**
   - 创建 Private App
   - 配置所需权限
   - 获取 Access Token

3. **配置自定义属性**
   - 添加询盘相关字段
   - 设置下拉选项

4. **我来完成代码集成**
   - 配置 HubSpot API 连接
   - 实现询盘自动同步
   - 测试数据流转

### 第三阶段：测试与上线（1小时）

1. **功能测试**
   - 测试邮箱验证流程
   - 测试密码重置流程
   - 测试询盘提交和CRM同步

2. **通知设置**
   - 配置管理员通知
   - 设置邮件模板

3. **上线发布**
   - 保存checkpoint
   - 发布到生产环境

---

## 常见问题

### Q: 如果我没有自己的域名怎么办？

A: 您可以使用 Resend 提供的默认发件地址（onboarding@resend.dev）进行测试，但建议尽快配置自己的域名以提高邮件送达率。

### Q: 免费额度用完了怎么办？

A: Resend 的免费额度是每月重置的。如果经常超出，建议升级到付费计划（$20/月起）。

### Q: 可以同时使用多个CRM吗？

A: 技术上可以，但不建议。建议选择一个主要的CRM系统，避免数据分散。

### Q: 邮件发送失败怎么排查？

A: 
1. 检查 API Key 是否正确
2. 检查域名验证是否完成
3. 查看 Resend 控制台的发送日志
4. 检查收件人邮箱是否有效

---

## 下一步行动

请按以下顺序操作：

1. ✅ 阅读本文档了解整体流程
2. ⬜ 注册 Resend 账户并配置域名
3. ⬜ 注册 HubSpot 免费CRM
4. ⬜ 将获取的 API 密钥发送给我
5. ⬜ 我完成代码集成
6. ⬜ 共同测试所有功能
7. ⬜ 发布上线

---

*文档最后更新：2026年1月19日*
*如有疑问，请随时询问*
