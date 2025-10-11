import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Users, Heart, Award } from 'lucide-react';
import { type Person, type WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: 'Sobre Mí',
    description: 'Conoce la historia, la filosofía y la experiencia de WEBGAE como desarrollador web. Un aliado estratégico para tu proyecto online.',
};

const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'PHP', 'WordPress', 'Bases de Datos', 'SEO Técnico'];

export default function SobreMiPage() {

    const jsonLd: WithContext<Person> = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "WEBGAE", // Replace with your actual name
        "url": "https://www.webgae.com/sobre-mi",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf4pr1qIX655FWH5HyeZZ-fmf2YH_yHjkFkX_4ED-Ml8vBvVH1evKThEH1q5sjpvkVncJ650FjnEBV7_z9XAwJK1JpSEnvQI-8CyZ16cuZkl08KlUZ0Sqj3xUHlU2qj2IWmwQn5vFWteR4/s2000/4261577.jpg", // Replace with your actual profile image URL
        "jobTitle": "Desarrollador Web Full-Stack",
        "worksFor": {
            "@type": "Organization",
            "name": "WEBGAE"
        },
        "description": "Desarrollador web dedicado a construir, optimizar y mantener soluciones digitales de alto rendimiento. Mi objetivo es ser un aliado tecnológico para mis clientes."
    };

    return (
        <section>
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center mb-16 pt-12">
                <div className="md:col-span-3">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Más que un desarrollador: tu aliado estratégico en tecnología web</h1>
                    <p className="text-lg text-muted-foreground">
                        Hola, soy el profesional detrás de WEBGAE. No solo construyo sitios web; creo soluciones digitales robustas y a medida que impulsan negocios. Mi pasión es transformar tus ideas en una realidad funcional, segura y de alto rendimiento.
                    </p>
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <div className="relative w-64 h-64">
                         <Image
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf4pr1qIX655FWH5HyeZZ-fmf2YH_yHjkFkX_4ED-Ml8vBvVH1evKThEH1q5sjpvkVncJ650FjnEBV7_z9XAwJK1JpSEnvQI-8CyZ16cuZkl08KlUZ0Sqj3xUHlU2qj2IWmwQn5vFWteR4/s2000/4261577.jpg"
                            alt="Foto de perfil de WEBGAE"
                            width={400}
                            height={400}
                            className="rounded-full object-cover shadow-lg border-4 border-primary/20"
                        />
                    </div>
                </div>
            </div>

            {/* Filosofía Section */}
            <div className="bg-card/50 p-8 rounded-lg border mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Mi Filosofía de Trabajo</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Award className="w-10 h-10 text-primary mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Calidad Sobre Cantidad</h3>
                        <p className="text-muted-foreground">Prefiero hacer menos proyectos pero hacerlos excepcionalmente bien. Cada línea de código y cada detalle de diseño están pensados para la excelencia y la durabilidad.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="w-10 h-10 text-primary mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Colaboración y Transparencia</h3>
                        <p className="text-muted-foreground">Tú eres el experto en tu negocio, y yo en la tecnología. Trabajo contigo, no solo para ti. La comunicación es constante y clara en cada fase del proyecto.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heart className="w-10 h-10 text-primary mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Pasión por Resolver Problemas</h3>
                        <p className="text-muted-foreground">Disfruto de los desafíos. Ya sea un error complejo, una web lenta o una funcionalidad que parece imposible, encuentro una enorme satisfacción en dar con la solución perfecta.</p>
                    </div>
                </div>
            </div>

            {/* Mi Historia y Skills */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
                 <div>
                    <h2 className="text-3xl font-bold mb-4">Mi Trayectoria</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            Mi viaje en el mundo del desarrollo web comenzó hace más de una década, impulsado por la curiosidad de entender cómo funcionaba internet. He trabajado con una amplia gama de tecnologías, desde el desarrollo back-end con PHP y Node.js hasta la creación de interfaces interactivas con React y Next.js.
                        </p>
                        <p>
                            Lo que empezó como un hobby se convirtió en una profesión. He trabajado en todo tipo de proyectos: desde blogs personales hasta complejas tiendas online y plataformas a medida. Esta experiencia me ha enseñado no solo a programar, sino a entender los objetivos de negocio que hay detrás de cada proyecto digital.
                        </p>
                         <p>
                            Hoy, mi objetivo es simple: utilizar mi conocimiento técnico para ayudar a otros a tener éxito online, construyendo soluciones de las que puedan sentirse orgullosos.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Mis Herramientas</h2>
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
            <div className="text-center bg-card/50 p-10 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold mb-4">¿Crees que podemos trabajar juntos?</h2>
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
