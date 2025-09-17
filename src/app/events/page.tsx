import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { events } from '@/lib/data';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Nos Événements à Venir
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Découvrez nos prochains ateliers, rencontres et séminaires. Participez à la vie de l'association et venez vous épanouir avec nous.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                data-ai-hint={event.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{event.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>{new Date(event.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">S'inscrire</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
