'use client';

import { navigation } from "./data";

export default function Header() {
  return (
    // Added border-t-[8px] and border-t-[#7a5281] here for the purple top line
    <header className="relative w-full h-20 md:h-24 bg-linear-to-r from-[#fdf7ea] to-[#eed5a6] overflow-hidden flex items-center font-sans shadow-sm border-t-8 border-t-[#7a5281]">
      
      {/* 1. The Background Curve (Inline SVG) */}
      <svg 
        className="absolute top-0 left-0 h-full w-[45%] md:w-[35%] lg:w-[25%] z-0" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <path 
          d="M0,0 L100,0 C75,0 50,100 20,100 L0,100 Z" 
          fill="#7a5281" 
        />
      </svg>

      {/* 2. The Content Wrapper */}
      <div className="relative z-10 flex items-center justify-between w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo Area */}
        <div className="flex flex-col text-white font-bold text-2xl md:text-3xl leading-none w-32 md:w-48">
          <span className="tracking-wide">Tasty</span>
          <span className="flex items-center gap-1 tracking-wide">
            Kisso
            {/* Decorative Leaf */}
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#d6ae61] fill-current" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C22 3 21 8 17 8Z" />
            </svg>
          </span>
        </div>

        {/* Navigation (Mapped dynamically from your data) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[#2d1a11] font-medium text-sm xl:text-base">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#b58c42] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions - Exclusively "Shop Now" */}
        <div className="flex items-center">
          <button className="bg-linear-to-r from-[#d6ae61] to-[#b58c42] text-black px-6 py-2 md:py-2.5 rounded-full font-semibold text-sm shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
}