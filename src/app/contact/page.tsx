import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Contacto</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nos encantaría saber de ti. Ponte en contacto con nosotros a través de los siguientes medios.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-2">
              <Mail className="w-8 h-8 text-primary" />
              <span>Correo Electrónico</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="mailto:info@example.com" className="text-lg hover:underline">
              info@example.com
            </a>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-2">
              <Phone className="w-8 h-8 text-primary" />
              <span>Teléfono</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="tel:+123456789" className="text-lg hover:underline">
              +1 (234) 567-89
            </a>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-2">
              <MapPin className="w-8 h-8 text-primary" />
              <span>Ubicación</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">123 Calle Falsa, Ciudad</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
