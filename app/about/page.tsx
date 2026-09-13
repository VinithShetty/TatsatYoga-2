import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AboutTeacher from '@/components/AboutTeacher';
import PhilosophyQuote from '@/components/PhilosophyQuote';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'About | Tat Sat Yoga — My Story',
  description:
    'Meet your teacher: a 300-hour certified yoga teacher trained at Vinyasa Yogashram, Rishikesh. Beginner-friendly Hatha, Vinyasa and Yin yoga rooted in presence, not perfection.',
  openGraph: {
    title: 'About | Tat Sat Yoga — My Story',
    description: 'Yoga is not about perfect postures; it is about coming home to yourself.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="TAT SAT YOGA"
        title={<>Come back <em style={{ fontStyle: 'italic', color: '#556B2F' }}>to yourself.</em></>}
        sub="Yoga is not about perfection. It is about presence — a practice of returning to the breath, the body, and ultimately, the self."
        primaryLabel="Book a Class"
        primaryHref="/schedule"
        secondaryLabel="Explore Classes"
        secondaryHref="/classes"
      />
      <AboutTeacher />
      <PhilosophyQuote />
      <FinalCTA />
    </>
  );
}
