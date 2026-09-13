import Hero from '@/components/Hero';
import BrandIntro from '@/components/BrandIntro';
import ImageSlot from '@/components/ImageSlot';
import Reveal from '@/components/Reveal';
import Classes from '@/components/Classes';
import Schedule from '@/components/Schedule';
import FinalCTA from '@/components/FinalCTA';
import { teacher } from '@/lib/data';

/** Compact teacher teaser — full story lives on /about. */
function AboutTeaser() {
  return (
    <section style={{ background: '#F3EDDF', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 72, alignItems: 'center' }} className="tsy-split">
        <Reveal style={{ flex: 1, minWidth: 280 }}>
          <div>
          <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 20, overflow: 'hidden', maxWidth: 420 }}>
            <ImageSlot id="teacher-photo" shape="rect" placeholder="Teacher portrait, natural light" />
          </div>
          </div>
        </Reveal>
        <Reveal style={{ flex: 1, minWidth: 320 }} delay={130}>
          <div>
          <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 16px' }}>MY STORY</p>
          <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 40, fontWeight: 500, margin: '0 0 20px', color: '#33401F' }}>{teacher.name}</h2>
          <p style={{ fontFamily: "'Newsreader',serif", fontStyle: 'italic', fontSize: 20, lineHeight: 1.6, color: '#33401F', margin: '0 0 32px', maxWidth: 460 }}>&ldquo;{teacher.quote}&rdquo;</p>
          <a href="/about" className="tsy-link" style={{ textDecoration: 'none', color: '#556B2F', fontWeight: 600, fontSize: 15, borderBottom: '1px solid #556B2F', paddingBottom: 4 }}>Read My Story</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const pricingTeaser = [
  { eyebrow: 'ONLINE 1:1 YOGA SESSIONS', title: 'Personal Yoga (1 Hour)', price: '3000/month', note: '3 days a week · 5-day plan also available' },
  { eyebrow: 'ONLINE GROUP YOGA SESSIONS', title: 'Group Classes (1 Hour)', price: '1500/month', note: '3 days a week · 5-day plan also available' },
  { eyebrow: 'SENIOR CITIZENS CHAIR YOGA', title: 'Chair Yoga (30 Mins)', price: '1000/month', note: '3 days a week · 5-day plan also available' },
];

/** Compact pricing teaser — full plans live on /pricing. */
function PricingTeaser() {
  return (
    <section style={{ background: '#F3EDDF', padding: '110px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
            <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 16px' }}>CLASS FORMAT &amp; PRICES</p>
            <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 44, fontWeight: 500, margin: 0, color: '#33401F' }}>Find What Works for You.</h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className="tsy-grid6">
          {pricingTeaser.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: '#FBF7EE', borderRadius: 18, padding: '36px 28px', border: '1px solid rgba(51,64,31,0.08)', textAlign: 'center', flex: 1 }}>
              <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 10px' }}>{p.eyebrow}</p>
              <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 500, margin: '0 0 14px', color: '#33401F' }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: '#6B6A54', margin: '0 0 6px' }}>from</p>
              <p style={{ fontFamily: "'Newsreader',serif", fontSize: 28, color: '#556B2F', fontWeight: 500, margin: '0 0 10px' }}>{p.price}</p>
              <p style={{ fontSize: 13, color: '#8A7B4E', margin: 0 }}>{p.note}</p>
            </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/pricing" className="tsy-cta tsy-btn-primary" style={{ textDecoration: 'none', background: '#556B2F', color: '#FBF7EE', padding: '16px 34px', borderRadius: 100, fontSize: 15, fontWeight: 500 }}>
            View All Plans
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <AboutTeaser />
      <Classes preview />
      <PricingTeaser />
      <Schedule />
      <FinalCTA />
    </>
  );
}
