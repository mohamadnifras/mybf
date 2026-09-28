import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MYBF Entrepreneurship Conclave 2026 | Malappuram Youth Business Forum',
  description:
    'Connecting Young Entrepreneurs, Innovators and Future Leaders. Register now for the flagship one-day summit in Manjeri, Malappuram.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#035AFC" />
      </head>
      <body className="min-h-screen text-[#030405] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
