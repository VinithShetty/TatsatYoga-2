import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { styles, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Practice — Hatha, Vinyasa, Yin, Breathwork & More",
  description:
    "Online Hatha, Vinyasa and Yin yoga, breathwork and meditation, strength and mobility work — one teacher's approach, adapted to beginners, seniors, sedentary lifestyles and women's health.",
};

export default function PracticePage() {
  return (
    <>
      <PageHeader
        eyebrow="The practice"
        title="Yoga is not about"
        script="perfect postures."
        lead="It’s about coming home to yourself — listening rather than forcing, building strength while learning softness. Every class draws from the same well; which parts come forward depends on what you need that day."
      >
        <nav aria-label="Jump to a style" className="mt-6 flex flex-wrap gap-2">
          {styles.map((style) => (
            <a
              key={style.id}
              href={`#${style.id}`}
              className="lift rounded-sm border border-ink/15 bg-chalk px-3.5 py-2 text-[13.5px] font-medium text-ink hover:border-primary hover:text-primary"
            >
              {style.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      <section className="py-10 sm:py-14">
        <Container className="stagger grid gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {styles.map((style) => (
            <article
              key={style.id}
              id={style.id}
              className="card-lift scroll-mt-24 rounded-lg border border-ink/10 bg-chalk p-6 sm:p-7"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">{style.name}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{style.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {style.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-sm bg-beige px-2.5 py-1 text-[12.5px] font-medium text-deep"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-beige py-12 text-center sm:py-16">
        <Container className="reveal max-w-lg">
          <h2 className="text-[2.125rem] font-semibold leading-[1.08] text-ink sm:text-[2.75rem]">
            Not sure where you&rsquo;d start?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15.5px] leading-relaxed text-ink">
            That&rsquo;s what the free trial is for — come as you are, and the session
            adapts to you, not the other way round.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
