import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-ink">Terms of Service</h1>
          <p className="mt-6 rounded-md border border-deep/15 bg-chalk p-5 text-sm leading-relaxed text-ink-soft">
            Placeholder page. This site does not yet have reviewed terms of
            service — draft and publish real terms (booking, cancellation and
            payment policy included) before taking paid bookings.
          </p>
        </div>
      </Container>
    </section>
  );
}
