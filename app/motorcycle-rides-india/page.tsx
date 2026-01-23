import React from 'react';
import { getToursData } from '@/lib/strapi';
import TourCard from '@/components/TourCard';

export const metadata = {
    title: 'Our Motorcycle Rides | Slow Moto Tours',
    description: 'Discover our Royal Enfield Adventure Motorcycle Tours in South India.',
};

export default async function MotorcycleRidesIndia() {
  const tours = await getToursData();

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-accent mb-6">Our Motorcycle Rides</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our Royal Enfield Adventure Motorcycle Tours in South India.
          Experience authentic India on guided tours through winding mountain roads,
          ancient temples, and aromatic spice plantations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours && tours.map((tour: any) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {(!tours || tours.length === 0) && (
           <div className="text-center py-10">
               <p className="text-gray-500">No tours available at the moment. Please check back later.</p>
           </div>
      )}
    </div>
  );
}
