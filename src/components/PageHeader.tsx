import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";

/** The shared opening band for inner pages: eyebrow, title (with an optional script line) and lead. */
export function PageHeader({
  eyebrow,
  title,
  script,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  script?: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 bg-parchment">
      <Container className="rise py-10 sm:py-14">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-[2.5rem] font-semibold leading-[1.02] text-ink sm:text-[3.5rem]">
          {title}
          {script && " "}
          {script && (
            <span className="script block text-[3rem] leading-[1.15] text-primary sm:text-[4.25rem]">
              {script}
            </span>
          )}
        </h1>
        {lead && (
          <p className="mt-4 max-w-2xl text-[17px] leading-[1.7] text-ink-soft">{lead}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
