import type { Metadata } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shubhankarpandey.dev'),
  title: 'Shubhankar Pandey — AI/ML Engineer',
  description:
    'AI/ML engineer specializing in deep learning, computer vision, and production-ready model deployment. Building systems that see, classify, and decide.',
  keywords: [
    'Shubhankar Pandey',
    'AI Engineer',
    'Machine Learning Engineer',
    'Computer Vision',
    'Deep Learning',
    'PyTorch',
    'TensorFlow',
  ],
  openGraph: {
    title: 'Shubhankar Pandey — AI/ML Engineer',
    description:
      'Building systems that see, classify, and decide. Deep learning, computer vision, and production AI systems.',
    type: 'website',
    url: 'https://shubhankarpandey.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubhankar Pandey — AI/ML Engineer',
    description: 'Building systems that see, classify, and decide.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
