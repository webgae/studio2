import Link from "next/link";

const mainNavLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/precios", label: "Precios" },
];

const legalNavLinks = [
    { href: "/politica-de-privacidad", label: "Política de Privacidad" },
    { href: "/aviso-legal", label: "Aviso Legal" },
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

export default async function Footer() {

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Columna de la marca */}
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
                        <li><Link href="/blog-ideas" className="text-sm text-muted-foreground hover:text-primary transition-colors">Asistente de Contenidos</Link></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                    <ul className="space-y-3">
                    {legalNavLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
