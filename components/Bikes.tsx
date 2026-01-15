import React from 'react';

export const Bikes: React.FC = () => {
  return (
    <section id="bikes" className="py-24 px-4 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Ride with passion and style</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Bikes</h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
           <div className="lg:w-1/2 prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Royal Enfield Classic & Bullet 350</h3>
            <p className="mb-4">
              The Royal Enfield 350 Classic and Bullet are great cruisers for general Indian road conditions and with their old-school style and one-of-a-kind sound rightly deserve the title of the Indian legend.
            </p>

            <ul className="space-y-4 my-8">
                <li className="flex items-start gap-3">
                    <span className="material-icons text-primary mt-1">two_wheeler</span>
                    <span><strong>Legendary Style:</strong> Get on their saddle and you will feel as if you were born there.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="material-icons text-primary mt-1">speed</span>
                    <span><strong>Power & Control:</strong> Their 20 hp engine is strong enough for mountain curves and safe overtaking.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <span className="material-icons text-primary mt-1">build</span>
                    <span><strong>Expertly Serviced:</strong> All our bikes are serviced by our technician before and during tours.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <span className="material-icons text-primary mt-1">new_releases</span>
                    <span><strong>Modern Fleet:</strong> We procure 2023 or later models for our tours.</span>
                </li>
            </ul>

            <p>
              The Classic and Bullet 350 are lovely bikes for all skill levels and super reliable companions on all our guided motorcycle tours.
            </p>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-70" />
            <img
              src="https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=800&q=80"
              alt="Royal Enfield Bike"
              className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};