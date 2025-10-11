import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, FileSignature, CheckCircle } from 'lucide-react';
import { type Offer, type WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: 'Precios y Tarifas',
    description: 'Descubre mis tarifas por hora para proyectos complejos y cómo solicitar un presupuesto a medida para trabajos con un alcance definido. Soluciones flexibles para tus necesidades en WordPress.',
    alternates: {
        canonical: '/precios',
    },
};

export default function PreciosPage() {

    const hourlyRateSchema: WithContext<Offer> = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "Tarifa por Horas",
        "description": "Ideal para proyectos de alcance variable, consultoría, o soporte continuo.",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "0", // Price is available on request
            "priceCurrency": "EUR",
            "unitText": "hour"
        }
    };

    const projectQuoteSchema: WithContext<Offer> = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "Presupuesto a Medida",
        "description": "Perfecto para proyectos con un alcance y objetivos claramente definidos.",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "0", // Price is available on request
            "priceCurrency": "EUR"
        }
    };


    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([hourlyRateSchema, projectQuoteSchema]) }}
            />
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-headline mb-4">Precios y Tarifas</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Ofrezco modelos de precios flexibles y transparentes para adaptarme a las necesidades de tu proyecto, ya sea grande o pequeño.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                {/* Tarifa por Horas */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex justify-center mb-4">
                            <Clock className="w-12 h-12 text-primary" />
                        </div>
                        <CardTitle className="text-center text-2xl font-headline">Tarifa por Horas</CardTitle>
                        <CardDescription className="text-center">
                            Ideal para proyectos de alcance variable, consultoría, o soporte continuo.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <span>
                                    <strong>Máxima flexibilidad:</strong> Pagas solo por el tiempo invertido. Perfecto para tareas evolutivas o que no se pueden definir por completo al inicio.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <span>
                                    <strong>Consultoría y soporte:</strong> La mejor opción para sesiones de formación, resolución de problemas complejos o asesoramiento estratégico.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <span>
                                    <strong>Total transparencia:</strong> Recibirás un registro detallado de las horas dedicadas a tu proyecto.
                                </span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full" size="lg">
                            <Link href="/contact">Consultar Tarifa por Hora</Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Presupuesto Fijo */}
                <Card className="flex flex-col">
                    <CardHeader>
                         <div className="flex justify-center mb-4">
                            <FileSignature className="w-12 h-12 text-primary" />
                        </div>
                        <CardTitle className="text-center text-2xl font-headline">Presupuesto a Medida</CardTitle>
                        <CardDescription className="text-center">
                            Perfecto para proyectos con un alcance y objetivos claramente definidos.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                         <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <span>
                                    <strong>Precio cerrado:</strong> Sabrás el coste total de tu proyecto desde el principio, sin sorpresas. Ideal para controlar tu presupuesto.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <span>
                                    <strong>Proyectos definidos:</strong> La opción recomendada para la creación de un sitio web completo, el desarrollo de un plugin específico o la optimización (WPO) de una web.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <span>
                                    <strong>Planificación detallada:</strong> El presupuesto incluye una descripción completa de todas las tareas a realizar y los plazos de entrega.
                                </span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                         <Button asChild className="w-full" size="lg">
                            <Link href="/contact">Solicitar Presupuesto</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="text-center bg-card p-10 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold font-headline mb-4">¿No estás seguro de qué opción elegir?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    No te preocupes. Ponte en contacto conmigo, cuéntame tu idea o tu problema y te asesoraré sobre el mejor enfoque para tu caso, sin ningún compromiso.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Hablemos de tu Proyecto</Link>
                </Button>
            </div>
        </section>
    );
}
