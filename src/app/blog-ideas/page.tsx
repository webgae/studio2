'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateBlogIdeas, type BlogIdeasOutput, type Idea } from '@/ai/flows/idea-generator-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Metadata } from 'next';

// This is a Client Component, so we can't export metadata directly.
// But we can set the title dynamically if needed.
// This component doesn't need specific metadata as it's a tool page.

const formSchema = z.object({
  topic: z.string().min(3, { message: 'El tema debe tener al menos 3 caracteres.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function BlogIdeaGeneratorPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setError(null);
    setIdeas([]);

    try {
      const result = await generateBlogIdeas(values);
      setIdeas(result.ideas);
    } catch (e) {
      console.error(e);
      setError('Hubo un error al generar las ideas. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleIdeaChange = (index: number, field: 'title' | 'summary', value: string) => {
    const newIdeas = [...ideas];
    newIdeas[index] = { ...newIdeas[index], [field]: value };
    setIdeas(newIdeas);
  };

  const copyToClipboard = () => {
    const markdownContent = ideas.map(idea => `## ${idea.title}\n\n${idea.summary}`).join('\n\n---\n\n');
    navigator.clipboard.writeText(markdownContent);
    toast({
      title: '¡Copiado!',
      description: 'El borrador de tu blog ha sido copiado al portapapeles en formato Markdown.',
    });
  };


  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Wand2 className="w-12 h-12 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline mb-4">Asistente de Contenidos con IA</h1>
        <p className="text-lg text-muted-foreground">
          ¿Atascado? Introduce un tema, genera ideas, edítalas a tu gusto y copia el borrador para empezar a escribir.
        </p>
      </div>

      <Card className="mb-8 sticky top-20 z-10 backdrop-blur-sm bg-card/80">
        <CardHeader>
          <CardTitle>Comienza aquí</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-end gap-4">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem className="flex-grow w-full">
                    <FormLabel>Tema Principal</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Optimización de WordPress, SEO para principiantes..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg" className="w-full sm:w-auto">
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

      {ideas.length > 0 && (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                 <h2 className="text-2xl font-bold font-headline">Aquí tienes un borrador inicial:</h2>
                 <Button onClick={copyToClipboard} variant="outline">
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar Borrador (Markdown)
                </Button>
            </div>
          
            <div className="space-y-6">
                {ideas.map((idea, index) => (
                <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-muted/30 p-4">
                        <Input
                            value={idea.title}
                            onChange={(e) => handleIdeaChange(index, 'title', e.target.value)}
                            className="text-lg font-semibold border-0 focus-visible:ring-1 focus-visible:ring-ring !bg-transparent p-0 h-auto"
                        />
                    </CardHeader>
                    <CardContent className="p-4">
                        <Textarea
                            value={idea.summary}
                            onChange={(e) => handleIdeaChange(index, 'summary', e.target.value)}
                            className="text-base text-muted-foreground w-full min-h-[120px] border-0 focus-visible:ring-1 focus-visible:ring-ring !bg-transparent p-0"
                            rows={5}
                        />
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
      )}
    </section>
  );
}
