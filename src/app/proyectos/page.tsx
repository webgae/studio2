import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, TrendingUp, CheckCircle, ShieldOff, Palette } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Proyectos y Casos de Éxito',
    description: 'Explora una selección de proyectos de desarrollo y optimización en WordPress, mostrando los desafíos, soluciones y resultados obtenidos para mis clientes.',
};

const projects = [
    {
        title: 'Optimización de Velocidad para un E-commerce',
        client: 'Tienda de Moda Online',
        problem: {
            icon: <Target className="w-8 h-8 text-destructive" />,
            title: 'El Problema',
            description: 'Un e-commerce con un tiempo de carga superior a 7 segundos, lo que resultaba en una alta tasa de abandono de carritos y una mala experiencia de usuario, afectando directamente a las ventas.',
        },
        solution: {
            icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
            title: 'La Solución',
            description: 'Se realizó una auditoría de rendimiento completa, optimización de más de 1.000 imágenes, implementación de un sistema de caché avanzado (Redis), y se refactorizó el código de plugins ineficientes para reducir las consultas a la base de datos.',
        },
        results: {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            title: 'El Resultado',
            items: [
                'Tiempo de carga reducido a 1.2 segundos (mejora del 80%).',
                'Aumento del 25% en la tasa de conversión.',
                'Mejora en el ranking SEO gracias a los Core Web Vitals.',
            ],
        },
    },
    {
        title: 'Desarrollo de Plugin de Reservas a Medida',
        client: 'Consultoría de Negocios',
        problem: {
            icon: <Target className="w-8 h-8 text-destructive" />,
            title: 'El Problema',
            description: 'El cliente necesitaba un sistema de gestión de citas que se integrara con su calendario y sistema de facturación, pero ninguna solución existente cumplía con sus requisitos específicos de flujo de trabajo.',
        },
        solution: {
            icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
            title: 'La Solución',
            description: 'Se desarrolló un plugin de WordPress desde cero que permite a los clientes reservar y pagar citas online. El plugin se sincroniza en tiempo real con Google Calendar y genera facturas automáticamente a través de una API externa.',
        },
        results: {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            title: 'El Resultado',
            items: [
                'Reducción de 10 horas semanales en trabajo administrativo.',
                'Eliminación de conflictos de programación y errores manuales.',
                'Experiencia de reserva fluida y profesional para sus clientes.',
            ],
        },
    },
    {
        title: 'Limpieza y Seguridad de Sitio Hackeado',
        client: 'Blog de Viajes Popular',
        problem: {
            icon: <ShieldOff className="w-8 h-8 text-destructive" />,
            title: 'El Problema',
            description: 'El sitio fue infectado con malware, redirigía a los usuarios a páginas de spam y fue marcado como "no seguro" por los navegadores, perdiendo el 90% de su tráfico orgánico de la noche a la mañana.',
        },
        solution: {
            icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
            title: 'La Solución',
            description: 'Se realizó un análisis forense para identificar la vulnerabilidad. Se eliminaron todos los archivos maliciosos, se limpió la base de datos y se implementaron medidas de seguridad robustas, incluyendo un firewall (WAF) y autenticación de dos factores.',
        },
        results: {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            title: 'El Resultado',
            items: [
                'Sitio completamente limpio y operativo en menos de 24 horas.',
                'Eliminación de la lista negra de Google en 48 horas.',
                'Implementación de un protocolo de seguridad que ha prevenido futuros ataques.',
            ],
        },
    },
    {
        title: 'Creación de Tema a Medida para Portfolio Creativo',
        client: 'Fotógrafo Profesional',
        problem: {
            icon: <Palette className="w-8 h-8 text-destructive" />,
            title: 'El Problema',
            description: 'El cliente usaba una plantilla genérica que no lograba transmitir la calidad y el estilo único de su trabajo fotográfico. El diseño era lento, poco original y no destacaba sus imágenes correctamente.',
        },
        solution: {
            icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
            title: 'La Solución',
            description: 'Se diseñó y desarrolló un tema de WordPress desde cero (FSE - Full Site Editing), enfocado en el minimalismo y la velocidad. Se crearon galerías de carga diferida (lazy loading) y un diseño de portfolio personalizable para que el cliente pudiera gestionarlo fácilmente.',
        },
        results: {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            title: 'El Resultado',
            items: [
                'Un diseño único que refleja la marca personal del fotógrafo.',
                'La velocidad de carga de las galerías mejoró en un 300%.',
                'Aumento del 50% en las solicitudes de contacto a través del nuevo formulario.',
            ],
        },
    },
    {
        title: 'Rediseño y Migración de un Blog Corporativo',
        client: 'Startup Tecnológica',
        problem: {
            icon: <Target className="w-8 h-8 text-destructive" />,
            title: 'El Problema',
            description: 'Un blog con contenido de valor pero un diseño anticuado, no responsivo y una estructura de URLs deficiente que perjudicaba gravemente el SEO y la retención de usuarios en dispositivos móviles.',
        },
        solution: {
            icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
            title: 'La Solución',
            description: 'Se diseñó y desarrolló un nuevo tema de WordPress moderno y totalmente responsivo. Se planificó y ejecutó una migración cuidadosa de más de 300 artículos, aplicando redirecciones 301 para conservar la autoridad SEO.',
        },
        results: {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            title: 'El Resultado',
            items: [
                'Aumento del 150% en el tráfico orgánico en 3 meses.',
                'Disminución del 40% en la tasa de rebote.',
                'Diseño profesional que ahora refleja la calidad de la marca.',
            ],
        },
    },
];

export default function ProjectsPage() {
    return (
        <section>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-headline mb-4">Proyectos y Casos de Éxito</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Aquí puedes ver cómo he ayudado a mis clientes a superar desafíos y alcanzar sus objetivos con soluciones WordPress a medida.
                </p>
            </div>

            <div className="space-y-16">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-card/50 border-border/80 shadow-md overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-3xl font-bold font-headline mb-1">{project.title}</h2>
                            <p className="text-md text-muted-foreground mb-6">Cliente: {project.client}</p>

                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Problema */}
                                <div className="space-y-3">
                                    {project.problem.icon}
                                    <h3 className="text-xl font-semibold">{project.problem.title}</h3>
                                    <p className="text-muted-foreground">{project.problem.description}</p>
                                </div>

                                {/* Solución */}
                                <div className="space-y-3">
                                    {project.solution.icon}
                                    <h3 className="text-xl font-semibold">{project.solution.title}</h3>
                                    <p className="text-muted-foreground">{project.solution.description}</p>
                                </div>

                                {/* Resultado */}
                                <div className="space-y-3">
                                    {project.results.icon}
                                    <h3 className="text-xl font-semibold">{project.results.title}</h3>
                                    <ul className="space-y-2">
                                        {project.results.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4">¿Tienes un proyecto en mente?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Si te enfrentas a un desafío similar o tienes una nueva idea, me encantaría saber de ti.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Hablemos de tu Proyecto</Link>
                </Button>
            </div>
        </section>
    );
}
