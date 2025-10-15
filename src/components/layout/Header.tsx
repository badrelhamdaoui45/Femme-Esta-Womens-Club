'use client';

import {
  CalendarDays,
  Home,
  Images,
  Mail,
  Menu,
  Newspaper,
  Shield,
  Users,
  UserCog
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import React from 'react';
import { useUser } from '@/firebase';

const navItems: NavItem[] = [
  { title: 'Accueil', href: '/', icon: Home },
  { title: 'Adhésion', href: '/membership', icon: Users },
  { title: 'Événements', href: '/events', icon: CalendarDays },
  { title: 'Galerie', href: '/gallery', icon: Images },
  { title: 'Actualités', href: '/news', icon: Newspaper },
  { title: 'Contact', href: '/contact', icon: Mail },
];

const directorNavItem: NavItem = { title: 'Portail', href: '/director', icon: UserCog };


export function Header() {
  const pathname = usePathname();
  const { user } = useUser();

  const allNavItems = [...navItems, directorNavItem];
  const directorHref = user ? '/director' : '/login';


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg text-primary">
          <Shield className="h-6 w-6 text-accent" />
          <span>Femme Esta Womens Club</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.title}
            </Link>
          ))}
           <Link
              href={directorHref}
              className={cn(
                'transition-colors hover:text-primary',
                pathname.startsWith('/director') || pathname.startsWith('/login') ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {directorNavItem.title}
            </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navItems.map((item) => (
                   <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-4 px-2.5 transition-colors hover:text-primary',
                      pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
                <Link
                    href={directorHref}
                    className={cn(
                      'flex items-center gap-4 px-2.5 transition-colors hover:text-primary',
                      pathname.startsWith('/director') || pathname.startsWith('/login') ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    <directorNavItem.icon className="h-5 w-5" />
                    {directorNavItem.title}
                  </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
