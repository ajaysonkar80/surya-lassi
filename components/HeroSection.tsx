'use client';

import { useState, useEffect } from 'react';
import { hero } from './data';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const backgroundImages = [
  '/hero-1.jpg',
  '/hero-2.jpeg',
  '/hero-3.jpeg',
  '/hero-4.jpeg'
];

// --- FRAMER MOTION VARIANTS ---
// Explicitly typing as 'Variants' fixes the TypeScript widening errors

const slideVariants: Variants = {
  initial: {
    clipPath: "inset(0 0 0 100%)", 
    scale: 1.15, 
  },
  animate: {
    clipPath: "inset(0 0 0 0%)", 
    scale: 1, 
    transition: {
      duration: 1.6,
      ease: [0.77, 0, 0.175, 1], 
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05, 
    transition: {
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    // Updated to bg-linear-to-b and lg:min-h-150
    <section className="relative overflow-hidden bg-linear-to-b from-amber-50 to-white min-h-[85dvh] lg:min-h-150 flex items-center">
      
      {/* --- ANIMATED BACKGROUND CAROUSEL --- */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={backgroundImages[currentIndex]}
              alt={`Pro-ssi Lassi Drink ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- OVERLAYS --- */}
      <div className="absolute inset-0 z-0 bg-black/40 md:bg-black/20 pointer-events-none">
        {/* Updated to bg-linear-to-r */}
        <div className="absolute inset-0 opacity-30 bg-linear-to-r from-yellow-50 via-transparent to-yellow-50" />
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          
          <motion.div 
            className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            <div className="space-y-2 md:space-y-3">
              <motion.p 
                variants={textVariants}
                className="text-xs sm:text-sm md:text-base font-bold text-yellow-50 uppercase tracking-widest drop-shadow-md"
              >
                {hero.pretitle}
              </motion.p>
              
              <motion.h1 
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-50 leading-[1.1] drop-shadow-lg"
              >
                {hero.title}
              </motion.h1>
            </div>

            {/* Updated max-w-[280px] to max-w-70 */}
            <motion.p 
              variants={textVariants}
              className="text-base sm:text-lg text-yellow-50 max-w-70 sm:max-w-md md:max-w-lg leading-relaxed drop-shadow-md"
            >
              {hero.description}
            </motion.p>

            <motion.div 
              variants={textVariants}
              className="pt-2 w-full sm:w-auto"
            >
              {/* Updated to bg-linear-to-r */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-linear-to-r from-yellow-400 to-amber-700 hover:from-amber-700 hover:to-yellow-400 text-violet-900 rounded-full text-base font-bold transition-all shadow-xl"
              >
                {hero.ctaText}
              </motion.button>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}