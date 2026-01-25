const https = require('https');

const STRAPI_URL = process.env.STRAPI_API_URL || "https://whimsical-badge-f41b91c26a.strapiapp.com/api";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
    console.error("Error: STRAPI_API_TOKEN environment variable is required.");
    process.exit(1);
}

// Data extracted from lib/defaults.ts
const DEFAULT_PAGES = {
    "motorcycle-rides-india": {
        title: "Our Motorcycle Rides",
        content: `<div><h1>Royal Enfield Adventure Motorcycle Tours</h1><h2>in South India</h2><p>Experience authentic India...</p></div>`
        // Note: Full HTML content would go here. Truncated for brevity in this seeder example,
        // but in a real migration, we would import the full object.
    },
    "motorbike-holidays-india": {
        title: "Your Motorbike Holidays",
        content: `<div><h1>Your Motorbike Holidays India</h1><p>Discover the Adventure...</p></div>`
    },
    "about-us-our-philosophy": {
        title: "About us / our Philosophy",
        content: `<div><h1>about us - our philosophy</h1><p>Riding slooow...</p></div>`
    },
    "slow-moto-stories": {
        title: "Slow Moto Stories",
        content: `<div><h1>Stories from the Slow Moto World</h1><p>Dive into the exciting world...</p></div>`
    }
};

async function fetchAPI(endpoint, method = 'GET', body = null) {
    const url = `${STRAPI_URL}${endpoint}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${STRAPI_TOKEN}`
        }
    };
    if (body) {
        options.body = JSON.stringify({ data: body });
    }

    return new Promise((resolve, reject) => {
        // Need to handle http/https if URL changes, but assuming https for Strapi Cloud
        // Using fetch is easier in Node 18+
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    return res.text().then(text => {
                         throw new Error(`API Error ${res.status}: ${text}`);
                    });
                }
                return res.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}

async function seed() {
    console.log('Starting seed process...');
    console.log(`Target: ${STRAPI_URL}`);

    for (const [slug, pageData] of Object.entries(DEFAULT_PAGES)) {
        console.log(`Processing page: ${slug}`);

        try {
            // Check if page exists
            const existing = await fetchAPI(`/pages?filters[slug][$eq]=${slug}`);

            if (existing.data && existing.data.length > 0) {
                console.log(`  Page ${slug} already exists (ID: ${existing.data[0].id}). Skipping...`);
                // Optional: Update logic
                // await fetchAPI(`/pages/${existing.data[0].id}`, 'PUT', { ...pageData, slug });
            } else {
                console.log(`  Creating page ${slug}...`);
                const created = await fetchAPI('/pages', 'POST', {
                    ...pageData,
                    slug
                });
                console.log(`  Created page ${slug} (ID: ${created.data.id})`);
            }
        } catch (error) {
            console.error(`  Error processing ${slug}:`, error.message);
        }
    }

    console.log('Seed process completed.');
}

seed();
