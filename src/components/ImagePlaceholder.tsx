export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-deep/15 bg-parchment text-center ${className}`}
    >
      <div className="px-6 py-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mx-auto mb-3 h-7 w-7 text-ink-faint"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="m4 18 5-5 4 4 3-3 4 4" />
        </svg>
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-ink-faint">
          {label}
        </p>
      </div>
    </div>
  );
}
