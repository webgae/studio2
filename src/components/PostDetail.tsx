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
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Función para extraer encabezados y generar la TOC
const generateTableOfContents = (htmlContent: string): { tocItems: { text: string; slug: string }[]; modifiedContent: string | JSX.Element | JSX.Element[] } => {
  const tocItems: { text: string; slug: string }[] = [];
  let contentWithIds = htmlContent;

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === 'h2') {
          const children = domNode.children;
          if (children && children.length > 0) {
            const text = domToReact(children) as string | string[];
            const textContent = Array.isArray(text) ? text.join('') : text;
            const slug = slugify(textContent);
            tocItems.push({ text: textContent, slug });
            return <h2 id={slug}>{domToReact(domNode.children, options)}</h2>;
          }
        }
        if (domNode.name === 'img') {
          const { src, alt, width, height } = domNode.attribs;
          
          const widthNum = width ? parseInt(width) : 700;
          const heightNum = height ? parseInt(height) : 400;

          return (
            <div className="relative my-6" style={{ aspectRatio: `${widthNum}/${heightNum}` }}>
              <Image
                src={src}
                alt={alt || 'Imagen del post'}
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 700px"
              />
            </div>
          );
        }
      }
    },
  };

  const modifiedContent = parse(contentWithIds, options);
  
  return { tocItems, modifiedContent };
};


export default function PostDetail({ post }: { post: Post }) {
  const { tocItems, modifiedContent } = generateTableOfContents(post.content);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToToc = () => {
    const tocElement = document.getElementById('toc');
    if (tocElement) {
      tocElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
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

      {tocItems.length >= 2 && (
        <div id="toc" className="mb-10 border-t border-b py-6 bg-secondary/30 rounded-lg px-6 scroll-mt-24">
          <h2 className="text-xl font-bold font-headline flex items-center gap-2 mb-4">
            <List className="w-5 h-5" />
            Tabla de Contenidos
          </h2>
          <ul className="space-y-2 list-inside">
            {tocItems.map((item) => (
              <li key={item.slug}>
                <a href={`#${item.slug}`} className="text-primary hover:underline underline-offset-4">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}


      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg prose-h2:scroll-mt-24"
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
      
      {/* Botón de volver a la TOC */}
      {tocItems.length >= 2 && (
        <Button
          onClick={scrollToToc}
          className={cn(
            'fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 shadow-lg transition-opacity duration-300',
            showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          size="icon"
          aria-label="Volver a la tabla de contenidos"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}

    </article>
  );
}
