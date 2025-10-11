import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = 'https://www.webgae.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Desarrollo Web a Medida | WEBGAE',
    template: '%s | WEBGAE',
  },
  description: 'Desarrollador web experto en crear, mejorar y optimizar sitios web con tecnologías modernas. Ofrezco soluciones de desarrollo a medida, optimización y mantenimiento para potenciar tu presencia online.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><path d="M5.33331 28L10.6666 5.33331L16 18.6666L21.3333 5.33331L26.6666 28" stroke="%238b5cf6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    )}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn("font-sans antialiased min-h-screen flex flex-col", inter.variable)}>
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
