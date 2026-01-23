import React from 'react';

export default function DynamicPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-display font-bold text-accent mb-6 capitalize">
        {params.slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        We are working on this page. Please check back later!
      </p>
      <div className="bg-gray-100 p-8 rounded-lg inline-block">
        <span className="text-primary font-bold">Coming Soon</span>
      </div>
    </div>
  );
}
