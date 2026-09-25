import Image from "next/image";

/**
 * 4:5 portrait photo in the site's rounded frame.
 * `eager` is for above-the-fold images: it sets fetchPriority="high" rather
 * than `preload`, because on mobile the hero photo sits below the headline and
 * isn't reliably the LCP element — the case the Next 16 docs warn against.
 */
export function Photo({
  src,
  alt,
  className = "",
  eager = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-lg bg-parchment ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    </div>
  );
}
