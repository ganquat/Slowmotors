import React from 'react';

export const Culture: React.FC = () => {
  return (
    <section id="culture" className="py-24 px-4 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto text-center">
         <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Immerse Yourself</span>
         <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">Beyond the Road</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-primary">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <span className="material-icons text-primary">people</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Local Encounters</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    "Where are you from?" Prepare to be confronted with these questions. Locals are curious about foreigners and you´ll meet them almost everywhere.
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-secondary">
                 <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                    <span className="material-icons text-secondary">temple_buddhist</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Spirituality & Calm</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Let your spirit float in ancient Hindu temples shrouded in the scent of incense sticks. Give your body relief with an Ayurvedic massage.
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-accent">
                 <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <span className="material-icons text-accent">nightlight</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Nature over Nightlife</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Don´t expect any nightlife. Shops close early. We stay away from the noise and you will be happy to simply sit by the campfire and let the impressions sink in.
                </p>
            </div>
         </div>
      </div>
    </section>
  );
};