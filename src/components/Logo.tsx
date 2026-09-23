/**
 * Vector rebuild of the Tat Sat Yoga mark.
 *
 * The supplied artwork was a raster PNG with soft, AI-generated edges that blur
 * at any size and turn to mush below ~120px. These are hand-drawn paths, so they
 * stay crisp at every size and print, and recolour from currentColor.
 *
 * LogoMark   — ensō + seated figure. Use small: nav, favicon, avatars.
 * LogoLockup — mark + wordmark, horizontal. Use in the header.
 * LogoBadge  — the full circular emblem. Use large: footer, share images.
 */

function Enso({ opacity = 0.55 }: { opacity?: number }) {
  return (
    <circle
      cx="212"
      cy="148"
      r="86"
      fill="none"
      stroke="currentColor"
      strokeWidth="13"
      strokeLinecap="round"
      strokeDasharray="452 88"
      strokeOpacity={opacity}
      transform="rotate(128 212 148)"
    />
  );
}

function Figure() {
  return (
    <g fill="currentColor">
      {/* raised arms sweeping up, hands meeting overhead */}
      <path
        d="M166,176 C163,142 176,106 200,86 C224,106 237,142 234,176"
        fill="none"
        stroke="currentColor"
        strokeWidth="12.5"
        strokeLinecap="round"
      />
      {/* head, sitting clear of both the arms and the shoulders */}
      <circle cx="200" cy="152" r="15.5" />
      {/* shoulders, torso and crossed legs */}
      <path d="M200,172 C214,172 225,181 229,194 C244,201 254,210 252,219 C252,226 238,229 200,229 C162,229 148,226 148,219 C146,210 156,201 171,194 C175,181 186,172 200,172 Z" />
    </g>
  );
}

function Sprig() {
  const leaves: [number, number, number][] = [
    [128, 186, -38],
    [112, 166, 28],
    [140, 152, -34],
    [120, 130, 32],
    [150, 118, -30],
    [132, 98, 36],
    [158, 86, -26],
  ];
  return (
    <g>
      <path
        d="M106,214 C100,176 112,134 140,102 C148,93 156,86 164,80"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      {leaves.map(([cx, cy, rot]) => (
        <ellipse
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          rx="15"
          ry="7"
          fill="currentColor"
          fillOpacity="0.62"
          transform={`rotate(${rot} ${cx} ${cy})`}
        />
      ))}
    </g>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="118 54 190 190"
      className={className}
      role="img"
      aria-label="Tat Sat Yoga"
    >
      <Enso opacity={0.45} />
      <Figure />
    </svg>
  );
}

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-auto shrink-0 text-primary" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-semibold tracking-[-0.01em] text-primary">
          tat sat
        </span>
        <span className="mt-[3px] text-[8.5px] font-medium uppercase tracking-[0.34em] text-gold">
          Yoga
        </span>
      </span>
    </span>
  );
}

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Tat Sat Yoga — Move. Breathe. Be."
    >
      <defs>
        <path
          id="tsy-arc"
          d="M 78,262 A 128,128 0 0 0 322,262"
          fill="none"
        />
      </defs>

      {/* enclosing hairline */}
      <circle
        cx="200"
        cy="200"
        r="182"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.4"
      />

      <Enso />
      <Sprig />

      {/* gold seeds */}
      <g fill="var(--color-gold)">
        <circle cx="157" cy="96" r="3.6" />
        <circle cx="104" cy="132" r="3.2" />
        <circle cx="130" cy="72" r="2.8" />
        <circle cx="122" cy="206" r="3.2" />
      </g>

      <Figure />

      <text
        x="200"
        y="288"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-display), Georgia, serif"
        fontSize="62"
        fontWeight="600"
        letterSpacing="-1"
      >
        tat sat
      </text>

      <g stroke="var(--color-gold)" strokeWidth="1.2" strokeOpacity="0.8">
        <line x1="120" y1="312" x2="158" y2="312" />
        <line x1="242" y1="312" x2="280" y2="312" />
      </g>
      <g fill="var(--color-gold)">
        <circle cx="115" cy="312" r="2.2" />
        <circle cx="285" cy="312" r="2.2" />
      </g>

      <text
        x="200"
        y="318"
        textAnchor="middle"
        fill="var(--color-gold)"
        fontFamily="var(--font-body), sans-serif"
        fontSize="19"
        fontWeight="500"
        letterSpacing="7"
      >
        YOGA
      </text>

      <text
        fill="currentColor"
        fillOpacity="0.75"
        fontFamily="var(--font-body), sans-serif"
        fontSize="13"
        fontWeight="500"
        letterSpacing="3.4"
      >
        <textPath href="#tsy-arc" startOffset="50%" textAnchor="middle">
          MOVE. BREATHE. BE.
        </textPath>
      </text>
    </svg>
  );
}
