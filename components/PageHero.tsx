import React from 'react';
import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  primaryLabel?: string;
  primaryHref?: string;
  onPrimaryClick?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Shared internal-page hero. Inherits the homepage hero visual language:
 * cream background, gold eyebrow, Newsreader serif headline, decorative arc,
 * and the same pill CTA treatment.
 */
export default function PageHero({
  eyebrow,
  title,
  sub,
  primaryLabel,
  primaryHref,
  onPrimaryClick,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section style={{ position: 'relative', padding: '120px 32px 80px', maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        style={{ position: 'absolute', left: '50%', top: 40, marginLeft: -220, opacity: 0.5, zIndex: 0 }}
        aria-hidden="true"
      >
        <path d="M 100 60 A 40 40 0 1 1 55 21" fill="none" stroke="#B8965A" strokeWidth="1.4" strokeLinecap="round"></path>
      </svg>
      <Reveal y={22}>
        <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 24px', position: 'relative' }}>{eyebrow}</p>
        <h1 className="tsy-hero-h1" style={{ fontFamily: "'Newsreader',serif", fontSize: 64, lineHeight: 1.08, fontWeight: 500, margin: '0 0 24px', color: '#33401F', position: 'relative' }}>
          {title}
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#5B5A45', maxWidth: 560, margin: '0 auto 40px', position: 'relative' }}>{sub}</p>
      </Reveal>
      {(primaryLabel || secondaryLabel) && (
        <Reveal delay={140} y={22}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
          {primaryLabel &&
            (onPrimaryClick ? (
              <button
                onClick={onPrimaryClick}
                className="tsy-cta tsy-btn-primary"
                style={{ border: 'none', background: '#556B2F', color: '#FBF7EE', padding: '16px 32px', borderRadius: 100, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif" }}
              >
                {primaryLabel}
              </button>
            ) : (
              <a
                href={primaryHref}
                className="tsy-cta tsy-btn-primary"
                style={{ textDecoration: 'none', background: '#556B2F', color: '#FBF7EE', padding: '16px 32px', borderRadius: 100, fontSize: 15, fontWeight: 500 }}
              >
                {primaryLabel}
              </a>
            ))}
          {secondaryLabel && (
            <a
              href={secondaryHref}
              className="tsy-cta tsy-btn-outline"
              style={{ textDecoration: 'none', border: '1px solid #33401F', color: '#33401F', padding: '16px 32px', borderRadius: 100, fontSize: 15, fontWeight: 500 }}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
        </Reveal>
      )}
    </section>
  );
}
