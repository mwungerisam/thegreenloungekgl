import { useState } from "react";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g., 'aspect-[4/5]', 'aspect-video', etc.
}

export default function ImageLoader({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-auto"
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full bg-brand-card ${aspectRatio}`}>
      {/* Sleek Shimmering Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 bg-gradient-to-br from-brand-charcoal via-brand-green-deep/10 to-brand-charcoal animate-pulse">
          <div className="w-1/3 h-2 bg-brand-green-deep/30 rounded" />
          <div className="space-y-2">
            <div className="w-3/4 h-3 bg-brand-green-deep/30 rounded" />
            <div className="w-1/2 h-2 bg-brand-green-deep/20 rounded" />
          </div>
        </div>
      )}

      {/* Fallback state in case of network issues */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 bg-brand-charcoal border border-brand-green-deep/20 text-center">
          <p className="text-[10px] tracking-widest text-brand-gold font-bold uppercase mb-1">
            THE GREEN LOUNGE
          </p>
          <p className="text-[11px] text-brand-cream/40">Visual loading paused</p>
        </div>
      )}

      {/* Elegant Fade-in Image Asset */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-sm"
        } ${className}`}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
}
