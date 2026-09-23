import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "cream" | "outlineLight";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-stone hover:bg-primary-hover hover:shadow-[0_10px_24px_rgba(51,64,31,0.28)]",
  outline:
    "bg-transparent text-ink border border-deep/25 hover:bg-deep hover:text-stone hover:shadow-[0_10px_24px_rgba(51,64,31,0.18)]",
  cream:
    "bg-stone text-deep hover:bg-beige hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
  outlineLight:
    "bg-transparent text-stone border border-beige/40 hover:bg-beige/15 hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ariaLabel,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** Use when the same visible label appears more than once on a page. */
  ariaLabel?: string;
}) {
  const classes = `lift inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium tracking-[0.01em] active:translate-y-0 active:scale-[0.98] ${variantClasses[variant]} ${className}`;

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
