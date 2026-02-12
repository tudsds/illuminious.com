# Illuminious SEO + GEO 数字营销推流完整指南 (2025版)
# Illuminious SEO + GEO Digital Marketing Complete Guide (2025 Edition)

**版本 / Version:** 2.0 (Updated for 2025 Configuration)
**日期 / Date:** 2026-02-04
**适用对象 / Audience:** 初学者 & 营销执行人员 / Beginners & Marketing Executors

---

## ⚠️ 重要提示: 开始之前 / Important: Before You Start

本指南假设您没有深厚的技术背景。我们将提供**点击级 (Click-level)** 的详细步骤。
This guide assumes no deep technical background. We provide **click-level** detailed steps.

**已配置的基础设施 / Infrastructure Already Configured:**
*   **Google Analytics 4 (GA4):** ID `G-8903WGE2L3` (代码已部署 / Code Deployed)
*   **Google Tag Manager (GTM):** ID `GTM-TV3WNHSZ` (代码已部署 / Code Deployed)
*   **Meta Pixel:** ID `1657064391621257` (代码已部署 / Code Deployed)
*   **法律实体 / Legal Entity:** Illuminious LLC (Sheridan, WY)

---

## 目录 / Table of Contents

1. [业务与受众分析 / Business & Audience Analysis](#1-业务与受众分析--business--audience-analysis)
2. [Google Ads 账户创建与设置 (关键步骤) / Google Ads Account Setup (Critical Steps)](#2-google-ads-账户创建与设置--google-ads-account-setup)
3. [GA4 转化追踪设置 / GA4 Conversion Tracking Setup](#3-ga4-转化追踪设置--ga4-conversion-tracking-setup)
4. [Meta (Facebook/Instagram) 广告设置 / Meta Ads Setup](#4-meta-facebookinstagram-广告设置--meta-ads-setup)
5. [关键词策略 / Keyword Strategy](#5-关键词策略--keyword-strategy)
6. [广告投放执行清单 / Campaign Execution Checklist](#6-广告投放执行清单--campaign-execution-checklist)

---

## 1. 业务与受众分析 / Business & Audience Analysis

### 1.1 业务概览 / Business Overview
**Illuminious LLC** 是一家全球电子制造服务商，连接美国设计与亚洲制造。
**Illuminious LLC** is a global electronics manufacturing service provider connecting US design with Asian manufacturing.

*   **注册地址 / Registered Address:** 30 N Gould St, Ste R, Sheridan, WY 82801, USA
*   **运营总部 / HQ:** Palo Alto, California
*   **核心卖点 / USP:** 美国工程支持 + 亚洲成本优势 (US Engineering + Asian Cost Efficiency)

### 1.2 目标受众 / Target Audience
*   **初创公司创始人 (Startup Founders):** 寻找 "All-in-one" 合作伙伴，怕踩坑。
*   **中小企业采购 (SME Procurement):** 寻找 "China+1" 备选方案，关注供应链安全。

---

## 2. Google Ads 账户创建与设置 / Google Ads Account Setup

**🔴 关键警告 / CRITICAL WARNING:**
Google Ads 会默认引导您进入 "智能模式 (Smart Mode)"（简易版，功能受限）。**您必须切换到 "专家模式 (Expert Mode)"** 才能进行有效投放。
Google Ads defaults to "Smart Mode" (simplified, limited features). **You MUST switch to "Expert Mode"** for effective advertising.

### 步骤 1: 创建账户并跳过向导 / Step 1: Create Account & Skip Wizard

1.  打开浏览器，访问 [ads.google.com](https://ads.google.com)。
    Open browser, go to [ads.google.com](https://ads.google.com).
2.  点击右上角的蓝色按钮 **"Start now" (立即开始)**。
    Click the blue **"Start now"** button in the top right.
3.  登录您的 Google 账号。
    Log in with your Google account.
4.  **🛑 停下! 不要点击任何大图标。 / STOP! Do not click the large icons.**
    屏幕上会询问 "What's your main advertising goal?" (您的主要广告目标是什么？)
    The screen asks "What's your main advertising goal?"
5.  **寻找隐藏链接 / Find the Hidden Link:**
    在页面底部，找到一行小蓝字：**"Switch to Expert Mode" (切换至专家模式)**。点击它。
    Look at the bottom of the page for a small blue link: **"Switch to Expert Mode"**. Click it.
    *(如果没看到，找 "Are you a professional marketer?" / If not seen, look for "Are you a professional marketer?")*
6.  **再次跳过 / Skip Again:**
    下一页会让你选择目标 (Sales, Leads, etc.)。**不要选！**
    The next page asks for an objective (Sales, Leads, etc.). **Do NOT select one!**
    找到左下角的小字链接：**"Create an account without a campaign" (直接创建账户而不制作广告系列)**。点击它。
    Find the small link in the bottom left: **"Create an account without a campaign"**. Click it.

### 步骤 2: 确认商业信息 / Step 2: Confirm Business Info

这是最后一次修改机会，请仔细确认：
This is your last chance to edit, check carefully:
1.  **Billing Country (账单国家):** United States
2.  **Time Zone (时区):** (GMT-08:00) Pacific Time (Los Angeles) *[与 Analytics 保持一致 / Match Analytics]*
3.  **Currency (货币):** US Dollar ($)
4.  点击 **"Submit" (提交)**。
5.  点击 **"Explore your account" (探索您的账户)**。

恭喜！您现在进入了完整的 Google Ads 专家后台。
Congratulations! You are now in the full Google Ads Expert Dashboard.

---

## 3. GA4 转化追踪设置 / GA4 Conversion Tracking Setup

代码已经安装在网站上，现在需要在 GA4 后台告诉它什么是"转化"。
The code is on the website, now we tell GA4 interface what a "conversion" is.

### 步骤 1: 标记关键事件 / Step 1: Mark Key Events

1.  访问 [analytics.google.com](https://analytics.google.com)。
    Go to [analytics.google.com](https://analytics.google.com).
2.  点击左下角的齿轮图标 **"Admin" (管理)**。
    Click the gear icon **"Admin"** in the bottom left.
3.  在 "Data display" (数据展示) 栏下，点击 **"Events" (事件)**。
    Under "Data display", click **"Events"**.
4.  您会看到一个事件列表（如果没有数据，可能需要等待24小时或自己去网站测试提交一次表单）。
    You will see a list of events (if empty, wait 24h or submit a form on your site to trigger data).
5.  **寻找事件 / Find Event:** `generate_lead`
    *(这是我们在代码中设置的表单提交事件 / This is the form submit event we coded)*
6.  **开启开关 / Toggle On:**
    在 `generate_lead` 所在的行，最右侧有一个 **"Mark as conversion" (标记为转化)** 的开关。点击它，使其变蓝。
    On the row for `generate_lead`, find the **"Mark as conversion"** toggle on the far right. Click it to turn it blue.

### 步骤 2: 连接 Google Ads / Step 2: Link Google Ads

1.  在 Admin (管理) 界面，往下滚动到 "Product links" (产品关联)。
    In Admin, scroll down to "Product links".
2.  点击 **"Google Ads links" (Google Ads 关联)**。
    Click **"Google Ads links"**.
3.  点击右上角蓝色按钮 **"Link" (关联)**。
    Click blue **"Link"** button.
4.  点击 "Choose Google Ads accounts" (选择 Google Ads 账户)，勾选您刚刚创建的账户。
    Click "Choose Google Ads accounts" and check the account you just created.
5.  点击 "Confirm" (确认) -> "Next" (下一步)。
6.  保持默认设置，点击 "Next" -> "Submit" (提交)。

---

## 4. Meta (Facebook/Instagram) 广告设置 / Meta Ads Setup

### 步骤 1: 验证 Pixel / Step 1: Verify Pixel

1.  我们已经在网站上安装了 Meta Pixel (ID: `1657064391621257`)。
    We have installed Meta Pixel (ID: `1657064391621257`) on the website.
2.  下载 Chrome 插件 **"Meta Pixel Helper"**。
    Download Chrome extension **"Meta Pixel Helper"**.
3.  访问您的网站 `illuminious.com`。
    Visit your website `illuminious.com`.
4.  点击插件图标，应该看到：
    Click extension icon, you should see:
    *   ✅ PageView (所有页面 / All Pages)
    *   ✅ Lead (当您提交联系表单后 / After you submit contact form)

### 步骤 2: 域名验证 (Domain Verification) / Step 2: Domain Verification

*(在 2025/2026 年，Meta 已自动化大部分事件配置，但域名验证不仅是为了广告，也有助于品牌安全。 / In 2025/2026, Meta automated most event configs, but domain verification helps brand safety.)*

1.  访问 [Meta Business settings](https://business.facebook.com/settings) (商务管理平台设置)。
    Go to [Meta Business settings](https://business.facebook.com/settings).
2.  点击 **"Brand Safety" (品牌安全)** > **"Domains" (域名)**。
    Click **"Brand Safety"** > **"Domains"**.
3.  点击 **"Add" (添加)** > **"Create a new domain"**。
    Click **"Add"** > **"Create a new domain"**.
4.  输入 `illuminious.com`。
5.  选择 **"Update the DNS TXT record"** 验证方式。
    Select **"Update the DNS TXT record"** verification method.
6.  复制 TXT 记录代码 (类似 `facebook-domain-verification=...`)。
    Copy the TXT record code.
7.  **(需要技术支持 / Tech Support Needed)** 将此代码发给开发人员添加到域名 DNS 中。
    Send this code to developer to add to domain DNS.

*(注意：以前的 "Aggregated Event Measurement" 标签页在 2025 年已被移除，Meta 现在自动处理事件优先级。 / Note: The old "Aggregated Event Measurement" tab was removed in 2025; Meta now handles prioritization automatically.)*

---

## 5. 关键词策略 / Keyword Strategy

直接复制并粘贴以下关键词到 Google Ads 的 "Keyword Planner" (关键词规划师) 中获取最新出价。
Copy and paste these directly into Google Ads "Keyword Planner" for latest bids.

### 核心高意向词 / Core High-Intent Keywords (Tier 1)
*(这些人准备下单 / These people are ready to buy)*

```text
"electronics manufacturing services usa"
"pcb assembly services silicon valley"
"turnkey pcb assembly"
"low volume pcb assembly"
"prototype pcb assembly usa"
"ems provider california"
```

### 竞品截流词 / Competitor Keywords (Tier 2)
*(他们在搜对手，我们要拦截 / Searching for rivals, we intercept)*

```text
"jabil competitors"
"flex competitors"
"sanmina alternatives"
"benchmark electronics alternatives"
```

### 否定关键词 / Negative Keywords (必加! / Must Add!)
*(告诉 Google 搜这些词**不要**展示我们的广告，省钱！)*
*(Tell Google **NOT** to show ads for these, save money!)*

```text
jobs
careers
salary
internship
stock
repair
manual
course
tutorial
cheap
free
software
resume
hiring
```

---

## 6. 广告投放执行清单 / Campaign Execution Checklist

### ✅ 广告系列设置 (Google Ads) / Campaign Setup
*   **目标 (Goal):** Leads (潜在客户)
*   **网络 (Networks):** 仅搜索网络 (Search Network ONLY)。**取消勾选** Display Network (展示广告网络)。
*   **地点 (Locations):**
    *   United States (重点: California, Texas, Massachusetts)
    *   Canada
    *   Western Europe (UK, Germany)
*   **语言 (Languages):** English
*   **出价策略 (Bidding):** Maximize Clicks (最大化点击) [设置上限 $15] -> 积累30个转化后切换为 -> Maximize Conversions (最大化转化)。
    *   *Start with Maximize Clicks (Cap $15) -> Switch to Maximize Conversions after 30 leads.*

### ✅ 广告文案模板 / Ad Copy Template

**标题 (Headlines) [30字符]:**
1. US Engineering, Asia Pricing
2. Illuminious PCB Assembly
3. Fast Turnkey Electronics Mfg

**描述 (Descriptions) [90字符]:**
1. Get PCBA & Box Build quotes in 24h. Based in Palo Alto, factory in Shenzhen.
2. From prototype to mass production. Seamless DFM support. ISO 9001 Certified.

---

**下一步 / Next Steps:**
1.  登录 Google Ads，按照第2章完成账户设置。
    Log in to Google Ads, complete account setup per Chapter 2.
2.  绑定信用卡 (Billing)。
    Add credit card (Billing).
3.  创建第一个 "Search Campaign" (搜索广告系列)。
    Create first "Search Campaign".
