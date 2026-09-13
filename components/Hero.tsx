'use client';

import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { useBooking } from '@/lib/booking-context';

export default function Hero() {
  const { openBooking } = useBooking();
  const onOpenBooking = openBooking;
  return (
    <section id="home" style={{ position: 'relative', padding: '150px 32px 100px', maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64 }} className="tsy-split">
      <Reveal style={{ flex: 1, minWidth: 320, position: 'relative', zIndex: 2 }} y={26}>
        <div>
        <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', left: -40, top: -60, opacity: 0.5, zIndex: 0 }}>
          <path d="M 100 60 A 40 40 0 1 1 55 21" fill="none" stroke="#B8965A" strokeWidth="1.4" strokeLinecap="round"></path>
        </svg>
        <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 24px', position: 'relative' }}>TAT SAT YOGA</p>
        <h1 className="tsy-hero-h1" style={{ fontFamily: "'Newsreader',serif", fontSize: 72, lineHeight: 1.05, fontWeight: 500, margin: '0 0 28px', color: '#33401F', position: 'relative' }}>
          Move. Breathe. <em style={{ fontStyle: 'italic', color: '#556B2F' }}>Be.</em>
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#5B5A45', maxWidth: 460, margin: '0 0 40px' }}>
          Discover a yoga practice designed to help you move with awareness, breathe with intention, and create more space for calm in everyday life.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={onOpenBooking} className="tsy-cta tsy-btn-primary" style={{ border: 'none', background: '#556B2F', color: '#FBF7EE', padding: '16px 32px', borderRadius: 100, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif" }}>
            Book a Class
          </button>
          <a href="/classes" className="tsy-cta tsy-btn-outline" style={{ textDecoration: 'none', border: '1px solid #33401F', color: '#33401F', padding: '16px 32px', borderRadius: 100, fontSize: 15, fontWeight: 500 }}>
            Explore Classes
          </a>
        </div>
        </div>
      </Reveal>
      <Reveal style={{ flex: 1, minWidth: 320, position: 'relative' }} delay={150} y={30}>
        <div>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden' }}>
          <Image
            src="/images/hero.png"
            alt="Woman meditating in a flower garden during yoga practice"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <svg width="90" height="90" viewBox="0 0 90 90" style={{ position: 'absolute', right: -30, bottom: -30, opacity: 0.55 }}>
          <circle cx="45" cy="45" r="43" fill="none" stroke="#556B2F" strokeWidth="1"></circle>
        </svg>
        </div>
      </Reveal>
    </section>
  );
}
