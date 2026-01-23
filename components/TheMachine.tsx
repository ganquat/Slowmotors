import Image from 'next/image';
import { getStrapiMedia } from '@/lib/strapi';
import { DEFAULT_IMAGES } from '@/lib/defaults';

interface Machine {
    id: number;
    name: string;
    description: string;
    imageKey: string; // Used to fetch specific image if needed, or mapped to url
    imageUrl?: string;
}

interface TheMachineProps {
    machines: Machine[];
}

const TheMachine = ({ machines }: TheMachineProps) => {
  return (
    <section className="py-32 bg-accent text-white relative overflow-hidden">
       {/* Decorative Background Element */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none" />

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
                <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-3 text-sm">Ride with passion and style</h4>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">THE MACHINE</h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    Riding a Royal Enfield isn't just about getting from A to B; it's about the feel, the sound, and the connection to the machine. These legendary bikes are perfect for the diverse terrain of India.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {machines.map((machine, index) => {
                    const imageUrl = machine.imageUrl
                        ? getStrapiMedia(machine.imageUrl)
                        : (machine.name.includes("Himalayan")
                            ? DEFAULT_IMAGES.himalayan
                            : DEFAULT_IMAGES.classic500);

                    return (
                        <div key={machine.id} className={`flex flex-col ${index % 2 === 0 ? '' : 'lg:translate-y-12'} group`}>
                            <div className="relative h-[400px] w-full rounded-sm overflow-hidden mb-8 shadow-2xl">
                                {imageUrl && (
                                    <Image
                                        src={imageUrl}
                                        alt={machine.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-3xl font-bold font-display mb-3 text-white uppercase tracking-tight">{machine.name}</h3>
                                <p className="text-gray-400 leading-relaxed text-base mb-4">
                                    {machine.description}
                                </p>
                                <span className="text-primary font-bold uppercase text-xs tracking-widest group-hover:text-white transition-colors cursor-pointer">
                                    Discover Specs
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
       </div>
    </section>
  );
};

export default TheMachine;
