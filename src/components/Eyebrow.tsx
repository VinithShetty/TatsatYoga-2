import type { ReactNode } from "react";

/** Small bold sans label above a heading. `tone` picks a colour that passes AA on the ground it sits on. */
export function Eyebrow({
  children,
  tone = "green",
  className = "",
}: {
  children: ReactNode;
  tone?: "green" | "deep" | "light";
  className?: string;
}) {
  const color = { green: "text-primary-hover", deep: "text-deep", light: "text-chalk" }[tone];
  return (
    <p className={`mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] ${color} ${className}`}>
      {children}
    </p>
  );
}
