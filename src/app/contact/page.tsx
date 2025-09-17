import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
            Contactez-nous
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Nous sommes là pour répondre à vos questions. N'hésitez pas à nous envoyer un message ou à nous rendre visite.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Notre Adresse</h3>
                <address className="not-italic text-muted-foreground">
                  22 RUE SAINT JACQUES,<br />
                  13006 MARSEILLE
                </address>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">Envoyez-nous un message via le formulaire ci-contre.</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
