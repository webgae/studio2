import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Desarrollo Web Moderno',
    description: 'Creamos aplicaciones web rápidas, responsivas y escalables utilizando las últimas tecnologías como Next.js y React.',
    features: ['Diseño a medida', 'Optimización SEO', 'Rendimiento superior'],
  },
  {
    title: 'Integración de APIs',
    description: 'Conectamos tu aplicación con servicios de terceros y APIs, como la de Blogger, para extender su funcionalidad.',
    features: ['APIs REST y GraphQL', 'Sincronización de datos', 'Autenticación segura'],
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Te asesoramos en la selección de la pila tecnológica adecuada y las mejores prácticas para tu proyecto.',
    features: ['Arquitectura de software', 'Estrategia de producto', 'Revisión de código'],
  },
];

export default function ServicesPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Nuestros Servicios</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ofrecemos soluciones de alta calidad para llevar tus ideas al siguiente nivel.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
