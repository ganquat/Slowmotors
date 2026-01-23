import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/strapi';
import { DEFAULT_IMAGES } from '@/lib/defaults';

interface TourCardProps {
  title: string;
  description: string;
  slug: string;
  price?: string;
  duration?: string;
  imageUrl?: string | null;
}

const TourCard = ({ title, description, slug, price, duration, imageUrl }: TourCardProps) => {
  // Use specific image or fallback from defaults (rotating or static)
  const image = imageUrl ? getStrapiMedia(imageUrl) : DEFAULT_IMAGES.southernIndia;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || DEFAULT_IMAGES.southernIndia}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

        {/* Metadata Badges */}
        <div className="absolute bottom-4 left-4 flex gap-2">
            {duration && (
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {duration}
                </span>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-display text-accent mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
            {description}
        </p>

        <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-4">
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Starting from</p>
                <p className="text-lg font-bold text-primary">{price || 'On Request'}</p>
            </div>

            <Link
                href={`/${slug}`}
                className="inline-flex items-center text-sm font-bold text-accent hover:text-primary transition-colors uppercase tracking-wider"
            >
                View Details
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
