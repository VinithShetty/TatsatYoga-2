import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Pricing | Tat Sat Yoga — Class Formats & Prices',
  description:
    'Online 1:1 yoga (5000/3000 per month), group classes (2000/1500 per month) and senior citizen chair yoga (1500/1000 per month). 1 free trial session included with every format.',
  openGraph: {
    title: 'Pricing | Tat Sat Yoga — Class Formats & Prices',
    description: 'Personal, group and chair yoga plans with 1 free trial session in every format.',
    type: 'website',
  },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="CLASS FORMAT & PRICES"
        title={<>Find what <em style={{ fontStyle: 'italic', color: '#556B2F' }}>works for you.</em></>}
        sub="Personal 1:1 sessions, live group practice and gentle chair yoga for seniors — every format begins with one complimentary trial session."
        primaryLabel="Check Schedule"
        primaryHref="/schedule"
        secondaryLabel="Explore Classes"
        secondaryHref="/classes"
      />
      <Pricing />
      <FinalCTA />
    </>
  );
}
