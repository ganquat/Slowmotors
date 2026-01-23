import { MapPin, Heart, ShieldCheck, HardHat, Users } from 'lucide-react';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface FeaturesProps {
    features: Feature[];
}

const iconMap: any = {
    MapPin: MapPin,
    Heart: Heart,
    ShieldCheck: ShieldCheck,
    HardHat: HardHat,
    Users: Users
};

const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
            {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || MapPin;
                return (
                    <div key={feature.id} className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 text-primary border border-gray-100 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:-translate-y-2">
                            <IconComponent size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-accent mb-4 font-display uppercase tracking-wide">{feature.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed px-2">
                            {feature.description}
                        </p>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Features;
