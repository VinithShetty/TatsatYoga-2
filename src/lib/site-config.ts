/**
 * Canonical origin used for OG images, the sitemap and structured data.
 * Must match wherever the site is actually served, or share previews break.
 *
 * 1. NEXT_PUBLIC_SITE_URL — explicit override (set it in Vercel once the
 *    custom domain is live, or when building for another host).
 * 2. VERCEL_PROJECT_PRODUCTION_URL — set automatically on every Vercel build;
 *    resolves to the custom domain once one is attached.
 * 3. The brand domain, for local builds.
 */
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.tatsatyoga.in")
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Tat Sat Yoga",
  teacherName: "Mohini Rai",
  teacherFirstName: "Mohini",
  tagline: "Move. Breathe. Be.",
  url: siteUrl,
  description:
    "Online yoga with Mohini Rai, a 300-hour certified teacher — Hatha, Vinyasa, Yin, breathwork and meditation, taught 1:1 or in small groups. First session is a free trial.",
  // India (+91) 99168 77138 — wa.me needs country code, digits only.
  whatsappNumber: "919916877138",
  whatsappDisplay: "+91 99168 77138",
  whatsappDefaultMessage: "Hi! I'd like to book my free trial yoga session.",
} as const;

export function whatsappHref(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
];

export const footerNav: NavItem[] = [
  { label: "The Practice", href: "/practice" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/**
 * Who the practice is for. Interim copy — Mohini is drafting the final wording.
 * Phrased as movement support, never as medical treatment.
 */
export type Audience = {
  id: string;
  who: string;
  headline: string;
  body: string;
  focus: string[];
  href: string;
};

export const audiences: Audience[] = [
  {
    id: "desk",
    who: "Desk-bound professionals",
    headline: "Eight hours in a chair adds up",
    body: "Long hours at a desk quietly shorten hip flexors, round the upper back and stiffen the neck and shoulders. A daily practice works as a counterweight — mobility for the spine, opening for the chest, and strength where sitting has let it go.",
    focus: ["Spine", "Neck & shoulders", "Hips", "Posture"],
    href: "/practice#sedentary",
  },
  {
    id: "womens-health",
    who: "Women through every stage",
    headline: "A practice that adapts to your cycle",
    body: "Energy, strength and appetite for effort change week to week and stage to stage. Sessions are paced to what your body actually has that day — gentler and more restorative when that serves you, stronger when it doesn't.",
    focus: ["Gentle movement", "Relaxation", "Body awareness"],
    href: "/practice#womens-health",
  },
  {
    id: "strength",
    who: "Gym-goers and lifters",
    headline: "Strength without the stiffness",
    body: "Heavy training builds muscle but rarely builds range. Yoga fills the gap — joint mobility, controlled flexibility and balance work that protects the lifts you already care about and helps you recover between them.",
    focus: ["Mobility", "Flexibility", "Balance", "Recovery"],
    href: "/practice#strength",
  },
  {
    id: "seniors",
    who: "Senior citizens",
    headline: "Strength, balance and confidence",
    body: "Muscle and balance decline with age unless they are asked to stay. Chair-supported practice keeps strength, steadiness and range available — with no floor work, and at a pace that never rushes the breath.",
    focus: ["Strength", "Balance", "Mobility", "Confidence"],
    href: "/classes/chair-yoga-seniors",
  },
];

export type ClassFormat = {
  slug: string;
  name: string;
  duration: string;
  description: string;
  pricing: { schedule: string; price: string }[];
  keyword: string;
  metaDescription: string;
  whoFor: string[];
  sessionLooksLike: string;
};

export const classFormats: ClassFormat[] = [
  {
    slug: "private",
    name: "Online 1:1 Yoga",
    duration: "1 hour",
    description:
      "Personalised sessions built around your goals, your fitness level and the way your body actually moves — not a fixed class plan.",
    pricing: [
      { schedule: "5 days / week", price: "₹5,000 / month" },
      { schedule: "3 days / week", price: "₹3,000 / month" },
    ],
    keyword: "online 1:1 yoga classes",
    metaDescription:
      "Personal yoga training online, 1:1 with a 300-hour certified teacher. Sessions adapt Hatha, Vinyasa, Yin and breathwork to you. First session free.",
    whoFor: [
      "You want a plan built around your body, not a generic class",
      "You're recovering from an injury or managing a condition and need real adaptation",
      "You've tried yoga before and want to go deeper, faster",
      "Group class timings never quite work with your schedule",
    ],
    sessionLooksLike:
      "A full hour, just the two of you on video. It usually opens with a short check-in — how you're feeling, what's tight, what's changed since last time — before moving into a sequence drawn from Hatha, Vinyasa or Yin depending on what that day calls for.",
  },
  {
    slug: "group",
    name: "Online Group Yoga",
    duration: "1 hour",
    description:
      "Live, interactive sessions in a small group, suited to different levels — the same attention, a shared energy.",
    pricing: [
      { schedule: "5 days / week", price: "₹2,000 / month" },
      { schedule: "3 days / week", price: "₹1,500 / month" },
    ],
    keyword: "online yoga classes India",
    metaDescription:
      "Live online group yoga classes, small enough for real attention. Hatha and Vinyasa-based sessions, beginner-friendly. First session free.",
    whoFor: [
      "You like the energy of practicing alongside other people",
      "You're new to yoga and want a structured, repeatable class",
      "You want a daily or near-daily habit at a lower monthly cost",
      "You're comfortable with a shared pace rather than a fully individual plan",
    ],
    sessionLooksLike:
      "A live class over video, kept small enough that form still gets corrected in real time. Expect a warm-up, a main sequence, and a few minutes of stillness at the end — beginner modifications are always offered alongside the full pose.",
  },
  {
    slug: "chair-yoga-seniors",
    name: "Senior Citizens Chair Yoga",
    duration: "30 minutes",
    description:
      "A gentle, accessible practice using a chair for support — for seniors and anyone who finds getting down to the floor difficult.",
    pricing: [
      { schedule: "5 days / week", price: "₹1,500 / month" },
      { schedule: "3 days / week", price: "₹1,000 / month" },
    ],
    keyword: "online chair yoga for seniors",
    metaDescription:
      "Online chair yoga for seniors — gentle, seated and standing-with-support movement for mobility, balance and strength. First session free.",
    whoFor: [
      "Getting down to (and up from) the floor is uncomfortable or risky",
      "You're managing stiffness, balance concerns or a slower recovery",
      "You want movement that's genuinely gentle, not gentle-in-name-only",
      "This would be your first time trying yoga at all",
    ],
    sessionLooksLike:
      "Thirty minutes, seated in a sturdy chair or standing with it for support. Movements focus on joint mobility, gentle strength and balance, paced slowly enough that breath and movement always stay comfortable.",
  },
];

export type Style = {
  id: string;
  name: string;
  focus: string[];
  description: string;
};

export const styles: Style[] = [
  {
    id: "hatha",
    name: "Hatha Yoga",
    focus: ["Strength", "Stability", "Flexibility", "Body awareness"],
    description:
      "A traditional, mindful approach combining asana, breath and awareness — a grounded place to build a practice from.",
  },
  {
    id: "vinyasa",
    name: "Vinyasa Yoga",
    focus: ["Strength", "Mobility", "Balance", "Stamina"],
    description:
      "A dynamic, flowing practice where movement and breath move together, one into the next.",
  },
  {
    id: "yin",
    name: "Yin Yoga",
    focus: ["Deep relaxation", "Mobility", "Stillness", "Patience"],
    description:
      "A slow, meditative practice that holds space for the body to soften, release tension and simply stay a while.",
  },
  {
    id: "breathwork",
    name: "Pranayama / Breathwork",
    focus: ["Breath awareness", "Relaxation", "Focus", "Nervous-system regulation"],
    description:
      "Conscious breathing practices that support mental clarity and a calmer nervous system, on and off the mat.",
  },
  {
    id: "meditation",
    name: "Meditation",
    focus: ["Stillness", "Presence", "Inner awareness", "Calm"],
    description:
      "Guided practices for sitting with yourself a little longer than feels comfortable, and finding it's alright.",
  },
  {
    id: "strength",
    name: "Strength & Flexibility Training",
    focus: ["Muscular strength", "Joint mobility", "Flexibility", "Balance"],
    description:
      "Yoga-based movement and functional strength work, built for resilience rather than performance.",
  },
  {
    id: "sedentary",
    name: "Movement for a Sedentary Lifestyle",
    focus: ["Back", "Neck", "Shoulders", "Hips"],
    description:
      "Targeted practice for the stiffness that comes from long hours at a desk — not a medical treatment, a daily counterweight.",
  },
  {
    id: "womens-health",
    name: "Women's Health & Hormonal Wellness",
    focus: ["Movement", "Relaxation", "Body awareness"],
    description:
      "Gentle, supportive practices for the different stages of a woman's life — paced to what the body needs that week.",
  },
];

export const benefits = [
  "Strength",
  "Flexibility",
  "Mobility",
  "Balance",
  "Body awareness",
  "Stress management",
  "Breath awareness",
  "Focus",
  "Relaxation",
  "Better movement",
  "Support for sedentary lifestyles",
  "Overall wellbeing",
];
