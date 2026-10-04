import type { Testimonial } from "@/lib/site-config";

function Attribution({ t }: { t: Testimonial }) {
  if (!t.name) return null;
  return (
    <p className="mt-5 text-sm text-ink">
      <span className="font-medium">{t.name}</span>
      {t.detail && <span className="text-ink-faint"> · {t.detail}</span>}
    </p>
  );
}

function AwaitingSlot({ kind }: { kind: "video" | "written" }) {
  return (
    <div className="flex h-full min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-deep/20 bg-parchment p-8 text-center">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
        {kind === "video" ? "Video testimonial" : "Student testimonial"}
      </span>
      <span className="mt-2 text-sm text-ink-faint">Coming soon</span>
    </div>
  );
}

function VideoTestimonial({ t }: { t: Testimonial }) {
  const v = t.video ?? {};
  if (!v.src && !v.youtubeId) return <AwaitingSlot kind="video" />;
  return (
    <figure className="flex h-full flex-col">
      <div className="overflow-hidden rounded-lg bg-deep">
        {v.youtubeId ? (
          <iframe
            className="aspect-[9/16] w-full sm:aspect-[4/5]"
            src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
            title={`Video testimonial${t.name ? ` from ${t.name}` : ""}`}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
          />
        ) : (
          <video
            className="aspect-[4/5] w-full object-cover"
            src={v.src}
            poster={v.poster}
            controls
            preload="metadata"
            playsInline
          />
        )}
      </div>
      <figcaption>
        <Attribution t={t} />
      </figcaption>
    </figure>
  );
}

function WrittenTestimonial({ t }: { t: Testimonial }) {
  if (!t.quote) return <AwaitingSlot kind="written" />;
  return (
    <figure className="flex h-full flex-col rounded-lg border border-deep/10 bg-chalk p-7">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="currentColor" aria-hidden="true">
        <path d="M9.6 6C6.5 7.3 4.5 9.9 4.5 13.4V18h5.2v-5H7.2c.1-2.1 1.3-3.6 3.3-4.5L9.6 6Zm9 0c-3.1 1.3-5.1 3.9-5.1 7.4V18h5.2v-5h-2.5c.1-2.1 1.3-3.6 3.3-4.5L18.6 6Z" />
      </svg>
      <blockquote className="mt-4 flex-1 font-display text-[1.15rem] font-light italic leading-[1.6] text-ink">
        {t.quote}
      </blockquote>
      <figcaption>
        <Attribution t={t} />
      </figcaption>
    </figure>
  );
}

export function Testimonials({
  video,
  written,
}: {
  video: Testimonial;
  written: Testimonial[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
      <VideoTestimonial t={video} />
      <div className="grid gap-6">
        {written.map((t, i) => (
          <WrittenTestimonial key={t.name || i} t={t} />
        ))}
      </div>
    </div>
  );
}
