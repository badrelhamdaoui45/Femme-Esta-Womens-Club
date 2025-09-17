'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateEventDescription } from '@/ai/flows/generate-event-description';
import { generateNewsUpdate } from '@/ai/flows/generate-news-update';
import { Bot, Clipboard, Loader2, Sparkles } from 'lucide-react';
import React from 'react';
import { useToast } from '@/hooks/use-toast';

type FormState = {
  message: string;
  generatedText?: string;
};

const initialState: FormState = {
  message: '',
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      {pending ? 'Génération...' : label}
    </Button>
  );
}

function GeneratedContent({ text }: { text: string | undefined }) {
  const { toast } = useToast();

  if (!text) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copié !',
      description: 'Le texte généré a été copié dans le presse-papiers.',
    });
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Bot className="h-5 w-5 text-primary" />
        Texte Généré
      </h3>
      <div className="mt-2 relative rounded-md border bg-secondary p-4 text-secondary-foreground">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-7 w-7"
          onClick={handleCopy}
        >
          <Clipboard className="h-4 w-4" />
          <span className="sr-only">Copier</span>
        </Button>
        <p className="whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

export default function ContentGenerator() {
  const [eventState, eventFormAction] = useFormState(generateEventDescriptionAction, initialState);
  const [newsState, newsFormAction] = useFormState(generateNewsUpdateAction, initialState);

  async function generateEventDescriptionAction(_prevState: FormState, formData: FormData): Promise<FormState> {
    const prompt = formData.get('prompt') as string;
    if (!prompt) return { message: 'Prompt is required.' };
    try {
      const result = await generateEventDescription({ prompt });
      return { message: 'success', generatedText: result.description };
    } catch (error) {
      return { message: 'An error occurred.' };
    }
  }

  async function generateNewsUpdateAction(_prevState: FormState, formData: FormData): Promise<FormState> {
    const prompt = formData.get('prompt') as string;
    if (!prompt) return { message: 'Prompt is required.' };
    try {
      const result = await generateNewsUpdate({ prompt });
      return { message: 'success', generatedText: result.newsUpdate };
    } catch (error) {
      return { message: 'An error occurred.' };
    }
  }

  return (
    <Tabs defaultValue="event" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="event">Description d'Événement</TabsTrigger>
        <TabsTrigger value="news">Actualité</TabsTrigger>
      </TabsList>
      <TabsContent value="event">
        <Card>
          <form action={eventFormAction}>
            <CardHeader>
              <CardTitle>Générer une Description d'Événement</CardTitle>
              <CardDescription>
                Entrez quelques mots-clés (ex: "atelier poterie pour débutants") et l'IA rédigera une description.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="event-prompt">Votre idée</Label>
                <Textarea
                  id="event-prompt"
                  name="prompt"
                  placeholder="Ex: Soirée networking pour femmes entrepreneures..."
                  required
                  className='min-h-[100px]'
                />
              </div>
              <GeneratedContent text={eventState.generatedText} />
            </CardContent>
            <CardFooter>
              <SubmitButton label="Générer la description" />
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
      <TabsContent value="news">
        <Card>
          <form action={newsFormAction}>
            <CardHeader>
              <CardTitle>Générer une Actualité</CardTitle>
              <CardDescription>
                Donnez un sujet (ex: "bilan de notre dernière collecte de fonds") et obtenez un brouillon d'article.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="news-prompt">Votre sujet</Label>
                <Textarea
                  id="news-prompt"
                  name="prompt"
                  placeholder="Ex: Retour sur notre séminaire annuel..."
                  required
                  className='min-h-[100px]'
                />
              </div>
              <GeneratedContent text={newsState.generatedText} />
            </CardContent>
            <CardFooter>
              <SubmitButton label="Générer l'actualité" />
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
