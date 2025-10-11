import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, Zap, BarChart, FileCheck, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Optimización de Velocidad y Rendimiento WordPress (WPO)',
    description: 'Servicio de Optimización y Rendimiento (WPO) para WordPress. Mejora la velocidad de carga de tu web, supera los Core Web Vitals y ofrece la mejor experiencia de usuario.',
};

const processSteps = [
    {
        icon: <ClipboardList className="w-10 h-10 text-primary" />,
        title: '1. Auditoría de Rendimiento',
        description: 'Realizo un análisis exhaustivo para identificar cuellos de botella, plugins lentos, imágenes sin optimizar y problemas de base de datos que afectan a la velocidad.',
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: '2. Fase de Optimización',
        description: 'Aplico una serie de técnicas avanzadas: optimización de imágenes, configuración de caché, minificación de CSS/JS, y optimización de la base de datos.',
    },
    {
        icon: <FileCheck className="w-10 h-10 text-primary" />,
        title: '3. Medición y Pruebas',
        description: 'Mido el "antes" y el "después" con herramientas como Google PageSpeed Insights y GTmetrix para verificar las mejoras y asegurar que superas los Core Web Vitals.',
    },
    {
        icon: <BarChart className="w-10 h-10 text-primary" />,
        title: '4. Informe de Resultados',
        description: 'Te entrego un informe detallado que muestra las mejoras logradas, explicando las acciones realizadas y ofreciendo consejos para mantener el rendimiento a largo plazo.',
    },
];

export default function OptimizacionWPOPage() {
    return (
        <section>
            {/* Hero Section */}
            <div className="text-center mb-16">
                <Rocket className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Optimización y Rendimiento (WPO)</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Una web lenta pierde clientes y posicionamiento. Acelero tu WordPress para que vuele, mejore tu SEO y ofrezca una experiencia de usuario impecable.
                </p>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Solicitar Auditoría Gratuita</Link>
                </Button>
            </div>

            {/* Features Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20 text-center">
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <Zap className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Carga Ultra Rápida</h3>
                    <p className="text-muted-foreground">Reduzco el tiempo de carga para que tus páginas se muestren en un parpadeo, reteniendo a más visitantes.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <BarChart className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Mejora de Core Web Vitals</h3>
                    <p className="text-muted-foreground">Optimizo tu sitio para superar las métricas de Google (LCP, FID, CLS), un factor clave para el ranking SEO.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <FileCheck className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Aumento de Conversiones</h3>
                    <p className="text-muted-foreground">Una mejor experiencia de usuario se traduce directamente en más ventas, leads o suscripciones.</p>
                </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Mi Proceso de Optimización</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Un método probado para diagnosticar y solucionar todos los problemas de rendimiento de tu web.</p>
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
                <h2 className="text-3xl font-bold font-headline mb-4">¿Tu web de WordPress es lenta?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    No dejes que la lentitud de tu sitio te cueste más clientes. Déjame hacer que tu web funcione a la velocidad de la luz.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Optimizar mi Web Ahora</Link>
                </Button>
            </div>
        </section>
    );
}