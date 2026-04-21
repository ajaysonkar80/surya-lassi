'use client';

import { features } from './data';

// Map your feature IDs to the file paths in your public folder
const iconPaths = {
  pistachios: '/seed.svg',
  berry: '/cherry.svg',
  protein: '/protein.svg',
  culture: '/pot.svg',
};

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-radial from-[#D4AF76] via-[#F5F1E8] to-[#D4AF76]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-3">
            Why Choose Pro-ssi?
          </h2>
          <p className="text-purple-700 font-medium max-w-2xl mx-auto">
            Experience the perfect fusion of traditional Indian lassi and modern protein nutrition
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            // Get the correct image path based on the feature ID
            const imageSrc = iconPaths[feature.id as keyof typeof iconPaths];

            return (
              <div
                key={feature.id}
                className="group text-center p-5 md:p-6 rounded-2xl bg-white border border-amber-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon Image */}
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {imageSrc && (
                      <img 
                        src={imageSrc} 
                        alt={`${feature.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-purple-900 mb-1">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-semibold text-purple-700 mb-2  tracking-wide">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}