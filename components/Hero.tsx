import Link from 'next/link';
import Image from 'next/image';
import { DEFAULT_IMAGES } from '../lib/defaults';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  imageUrl?: string | null;
}

const Hero = ({ title, subtitle, ctaText, imageUrl }: HeroProps) => {
  // Fallback hardcoded if the specific image fetch failed in parent or returned null
  const bgImage = imageUrl || DEFAULT_IMAGES.hero;

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image
            src={bgImage}
            alt="Royal Enfield Motorcycle"
            fill
            className="object-cover object-center"
            priority
            quality={90}
         />
         {/* Overlay - adjusting opacity to ensure text readability while keeping image visible */}
         <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
        <h2 className="text-sm md:text-base font-display font-medium tracking-[0.2em] mb-4 uppercase text-gray-100">
            {subtitle}
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-12 leading-tight drop-shadow-xl max-w-4xl mx-auto">
            {title}
        </h1>
        
        <Link
            href="/motorcycle-rides-india"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-xl uppercase tracking-widest text-xs md:text-sm border-2 border-transparent"
        >
            {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
