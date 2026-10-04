import type { ReactNode } from "react";

/**
 * Full-width page column with side gutters of 20 / 32 / 48px (phone / tablet
 * / desktop) — never more than 50px. Header and footer use the same gutters.
 *
 * Passing a `max-w-*` class makes it a narrow, centred column instead; that's
 * for centred text compositions (CTA bands), where long lines would be hard
 * to read.
 */
export const gutters = "px-5 sm:px-8 lg:px-12";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full ${gutters} ${className}`}>{children}</div>;
}
