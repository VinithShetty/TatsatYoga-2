import Image from "next/image";
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

/** Small bold sans label above a heading, as in the reference layout. */
function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] ${
        onDark ? "text-chalk" : "text-primary-hover"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed photo, text over the open lake / sky */}
      <section className="relative isolate overflow-hidden bg-parchment">
        {/* Desktop: wide crop, pinned to the right so the pose stays clear of the text */}
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[66%] md:block">
          <Image
            src="/images/hero-lakeside-wide.webp"
            alt="Mohini Rai in a seated twist on a yoga mat beside a still lake, misty hills behind"
            fill
            sizes="66vw"
            className="object-cover object-[45%_50%]"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-parchment from-34% via-parchment/70 via-48% to-transparent to-62% md:block"
        />

        <Container className="relative flex flex-col pt-10 pb-8 md:min-h-[640px] md:justify-center md:py-20 lg:min-h-[700px]">
          <div className="max-w-[34rem]">
            <Eyebrow>Online yoga with {siteConfig.teacherName}</Eyebrow>
            <h1 className="hero-title text-[2.5rem] font-semibold leading-[1] text-ink sm:text-[3.25rem] lg:text-[4rem]">
              <span>Yoga</span> <span>that</span> <span>meets</span> <span>you</span>{" "}
              <span className="script shimmer mt-1 block text-[3.4rem] leading-[1.1] text-primary sm:text-[4.25rem] lg:text-[5.25rem]">
                where you are.
              </span>
            </h1>
            <p className="mt-5 font-display text-[1.375rem] font-medium italic leading-snug text-ink sm:text-[1.625rem]">
              Move better. Feel stronger. Breathe deeper.
            </p>
            <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-ink-soft">
              Beginner-friendly Hatha, Vinyasa &amp; Yin Yoga classes designed to build
              strength, flexibility, mobility and a deeper connection with your body.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
                className="bg-chalk"
                ariaLabel="Chat on WhatsApp about classes"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>

        {/* Mobile: tall crop below the copy; its sky fades into the background */}
        <div className="relative -z-10 -mt-28 aspect-[4/5] md:hidden">
          <Image
            src="/images/hero-lakeside-tall.webp"
            alt="Mohini Rai in a seated twist on a yoga mat beside a still lake, misty hills behind"
            fill
            sizes="100vw"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-parchment via-parchment/40 via-25% to-transparent to-45%"
          />
        </div>
      </section>

      {/* More than just a workout — sage band, centred */}
      <section className="bg-beige py-16 sm:py-24">
        <Container className="reveal !max-w-4xl text-center">
          <Eyebrow className="!text-deep">The practice</Eyebrow>
          <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-ink sm:text-[3.25rem]">
            More than just a workout.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-display text-[1.3rem] font-medium italic leading-[1.5] text-ink sm:text-[1.45rem]">
            Yoga is not about forcing your body into a shape. It is about learning to
            understand, move and connect with it.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] text-ink">
            Classes combine mindful movement, breathwork and awareness to support a
            stronger, healthier and more balanced you.
          </p>

          <p className="mt-12 font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-deep">
            What the practice builds
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-sm bg-chalk px-4 py-2.5 text-[14px] font-medium text-ink"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Your practice, your pace — script-titled story block beside a portrait */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Photo
            src="/images/meditation-temple-doorway.webp"
            alt="Mohini Rai seated in meditation before a carved stone temple doorway"
            className="reveal"
          />
          <div className="reveal">
            <Eyebrow>For everyone</Eyebrow>
            <h2 className="text-[2.25rem] font-semibold leading-[1.05] text-ink sm:text-[3rem]">
              Your practice. Your pace.
              <span className="script mt-1 block text-[3.25rem] leading-[1.1] text-primary sm:text-[4.25rem]">
                Your journey.
              </span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.8] text-ink-soft">
              Whether you&rsquo;re a beginner, looking to build strength and flexibility,
              or simply seeking a little more balance in your everyday life &mdash;
              there&rsquo;s a place for you here.
            </p>
            <p className="mt-4 text-[16.5px] leading-[1.8] text-ink-soft">
              Every class is taught live by {siteConfig.teacherName}, a 300-hour certified
              teacher trained at Vinyasa Yogashram, Rishikesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" variant="outline">
                Meet {siteConfig.teacherFirstName}
              </Button>
              <Button href="/classes" variant="primary" ariaLabel="See class details and pricing">
                See Classes
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Yoga is for you if… — rounded sage panel */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="reveal rounded-lg bg-beige px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center">
              <Eyebrow className="!text-deep">Who it&rsquo;s for</Eyebrow>
              <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
                Yoga is for you if&hellip;
              </h2>
            </div>
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {yogaIsForYouIf.map((line, i) => (
                <li
                  key={line}
                  className="card-lift flex gap-4 rounded-md bg-chalk p-5 text-[15.5px] leading-[1.6] text-ink sm:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[1.75rem] font-semibold leading-none text-primary"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-0.5">{line}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-ink/10 bg-parchment py-16 sm:py-24">
        <Container>
          <div className="reveal text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
              In their words
            </h2>
          </div>
          <div className="reveal mt-12">
            <Testimonials video={testimonials.video} written={testimonials.written} />
          </div>
        </Container>
      </section>

      {/* Start with a free trial — dark photo banner */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <Image
          src="/images/banner-garden-wide.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-[50%_30%]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep/80" />
        <Container className="reveal !max-w-3xl text-center">
          <Eyebrow onDark>Start with a free trial</Eyebrow>
          <h2 className="text-[2.25rem] font-semibold leading-[1.05] text-chalk sm:text-[3.5rem]">
            Your first class
            <span className="script mt-1 block text-[3.5rem] leading-[1.1] sm:text-[5rem]">
              is free.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-[1.75] text-chalk">
            Not a sales call — a real, full-length session. Try the teaching style, ask
            whatever you want to ask, and decide afterwards whether it fits.
          </p>
          <ul className="mx-auto mt-7 grid max-w-md gap-3 text-left">
            <li className="flex gap-3 text-[15px] text-chalk">
              <TickIcon />
              No card details, no commitment
            </li>
            <li className="flex gap-3 text-[15px] text-chalk">
              <TickIcon />
              Available in every format — group, 1:1 and senior citizens
            </li>
            <li className="flex gap-3 text-[15px] text-chalk">
              <TickIcon />
              Beginners genuinely welcome — most students start here
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button
              href="/classes"
              variant="cream"
              className="!px-9 !py-4 text-base"
              ariaLabel="Book your free trial class"
            >
              Book Your Free Trial
            </Button>
            <Button
              href={whatsappHref()}
              variant="outlineLight"
              className="!py-4"
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
