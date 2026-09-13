'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** stagger delay in ms */
  delay?: number;
  /** vertical travel distance in px */
  y?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Gentle fade-up-on-scroll wrapper. Uses IntersectionObserver (fires once),
 * soft 1s ease, and fully disables itself under prefers-reduced-motion.
 * Pass-through style/className so it can stand in for layout boxes
 * (flex/grid children) without changing the design.
 */
export default function Reveal({ children, delay = 0, y = 28, style, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mergedStyle = {
    ...style,
    transitionDelay: `${delay}ms`,
    '--tsy-y': `${y}px`,
  } as React.CSSProperties;

  return (
    <div ref={ref} className={`tsy-reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`} style={mergedStyle}>
      {children}
    </div>
  );
}
