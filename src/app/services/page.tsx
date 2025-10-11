import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Code, Rocket, ShieldCheck, Wrench, Sprout, Handshake, Layers, PenTool, Zap, FileCheck, BarChart, ClipboardList, ShieldAlert, HeartPulse, Bug, Search as SearchIcon, CloudCog, Activity, DatabaseBackup, Headphones, GraduationCap, UserCheck, Lightbulb as LightbulbIcon, Link2, FileText, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    id: 'desarrollo-web',
    icon: <Code className="w-16 h-16 mx-auto text-primary mb-4" />,
    title: 'Creación y Desarrollo Web a Medida',
    shortDescription: 'Transformo tu idea en un sitio web profesional, funcional y a medida. Construyo soluciones web que no solo se ven bien, sino que también generan resultados.',
    features: [
      {
        icon: <PenTool className="w-10 h-10 text-primary mb-3" />,
        title: 'Diseño a Medida y UI/UX',
        description: 'Creamos un diseño atractivo, intuitivo y alineado con tu marca, centrado en una experiencia de usuario excepcional.'
      },
      {
        icon: <Layers className="w-10 h-10 text-primary mb-3" />,
        title: 'Desarrollo Robusto y Escalable',
        description: 'Construimos el sitio utilizando las mejores tecnologías (React, Next.js, etc.) para que sea rápido, seguro y fácil de hacer crecer en el futuro.'
      },
      {
        icon: <CheckCircle className="w-10 h-10 text-primary mb-3" />,
        title: 'Totalmente Autogestionable',
        description: 'Te entregaré un panel de administración (CMS) intuitivo para que puedas actualizar tu contenido sin depender de nadie.'
      }
    ],
  },
  {
    id: 'optimizacion-wpo',
    icon: <Rocket className="w-16 h-16 mx-auto text-primary mb-4" />,
    title: 'Optimización y Rendimiento (WPO)',
    shortDescription: 'Una web lenta pierde clientes y posicionamiento. Acelero tu sitio para que vuele, mejore tu SEO y ofrezca una experiencia de usuario impecable.',
    features: [
      {
        icon: <Zap className="w-10 h-10 text-primary mb-3" />,
        title: 'Carga Ultra Rápida',
        description: 'Reduzco el tiempo de carga para que tus páginas se muestren en un parpadeo, reteniendo a más visitantes.'
      },
      {
        icon: <BarChart className="w-10 h-10 text-primary mb-3" />,
        title: 'Mejora de Core Web Vitals',
        description: 'Optimizo tu sitio para superar las métricas de Google (LCP, FID, CLS), un factor clave para el ranking SEO.'
      },
      {
        icon: <FileCheck className="w-10 h-10 text-primary mb-3" />,
        title: 'Aumento de Conversiones',
        description: 'Una mejor experiencia de usuario se traduce directamente en más ventas, leads o suscripciones.'
      }
    ],
  },
  {
    id: 'reparacion-errores',
    icon: <Wrench className="w-16 h-16 mx-auto text-primary mb-4" />,
    title: 'Soporte y Reparación de Errores',
    shortDescription: '¿Errores 500? ¿Funcionalidades rotas? ¿Sitio hackeado? Mantén la calma. Diagnostico y soluciono cualquier problema para que tu web vuelva a estar online y funcionando.',
    features: [
      {
        icon: <Bug className="w-10 h-10 text-primary mb-3" />,
        title: 'Solución de Bugs y Errores',
        description: 'Arreglo desde pequeños fallos visuales hasta errores críticos que impiden el funcionamiento de tu aplicación web.'
      },
      {
        icon: <ShieldAlert className="w-10 h-10 text-primary mb-3" />,
        title: 'Limpieza de Malware y Seguridad',
        description: 'Elimino infecciones y spam de tu sitio, y refuerzo la seguridad para evitar futuros ataques.'
      },
      {
        icon: <HeartPulse className="w-10 h-10 text-primary mb-3" />,
        title: 'Recuperación de Sitios Caídos',
        description: 'Diagnostico el problema, recupero sitios, restauro bases de datos y pongo tu proyecto en marcha de nuevo.'
      }
    ],
  },
  {
    id: 'mantenimiento-wordpress',
    icon: <ShieldCheck className="w-16 h-16 mx-auto text-primary mb-4" />,
    title: 'Mantenimiento y Soporte Web',
    shortDescription: 'Duerme tranquilo sabiendo que tu proyecto está en buenas manos. Me encargo de la salud técnica de tu web para que tú te centres en tu negocio.',
    features: [
      {
        icon: <CloudCog className="w-10 h-10 text-primary mb-3" />,
        title: 'Actualizaciones Seguras',
        description: 'Me encargo de todas las actualizaciones técnicas (framework, librerías, CMS) de forma segura para evitar conflictos.'
      },
      {
        icon: <DatabaseBackup className="w-10 h-10 text-primary mb-3" />,
        title: 'Copias de Seguridad',
        description: 'Tu web estará siempre a salvo con copias de seguridad automáticas y almacenadas en la nube.'
      },
      {
        icon: <Headphones className="w-10 h-10 text-primary mb-3" />,
        title: 'Soporte Técnico Prioritario',
        description: 'Estoy a tu disposición para resolver dudas, realizar pequeños cambios o solucionar cualquier problema.'
      }
    ],
  },
  {
    id: 'consultoria-seo',
    icon: <Sprout className="w-16 h-16 mx-auto text-primary mb-4" />,
    title: 'Consultoría SEO Técnica',
    shortDescription: 'Atrae más clientes desde Google. Te ayudo a optimizar la base técnica de tu sitio para que aparezca en las primeras posiciones y consigas más tráfico orgánico.',
    features: [
      {
        icon: <SearchIcon className="w-10 h-10 text-primary mb-3" />,
        title: 'Auditoría SEO Completa',
        description: 'Detecto y soluciono los problemas técnicos (indexación, velocidad, datos estructurados) que frenan tu posicionamiento.'
      },
      {
        icon: <FileText className="w-10 h-10 text-primary mb-3" />,
        title: 'Estrategia de Contenidos',
        description: 'Te ayudo a estructurar tu contenido para que atraiga a tu público y posicione para las palabras clave correctas.'
      },
      {
        icon: <LineChart className="w-10 h-10 text-primary mb-3" />,
        title: 'Resultados Medibles',
        description: 'Nos basamos en datos para tomar decisiones y medir el impacto de las acciones SEO en tu negocio.'
      }
    ],
  },
  {
    id: 'consultoria-formacion',
    icon: <Handshake className="w-16 h-16 mx-auto text-primary mb-4" />,
    title: 'Consultoría y Formación Tecnológica',
    shortDescription: 'Te doy el conocimiento y la estrategia que necesitas. Resuelvo tus dudas y te ayudo a tomar las mejores decisiones tecnológicas para tu proyecto.',
    features: [
      {
        icon: <LightbulbIcon className="w-10 h-10 text-primary mb-3" />,
        title: 'Asesoramiento Experto',
        description: 'Ahorra tiempo y dinero. Te guío para que elijas la tecnología y arquitectura correctas para tu proyecto desde el principio.'
      },
      {
        icon: <GraduationCap className="w-10 h-10 text-primary mb-3" />,
        title: 'Formación a Medida',
        description: 'Aprende exactamente lo que necesitas, a tu ritmo. Clases prácticas y enfocadas en tus objetivos específicos.'
      },
      {
        icon: <UserCheck className="w-10 h-10 text-primary mb-3" />,
        title: 'Gana Autonomía',
        description: 'Mi objetivo es darte las herramientas para que puedas gestionar los aspectos clave de tu web con confianza y seguridad.'
      }
    ],
  }
];

export default function ServicesPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Servicios de Desarrollo Web</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ofrezco un abanico completo de soluciones profesionales para crear, mejorar y mantener tu presencia online. Desde el desarrollo inicial hasta la optimización y el soporte continuo.
        </p>
      </div>

      <div className="sticky top-16 bg-background/80 backdrop-blur-sm z-10 py-4 mb-12 border-b">
        <nav className="max-w-4xl mx-auto flex justify-center flex-wrap gap-x-4 gap-y-2">
          {services.map(service => (
            <Button key={service.id} variant="ghost" asChild>
              <Link href={`#${service.id}`}>{service.title.split(' ')[0]}</Link>
            </Button>
          ))}
        </nav>
      </div>

      <div className="space-y-24">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="scroll-mt-24">
            <div className="text-center mb-12">
              {service.icon}
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">{service.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {service.shortDescription}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-12 text-center">
              {service.features.map(feature => (
                <div key={feature.title} className="flex flex-col items-center p-6 bg-card/50 rounded-lg">
                  {feature.icon}
                  <h3 className="text-xl font-headline mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/contact">Solicitar Presupuesto para {service.title.split(' ')[0]}</Link>
              </Button>
            </div>
          </section>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-24 text-left">
        <h2 className="text-3xl font-bold font-headline mb-6 text-center">Tu Aliado Tecnológico de Confianza</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline">
          <p>
            Mi objetivo va más allá de entregar un sitio web funcional. Me dedico a construir <strong>soluciones digitales robustas, seguras y de alto rendimiento</strong> que sirvan como una base sólida para el crecimiento de tu negocio. Entiendo que cada proyecto es único y requiere una atención al detalle que marca la diferencia.
          </p>

          <h3 className="text-2xl font-headline">Calidad y Rendimiento como Prioridad</h3>
          <p>
            Un sitio web lento o poco fiable puede costar clientes y dañar tu reputación. Por eso, aplico las mejores prácticas de desarrollo y optimización (WPO) desde el primer día. Esto incluye un código limpio y eficiente, la optimización de assets, el uso de caché inteligente y una configuración de servidor adecuada para que tu web vuele. Mi trabajo se centra en superar los estándares de los <strong>Core Web Vitals de Google</strong>, un factor clave para el SEO.
          </p>

          <h3 className="text-2xl font-headline">Seguridad y Mantenimiento Proactivo</h3>
          <p>
            La seguridad no es una opción, es una necesidad. Implemento múltiples capas de protección para blindar tu sitio contra amenazas y ataques. Además, con mis planes de mantenimiento, puedes despreocuparte de las tareas técnicas: me encargo de las actualizaciones, copias de seguridad y monitorización constante para garantizar que tu web esté siempre online y funcionando a la perfección.
          </p>
            <p>
              Tanto si necesitas un sitio nuevo, reparar uno existente o simplemente asegurarte de que tu proyecto está en buenas manos, estoy aquí para ayudarte.
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
