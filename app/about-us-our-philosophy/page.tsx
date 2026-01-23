import React from 'react';
import Image from 'next/image';
import { DEFAULT_IMAGES } from '@/lib/defaults';

export const metadata = {
    title: 'About Us | Our Philosophy | Slow Moto Tours',
    description: 'Slow Moto Tours was born from a shared passion for exploration, motorcycles, and the rich tapestry of Indian life.',
};

export default function AboutUs() {
    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">

            {/* Philosophy Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                <div className="lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-accent mb-6">Our Philosophy</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            Slow Moto Tours was born from a shared passion for exploration, motorcycles, and the rich tapestry of Indian life.
                            Jo and Pratish believe in "Slow Travel" – the art of taking it all in, one mile at a time.
                        </p>
                        <p className="mb-6">
                           We prioritize authentic connections and responsible travel over simply ticking off destinations.
                           Our journeys are designed to immerse you in the local culture, cuisine, and landscapes.
                        </p>

                        <ul className="list-none space-y-4">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                <span className="font-semibold text-gray-800">15+ years of experience leading tours in India</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                <span className="font-semibold text-gray-800">Expert knowledge of local routes and hidden gems</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                <span className="font-semibold text-gray-800">Deep commitment to sustainable and respectful tourism</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={DEFAULT_IMAGES.founders || "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
                        alt="Jo and Pratish"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

             {/* Team Section (Optional/Stub) */}
             <div className="text-center mt-24">
                 <h2 className="text-3xl font-display font-bold text-gray-800 mb-8">Meet the Team</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">
                     Our team of experienced road captains, mechanics, and support staff are dedicated to making your journey unforgettable.
                 </p>
             </div>

        </div>
    );
}
