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
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "The Practice", href: "/practice" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/**
 * Who should practise yoga, and why — shown as the "Who it's for" cards on the
 * homepage. Each leads with the problem that group actually has.
 * Phrased as support, never as treatment: no medical or hormonal-health claims.
 */
export type Audience = {
  id: "desk" | "womens-health" | "strength" | "seniors";
  who: string;
  problem: string;
  body: string;
  helps: string[];
  cta: string;
  href: string;
};

export const audiences: Audience[] = [
  {
    id: "desk",
    who: "Corporate & desk professionals",
    problem: "Desk jobs quietly wear down spinal health",
    body: "Eight or more hours in a chair shortens the hip flexors, rounds the upper back and loads the lower spine day after day. Regular practice works against it — mobilising the spine, opening the chest, and rebuilding the core and back strength that sitting erodes.",
    helps: ["Back & neck stiffness", "Posture", "Hip mobility"],
    cta: "Yoga for desk workers",
    href: "/practice#sedentary",
  },
  {
    id: "womens-health",
    who: "Women & hormonal health",
    problem: "Hormones change how your body feels, week to week",
    body: "The menstrual cycle, pregnancy and postpartum, perimenopause and menopause all shift energy, mood and comfort. Sessions are paced to what your body has that day — restorative when you need rest, stronger when you don't — to ease tension and help manage stress.",
    helps: ["Stress & tension", "Cycle-aware movement", "Rest & recovery"],
    cta: "Practice for women",
    href: "/practice#womens-health",
  },
  {
    id: "strength",
    who: "Gym-goers & strength trainers",
    problem: "Muscle without mobility holds you back",
    body: "Lifting builds strength but tends to shorten muscles and narrow your range of movement. Yoga adds what the gym leaves out — flexibility, joint mobility and balance — so you move better, recover between sessions, and protect the lifts you care about.",
    helps: ["Flexibility", "Joint mobility", "Recovery"],
    cta: "Strength & flexibility",
    href: "/practice#strength",
  },
  {
    id: "seniors",
    who: "Senior citizens",
    problem: "Muscle and balance fade with age — unless they're used",
    body: "The body loses muscle steadily with age, and balance goes with it, making everyday movement harder and falls more likely. Gentle, chair-supported practice keeps strength, steadiness and confidence in movement — with no floor work at all.",
    helps: ["Strength", "Balance", "Confident movement"],
    cta: "Chair yoga for seniors",
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


/** "Yoga forms practised" on Class Details — the client's own descriptions. */
export const yogaForms: { name: string; description: string; frequency: string }[] = [
  {
    name: "Hatha Yoga",
    description: "Mindful, steady practice focusing on strength, alignment and awareness.",
    frequency: "Most often practised in the session",
  },
  {
    name: "Vinyasa Yoga",
    description: "Dynamic flows connecting breath with movement.",
    frequency: "Once or twice a week, depending on the ability and proficiency of the practitioners",
  },
  {
    name: "Yin Yoga",
    description: "Slow, restorative practice with longer holds to release tension and improve flexibility.",
    frequency: "Once a week",
  },
  {
    name: "Pranayama / Breathwork",
    description: "Simple pranayama practices to calm, energise and regulate the mind and body.",
    frequency: "Every day, at the end of the session",
  },
  {
    name: "Meditation",
    description: "Guided practices to cultivate stillness, focus and inner awareness.",
    frequency: "On request, for those interested",
  },
];

/** Homepage "Yoga is for you if…" checklist — client copy. */
export const yogaIsForYouIf = [
  "You spend most of your day sitting at a desk",
  "You lead a busy, high-stress lifestyle",
  "You feel stiff or sluggish from lack of movement",
  "You want to get stronger and more flexible",
  "You struggle to make time for yourself and your wellbeing",
  "You want to improve posture, mobility and body awareness",
  "You’re looking for a way to slow down and reconnect",
  "You want a sustainable practice, not another intense workout",
  "You want to be healthy and move freely in your old age",
];

/**
 * Homepage testimonials: one video and two written.
 * Leave `quote` / `video` empty until real content arrives — the homepage
 * shows a clearly marked "awaiting" slot rather than inventing a review.
 *
 * Video: drop an .mp4 in public/videos/ and set `video.src`, or set
 * `video.youtubeId` for a YouTube (incl. Shorts) video.
 */
export type Testimonial = {
  name: string;
  detail: string;
  quote?: string;
  video?: { src?: string; youtubeId?: string; poster?: string };
};

export const testimonials: { video: Testimonial; written: Testimonial[] } = {
  video: { name: "", detail: "", video: {} },
  written: [
    { name: "", detail: "", quote: "" },
    { name: "", detail: "", quote: "" },
  ],
};
