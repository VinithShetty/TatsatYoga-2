import React from 'react';
import ImageSlot from './ImageSlot';
import Reveal from './Reveal';
import { teacher } from '@/lib/data';

export default function AboutTeacher() {
  return (
    <section id="about" style={{ background: '#F3EDDF', padding: '100px 32px' }}>
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
          <p style={{ fontFamily: "'Newsreader',serif", fontStyle: 'italic', fontSize: 20, lineHeight: 1.6, color: '#33401F', margin: '0 0 24px', maxWidth: 460 }}>&ldquo;{teacher.quote}&rdquo;</p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#5B5A45', maxWidth: 460, margin: '0 0 16px' }}>{teacher.story}</p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#5B5A45', maxWidth: 460, margin: '0 0 16px' }}>{teacher.credentials}</p>
          <p style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 460, margin: '0 0 12px', fontWeight: 600, color: '#33401F' }}>About my teaching:</p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#5B5A45', maxWidth: 460, margin: '0 0 16px' }}>{teacher.teaching}</p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#5B5A45', maxWidth: 460, margin: '0 0 32px' }}>{teacher.approach}</p>
          <a href="/contact" className="tsy-link" style={{ textDecoration: 'none', color: '#556B2F', fontWeight: 600, fontSize: 15, borderBottom: '1px solid #556B2F', paddingBottom: 4 }}>Learn More About Me</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
