import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, GraduationCap, Lightbulb, UserCheck, Settings } from 'lucide-react';
import { type Service, type WithContext } from 'schema-dts';


export const metadata: Metadata = {
    title: 'Consultoría y Formación en WordPress',
    description: 'Servicios de consultoría estratégica y formación personalizada en WordPress para ayudarte a tomar las mejores decisiones y gestionar tu web de forma autónoma.',
};

const processSteps = [
    {
        icon: <Lightbulb className="w-10 h-10 text-primary" />,
        title: '1. Sesión de Descubrimiento',
        description: 'Analizamos tus necesidades, tus conocimientos actuales y los objetivos que quieres alcanzar para diseñar un plan de consultoría o formación a tu medida.',
    },
    {
        icon: <UserCheck className="w-10 h-10 text-primary" />,
        title: '2. Consultoría Estratégica',
        description: 'Te asesoro sobre qué plugins usar, cómo estructurar tu web, qué enfoque técnico tomar o cualquier otra duda estratégica para asegurar el éxito de tu proyecto.',
    },
    {
        icon: <GraduationCap className="w-10 h-10 text-primary" />,
        title: '3. Formación Personalizada',
        description: 'Creo sesiones de formación 1 a 1, grabadas para ti, donde te enseño a gestionar tu contenido, usar una funcionalidad específica o administrar tu tienda online.',
    },
    {
        icon: <Settings className="w-10 h-10 text-primary" />,
        title: '4. Soporte y Acompañamiento',
        description: 'Después de la formación o consultoría, estoy disponible para resolver dudas puntuales y asegurar que puedes aplicar lo aprendido de forma autónoma.',
    },
];

export default function ConsultoriaFormacionPage() {

    const jsonLd: WithContext<Service> = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Consultoría y Formación en WordPress",
        "description": "Servicios de consultoría estratégica y formación personalizada en WordPress para ayudarte a tomar las mejores decisiones y gestionar tu web de forma autónoma.",
        "serviceType": "Consultoría y Formación WordPress",
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
                <Handshake className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Consultoría y Formación WordPress</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Te doy el conocimiento y la estrategia que necesitas. Resuelvo tus dudas y te enseño a sacar el máximo partido a tu web WordPress sin depender de nadie.
                </p>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Agendar una Sesión</Link>
                </Button>
            </div>

            {/* Features Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20 text-center">
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <Lightbulb className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Asesoramiento Experto</h3>
                    <p className="text-muted-foreground">Ahorra tiempo y dinero. Te guío para que tomes las decisions tecnológicas correctas para tu proyecto desde el principio.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <GraduationCap className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Formación a Medida</h3>
                    <p className="text-muted-foreground">Aprende exactamente lo que necesitas, a tu ritmo. Clases prácticas y enfocadas en tus objetivos específicos.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <UserCheck className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Gana Autonomía</h3>
                    <p className="text-muted-foreground">Mi objetivo es darte las herramientas para que puedas gestionar tu web con confianza y seguridad por ti mismo.</p>
                </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Mi Enfoque de Consultoría y Formación</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Un proceso diseñado para darte respuestas claras y habilidades prácticas.</p>
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
                <h2 className="text-3xl font-bold font-headline mb-4">¿Tienes dudas o quieres aprender a gestionar tu web?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Ya sea que necesites una segunda opinión sobre un enfoque técnico o quieras aprender a manejar tu tienda online, estoy aquí para ayudarte.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Contacta Conmigo</Link>
                </Button>
            </div>
        </section>
    );
}
