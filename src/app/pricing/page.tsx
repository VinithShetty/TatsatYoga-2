import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { classFormats, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Monthly pricing for online 1:1 yoga, group classes and senior chair yoga. Every plan starts with one free trial session — no payment details needed.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-12 pb-8 sm:pt-16">
        <Container className="max-w-2xl">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Pricing
          </p>
          <h1 className="text-[3.25rem] font-semibold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[4.25rem]">
            Simple monthly pricing
          </h1>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink-soft">
            No joining fee, no annual lock-in, no card details to start. Pick the
            format and the number of days that fit your week — and try it free first.
          </p>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
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
                  <div
                    key={tier.schedule}
                    className="flex items-baseline justify-between py-3.5"
                  >
                    <dt className="text-sm text-ink-soft">{tier.schedule}</dt>
                    <dd className="font-display text-xl font-medium text-ink">
                      {tier.price}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  href={whatsappHref(
                    `Hi! I'd like to book a free trial for ${format.name}.`,
                  )}
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
      </section>

      <section className="border-y border-deep/10 bg-beige py-16 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-medium text-ink">
              What&rsquo;s included
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Live sessions on video, never pre-recorded. Breathwork and meditation
              are woven into every format rather than charged as an add-on.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">
              Changing or pausing
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Students move between formats and day counts as schedules change — just
              say so on WhatsApp before the next month starts.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">
              Still deciding?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              The free trial exists precisely for this. Take a full session first,
              then pick a plan — or don&rsquo;t.
            </p>
          </div>
        </Container>
      </section>

      <FinalCta heading="Try a full class, free." />
    </>
  );
}
