import React from 'react';
import { contact, navItems, socials } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  const footerNav = navItems;
  return (
    <footer id="footer" style={{ background: '#33401F', color: '#DED1B4', padding: '80px 32px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap', paddingBottom: 48, borderBottom: '1px solid rgba(222,209,180,0.15)' }}>
        <div style={{ maxWidth: 280 }}>
          <div style={{ fontFamily: "'Newsreader',serif", fontSize: 24, color: '#FBF7EE', marginBottom: 6 }}>
            tat sat <span style={{ fontSize: 11, letterSpacing: 2, color: '#DED1B4' }}>YOGA</span>
          </div>
          <p style={{ fontSize: 13, letterSpacing: 2, color: '#A8B080', margin: '0 0 20px' }}>MOVE. BREATHE. BE.</p>
          <div style={{ display: 'flex', gap: 14 }}>
            {socials.map((s) => (
              <a key={s.initial} href="#" aria-label={s.initial} className="tsy-social" style={{ textDecoration: 'none', color: '#DED1B4', fontSize: 13, border: '1px solid rgba(222,209,180,0.3)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {s.initial}
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 2, color: '#8A9464', fontWeight: 600, marginBottom: 18 }}>NAVIGATE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {footerNav.map((n) => (
                <a key={n.label} href={n.href} style={{ textDecoration: 'none', color: '#DED1B4', fontSize: 14 }}>
                  {n.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 2, color: '#8A9464', fontWeight: 600, marginBottom: 18 }}>CONTACT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: '#DED1B4' }}>
              <span>{contact.phone}</span>
              <span>{contact.email}</span>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>
      </div>
      <p style={{ maxWidth: 1280, margin: '24px auto 0', fontSize: 12.5, color: '#8A9464' }}>&copy; {year} Tat Sat Yoga. All rights reserved.</p>
    </footer>
  );
}
