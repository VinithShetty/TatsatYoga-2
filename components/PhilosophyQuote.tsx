import React from 'react';
import Reveal from './Reveal';

export default function PhilosophyQuote() {
  return (
    <section style={{ padding: '140px 32px', textAlign: 'center' }}>
      <Reveal y={24}>
        <svg width="60" height="60" viewBox="0 0 60 60" style={{ marginBottom: 32 }} aria-hidden="true">
          <path d="M 52 30 A 22 22 0 1 1 27 8.5" fill="none" stroke="#B8965A" strokeWidth="1.4" strokeLinecap="round"></path>
        </svg>
        <p style={{ fontFamily: "'Newsreader',serif", fontSize: 42, lineHeight: 1.4, fontWeight: 400, color: '#33401F', maxWidth: 760, margin: '0 auto', fontStyle: 'italic' }}>
          Move with awareness.<br />Breathe with intention.<br />Be present.
        </p>
      </Reveal>
    </section>
  );
}
