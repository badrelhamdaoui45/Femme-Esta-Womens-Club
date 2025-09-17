import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Gift, Heart, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MembershipPage() {
  return (
    <>
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
            Devenez Membre de LA FEMME ESTA
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Rejoignez une communauté de femmes solidaires et bienveillantes. Ensemble, nous sommes plus fortes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Réseau &amp; Communauté</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Accédez à un réseau d'entraide, partagez vos expériences et créez des liens forts avec d'autres femmes qui vous comprennent et vous soutiennent.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Événements Exclusifs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Participez à nos ateliers, conférences et rencontres réservés aux membres pour vous développer personnellement et professionnellement.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Soutien &amp; Bien-être</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Bénéficiez d'un espace sécurisant pour reprendre confiance en vous, vous sentir écoutée et trouver les ressources pour vous épanouir.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 rounded-lg bg-secondary p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-md">
              <Image
                src="https://picsum.photos/seed/110/600/400"
                alt="Women happily joining hands"
                fill
                className="object-cover"
                data-ai-hint="women community"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">Prête à nous rejoindre ?</h2>
              <p className="mt-4 text-muted-foreground">
                Pour adhérer à l'association, contactez-nous directement. Nous serons ravies de vous guider à travers les étapes et de répondre à toutes vos questions.
              </p>
              <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Contactez-nous pour adhérer <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
