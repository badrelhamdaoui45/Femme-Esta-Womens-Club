'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ImageGalleryProps = {
  images: ImagePlaceholder[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Dialog key={image.id} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogTrigger asChild>
              <div
                className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </DialogTrigger>
            {selectedImage?.id === image.id && (
              <DialogContent className="sm:max-w-[80vw] p-0 border-0">
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.description}
                    width={1200}
                    height={800}
                    className="rounded-lg w-full h-auto"
                    data-ai-hint={selectedImage.imageHint}
                  />
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </>
  );
}
