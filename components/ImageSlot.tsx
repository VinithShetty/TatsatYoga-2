import React from 'react';

interface ImageSlotProps {
  id: string;
  shape?: 'rect' | 'circle';
  placeholder?: string;
}

/**
 * Production replacement for the editor-only <image-slot> web component.
 * Renders the same empty-state look (soft fill, dashed ring, icon + caption)
 * so visual fidelity is preserved without the design-tool runtime.
 */
export default function ImageSlot({ id, shape = 'rect', placeholder = 'Drop an image' }: ImageSlotProps) {
  const isCircle = shape === 'circle';
  return (
    <div
      id={id}
      className="tsy-slot"
      role="img"
      aria-label={placeholder}
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '3/2',
        fontSize: 13,
        lineHeight: 1.3,
        color: 'inherit',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          background: 'rgba(127,127,127,.08)',
          borderRadius: isCircle ? '50%' : 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            textAlign: 'center',
            padding: 12,
            cursor: 'default',
            userSelect: 'none',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.45 }}
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <div style={{ maxWidth: '90%', fontWeight: 500, letterSpacing: '.01em', opacity: 0.75 }}>{placeholder}</div>
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            border: '1.5px dashed currentColor',
            opacity: 0.35,
            borderRadius: isCircle ? '50%' : 0,
          }}
        />
      </div>
    </div>
  );
}
