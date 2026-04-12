'use client';

import { features } from './data';
import {
  IconPistachios,
  IconBerry,
  IconProtein,
  IconCulture,
} from './Icons';

const iconMap = {
  pistachios: IconPistachios,
  berry: IconBerry,
  protein: IconProtein,
  culture: IconCulture,
};

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Pro-ssi?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect fusion of traditional Indian lassi and modern protein nutrition
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.id as keyof typeof iconMap];

            return (
              <div
                key={feature.id}
                className="group text-center p-8 rounded-2xl bg-white border border-amber-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-700">
                    {IconComponent && (
                      <IconComponent className="w-14 h-14" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-semibold text-purple-700 mb-3">
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