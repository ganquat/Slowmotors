import { Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    location: string;
    image?: string;
    countryCode?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-2 text-sm">Riders Speak</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-4 leading-tight">TESTIMONIALS</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div key={t.id} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 relative border border-gray-100 flex flex-col h-full">
                    <Quote className="text-primary/20 w-12 h-12 mb-6" />
                    <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed flex-grow">
                        &quot;{t.quote}&quot;
                    </p>
                    <div className="flex items-center pt-6 border-t border-gray-50 mt-auto">
                        <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                             {t.image ? (
                                <Image
                                    src={t.image}
                                    alt={t.author}
                                    fill
                                    className="rounded-full object-cover"
                                />
                             ) : (
                                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-primary font-bold text-lg font-display">
                                    {t.author.charAt(0)}
                                </div>
                             )}
                             {t.countryCode && (
                                <span className="absolute -bottom-1 -right-1 text-base bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md border border-gray-100">
                                    {getFlagEmoji(t.countryCode)}
                                </span>
                             )}
                        </div>
                        <div>
                            <h5 className="font-bold text-accent text-sm font-display uppercase tracking-wide">{t.author}</h5>
                            <span className="text-xs text-gray-400 uppercase tracking-widest">{t.location}</span>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Testimonials;
