import React from 'react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    id: 'road-captain',
    title: 'Experienced Road Captain',
    description: 'Your guide through the winding roads of Kerala and Tamil Nadu. Local experts who know every hidden gem and chai spot.',
    icon: 'explore'
  },
  {
    id: 'mechanic',
    title: 'Dedicated Enfield Mechanic',
    description: 'A professional mechanic accompanies every tour. We ensure the classic bikes are tuned to perfection every morning.',
    icon: 'build_circle'
  },
  {
    id: 'support',
    title: 'Support Vehicle',
    description: 'Ride light and free. Our dedicated support truck carries your heavy luggage, spare parts, and cold refreshments.',
    icon: 'local_shipping'
  },
  {
    id: 'hospitality',
    title: 'Authentic Hospitality',
    description: 'We handpick heritage hotels and eco-resorts that reflect the character of the region. Comfort and atmosphere are priorities.',
    icon: 'hotel_class'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background-light dark:bg-background-dark relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Worry-Free Adventures</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">
            All-Inclusive Excellence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 italic">
            "We take care of every detail, so you can focus on the ride, the scents, and the soul of India."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="group bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <span className="material-icons-outlined text-3xl text-primary group-hover:text-white transition-colors duration-300">{feature.icon}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all uppercase tracking-wide text-sm">
                View Full Service Details
            </button>
        </div>
      </div>
    </section>
  );
};