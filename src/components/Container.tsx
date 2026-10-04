import type { ReactNode } from "react";

/**
 * Centred page column. Pass a `max-w-*` class to narrow it; the default
 * `max-w-6xl` is dropped then, because two max-widths in one class list
 * resolve by stylesheet order, not by which was written last.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const width = /(^|\s)!?max-w-/.test(className) ? "" : "max-w-6xl";
  return <div className={`mx-auto ${width} px-5 sm:px-8 ${className}`}>{children}</div>;
}
