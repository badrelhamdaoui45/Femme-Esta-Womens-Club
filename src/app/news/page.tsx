import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { newsArticles } from '@/lib/data';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Actualités &amp; Mises à Jour
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Restez informées des dernières nouvelles, des réussites de nos membres et des annonces importantes de l'association.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
        {newsArticles.map((article) => (
          <Card key={article.id} className="flex flex-col overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                data-ai-hint={article.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{article.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
