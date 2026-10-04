import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-ink">Privacy Policy</h1>
          <p className="mt-6 rounded-md border border-deep/15 bg-chalk p-5 text-sm leading-relaxed text-ink-soft">
            Placeholder page. This site does not yet have a reviewed privacy
            policy — draft and publish one here before collecting any personal
            data through forms, bookings or reviews.
          </p>
        </div>
      </Container>
    </section>
  );
}
