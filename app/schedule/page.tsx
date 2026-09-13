import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Schedule from '@/components/Schedule';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Schedule | Tat Sat Yoga — Your Practice, Your Time',
  description:
    'Weekly online yoga schedule: Hatha, Vinyasa, Yin, Pranayama breathwork, meditation, strength and senior chair yoga. Filter by style and book your place.',
  openGraph: {
    title: 'Schedule | Tat Sat Yoga — Your Practice, Your Time',
    description: 'Filter the weekly schedule by style and reserve your spot in seconds.',
    type: 'website',
  },
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="SCHEDULE"
        title={<>Your practice, <em style={{ fontStyle: 'italic', color: '#556B2F' }}>your time.</em></>}
        sub="Live online classes through the week. Pick a style, choose your slot, and book — every format includes 1 free trial session."
        primaryLabel="View Pricing"
        primaryHref="/pricing"
        secondaryLabel="Explore Classes"
        secondaryHref="/classes"
      />
      <Schedule />
      <FinalCTA />
    </>
  );
}
