import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { getStrapiMedia } from '@/lib/strapi';

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    thumbnail?: string | any;
    attributes?: any;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  // Normalize data
  const title = post.title || post.attributes?.title;
  const slug = post.slug || post.attributes?.slug || title?.toLowerCase().replace(/ /g, '-');
  const date = post.date || post.attributes?.date || post.attributes?.publishedAt?.split('T')[0];
  const excerpt = post.excerpt || post.attributes?.excerpt || "Read more about this story...";

  // Image handling
  let imageUrl = "https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"; // Fallback

  if (post.thumbnail) {
      if (typeof post.thumbnail === 'string') {
          imageUrl = post.thumbnail;
      } else if (post.attributes?.thumbnail?.data?.attributes?.url) {
          imageUrl = getStrapiMedia(post.attributes.thumbnail.data.attributes.url) || imageUrl;
      } else if (post.attributes?.image?.data?.attributes?.url) {
          imageUrl = getStrapiMedia(post.attributes.image.data.attributes.url) || imageUrl;
      }
  } else if (post.attributes?.thumbnail?.data?.attributes?.url) {
      imageUrl = getStrapiMedia(post.attributes.thumbnail.data.attributes.url) || imageUrl;
  }

  // Format date if needed
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date';

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full">
         <Image
            src={imageUrl}
            alt={title || "Blog Post"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
             <Calendar className="w-4 h-4 mr-2 text-primary" />
             {formattedDate}
        </div>

        <h3 className="text-xl font-display font-bold text-gray-800 mb-3 line-clamp-2">{title}</h3>

        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
            {excerpt}
        </p>

        <div className="mt-auto">
            <Link href={`/${slug}`} className="inline-flex items-center text-accent font-semibold hover:text-orange-700 transition-colors">
                Read Story
                <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>
      </div>
    </div>
  );
}
