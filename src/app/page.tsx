import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import placeholderData from '@/lib/placeholder-images.json';
import { ArrowRight, CheckCircle, Info, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { placeholderImages } = placeholderData;
  const heroImage = placeholderImages.find((img) => img.id === 'home-hero');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full bg-secondary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              Femme Esta Womens Club
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl">
              Bien-être des personnes seules ou isolées, particulièrement les femmes, pour leur permettre de s'assumer et reprendre confiance en elles.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/membership">Devenir Membre <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/events">Voir nos événements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">Notre Mission</h2>
              <p className="text-muted-foreground text-lg">
                L'association "LA FEMME ESTA" a pour objet le bien-être des personnes seules ou isolées et particulièrement les femmes, afin de leur permettre de s'assumer, reprendre confiance en elles et se réinsérer dans la société.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Soutenir les femmes dans leur parcours d'émancipation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Créer un réseau d'entraide et de solidarité.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Organiser des événements et ateliers pour le développement personnel et professionnel.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
               <Image
                src="https://picsum.photos/seed/102/600/400"
                alt="Group of women supporting each other"
                fill
                className="object-cover"
                data-ai-hint="women community"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">Informations sur l'Association</h2>
            <p className="mt-2 text-muted-foreground">Données officielles de LA FEMME ESTA L'ASSOCIATION.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Informations Clés</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">Dirigeant : Campana Elisabeth</div>
                <p className="text-xs text-muted-foreground">Date de création : 11/03/2021</p>
                 <p className="text-xs text-muted-foreground">Adresse : 22 RUE SAINT JACQUES, 13006 MARSEILLE</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Immatriculation</CardTitle>
                <Info className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">SIREN : 902 386 184</div>
                <p className="text-xs text-muted-foreground">SIRET (siège) : 902 386 184 00011</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Autres Identifiants</CardTitle>
                <Info className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">RNA : W133034867</div>
                <p className="text-xs text-muted-foreground">Activité : Autres organisations fonctionnant par adhésion volontaire</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
