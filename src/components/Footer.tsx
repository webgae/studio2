import Link from "next/link";
import { getAllPages } from "@/lib/blogger";
import { type Page } from "@/lib/types";
import { BookMarked } from "lucide-react";

const mainNavLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre Mí" },
];

// Función para acortar y normalizar los títulos de las páginas
const formatPageTitle = (title: string): string => {
    const lowerCaseTitle = title.toLowerCase();
    if (lowerCaseTitle.includes('cookie')) return 'Cookies';
    if (lowerCaseTitle.includes('privacidad')) return 'Privacidad';
    if (lowerCaseTitle.includes('aviso legal')) return 'Aviso Legal';
    
    // Si no es un título conocido, lo devuelve acortado si es muy largo
    return title.length > 15 ? title.split(' ')[0] : title;
};

export default async function Footer() {

  let bloggerPages: Page[] = [];
  try {
    const pagesData = await getAllPages();
    if (pagesData && pagesData.items) {
      bloggerPages = pagesData.items;
    }
  } catch (error) {
    console.error("Failed to fetch Blogger pages for footer:", error);
  }

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Columna de la marca */}
            <div className="md:col-span-2">
                <Link href="/" className="flex items-center gap-2 mb-4">
                    <BookMarked className="w-8 h-8 text-primary" />
                    <h1 className="text-xl font-bold font-headline">
                    WEBGAE
                    </h1>
                </Link>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} WEBGAE. <br />
                    Soluciones web a medida.
                </p>
            </div>
            {/* Menús de navegación */}
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
                    <ul className="space-y-3">
                    {mainNavLinks.map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground mb-4">Herramientas</h3>
                     <ul className="space-y-3">
                        <li><Link href="/blog-ideas" className="text-sm text-muted-foreground hover:text-primary transition-colors">Asistente de Contenidos</Link></li>
                    </ul>
                </div>
                {bloggerPages.length > 0 && (
                 <div>
                    <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                    <ul className="space-y-3">
                    {bloggerPages.map((page) => (
                        <li key={page.id}>
                            <a href={page.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {formatPageTitle(page.title)}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
        </div>
      </div>
    </footer>
  );
}
