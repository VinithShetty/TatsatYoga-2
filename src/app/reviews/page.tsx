import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Student Reviews",
  description: `Reviews from students practising online with ${siteConfig.teacherName} at Tat Sat Yoga.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader eyebrow="Reviews" title="What students" script="say." />

      <section className="py-10 sm:py-14">
        <Container>
          <div className="reveal max-w-2xl">
            <div className="rounded-lg border border-ink/10 bg-chalk px-6 py-9 text-center sm:px-12 sm:py-11">
              <svg
                viewBox="0 0 200 200"
                className="mx-auto h-12 w-12 text-primary/30"
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

              <h2 className="mt-5 font-display text-[1.75rem] font-semibold text-ink sm:text-[2rem]">
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

              <div className="mt-7 flex flex-wrap justify-center gap-3">
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

          <p className="mt-5 text-center text-[13px] leading-relaxed text-ink-faint">
            Reviews will be student-submitted and approved before they appear, so
            everything on this page stays real.
          </p>
          </div>
        </Container>
      </section>

    </>
  );
}
