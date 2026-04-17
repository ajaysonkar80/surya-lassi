'use client';

import { hero } from './data';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-amber-50 to-white">
      <Image
              src="/hero.jpg" // Ensure your image is in /public
              alt="Pro-ssi Lassi Drink"
              fill // Use fill for responsive containers
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
            />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-r from-yellow-50 via-transparent to-yellow-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Pretitle */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-bold text-yellow-50 uppercase tracking-wider">
                {hero.pretitle}
              </p>
              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-yellow-50 leading-tight">
                {hero.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-yellow-50 max-w-md leading-relaxed">
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