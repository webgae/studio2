import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Code, Rocket, ShieldCheck, Star, Zap, Layers, Handshake } from 'lucide-react';
import { type FAQPage, type WithContext } from 'schema-dts';

const featuredServices = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Desarrollo Web a Medida',
    description: 'Soluciones web rápidas, funcionales y con un diseño excepcional desde cero.',
    href: '/services#desarrollo-web'
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Optimización de Rendimiento',
    description: 'Mejora radical de la velocidad de carga y la experiencia de usuario de tu sitio actual.',
    href: '/services#optimizacion-wpo'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Mantenimiento y Seguridad',
    description: 'Monitorización, actualizaciones y copias de seguridad para que tu web funcione sin interrupciones.',
    href: '/services#mantenimiento-wordpress'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Reparación y Soporte',
    description: 'Solución de errores críticos, limpieza de malware y soporte técnico especializado.',
    href: '/services#reparacion-errores'
  },
];

const testimonials = [
  {
    quote: "Transformó nuestra web lenta en una máquina de velocidad. ¡El cambio fue increíble y nuestros clientes lo notaron al instante! Un verdadero profesional.",
    name: "Ana García",
    company: "CEO de TechForward"
  },
  {
    quote: "La funcionalidad a medida que desarrolló para nosotros funciona a la perfección. Entendió nuestros requisitos y entregó un producto de alta calidad a tiempo.",
    name: "Carlos Rodríguez",
    company: "Director de Marketing en Innovate Co."
  },
  {
    quote: "Gracias a su servicio de mantenimiento, ya no me preocupo por la seguridad de mi sitio. Siempre está disponible para resolver cualquier duda. ¡Totalmente recomendado!",
    name: "Laura Pérez",
    company: "Fundadora de Creative Minds"
  }
];

const faqs = [
  {
    question: "¿En cuánto tiempo puedes tener mi sitio web listo?",
    answer: "Un sitio web básico puede estar listo en 1-2 semanas. Proyectos más complejos con funcionalidades personalizadas pueden llevar más tiempo. Siempre proporciono una estimación detallada antes de comenzar."
  },
  {
    question: "¿Optimizas los sitios para SEO?",
    answer: "Sí, todas las webs que desarrollo siguen las mejores prácticas de SEO técnico para asegurar una base sólida que ayude a tu posicionamiento en buscadores como Google."
  },
  {
    question: "¿Qué incluye el servicio de mantenimiento?",
    answer: "Mi plan de mantenimiento incluye actualizaciones del sistema y sus dependencias, copias de seguridad regulares, monitorización de seguridad 24/7 y soporte técnico para resolver cualquier problema que surja."
  },
  {
    question: "¿Puedes arreglar un sitio web que otro desarrollador hizo mal o dejó incompleto?",
    answer: "Sí, absolutamente. Una gran parte de mi trabajo consiste en solucionar problemas heredados, optimizar código de baja calidad y completar proyectos inacabados. Puedo auditar tu sitio, identificar los puntos débiles y aplicar las soluciones necesarias para que funcione como debería."
  },
  {
    question: "¿Puedes arreglar un sitio web que ha sido hackeado?",
    answer: "¡Por supuesto! Ofrezco servicios de limpieza de malware y fortalecimiento de la seguridad para restaurar tu sitio y protegerlo contra futuros ataques."
  }
];

export default function HomePage() {

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="text-center py-20 sm:py-32">
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        >
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]"></div>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Desarrollo web para la era moderna
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
          Construyo soluciones digitales de alto rendimiento que son rápidas, funcionales y visualmente impactantes. Tu visión, hecha realidad con tecnología de vanguardia.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button asChild size="lg">
            <Link href="/services">Ver Servicios</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Hablemos</Link>
          </Button>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Soluciones para cada necesidad</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Desde la creación de un nuevo proyecto hasta la optimización y el mantenimiento de uno existente.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Card key={service.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Lo que dicen mis clientes</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Resultados que generan confianza.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card/50 border-border/50 flex flex-col justify-between p-6">
               <CardContent className="p-0 pb-6">
                <p className="text-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="p-0 flex-col items-start">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

       {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Preguntas Frecuentes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">¿Tienes dudas? Aquí tienes las respuestas a las más comunes.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
           <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">¿No encuentras tu pregunta?</p>
                <Button asChild size="lg">
                    <Link href="/contact">Contacta conmigo</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
