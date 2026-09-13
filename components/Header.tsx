'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/data';

interface HeaderProps {
  scrolled: boolean;
  mobileOpen: boolean;
  onToggleMobile: () => void;
  onOpenBooking: () => void;
  onOpenBookingMobile: () => void;
}

export default function Header({ scrolled, mobileOpen, onToggleMobile, onOpenBooking, onOpenBookingMobile }: HeaderProps) {
  const pathname = usePathname();
  const headerStyle: React.CSSProperties = scrolled
    ? { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(251,247,238,0.94)', backdropFilter: 'blur(8px)', boxShadow: '0 2px 20px rgba(51,64,31,0.06)', transition: 'background .3s ease,box-shadow .3s ease' }
    : { position: 'sticky', top: 0, zIndex: 50, background: 'transparent', transition: 'background .3s ease,box-shadow .3s ease' };
  const headerTextColor = '#33401F';
  const headerSubTextColor = scrolled ? '#8A7B4E' : '#556B2F';

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'));

  const linkStyle = (href: string): React.CSSProperties => ({
    textDecoration: 'none',
    fontSize: 14,
    color: isActive(href) ? '#556B2F' : headerTextColor,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    borderBottom: isActive(href) ? '1px solid #556B2F' : '1px solid transparent',
    paddingBottom: 4,
  });

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 84, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 8, whiteSpace: 'nowrap', flexShrink: 0 }} aria-label="Tat Sat Yoga home">
          <span style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 500, color: headerTextColor, letterSpacing: '.5px' }}>tat sat</span>
          <span style={{ fontSize: 10, letterSpacing: 3, color: headerSubTextColor, fontWeight: 500 }}>YOGA</span>
        </a>
        <nav className="tsy-nav-links" aria-label="Primary" style={{ display: 'flex', gap: 22, alignItems: 'center', flexWrap: 'nowrap', minWidth: 0 }}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="tsy-link" aria-current={isActive(item.href) ? 'page' : undefined} style={linkStyle(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={onOpenBooking} className="tsy-cta tsy-hide-mobile tsy-btn-primary" style={{ border: 'none', background: '#556B2F', color: '#FBF7EE', padding: '12px 26px', borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif" }}>
            Book a Class
          </button>
          <button onClick={onToggleMobile} aria-label="Menu" aria-expanded={mobileOpen} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }} className="tsy-mobile-btn">
            <svg width="22" height="16" viewBox="0 0 22 16">
              <line x1="0" y1="1" x2="22" y2="1" stroke={headerTextColor} strokeWidth="1.6"></line>
              <line x1="0" y1="8" x2="22" y2="8" stroke={headerTextColor} strokeWidth="1.6"></line>
              <line x1="0" y1="15" x2="22" y2="15" stroke={headerTextColor} strokeWidth="1.6"></line>
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="tsy-menu-drop" style={{ background: '#FBF7EE', padding: '24px 32px 32px', display: 'flex', flexDirection: 'column', gap: 20, borderTop: '1px solid rgba(51,64,31,0.08)' }}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={onToggleMobile} style={{ textDecoration: 'none', fontSize: 16, color: isActive(item.href) ? '#556B2F' : '#33401F', fontWeight: 500 }}>
              {item.label}
            </a>
          ))}
          <button onClick={onOpenBookingMobile} className="tsy-btn-primary" style={{ border: 'none', background: '#556B2F', color: '#FBF7EE', padding: '14px 26px', borderRadius: 100, fontSize: 15, fontWeight: 500, textAlign: 'center', fontFamily: "'Work Sans',sans-serif", cursor: 'pointer' }}>
            Book a Class
          </button>
        </div>
      )}
    </header>
  );
}
