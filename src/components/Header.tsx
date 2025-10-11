"use client";

import Link from 'next/link';
import { BookMarked, Menu, Wand2 } from 'lucide-react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/blog', label: 'Blog' },
  { href: '/services', label: 'Servicios' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const NavLink = ({ href, label, icon, isMobile = false }: { href: string; label: string; icon?: React.ReactNode, isMobile?: boolean }) => {
    const isActive = pathname === href;
    const linkClasses = `text-sm font-medium ${isActive ? 'text-primary' : ''} ${isMobile ? 'block w-full py-2 text-lg' : ''}`;

    const handleClick = () => {
      if (isMobile) {
        setIsSheetOpen(false);
      }
    };

    return (
      <Button asChild variant="ghost" key={href}>
        <Link href={href} className={linkClasses} onClick={handleClick}>
          {icon}
          {label}
        </Link>
      </Button>
    );
  };

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <BookMarked className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold font-headline text-foreground hidden sm:block">
              WEBGAE
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

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
                      <NavLink key={link.href} href={link.href} label={link.label} icon={link.icon} isMobile />
                    ))}
                    <Button asChild variant="ghost" onClick={() => setIsSheetOpen(false)}>
                      <Link href="/blog-ideas" className="text-lg flex items-center justify-center">
                          <Wand2 className="mr-2 h-5 w-5"/>
                          Ideas para Blog
                      </Link>
                    </Button>
                    <div className="pt-4">
                      <ThemeToggle />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
