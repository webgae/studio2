'use server';
/**
 * @fileOverview Un generador de ideas para artículos de blog.
 *
 * - generateBlogIdeas - Una función que genera ideas para artículos de blog.
 * - BlogIdeasInput - El tipo de entrada para la función generateBlogIdeas.
 * - BlogIdeasOutput - El tipo de retorno para la función generateBlogIdeas.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BlogIdeasInputSchema = z.object({
  topic: z.string().describe('El tema sobre el que generar ideas para artículos de blog.'),
});
export type BlogIdeasInput = z.infer<typeof BlogIdeasInputSchema>;

const IdeaSchema = z.object({
    title: z.string().describe('Un título atractivo y optimizado para SEO para el artículo del blog.'),
    summary: z.string().describe('Un resumen de uno o dos párrafos de lo que trataría el artículo.'),
});
export type Idea = z.infer<typeof IdeaSchema>;

const BlogIdeasOutputSchema = z.object({
  ideas: z.array(IdeaSchema).describe('Una lista de 5 a 7 ideas para artículos de blog.'),
});
export type BlogIdeasOutput = z.infer<typeof BlogIdeasOutputSchema>;

export async function generateBlogIdeas(input: BlogIdeasInput): Promise<BlogIdeasOutput> {
  return blogIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogIdeaPrompt',
  input: { schema: BlogIdeasInputSchema },
  output: { schema: BlogIdeasOutputSchema },
  prompt: `Eres un experto en marketing de contenidos y SEO especializado en tecnología y desarrollo web.
Tu tarea es generar ideas para artículos de blog sobre un tema determinado.
Para el tema "{{topic}}", genera una lista de 5 a 7 ideas para artículos de blog.
Cada idea debe tener un título atractivo y optimizado para SEO y un resumen de uno o dos párrafos de lo que trataría el artículo.
Responde únicamente con el objeto JSON.`,
});

const blogIdeaFlow = ai.defineFlow(
  {
    name: 'blogIdeaFlow',
    inputSchema: BlogIdeasInputSchema,
    outputSchema: BlogIdeasOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("No se pudo generar ninguna idea.");
    }
    return output;
  }
);
