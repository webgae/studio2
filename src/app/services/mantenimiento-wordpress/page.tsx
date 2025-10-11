import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, CloudCog, Activity, DatabaseBackup, Headphones } from 'lucide-react';
import { type Service, type WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: 'Mantenimiento y Soporte WordPress',
    description: 'Servicio de mantenimiento y soporte para WordPress. Mantén tu sitio seguro, actualizado y funcionando sin problemas con mis planes de mantenimiento proactivo.',
};

const processSteps = [
    {
        icon: <CloudCog className="w-10 h-10 text-primary" />,
        title: '1. Actualizaciones',
        description: 'Mantengo el core de WordPress, los plugins y temas siempre actualizados a su última versión estable para garantizar la seguridad y compatibilidad.',
    },
    {
        icon: <DatabaseBackup className="w-10 h-10 text-primary" />,
        title: '2. Copias de Seguridad',
        description: 'Realizo copias de seguridad automáticas y periódicas de tu sitio completo (archivos y base de datos) en una ubicación externa y segura.',
    },
    {
        icon: <Activity className="w-10 h-10 text-primary" />,
        title: '3. Monitorización 24/7',
        description: 'Vigilo tu sitio constantemente para detectar caídas (uptime) y amenazas de seguridad, actuando de forma proactiva ante cualquier incidencia.',
    },
    {
        icon: <Headphones className="w-10 h-10 text-primary" />,
        title: '4. Soporte Técnico',
        description: 'Estoy a tu disposición para resolver dudas, realizar pequeños cambios o solucionar cualquier problema que pueda surgir en el día a día.',
    },
];

export default function MantenimientoWordPressPage() {
    const jsonLd: WithContext<Service> = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mantenimiento y Soporte WordPress",
        "description": "Mantén tu sitio seguro, actualizado y funcionando sin problemas con mis planes de mantenimiento proactivo.",
        "serviceType": "Mantenimiento WordPress",
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
                <ShieldCheck className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Mantenimiento y Soporte WordPress</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Duerme tranquilo sabiendo que tu web está en buenas manos. Me encargo de la salud técnica de tu WordPress para que tú te centres en tu negocio.
                </p>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Ver Planes de Mantenimiento</Link>
                </Button>
            </div>

            {/* Features Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20 text-center">
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <ShieldCheck className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Seguridad Proactiva</h3>
                    <p className="text-muted-foreground">Implemento un escudo de seguridad (WAF, firewall) para proteger tu sitio de hackeos y ataques maliciosos.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <CloudCog className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Siempre Actualizado</h3>
                    <p className="text-muted-foreground">Me encargo de todas las actualizaciones técnicas de forma segura para evitar conflictos e incompatibilidades.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <DatabaseBackup className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Copias de Seguridad</h3>
                    <p className="text-muted-foreground">Tu web estará siempre a salvo con copias de seguridad automáticas y almacenadas en la nube.</p>
                </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Mi Servicio de Mantenimiento</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Un enfoque integral para la prevención, protección y soporte de tu sitio WordPress.</p>
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
                <h2 className="text-3xl font-bold font-headline mb-4">¿Quieres despreocuparte de tu web?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Deja el mantenimiento técnico en mis manos y asegura la estabilidad, seguridad y rendimiento de tu inversión online.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Contratar Mantenimiento</Link>
                </Button>
            </div>
        </section>
    );
}
