import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Student Reviews",
  description: `Reviews from students practising online with ${siteConfig.teacherName} at Tat Sat Yoga.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-12 pb-8 sm:pt-16">
        <Container className="max-w-2xl">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Reviews
          </p>
          <h1 className="text-[3.25rem] font-semibold leading-[1.0] text-ink sm:text-[4.25rem]">
            What students say
          </h1>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="max-w-2xl">
          <div className="rounded-lg border border-deep/10 bg-chalk p-10 text-center sm:p-14">
            <svg
              viewBox="0 0 200 200"
              className="mx-auto h-16 w-16 text-primary/25"
              aria-hidden="true"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray="410 100"
                transform="rotate(200 100 100)"
              />
              <circle cx="100" cy="100" r="15" fill="currentColor" />
            </svg>

            <h2 className="mt-7 font-display text-[1.75rem] font-semibold text-ink sm:text-[2rem]">
              No reviews here yet
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-[1.75] text-ink-soft">
              {siteConfig.teacherFirstName} is taking on her first students through
              this site, so this page is genuinely empty rather than padded out. Real
              reviews will appear here as students write them.
            </p>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-[1.75] text-ink-soft">
              In the meantime, the free first class means you don&rsquo;t have to take
              anyone else&rsquo;s word for it.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button
                href="/classes"
                variant="primary"
                ariaLabel="Book a free trial and judge for yourself"
              >
                Try a Free Class
              </Button>
              <Button
                href={whatsappHref(
                  "Hi! I've practised with you and I'd like to leave a review.",
                )}
                variant="outline"
                ariaLabel="Send a review over WhatsApp"
              >
                Already a student? Leave a review
              </Button>
            </div>
          </div>

          <p className="mt-8 text-center text-[13px] leading-relaxed text-ink-faint">
            Reviews will be student-submitted and approved before they appear, so
            everything on this page stays real.
          </p>
        </Container>
      </section>

      <FinalCta heading="Judge it for yourself, free." />
    </>
  );
}
