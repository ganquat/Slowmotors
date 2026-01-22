import { Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    location: string;
    image?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Reviews</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-4">RIDERS LOVE US</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-xl shadow-lg relative">
                    <Quote className="absolute top-8 left-8 text-primary/20 w-12 h-12" />
                    <p className="text-gray-600 italic mb-6 relative z-10 pt-6">
                        &quot;{t.quote}&quot;
                    </p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-4 overflow-hidden relative">
                             {/* Placeholder avatar */}
                             <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                                {t.author.charAt(0)}
                             </div>
                        </div>
                        <div>
                            <h5 className="font-bold text-accent text-sm">{t.author}</h5>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">{t.location}</span>
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
