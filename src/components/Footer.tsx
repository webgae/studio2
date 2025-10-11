import { Github, Twitter, Linkedin, Wand2, Heart } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/precios", label: "Precios" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/contact", label: "Contacto" },
];

const socialLinks = [
    // { name: "Twitter", href: "#", icon: Twitter },
    // { name: "LinkedIn", href: "#", icon: Linkedin },
    // { name: "GitHub", href: "#", icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-transparent mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} WEBGAE. Diseñado con <Heart className="inline w-4 h-4" /> y código.
            </p>
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mt-4 md:mt-0">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                        {link.label}
                    </Link>
                ))}
                 <Link href="/blog-ideas" aria-label="Generador de Ideas para Blog" title="Generador de Ideas para Blog" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
                   <Wand2 className="w-4 h-4" />
                   <span>IA</span>
                 </Link>
            </nav>
        </div>
      </div>
    </footer>
  );
}
