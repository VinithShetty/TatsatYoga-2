import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { whatsappHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about online yoga classes — WhatsApp is the fastest way to reach us.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-lg text-center">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
          Contact
        </p>
        <h1 className="text-[3.25rem] font-semibold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[4.25rem]">
          Let&rsquo;s talk on WhatsApp
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
          Questions about a format, your schedule, or whether this is the right
          fit — WhatsApp is the quickest way to reach us, usually within the day.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={whatsappHref()} variant="primary">
            Chat on WhatsApp
          </Button>
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          Or save the number:{" "}
          <a
            href={`tel:+${siteConfig.whatsappNumber}`}
            className="font-medium text-primary hover:text-primary-hover"
          >
            {siteConfig.whatsappDisplay}
          </a>
        </p>
      </Container>
    </section>
  );
}
