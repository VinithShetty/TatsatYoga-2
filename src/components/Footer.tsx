import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerNav, primaryNav, siteConfig, whatsappHref } from "@/lib/site-config";

export function Footer() {
  return (
    // The mobile tab bar is fixed over the bottom of the page, so the footer
    // (not <main>) carries the clearance — otherwise the copyright is hidden.
    <footer className="rounded-t-[28px] bg-primary text-chalk sm:rounded-t-[40px]">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:px-8 md:pt-12 md:pb-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_auto] md:items-start md:gap-12">
          <div className="flex items-center gap-4">
            {/* The logo is dark-on-transparent, so it sits on a white disc. */}
            <span className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-chalk">
              <Logo className="h-[4.5rem]" />
            </span>
            <div>
              <p className="font-display text-[1.375rem] font-semibold uppercase leading-tight tracking-[0.08em]">
                {siteConfig.tagline}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-chalk">
                Live online yoga with {siteConfig.teacherName}, 300-hour certified.
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[15px] sm:grid-cols-3">
            {[...primaryNav, footerNav[0]].map((item) => (
              <Link key={item.href} href={item.href} className="link-draw w-fit text-chalk">
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="lift inline-flex w-fit items-center rounded-sm bg-chalk px-5 py-3 font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-deep hover:bg-beige"
          >
            WhatsApp {siteConfig.whatsappDisplay}
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-chalk/25 pt-5 text-[13px] text-chalk">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All sessions online.
          </p>
          <p className="flex gap-5">
            {footerNav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="link-draw">
                {item.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
