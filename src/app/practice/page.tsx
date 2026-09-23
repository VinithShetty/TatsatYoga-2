import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { styles } from "@/lib/site-config";
import { whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Practice — Hatha, Vinyasa, Yin, Breathwork & More",
  description:
    "Online Hatha, Vinyasa and Yin yoga, breathwork and meditation, strength and mobility work — one teacher's approach, adapted to beginners, seniors, sedentary lifestyles and women's health.",
};

export default function PracticePage() {
  return (
    <>
      <section className="pt-14 pb-14 sm:pt-20 sm:pb-16">
        <Container className="max-w-2xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            The Practice
          </p>
          <h1 className="text-[3.25rem] font-semibold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[4.25rem]">
            Yoga is not about perfect postures
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            It&rsquo;s about coming home to yourself — a practice of listening
            rather than forcing, building strength while learning softness, and
            creating a deeper connection between body and mind. Every class draws
            from the same well; which parts come forward depends on what you need
            that day.
          </p>
        </Container>
      </section>

      <nav aria-label="Jump to a style" className="border-y border-deep/10 bg-beige">
        <Container>
          <div className="flex flex-wrap gap-x-6 gap-y-3 py-4 text-sm">
            {styles.map((style) => (
              <a
                key={style.id}
                href={`#${style.id}`}
                className="text-ink-soft hover:text-primary"
              >
                {style.name}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="divide-y divide-deep/10">
            {styles.map((style) => (
              <div key={style.id} id={style.id} className="grid gap-6 py-10 scroll-mt-24 md:grid-cols-[1fr_2fr] md:gap-12">
                <h2 className="font-display text-2xl text-ink">{style.name}</h2>
                <div>
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {style.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {style.focus.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-deep/15 bg-chalk px-3 py-1 text-xs text-ink-soft"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-deep/10 bg-beige py-16 text-center sm:py-20">
        <Container className="max-w-lg">
          <h2 className="font-display text-[2.125rem] font-medium tracking-[-0.01em] text-ink sm:text-[2.75rem]">
            Not sure where you&rsquo;d start?
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            That&rsquo;s what the free trial is for — come as you are, and the
            session adapts to you, not the other way round.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button href="/classes" variant="primary">
              Book Your Free Trial
            </Button>
            <Button href={whatsappHref()} variant="outline">
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
