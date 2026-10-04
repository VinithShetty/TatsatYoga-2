"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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

type NavItem = (typeof primaryNav)[number];

function TabLink({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = mobileIcons[item.href] ?? HomeIcon;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`relative z-10 flex flex-col items-center gap-1 py-1.5 text-[11px] transition-colors duration-300 ${
        active ? "font-semibold text-deep" : "font-medium text-ink"
      }`}
    >
      <Icon className={`h-5 w-5 transition-transform duration-500 ${active ? "-translate-y-px scale-110" : ""}`} />
      {item.label}
    </Link>
  );
}

/**
 * Desktop links with a frosted-glass pill that glides to whichever link is
 * hovered or focused, and settles back on the current page. Positioning is
 * written straight to the pill's style (no re-render per mouse move).
 */
function DesktopLinks({ pathname }: { pathname: string }) {
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const placed = useRef(false);

  const moveTo = useCallback((el: HTMLElement | null, instant = false) => {
    const pill = pillRef.current;
    if (!pill) return;
    if (!el) {
      pill.style.opacity = "0";
      return;
    }
    const jump = instant || !placed.current;
    if (jump) pill.style.transition = "none";
    pill.style.width = `${el.offsetWidth}px`;
    pill.style.transform = `translateX(${el.offsetLeft}px)`;
    pill.style.opacity = "1";
    if (jump) {
      void pill.offsetWidth; // commit the jump before re-enabling the glide
      pill.style.transition = "";
    }
    placed.current = true;
  }, []);

  const current = useCallback(
    () => navRef.current?.querySelector<HTMLElement>('a[aria-current="page"]') ?? null,
    [],
  );

  useLayoutEffect(() => {
    moveTo(current());
  }, [pathname, moveTo, current]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const settle = () => moveTo(current(), true);
    const ro = new ResizeObserver(settle);
    ro.observe(nav);
    document.fonts?.ready.then(settle);
    return () => ro.disconnect();
  }, [moveTo, current]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      onMouseLeave={() => moveTo(current())}
      className="relative flex items-center gap-1 lg:gap-2"
    >
      <span
        ref={pillRef}
        aria-hidden="true"
        className="glass-pill pointer-events-none absolute top-0 left-0 h-full rounded-md opacity-0"
      />
      {primaryNav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            onMouseEnter={(e) => moveTo(e.currentTarget)}
            onFocus={(e) => moveTo(e.currentTarget)}
            onBlur={() => moveTo(current())}
            className={`relative z-10 whitespace-nowrap rounded-md px-3 py-2 font-display text-[15px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
              active ? "text-deep" : "text-ink hover:text-deep"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
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
  const slots = [mobileTabs[0], mobileTabs[1], "trial" as const, mobileTabs[2], mobileTabs[3]];
  const activeSlot = slots.findIndex((item) => item !== "trial" && isActive(pathname, item.href));

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-chalk"
      >
        Skip to content
      </a>

      {/* Desktop / tablet top bar */}
      <header
        className="nav-elevate sticky top-0 z-40 hidden border-b border-ink/10 bg-chalk/85 backdrop-blur-xl backdrop-saturate-150 md:block"
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="flex items-center justify-between gap-5 px-8 py-1.5 lg:px-12">
          <Link href="/" aria-label="Tat Sat Yoga — home" className="transition-opacity hover:opacity-80">
            <Logo eager className="h-16" />
          </Link>
          <DesktopLinks pathname={pathname} />
          <div className="flex flex-none items-center gap-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="lift flex items-center gap-2 whitespace-nowrap rounded-sm border border-ink/20 px-3 py-2.5 font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-primary hover:text-primary lg:px-3.5"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <Link
              href="/classes"
              className="lift sheen whitespace-nowrap rounded-sm bg-primary px-5 py-2.5 font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-chalk hover:bg-primary-hover hover:shadow-[0_10px_24px_rgba(44,69,53,0.28)] lg:px-6"
            >
              <span className="hidden lg:inline">Book Your </span>Free Trial
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile top bar: wordmark + menu + WhatsApp */}
      <header
        className="nav-elevate sticky top-0 z-40 border-b border-ink/10 bg-chalk/85 backdrop-blur-xl backdrop-saturate-150 md:hidden"
        style={{ viewTransitionName: "site-header-mobile" }}
      >
        <div className="flex items-center justify-between px-5 py-1.5">
          <Link href="/" aria-label="Tat Sat Yoga — home">
            <Logo eager className="h-12" />
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
          <div id="mobile-menu" className="menu-pop border-t border-ink/10 bg-chalk px-5 py-3">
            <ul className="divide-y divide-ink/10">
              {menuLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-3 font-display text-[16px] font-semibold uppercase tracking-[0.14em] text-ink hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Mobile bottom tab bar: floating glass, a bubble that glides to the
          active tab, and a raised Free Trial action that breathes. */}
      <nav
        aria-label="Primary"
        style={{ viewTransitionName: "site-tabbar" }}
        className="glass-bar fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 grid grid-cols-5 items-end rounded-[22px] p-1.5 md:hidden"
      >
        <span
          aria-hidden="true"
          className="glass-bubble pointer-events-none absolute top-1.5 bottom-1.5 left-1.5 w-[calc((100%-0.75rem)/5)] rounded-[16px]"
          style={{
            transform: `translateX(${Math.max(activeSlot, 0) * 100}%)`,
            opacity: activeSlot < 0 ? 0 : 1,
          }}
        />
        {slots.map((item, slot) =>
          item === "trial" ? (
            <Link
              key="trial"
              href="/classes"
              className="relative z-10 flex flex-col items-center gap-1 pb-1"
              aria-label="Book your free trial"
            >
              <span className="breathe-btn relative -mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-chalk shadow-[0_8px_22px_rgba(44,69,53,0.35)] ring-4 ring-chalk/90">
                <span aria-hidden="true" className="breath-halo absolute inset-0 rounded-full" />
                <TrialIcon className="relative h-6 w-6" />
              </span>
              <span className="text-[11px] font-semibold text-primary-hover">Free Trial</span>
            </Link>
          ) : (
            <TabLink key={item.href} item={item} active={slot === activeSlot} />
          ),
        )}
      </nav>
    </>
  );
}
