import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { Photo } from "@/components/Photo";
import {
  whatsappHref,
  benefits,
  styles,
  audiences,
  siteConfig,
  type Audience,
} from "@/lib/site-config";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
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

function LineIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5.5 w-5.5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const audienceIcons: Record<Audience["id"], ReactNode> = {
  // laptop — desk work
  desk: (
    <LineIcon>
      <rect x="4" y="5" width="16" height="10.5" rx="1.5" />
      <path d="M2.5 19h19" />
    </LineIcon>
  ),
  // crescent — cycles and phases
  "womens-health": (
    <LineIcon>
      <path d="M19.5 14.2A7.8 7.8 0 1 1 9.8 4.5a6.2 6.2 0 0 0 9.7 9.7Z" />
    </LineIcon>
  ),
  // dumbbell — strength training
  strength: (
    <LineIcon>
      <rect x="5" y="6.5" width="3" height="11" rx="1" />
      <rect x="16" y="6.5" width="3" height="11" rx="1" />
      <rect x="2" y="9" width="3" height="6" rx="1" />
      <rect x="19" y="9" width="3" height="6" rx="1" />
      <path d="M8 12h8" />
    </LineIcon>
  ),
  // chair — chair-supported practice
  seniors: (
    <LineIcon>
      <path d="M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
      <path d="M4 12a1.5 1.5 0 0 1 3 0v1h10v-1a1.5 1.5 0 0 1 3 0v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
      <path d="M6 17v3M18 17v3" />
    </LineIcon>
  ),
};

const offerings = [
  {
    href: "/classes/private",
    name: "Online 1:1 Yoga",
    blurb:
      "A full hour, just you and your teacher. Built around your goals, your body and the way you actually move.",
    meta: "From ₹3,000 / month",
  },
  {
    href: "/classes/group",
    name: "Online Group Yoga",
    blurb:
      "Live, interactive classes kept small enough that your form still gets corrected in real time.",
    meta: "From ₹1,500 / month",
  },
  {
    href: "/classes/chair-yoga-seniors",
    name: "Senior Chair Yoga",
    blurb:
      "Seated and standing-with-support movement for mobility, balance and strength. No floor work at all.",
    meta: "From ₹1,000 / month",
  },
  {
    href: "/practice#breathwork",
    name: "Breathwork & Meditation",
    blurb:
      "Pranayama and guided stillness, woven into every format rather than sold as a separate add-on.",
    meta: "Included in every plan",
  },
];

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

        <Container className="relative grid items-start gap-14 md:grid-cols-2">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
              {siteConfig.tagline}
            </p>
            <h1 className="hero-title text-[2.75rem] font-bold leading-[1.04] tracking-[-0.025em] text-ink sm:text-[3.5rem] lg:text-[4.25rem]">
              <span>Online</span> <span>yoga,</span> <span>taught</span>{" "}
              <span className="shimmer">personally.</span>
            </h1>
            <p className="mt-7 max-w-md text-[17px] leading-[1.75] text-ink-soft">
              Hatha, Vinyasa, Yin, breathwork and meditation with{" "}
              {siteConfig.teacherName}, a 300-hour certified teacher. Live sessions,
              never pre-recorded — and your first class is free.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                href="/classes"
                variant="primary"
                ariaLabel="Book your free trial — view class formats"
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
            <p className="mt-5 text-[13px] text-ink-faint">
              1:1 · Small groups · Senior chair yoga — all live, all online.
            </p>
          </div>
          <Photo src="/images/yoga-lakeside-twist.webp" alt="A yoga practitioner in a seated twist on a mat beside a still lake, misty hills behind" eager />
        </Container>
      </section>

      {/* Welcome + what the practice builds */}
      <section className="border-y border-deep/10 bg-beige py-16 sm:py-20">
        <Container className="reveal grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Welcome
            </p>
            <h2 className="text-[2.125rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.5rem]">
              Practice that meets you where you are
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-soft">
              Whether you are new to mindful movement or a long-time practitioner,
              whether you want to simply move or explore how your body works &ndash;
              you&rsquo;re welcome exactly as you are in our online yoga studio.
            </p>
          </div>
          <div className="md:border-l md:border-deep/10 md:pl-16">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              What the practice builds
            </p>
            <div className="flex flex-wrap gap-2.5">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-deep/10 bg-chalk px-4 py-2 text-[13.5px] text-ink-soft"
                >
                  {benefit}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed text-ink-faint">
              Through movement, breath and stillness — on the mat and beyond it.
            </p>
          </div>
        </Container>
      </section>

      {/* Who should practise yoga, and why */}
      <section className="border-b border-deep/10 py-16 sm:py-20">
        <Container>
          <div className="reveal grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                Who It&rsquo;s For
              </p>
              <h2 className="text-[2.125rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.75rem]">
                Who should practise yoga, and why
              </h2>
              <p className="mt-4 text-[16.5px] leading-[1.75] text-ink-soft">
                Most people don&rsquo;t come to yoga for yoga. They come because
                something has started to hurt, stiffen or slip. These are the four
                reasons we see most often.
              </p>
            </div>
            <Link
              href="/classes"
              className="arrow-parent whitespace-nowrap text-sm font-medium text-primary hover:text-primary-hover"
            >
              Find your format <span className="arrow">→</span>
            </Link>
          </div>

          <div className="reveal mt-10 grid gap-6 md:grid-cols-2">
            {audiences.map((a) => (
              <article
                key={a.id}
                className="card-lift flex flex-col rounded-lg border border-deep/10 bg-chalk p-7 sm:p-8"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                    {audienceIcons[a.id]}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {a.who}
                  </p>
                </div>

                <h3 className="mt-5 font-display text-[1.375rem] font-medium leading-snug text-ink sm:text-[1.5rem]">
                  {a.problem}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">{a.body}</p>

                <div className="mt-auto pt-6">
                  <div className="border-t border-deep/10 pt-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
                      Yoga helps with
                    </p>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {a.helps.map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-primary/[0.08] px-3 py-1 text-[13px] text-ink"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={a.href}
                    className="arrow-parent mt-5 inline-block text-sm font-medium text-primary hover:text-primary-hover"
                  >
                    {a.cta} <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Meet your teacher */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <Photo src="/images/meditation-temple-doorway.webp" alt="A yoga teacher seated in meditation before a carved stone temple doorway" className="reveal" />
          <div className="reveal">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Meet Your Teacher
            </p>
            <h2 className="text-[2.125rem] font-medium tracking-[-0.01em] text-ink sm:text-[2.5rem]">
              {siteConfig.teacherName}
            </h2>
            <p className="mt-4 font-display text-[1.375rem] font-light italic leading-snug text-ink-soft sm:text-[1.625rem]">
              &ldquo;I don&rsquo;t think I chose yoga. I think yoga chose me.&rdquo;
            </p>
            <p className="mt-6 text-[16px] leading-[1.75] text-ink-soft">
              My journey began not as a carefully planned destination, but as a quiet
              unfolding. What started as a practice slowly became a way of understanding
              myself — my body, my breath, my thoughts, and the spaces in between.
            </p>

            <ul className="mt-8 grid gap-4">
              <li className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                <CheckIcon />
                <span>
                  <span className="font-medium text-ink">300-hour certified</span> —
                  trained at Vinyasa Yogashram, Rishikesh
                </span>
              </li>
              <li className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                <CheckIcon />
                <span>
                  <span className="font-medium text-ink">Several years teaching</span> —
                  both in person and, now, entirely online
                </span>
              </li>
              <li className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                <CheckIcon />
                <span>
                  <span className="font-medium text-ink">One teacher, start to finish</span> —
                  every class taught by me, never outsourced
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/about"
                className="arrow-parent text-sm font-medium text-primary hover:text-primary-hover"
              >
                Read my full story{" "}
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* What we offer */}
      <section className="border-t border-deep/10 bg-beige py-16 sm:py-20">
        <Container>
          <div className="reveal mx-auto max-w-xl text-center">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              What We Offer
            </p>
            <h2 className="text-[2.125rem] font-medium tracking-[-0.01em] text-ink sm:text-[2.75rem]">
              Everything your practice needs, online
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-ink-soft">
              Live sessions on video — never pre-recorded — adapted to your body, your
              level and your schedule.
            </p>
          </div>
          <div className="reveal mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-lift arrow-parent flex flex-col rounded-lg border border-deep/10 bg-chalk p-7"
              >
                <h3 className="font-display text-xl font-normal text-ink">
                  {item.name}
                </h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  {item.blurb}
                </p>
                <p className="mt-5 text-sm font-medium text-primary">{item.meta}</p>
                <span className="mt-3 text-sm text-ink-soft">
                  Learn more <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              href="/classes"
              className="arrow-parent text-sm font-medium text-primary hover:text-primary-hover"
            >
              Compare all formats and pricing <span className="arrow">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Free first class */}
      <section className="bg-deep py-14 sm:py-18">
        <Container className="grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div className="reveal">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-beige">
              Start Here
            </p>
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
                Available in every format — 1:1, group and chair yoga
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
              className="justify-center"
              ariaLabel="Book your free first class"
            >
              Book Your Free Trial
            </Button>
            <Button
              href={whatsappHref()}
              variant="outlineLight"
              className="justify-center"
              ariaLabel="Ask about the free first class on WhatsApp"
            >
              Chat on WhatsApp
            </Button>
            <p className="mt-3 border-t border-beige/20 pt-4 text-[13.5px] leading-relaxed text-stone/60">
              I&rsquo;m taking on my first students through this site, so groups stay
              small and there are no reviews to show yet — which is exactly why the
              first class is free.
            </p>
          </div>
        </Container>
      </section>

      {/* Practice — real content grid, left-aligned header */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="reveal grid gap-8 border-b border-deep/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                The Practice
              </p>
              <h2 className="text-[2.125rem] font-medium tracking-[-0.01em] text-ink sm:text-[2.5rem]">
                Yoga is not about perfect postures
              </h2>
              <p className="mt-4 text-[16px] leading-[1.75] text-ink-soft">
                It&rsquo;s about coming home to yourself — a practice of listening rather
                than forcing. Every class draws from the same well; which parts come
                forward depends on what you need that day.
              </p>
            </div>
            <Link
              href="/practice"
              className="arrow-parent whitespace-nowrap text-sm font-medium text-primary hover:text-primary-hover"
            >
              Explore the practice <span className="arrow">→</span>
            </Link>
          </div>

          <div className="reveal mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {styles.map((style) => (
              <Link
                key={style.id}
                href={`/practice#${style.id}`}
                className="arrow-parent group border-t border-deep/10 pt-5"
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

      <FinalCta heading="Your first session is on us." />
    </>
  );
}
