'use server';

/**
 * @fileOverview An AI agent for generating news updates based on a prompt.
 *
 * - generateNewsUpdate - A function that generates news updates.
 * - GenerateNewsUpdateInput - The input type for the generateNewsUpdate function.
 * - GenerateNewsUpdateOutput - The return type for the generateNewsUpdate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateNewsUpdateInputSchema = z.object({
  prompt: z.string().describe('A prompt describing the desired news update.'),
});
export type GenerateNewsUpdateInput = z.infer<typeof GenerateNewsUpdateInputSchema>;

const GenerateNewsUpdateOutputSchema = z.object({
  newsUpdate: z.string().describe('The generated news update.'),
});
export type GenerateNewsUpdateOutput = z.infer<typeof GenerateNewsUpdateOutputSchema>;

export async function generateNewsUpdate(input: GenerateNewsUpdateInput): Promise<GenerateNewsUpdateOutput> {
  return generateNewsUpdateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateNewsUpdatePrompt',
  input: {schema: GenerateNewsUpdateInputSchema},
  output: {schema: GenerateNewsUpdateOutputSchema},
  prompt: `You are a content creator for LA FEMME ESTA, a women's club in France.  Generate a news update based on the following prompt: {{{prompt}}}`,
});

const generateNewsUpdateFlow = ai.defineFlow(
  {
    name: 'generateNewsUpdateFlow',
    inputSchema: GenerateNewsUpdateInputSchema,
    outputSchema: GenerateNewsUpdateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
