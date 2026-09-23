import Link from "next/link";
import { LogoBadge } from "@/components/Logo";
import { footerNav, primaryNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-deep/10 bg-beige">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <LogoBadge className="mb-4 h-36 w-36 text-primary" />
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
              {siteConfig.tagline} — online yoga with {siteConfig.teacherName},
              a 300-hour certified teacher.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Explore
              </p>
              <ul className="space-y-2">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-ink-soft hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Info
              </p>
              <ul className="space-y-2">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-ink-soft hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-ink-faint">
          © {new Date().getFullYear()} {siteConfig.name}. All sessions online.
        </p>
      </div>
    </footer>
  );
}
