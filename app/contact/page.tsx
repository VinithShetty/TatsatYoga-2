import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/FinalCTA';
import { contact } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact | Tat Sat Yoga — Get in Touch',
  description:
    'Get in touch with Tat Sat Yoga. Book a class, ask about personal or group sessions, or discuss collaborations and corporate wellness.',
  openGraph: {
    title: 'Contact | Tat Sat Yoga — Get in Touch',
    description: 'Take a moment for yourself — reach out and begin your practice.',
    type: 'website',
  },
};

const cards = [
  { t: 'Phone', d: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}` },
  { t: 'Email', d: contact.email, href: `mailto:${contact.email}` },
  { t: 'Location', d: `${contact.location} · Online classes worldwide`, href: '/schedule' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={<>Take a moment <em style={{ fontStyle: 'italic', color: '#556B2F' }}>for yourself.</em></>}
        sub="Questions about personal or group sessions, chair yoga, or collaborations — reach out, and discover a practice that grows with you."
        primaryLabel="Book a Class"
        primaryHref="/schedule"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, maxWidth: 960, margin: '0 auto' }} className="tsy-grid6">
          {cards.map((item) => (
            <div key={item.t} style={{ background: '#F3EDDF', borderRadius: 18, padding: '32px 26px', textAlign: 'center' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" style={{ marginBottom: 18 }} aria-hidden="true">
                <circle cx="15" cy="15" r="13" fill="none" stroke="#556B2F" strokeWidth="1.3"></circle>
              </svg>
              <h3 style={{ fontSize: 17, fontWeight: 600, margin: '0 0 10px', color: '#33401F' }}>{item.t}</h3>
              <a href={item.href} className="tsy-link" style={{ textDecoration: 'none', fontSize: 14, lineHeight: 1.65, color: '#556B2F', fontWeight: 600 }}>
                {item.d}
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 15, lineHeight: 1.7, color: '#6B6A54', maxWidth: 600, margin: '48px auto 0' }}>
          Prefer to talk first? Begin with one complimentary trial session — experience the practice, understand the approach and discover what works best for your body and needs.
        </p>
      </section>
      <FinalCTA />
    </>
  );
}
