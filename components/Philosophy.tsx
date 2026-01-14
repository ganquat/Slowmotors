import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <span className="material-icons-outlined text-4xl">spa</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Philosophy</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8" />
          <p className="text-xl md:text-2xl font-display italic text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Riding slooow means turning moments into everlasting memories."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="font-display text-3xl font-bold mb-6 text-primary">Slowing Down the Pace</h3>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At Slow Moto Tours, we intentionally move away from the "rush-hour" mentality. We design our routes not to cover the maximum distance, but to uncover the maximum experience.
            </p>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Picture yourself riding a legendary Royal Enfield Classic 350, feeling the warm wind as you cruise through stunning paddy plains, cool jungle forests, and along the serene beaches of the Arabian Sea.
            </p>
            
            <ul className="space-y-4">
              {[
                "Mindfully aware of every detail",
                "Immersion in local culture",
                "Stress-free, curated routes",
                "Small groups for personal experience"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-icons-outlined text-sm text-primary group-hover:text-white">check</span>
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvzVXzESciFBdf6rUknHO9a7DfGPG1G4S75B6US1aV-sQCQPCWRNcbRyU34gSyfyVwdjXcOoEVjoRWP6_e3bPvr9_lJaU8BWVLg4MSPl-7jPKuD-mtZRC0fJPqP0wacPmIDkFOv4YnIIYUMUBvVJNLDTOUyab5RjVyAGgEOajFXg6HbKkZaL4g_ZKleA4px57ipS7s-3iIl6wVkEUpnW15jJIrPvkZtf3w3SIvqLXsPehynJi3DYu7zS99TtosKv501ao0T2o9NIS2" 
              alt="Rider on Royal Enfield" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] transform transition duration-500"
            />
             <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Est. 2018</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};