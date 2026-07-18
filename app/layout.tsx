import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ripnet',
  description: 'Network diagnostics, packet analysis, observability, and authorized load-testing toolkit',
  icons: {
    icon: '/assets/icon/ripnet-(512x512).png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body>
        <Navigation />
        <main className="app-main">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
