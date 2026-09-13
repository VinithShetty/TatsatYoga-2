'use client';

import React from 'react';
import { bookingDatesData, bookingTimesData, classesData } from '@/lib/data';

export interface BookingState {
  open: boolean;
  step: number;
  success: boolean;
  loading: boolean;
  cls: string | null;
  date: string | null;
  time: string | null;
  name: string;
  email: string;
  phone: string;
  errors: { name?: boolean; email?: boolean };
}

interface BookingModalProps {
  booking: BookingState;
  onClose: () => void;
  onSelectClass: (name: string) => void;
  onSelectDate: (d: string) => void;
  onSelectTime: (t: string) => void;
  onBack: () => void;
  onNext: () => void;
  onName: (v: string) => void;
  onEmail: (v: string) => void;
  onPhone: (v: string) => void;
}

export default function BookingModal({
  booking: b,
  onClose,
  onSelectClass,
  onSelectDate,
  onSelectTime,
  onBack,
  onNext,
  onName,
  onEmail,
  onPhone,
}: BookingModalProps) {
  if (!b.open) return null;

  const nextLabel = b.step === 4 ? (b.loading ? 'Booking…' : 'Confirm Booking') : 'Continue';

  return (
    <div
      className="tsy-modal-fade"
      style={{ position: 'fixed', inset: 0, background: 'rgba(51,64,31,0.45)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Book a class"
    >
      <div
        className="tsy-modal-pop"
        style={{ background: '#FBF7EE', borderRadius: 20, maxWidth: 480, width: '100%', maxHeight: '88vh', overflowY: 'auto', padding: '40px 36px', position: 'relative' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="tsy-icon-btn" style={{ position: 'absolute', top: 20, right: 20, width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'rgba(51,64,31,0.06)', cursor: 'pointer', fontSize: 16, color: '#33401F' }}>
          &times;
        </button>

        {b.success ? (
          <div style={{ textAlign: 'center', padding: '30px 0 10px' }}>
            <svg width="56" height="56" viewBox="0 0 56 56" style={{ margin: '0 auto 24px', display: 'block' }} aria-hidden="true">
              <circle cx="28" cy="28" r="26" fill="none" stroke="#556B2F" strokeWidth="1.6"></circle>
              <path d="M17 29 L25 37 L40 20" fill="none" stroke="#556B2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 30, fontWeight: 500, margin: '0 0 14px', color: '#33401F' }}>You&rsquo;re booked.</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5B5A45', margin: '0 0 8px' }}>
              Your place for <strong>{b.cls}</strong> on {b.date} at {b.time} has been reserved.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5B5A45', margin: '0 0 30px' }}>We look forward to practicing with you.</p>
            <button onClick={onClose} className="tsy-btn-primary" style={{ border: 'none', background: '#556B2F', color: '#FBF7EE', padding: '14px 32px', borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif" }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', gap: 6, marginBottom: 30 }}>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} style={{ background: n <= b.step ? '#556B2F' : 'rgba(51,64,31,0.14)', height: 3, flex: 1, borderRadius: 2 }}></div>
              ))}
            </div>

            {b.step === 1 && (
              <>
                <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 8px' }}>STEP 1 OF 4</p>
                <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 26, fontWeight: 500, margin: '0 0 22px', color: '#33401F' }}>Choose a class</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 26 }}>
                  {classesData.map((c) => (
                    <button
                      key={c.slotId}
                      className={`tsy-pick${b.cls === c.name ? ' is-selected' : ''}`}
                      onClick={() => onSelectClass(c.name)}
                      style={{
                        textAlign: 'left',
                        borderRadius: 12,
                        padding: '14px 18px',
                        cursor: 'pointer',
                        fontFamily: "'Work Sans',sans-serif",
                        fontSize: 14.5,
                        ...(b.cls === c.name
                          ? { background: '#556B2F', color: '#FBF7EE', border: '1px solid #556B2F' }
                          : { background: '#fff', color: '#33401F', border: '1px solid rgba(51,64,31,0.15)' }),
                      }}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </>
            )}

            {b.step === 2 && (
              <>
                <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 8px' }}>STEP 2 OF 4</p>
                <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 26, fontWeight: 500, margin: '0 0 22px', color: '#33401F' }}>Choose a date</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 26 }}>
                  {bookingDatesData.map((d) => (
                    <button
                      key={d}
                      className={`tsy-pick${b.date === d ? ' is-selected' : ''}`}
                      onClick={() => onSelectDate(d)}
                      style={{
                        textAlign: 'left',
                        borderRadius: 12,
                        padding: '14px 18px',
                        cursor: 'pointer',
                        fontFamily: "'Work Sans',sans-serif",
                        fontSize: 14.5,
                        ...(b.date === d
                          ? { background: '#556B2F', color: '#FBF7EE', border: '1px solid #556B2F' }
                          : { background: '#fff', color: '#33401F', border: '1px solid rgba(51,64,31,0.15)' }),
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </>
            )}

            {b.step === 3 && (
              <>
                <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 8px' }}>STEP 3 OF 4</p>
                <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 26, fontWeight: 500, margin: '0 0 22px', color: '#33401F' }}>Choose a time</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 26 }}>
                  {bookingTimesData.map((t) => (
                    <button
                      key={t}
                      className={`tsy-pick${b.time === t ? ' is-selected' : ''}`}
                      onClick={() => onSelectTime(t)}
                      style={{
                        textAlign: 'left',
                        borderRadius: 12,
                        padding: '14px 18px',
                        cursor: 'pointer',
                        fontFamily: "'Work Sans',sans-serif",
                        fontSize: 14.5,
                        ...(b.time === t
                          ? { background: '#556B2F', color: '#FBF7EE', border: '1px solid #556B2F' }
                          : { background: '#fff', color: '#33401F', border: '1px solid rgba(51,64,31,0.15)' }),
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}

            {b.step === 4 && (
              <>
                <p style={{ fontSize: 12, letterSpacing: 2, color: '#8A7B4E', fontWeight: 600, margin: '0 0 8px' }}>STEP 4 OF 4</p>
                <h3 style={{ fontFamily: "'Newsreader',serif", fontSize: 26, fontWeight: 500, margin: '0 0 6px', color: '#33401F' }}>Your details</h3>
                <p style={{ fontSize: 13.5, color: '#8A7B4E', margin: '0 0 22px' }}>
                  {b.cls} &middot; {b.date} &middot; {b.time}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 8 }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Full name"
                      aria-label="Full name"
                      value={b.name}
                      onChange={(e) => onName(e.target.value)}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: `1px solid ${b.errors.name ? '#A14747' : 'rgba(51,64,31,0.18)'}`, fontSize: 14.5, fontFamily: "'Work Sans',sans-serif", background: '#fff', color: '#33401F' }}
                    />
                    {b.errors.name && <p style={{ color: '#A14747', fontSize: 12.5, margin: '6px 0 0' }}>Please enter your name.</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      value={b.email}
                      onChange={(e) => onEmail(e.target.value)}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: `1px solid ${b.errors.email ? '#A14747' : 'rgba(51,64,31,0.18)'}`, fontSize: 14.5, fontFamily: "'Work Sans',sans-serif", background: '#fff', color: '#33401F' }}
                    />
                    {b.errors.email && <p style={{ color: '#A14747', fontSize: 12.5, margin: '6px 0 0' }}>Please enter a valid email.</p>}
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    aria-label="Phone (optional)"
                    value={b.phone}
                    onChange={(e) => onPhone(e.target.value)}
                    style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1px solid rgba(51,64,31,0.18)', fontSize: 14.5, fontFamily: "'Work Sans',sans-serif", background: '#fff', color: '#33401F', marginBottom: 18 }}
                  />
                </div>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              {b.step > 1 ? (
                <button onClick={onBack} className="tsy-back" style={{ border: 'none', background: 'none', color: '#556B2F', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif", padding: '10px 4px' }}>
                  &larr; Back
                </button>
              ) : (
                <span></span>
              )}
              <button
                onClick={onNext}
                disabled={b.loading}
                className="tsy-btn-primary"
                style={{ border: 'none', background: '#556B2F', color: '#FBF7EE', padding: '13px 28px', borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: "'Work Sans',sans-serif" }}
              >
                {nextLabel}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
