'use client';

import React from 'react';
import { useBooking } from '@/lib/booking-context';
import Reveal from './Reveal';

export default function FinalCTA() {
  const { openBooking } = useBooking();
  const onOpenBooking = openBooking;
  return (
    <section id="contact" style={{ background: '#DED1B4', padding: '120px 32px', textAlign: 'center' }}>
      <Reveal y={26}>
        <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 48, fontWeight: 500, margin: '0 0 20px', color: '#33401F' }}>Your Practice Starts Here.</h2>
        <p style={{ fontSize: 17, color: '#4F4A2E', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>Take a moment for yourself. Join Tat Sat Yoga and discover a practice that grows with you.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={onOpenBooking} className="tsy-cta tsy-btn-primary" style={{ border: 'none', background: '#556B2F', color: '#FBF7EE', padding: '16px 34px', borderRadius: 100, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif" }}>
          Book Your First Class
        </button>
        <a href="/contact" className="tsy-cta tsy-btn-outline" style={{ textDecoration: 'none', border: '1px solid #33401F', color: '#33401F', padding: '16px 34px', borderRadius: 100, fontSize: 15, fontWeight: 500 }}>
          Get in Touch
        </a>
        </div>
      </Reveal>
    </section>
  );
}
