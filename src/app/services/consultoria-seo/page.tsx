import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sprout, Search, FileText, Link2, LineChart } from 'lucide-react';
import { type Service, type WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: 'Consultoría SEO para WordPress',
    description: 'Servicio de consultoría SEO especializado en WordPress. Te ayudo a mejorar tu visibilidad en Google a través de auditorías técnicas, optimización de contenido y estrategia de palabras clave.',
};

const processSteps = [
    {
        icon: <Search className="w-10 h-10 text-primary" />,
        title: '1. Auditoría SEO Técnica',
        description: 'Reviso la salud de tu WordPress: indexación, velocidad, estructura de URLs, datos estructurados y otros factores técnicos que impactan en tu ranking.',
    },
    {
        icon: <FileText className="w-10 h-10 text-primary" />,
        title: '2. Keyword Research',
        description: 'Investigo y defino las palabras clave por las que tu negocio debería posicionarse para atraer tráfico cualificado y con intención de compra.',
    },
    {
        icon: <Link2 className="w-10 h-10 text-primary" />,
        title: '3. SEO On-Page y Contenidos',
        description: 'Optimizo tus páginas y artículos (títulos, metadescripciones, encabezados) y te ayudo a planificar una estrategia de contenidos que responda a la intención de búsqueda.',
    },
    {
        icon: <LineChart className="w-10 h-10 text-primary" />,
        title: '4. Medición y Estrategia',
        description: 'Configuro herramientas de análisis para medir los resultados y te proporciono un plan de acción claro para seguir mejorando tu visibilidad a largo plazo.',
    },
];

export default function ConsultoriaSEOPage() {
    const jsonLd: WithContext<Service> = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Consultoría SEO para WordPress",
        "description": "Te ayudo a mejorar tu visibilidad en Google a través de auditorías técnicas, optimización de contenido y estrategia de palabras clave.",
        "serviceType": "Consultoría SEO",
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="text-center mb-16">
                <Sprout className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Consultoría SEO para WordPress</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Atrae más clientes desde Google. Te ayudo a optimizar tu WordPress para que aparezca en las primeras posiciones y consigas más tráfico orgánico de calidad.
                </p>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Mejorar mi SEO</Link>
                </Button>
            </div>

            {/* Features Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20 text-center">
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <Search className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Auditoría Técnica</h3>
                    <p className="text-muted-foreground">Detecto y soluciono los problemas técnicos que frenan tu posicionamiento en los buscadores.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <FileText className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Estrategia de Contenidos</h3>
                    <p className="text-muted-foreground">Te ayudo a crear contenido que atraiga a tu público objetivo y posicione para las palabras clave correctas.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <LineChart className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Resultados Medibles</h3>
                    <p className="text-muted-foreground">Nos basamos en datos para tomar decisiones y medir el impacto de las acciones SEO en tu negocio.</p>
                </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Mi Método de Consultoría SEO</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Una hoja de ruta clara para diagnosticar, optimizar y hacer crecer tu visibilidad online.</p>
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
                <h2 className="text-3xl font-bold font-headline mb-4">¿Quieres que tu web aparezca en Google?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Una buena estrategia SEO es la forma más rentable de conseguir clientes a largo plazo. Hablemos de cómo podemos llevar tu web a lo más alto.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Empezar a Posicionar</Link>
                </Button>
            </div>
        </section>
    );
}
