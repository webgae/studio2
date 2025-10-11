import { BookMarked, Github, Twitter, Linkedin, Wand2 } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/precios", label: "Precios" },
  { href: "/contact", label: "Contacto" },
];

const socialLinks = [
    // { name: "Twitter", href: "#", icon: Twitter },
    // { name: "LinkedIn", href: "#", icon: Linkedin },
    // { name: "GitHub", href: "#", icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            {socialLinks.length > 0 && (
                <div className="flex space-x-6">
                    {socialLinks.map((social) => (
                        <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                            <span className="sr-only">{social.name}</span>
                            <social.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            )}
          </div>

          <div className="mt-8 md:mt-0 md:order-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <BookMarked className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-headline text-foreground">WEBGAE</span>
               <Link href="/blog-ideas" aria-label="Generador de Ideas para Blog" title="Generador de Ideas para Blog">
                 <Wand2 className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
               </Link>
            </div>
            <p className="text-center md:text-left text-sm text-muted-foreground mt-2 max-w-sm">
                Potenciando tu presencia online con soluciones WordPress a medida.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} WEBGAE. Todos los derechos reservados.
            </p>
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>

      </div>
    </footer>
  );
}
