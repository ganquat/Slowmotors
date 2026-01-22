import Image from 'next/image';

interface DiscoverProps {
    title: string;
    description: string;
    foundersTitle: string;
    foundersDescription: string;
    foundersImage?: string | null;
}

const Discover = ({ title, description, foundersTitle, foundersDescription, foundersImage }: DiscoverProps) => {
  const imageSrc = foundersImage || "https://whimsical-badge-f41b91c26a.media.strapiapp.com/Founders_b6e7e45293.webp";

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* First Block: Southern India */}
        <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
            <div className="w-full md:w-1/2">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="https://whimsical-badge-f41b91c26a.media.strapiapp.com/Southern_India_Map_429a365f5e.webp" // This could also be dynamic if needed, but keeping simple for now
                        alt="Southern India Map"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-10">
                <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Discover</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-6 leading-tight">{title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {description}
                </p>
                <button className="text-primary font-bold uppercase tracking-wider text-sm border-b-2 border-primary pb-1 hover:text-orange-600 transition-colors">
                    Read More
                </button>
            </div>
        </div>

        {/* Second Block: Founders */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={imageSrc}
                        alt="Jo and Pratish"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 md:pr-10 text-right md:text-left">
                 <div className="md:text-right">
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Team</h4>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-6 leading-tight">{foundersTitle}</h2>
                 </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 md:text-right">
                   {foundersDescription}
                </p>
                <div className="flex justify-end md:justify-end"> {/* Simplified alignment */}
                    <button className="text-primary font-bold uppercase tracking-wider text-sm border-b-2 border-primary pb-1 hover:text-orange-600 transition-colors">
                        Meet the Team
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Discover;
