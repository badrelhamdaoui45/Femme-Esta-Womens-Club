import type { Event, NewsArticle } from "@/types";

export const events: Event[] = [
  {
    id: "evt-1",
    title: "Atelier Confiance en Soi",
    date: "2024-09-15",
    description: "Un atelier interactif pour renforcer l'estime de soi et développer des stratégies pour une plus grande confiance au quotidien. Animé par une coach certifiée.",
    image: "https://picsum.photos/seed/201/600/400",
    imageHint: "workshop confidence"
  },
  {
    id: "evt-2",
    title: "Networking & Partage d'Expériences",
    date: "2024-10-05",
    description: "Rencontrez d'autres membres, partagez vos parcours et élargissez votre réseau professionnel et amical dans une ambiance conviviale.",
    image: "https://picsum.photos/seed/202/600/400",
    imageHint: "women networking"
  },
  {
    id: "evt-3",
    title: "Cours de Yoga et Méditation",
    date: "2024-10-20",
    description: "Une séance pour se reconnecter avec son corps et son esprit. Accessible à tous les niveaux, pour un moment de détente et de bien-être.",
    image: "https://picsum.photos/seed/203/600/400",
    imageHint: "yoga meditation"
  },
  {
    id: "evt-4",
    title: "Séminaire sur l'Entrepreneuriat Féminin",
    date: "2024-11-10",
    description: "Des femmes entrepreneures partagent leurs réussites et défis. Une source d'inspiration pour toutes celles qui souhaitent se lancer.",
    image: "https://picsum.photos/seed/204/600/400",
    imageHint: "entrepreneurship seminar"
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    title: "Retour sur notre dernier atelier",
    date: "2024-09-18",
    excerpt: "L'atelier sur la confiance en soi a été un franc succès ! Plus de 30 membres ont participé à cette journée riche en émotions et en apprentissages. Découvrez les moments forts...",
    image: "https://picsum.photos/seed/301/600/400",
    imageHint: "workshop summary"
  },
  {
    id: "news-2",
    title: "Bienvenue aux nouvelles membres !",
    date: "2024-09-01",
    excerpt: "Ce mois-ci, nous avons le plaisir d'accueillir 15 nouvelles femmes exceptionnelles au sein de LA FEMME ESTA. Nous leur souhaitons la bienvenue et nous réjouissons des futurs partages.",
    image: "https://picsum.photos/seed/302/600/400",
    imageHint: "new members"
  },
  {
    id: "news-3",
    title: "Partenariat avec des entreprises locales",
    date: "2024-08-25",
    excerpt: "Nous sommes fières d'annoncer de nouveaux partenariats avec des entreprises marseillaises engagées pour la cause des femmes. Ces collaborations ouvriront de nouvelles opportunités pour nos membres.",
    image: "https://picsum.photos/seed/303/600/400",
    imageHint: "local partnership"
  },
];
