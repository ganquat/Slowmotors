import Image from 'next/image';
import { getGalleryImages } from '@/lib/strapi';

const Gallery = async () => {
  const files = await getGalleryImages();

  const images = files ? files.filter((f: any) => !f.name.includes("Logo") && !f.name.includes("Icon")) : [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Our Area</h4>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-4">RIDERS PARADISE</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
             From Kochi to Goa, we&apos;ve mapped out the most scenic, soulful, and satisfying routes for any rider.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.slice(0, 12).map((img: any, index: number) => (
            <div key={img.id} className="relative aspect-square group overflow-hidden bg-gray-100 rounded-sm">
                 <Image
                    src={img.url}
                    alt={img.alternativeText || img.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
        ))}
        {/* Fallback if no images found */}
        {images.length === 0 && (
             <div className="col-span-full text-center py-10 text-gray-400">
                 Gallery images loading...
             </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
