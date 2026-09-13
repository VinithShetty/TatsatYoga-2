'use client';

import React, { useState } from 'react';
import { filterDefs, scheduleData, ScheduleRow } from '@/lib/data';
import { useBooking } from '@/lib/booking-context';
import Reveal from './Reveal';

const statusMap: Record<string, { label: string; style: React.CSSProperties }> = {
  available: { label: 'Available', style: { background: 'rgba(85,107,47,0.12)', color: '#556B2F' } },
  'almost-full': { label: 'Almost Full', style: { background: 'rgba(184,150,90,0.16)', color: '#8A6A2E' } },
  full: { label: 'Fully Booked', style: { background: 'rgba(51,64,31,0.08)', color: '#8A8A78' } },
};

function applyFilter(rows: ScheduleRow[], filter: string): ScheduleRow[] {
  if (filter === 'Hatha') return rows.filter((r) => r.class === 'Hatha Yoga');
  if (filter === 'Vinyasa') return rows.filter((r) => r.class === 'Vinyasa Yoga');
  if (filter === 'Yin') return rows.filter((r) => r.class === 'Yin Yoga');
  if (filter === 'Pranayama') return rows.filter((r) => r.class === 'Pranayama (Breathwork)');
  if (filter === 'Meditation') return rows.filter((r) => r.class === 'Meditation');
  return rows;
}

export default function Schedule() {
  const [filter, setFilter] = useState('All');
  const { openBookingForSlot } = useBooking();
  const onSetFilter = setFilter;
  const onBookSlot = openBookingForSlot;
  const filtered = applyFilter(scheduleData, filter);
  return (
    <section id="schedule" style={{ maxWidth: 1120, margin: '0 auto', padding: '110px 32px 80px' }}>
      <Reveal>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <p style={{ fontSize: 13, letterSpacing: 3, color: '#8A7B4E', fontWeight: 600, margin: '0 0 16px' }}>SCHEDULE</p>
          <h2 className="tsy-section-h2" style={{ fontFamily: "'Newsreader',serif", fontSize: 44, fontWeight: 500, margin: 0, color: '#33401F' }}>Your Practice, Your Time.</h2>
        </div>
      </Reveal>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
        {filterDefs.map((label) => (
          <button
            key={label}
            className="tsy-btn-small"
            onClick={() => onSetFilter(label)}
            style={{
              borderRadius: 100,
              padding: '10px 22px',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: "'Work Sans',sans-serif",
              ...(filter === label
                ? { background: '#556B2F', color: '#FBF7EE', border: '1px solid #556B2F' }
                : { background: 'none', color: '#33401F', border: '1px solid rgba(51,64,31,0.2)' }),
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {filtered.map((row, i) => {
          const s = statusMap[row.status];
          const disabled = row.status === 'full';
          return (
            <Reveal key={`${row.day}-${row.date}-${row.time}-${i}`} delay={Math.min(i, 4) * 70} y={24}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, background: '#fff', border: '1px solid rgba(51,64,31,0.10)', borderRadius: 16, padding: '22px 28px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center', minWidth: 56 }}>
                  <div style={{ fontSize: 11, letterSpacing: 1.5, color: '#8A7B4E', fontWeight: 600 }}>{row.day}</div>
                  <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, color: '#33401F' }}>{row.date}</div>
                </div>
                <div style={{ width: 1, height: 34, background: 'rgba(51,64,31,0.12)' }} className="tsy-hide-mobile"></div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: '#33401F' }}>{row.class}</div>
                  <div style={{ fontSize: 13, color: '#6B6A54' }}>{row.time} &middot; {row.level} &middot; {row.location}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ ...s.style, fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 100 }}>{s.label}</span>
                <button
                  disabled={disabled}
                  className="tsy-btn-small"
                  onClick={() => onBookSlot(row)}
                  style={{
                    borderRadius: 100,
                    padding: '10px 22px',
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "'Work Sans',sans-serif",
                    border: 'none',
                    ...(disabled
                      ? { background: 'rgba(51,64,31,0.08)', color: '#8A8A78', cursor: 'not-allowed' }
                      : { background: '#556B2F', color: '#FBF7EE', cursor: 'pointer' }),
                  }}
                >
                  {disabled ? 'Full' : 'Book Now'}
                </button>
              </div>
            </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
