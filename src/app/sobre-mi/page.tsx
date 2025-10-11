import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Users, Heart, Award } from 'lucide-react';
import { type Person, type WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: 'Sobre Mí',
    description: 'Conoce la historia, la filosofía y la experiencia de WEBGAE como desarrollador experto en WordPress. Un aliado estratégico para tu proyecto online.',
};

const skills = ['WordPress', 'React', 'Next.js', 'JavaScript/TypeScript', 'PHP', 'Node.js', 'WooCommerce', 'SEO Técnico'];

export default function SobreMiPage() {

    const jsonLd: WithContext<Person> = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "WEBGAE", // Replace with your actual name
        "url": "https://www.expertowordpress.org/sobre-mi",
        "image": "https://www.expertowordpress.org/placeholder-profile.jpg", // Replace with your actual profile image URL
        "jobTitle": "Experto en Desarrollo WordPress",
        "worksFor": {
            "@type": "Organization",
            "name": "WEBGAE"
        },
        "description": "Experto en WordPress dedicado a construir, optimizar y mantener sitios web de alto rendimiento. Mi objetivo es ser un aliado tecnológico para mis clientes."
    };

    return (
        <section>
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center mb-16">
                <div className="md:col-span-3">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Más que un desarrollador: tu aliado estratégico en WordPress</h1>
                    <p className="text-lg text-muted-foreground">
                        Hola, soy el profesional detrás de WEBGAE. No solo construyo sitios web; creo soluciones digitales robustas y a medida que impulsan negocios. Mi pasión es transformar tus ideas en una realidad funcional, segura y de alto rendimiento.
                    </p>
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <div className="relative w-64 h-64">
                         <Image
                            src="https://picsum.photos/seed/profile/400/400"
                            alt="Foto de perfil de WEBGAE"
                            width={400}
                            height={400}
                            className="rounded-full object-cover shadow-lg border-4 border-primary/20"
                            data-ai-hint="professional headshot"
                        />
                    </div>
                </div>
            </div>

            {/* Filosofía Section */}
            <div className="bg-card p-8 rounded-lg border mb-16">
                <h2 className="text-3xl font-bold font-headline text-center mb-8">Mi Filosofía de Trabajo</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Award className="w-10 h-10 text-primary mb-3" />
                        <h3 className="text-xl font-headline mb-2">Calidad Sobre Cantidad</h3>
                        <p className="text-muted-foreground">Prefiero hacer menos proyectos pero hacerlos excepcionalmente bien. Cada línea de código y cada detalle de diseño están pensados para la excelencia y la durabilidad.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="w-10 h-10 text-primary mb-3" />
                        <h3 className="text-xl font-headline mb-2">Colaboración y Transparencia</h3>
                        <p className="text-muted-foreground">Tú eres el experto en tu negocio, y yo en la tecnología. Trabajo contigo, no solo para ti. La comunicación es constante y clara en cada fase del proyecto.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heart className="w-10 h-10 text-primary mb-3" />
                        <h3 className="text-xl font-headline mb-2">Pasión por Resolver Problemas</h3>
                        <p className="text-muted-foreground">Disfruto de los desafíos. Ya sea un error complejo, una web lenta o una funcionalidad que parece imposible, encuentro una enorme satisfacción en dar con la solución perfecta.</p>
                    </div>
                </div>
            </div>

            {/* Mi Historia y Skills */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
                 <div>
                    <h2 className="text-3xl font-bold font-headline mb-4">Mi Trayectoria</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            Mi viaje en el mundo del desarrollo web comenzó hace más de una década, impulsado por la curiosidad de entender cómo funcionaba internet. Pronto descubrí WordPress y quedé fascinado por su poder y flexibilidad.
                        </p>
                        <p>
                            Lo que empezó como un hobby se convirtió en una profesión. He trabajado en todo tipo de proyectos: desde blogs personales hasta complejas tiendas online y plataformas a medida. Esta experiencia me ha enseñado no solo a programar, sino a entender los objetivos de negocio que hay detrás de cada sitio web.
                        </p>
                         <p>
                            Hoy, mi objetivo es simple: utilizar mi conocimiento técnico para ayudar a otros a tener éxito online, construyendo webs de las que puedan sentirse orgullosos.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-headline mb-4">Mis Herramientas</h2>
                    <p className="text-muted-foreground mb-6">Estas son algunas de las tecnologías y herramientas con las que trabajo a diario para crear soluciones modernas y eficientes.</p>
                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <div key={skill} className="bg-secondary text-secondary-foreground font-medium py-2 px-4 rounded-full">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-card p-10 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold font-headline mb-4">¿Crees que podemos trabajar juntos?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Si compartes esta visión de calidad y buscas un profesional comprometido con tu proyecto, me encantaría conocer tu idea.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Hablemos</Link>
                </Button>
            </div>
        </section>
    );
}
