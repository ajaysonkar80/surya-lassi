'use client';

import { hero } from './data';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

// 1. Define your 4 images here (Make sure they exist in the /public folder)
const backgroundImages = [
  '/hero.jpg', // Your original image
  '/hero-2.jpeg',
  '/hero-3.jpeg',
  '/hero-4.jpeg'
];

export default function HeroSection() {
  // 2. Initialize the Embla Carousel with Fade and Autoplay
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      duration: 40, // Controls how smooth/slow the fade transition is
      watchDrag: false // Prevents mobile users from accidentally dragging the background
    }, 
    [
      Fade(),
      Autoplay({ delay: 4000, stopOnInteraction: false }) // 4 seconds per image
    ]
  );

  return (
    // Added min-h-[100dvh] or a fixed height so the section has shape on mobile
    <section className="relative overflow-hidden bg-linear-to-b from-amber-50 to-white min-h-[600px] flex items-center">
      
      {/* --- BACKGROUND CAROUSEL --- */}
      {/* absolute inset-0 and z-0 puts it behind everything else */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {backgroundImages.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={src}
                alt={`Pro-ssi Lassi Drink ${index + 1}`}
                fill
                priority={index === 0} // Only prioritize loading the very first image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- OVERLAYS --- */}
      {/* I kept your original yellow gradient, but added a slight dark tint (bg-black/20) 
          so the white text stays readable regardless of which image fades in */}
      <div className="absolute inset-0 z-0 bg-black/20">
        <div className="absolute inset-0 opacity-30 bg-linear-to-r from-yellow-50 via-transparent to-yellow-50" />
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      {/* z-10 ensures your text and buttons sit on top of the sliding background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Pretitle */}
            <div className="space-y-2">
              {/* Added drop-shadow-md to text so it pops against changing backgrounds */}
              <p className="text-sm md:text-base font-bold text-yellow-50 uppercase tracking-wider drop-shadow-md">
                {hero.pretitle}
              </p>
              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-yellow-50 leading-tight drop-shadow-lg">
                {hero.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-yellow-50 max-w-md leading-relaxed drop-shadow-md">
              {hero.description}
            </p>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-3 bg-linear-to-r from-yellow-400 to-amber-700 hover:from-amber-700 hover:to-yellow-400 text-violet-900 rounded-full text-base font-semibold transition-all transform hover:scale-105 shadow-lg">
                {hero.ctaText}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}