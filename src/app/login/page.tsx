'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LogIn } from 'lucide-react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email({ message: "L'adresse email est invalide." }),
  password: z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères.' }),
});

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const auth = getAuth();
  const { user, loading } = useUser();
  const [isSignUp, setIsSignUp] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if(loading) {
    return <div className="flex h-screen items-center justify-center"><p>Loading...</p></div>
  }

  if (user) {
    router.push('/director');
  }


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (isSignUp) {
        // You would want to restrict sign-up to only the director.
        // This is a basic example. In a real app, you'd have a more secure way to create the initial admin user.
        if (values.email !== 'camapanaelisabeth@gmail.com') {
            toast({
                variant: 'destructive',
                title: 'Erreur',
                description: 'Vous n\'êtes pas autorisé à créer un compte.',
            });
            return;
        }
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        toast({
          title: 'Compte créé !',
          description: 'Vous êtes maintenant connecté.',
        });
      } else {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast({
          title: 'Connexion réussie !',
          description: 'Bienvenue sur le portail du dirigeant.',
        });
      }
      router.push('/director');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Erreur de connexion',
        description: error.message,
      });
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold font-headline">Portail du Dirigeant</CardTitle>
          <CardDescription>{isSignUp ? "Créez votre compte administrateur" : "Connectez-vous à votre espace"}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="directeur@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                <LogIn className="mr-2 h-4 w-4" />
                {form.formState.isSubmitting ? 'Connexion...' : (isSignUp ? "Créer le compte" : "Se connecter")}
              </Button>
            </form>
          </Form>
           <p className="mt-4 text-center text-sm text-muted-foreground">
            {isSignUp ? "Vous avez déjà un compte?" : "Première connexion?"}{' '}
            <Button variant="link" className="p-0" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Se connecter" : "Créer un compte"}
            </Button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
