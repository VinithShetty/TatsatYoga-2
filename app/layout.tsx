import type { Metadata } from 'next';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'Tat Sat Yoga — Move. Breathe. Be.',
  description:
    'Tat Sat Yoga offers online Hatha, Vinyasa, Yin, Pranayama, meditation and chair yoga. Beginner-friendly, personalized guidance from a 300-hour certified teacher trained in Rishikesh.',
  metadataBase: new URL('https://tatsatyoga.com'),
  openGraph: {
    title: 'Tat Sat Yoga — Move. Breathe. Be.',
    description:
      'Online yoga for every body: Hatha, Vinyasa, Yin, breathwork, meditation, strength and chair yoga. 1 free trial session with every format.',
    type: 'website',
    siteName: 'Tat Sat Yoga',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tat Sat Yoga — Move. Breathe. Be.',
    description: 'Yoga is not about perfection. It is about presence. Online classes, personal guidance, free trial.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
