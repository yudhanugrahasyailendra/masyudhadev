import type { Metadata } from 'next';
import { Saira, Saira_Semi_Condensed } from 'next/font/google';
import './globals.css';

const saira = Saira({
  subsets: ['latin'],
  variable: '--font-saira',
  display: 'swap',
});

const sairaSemiCondensed = Saira_Semi_Condensed({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-saira-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yudha - Main Menu',
  description: 'Portfolio Yudha Nugraha Syailendra, Fullstack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${saira.variable} ${sairaSemiCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
