import Link from "next/link";
import { getAllPages } from "@/lib/blogger";
import { type Page } from "@/lib/types";


const mainNavLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/precios", label: "Precios" },
];

const Logo = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
        <path
            d="M5.33331 28L10.6666 5.33331L16 18.6666L21.3333 5.33331L26.6666 28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const shortenTitle = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.startsWith('api blogger')) {
        return 'Api Blogger';
    }
    if (lowerTitle.includes('pedazos de código')) {
        return 'Códigos';
    }
    if (lowerTitle.includes('optimización de imágenes')) {
        return 'Optimización de imágenes';
    }
    const words = title.split(' ');
    if (words.length > 3) {
        return words.slice(0, 3).join(' ') + '...';
    }
    return title;
};

export default async function Footer() {

    let bloggerPages: Page[] = [];
    try {
        const pagesList = await getAllPages();
        if (pagesList && pagesList.items) {
        bloggerPages = pagesList.items;
        }
    } catch (error) {
        console.error("Footer: Failed to fetch blogger pages. They will not be displayed.", error);
    }

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
                <Link href="/" className="flex items-center gap-2 mb-4">
                    <Logo />
                    <h1 className="text-xl font-bold font-headline">
                    WEBGAE
                    </h1>
                </Link>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} WEBGAE. <br />
                    Soluciones web a medida.
                </p>
            </div>
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
                    <li>
                        <Link href="/sobre-mi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Sobre Mí
                        </Link>
                    </li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground mb-4">Herramientas</h3>
                     <ul className="space-y-3">
                        {bloggerPages.map((page) => (
                            <li key={page.id}>
                                <a href={page.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {shortenTitle(page.title)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground mb-4">Otros</h3>
                    <ul className="space-y-3">
                        <li><Link href="/blog-ideas" className="text-sm text-muted-foreground hover:text-primary transition-colors">Asistente de Contenidos</Link></li>
                        <li><Link href="/politica-de-privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
                        <li><Link href="/aviso-legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">Aviso Legal</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
