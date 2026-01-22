import Image from 'next/image';

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
    <section className="py-32 bg-gray-900 text-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Our Fleet</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">THE MACHINE</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Robust, classic, and built for the Indian terrain. We ride the legendary Royal Enfield.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {machines.map((machine) => (
                    <div key={machine.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl group">
                        <div className="relative h-64 w-full overflow-hidden">
                             {/* Fallback image logic is handled in parent or here if url is missing */}
                            <Image
                                src={machine.imageUrl || (machine.name.includes("Himalayan") ? "https://whimsical-badge-f41b91c26a.media.strapiapp.com/Himalayan_5330a6c026.webp" : "https://whimsical-badge-f41b91c26a.media.strapiapp.com/Classic_500_82570086c9.webp")}
                                alt={machine.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold font-display mb-3 text-white">{machine.name}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {machine.description}
                            </p>
                            <button className="text-primary font-bold uppercase text-sm tracking-wider hover:text-white transition-colors">
                                View Specs
                            </button>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </section>
  );
};

export default TheMachine;
