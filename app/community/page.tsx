import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Community from '@/components/Community';
import Collaborations from '@/components/Collaborations';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Community | Tat Sat Yoga — Life Beyond the Mat',
  description:
    'Life beyond the mat: follow Tat Sat Yoga, explore brand partnerships, corporate wellness workshops, retreats and upcoming prerecorded sessions.',
  openGraph: {
    title: 'Community | Tat Sat Yoga — Life Beyond the Mat',
    description: 'Follow the practice, partner with us, and grow together.',
    type: 'website',
  },
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="COMMUNITY"
        title={<>Life beyond <em style={{ fontStyle: 'italic', color: '#556B2F' }}>the mat.</em></>}
        sub="Follow the everyday practice, and grow with us — through brand partnerships, corporate wellness, retreats and prerecorded sessions."
        primaryLabel="Book a Class"
        primaryHref="/schedule"
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
      />
      <Community />
      <Collaborations />
      <FinalCTA />
    </>
  );
}
