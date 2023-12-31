import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Volodymyr Pivtoranis',
  description: 'Volodymyr Pivtoranis portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-hero bg-cover bg-fixed">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
