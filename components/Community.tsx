import React from 'react';
import ImageSlot from './ImageSlot';
import Reveal from './Reveal';
import { instaSlots } from '@/lib/data';

export default function Community() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 110px' }}>
      <Reveal>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 36, fontWeight: 500, margin: '0 0 16px', color: '#33401F' }}>Life Beyond the Mat</h2>
          <a href="#" className="tsy-link" style={{ textDecoration: 'none', color: '#556B2F', fontWeight: 600, fontSize: 14 }}>Follow Tat Sat Yoga</a>
        </div>
      </Reveal>
      <div className="tsy-grid6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
        {instaSlots.map((s, i) => (
          <Reveal key={s} delay={Math.min(i, 5) * 70} y={24}>
            <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 10, overflow: 'hidden' }}>
              <ImageSlot id={s} shape="rect" placeholder="@tatsatyoga" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
