import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="es"
        className={clsx(
          'h-full scroll-smooth bg-indigo-50 antialiased',
          inter.variable,
          lexend.variable
        )}
      >
        <body className={inter.className}>
          <Container className="mx-auto">
            <Header />
            <main>{children}</main>
          </Container>
        </body>
      </html>
    </ClerkProvider>
  );
}
