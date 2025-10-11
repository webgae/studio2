import { Wand2, Heart } from "lucide-react";
import Link from "next/link";
import { getAllPages } from "@/lib/blogger";
import { type Page } from "@/lib/types";

const mainNavLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre Mí" },
];

export default async function Footer() {

  let bloggerPages: Page[] = [];
  try {
    const pagesData = await getAllPages();
    if (pagesData && pagesData.items) {
      bloggerPages = pagesData.items;
    }
  } catch (error) {
    console.error("Failed to fetch Blogger pages for footer:", error);
    // Continue without blogger pages if the fetch fails
  }

  return (
    <footer className="bg-transparent mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between border-t border-border pt-8 gap-6 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} WEBGAE. Diseñado con <Heart className="inline w-4 h-4" /> y código.
            </p>
            <nav className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2">
                {mainNavLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                        {link.label}
                    </Link>
                ))}
                {bloggerPages.map((page) => (
                    <a key={page.id} href={page.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                        {page.title}
                    </a>
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