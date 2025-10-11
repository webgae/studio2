'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateBlogIdeas, type BlogIdeasOutput } from '@/ai/flows/idea-generator-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const formSchema = z.object({
  topic: z.string().min(3, { message: 'El tema debe tener al menos 3 caracteres.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function BlogIdeaGeneratorPage() {
  const [ideas, setIdeas] = useState<BlogIdeasOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setError(null);
    setIdeas(null);

    try {
      const result = await generateBlogIdeas(values);
      setIdeas(result);
    } catch (e) {
      console.error(e);
      setError('Hubo un error al generar las ideas. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <Wand2 className="w-12 h-12 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline mb-4">Generador de Ideas para Blog con IA</h1>
        <p className="text-lg text-muted-foreground">
          ¿Atascado sin ideas? Introduce un tema y deja que la inteligencia artificial te sugiera títulos y resúmenes para tu próximo artículo.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Comienza aquí</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-4">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Tema Principal</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Optimización de WordPress, SEO para principiantes..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Generando...' : 'Generar Ideas'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <div className="text-center text-red-500 p-4 border border-red-500/50 bg-red-500/10 rounded-md">
          {error}
        </div>
      )}

      {ideas && ideas.ideas.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold font-headline mb-6 text-center">Aquí tienes algunas ideas:</h2>
          <Accordion type="single" collapsible className="w-full">
            {ideas.ideas.map((idea, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">{idea.title}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2 prose dark:prose-invert max-w-none">
                  {idea.summary}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </section>
  );
}
