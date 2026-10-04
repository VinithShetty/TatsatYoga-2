import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "cream" | "outlineLight";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-chalk border border-primary hover:bg-primary-hover hover:border-primary-hover hover:shadow-[0_10px_24px_rgba(44,69,53,0.28)]",
  outline:
    "bg-transparent text-ink border border-ink/70 hover:bg-ink hover:text-chalk",
  cream:
    "bg-chalk text-deep border border-chalk hover:bg-beige hover:border-beige hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
  outlineLight:
    "bg-transparent text-chalk border border-chalk/80 hover:bg-chalk hover:text-deep",
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
  const classes = `lift inline-flex items-center gap-2 rounded-sm px-7 py-3.5 font-display text-[15px] font-semibold uppercase tracking-[0.12em] active:translate-y-0 active:scale-[0.98] ${variantClasses[variant]} ${className}`;

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
