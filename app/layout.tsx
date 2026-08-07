import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';  // ✅ This imports your CSS
import Header from './components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Green Land - Quality Services You Can Trust',
  description: 'Green Land provides quality services and solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}