import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';

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
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="15" fill="%235c24e3" /><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="50" font-family="sans-serif" fill="white" font-weight="600">WG</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn("font-body antialiased min-h-screen flex flex-col", ptSans.variable, playfairDisplay.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
