import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Code, Rocket, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary mb-4" />,
    title: 'Desarrollo de Temas y Plugins',
    description: 'Creo temas de WordPress a medida y plugins personalizados para extender la funcionalidad de tu sitio y cumplir con tus requisitos específicos.',
    features: ['Diseño único y responsivo', 'Funcionalidades personalizadas', 'Código limpio y optimizado para SEO'],
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary mb-4" />,
    title: 'Optimización y Rendimiento (WPO)',
    description: 'Mejoro la velocidad de carga y el rendimiento general de tu sitio WordPress para ofrecer una mejor experiencia de usuario y mejorar tu posicionamiento.',
    features: ['Optimización de imágenes y caché', 'Minificación de código', 'Análisis de rendimiento (Core Web Vitals)'],
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary mb-4" />,
    title: 'Mantenimiento y Soporte',
    description: 'Ofrezco planes de mantenimiento para mantener tu sitio WordPress seguro, actualizado y funcionando sin problemas, con soporte técnico continuo.',
    features: ['Actualizaciones de core y plugins', 'Copias de seguridad automáticas', 'Monitorización de seguridad 24/7'],
  },
];

export default function ServicesPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Servicios WordPress</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Soluciones profesionales para potenciar tu presencia online con WordPress.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col text-center">
            <CardHeader className="items-center">
              {service.icon}
              <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 text-left">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
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
