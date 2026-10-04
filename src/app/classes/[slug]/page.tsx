import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { Photo } from "@/components/Photo";
import { classFormats, whatsappHref } from "@/lib/site-config";

export function generateStaticParams() {
  return classFormats.map((format) => ({ slug: format.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/classes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const format = classFormats.find((f) => f.slug === slug);
  if (!format) return {};
  return {
    title: format.name,
    description: format.metaDescription,
  };
}

export default async function ClassFormatPage({
  params,
}: PageProps<"/classes/[slug]">) {
  const { slug } = await params;
  const format = classFormats.find((f) => f.slug === slug);
  if (!format) notFound();

  return (
    <>
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18">
        <Container className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              {format.duration} · {format.keyword}
            </p>
            <h1 className="text-[3.25rem] font-semibold leading-[1.0] text-ink sm:text-[4.25rem]">{format.name}</h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              {format.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={whatsappHref(`Hi! I'd like to book a free trial for ${format.name}.`)}
                variant="primary"
              >
                Book Free Trial
              </Button>
              <Button href={whatsappHref()} variant="outline">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          <Photo src="/images/reverse-prayer-garden.webp" alt="A yoga practitioner kneeling on a block-printed mat in a flowering garden, hands joined in reverse prayer" eager />
        </Container>
      </section>

      <section className="border-t border-deep/10 bg-beige py-16 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-ink">Is this the right fit?</h2>
            <ul className="mt-5 space-y-3">
              {format.whoFor.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">What a session looks like</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              {format.sessionLooksLike}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-md">
          <h2 className="font-display text-2xl text-ink">Pricing</h2>
          <dl className="mt-6 divide-y divide-deep/10 rounded-lg border border-deep/15 bg-chalk">
            {format.pricing.map((tier) => (
              <div key={tier.schedule} className="flex items-center justify-between px-6 py-4">
                <dt className="text-sm text-ink-soft">{tier.schedule}</dt>
                <dd className="font-display text-lg text-ink">{tier.price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-ink-faint">
            Every plan includes one free trial session first.
          </p>
        </Container>
      </section>

      <FinalCta
        heading={`Try ${format.name.replace("Online ", "").replace("Senior Citizens ", "")}, free.`}
        whatsappMessage={`Hi! I'd like to book a free trial for ${format.name}.`}
      />
    </>
  );
}
