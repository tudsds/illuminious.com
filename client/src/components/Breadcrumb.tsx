import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

/**
 * Breadcrumb navigation component for SEO and user navigation
 * Implements Schema.org BreadcrumbList structured data
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
    // Generate JSON-LD structured data for breadcrumbs
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href ? `https://illuminious.com${item.href}` : undefined,
        })),
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Visual Breadcrumb */}
            <nav
                aria-label="Breadcrumb"
                className={`flex items-center gap-2 text-sm ${className}`}
            >
                <Link
                    href="/"
                    className="text-illuminious-sky hover:text-white transition-colors flex items-center gap-1"
                >
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                </Link>

                {items.map((item, index) => (
                    <span key={item.label} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-illuminious-light/50" />
                        {item.href && index < items.length - 1 ? (
                            <Link
                                href={item.href}
                                className="text-illuminious-sky hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-white font-medium">{item.label}</span>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}

/**
 * Light variant for pages with light backgrounds
 */
export function BreadcrumbLight({ items, className = "" }: BreadcrumbProps) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href ? `https://illuminious.com${item.href}` : undefined,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <nav
                aria-label="Breadcrumb"
                className={`flex items-center gap-2 text-sm ${className}`}
            >
                <Link
                    href="/"
                    className="text-illuminious-blue hover:text-illuminious-navy transition-colors flex items-center gap-1"
                >
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                </Link>

                {items.map((item, index) => (
                    <span key={item.label} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                        {item.href && index < items.length - 1 ? (
                            <Link
                                href={item.href}
                                className="text-illuminious-blue hover:text-illuminious-navy transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-illuminious-navy font-medium">{item.label}</span>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}
