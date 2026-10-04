"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { footerNav, primaryNav, whatsappHref } from "@/lib/site-config";
import { Logo } from "@/components/Logo";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.85-1.27A9.5 9.5 0 1 0 12 2.5Zm5.54 13.4c-.23.66-1.35 1.26-1.87 1.32-.48.06-1.08.09-1.75-.11a11 11 0 0 1-1.98-.74 8.9 8.9 0 0 1-3.5-3.1 4.1 4.1 0 0 1-.84-2.16c0-.68.36-1.02.5-1.17.14-.15.3-.19.4-.19h.29c.1 0 .23-.02.35.28.14.35.48 1.2.52 1.29.04.09.07.2.01.33-.06.13-.09.2-.18.31-.09.11-.19.24-.27.32-.09.09-.18.19-.08.37.1.18.44.76.96 1.23.66.6 1.23.8 1.4.9.18.09.28.08.39-.04.1-.12.44-.5.56-.68.11-.17.23-.14.38-.09.16.06 1 .48 1.17.56.17.09.28.13.32.2.04.08.04.44-.18 1.1Z"
      />
    </svg>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
    </svg>
  );
}

function ClassesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M4 9.5h16" />
    </svg>
  );
}

function PracticeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" strokeDasharray="35 8" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AboutIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5.2 20c0-4 3-6.5 6.8-6.5s6.8 2.5 6.8 6.5" />
    </svg>
  );
}

function ReviewsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="2.5" />
      <path d="M8 17 6 21 11 17" />
    </svg>
  );
}

function TrialIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="6" width="16" height="14" rx="2.5" />
      <path d="M4 10.5h16" />
      <path d="M12 13.5v4.2M9.9 15.6h4.2" />
    </svg>
  );
}

function MenuIcon({ className = "", open = false }: { className?: string; open?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className={className} aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function FaqIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.4a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.7" />
      <path d="M12 16.9h.01" />
    </svg>
  );
}

const mobileIcons: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  "/": HomeIcon,
  "/classes": ClassesIcon,
  "/faq": FaqIcon,
  "/practice": PracticeIcon,
  "/about": AboutIcon,
  "/reviews": ReviewsIcon,
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const inMenuOnly = ["/about", "/contact"];
  const mobileTabs = primaryNav.filter((item) => !inMenuOnly.includes(item.href));
  const menuLinks = [
    ...primaryNav.filter((item) => inMenuOnly.includes(item.href)),
    ...footerNav,
  ];
  // Remember which path the menu was opened on; navigating anywhere closes it.
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const menuOpen = menuOpenOn === pathname;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-chalk"
      >
        Skip to content
      </a>

      {/* Desktop / tablet top bar */}
      <header className="sticky top-0 z-40 hidden border-b border-ink/10 bg-chalk/95 backdrop-blur md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-2 lg:px-8">
          <Link href="/" aria-label="Tat Sat Yoga — home">
            <Logo eager className="h-20" />
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-5 lg:gap-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={`whitespace-nowrap border-b py-1 font-display text-[15px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isActive(pathname, item.href)
                    ? "border-primary text-primary"
                    : "border-transparent text-ink hover:border-ink/40"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-none items-center gap-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 whitespace-nowrap rounded-sm border border-ink/20 px-3 py-2.5 font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-primary hover:text-primary lg:px-3.5"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <Link
              href="/classes"
              className="lift whitespace-nowrap rounded-sm bg-primary px-5 py-2.5 font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-chalk hover:bg-primary-hover hover:shadow-[0_10px_24px_rgba(44,69,53,0.28)] lg:px-6"
            >
              <span className="hidden lg:inline">Book Your </span>Free Trial
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile top bar: wordmark + menu + WhatsApp */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-chalk/95 backdrop-blur md:hidden">
        <div className="flex items-center justify-between px-5 py-2">
          <Link href="/" aria-label="Tat Sat Yoga — home">
            <Logo eager className="h-14" />
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-deep/15 text-ink-soft"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpenOn(menuOpen ? null : pathname)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-deep/15 text-ink-soft"
            >
              <MenuIcon className="h-4.5 w-4.5" open={menuOpen} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-ink/10 bg-chalk px-5 py-4">
            <ul className="space-y-3">
              {menuLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-display text-[16px] font-semibold uppercase tracking-[0.14em] text-ink hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Mobile bottom tab bar, with a raised Free Trial action in the centre */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 items-end border-t border-ink/10 bg-chalk/95 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden"
      >
        {mobileTabs.slice(0, 2).map((item) => {
          const Icon = mobileIcons[item.href] ?? HomeIcon;
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center gap-1 py-1 text-[11px] ${
                active ? "text-primary font-medium" : "text-ink-soft"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}

        <Link
          href="/classes"
          className="flex flex-col items-center gap-1"
          aria-label="Book your free trial"
        >
          <span className="-mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-chalk shadow-lg ring-4 ring-chalk">
            <TrialIcon className="h-6 w-6" />
          </span>
          <span className="text-[11px] font-medium text-primary">Free Trial</span>
        </Link>

        {mobileTabs.slice(2).map((item) => {
          const Icon = mobileIcons[item.href] ?? HomeIcon;
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center gap-1 py-1 text-[11px] ${
                active ? "text-primary font-medium" : "text-ink-soft"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
