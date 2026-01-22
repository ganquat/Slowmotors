import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  imageUrl?: string | null;
}

const Hero = ({ title, subtitle, ctaText, imageUrl }: HeroProps) => {
  // Fallback hardcoded if the specific image fetch failed in parent or returned null
  const bgImage = imageUrl || "https://whimsical-badge-f41b91c26a.media.strapiapp.com/Enfield_Hero_cbc34cbc02.webp";

  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
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
         <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-xl md:text-2xl font-medium tracking-[0.2em] mb-4 uppercase leading-relaxed">
            {subtitle}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 leading-tight">
            {title}
        </h1>
        
        <Link
            href="/tours"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 uppercase tracking-widest text-sm"
        >
            {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
