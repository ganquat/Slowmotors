import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Discover from '@/components/Discover';
import Gallery from '@/components/Gallery';
import TheMachine from '@/components/TheMachine';
import Testimonials from '@/components/Testimonials';

// Data Fetching
import { getGlobalData, getHomePageData, getImageUrlByName, getTestimonialsData, getMachinesData } from '@/lib/strapi';
import {
    DEFAULT_HERO,
    DEFAULT_FEATURES,
    DEFAULT_DISCOVER,
    DEFAULT_TESTIMONIALS,
    DEFAULT_MACHINES
} from '@/lib/defaults';

export default async function Home() {
  // Parallel Data Fetching
  const [
    globalData,
    homePageData,
    heroImage,
    foundersImage,
    testimonialsData,
    machinesData
  ] = await Promise.all([
    getGlobalData(),
    getHomePageData(),
    getImageUrlByName('Enfield_Hero'),
    getImageUrlByName('Founders'),
    getTestimonialsData(),
    getMachinesData()
  ]);

  // Logic to determine content (API > Default)
  // Handling Strapi v4 structure where data is nested in 'attributes'
  const attributes = homePageData?.attributes || homePageData || {};

  // Hero
  // We check for the specific fields, falling back to defaults if missing or empty
  const heroTitle = attributes.hero_title || DEFAULT_HERO.title;
  const heroSubtitle = attributes.hero_subtitle || DEFAULT_HERO.subtitle;
  const heroCta = attributes.hero_cta || DEFAULT_HERO.cta;
  const heroImgUrl = heroImage || null;

  // Features
  const features = DEFAULT_FEATURES;

  // Discover
  const discoverTitle = DEFAULT_DISCOVER.title;
  const discoverDesc = DEFAULT_DISCOVER.description;
  const foundersTitle = DEFAULT_DISCOVER.foundersTitle;
  const foundersDesc = DEFAULT_DISCOVER.foundersDescription;

  // Testimonials
  const testimonials = testimonialsData || DEFAULT_TESTIMONIALS;

  // Machines
  const machines = machinesData || DEFAULT_MACHINES;

  return (
    <main className="min-h-screen font-sans text-accent">
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={heroCta}
        imageUrl={heroImgUrl}
      />

      <div className="py-20 md:py-24">
        <Features features={features} />
      </div>

      <div className="py-20 md:py-24">
        <Discover
            title={discoverTitle}
            description={discoverDesc}
            foundersTitle={foundersTitle}
            foundersDescription={foundersDesc}
            foundersImage={foundersImage}
        />
      </div>

      <div className="py-20 md:py-24">
        <Gallery />
      </div>

      <div className="py-20 md:py-24">
        <TheMachine machines={machines} />
      </div>

      <div className="py-20 md:py-24">
        <Testimonials testimonials={testimonials} />
      </div>
    </main>
  );
}
