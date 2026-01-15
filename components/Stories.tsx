import React from 'react';
import { Story } from '../types';

const stories: Story[] = [
  {
    id: 'traffic-rules',
    title: 'Traffic Rules, Road Conditions, and Safety in India',
    description: '10½ Hilariously Honest Observations. A Survival Guide for First-Time Riders in the Land of Horns, Herds, and Holy Chaos.',
    image: 'https://slowmoto.tours/wp-content/uploads/Crazy-Indian-Traffic-comic-style.webp',
    link: 'https://slowmoto.tours/traffic-rules-road-conditions-and-safety-in-india/'
  },
  {
    id: 'kickstarting-season',
    title: 'Kickstarting our season - From Ha Giang loop to our Diwali tour',
    description: 'Our upcoming season kicks off with our first tour in October, perfectly timed with Diwali, the festival of lights.',
    image: 'https://slowmoto.tours/wp-content/uploads/Bike-Parade-leaving-Hasanur.webp',
    link: 'https://slowmoto.tours/kickstarting-our-season-from-ha-giang-loop-to-our-diwali-tour/'
  },
  {
    id: 'opening-roads',
    title: 'Opening the Roads to Chirakkal',
    description: 'As we rode through the bustling streets of Kochi, a mix of excitement and apprehension filled my mind. Would everything go according to plan?',
    image: 'https://slowmoto.tours/wp-content/uploads/Collage-01012023.webp',
    link: 'https://slowmoto.tours/opening-the-roads-to-chirakkal/'
  },
  {
    id: 'impossible-journey',
    title: 'The only impossible journey is the one you never begin.',
    description: 'In heavy rain and 14 degrees, we were riding our Enfields through the mountains to scout a route when a thought flashed through my mind for a brief second.',
    image: 'https://slowmoto.tours/wp-content/uploads/Into-Anamalai-Tiger-Reserve-768x320.webp',
    link: 'https://slowmoto.tours/the-only-impossible-journey-is/'
  }
];

export const Stories: React.FC = () => {
  return (
    <section id="stories" className="py-24 bg-background-light dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Blog</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">
            Stories from the Slow Moto World
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 italic max-w-3xl mx-auto">
            "Here we share what touches and impresses us. What we see and experience on our rides and beyond."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stories.map((story) => (
            <div key={story.id} className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{story.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">{story.description}</p>

                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors group-hover:underline decoration-2 underline-offset-4 uppercase text-sm tracking-wide"
                >
                  Read Story <span className="material-icons text-sm ml-2">east</span>
                </a>
              </div>
            </div>
          ))}
        </div>

         <div className="mt-16 text-center">
             <a href="https://slowmoto.tours/slow-moto-stories/" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all uppercase tracking-wide text-sm">
                View All Stories
            </a>
        </div>
      </div>
    </section>
  );
};
