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
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
        <h2 className="text-lg md:text-xl font-display font-medium tracking-[0.2em] mb-6 uppercase leading-relaxed text-gray-200">
            {subtitle}
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-10 leading-tight drop-shadow-lg">
            {title}
        </h1>
        
        <Link
            href="/motorcycle-rides-india"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-xl uppercase tracking-widest text-sm border-2 border-transparent hover:border-white/20"
        >
            {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
