'use client';

import React from 'react';
import ImageSlot from './ImageSlot';
import Reveal from './Reveal';
import { classesData } from '@/lib/data';
import { useBooking } from '@/lib/booking-context';

export default function Classes({ preview = false }: { preview?: boolean }) {
  const { openBookingForClass } = useBooking();
  const onSelectClass = openBookingForClass;
  const list = preview ? classesData.slice(0, 4) : classesData;
  return (
    <section id="classes" style={{ maxWidth: 1280, margin: '0 auto', padding: '110px 32px 80px' }}>
      <Reveal>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
          <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 16px' }}>OUR OFFERINGS</p>
          <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 44, fontWeight: 500, margin: 0, color: '#33401F' }}>Find Your Practice</h2>
        </div>
      </Reveal>
      <div className="tsy-grid8" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
        {list.map((cls, i) => (
          <Reveal key={cls.slotId} delay={Math.min(i, 7) * 80} y={32} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="tsy-card" style={{ background: '#fff', border: '1px solid rgba(51,64,31,0.10)', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div className="tsy-imgwrap" style={{ width: '100%', aspectRatio: '4/3' }}>
              <ImageSlot id={cls.slotId} shape="rect" placeholder={cls.name} />
            </div>
            <div style={{ padding: '22px 22px 26px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 20, fontWeight: 500, margin: 0, color: '#33401F' }}>{cls.name}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6B6A54', margin: 0, flex: 1 }}>{cls.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 11, color: '#8A7B4E', letterSpacing: '.5px', textTransform: 'uppercase', fontWeight: 600 }}>
                <span>{cls.level}</span><span>&middot;</span><span>{cls.duration}</span><span>&middot;</span><span>{cls.format}</span>
              </div>
              <button onClick={() => onSelectClass(cls.name)} className="tsy-view" style={{ border: 'none', background: 'none', padding: 0, textAlign: 'left', color: '#556B2F', fontWeight: 600, fontSize: 13, marginTop: 6, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif" }}>
                View Class <span className="tsy-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
      {preview && (
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/classes" className="tsy-cta tsy-btn-outline" style={{ textDecoration: 'none', border: '1px solid #33401F', color: '#33401F', padding: '16px 34px', borderRadius: 100, fontSize: 15, fontWeight: 500 }}>
            Explore All 9 Offerings
          </a>
        </div>
      )}
    </section>
  );
}
