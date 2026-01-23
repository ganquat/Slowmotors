import React from 'react';
import { getPagesData, getTourData } from '@/lib/strapi';
import { notFound } from 'next/navigation';

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  const slugArray = params.slug;
  // Use the last segment of the path as the slug to query Strapi
  // e.g., /tour-category/my-tour -> my-tour
  const targetSlug = slugArray[slugArray.length - 1];

  // Try fetching as a Page
  let data = await getPagesData(targetSlug);
  let type = 'page';

  // If not found, try fetching as a Tour
  if (!data) {
    data = await getTourData(targetSlug);
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
        {title || targetSlug.replace(/-/g, ' ')}
      </h1>

      {content ? (
        <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-accent prose-a:text-primary hover:prose-a:text-orange-700 prose-img:rounded-xl prose-img:shadow-lg prose-img:w-full prose-img:my-8 prose-p:text-gray-700 prose-li:text-gray-700"
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
