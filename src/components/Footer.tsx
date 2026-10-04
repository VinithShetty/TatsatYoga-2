import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerNav, primaryNav, siteConfig, whatsappHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer>
      <div className="rounded-t-[28px] bg-primary text-chalk sm:rounded-t-[40px]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="flex flex-col items-start">
              {/* The logo is dark-on-transparent, so it sits on a white disc. */}
              <span className="flex h-36 w-36 items-center justify-center rounded-full bg-chalk">
                <Logo className="h-32" />
              </span>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-chalk">
                {siteConfig.tagline} — online yoga with {siteConfig.teacherName}, a
                300-hour certified teacher.
              </p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[15px] font-semibold text-chalk underline decoration-chalk/50 underline-offset-4 hover:decoration-chalk"
              >
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
            </div>

            <div className="flex gap-16">
              <div>
                <p className="mb-4 font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-chalk">
                  Explore
                </p>
                <ul className="space-y-2.5">
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[15px] text-chalk hover:underline hover:underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-chalk">
                  Info
                </p>
                <ul className="space-y-2.5">
                  {footerNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[15px] text-chalk hover:underline hover:underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-chalk/25 pt-6 text-[13px] text-chalk">
            © {new Date().getFullYear()} {siteConfig.name}. All sessions online.
          </p>
        </div>
      </div>
    </footer>
  );
}
