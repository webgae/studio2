"use client";

import Link from 'next/link';
import { Menu, Wand2 } from 'lucide-react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/services', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sobre-mi', label: 'Sobre Mí' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => {
    const isActive = pathname === href;
    const linkClasses = `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'} ${isMobile ? 'block w-full py-2 text-lg' : ''}`;

    const handleClick = () => {
      if (isMobile) {
        setIsSheetOpen(false);
      }
    };

    return (
      <Link href={href} className={linkClasses} onClick={handleClick}>
          {label}
      </Link>
    );
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 text-foreground font-bold text-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 7L12 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 7L12 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 4.5L7 9.5" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            WEBGAE
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] sm:w-[300px]">
                  <nav className="flex flex-col gap-4 pt-8">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} href={link.href} label={link.label} isMobile />
                    ))}
                    <Button asChild variant="ghost" onClick={() => setIsSheetOpen(false)}>
                      <Link href="/blog-ideas" className="text-lg flex items-center justify-center">
                          <Wand2 className="mr-2 h-5 w-5"/>
                          Ideas para Blog
                      </Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
             <Button asChild className="hidden sm:inline-flex">
                <Link href="/contact">Hablemos</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
