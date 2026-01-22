import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Discover from '@/components/Discover';
import Gallery from '@/components/Gallery';
import TheMachine from '@/components/TheMachine';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

// Data Fetching
import { getGlobalData, getHomePageData, getImageUrlByName } from '@/lib/strapi';
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
    foundersImage
  ] = await Promise.all([
    getGlobalData(),
    getHomePageData(),
    getImageUrlByName('Enfield_Hero'),
    getImageUrlByName('Founders') // Trying to fetch founders image
  ]);

  // Logic to determine content (API > Default)

  // Hero
  const heroTitle = homePageData?.attributes?.hero_title || DEFAULT_HERO.title; // Hypothetical field
  const heroSubtitle = homePageData?.attributes?.hero_subtitle || DEFAULT_HERO.subtitle;
  const heroCta = DEFAULT_HERO.cta;
  const heroImgUrl = heroImage || null;

  // Features
  // Since structured features aren't easily available in the current schema (Elementor blobs),
  // we stick to defaults but this block demonstrates where we'd map API data.
  const features = DEFAULT_FEATURES;

  // Discover
  const discoverTitle = DEFAULT_DISCOVER.title;
  const discoverDesc = DEFAULT_DISCOVER.description;
  const foundersTitle = DEFAULT_DISCOVER.foundersTitle;
  const foundersDesc = DEFAULT_DISCOVER.foundersDescription;

  // Testimonials
  const testimonials = DEFAULT_TESTIMONIALS;

  // Machines
  const machines = DEFAULT_MACHINES;

  return (
    <main className="min-h-screen font-sans text-accent">
      <Navbar siteName={globalData?.attributes?.siteName} />

      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={heroCta}
        imageUrl={heroImgUrl}
      />

      <Features features={features} />

      <Discover
        title={discoverTitle}
        description={discoverDesc}
        foundersTitle={foundersTitle}
        foundersDescription={foundersDesc}
        foundersImage={foundersImage}
      />

      <Gallery />

      <TheMachine machines={machines} />

      <Testimonials testimonials={testimonials} />

      <Footer />
    </main>
  );
}
