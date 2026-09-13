'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ScheduleRow } from './data';

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

interface BookingContextValue {
  booking: BookingState;
  openBooking: () => void;
  openBookingForClass: (name: string) => void;
  openBookingForSlot: (row: ScheduleRow) => void;
  closeBooking: () => void;
  bookingBack: () => void;
  bookingNext: () => void;
  setBookingField: (field: 'cls' | 'date' | 'time' | 'name' | 'email' | 'phone', value: string) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

const initialBooking: BookingState = {
  open: false,
  step: 1,
  success: false,
  loading: false,
  cls: null,
  date: null,
  time: null,
  name: '',
  email: '',
  phone: '',
  errors: {},
};

function freshBooking(step: BookingState['step'], partial: Partial<BookingState> = {}): BookingState {
  return { ...initialBooking, open: true, step, ...partial };
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [booking, setBooking] = useState<BookingState>(initialBooking);

  const openBooking = useCallback(() => {
    setBooking(freshBooking(1));
  }, []);

  const openBookingForClass = useCallback((name: string) => {
    setBooking(freshBooking(2, { cls: name }));
  }, []);

  const openBookingForSlot = useCallback((row: ScheduleRow) => {
    if (row.status === 'full') return;
    setBooking(freshBooking(4, { cls: row.class, date: `${row.day} ${row.date}`, time: row.time }));
  }, []);

  const closeBooking = useCallback(() => {
    setBooking((s) => ({ ...s, open: false }));
  }, []);

  const bookingBack = useCallback(() => {
    setBooking((s) => ({ ...s, step: Math.max(1, s.step - 1) }));
  }, []);

  const bookingNext = useCallback(() => {
    setBooking((s) => {
      if (s.step === 1) {
        if (!s.cls) return s;
        return { ...s, step: 2 };
      }
      if (s.step === 2) {
        if (!s.date) return s;
        return { ...s, step: 3 };
      }
      if (s.step === 3) {
        if (!s.time) return s;
        return { ...s, step: 4 };
      }
      if (s.step === 4) {
        const errors: { name?: boolean; email?: boolean } = {};
        if (!s.name.trim()) errors.name = true;
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.email)) errors.email = true;
        if (Object.keys(errors).length) return { ...s, errors };
        window.setTimeout(() => {
          setBooking((prev) => ({ ...prev, loading: false, success: true }));
        }, 900);
        return { ...s, loading: true, errors: {} };
      }
      return s;
    });
  }, []);

  const setBookingField = useCallback(
    (field: 'cls' | 'date' | 'time' | 'name' | 'email' | 'phone', value: string) => {
      setBooking((s) => ({ ...s, [field]: value }));
    },
    []
  );

  const value = useMemo(
    () => ({ booking, openBooking, openBookingForClass, openBookingForSlot, closeBooking, bookingBack, bookingNext, setBookingField }),
    [booking, openBooking, openBookingForClass, openBookingForSlot, closeBooking, bookingBack, bookingNext, setBookingField]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
