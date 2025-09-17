import ImageGallery from '@/components/ImageGallery';
import placeholderData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';


export default function GalleryPage() {
  const { placeholderImages } = placeholderData;
  const galleryImages: ImagePlaceholder[] = placeholderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Galerie d'Images
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Revivez les moments forts de nos événements et activités à travers notre galerie de photos.
        </p>
      </div>

      <div className="mt-16">
        <ImageGallery images={galleryImages} />
      </div>
    </div>
  );
}
