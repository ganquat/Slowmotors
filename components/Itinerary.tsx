import React from 'react';

export const Itinerary: React.FC = () => {
  return (
    <section id="itinerary" className="py-24 px-4 bg-white dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Riding Slooow</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">On the Road</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 transform -rotate-3 rounded-3xl" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxn20W0QoADsz_0g-mvllAU4fgYAKKUpl5Yy-BgwT6nQNU-dQtaMTV9548EJuqWZ-xG9t_zvICtDxHwZ1S65KgAmL_kpFFUUeUEJeBBRKr2H3-fwcEag_jbAGK4mnFS9AgZbMX6mvFsHcRCO-dedghmLOoDPgdtXMT5VdYQ12uY9YZzsbTZNkjSFay0URqb66h1iC8xibORM-CYb-5sfEAqfMxDr1MUlJ9qF3EFHtym2lpi1f1Z03Ihx_HkzfAFwNAEl6dnGaWs8u9"
              alt="Riding through India"
              className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p className="lead text-xl text-gray-800 dark:text-gray-100 italic mb-6">
              "Welcome to your Motorbike Holidays in India! Take a deep breath and relax, you just arrived at our base."
            </p>
            <p className="mb-4">
              From here we’ll start our guided motorcycle tour into the stunning beauty of Southern India. We will ride with our road captain in front leading the convoy and the service truck with your luggage as our taillight.
            </p>
            <p className="mb-4">
              We´ll start our days early to make the most of daylight and have several breaks each stage to enjoy a roadside cup of hot chai, some crispy masala vada and the spectacular views watching each others back for the food nicking monkeys.
            </p>
            <p className="mb-4">
              While we’d love to feel our Royal Enfields positive vibrations forever under our butts, we‘ll make sure to arrive at our stop for the night well in time to give you the opportunity to check out the cultural and recreational possibilities in and around our accommodation on your own.
            </p>
            <div className="bg-background-light dark:bg-surface-dark p-6 rounded-xl border-l-4 border-accent mt-8">
              <p className="text-sm italic m-0">
                This is India! It is beautiful! It is chaotic! And though we do our best to give you an all-out smooth experience, some unpredictabilities may occur. Our crew gives all their comprehensive experience, local network, and dedication to provide you with even more than our promised offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};