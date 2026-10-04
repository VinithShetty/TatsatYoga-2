import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FinalCta } from "@/components/FinalCta";
import { Photo } from "@/components/Photo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Mohini Rai",
  description:
    "Mohini Rai is a 300-hour certified yoga teacher trained at Vinyasa Yogashram, Rishikesh — teaching Hatha, Vinyasa, Yin, breathwork and meditation online, beginner-friendly.",
};

const credentials = [
  { value: "300 hr", label: "Certified teacher training" },
  { value: "Rishikesh", label: "Trained at Vinyasa Yogashram" },
  { value: "Live", label: "Online classes, anywhere" },
];

const influences = [
  "Hatha Yoga",
  "Vinyasa Yoga",
  "Yin Yoga",
  "Breathwork",
  "Meditation",
  "Strength & mobility",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-parchment py-10 sm:py-14">
        <Container className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div className="rise">
            <Eyebrow>About {siteConfig.teacherName}</Eyebrow>
            <h1 className="text-[2.25rem] font-semibold leading-[1.06] text-ink sm:text-[3rem]">
              I don&rsquo;t think I chose yoga.{" "}
              <span className="script mt-1 block text-[2.75rem] leading-[1.15] text-primary sm:text-[3.75rem]">
                I think yoga chose me.
              </span>
            </h1>
            <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-soft">
              My journey began not as a carefully planned destination, but as a quiet
              unfolding. What started as a practice slowly became a way of
              understanding myself — my body, my breath, my thoughts, and the spaces
              in between.
            </p>
            <p className="mt-3 text-[16.5px] leading-[1.75] text-ink-soft">
              I&rsquo;m a 300-hour certified yoga teacher, trained at Vinyasa Yogashram,
              Rishikesh, with several years of experience teaching yoga — both offline
              and, for the students I work with now, entirely online.
            </p>
            <dl className="mt-7 grid grid-cols-3 divide-x divide-ink/10 border-y border-ink/10">
              {credentials.map((c) => (
                <div key={c.value} className="px-3 py-4 first:pl-0">
                  <dt className="sr-only">{c.label}</dt>
                  <dd className="font-display text-[1.375rem] font-semibold leading-none text-primary sm:text-[1.625rem]">
                    {c.value}
                  </dd>
                  <dd className="mt-1.5 text-[12.5px] leading-snug text-ink-soft sm:text-[13px]">
                    {c.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Photo
            src="/images/meditation-temple-doorway.webp"
            alt="Mohini Rai seated in meditation before a carved stone temple doorway"
            aspect="aspect-[4/3] md:aspect-[4/5] lg:aspect-[1/1]"
            position="object-[50%_62%]"
            sizes="(min-width: 768px) 40vw, 100vw"
            eager
          />
        </Container>
      </section>

      {/* Philosophy + what the teaching draws from */}
      <section className="bg-beige py-14 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div className="reveal">
            <Eyebrow tone="deep">How I teach</Eyebrow>
            <h2 className="text-[2.125rem] font-semibold leading-[1.08] text-ink sm:text-[2.75rem]">
              A teaching philosophy, simply put
            </h2>
            <blockquote className="mt-5 border-l-2 border-primary pl-5 font-display text-[1.5rem] font-medium italic leading-snug text-ink">
              &ldquo;Yoga is not about perfect postures; it is about coming home to
              yourself.&rdquo;
            </blockquote>
            <p className="mt-5 text-[16px] leading-[1.75] text-ink">
              It is a practice of listening rather than forcing, building strength while
              learning softness, and creating a deeper connection between body and mind.
              Classes are beginner-friendly and thoughtfully adapted to individual needs —
              every body has its own rhythm, and every journey its own pace.
            </p>
          </div>
          <div className="reveal md:pt-9">
            <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-deep">
              My teaching draws from
            </h3>
            <ul className="stagger mt-4 grid grid-cols-2 gap-2.5">
              {influences.map((item) => (
                <li
                  key={item}
                  className="rounded-sm bg-chalk px-4 py-3 text-[14.5px] font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* On the mat */}
      <section className="py-14 sm:py-20">
        <Container>
          <Eyebrow className="reveal text-center">On the mat</Eyebrow>
          <div className="mt-2 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <Photo
              src="/images/hero-lakeside-wide.webp"
              alt="Mohini Rai in a seated twist on a mat beside a still lake"
              aspect="aspect-[3/2]"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <Photo
              src="/images/banner-garden-wide.webp"
              alt="Mohini Rai kneeling on a block-printed mat in a flowering garden, hands in reverse prayer"
              aspect="aspect-[3/2]"
              position="object-[50%_35%]"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <FinalCta heading="Come meet me on the mat." />
    </>
  );
}
