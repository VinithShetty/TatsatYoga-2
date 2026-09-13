import React from 'react';
import Reveal from './Reveal';

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, color: '#33401F', fontWeight: 500 }}>{label}</span>
      <span style={{ fontFamily: "'Newsreader',serif", fontSize: 22, color: '#556B2F', fontWeight: 500 }}>{value}</span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#F3EDDF', padding: '110px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
            <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 16px' }}>CLASS FORMAT &amp; PRICES</p>
            <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 44, fontWeight: 500, margin: 0, color: '#33401F' }}>Find What Works for You.</h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className="tsy-grid6">
          <Reveal delay={0} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#FBF7EE', borderRadius: 18, padding: '36px 28px', border: '1px solid rgba(51,64,31,0.08)', flex: 1 }}>
            <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 10px' }}>ONLINE 1:1 YOGA SESSIONS</p>
            <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 500, margin: '0 0 14px', color: '#33401F' }}>Personal Yoga (1 Hour)</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#6B6A54', margin: '0 0 24px' }}>Personalised yoga sessions tailored to individual needs, goals and fitness levels. Each session focuses on mindful movement, strength, flexibility, mobility and breathwork, with modifications and guidance to support your unique journey.</p>
            <div style={{ borderTop: '1px solid rgba(51,64,31,0.10)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <PriceRow label="5 days a week" value="5000/month" />
              <PriceRow label="3 days a week" value="3000/month" />
            </div>
          </div>

          </Reveal>
          <Reveal delay={110} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#FBF7EE', borderRadius: 18, padding: '36px 28px', border: '1px solid rgba(51,64,31,0.08)', flex: 1 }}>
            <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 10px' }}>ONLINE GROUP YOGA SESSIONS</p>
            <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 500, margin: '0 0 14px', color: '#33401F' }}>Group Classes (1 Hour)</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#6B6A54', margin: '0 0 24px' }}>Live, interactive yoga sessions for overall wellness that bring mindful movement, strength, flexibility and breathwork into a shared practice. Suitable for different levels, with guided modifications to help each participant practice safely and comfortably from home.</p>
            <div style={{ borderTop: '1px solid rgba(51,64,31,0.10)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <PriceRow label="5 days a week" value="2000/month" />
              <PriceRow label="3 days a week" value="1500/month" />
            </div>
          </div>

          </Reveal>
          <Reveal delay={220} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#FBF7EE', borderRadius: 18, padding: '36px 28px', border: '1px solid rgba(51,64,31,0.08)', flex: 1 }}>
            <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 10px' }}>SENIOR CITIZENS CHAIR YOGA</p>
            <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 500, margin: '0 0 14px', color: '#33401F' }}>Chair Yoga (30 Mins)</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#6B6A54', margin: '0 0 24px' }}>A gentle, accessible practice designed to improve mobility, balance, flexibility and strength while promoting relaxation and overall well-being.</p>
            <div style={{ borderTop: '1px solid rgba(51,64,31,0.10)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <PriceRow label="5 days a week" value="1500/month" />
              <PriceRow label="3 days a week" value="1000/month" />
            </div>
          </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div style={{ marginTop: 48, textAlign: 'center', background: '#FBF7EE', borderRadius: 18, padding: '36px 28px', border: '1px solid rgba(51,64,31,0.08)' }}>
            <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 22, fontWeight: 500, margin: '0 0 12px', color: '#33401F' }}>1 Free Trial Session included with every format.</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#6B6A54', maxWidth: 600, margin: '0 auto' }}>Begin your journey with one complimentary trial session. Experience the practice, understand the approach and discover what works best for your body and needs.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
