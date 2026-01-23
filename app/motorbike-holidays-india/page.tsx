import React from 'react';
import Image from 'next/image';
import { Check, MapPin, Coffee, Moon, Sun } from 'lucide-react';

export const metadata = {
    title: 'Your Motorbike Holidays | Slow Moto Tours',
    description: 'Immersive motorcycle holidays in India.',
};

export default function MotorbikeHolidaysIndia() {
    // Hardcoded content as per "Source of Truth" from reference
    const features = [
        {
            title: "Riding slooow",
            description: "We start our days early to make the most of daylight. We have several breaks to enjoy a roadside chai. We arrive well in time to enjoy the evening.",
            icon: Sun
        },
        {
            title: "Accommodation",
            description: "We select the most charming, outstanding and warm-hearted accommodations. Beach resorts, jungle lodges, and heritage homes.",
            icon: Moon
        },
        {
            title: "Food & Drinks",
            description: "Tasty curries, exotic spices, fresh fruits. A culinary journey through the Indian sub-continent.",
            icon: Coffee
        },
        {
            title: "Beyond the Road",
            description: "Visit ancient temples, enjoy Ayurvedic massages, or just relax by the campfire.",
            icon: MapPin
        }
    ];

    const included = [
        "Royal Enfield 350cc Motorcycle Rental",
        "Fuel and Maintenance",
        "Experienced Road Captain & Mechanic",
        "Support Vehicle for Luggage",
        "All Accommodations (Twin Share)",
        "Breakfast and Dinner",
        "Airport Transfers",
        "All Entry Fees and Permits"
    ];

    return (
        <div className="pt-32 pb-20">
            {/* Header Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full mb-16">
                 <Image
                    src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Motorbike Holidays India"
                    fill
                    className="object-cover"
                    priority
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Your Motorbike Holidays</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide">Experience the Dream</p>
                    </div>
                 </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">

                {/* Immersive Text Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <feature.icon className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* What's Included */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <h2 className="text-3xl font-display font-bold text-center text-accent mb-10">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {included.map((item, index) => (
                            <div key={index} className="flex items-start">
                                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
