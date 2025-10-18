'use client';

import { type Post } from '@/lib/types';
import { format } from 'date-fns';
import { Badge } from './ui/badge';
import { Calendar, User, Tag, ArrowLeft, List, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import parse, { domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import Image from 'next/image';
import { slugify } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type TocItem = {
  text: string;
  slug: string;
  level: number;
};

// Función para extraer encabezados y generar la TOC
const generateTableOfContents = (htmlContent: string): { tocItems: TocItem[]; modifiedContent: string | JSX.Element | JSX.Element[] } => {
  const tocItems: TocItem[] = [];
  
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === 'h2' || domNode.name === 'h3') {
          const children = domNode.children;
          if (children && children.length > 0) {
            const text = domToReact(children) as string | string[];
            const textContent = Array.isArray(text) ? text.join('') : text;
            const slug = slugify(textContent);
            const level = domNode.name === 'h2' ? 1 : 2;
            tocItems.push({ text: textContent, slug, level });
            const HeadingTag = domNode.name;
            return <HeadingTag id={slug}>{domToReact(domNode.children, options)}</HeadingTag>;
          }
        }
        if (domNode.name === 'img') {
          const { src, alt, width, height } = domNode.attribs;
          
          const widthNum = width ? parseInt(width) : 700;
          const heightNum = height ? parseInt(height) : 400;

          return (
            <div className="relative my-6 mx-auto w-full max-w-[550px]" style={{ aspectRatio: `${widthNum}/${heightNum}` }}>
              <Image
                src={src}
                alt={alt || 'Imagen del post'}
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 600px) 100vw, 550px"
              />
            </div>
          );
        }
      }
    },
  };

  const modifiedContent = parse(htmlContent, options);
  
  return { tocItems, modifiedContent };
};


export default function PostDetail({ post }: { post: Post }) {
  const { tocItems, modifiedContent } = generateTableOfContents(post.content);
  const [activeToc, setActiveToc] = useState<string | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const headingsRef = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver para el resaltado de la TOC
    const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {
            headingsRef.current.set(entry.target.id, entry);
        });

        const visibleHeadings: IntersectionObserverEntry[] = [];
        headingsRef.current.forEach(entry => {
            if (entry.isIntersecting) {
                visibleHeadings.push(entry);
            }
        });

        if (visibleHeadings.length > 0) {
            // Ordenar por la posición en la página
            visibleHeadings.sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
            setActiveToc(visibleHeadings[0].target.id);
        }
    };

    observer.current = new IntersectionObserver(callback, {
      rootMargin: '-10% 0px -65% 0px', // Ajusta el área de detección
      threshold: 0.1
    });

    const headingElements = tocItems.map(item => document.getElementById(item.slug)).filter(Boolean);
    headingElements.forEach(el => observer.current?.observe(el!));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.current?.disconnect();
    };
  }, [tocItems]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderToc = () => (
    tocItems.length >= 2 && (
      <div id="toc" className="mb-10 lg:mb-0">
        <div className="bg-card/50 border rounded-lg p-6">
          <h2 className="text-xl font-bold font-headline flex items-center gap-2 mb-4">
            <List className="w-5 h-5" />
            Tabla de Contenidos
          </h2>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.slug} style={{ marginLeft: `${(item.level - 1) * 1}rem` }}>
                <a
                  href={`#${item.slug}`}
                  className={cn(
                    "block p-2 rounded-md text-sm transition-colors",
                    activeToc === item.slug
                      ? "bg-primary/20 text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="lg:grid lg:grid-cols-[1fr,280px] lg:gap-12">
        <main>
          <article className="max-w-4xl mx-auto bg-card p-4 sm:p-8 rounded-lg shadow-lg border relative">
            <div className="mb-6">
              <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-transparent px-0">
                <Link href="/blog" className="inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Volver al blog
                </Link>
              </Button>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-center">{post.title}</h1>
            
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-muted-foreground mb-8 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author.displayName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.published}>{format(new Date(post.published), 'MMMM d, yyyy')}</time>
              </div>
            </div>

            {/* TOC para móvil, estática */}
            <div className="lg:hidden">{renderToc()}</div>
            
            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg prose-h2:scroll-mt-24 prose-h3:scroll-mt-24"
            >
              {modifiedContent}
            </div>
            
            {post.labels && post.labels.length > 0 && (
              <div className="mt-12 border-t pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Etiquetas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.labels.map(label => (
                    <Link href={`/blog?label=${encodeURIComponent(label)}`} key={label}>
                      <Badge variant="secondary" className="hover:bg-accent">{label}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 border-t pt-6 flex flex-col items-center gap-4">
              <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-transparent px-0">
                <Link href="/blog" className="inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Volver al blog
                </Link>
              </Button>
              <Link href={post.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                Ver original en Blogger
              </Link>
            </div>
          </article>
        </main>
        
        {/* TOC para escritorio, pegajosa */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-24">
            {renderToc()}
          </div>
        </aside>
      </div>
      
      {/* Botón de volver arriba */}
      <Button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 shadow-lg transition-opacity duration-300',
          showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        size="icon"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
