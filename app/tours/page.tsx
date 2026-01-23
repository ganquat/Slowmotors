import TourCard from '@/components/TourCard';
import { getToursData } from '@/lib/strapi';
import { DEFAULT_PAGES, DEFAULT_IMAGES } from '@/lib/defaults';

// Fallback data matching reference site content with unique images
const FALLBACK_TOURS = [
    {
        id: 1,
        slug: "6-days-adventure-motorcycle-trips-kochi",
        attributes: {
            title: "6 Days Kochi Round Trip",
            description: "An impressive and diverse adventure motorcycle tour from the tropical climate at the Ocean into the mountains of the Munnar Hills. Through tiger and elephant sanctuaries, the mild air of tea plantations and cool forests.",
            price: "€1,290",
            duration: "6 Days",
            slug: "6-days-adventure-motorcycle-trips-kochi",
            cover_image: { data: { attributes: { url: DEFAULT_IMAGES.southernIndia } } }
        }
    },
    {
        id: 2,
        slug: "6-days-adventure-motorcycle-trips-goa",
        attributes: {
            title: "6 Days Goa Round Trip",
            description: "A luxury motorcycle adventure tour through Goa’s serene hinterlands and stunning coastal regions, complemented by exclusive, handpicked activities, heritage stays, and authentic Goan cuisine.",
            price: "€1,450",
            duration: "6 Days",
            slug: "6-days-adventure-motorcycle-trips-goa",
            cover_image: { data: { attributes: { url: "https://images.unsplash.com/photo-1652820330085-82a0c2b88d78" } } } // Goa Beach
        }
    },
    {
        id: 3,
        slug: "14-days-adventure-motorcycle-trips-kochi",
        attributes: {
            title: "14 Days Kochi Round Trip",
            description: "Ride the legendary Royal Enfield Bullet along the border of Kerala, Tamil Nadu and Karnataka. From the Ocean through tea plantations, sunny paddy plains and cool jungle forests.",
            price: "€2,690",
            duration: "14 Days",
            slug: "14-days-adventure-motorcycle-trips-kochi",
            cover_image: { data: { attributes: { url: DEFAULT_IMAGES.himalayan } } }
        }
    },
    {
        id: 4,
        slug: "12-days-adventure-motorcycle-trips-kochi-to-goa",
        attributes: {
            title: "12 Days Kochi → Goa",
            description: "An exciting one-way motorcycle adventure exploring the scenic landscapes of the Western Ghats. From Kerala over Tamil Nadu into Karnataka and Goa enjoy the rides through reserves.",
            price: "€2,450",
            duration: "12 Days",
            slug: "12-days-adventure-motorcycle-trips-kochi-to-goa",
            cover_image: { data: { attributes: { url: DEFAULT_IMAGES.classic500 } } }
        }
    },
    {
        id: 5,
        slug: "12-days-adventure-motorcycle-trips-goa-to-kochi",
        attributes: {
            title: "12 Days Goa → Kochi",
            description: "A thrilling one-way motorcycle tour through the Western Ghats, Kerala's wildlife reserves, and Tamil Nadu's cultural landscapes, experiencing nature's splendour.",
            price: "€2,450",
            duration: "12 Days",
            slug: "12-days-adventure-motorcycle-trips-goa-to-kochi",
            cover_image: { data: { attributes: { url: "https://images.unsplash.com/photo-1563279036-8ae92c62ca4f" } } } // Kerala Backwaters
        }
    },
    {
        id: 6,
        slug: "custom-motorcycle-adventure-holidays",
        attributes: {
            title: "Tailor-Made Adventures",
            description: "South India is yours! Let´s design your tailor-made Adventure Motorcycle Ride. Your timing - your route - your company. We´d love to design your custom all inclusive ride.",
            price: "Custom",
            duration: "Flexible",
            slug: "custom-motorcycle-adventure-holidays",
            cover_image: { data: { attributes: { url: "https://images.unsplash.com/photo-1758090524386-f64d7ff09180" } } } // Mountain Pass
        }
    }
];

export default async function ToursPage() {
    const strapiTours = await getToursData();
    // Prioritize Strapi data, but fallback if empty/error
    const tours = (strapiTours && strapiTours.length > 0) ? strapiTours : FALLBACK_TOURS;

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-accent mb-6">
                        Our Motorcycle Rides
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover our Royal Enfield Adventure Motorcycle Tours in South India.
                        From short escapes to epic 14-day journeys.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour: any) => {
                        const attr = tour.attributes || tour; // Handle structure diffs
                        const imageUrl = attr.cover_image?.data?.attributes?.url;

                        return (
                            <TourCard
                                key={tour.id}
                                title={attr.title}
                                description={attr.description}
                                slug={attr.slug}
                                price={attr.price}
                                duration={attr.duration}
                                imageUrl={imageUrl}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
