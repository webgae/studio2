import { Button } from '@/components/ui/button';
import { FileSearch } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Página no encontrada',
  description: 'La página que buscas no existe o ha sido movida.',
};

export default function NotFound() {
  return (
    <section className="text-center py-20">
      <div className="flex flex-col items-center">
        <FileSearch className="w-24 h-24 text-primary mb-6" />
        <h1 className="text-6xl font-bold font-headline text-foreground">404</h1>
        <h2 className="text-2xl font-bold mt-4 mb-2">Página No Encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Lo sentimos, pero la página que estás buscando no existe, ha sido eliminada o se ha movido a otra ubicación.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">Volver al Inicio</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">Ir al Blog</Link>
          </Button>
           <Button asChild variant="ghost" size="lg">
            <Link href="/contact">Contactar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
