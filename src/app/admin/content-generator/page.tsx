import ContentGenerator from '@/components/ContentGenerator';

export default function ContentGeneratorPage() {
  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Générateur de Contenu IA
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Créez rapidement des brouillons pour vos événements et actualités. Fournissez une simple idée ou un mot-clé, et laissez l'IA générer une proposition de texte.
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-4xl">
        <ContentGenerator />
      </div>
    </div>
  );
}
