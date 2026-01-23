import React from 'react';
import { getPostsData } from '@/lib/strapi';
import BlogCard from '@/components/BlogCard';

export const metadata = {
    title: 'Slow Moto Stories | Blog | Slow Moto Tours',
    description: 'Read our latest stories and adventures from the road.',
};

export default async function SlowMotoStories() {
  const posts = await getPostsData();

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-accent mb-6">Slow Moto Stories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stories from the Slow Moto World. Dive into the exciting world of our adventure motorcycle trips in South India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts && posts.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {(!posts || posts.length === 0) && (
           <div className="text-center py-10">
               <p className="text-gray-500">No stories available at the moment. Please check back later.</p>
           </div>
      )}
    </div>
  );
}
