import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Wrench, ShieldAlert, HeartPulse, Bug, Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Reparación y Arreglo de Errores en WordPress',
    description: 'Servicio de reparación de errores de WordPress. Soluciono problemas, bugs, errores críticos y recupero sitios hackeados o caídos para que tu web vuelva a funcionar.',
};

const processSteps = [
    {
        icon: <Search className="w-10 h-10 text-primary" />,
        title: '1. Diagnóstico del Problema',
        description: 'Investigo a fondo para encontrar la causa raíz del error, ya sea un conflicto de plugins, un problema en el tema, un error de base de datos o un hackeo.',
    },
    {
        icon: <Bug className="w-10 h-10 text-primary" />,
        title: '2. Solución del Error',
        description: 'Aplico la solución más efectiva y segura, ya sea reparando código, limpiando malware, restaurando una copia de seguridad o ajustando la configuración del servidor.',
    },
    {
        icon: <ShieldAlert className="w-10 h-10 text-primary" />,
        title: '3. Fortalecimiento',
        description: 'Una vez solucionado el problema, refuerzo la seguridad y la estabilidad de tu sitio para minimizar el riesgo de que vuelva a ocurrir en el futuro.',
    },
    {
        icon: <HeartPulse className="w-10 h-10 text-primary" />,
        title: '4. Verificación y Seguimiento',
        description: 'Realizo pruebas completas para asegurar que todo vuelve a funcionar a la perfección y te entrego un informe de las acciones realizadas.',
    },
];

export default function ReparacionErroresPage() {
    return (
        <section>
            {/* Hero Section */}
            <div className="text-center mb-16">
                <Wrench className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Reparación de Errores WordPress</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    ¿Pantalla blanca de la muerte? ¿Errores 500? ¿Sitio hackeado? Mantén la calma. Soluciono cualquier problema para que tu web vuelva a estar online y funcionando.
                </p>
                 <Button asChild size="lg" className="mt-8" variant="destructive">
                    <Link href="/contact">¡Necesito Ayuda Urgente!</Link>
                </Button>
            </div>

            {/* Features Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20 text-center">
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <Bug className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Solución de Bugs</h3>
                    <p className="text-muted-foreground">Arreglo desde pequeños fallos visuales hasta errores críticos que impiden el funcionamiento de tu web.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <ShieldAlert className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Limpieza de Malware</h3>
                    <p className="text-muted-foreground">Elimino infecciones, malware y spam de tu sitio, y refuerzo la seguridad para evitar futuros ataques.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                    <HeartPulse className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-headline mb-2">Recuperación de Sitios</h3>
                    <p className="text-muted-foreground">Recupero sitios caídos, restauro bases de datos corruptas y pongo tu proyecto en marcha de nuevo.</p>
                </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Mi Proceso de Reparación</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Un plan de acción rápido y eficaz para devolverle la vida a tu sitio web.</p>
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
                <h2 className="text-3xl font-bold font-headline mb-4">¿Tu web está rota o no funciona?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    No pierdas más tiempo ni clientes. Ponte en contacto conmigo y resolveré el problema de forma rápida y profesional.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Arreglar mi Web</Link>
                </Button>
            </div>
        </section>
    );
}