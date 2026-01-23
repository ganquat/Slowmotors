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
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || MapPin;
                return (
                    <div key={feature.id} className="flex flex-col items-center text-center p-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-primary">
                            <IconComponent size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-accent mb-3">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
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
