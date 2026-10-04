import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { classFormats, whatsappHref, yogaForms } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Online Yoga Classes & Pricing",
  description:
    "Online group yoga, 1:1 yoga and senior citizens group classes — Hatha, Vinyasa, Yin, pranayama and meditation. Monthly pricing, and every format starts with a free trial.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="pt-12 pb-8 sm:pt-16">
        <Container className="max-w-2xl">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Class Details
          </p>
          <h1 className="text-[3.25rem] font-semibold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[4.25rem]">
            Sessions &amp; pricing
          </h1>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink-soft">
            Three kinds of live online session, priced monthly. No joining fee, no
            lock-in — and every one starts with a free trial class.
          </p>
        </Container>
      </section>

      {/* Types of sessions, with pricing */}
      <section id="pricing" className="scroll-mt-28 pb-16 sm:pb-20">
        <Container className="grid gap-7 lg:grid-cols-3">
          {classFormats.map((format) => (
            <div
              key={format.slug}
              className="card-lift flex flex-col rounded-lg border border-deep/10 bg-chalk p-7"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                {format.duration} session
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-ink">
                {format.name}
              </h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {format.description}
              </p>

              <dl className="mt-6 divide-y divide-deep/10 border-y border-deep/10">
                {format.pricing.map((tier) => (
                  <div key={tier.schedule} className="flex items-baseline justify-between py-3.5">
                    <dt className="text-sm text-ink-soft">{tier.schedule}</dt>
                    <dd className="font-display text-xl font-medium text-ink">{tier.price}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-col gap-3">
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
                  className="arrow-parent text-center text-sm font-medium text-primary hover:text-primary-hover"
                >
                  What a session looks like <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </Container>
        <Container>
          <p className="mt-6 text-center text-sm text-ink-faint">
            All prices per month. Every plan begins with one free trial session.
          </p>
        </Container>
      </section>

      {/* Yoga forms practised */}
      <section className="border-y border-deep/10 bg-beige py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              In every session
            </p>
            <h2 className="text-[2.125rem] font-medium tracking-[-0.01em] text-ink sm:text-[2.5rem]">
              Yoga forms practised
            </h2>
          </div>

          <ul className="mt-10 divide-y divide-deep/10 border-y border-deep/10">
            {yogaForms.map((form) => (
              <li
                key={form.name}
                className="grid gap-3 py-6 md:grid-cols-[0.8fr_1.5fr_1fr] md:items-baseline md:gap-10"
              >
                <h3 className="font-display text-[1.375rem] font-medium text-ink">
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
