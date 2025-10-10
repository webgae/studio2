import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="text-center">
      <div className="relative h-96 w-full max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="https://picsum.photos/seed/homepage/1200/400" 
          alt="Welcome" 
          fill
          style={{ objectFit: 'cover' }}
          data-ai-hint="technology abstract"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold font-headline text-white mb-4">Bienvenido a BloggerNext</h1>
          <p className="text-xl text-white/90">Explora nuestro contenido, servicios y más.</p>
        </div>
      </div>
      
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
        Este es el lugar perfecto para comenzar. Navega a nuestro blog para leer las últimas publicaciones, descubre los servicios que ofrecemos o ponte en contacto con nosotros.
      </p>
      
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/blog">Ir al Blog</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contáctanos</Link>
        </Button>
      </div>
    </section>
  );
}
