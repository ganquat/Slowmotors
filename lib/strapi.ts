const STRAPI_URL = process.env.STRAPI_API_URL || "https://whimsical-badge-f41b91c26a.strapiapp.com/api";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

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
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Failed to fetch from ${url}: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    return null;
  }
}

export async function getGlobalData() {
    // Attempt to fetch global settings (site name, SEO, etc.)
    return await fetchAPI("/global", { populate: "*" });
}

export async function getHomePageData() {
    // Attempt to fetch homepage specific data if it exists
    // We try looking for a page with slug 'home' or similar
    const pages = await fetchAPI("/pages", {
        "filters[slug][$eq]": "home",
        populate: "*"
    });
    return pages && pages.length > 0 ? pages[0] : null;
}

export async function getImageUrlByName(name: string) {
    // Helper to find an image by its name
    const data = await fetchAPI("/upload/files", {
        "filters[name][$contains]": name,
        "pagination[limit]": "1"
    });

    if (data && data.length > 0) {
        return data[0].url;
    }
    return null;
}

export async function getGalleryImages(limit = 12) {
    return await fetchAPI('/upload/files', {
        "sort": "createdAt:desc",
        "pagination[limit]": limit.toString(),
        "filters[mime][$contains]": "image",
        "filters[width][$gt]": "500"
    });
}

export async function getNavigationData() {
    // Attempt to fetch navigation from global data or a specific navigation endpoint
    // We try to get it from Global data first.
    const globalData = await getGlobalData();
    if (globalData && globalData.attributes && globalData.attributes.navigation) {
        return globalData.attributes.navigation;
    }
    return null;
}
