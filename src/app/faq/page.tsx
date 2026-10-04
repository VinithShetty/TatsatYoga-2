import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader eyebrow="FAQ" title="Questions," script="answered." />

      <section className="py-8 sm:py-12">
        <Container className="stagger max-w-3xl divide-y divide-ink/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="smooth group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[1.25rem] font-semibold text-ink transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span aria-hidden="true" className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-ink/15 text-lg leading-none text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pb-5 text-[15.5px] leading-relaxed text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </Container>
      </section>

      <section className="bg-beige py-12 text-center sm:py-16">
        <Container className="reveal max-w-lg">
          <h2 className="text-[2.125rem] font-semibold leading-[1.08] text-ink sm:text-[2.75rem]">
            Still have a question?
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink">
            Ask on WhatsApp — you&rsquo;ll usually hear back the same day.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={whatsappHref()} variant="outline">
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
