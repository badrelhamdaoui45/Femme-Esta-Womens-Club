import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="font-bold text-lg font-headline">Femme Esta</h4>
            <p className="text-sm text-muted-foreground max-w-sm">
              Soutenir les femmes seules ou isolées pour leur permettre de s'assumer, reprendre confiance et se réinsérer dans la société.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg font-headline">Navigation</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/membership" className="hover:underline text-muted-foreground">Adhésion</Link></li>
              <li><Link href="/events" className="hover:underline text-muted-foreground">Événements</Link></li>
              <li><Link href="/gallery" className="hover:underline text-muted-foreground">Galerie</Link></li>
              <li><Link href="/contact" className="hover:underline text-muted-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg font-headline">Contactez-nous</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>22 RUE SAINT JACQUES</p>
              <p>13006 MARSEILLE</p>
              <p>France</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LA FEMME ESTA L'ASSOCIATION. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
