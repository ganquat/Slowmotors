import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getImageUrlByName, getNavigationData } from '@/lib/strapi';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Slow Moto Tours | Authentic Royal Enfield Motorcycle Tours India',
  description: 'Experience authentic India on guided Royal Enfield motorcycle tours. Explore Kerala, Goa and more with Slow Moto Tours.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logoUrl = await getImageUrlByName('RE_Tours_Logo');
  const { links, error } = await getNavigationData();

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-background text-accent">
        <Navbar logoUrl={logoUrl} links={links} error={error} />
        {children}
        <Footer links={links} />
      </body>
    </html>
  );
}
