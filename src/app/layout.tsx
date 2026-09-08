import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmedelmansy.dev'),
  title: 'Ahmed Elmansy | Flutter Developer & Cybersecurity Specialist',
  description: 'Ahmed Elmansy is a Flutter Developer with a background in Cybersecurity, Artificial Intelligence, and Digital Forensics, building modern applications and intelligent digital solutions.',
  keywords: [
    'Ahmed Elmansy',
    'Flutter Developer',
    'Cybersecurity Specialist',
    'Digital Forensics',
    'Artificial Intelligence',
    'Dart',
    'Android Developer',
    'PyTorch',
    'FastAPI',
    'Sharqia Egypt'
  ],
  authors: [{ name: 'Ahmed Elmansy' }],
  creator: 'Ahmed Elmansy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmedelmansy.dev',
    title: 'Ahmed Elmansy | Flutter Developer & Cybersecurity Specialist',
    description: 'Ahmed Elmansy is a Flutter Developer with a background in Cybersecurity, Artificial Intelligence, and Digital Forensics.',
    siteName: 'Ahmed Elmansy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Elmansy | Flutter Developer & Cybersecurity Specialist',
    description: 'Flutter Developer • Cybersecurity • AI - Building modern applications, intelligent solutions, and secure digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahmed Elmansy',
  jobTitle: 'Flutter Developer & Cybersecurity Specialist',
  url: 'https://ahmedelmansy.dev',
  sameAs: [
    'https://github.com/AhmedELmansy1',
    'https://www.linkedin.com/in/ahmed-elmansy-a6b494346',
  ],
  knowsAbout: [
    'Flutter',
    'Dart',
    'Cybersecurity',
    'Digital Forensics',
    'Artificial Intelligence',
    'PyTorch',
    'FastAPI',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Benha University',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased bg-[#030712] text-white`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
