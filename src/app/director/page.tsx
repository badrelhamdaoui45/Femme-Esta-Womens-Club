'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, GanttChartSquare, Activity, ShieldAlert } from 'lucide-react';
import { getAuth, signOut } from 'firebase/auth';

export default function DirectorPage() {
  const { user, loading } = useUser();
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Add a check to ensure only the specified director can access
  if (user.email !== 'camapanaelisabeth@gmail.com') {
     return (
      <div className="flex h-screen items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold text-destructive">Accès non autorisé</h1>
          <p className="mt-4 text-muted-foreground">Vous n'avez pas la permission de voir cette page.</p>
          <Button onClick={() => router.push('/')} className="mt-6">Retour à l'accueil</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
                Portail du Dirigeant
            </h1>
            <p className="text-muted-foreground mt-2">Bienvenue, {user.email}</p>
        </div>
        <Button onClick={handleLogout} variant="outline">
          Se déconnecter
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accès Admin</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Gérer les membres et le contenu.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Consulter les documents importants.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Statistiques</CardTitle>
            <GanttChartSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Voir les statistiques de l'association.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activités Récentes</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Suivre les dernières activités.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
