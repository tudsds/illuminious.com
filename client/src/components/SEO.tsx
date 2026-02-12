import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  image = "/images/illuminious-logo-main.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  breadcrumbs,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes("Illuminious")
    ? title
    : `${title} | Illuminious - Electronics Manufacturing Services`;
  const siteUrl = "https://illuminious.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update Canonical URL
    let linkCanonical = document.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", fullUrl);

    // Robots meta tag
    updateMeta(
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Basic meta tags
    updateMeta("description", description);
    if (keywords) {
      updateMeta("keywords", keywords);
    }

    // Open Graph tags
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", description, true);
    updateMeta("og:image", fullImage, true);
    updateMeta("og:image:width", "1200", true);
    updateMeta("og:image:height", "630", true);
    updateMeta("og:image:alt", title, true);
    updateMeta("og:url", fullUrl, true);
    updateMeta("og:type", type === "article" ? "article" : "website", true);
    updateMeta("og:site_name", "Illuminious", true);
    updateMeta("og:locale", "en_US", true);

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", fullImage);
    updateMeta("twitter:image:alt", title);
    updateMeta("twitter:site", "@illuminious");

    // Article specific tags
    if (type === "article") {
      if (publishedTime) {
        updateMeta("article:published_time", publishedTime, true);
      }
      if (modifiedTime) {
        updateMeta("article:modified_time", modifiedTime, true);
      }
      if (author) {
        updateMeta("article:author", author, true);
      }
      updateMeta("article:publisher", "https://illuminious.com", true);
    }

    // Build structured data array
    const structuredDataArray: object[] = [];

    // Article structured data
    if (type === "article") {
      structuredDataArray.push({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        url: fullUrl,
        image: fullImage,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          "@type": "Organization",
          name: author || "Illuminious",
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Illuminious LLC",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/illuminious-logo-main.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl,
        },
      });
    }

    // BreadcrumbList structured data
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredDataArray.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.url}`,
        })),
      });
    }

    // Remove existing ld+json scripts added by SEO component
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"][data-seo-component]'
    );
    existingScripts.forEach((s) => s.remove());

    // Add new structured data scripts
    structuredDataArray.forEach((data) => {
      const scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.setAttribute("data-seo-component", "true");
      scriptTag.textContent = JSON.stringify(data);
      document.head.appendChild(scriptTag);
    });

    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"][data-seo-component]'
      );
      scripts.forEach((s) => s.remove());
    };
  }, [
    fullTitle,
    description,
    keywords,
    fullImage,
    fullUrl,
    type,
    publishedTime,
    modifiedTime,
    author,
    breadcrumbs,
    noindex,
  ]);

  return null;
}
