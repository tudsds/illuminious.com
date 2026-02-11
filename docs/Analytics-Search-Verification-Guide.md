# Website Status Verification Guide

This guide explains how to check the current status of your website analytics and search presence using Google Analytics 4 (GA4), Google Tag Manager (GTM), and Google Search.

## 1. Google Analytics 4 (GA4)

**Goal:** Verify that your website is sending data to Google Analytics.

### Method A: Real-Time Report (Easiest)
1.  **Log in** to your Google Analytics account: [analytics.google.com](https://analytics.google.com)
2.  **Select your property:** Ensure "Illuminious Website" is selected in the top-left dropdown.
3.  **Navigate to Reports:** Click the **Reports** icon (bar chart) in the left sidebar.
4.  **Click "Realtime":** It's usually the first option under "Reports snapshot".
5.  **Visit your website:** Open `https://illuminious.com` in a separate browser tab or window (incognito mode recommended to avoid admin internal traffic filters if set).
6.  **Check the Dashboard:**
    *   You should see a count of "Users in last 30 minutes".
    *   If you see **at least 1 user** (you), GA4 is working correctly!
    *   You can also see your location on the map and the events triggering (e.g., `page_view`, `scroll`).

### Method B: DebugView (For Developers)
1.  In GA4, go to **Admin (Gear icon)** > **Data display** > **DebugView**.
2.  Trigger events on your website (click links, submit forms).
3.  You should see a timeline of events appearing in DebugView with < 1 minute delay.

---

## 2. Google Tag Manager (GTM)

**Goal:** Verify that your GTM container is installed and tags are firing correctly.

### Method: GTM Preview Mode
1.  **Log in** to Google Tag Manager: [tagmanager.google.com](https://tagmanager.google.com)
2.  **Select your container:** "GTM-TV3WNHSZ".
3.  **Click "Preview":** The blue button in the top-right corner.
4.  **Enter your URL:** Type `https://illuminious.com` in the field and click **Connect**.
5.  **A new window will open** with your website. You should see a "Tag Assistant Connected" badge in the bottom right corner.
6.  **Check the Tag Assistant tab:** Go back to the tab where you started the preview. It will show a "Summary" of events.
7.  **Verify Tags:**
    *   **Tags Fired:** These are functioning correctly (e.g., "GA4 Configuration", "Meta Pixel Base Code").
    *   **Tags Not Fired:** These are waiting for specific triggers (e.g., "GA4 Event - Form Submit" will only fire when you reach the Thank You page).

---

## 3. Google Search Status

**Goal:** Verify if your website is indexed and visible on Google.

### Method A: "site:" Operator (Quick Check)
1.  Go to [Google.com](https://google.com).
2.  In the search bar, type: `site:illuminious.com`
3.  **Analyze Results:**
    *   **If you see results:** Your pages are indexed! Google knows about your site.
    *   **If "Your search - site:illuminious.com - did not match any documents":** Your site is not yet indexed. This is normal for brand new sites (can take days/weeks).

### Method B: Google Search Console (Detailed Status)
*Note: This requires you to have set up Google Search Console.*

1.  **Log in** to [search.google.com](https://search.google.com/search-console).
2.  **Select your property:** `https://illuminious.com`.
3.  **Overview Page:** Look at the "Performance" chart (clicks/impressions) and "Indexing" card.
4.  **URL Inspection:**
    *   Paste your homepage URL (`https://illuminious.com`) in the top search bar.
    *   Click **Enter**.
    *   It will tell you: **"URL is on Google"** (Good) or **"URL is not on Google"**.
    *   If not on Google, click **"Request Indexing"** to speed up the process.

---

## Summary of Identifiers
- **GA4 Measurement ID:** `G-8903WGE2L3`
- **GTM Container ID:** `GTM-TV3WNHSZ`
