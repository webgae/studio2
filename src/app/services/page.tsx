import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, Code, Rocket, ShieldCheck, Wrench, Sprout, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
   {
    icon: <Code className="w-8 h-8 text-primary mb-4" />,
    title: 'Creación y Desarrollo Web',
    slug: 'desarrollo-web',
    description: 'Creo tu sitio web desde cero o desarrollo funcionalidades a medida para cumplir tus objetivos, con un diseño profesional y enfocado en la usabilidad.',
    features: ['Diseño único y responsivo', 'Funcionalidades personalizadas', 'Código limpio y optimizado para SEO'],
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary mb-4" />,
    title: 'Optimización y Rendimiento (WPO)',
    slug: 'optimizacion-wpo',
    description: 'Mejoro la velocidad de carga y el rendimiento general de tu sitio WordPress para ofrecer una mejor experiencia de usuario y mejorar tu posicionamiento.',
    features: ['Optimización de imágenes y caché', 'Minificación de código', 'Análisis de rendimiento (Core Web Vitals)'],
  },
   {
    icon: <Wrench className="w-8 h-8 text-primary mb-4" />,
    title: 'Reparación y Arreglo de Errores',
    slug: 'reparacion-errores',
    description: 'Soluciono desde pequeños fallos hasta problemas críticos en tu web. Arreglo lo que otros hicieron mal y recupero sitios que no funcionan.',
    features: ['Diagnóstico y solución de bugs', 'Limpieza de malware y seguridad', 'Recuperación de sitios caídos'],
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary mb-4" />,
    title: 'Mantenimiento y Soporte',
    slug: 'mantenimiento-wordpress',
    description: 'Ofrezco planes de mantenimiento para mantener tu sitio WordPress seguro, actualizado y funcionando sin problemas, con soporte técnico continuo.',
    features: ['Actualizaciones de core y plugins', 'Copias de seguridad automáticas', 'Monitorización de seguridad 24/7'],
  },
  {
    icon: <Sprout className="w-8 h-8 text-primary mb-4" />,
    title: 'Consultoría SEO para WordPress',
    slug: 'consultoria-seo',
    description: 'Te ayudo a mejorar tu visibilidad en Google con una estrategia SEO técnica y de contenidos adaptada a tu plataforma WordPress.',
    features: ['Auditoría SEO técnica completa', 'Optimización de contenido', 'Estrategia de palabras clave'],
  },
   {
    icon: <Handshake className="w-8 h-8 text-primary mb-4" />,
    title: 'Consultoría y Formación',
    slug: 'consultoria-formacion',
    description: 'Te asesoro para que saques el máximo partido a tu web y ofrezco formación personalizada para que puedas gestionar tu contenido de forma autónoma.',
    features: ['Asesoramiento estratégico', 'Formación en gestión de WordPress', 'Soporte para resolver dudas'],
  },
];

export default function ServicesPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Servicios WordPress</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ofrezco un abanico completo de soluciones profesionales para crear, mejorar y mantener tu presencia online con WordPress. Desde el desarrollo inicial hasta la optimización y el soporte continuo.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col text-center border bg-card/50 hover:border-primary hover:shadow-lg transition-all duration-300">
            <CardHeader className="items-center">
              {service.icon}
              <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
              <CardDescription className="flex-grow min-h-[60px]">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-left">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
             <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/services/${service.slug}`}>
                  Ver detalles
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

       <div className="max-w-4xl mx-auto mt-24 text-left">
          <h2 className="text-3xl font-bold font-headline mb-6 text-center">Tu Experto WordPress de Confianza</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline">
            <p>
              Mi objetivo va más allá de entregar un sitio web funcional. Me dedico a construir <strong>soluciones WordPress robustas, seguras y de alto rendimiento</strong> que sirvan como una base sólida para el crecimiento de tu negocio. Como experto en WordPress, entiendo que cada proyecto es único y requiere una atención al detalle que marca la diferencia.
            </p>

            <h3 className="text-2xl font-headline">Calidad y Rendimiento como Prioridad</h3>
            <p>
              Un sitio web lento o poco fiable puede costar clientes y dañar tu reputación. Por eso, aplico las mejores prácticas de desarrollo y optimización (WPO) desde el primer día. Esto incluye un código limpio y eficiente, la optimización de imágenes, el uso de caché inteligente y una configuración de servidor adecuada para que tu web vuele. Mi trabajo se centra en superar los estándares de los <strong>Core Web Vitals de Google</strong>, un factor clave para el SEO.
            </p>

            <h3 className="text-2xl font-headline">Seguridad y Mantenimiento Proactivo</h3>
            <p>
              La seguridad no es una opción, es una necesidad. Implemento múltiples capas de protección para blindar tu sitio contra amenazas y ataques. Además, con mis planes de mantenimiento, puedes despreocuparte de las tareas técnicas: me encargo de las actualizaciones, copias de seguridad y monitorización constante para garantizar que tu web esté siempre online y funcionando a la perfección.
            </p>
             <p>
                Tanto si necesitas un sitio nuevo, reparar uno existente o simplemente asegurarte de que tu web está en buenas manos, estoy aquí para ayudarte.
            </p>
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact">Hablemos de tu Proyecto</Link>
            </Button>
          </div>
        </div>

    </section>
  );
}