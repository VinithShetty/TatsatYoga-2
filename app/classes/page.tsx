import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Classes from '@/components/Classes';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Classes | Tat Sat Yoga — Find Your Practice',
  description:
    'Explore 9 online offerings: Hatha, Vinyasa, Yin, Pranayama breathwork, meditation, strength & flexibility, sedentary-lifestyle relief, women’s health and senior citizen chair yoga.',
  openGraph: {
    title: 'Classes | Tat Sat Yoga — Find Your Practice',
    description: 'Nine beginner-friendly online offerings, from dynamic Vinyasa to gentle chair yoga.',
    type: 'website',
  },
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR OFFERINGS"
        title={<>Find your <em style={{ fontStyle: 'italic', color: '#556B2F' }}>practice.</em></>}
        sub="Nine online offerings to meet you where you are — from steady Hatha and flowing Vinyasa to still Yin, breathwork, meditation and gentle chair yoga."
        primaryLabel="View Pricing"
        primaryHref="/pricing"
        secondaryLabel="Check Schedule"
        secondaryHref="/schedule"
      />
      <Classes />
      <FinalCTA />
    </>
  );
}
