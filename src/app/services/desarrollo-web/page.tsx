import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Code, Layers, Smartphone, Search, PenTool, Rocket } from 'lucide-react';
import { type Service, type WithContext } from 'schema-dts';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Creación y Desarrollo Web con WordPress',
    description: 'Servicio de creación y desarrollo de sitios web a medida con WordPress. Diseño profesional, responsivo y optimizado para SEO desde cero para potenciar tu negocio.',
};

const processSteps = [
    {
        icon: <Layers className="w-10 h-10 text-primary" />,
        title: '1. Estrategia y Planificación',
        description: 'Analizamos tus objetivos, tu público y tu competencia para definir la estructura y funcionalidades clave de tu futuro sitio web.',
    },
    {
        icon: <PenTool className="w-10 h-10 text-primary" />,
        title: '2. Diseño y Experiencia de Usuario (UI/UX)',
        description: 'Creamos un diseño atractivo, intuitivo y alineado con tu marca. Nos centramos en que la navegación sea fácil y agradable para tus visitantes.',
    },
    {
        icon: <Code className="w-10 h-10 text-primary" />,
        title: '3. Desarrollo y Programación',
        description: 'Construimos el sitio utilizando las mejores prácticas de código. Creamos un tema a medida o adaptamos uno premium, asegurando que sea robusto y escalable.',
    },
    {
        icon: <Rocket className="w-10 h-10 text-primary" />,
        title: '4. Lanzamiento y Optimización',
        description: 'Configuramos el hosting, migramos el contenido si es necesario y lanzamos la web. Realizamos una revisión final para asegurar que todo funcione a la perfección.',
    },
];

export default function DesarrolloWebPage() {

    const jsonLd: WithContext<Service> = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Creación y Desarrollo Web con WordPress",
        "description": "Servicio de creación y desarrollo de sitios web a medida con WordPress. Diseño profesional, responsivo y optimizado para SEO desde cero para potenciar tu negocio.",
        "serviceType": "Desarrollo Web",
        "provider": {
            "@type": "Organization",
            "name": "WEBGAE"
        },
        "areaServed": {
            "@type": "Country",
            "name": "ES"
        }
    };

    return (
        <section>
             <Breadcrumbs
                items={[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios', href: '/services' },
                { label: 'Desarrollo Web', href: '/services/desarrollo-web' },
                ]}
                className="mb-8"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="text-center mb-16">
                <Code className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Creación y Desarrollo Web WordPress</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Transformo tu idea en un sitio web profesional, funcional y a medida. Construyo soluciones web que no solo se ven bien, sino que también generan resultados.
                </p>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Solicita un Presupuesto</Link>
                </Button>
            </div>

            {/* Features Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20 text-center">
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <Smartphone className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Diseño 100% Responsivo</h3>
                    <p className="text-muted-foreground">Tu web se verá y funcionará perfectamente en cualquier dispositivo: móviles, tabletas y ordenadores.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <Search className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Optimizado para SEO</h3>
                    <p className="text-muted-foreground">Construyo tu sitio sobre una base técnica sólida para que Google pueda rastrearlo e indexarlo fácilmente.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <Layers className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Totalmente Autogestionable</h3>
                    <p className="text-muted-foreground">Te entregaré un panel de administración intuitivo para que puedas actualizar tu contenido sin depender de nadie.</p>
                </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Mi Proceso de Desarrollo</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Un enfoque estructurado para garantizar el éxito de tu proyecto, de principio a fin.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map(step => (
                        <div key={step.title} className="p-6 bg-card rounded-lg border">
                            {step.icon}
                            <h3 className="text-2xl font-headline my-3">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-card p-10 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold font-headline mb-4">¿Listo para crear tu sitio web?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Tanto si necesitas una web corporativa, una tienda online o un blog profesional, estoy aquí para ayudarte a construir la herramienta que tu negocio necesita.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Hablemos de tu Proyecto</Link>
                </Button>
            </div>
        </section>
    );
}
