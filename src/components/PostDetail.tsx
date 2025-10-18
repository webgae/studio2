'use client';

import { type Post } from '@/lib/types';
import { format } from 'date-fns';
import { Badge } from './ui/badge';
import { Calendar, User, Tag, ArrowLeft, ArrowUp, Menu, List, PanelLeftClose } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import parse, { domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import Image from 'next/image';
import { slugify } from '@/lib/utils';
import { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from './Sidebar';

type TocItem = {
  text: string;
  slug: string;
  level: number;
};

// Function to extract headings and generate TOC
const generateTocItems = (htmlContent: string): TocItem[] => {
  const tocItems: TocItem[] = [];
  
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (/h[2-4]/.test(domNode.name)) {
          const children = domNode.children;
          if (children && children.length > 0) {
            // This is a simplified way to get text content.
            // For complex content (like nested tags), a more robust solution might be needed.
            const text = domToReact(children, options) as string | any[];
            const textContent = (Array.isArray(text) ? text.flat(Infinity).join('') : text)
                .toString()
                .replace(/<[^>]+>/g, ''); // Strip any remaining HTML from complex children
            
            if (textContent) {
              const slug = slugify(textContent);
              const level = parseInt(domNode.name.substring(1), 10); // H2 -> 2, H3 -> 3, H4 -> 4
              tocItems.push({ text: textContent, slug, level });
            }
          }
        }
      }
    },
  };

  parse(htmlContent, options); // We only run this to populate tocItems
  return tocItems;
};

// Separated Table of Contents component
export function TableOfContents({ postContent }: { postContent: string }) {
  const tocItems = useMemo(() => generateTocItems(postContent), [postContent]);
  const [activeToc, setActiveToc] = useState<string | null>(null);
  const { setOpen, isDesktop } = useSidebar();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
        let visibleSlug: string | null = null;
        for (const entry of entries) {
            if (entry.isIntersecting) {
                visibleSlug = entry.target.id;
                break; // Prioritize the first visible item from the top
            }
        }
        if (visibleSlug) {
            setActiveToc(visibleSlug);
        }
    };

    observer.current = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    });

    const headingElements = tocItems.map(item => document.getElementById(item.slug)).filter(Boolean);
    headingElements.forEach(el => observer.current?.observe(el!));

    return () => observer.current?.disconnect();
  }, [tocItems]);
  

  const handleLinkClick = () => {
    // In mobile, sidebar is inside a Sheet, so we close it
     try {
      if (!isDesktop) {
        setOpen(false);
      }
    } catch(e) {
      // useSidebar will throw if not in context, which happens on first render on server.
      // We can safely ignore this.
    }
  }

  if (tocItems.length < 2) {
    return null;
  }

  return (
    <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-2 p-4 border-b">
            <div className="flex items-center gap-2">
                <List className="h-5 w-5" />
                <h2 className="text-xl font-bold font-headline">Contenidos</h2>
            </div>
            {isDesktop && (
                 <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8"
                  aria-label="Cerrar barra lateral"
              >
                  <PanelLeftClose className="h-5 w-5" />
              </Button>
            )}
        </div>
        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-1 p-4">
            {tocItems.map((item) => (
              <li key={item.slug} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}>
                <a
                  href={`#${item.slug}`}
                  onClick={handleLinkClick}
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
  );
}

const parseContent = (htmlContent: string) => {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
          if (domNode instanceof Element) {
            if (/h[2-4]/.test(domNode.name)) {
                const children = domNode.children;
                if (children && children.length > 0) {
                    const text = domToReact(children) as string | any[];
                    const textContent = (Array.isArray(text) ? text.flat(Infinity).join('') : text)
                      .toString()
                      .replace(/<[^>]+>/g, '');
                    const slug = slugify(textContent);
                    const HeadingTag = domNode.name;
                    return <HeadingTag id={slug}>{domToReact(domNode.children, options)}</HeadingTag>;
                }
            }
            if (domNode.name === 'img') {
              const { src, alt, width, height } = domNode.attribs;
              
              const widthNum = width ? parseInt(width) : 550;
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
    return parse(htmlContent, options);
}

export default function PostDetail({ post }: { post: Post }) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const modifiedContent = useMemo(() => parseContent(post.content), [post.content]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <article className="max-w-4xl mx-auto bg-card p-4 sm:p-8 rounded-lg shadow-lg border relative">
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
        
        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg prose-h2:scroll-mt-24 prose-h3:scroll-mt-24 prose-h4:scroll-mt-24"
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
      
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 shadow-lg transition-opacity duration-300 lg:hidden',
          showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        size="icon"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </>
  );
}
