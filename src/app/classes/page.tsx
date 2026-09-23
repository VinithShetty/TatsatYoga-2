import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { classFormats, styles, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Online Yoga Classes",
  description:
    "Online 1:1 yoga, live group classes and senior chair yoga — Hatha, Vinyasa, Yin, breathwork and meditation. Every format starts with one free trial session.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="pt-12 pb-8 sm:pt-16">
        <Container className="max-w-2xl">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Class Info
          </p>
          <h1 className="text-[3.25rem] font-semibold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[4.25rem]">
            Three ways to practise
          </h1>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink-soft">
            Personal training online, live group sessions, or a gentle chair-based
            practice for seniors. Every format draws on the same teaching — and every
            one starts with a free first session.
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
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {format.description}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5 border-t border-deep/10 pt-5">
                {format.whoFor.slice(0, 3).map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-[14px] leading-relaxed text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-ink">
                From{" "}
                <span className="font-medium">{format.pricing[1].price}</span>
              </p>

              <div className="mt-5 flex flex-col gap-3">
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
                  Full details <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* What you'll practise */}
      <section className="border-y border-deep/10 bg-beige py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 border-b border-deep/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                What You&rsquo;ll Practise
              </p>
              <h2 className="text-[2.125rem] font-medium tracking-[-0.01em] text-ink sm:text-[2.5rem]">
                One teaching, many doors in
              </h2>
              <p className="mt-4 text-[16px] leading-[1.75] text-ink-soft">
                Sessions draw from all of these rather than locking you into a single
                style. Which parts come forward depends on your body and your goals.
              </p>
            </div>
            <Link
              href="/practice"
              className="arrow-parent whitespace-nowrap text-sm font-medium text-primary hover:text-primary-hover"
            >
              Read more on the practice <span className="arrow">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {styles.map((style) => (
              <Link
                key={style.id}
                href={`/practice#${style.id}`}
                className="border-t border-deep/10 pt-5"
              >
                <h3 className="font-display text-[17px] font-medium text-ink">
                  {style.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {style.description}
                </p>
                <p className="mt-3 text-[12.5px] text-ink-faint">
                  {style.focus.slice(0, 3).join(" · ")}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Looking for prices?
            </h2>
            <p className="mt-2 text-[15px] text-ink-soft">
              Monthly plans for every format, from ₹1,000.
            </p>
          </div>
          <Button href="/pricing" variant="outline">
            See Pricing
          </Button>
        </Container>
      </section>

      <FinalCta heading="Start with a free class." />
    </>
  );
}
