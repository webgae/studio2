import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});


export const metadata: Metadata = {
  title: {
    default: 'Experto en WordPress | WEBGAE',
    template: '%s | WEBGAE',
  },
  description: 'Experto en WordPress dedicado a crear, mejorar y arreglar sitios web. Ofrezco soluciones de desarrollo, optimización y mantenimiento para potenciar tu presencia online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={cn("font-body antialiased min-h-screen flex flex-col", ptSans.variable, playfairDisplay.variable)}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
