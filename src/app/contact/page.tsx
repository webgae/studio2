import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Contacto</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nos encantaría saber de ti. Rellena el formulario o ponte en contacto con nosotros a través de los siguientes medios.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-headline mb-6">Envíanos un mensaje</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline mb-6">Información de Contacto</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>Correo Electrónico</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:ximosa@gmail.com" className="text-lg hover:underline">
                  ximosa@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>Teléfono</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Llámame y hablemos de tu proyecto</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Ubicación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">24 horas online</p>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
