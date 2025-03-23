"use client";

import { useState, useEffect, useCallback } from 'react';
import ClientImage from '@/components/ClientImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Updated travel images with new photos from Pexels
const travelImages = [
  { src: '/travel/photo1.jpeg', alt: 'Niagara Falls' },
  { src: '/travel/photo2.jpeg', alt: 'Toronto' },
  { src: '/travel/photo3.jpeg', alt: 'PEI' },
  { src: '/travel/photo4.jpeg', alt: 'Vancouver' },
  { src: '/travel/photo5.jpeg', alt: 'New York City' },
  { src: '/travel/photo6.jpeg', alt: 'Seattle' },
];

export default function TravelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % travelImages.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const goToPrevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? travelImages.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNextSlide]);

  if (!isClient) {
    return <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>;
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden relative">
      {travelImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex
              ? isAnimating
                ? 'opacity-0'
                : 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <ClientImage
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
          />
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {travelImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => {
              if (isAnimating) return;

              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
              }, 500);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
