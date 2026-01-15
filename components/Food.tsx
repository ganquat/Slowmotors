import React from 'react';

export const Food: React.FC = () => {
  return (
    <section id="food" className="py-24 px-4 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                <img
                    src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Indian Cuisine"
                    className="relative rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                />
            </div>

            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Heaven for food lovers</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Food & Drinks</h2>
                <p className="mb-4">
                    Look forward to the most tasty curries you ever had, flavoured with exotic spices, hot as you please. We value local and seasonal offers like the fresh catch from the sea, a hearty mutton biryani or of course the huge variety of vegetarian specialties.
                </p>
                <p className="mb-4">
                    On the road we´ll anchor for famous Masala Chai tea, refresh with a mango juice almost straight from the tree and try out the crispy creations from the sizzling pan of street food vendors.
                </p>
                 <p className="italic text-sm text-gray-500">
                    Despite Indias rich cuisine we do occasionally praise the global triumph of Pizza and Burger. And there is absolutely nothing wrong with an exquisite BBQ on the terrace of our Resort.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};