import React, { useState } from 'react';

const faqItems = [
    {
        q: "Is there Wifi?",
        a: "Facilities such as electricity, Wifi and laundry are available at accommodations."
    },
    {
        q: "Is it safe?",
        a: "Malaria is not a risk in South India. Dengue fever is endemic, so good precautions are vital. We carry a comprehensive first-aid kit and our crew is certified. See our 'Safety' section for more."
    },
    {
        q: "How will the weather be like?",
        a: "Tropical climate. Dry season with sunshine, avg 28°C. Higher areas cooler (20-22°C day, down to 9°C night). Bring warm clothes and rain gear."
    },
    {
        q: "Am I fit and experienced enough?",
        a: "You should be fit enough to ride 4-7 hours a day. Experience in long rides is better but not mandatory. Check with your doctor for preexisting conditions."
    },
    {
        q: "How are the road conditions?",
        a: "Everything from brand new mountain curves to pothole dappled country roads, narrow alleys, gravel and sand. The Enfield is built for this."
    },
    {
        q: "What about luggage?",
        a: "Your general luggage travels on our service truck (max 25kg). We recommend a small backpack for daily essentials."
    },
     {
        q: "Can I bring my own bike?",
        a: "The cost to rent one of our Enfields is included. If you want to bring your own, please contact us for custom holidays."
    }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-white dark:bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">FAQ</h2>
           <p className="text-gray-600 dark:text-gray-300">Frequently Asked Questions</p>
        </div>

        <div className="space-y-4">
            {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <button
                        className="w-full flex justify-between items-center p-6 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="font-bold text-gray-900 dark:text-white pr-8">{item.q}</span>
                        <span className="material-icons text-primary transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            expand_more
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800">
                            {item.a}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};