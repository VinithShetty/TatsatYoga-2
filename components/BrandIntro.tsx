import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

export default function BrandIntro() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px', display: 'flex', gap: 72, alignItems: 'center' }} className="tsy-split">
      <Reveal style={{ flex: 1, minWidth: 320 }}>
        <div>
        <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 44, fontWeight: 500, margin: '0 0 24px', color: '#33401F' }}>Core Philosophy</h2>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: '#5B5A45', maxWidth: 440, margin: '0 0 20px' }}><em style={{ fontStyle: 'italic', color: '#556B2F' }}>Yoga is not about perfection. It is about presence.</em></p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: '#5B5A45', maxWidth: 440, margin: '0 0 20px' }}>At its heart, yoga is a practice of returning — to the breath, to the body, and ultimately, to the self. It creates space to slow down, listen inward and cultivate a deeper sense of awareness.</p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: '#5B5A45', maxWidth: 440, margin: '0 0 20px' }}>Tat Sat Yoga embraces the idea that every body has its own rhythm and every journey its own pace. Through movement, breath and stillness, the practice nurtures strength, flexibility, balance and inner calm — both on and beyond the mat.</p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: '#5B5A45', maxWidth: 440, margin: '0 0 20px' }}>A practice not to become more, but to become more aware of what already is.</p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: '#5B5A45', maxWidth: 440, margin: '0 0 32px' }}>Tat Sat Yoga is an invitation to slow down, breathe deeply and meet yourself where you are.<br />I hope to walk beside you on this path of yoga — one breath, one movement and one moment of awareness at a time.</p>
        <a href="/about" className="tsy-link" style={{ textDecoration: 'none', color: '#556B2F', fontWeight: 600, fontSize: 15, borderBottom: '1px solid #556B2F', paddingBottom: 4 }}>Discover Our Approach</a>
        </div>
      </Reveal>
      <Reveal style={{ flex: 1, minWidth: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }} delay={130}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ position: 'relative', width: 340, height: 340 }}>
          <svg className="tsy-breathe" width="340" height="340" viewBox="0 0 340 340" style={{ position: 'absolute', inset: 0 }}>
            <circle cx="170" cy="170" r="150" fill="none" stroke="#DED1B4" strokeWidth="1.5"></circle>
            <path d="M 300 170 A 130 130 0 1 1 200 48" fill="none" stroke="#556B2F" strokeWidth="1.4" strokeLinecap="round"></path>
            <circle cx="170" cy="170" r="4" fill="#B8965A"></circle>
          </svg>
          <div style={{ position: 'absolute', inset: 60, borderRadius: '50%', overflow: 'hidden' }}>
            <Image
              src="/images/circle.jpg"
              alt="Woman practicing yoga on a mat beside a calm lake"
              fill
              sizes="220px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
