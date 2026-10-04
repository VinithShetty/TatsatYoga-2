import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { whatsappHref } from "@/lib/site-config";

export function FinalCta({
  heading,
  whatsappMessage,
}: {
  heading: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-14 text-center sm:py-20">
      <Image
        src="/images/banner-garden-wide.webp"
        alt=""
        fill
        sizes="100vw"
        className="parallax -z-10 object-cover object-[50%_30%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep/80" />
      <Container className="reveal">
        <h2 className="text-[2.125rem] font-semibold leading-[1.08] text-chalk sm:text-[3rem]">
          {heading}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            href="/classes"
            variant="cream"
            ariaLabel="Book your free trial — view class formats"
          >
            Book Your Free Trial
          </Button>
          <Button
            href={whatsappHref(whatsappMessage)}
            variant="outlineLight"
            ariaLabel="Start a WhatsApp conversation"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
