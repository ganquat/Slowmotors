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
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-xl md:text-2xl font-display font-medium tracking-[0.2em] mb-4 uppercase leading-relaxed">
            {subtitle}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 leading-tight">
            {title}
        </h1>
        
        <Link
            href="/tours"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg uppercase tracking-widest text-sm"
        >
            {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
