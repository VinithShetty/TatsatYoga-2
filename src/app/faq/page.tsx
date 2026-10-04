import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about online yoga classes, the free trial, equipment, and finding the right format.",
};

const faqs = [
  {
    q: "How do I book my free trial session?",
    a: "Tap \"Book Your Free Trial\" on any page or message on WhatsApp directly. You'll agree on a time together, and the first session is free with no obligation to continue.",
  },
  {
    q: "I'm a complete beginner — is that a problem?",
    a: "No. Classes are beginner-friendly by default and adapted to where you're starting from, not a fixed curriculum you have to keep up with.",
  },
  {
    q: "What do I need for an online class?",
    a: "A yoga mat, a bit of clear floor space, and a phone, tablet or laptop with a camera for video calls. Chair yoga sessions need a sturdy, armless chair instead of a mat.",
  },
  {
    q: "I find it hard to get down to the floor. Can I still do this?",
    a: "Yes — that's exactly what the senior chair yoga format is for: seated and standing-with-support movement, no floor work required.",
  },
  {
    q: "Which yoga style will I be taught?",
    a: "Sessions draw from Hatha, Vinyasa, Yin, breathwork and meditation as suits you, rather than locking you into one style. See the Practice page for what each brings.",
  },
  {
    q: "Can I switch between 1:1 and group later?",
    a: "Yes. Many students start with a free trial in one format and move between formats as their goals or schedule change — just mention it on WhatsApp.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="pt-12 pb-8 sm:pt-16">
        <Container className="max-w-2xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            FAQ
          </p>
          <h1 className="text-[3.25rem] font-semibold leading-[1.0] text-ink sm:text-[4.25rem]">
            Questions, answered
          </h1>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="max-w-2xl divide-y divide-deep/10 border-y border-deep/15">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
                {faq.q}
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </Container>
      </section>

      <section className="border-t border-deep/10 bg-beige py-16 text-center sm:py-20">
        <Container className="max-w-lg">
          <h2 className="font-display text-[2.125rem] font-semibold text-ink sm:text-[2.75rem]">
            Still have a question?
          </h2>
          <div className="mt-7 flex justify-center">
            <Button href={whatsappHref()} variant="outline">
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
