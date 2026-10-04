import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FinalCta } from "@/components/FinalCta";
import { PageHeader } from "@/components/PageHeader";
import { classFormats, whatsappHref, yogaForms } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Online Yoga Classes & Pricing",
  description:
    "Online group yoga, 1:1 yoga and senior citizens group classes — Hatha, Vinyasa, Yin, pranayama and meditation. Monthly pricing, and every format starts with a free trial.",
};

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Class details"
        title="Sessions &"
        script="pricing."
        lead="Three kinds of live online session, priced monthly. No joining fee, no lock-in — and every one starts with a free trial class."
      />

      {/* Types of sessions, with pricing */}
      <section id="pricing" className="scroll-mt-24 py-10 sm:py-14">
        <Container className="stagger grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {classFormats.map((format) => (
            <div
              key={format.slug}
              className="card-lift flex flex-col rounded-lg border border-ink/10 bg-chalk p-6 sm:p-7"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-hover">
                {format.duration} session
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                {format.name}
              </h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {format.description}
              </p>

              <dl className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                {format.pricing.map((tier) => (
                  <div key={tier.schedule} className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-ink-soft">{tier.schedule}</dt>
                    <dd className="font-display text-xl font-semibold text-ink">{tier.price}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex flex-col gap-3">
                <Button
                  href={whatsappHref(`Hi! I'd like to book a free trial for ${format.name}.`)}
                  variant="primary"
                  className="justify-center"
                  ariaLabel={`Book a free trial for ${format.name}`}
                >
                  Book Free Trial
                </Button>
                <Link
                  href={`/classes/${format.slug}`}
                  className="arrow-parent text-center text-sm font-semibold text-primary-hover hover:text-deep"
                >
                  What a session looks like <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </Container>
        <Container>
          <p className="mt-5 text-center text-sm text-ink-faint">
            All prices per month. Every plan begins with one free trial session.
          </p>
        </Container>
      </section>

      {/* Yoga forms practised */}
      <section className="bg-beige py-14 sm:py-20">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow tone="deep">In every session</Eyebrow>
            <h2 className="text-[2.125rem] font-semibold text-ink sm:text-[2.5rem]">
              Yoga forms practised
            </h2>
          </div>

          <ul className="stagger mt-7 divide-y divide-deep/15 border-y border-deep/15">
            {yogaForms.map((form) => (
              <li
                key={form.name}
                className="grid gap-2 py-5 md:grid-cols-[0.8fr_1.5fr_1fr] md:items-baseline md:gap-10"
              >
                <h3 className="font-display text-[1.375rem] font-semibold text-ink">
                  {form.name}
                </h3>
                <p className="text-[15.5px] leading-relaxed text-ink-soft">{form.description}</p>
                <p className="flex gap-2 text-[14px] leading-relaxed text-ink">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    className="mt-0.5 h-4 w-4 flex-none text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                  {form.frequency}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta heading="Start with a free class." />
    </>
  );
}
