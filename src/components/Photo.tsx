import Image from "next/image";

/**
 * Photo in the site's rounded frame (4:5 portrait unless `aspect` says otherwise).
 * Off-screen photos ease out of a gentle zoom as they scroll in (`.photo-in`).
 * `eager` is for above-the-fold images: it sets fetchPriority="high" rather
 * than `preload`, because on mobile the hero photo sits below the headline and
 * isn't reliably the LCP element — the case the Next 16 docs warn against.
 */
export function Photo({
  src,
  alt,
  className = "",
  eager = false,
  aspect = "aspect-[4/5]",
  position = "object-center",
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  aspect?: string;
  position?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-parchment ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${position} ${eager ? "settle" : "photo-in"}`}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    </div>
  );
}
