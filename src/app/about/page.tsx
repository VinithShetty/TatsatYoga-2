import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site-config";
import { FinalCta } from "@/components/FinalCta";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "About Mohini Rai",
  description:
    "Mohini Rai is a 300-hour certified yoga teacher trained at Vinyasa Yogashram, Rishikesh â€” teaching Hatha, Vinyasa, Yin, breathwork and meditation online, beginner-friendly.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18">
        <Container className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              About {siteConfig.teacherName}
            </p>
            <h1 className="text-[2.25rem] font-semibold leading-[1.1] text-ink sm:text-[3rem]">
              I don&rsquo;t think I chose yoga. I think yoga chose me.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              My journey began not as a carefully planned destination, but as a
              quiet unfolding. What started as a practice slowly became a way of
              understanding myself â€” my body, my breath, my thoughts, and the
              spaces in between.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              I&rsquo;m a 300-hour certified yoga teacher, trained at Vinyasa
              Yogashram, Rishikesh, with several years of experience teaching yoga â€”
              both offline and, for the students I work with now, entirely online.
            </p>
          </div>
          <Photo src="/images/meditation-temple-doorway.webp" alt="A yoga teacher seated in meditation before a carved stone temple doorway" eager />
        </Container>
      </section>

      <section className="border-y border-deep/10 bg-beige py-16 sm:py-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-[2.125rem] font-semibold text-ink sm:text-[2.75rem]">
            A teaching philosophy, simply put
          </h2>
          <blockquote className="mt-6 font-display text-xl italic leading-snug text-ink">
            &ldquo;Yoga is not about perfect postures; it is about coming home to
            yourself.&rdquo;
          </blockquote>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
            It is a practice of listening rather than forcing, building strength
            while learning softness, and creating a deeper connection between
            body and mind. Classes are beginner-friendly and thoughtfully adapted
            to individual needs â€” every body has its own rhythm, and every
            journey its own pace.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-[2.125rem] font-semibold text-ink sm:text-[2.75rem]">
            My teaching draws from
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Hatha Yoga",
              "Vinyasa Yoga",
              "Yin Yoga",
              "Breathwork",
              "Meditation",
              "Strength & mobility",
            ].map((item) => (
              <li
                key={item}
                className="rounded-md border border-deep/15 bg-chalk px-4 py-3 text-sm text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* On the mat */}
      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-6 sm:grid-cols-2">
          <Photo
            src="/images/yoga-lakeside-twist.webp"
            alt="Mohini Rai in a seated twist on a mat beside a still lake"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
          <Photo
            src="/images/reverse-prayer-garden.webp"
            alt="Mohini Rai kneeling on a block-printed mat in a flowering garden, hands in reverse prayer"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </Container>
      </section>

      <FinalCta heading="Come meet me on the mat." />
    </>
  );
}
