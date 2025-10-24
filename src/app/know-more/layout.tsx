import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import '../globals.css';

const displaySerif = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display-serif'
});

export const metadata: Metadata = {
  title: 'Aurameter - Know More',
  description: 'Learn more about Aurameter, the AI-powered social platform for Gen Z',
};

export default function KnowMoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displaySerif.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}