import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Photo } from "@/components/Photo";
import { Testimonials } from "@/components/Testimonials";
import {
  benefits,
  siteConfig,
  testimonials,
  whatsappHref,
  yogaIsForYouIf,
} from "@/lib/site-config";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-5 w-5 flex-none text-primary"
      aria-hidden="true"
    >
      <path d="m9 12 2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function TickIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 h-4.5 w-4.5 flex-none text-beige"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L19 7" />
    </svg>
  );
}

function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`mb-4 text-[11px] font-medium uppercase tracking-[0.22em] ${
        onDark ? "text-beige" : "text-gold"
      }`}
    >
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-18">
        <svg
          className="breathe pointer-events-none absolute -right-32 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 text-primary/[0.08] lg:block"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="480 100"
            transform="rotate(125 100 100)"
          />
        </svg>

        <Container className="relative grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
              Online yoga with {siteConfig.teacherName}
            </p>
            <h1 className="hero-title text-[2.75rem] font-bold leading-[1.04] tracking-[-0.025em] text-ink sm:text-[3.5rem] lg:text-[4rem]">
              <span>Yoga</span> <span>that</span> <span>meets</span> <span>you</span>{" "}
              <span className="shimmer">where you are.</span>
            </h1>
            <p className="mt-6 font-display text-[1.375rem] font-light italic leading-snug text-ink-soft sm:text-[1.625rem]">
              Move better. Feel stronger. Breathe deeper.
            </p>
            <p className="mt-5 max-w-md text-[17px] leading-[1.75] text-ink-soft">
              Beginner-friendly Hatha, Vinyasa &amp; Yin Yoga classes designed to build
              strength, flexibility, mobility and a deeper connection with your body.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                href="/classes"
                variant="primary"
                ariaLabel="Book your free trial — view class details"
              >
                Book Your Free Trial
              </Button>
              <Button
                href={whatsappHref()}
                variant="outline"
                ariaLabel="Chat on WhatsApp about classes"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          <Photo
            src="/images/yoga-lakeside-twist.webp"
            alt="A yoga practitioner in a seated twist on a mat beside a still lake, misty hills behind"
            eager
          />
        </Container>
      </section>

      {/* More than just a workout + what the practice builds */}
      <section className="border-y border-deep/10 bg-beige py-16 sm:py-20">
        <Container className="reveal grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <Eyebrow>The practice</Eyebrow>
            <h2 className="text-[2.125rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.75rem]">
              More than just a workout.
            </h2>
            <p className="mt-6 font-display text-[1.25rem] font-light italic leading-[1.5] text-ink">
              Yoga is not about forcing your body into a shape. It is about learning to
              understand, move and connect with it.
            </p>
            <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-soft">
              Classes combine mindful movement, breathwork and awareness to support a
              stronger, healthier and more balanced you.
            </p>
          </div>
          <div className="md:border-l md:border-deep/10 md:pl-16">
            <Eyebrow>What the practice builds</Eyebrow>
            <ul className="flex flex-wrap gap-2.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-full border border-deep/10 bg-chalk px-4 py-2 text-[13.5px] text-ink-soft"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Your practice, your pace + yoga is for you if */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div className="reveal">
            <Eyebrow>For everyone</Eyebrow>
            <h2 className="text-[2.125rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.75rem]">
              Your practice. Your pace. Your journey.
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.75] text-ink-soft">
              Whether you&rsquo;re a beginner, looking to build strength and flexibility,
              or simply seeking a little more balance in your everyday life &mdash;
              there&rsquo;s a place for you here.
            </p>
            <Photo
              src="/images/meditation-temple-doorway.webp"
              alt="Mohini Rai seated in meditation before a carved stone temple doorway"
              className="mt-10 hidden md:block"
            />
          </div>

          <div className="reveal rounded-lg border border-deep/10 bg-chalk p-7 sm:p-10">
            <h3 className="font-display text-[1.75rem] font-medium leading-tight text-ink sm:text-[2rem]">
              Yoga is for you if&hellip;
            </h3>
            <ul className="mt-7 divide-y divide-deep/10">
              {yogaIsForYouIf.map((line) => (
                <li
                  key={line}
                  className="flex gap-3.5 py-3.5 text-[16px] leading-relaxed text-ink"
                >
                  <CheckIcon />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-y border-deep/10 bg-beige py-16 sm:py-20">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="text-[2.125rem] font-medium tracking-[-0.01em] text-ink sm:text-[2.75rem]">
              In their words
            </h2>
          </div>
          <div className="reveal mt-10">
            <Testimonials video={testimonials.video} written={testimonials.written} />
          </div>
        </Container>
      </section>

      {/* Start with a free trial */}
      <section className="bg-deep py-16 sm:py-20">
        <Container className="grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div className="reveal">
            <Eyebrow onDark>Start with a free trial</Eyebrow>
            <h2 className="font-display text-[2rem] font-medium italic leading-tight text-stone sm:text-[2.75rem]">
              Your first class is free
            </h2>
            <p className="mt-5 max-w-lg text-[16.5px] leading-[1.75] text-stone/75">
              Not a sales call — a real, full-length session. Try the teaching style,
              ask whatever you want to ask, and decide afterwards whether it fits.
            </p>
            <ul className="mt-7 grid gap-3">
              <li className="flex gap-3 text-[15px] text-stone/90">
                <TickIcon />
                No card details, no commitment
              </li>
              <li className="flex gap-3 text-[15px] text-stone/90">
                <TickIcon />
                Available in every format — group, 1:1 and senior citizens
              </li>
              <li className="flex gap-3 text-[15px] text-stone/90">
                <TickIcon />
                Beginners genuinely welcome — most students start here
              </li>
            </ul>
          </div>
          <div className="reveal flex flex-col gap-3">
            <Button
              href="/classes"
              variant="cream"
              className="justify-center !py-4 text-base uppercase tracking-[0.06em]"
              ariaLabel="Book your free trial class"
            >
              Book Your Free Trial
            </Button>
            <Button
              href={whatsappHref()}
              variant="outlineLight"
              className="justify-center"
              ariaLabel="Ask about the free trial on WhatsApp"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
