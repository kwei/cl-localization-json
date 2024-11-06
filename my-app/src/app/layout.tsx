import { Header } from '@/components/Header';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'CL-Localization Tool',
  description: 'A localization tool for specific json files.',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sticky top-0 w-full p-4">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
