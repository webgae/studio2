import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Code, Rocket, ShieldCheck, Star, Wrench } from 'lucide-react';
import Image from 'next/image';

const featuredServices = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Creación de Sitios Web',
    description: 'Creo tu sitio web desde cero con un diseño profesional y funcionalidades a medida.',
    href: '/services'
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Optimización de Velocidad',
    description: 'Mejoro el rendimiento de tu web para una carga más rápida y una mejor experiencia.',
    href: '/services'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Mantenimiento y Seguridad',
    description: 'Mantengo tu sitio seguro, actualizado y funcionando sin interrupciones.',
    href: '/services'
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: 'Reparación de Errores',
    description: 'Soluciono problemas, arreglo bugs y recupero sitios que no funcionan correctamente.',
    href: '/services'
  },
];

const testimonials = [
  {
    quote: "Transformó nuestra web lenta en una máquina de velocidad. ¡El cambio fue increíble y nuestros clientes lo notaron al instante! Un verdadero profesional.",
    name: "Ana García",
    company: "CEO de TechForward"
  },
  {
    quote: "El plugin personalizado que desarrolló para nosotros funciona a la perfección. Entendió nuestros requisitos y entregó un producto de alta calidad a tiempo.",
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
    answer: "Mi plan de mantenimiento incluye actualizaciones de WordPress, temas y plugins, copias de seguridad regulares, monitorización de seguridad 24/7 y soporte técnico para resolver cualquier problema que surja."
  },
  {
    question: "¿Puedes arreglar un sitio web que otro desarrollador hizo mal o dejó incompleto?",
    answer: "Sí, absolutamente. Una gran parte de mi trabajo consiste en solucionar problemas heredados, optimizar código de baja calidad y completar proyectos inacabados. Puedo auditar tu sitio, identificar los puntos débiles y aplicar las soluciones necesarias para que funcione como debería."
  },
  {
    question: "¿Puedes arreglar un sitio web de WordPress que ha sido hackeado?",
    answer: "¡Por supuesto! Ofrezco servicios de limpieza de malware y fortalecimiento de la seguridad para restaurar tu sitio y protegerlo contra futuros ataques."
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-background pt-10 pb-24 sm:pb-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold font-headline tracking-tight text-foreground sm:text-6xl">
              Experto en Desarrollo WordPress
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Construyo, optimizo y mantengo sitios web de alto rendimiento con WordPress para llevar tu presencia online al siguiente nivel.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/services">Ver Servicios</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contacto</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                 <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9YpLcwtYwG-cyJpzcZFHHpNTcN3qaws-aPRXcsmtcBgP41wnzHq-QFX_MLUDDu7JY7v5YN3ELyaX1g_T4SKLCXnQXPnAp80G2OAJJ_zVg4FQTd_Kjlss8ZUdgrLxX5qLUl67W0eGMTAY1YHRgfgncKtkDf2T2-5pTCSQzgr7M3Y6wR4UpE_NNrXga8SCX/s16000-rw/EXPERTO_WP.png"
                  alt="Experto WordPress"
                  width={800}
                  height={800}
                  className="w-[55rem] max-w-none rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
         <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Servicios</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Soluciones para cada necesidad</p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Desde la creación de un sitio nuevo hasta la optimización de uno existente.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Card key={service.title} className="text-center hover:border-primary transition-colors hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                        <Link href={service.href}>Saber más</Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
             <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">Lo que dicen mis clientes</h2>
             <p className="mt-4 text-lg text-muted-foreground">Resultados que generan confianza.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex-col items-start">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">Preguntas Frecuentes</h2>
            <p className="mt-4 text-lg text-muted-foreground">¿Tienes dudas? Aquí tienes las respuestas a las más comunes.</p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
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
