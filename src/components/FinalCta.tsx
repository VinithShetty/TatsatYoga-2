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
    <section className="bg-deep py-14 text-center sm:py-16">
      <Container className="reveal">
        <h2 className="font-display text-[2rem] font-medium italic leading-tight text-stone sm:text-[2.75rem]">
          {heading}
        </h2>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
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
