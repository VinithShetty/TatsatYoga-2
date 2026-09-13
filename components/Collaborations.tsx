import React from 'react';
import Reveal from './Reveal';

const items = [
  { t: 'Brand Partnerships', d: 'Open to collaboration and brand partnership opportunities.' },
  { t: 'Corporate Wellness', d: 'Corporate wellness workshops and wellness retreats.' },
  { t: 'Prerecorded Sessions', d: 'Prerecorded sessions coming soon for flexible, on-demand practice.' },
];

export default function Collaborations() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '110px 32px 80px' }}>
      <Reveal>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
          <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 16px' }}>COLLABORATIONS &amp; FUTURE PLANS</p>
          <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 44, fontWeight: 500, margin: 0, color: '#33401F' }}>Growing Together.</h2>
        </div>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, maxWidth: 960, margin: '0 auto' }} className="tsy-grid6">
        {items.map((item, i) => (
          <Reveal key={item.t} delay={i * 110} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#F3EDDF', borderRadius: 18, padding: '32px 26px', textAlign: 'center', flex: 1 }}>
            <svg width="30" height="30" viewBox="0 0 30 30" style={{ marginBottom: 18 }} aria-hidden="true">
              <circle cx="15" cy="15" r="13" fill="none" stroke="#556B2F" strokeWidth="1.3"></circle>
            </svg>
            <h3 style={{ fontSize: 17, fontWeight: 600, margin: '0 0 10px', color: '#33401F' }}>{item.t}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.65, color: '#6B6A54', margin: 0 }}>{item.d}</p>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
