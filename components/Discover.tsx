import Image from 'next/image';
import { DEFAULT_IMAGES } from '@/lib/defaults';

interface DiscoverProps {
    title: string;
    description: string;
    foundersTitle: string;
    foundersDescription: string;
    foundersImage?: string | null;
}

const Discover = ({ title, description, foundersTitle, foundersDescription, foundersImage }: DiscoverProps) => {
  const imageSrc = foundersImage || DEFAULT_IMAGES.founders;

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* First Block: Southern India */}
        <div className="flex flex-col md:flex-row items-center mb-32 gap-16">
            <div className="w-full md:w-1/2">
                <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src={DEFAULT_IMAGES.southernIndia}
                        alt="Southern India Map"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
                <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-sm">Discover</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-8 leading-tight">{title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {description}
                </p>
                <button className="text-accent font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-2 hover:text-primary transition-colors">
                    EXPLORE OUR TOURS
                </button>
            </div>
        </div>

        {/* Second Block: Founders */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
                <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src={imageSrc}
                        alt="Jo and Pratish"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 md:pr-12 text-right md:text-left">
                 <div className="md:text-right">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-sm">The Founders</h4>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-8 leading-tight">{foundersTitle}</h2>
                 </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-8 md:text-right">
                   {foundersDescription}
                </p>
                <div className="flex justify-end md:justify-end">
                    <button className="text-accent font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-2 hover:text-primary transition-colors">
                        OUR PHILOSOPHY
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Discover;
