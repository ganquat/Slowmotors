import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Peter Birch',
    location: 'New Zealand',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEbsekUZss60Hiz4zDvwmgPdv2kJRv8WV73Iu0cE1wk8rhpcz6O751RPl0Vo7RZuTDNQSHWDxMpHjFsyIKzk-vD3wVPJMHDej0aX5W5wvrtEyE2tujb4S_Q7EbVyOa-z9NyvCdrAw5puCzL6XjgdBV4x5lXNQUn5abZCtPhC2C1p1trYgnPZ9EXtLElwMK8jDs1Ja5Feu_LF7EJCgYS4o2nnA8zktJxetU_056_h6GcWknSezS6lOZAMvv8LXlEgJpmwhqkR0cF5Lg',
    quote: "This trip was not just a tour, it was an adventure! From the hot and dusty plains... every twisty turn delighted my wife Jo and I with the sights, sounds and aromas of Southern India.",
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_kmgkDmpE7UE94midamg6lPf4qfrjB81IlAHu9HOAbB9Pf64rgC7yTvzpUDoCx0uTu7oV8EoSsYCMvNgzTRS_4Z6c7pt99-8eQJiPDJ17hNgflmxoh7z9WpyxjFA33YbHJdTjRbDAnJt_AwJJqGz3ugRUFeaaHLCZkxmvvwgWRRzpT9x2rWAKteNiORx5mrTo7-VdfzkkazsTqdEAC2K5RuSqt2HUEdcvNP6yxPjXMvZZJgJ9QrXZVgdaQxsXLNzIP4j1L1W9Jrk',
    quote: "Riding 'sloooow' was exactly what we needed. Turning moments into everlasting memories. The guides were knowledgeable, funny, and incredibly attentive to safety.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="stories" className="py-24 bg-primary/5 dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white italic">
            "This trip was not just a tour, it was an adventure!"
          </h2>
          <div className="flex justify-center items-center gap-2 mb-8">
            <span className="text-primary font-display italic text-lg">Quotes from our customers' reviews</span>
          </div>
          
           {/* Trustpilot / Google Mock */}
          <div className="flex justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
             <div className="flex items-center gap-2">
                 <span className="material-icons text-green-500">star</span>
                 <span className="font-bold text-gray-800 dark:text-white">Trustpilot</span>
             </div>
             <div className="flex items-center gap-2">
                 <span className="material-icons text-yellow-500">star</span>
                 <span className="font-bold text-gray-800 dark:text-white">Google Reviews</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl relative border-t-4 border-primary">
              <div className="absolute -top-5 left-8 bg-primary text-white p-2 rounded-full shadow-lg">
                <span className="material-icons">format_quote</span>
              </div>
              
              <div className="flex items-center gap-4 mt-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t.location}</p>
                  <div className="flex text-secondary text-xs mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="material-icons" style={{ fontSize: '14px' }}>star</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};