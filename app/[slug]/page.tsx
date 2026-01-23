import React from 'react';
import { getPagesData, getTourData } from '@/lib/strapi';
import { notFound } from 'next/navigation';

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // Try fetching as a Page
  let data = await getPagesData(slug);
  let type = 'page';

  // If not found, try fetching as a Tour
  if (!data) {
    data = await getTourData(slug);
    type = 'tour';
  }

  if (!data) {
    // If neither found, display 404
    return notFound();
  }

  // Handle content
  // Strapi response might have 'content' field with HTML (from Elementor/RichText)
  const content = data.content || data.attributes?.content;
  const title = data.title || data.attributes?.title;

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-display font-bold text-accent mb-6 capitalize text-center">
        {title || slug.replace(/-/g, ' ')}
      </h1>

      {content ? (
        <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-accent prose-a:text-primary hover:prose-a:text-orange-700"
            dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">
                We are working on this page. Please check back later!
            </p>
            <div className="bg-gray-100 p-8 rounded-lg inline-block">
                <span className="text-primary font-bold">Coming Soon</span>
            </div>
        </div>
      )}
    </div>
  );
}
