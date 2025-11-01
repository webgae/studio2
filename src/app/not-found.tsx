
import { Button } from '@/components/ui/button';
import { FileSearch, Layers, Tag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SearchBar from '@/components/SearchBar';
import { getAllPosts } from '@/lib/blogger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '404 - Página no encontrada',
  description: 'La página que buscas no existe, pero aquí tienes algunas alternativas para seguir navegando.',
};

const mainPages = [
    { href: '/', label: 'Inicio' },
    { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Servicios' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/precios', label: 'Precios' },
    { href: '/sobre-mi', label: 'Sobre Mí' },
    { href: '/contact', label: 'Contacto' },
];

export default async function NotFound() {
  let allLabels = new Set<string>();
  try {
    // Fetch a good number of posts to get a representative set of labels
    const allPostsForLabels = await getAllPosts(100);
    if (allPostsForLabels.items) {
      allPostsForLabels.items.forEach(post => {
        post.labels?.forEach(l => allLabels.add(l));
      });
    }
  } catch(error) {
    console.error("404 page: Could not fetch post labels from Blogger API.", error);
    // Continue without labels if the API fails
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FileSearch className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl font-bold font-headline text-foreground mb-4">404 - Página No Encontrada</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo sentimos, no encontramos la página que buscas. Pero no te preocupes, aquí tienes algunas opciones para encontrar lo que necesitas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
            <h2 className="text-xl font-semibold text-center mb-4">Busca en nuestro sitio</h2>
            <SearchBar />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" />
                        <span>Navegación Principal</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                     {mainPages.map(page => (
                        <Button asChild variant="outline" key={page.href}>
                            <Link href={page.href}>{page.label}</Link>
                        </Button>
                    ))}
                </CardContent>
            </Card>

            {/* Popular Categories */}
            {allLabels.size > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Tag className="w-5 h-5 text-primary" />
                            <span>Categorías del Blog</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                       {Array.from(allLabels).sort().map(l => (
                          <Link href={`/blog?label=${encodeURIComponent(l)}`} key={l}>
                              <Badge variant='secondary' className="cursor-pointer text-sm hover:bg-accent">{l}</Badge>
                          </Link>
                      ))}
                    </CardContent>
                </Card>
            )}
        </div>

      </div>
    </section>
  );
}
