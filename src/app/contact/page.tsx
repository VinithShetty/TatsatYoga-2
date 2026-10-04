import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { whatsappHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about online yoga classes — WhatsApp is the fastest way to reach us.",
};

const steps = [
  {
    title: "Send a message",
    body: "Say hello on WhatsApp and share a little about what you're looking for.",
  },
  {
    title: "Pick a time",
    body: "Agree on a slot for your free trial that fits around your week.",
  },
  {
    title: "Your first class, free",
    body: "A real, full-length session. Decide afterwards whether it's right for you.",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-parchment py-12 sm:py-16">
      <Container className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <div className="rise">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-[2.5rem] font-semibold leading-[1.02] text-ink sm:text-[3.5rem]">
            Let&rsquo;s talk{" "}
            <span className="script block text-[3rem] leading-[1.15] text-primary sm:text-[4.25rem]">
              on WhatsApp.
            </span>
          </h1>
          <p className="mt-4 max-w-md text-[17px] leading-[1.7] text-ink-soft">
            Questions about a format, your schedule, or whether this is the right fit —
            WhatsApp is the quickest way to reach us, usually within the day.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={whatsappHref()} variant="primary">
              Chat on WhatsApp
            </Button>
            <Button href={`tel:+${siteConfig.whatsappNumber}`} variant="outline" className="bg-chalk">
              Call {siteConfig.whatsappDisplay}
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-ink/10 bg-chalk p-6 sm:p-8">
          <h2 className="font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-primary-hover">
            What happens next
          </h2>
          <ol className="stagger mt-5 space-y-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-beige font-display text-[17px] font-semibold text-deep"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-[1.25rem] font-semibold leading-tight text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
