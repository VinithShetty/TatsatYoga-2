/**
 * An ensō — the Zen brush circle from the logo — that draws itself in one
 * stroke, then breathes slowly (an 8s inhale/exhale). Decorative only.
 * Inside a `.reveal` block it waits until that block scrolls into view.
 */
export function Enso({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className={`enso ${className}`}>
      {/* Main stroke: an open circle, thick at the start, with a gap like a lifted brush. */}
      <path
        d="M118 15C164 21 190 62 183 106C175 154 128 186 81 178C35 170 9 124 18 80C24 50 45 28 72 18"
        pathLength={1}
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* A thinner trailing hair of the brush, slightly offset. */}
      <path
        d="M112 23C153 30 177 66 171 104C164 146 124 172 84 166C46 160 25 122 31 86"
        pathLength={1}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
