import React from 'react';

export const Safety: React.FC = () => {
  return (
    <section id="safety" className="py-24 px-4 bg-white dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Indian Traffic</span>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Safety on Indian Roads</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10" />
                <div className="relative bg-background-light dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="material-icons text-primary">health_and_safety</span>
                        Our Measures
                    </h4>
                    <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                        <li className="flex gap-3">
                            <span className="material-icons text-green-500 text-sm mt-1">check_circle</span>
                            <span>Convoy formation with experienced road captain leading.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="material-icons text-green-500 text-sm mt-1">check_circle</span>
                            <span>Comprehensive first-aid kit and crew certified in first aid.</span>
                        </li>
                         <li className="flex gap-3">
                            <span className="material-icons text-green-500 text-sm mt-1">check_circle</span>
                             <span>Mandatory helmet, proper shoes, and gloves.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="material-icons text-green-500 text-sm mt-1">check_circle</span>
                            <span>We ride slow enough to accustom yourself to the adventure.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="order-1 lg:order-2 prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                    India is in many ways different from what you are used to in Western countries. But that´s part of why you booked your motorbike holidays here, right?
                </p>
                <p className="mb-4">
                    Left-hand traffic prevails in India. Although they exist you can’t always rely on the traffic rules. To preserve your physical integrity you should drive with extra foresight. Don´t be surprised with a cow loitering on the road or an ox cart driving the wrong way up your lane.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <p className="italic text-gray-800 dark:text-gray-200 m-0">
                        "Only if you feel comfortable can you enjoy our road trip to the fullest, and after all, that’s what we want."
                    </p>
                </div>
                 <p className="mt-4">
                     In the event of a medical emergency, Kerala has an advanced emergency medicine system, so in serious cases, you would soon be in the trustful hands of a professional medic.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};