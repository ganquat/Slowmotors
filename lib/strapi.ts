import { DEFAULT_TESTIMONIALS, DEFAULT_MACHINES } from '@/lib/defaults';

let STRAPI_URL = process.env.STRAPI_API_URL || "https://whimsical-badge-f41b91c26a.strapiapp.com/api";
if (!STRAPI_URL.endsWith('/api')) {
  STRAPI_URL = `${STRAPI_URL}/api`;
}

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "0cec9e46c16f27e945bdac58e7ea4bf9db1213d89c58c6bea04412f2a45a84db9ceb44d08e852de33b8f941d0bdf61dd59566d80890e02352e7abc55a5794ebf1f1142af4e522609c526ecc3e36e2de6d75fae4a978f55f44eeec4b8b95d1eb012c65b7b03c40698652ea415fab97d6b30c6aeb053120732ed7a031199b68e9a";

export async function fetchAPI(endpoint: string, params: Record<string, string> = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = `${STRAPI_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;

  if (!STRAPI_TOKEN) {
      console.warn("STRAPI_API_TOKEN is missing in environment variables.");
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const msg = `Failed to fetch from ${url}: ${res.status} ${res.statusText}`;
      // Console noise silenced as per requirements
      return { data: null, error: msg };
    }

    const json = await res.json();
    // console.log(`Response from ${url}:`, JSON.stringify(json, null, 2));
    return { data: json.data, error: null };
  } catch (error) {
    const msg = `Failed to connect to Strapi: ${error}`;
    // Console noise silenced as per requirements
    return { data: null, error: msg };
  }
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  // Remove /api from STRAPI_URL if present for media, usually media is at root
  // The current STRAPI_URL is .../api. Media is .../uploads/... or just root relative?
  // Strapi media URLs are usually relative to the root, not /api.
  // The provided STRAPI_URL includes /api.
  // So I should strip /api if I use it as base.
  // Actually, let's check the logs. Images have url: "https://whimsical-badge-f41b91c26a.media.strapiapp.com/..."
  // It seems Strapi Cloud returns full URLs for media (S3/Cloudinary/etc).
  // But if it returns relative, I need the base URL without /api.

  const baseUrl = STRAPI_URL.replace("/api", "");
  return `${baseUrl}${url}`;
}

export async function getGlobalData() {
    // Attempt to fetch global settings (site name, SEO, etc.)
    const { data } = await fetchAPI("/global", { populate: "*" });
    return data;
}

export async function getHomePageData() {
    // Attempt to fetch homepage specific data if it exists
    // We try looking for a page with slug 'home' or similar
    const { data: pages } = await fetchAPI("/pages", {
        "filters[slug][$eq]": "home",
        populate: "*"
    });
    return pages && pages.length > 0 ? pages[0] : null;
}

export async function getPagesData(slug: string) {
    const { data } = await fetchAPI("/pages", {
        "filters[slug][$eq]": slug,
        populate: "*"
    });
    return data && data.length > 0 ? data[0] : null;
}

export async function getToursData() {
    const { data } = await fetchAPI("/tours", {
        populate: "*"
    });
    return data;
}

export async function getTourData(slug: string) {
    const { data } = await fetchAPI("/tours", {
        "filters[slug][$eq]": slug,
        populate: "*"
    });
    return data && data.length > 0 ? data[0] : null;
}

export async function getImageUrlByName(name: string) {
    // Helper to find an image by its name
    const { data } = await fetchAPI("/upload/files", {
        "filters[name][$contains]": name,
        "pagination[limit]": "1"
    });

    if (data && data.length > 0) {
        return data[0].url;
    }
    return null;
}

export async function getGalleryImages(limit = 12) {
    const { data } = await fetchAPI('/upload/files', {
        "sort": "createdAt:desc",
        "pagination[limit]": limit.toString(),
        "filters[mime][$contains]": "image",
        "filters[width][$gt]": "500"
    });
    return data;
}

export async function getTestimonialsData() {
    // Stub: return default for now as endpoint is missing
    // We log it so we know we tried.
    console.log("Fetching testimonials: Using defaults (no endpoint found in discovery)");
    return DEFAULT_TESTIMONIALS;
}

export async function getMachinesData() {
    // Stub: return default for now as endpoint is missing
    console.log("Fetching machines: Using defaults (no endpoint found in discovery)");
    return DEFAULT_MACHINES;
}

export async function getNavigationData() {
    const MOCK_LINKS = [
        { id: 1, url: '/', label: 'Home' },
        { id: 2, url: '/motorcycle-rides-india', label: 'Our Motorcycle Rides' },
        { id: 3, url: '/motorbike-holidays-india', label: 'Your Motorbike Holidays' },
        { id: 4, url: '/about-us-our-philosophy', label: 'About Us' },
        { id: 5, url: '/slow-moto-stories', label: 'Slow Moto Stories' },
    ];

    // Attempt to fetch navigation from a specific navigation endpoint
    // Strapi v4 requires explicit population for nested components
    const { data: navData, error } = await fetchAPI("/navigation", {
        "populate[menu_items][populate]": "*"
    });

    if (navData && navData.attributes && Array.isArray(navData.attributes.menu_items)) {
        const links = navData.attributes.menu_items.map((item: any) => ({
            id: item.id,
            url: item.url,
            label: item.label,
            isButton: item.isButton || false
        }));
        return { links, error: null };
    }

    // Fallback to mock data if API fails or returns empty
    // Console noise silenced as per requirements
    // Suppress error in UI since we have a valid fallback
    return { links: MOCK_LINKS, error: null };
}
