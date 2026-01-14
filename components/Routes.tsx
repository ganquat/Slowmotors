import React from 'react';
import { Route } from '../types';

const routes: Route[] = [
  {
    id: 'western-ghats',
    title: 'The Western Ghats',
    description: 'Traverse breathtaking landscapes. Navigate thrilling hairpin bends from humid jungles to misty tea plantations at altitude.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxn20W0QoADsz_0g-mvllAU4fgYAKKUpl5Yy-BgwT6nQNU-dQtaMTV9548EJuqWZ-xG9t_zvICtDxHwZ1S65KgAmL_kpFFUUeUEJeBBRKr2H3-fwcEag_jbAGK4mnFS9AgZbMX6mvFsHcRCO-dedghmLOoDPgdtXMT5VdYQ12uY9YZzsbTZNkjSFay0URqb66h1iC8xibORM-CYb-5sfEAqfMxDr1MUlJ9qF3EFHtym2lpi1f1Z03Ihx_HkzfAFwNAEl6dnGaWs8u9',
    days: 12,
    type: 'Mountain',
    difficulty: 'Hard',
    badge: 'Most Popular'
  },
  {
    id: 'goa-coastal',
    title: 'Goa Coastal Run',
    description: 'A relaxed cruise starting from vibrant Goa down to the serene beaches of the Arabian Sea. Seafood and Portuguese history.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr1rrYvNhgIVOtRGtYsmyRh9EMoYizquk0Ls2LQdrKSYVVUEg4y649GyXBpBRnp4hnV1EoQV35BORmOdw98uAc4HnAzRtRrbeXjHimgQHhMvtxfp7WtZIznJgC5JA98RcqbqGjlLvcCanLGucjbozt8Sp3jVSy0Lny1Fn-LNfeqY_ibNuUUkc-i6PytqqgGkcW-oS2zzVVy-y6xM6GpOdPG4FblfEW_NxW6o06c5I-UNS8tKDdbe7NrO9G9H7sDWAowD7FXkguJfLw',
    days: 8,
    type: 'Coastal',
    difficulty: 'Easy'
  },
  {
    id: 'kochi-heritage',
    title: 'Kochi Heritage',
    description: 'Immerse yourself in history. Ride through paddy plains and explore the rich cultural tapestry of Kerala and Tamil Nadu.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC04ITMcH459xFk-I6kY8srTDVY6xnIkkr1rxIlWSZQdtXMsd0Tk7PnQIa9LwmsMoembkYqv9MwkDKG0sMn2RwEsfF3zjKVrVNyySn977oJcRnOKhKojEExuDymdWRj3VhimGItuuULm5NabA9Mjp1kLFa-sydAiTZmgnVaAWmrE38VhtaTw6w-JQ1kyiUzCZ6489UjmqCIXcjls2zsIwXnUZIfGypdXLYt2cz_xZRSOOpGZjaURKt7lURMGdQ4F_tcS9CA0ARCbS3E',
    days: 10,
    type: 'Culture',
    difficulty: 'Medium'
  }
];

export const Routes: React.FC = () => {
  return (
    <section id="our-rides" className="py-24 px-4 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Signature Routes</h2>
          <p className="text-primary font-bold uppercase tracking-widest text-sm">Discover the beauty of Southern India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div key={route.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                {route.badge && (
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur text-primary px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                    {route.badge}
                  </div>
                )}
                <img 
                  src={route.image} 
                  alt={route.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                <h3 className="absolute bottom-6 left-6 text-white font-display text-2xl font-bold tracking-wide">{route.title}</h3>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <span className="flex items-center gap-1"><span className="material-icons text-accent text-sm">schedule</span> {route.days} Days</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-accent text-sm">landscape</span> {route.type}</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-accent text-sm">trending_up</span> {route.difficulty}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                  {route.description}
                </p>
                
                <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors group-hover:underline decoration-2 underline-offset-4 uppercase text-sm tracking-wide">
                  View Itinerary <span className="material-icons text-sm ml-2">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};