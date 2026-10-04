import { Button } from "@/components/Button";
import type { Testimonial } from "@/lib/site-config";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

function Attribution({ t }: { t: Testimonial }) {
  if (!t.name) return null;
  return (
    <div className="mt-6 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-beige font-display text-[17px] font-semibold text-deep"
      >
        {initials(t.name)}
      </span>
      <p className="text-sm leading-snug text-ink">
        <span className="block font-semibold">{t.name}</span>
        {t.detail && <span className="text-ink-faint">{t.detail}</span>}
      </p>
    </div>
  );
}

function VideoTestimonial({ t }: { t: Testimonial }) {
  const v = t.video ?? {};
    return (
    <figure className="flex h-full flex-col">
      <div className="overflow-hidden rounded-md bg-deep">
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
  return (
    <figure className="flex h-full flex-col rounded-md bg-chalk p-7 shadow-[0_8px_30px_rgba(20,23,20,0.06)] sm:p-8">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-primary" fill="currentColor" aria-hidden="true">
        <path d="M9.6 6C6.5 7.3 4.5 9.9 4.5 13.4V18h5.2v-5H7.2c.1-2.1 1.3-3.6 3.3-4.5L9.6 6Zm9 0c-3.1 1.3-5.1 3.9-5.1 7.4V18h5.2v-5h-2.5c.1-2.1 1.3-3.6 3.3-4.5L18.6 6Z" />
      </svg>
      <blockquote className="mt-4 flex-1 font-display text-[1.2rem] font-medium italic leading-[1.6] text-ink">
        {t.quote}
      </blockquote>
      <figcaption>
        <Attribution t={t} />
      </figcaption>
    </figure>
  );
}

const hasVideo = (t: Testimonial) => Boolean(t.video?.src || t.video?.youtubeId);

/**
 * Shows whichever testimonials exist. Until the first ones arrive it renders a
 * single compact note instead of a wall of empty "coming soon" boxes.
 */
export function Testimonials({
  video,
  written,
}: {
  video: Testimonial;
  written: Testimonial[];
}) {
  const quotes = written.filter((t) => t.quote);
  const showVideo = hasVideo(video);

  if (!showVideo && quotes.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-lg border border-dashed border-ink/20 bg-chalk px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-9 sm:text-left">
        <div>
          <p className="font-display text-[1.375rem] font-semibold italic leading-snug text-ink">
            Student stories are on their way.
          </p>
          <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Every review here will be real. Until the first ones arrive, your first
            class is free — so you can judge for yourself.
          </p>
        </div>
        <Button href="/classes" variant="primary" className="flex-none" ariaLabel="Try a free class and judge for yourself">
          Try a Free Class
        </Button>
      </div>
    );
  }

  if (!showVideo) {
    return (
      <div className="stagger grid gap-6 md:grid-cols-2">
        {quotes.map((t, i) => (
          <WrittenTestimonial key={t.name || i} t={t} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${quotes.length ? "md:grid-cols-[0.9fr_1.1fr]" : "mx-auto max-w-sm"}`}>
      <VideoTestimonial t={video} />
      {quotes.length > 0 && (
        <div className="stagger grid gap-6">
          {quotes.map((t, i) => (
            <WrittenTestimonial key={t.name || i} t={t} />
          ))}
        </div>
      )}
    </div>
  );
}
