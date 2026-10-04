import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
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
      <section className="bg-parchment py-10 sm:py-14">
        <Container className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div className="rise">
            <Eyebrow>
              {format.duration} · {format.keyword}
            </Eyebrow>
            <h1 className="text-[2.5rem] font-semibold leading-[1.02] text-ink sm:text-[3.5rem]">
              {format.name}
            </h1>
            <p className="mt-4 text-[17px] leading-[1.7] text-ink-soft">{format.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href={whatsappHref(`Hi! I'd like to book a free trial for ${format.name}.`)}
                variant="primary"
              >
                Book Free Trial
              </Button>
              <Button href="#pricing" variant="outline">
                See Pricing
              </Button>
            </div>
          </div>
          <Photo
            src="/images/reverse-prayer-garden.webp"
            alt="Mohini Rai kneeling on a block-printed mat in a flowering garden, hands joined in reverse prayer"
            aspect="aspect-[4/3] md:aspect-[4/5] lg:aspect-[1/1]"
            position="object-[50%_30%]"
            sizes="(min-width: 768px) 38vw, 100vw"
            eager
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="stagger grid gap-5 md:grid-cols-3 md:gap-6">
          <div className="rounded-lg bg-beige p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold text-ink">Is this the right fit?</h2>
            <ul className="mt-4 space-y-2.5">
              {format.whoFor.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-beige p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold text-ink">What a session looks like</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">{format.sessionLooksLike}</p>
          </div>
          <div id="pricing" className="scroll-mt-24 rounded-lg border border-ink/10 bg-chalk p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold text-ink">Pricing</h2>
            <dl className="mt-3 divide-y divide-ink/10">
              {format.pricing.map((tier) => (
                <div key={tier.schedule} className="flex items-baseline justify-between py-3">
                  <dt className="text-sm text-ink-soft">{tier.schedule}</dt>
                  <dd className="font-display text-xl font-semibold text-ink">{tier.price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-ink-faint">
              Per month. Every plan includes one free trial session first.
            </p>
          </div>
        </Container>
      </section>

      <FinalCta
        heading={`Try ${format.name.replace("Online ", "").replace("Senior Citizens ", "")}, free.`}
        whatsappMessage={`Hi! I'd like to book a free trial for ${format.name}.`}
      />
    </>
  );
}
