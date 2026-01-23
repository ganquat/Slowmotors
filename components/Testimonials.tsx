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
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Reviews</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-4 leading-tight">RIDERS SPEAK</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative border border-gray-100">
                    <Quote className="absolute top-8 left-8 text-primary/10 w-16 h-16" />
                    <p className="text-gray-600 italic mb-8 relative z-10 pt-6 leading-relaxed">
                        &quot;{t.quote}&quot;
                    </p>
                    <div className="flex items-center border-t border-gray-100 pt-6">
                        <div className="relative w-12 h-12 mr-4">
                             {t.image ? (
                                <Image
                                    src={t.image}
                                    alt={t.author}
                                    fill
                                    className="rounded-full object-cover"
                                />
                             ) : (
                                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                                    {t.author.charAt(0)}
                                </div>
                             )}
                             {t.countryCode && (
                                <span className="absolute -bottom-1 -right-1 text-sm bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                                    {getFlagEmoji(t.countryCode)}
                                </span>
                             )}
                        </div>
                        <div>
                            <h5 className="font-bold text-accent text-sm">{t.author}</h5>
                            <span className="text-xs text-gray-400 uppercase tracking-wide">{t.location}</span>
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
