import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import { getStrapiMedia } from '@/lib/strapi';

interface TourCardProps {
  tour: {
    id: number;
    title: string;
    slug: string;
    duration?: string;
    distance?: string;
    groupSize?: string;
    price?: string;
    image?: string | any;
    attributes?: any;
  };
}

export default function TourCard({ tour }: TourCardProps) {
  // Normalize data (Strapi v4 vs Fallback)
  const title = tour.title || tour.attributes?.title;
  // If slug is missing, use title slugified
  const slug = tour.slug || tour.attributes?.slug || title?.toLowerCase().replace(/ /g, '-');
  const duration = tour.duration || tour.attributes?.duration || "14 Days";
  const distance = tour.distance || tour.attributes?.distance || "1800 km";
  const groupSize = tour.groupSize || tour.attributes?.groupSize || "Max 10";
  const price = tour.price || tour.attributes?.price || "€ 3,290";

  // Image handling
  // Default fallback if no image provided
  let imageUrl = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  if (tour.image) {
      if (typeof tour.image === 'string') {
          imageUrl = tour.image;
      } else if (tour.attributes?.image?.data?.attributes?.url) {
          imageUrl = getStrapiMedia(tour.attributes.image.data.attributes.url) || imageUrl;
      }
  } else if (tour.attributes?.cover_image?.data?.attributes?.url) {
       imageUrl = getStrapiMedia(tour.attributes.cover_image.data.attributes.url) || imageUrl;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-64 w-full">
         <Image
            src={imageUrl}
            alt={title || "Tour Image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         />
         <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full font-bold shadow-md">
            {price}
         </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">{title}</h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                <span className="text-sm">{duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-sm">{distance}</span>
            </div>
            <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2 text-primary" />
                <span className="text-sm">{groupSize}</span>
            </div>
        </div>

        <div className="mt-auto">
            <Link href={`/${slug}`} className="inline-flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>
      </div>
    </div>
  );
}
