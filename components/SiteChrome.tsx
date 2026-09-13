'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import { BookingProvider, useBooking } from '@/lib/booking-context';

function ChromeShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    booking,
    openBooking,
    closeBooking,
    bookingBack,
    bookingNext,
    setBookingField,
  } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openBookingMobile = () => {
    setMobileOpen(false);
    openBooking();
  };

  return (
    <div style={{ fontFamily: "'Work Sans',sans-serif", color: '#33401F', background: '#FBF7EE', width: '100%', overflowX: 'hidden' }}>
      <Header
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((v) => !v)}
        onOpenBooking={openBooking}
        onOpenBookingMobile={openBookingMobile}
      />
      <main>{children}</main>
      <Footer />
      <BookingModal
        booking={booking}
        onClose={closeBooking}
        onSelectClass={(name) => setBookingField('cls', name)}
        onSelectDate={(d) => setBookingField('date', d)}
        onSelectTime={(t) => setBookingField('time', t)}
        onBack={bookingBack}
        onNext={bookingNext}
        onName={(v) => setBookingField('name', v)}
        onEmail={(v) => setBookingField('email', v)}
        onPhone={(v) => setBookingField('phone', v)}
      />
    </div>
  );
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <ChromeShell>{children}</ChromeShell>
    </BookingProvider>
  );
}
