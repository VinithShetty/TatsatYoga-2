import Image from "next/image";

/**
 * The client's Tat Sat Yoga badge, background keyed out to transparency so it
 * sits on any of the site's grounds. Source: public/images/tat-sat-yoga-logo.webp.
 */
export function Logo({
  className = "",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src="/images/tat-sat-yoga-logo.webp"
      alt="Tat Sat Yoga — Move. Breathe. Be."
      width={640}
      height={640}
      className={`w-auto ${className}`}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}
