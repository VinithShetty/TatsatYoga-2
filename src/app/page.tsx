import Image, { getImageProps } from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
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

/**
 * One <picture> for the hero: the wide crop on desktop, the tall crop on
 * phones. Unlike two separately hidden images, only one file is downloaded.
 */
function HeroPicture() {
  const alt = "Mohini Rai in a seated twist on a yoga mat beside a still lake, misty hills behind";
  const { props: wide } = getImageProps({
    alt,
    src: "/images/hero-lakeside-wide.webp",
    width: 1440,
    height: 860,
    sizes: "66vw",
  });
  const { props: tall } = getImageProps({
    alt,
    src: "/images/hero-lakeside-tall.webp",
    width: 900,
    height: 1124,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
  });
  const { srcSet: tallSrcSet, ...img } = tall;

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={wide.srcSet ?? wide.src} sizes="66vw" />
      <source srcSet={tallSrcSet ?? tall.src} sizes="100vw" />
      <img
        {...img}
        alt={alt}
        className="settle absolute inset-0 h-full w-full object-cover object-bottom md:object-[45%_50%]"
      />
    </picture>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — photo on the right (desktop) or below the copy (phone) */}
      <section className="relative isolate overflow-hidden bg-parchment">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-[5] hidden bg-gradient-to-r from-parchment from-34% via-parchment/70 via-48% to-transparent to-62% md:block"
        />

        <Container className="relative flex flex-col pt-9 pb-6 md:min-h-[600px] md:justify-center md:py-16 lg:min-h-[640px]">
          <div className="rise rise-after-title max-w-[34rem]">
            <Eyebrow>Online yoga with {siteConfig.teacherName}</Eyebrow>
            <h1 className="hero-title text-[2.5rem] font-semibold leading-[1] text-ink sm:text-[3.25rem] lg:text-[4rem]">
              <span>Yoga</span> <span>that</span> <span>meets</span> <span>you</span>{" "}
              <span className="script shimmer mt-1 block text-[3.4rem] leading-[1.1] text-primary sm:text-[4.25rem] lg:text-[5.25rem]">
                where you are.
              </span>
            </h1>
            <p className="mt-4 font-display text-[1.375rem] font-medium italic leading-snug text-ink sm:text-[1.625rem]">
              Move better. Feel stronger. Breathe deeper.
            </p>
            <p className="mt-3 max-w-md text-[16px] leading-[1.7] text-ink-soft">
              Beginner-friendly Hatha, Vinyasa &amp; Yin Yoga classes designed to build
              strength, flexibility, mobility and a deeper connection with your body.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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

        {/* Phone: block below the copy, its sky fading into the background.
            Desktop: pinned to the right two-thirds, behind the text veil. */}
        <div className="relative -z-10 -mt-20 aspect-[1/1] overflow-hidden md:absolute md:inset-y-0 md:right-0 md:mt-0 md:aspect-auto md:w-[66%]">
          <HeroPicture />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-parchment via-parchment/30 via-20% to-transparent to-40% md:hidden"
          />
        </div>
      </section>

      {/* More than just a workout — sage band, centred */}
      <section className="bg-beige py-14 sm:py-20">
        <Container className="max-w-4xl text-center">
          <div className="reveal">
            <Eyebrow tone="deep">The practice</Eyebrow>
            <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-ink sm:text-[3.25rem]">
              More than just a workout.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-display text-[1.3rem] font-medium italic leading-[1.5] text-ink sm:text-[1.45rem]">
              Yoga is not about forcing your body into a shape. It is about learning to
              understand, move and connect with it.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-[16px] leading-[1.75] text-ink">
              Classes combine mindful movement, breathwork and awareness to support a
              stronger, healthier and more balanced you.
            </p>
          </div>

          <h3 className="mt-10 font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-deep">
            What the practice builds
          </h3>
          <ul className="stagger mt-4 flex flex-wrap justify-center gap-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-sm bg-chalk/80 px-3.5 py-2 text-[14px] font-medium text-ink"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Your practice, your pace — script-titled story block beside a portrait */}
      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <Photo
            src="/images/meditation-temple-doorway.webp"
            alt="Mohini Rai seated in meditation before a carved stone temple doorway"
            aspect="aspect-[4/3] md:aspect-[4/5] lg:aspect-[1/1]"
            position="object-[50%_62%]"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
          <div className="reveal">
            <Eyebrow>For everyone</Eyebrow>
            <h2 className="text-[2.25rem] font-semibold leading-[1.05] text-ink sm:text-[3rem]">
              Your practice. Your pace.{" "}
              <span className="script mt-1 block text-[3.25rem] leading-[1.1] text-primary sm:text-[4.25rem]">
                Your journey.
              </span>
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-soft">
              Whether you&rsquo;re a beginner, looking to build strength and flexibility,
              or simply seeking a little more balance in your everyday life &mdash;
              there&rsquo;s a place for you here.
            </p>
            <p className="mt-3 text-[16.5px] leading-[1.75] text-ink-soft">
              Every class is taught live by {siteConfig.teacherName}, a 300-hour certified
              teacher trained at Vinyasa Yogashram, Rishikesh.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
      <section className="pb-14 sm:pb-20">
        <Container>
          <div className="rounded-lg bg-beige px-4 py-10 sm:px-10 sm:py-14">
            <div className="reveal text-center">
              <Eyebrow tone="deep">Who it&rsquo;s for</Eyebrow>
              <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
                Yoga is for you if&hellip;
              </h2>
            </div>
            <ol className="stagger mt-8 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {yogaIsForYouIf.map((line, i) => (
                <li
                  key={line}
                  className="card-lift flex items-start gap-3.5 rounded-md bg-chalk px-4 py-3.5 text-[15.5px] leading-[1.55] text-ink sm:gap-4 sm:p-5"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[1.5rem] font-semibold leading-none text-primary sm:text-[1.75rem]"
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
      <section className="border-t border-ink/10 bg-parchment py-14 sm:py-20">
        <Container>
          <div className="reveal text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
              In their words
            </h2>
          </div>
          <div className="reveal mt-8 sm:mt-10">
            <Testimonials video={testimonials.video} written={testimonials.written} />
          </div>
        </Container>
      </section>

      {/* Start with a free trial — dark photo banner */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <Image
          src="/images/banner-garden-wide.webp"
          alt=""
          fill
          sizes="100vw"
          className="parallax -z-10 object-cover object-[50%_30%]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep/80" />
        <Container className="reveal max-w-3xl text-center">
          <Eyebrow tone="light">Start with a free trial</Eyebrow>
          <h2 className="text-[2.25rem] font-semibold leading-[1.05] text-chalk sm:text-[3.5rem]">
            Your first class{" "}
            <span className="script mt-1 block text-[3.5rem] leading-[1.1] sm:text-[5rem]">
              is free.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16.5px] leading-[1.75] text-chalk">
            Not a sales call — a real, full-length session. Try the teaching style, ask
            whatever you want to ask, and decide afterwards whether it fits.
          </p>
          <ul className="mx-auto mt-6 grid max-w-md gap-2.5 text-left">
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
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
