import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    fallbackSrc?: string;
}

/**
 * Optimized Image Component with:
 * - Native lazy loading for below-fold images
 * - Loading placeholder with fade-in effect
 * - Error fallback handling
 * - Responsive sizing
 */
export default function OptimizedImage({
    src,
    alt,
    className = "",
    width,
    height,
    priority = false,
    fallbackSrc = "/images/illuminious-logo-blue.png",
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Reset states when src changes
        setIsLoaded(false);
        setHasError(false);
    }, [src]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder skeleton */}
            {!isLoaded && (
                <div
                    className="absolute inset-0 bg-illuminious-light/50 animate-pulse"
                    style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
                />
            )}

            <img
                ref={imgRef}
                src={hasError ? fallbackSrc : src}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
                    } ${className}`}
            />
        </div>
    );
}

/**
 * Hero image variant - loads eagerly as it's above the fold
 */
export function HeroImage({
    src,
    alt,
    className = "",
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <img
            src={src}
            alt={alt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className={className}
        />
    );
}

/**
 * Background image with lazy loading
 */
export function LazyBackgroundImage({
    src,
    alt,
    className = "",
    children,
}: {
    src: string;
    alt: string;
    className?: string;
    children?: React.ReactNode;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "100px", // Start loading 100px before it enters viewport
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {isVisible && (
                <>
                    <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => setIsLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
                            }`}
                    />
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-illuminious-light/30 animate-pulse" />
                    )}
                </>
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
