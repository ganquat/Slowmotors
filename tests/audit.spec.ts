import { test, expect } from '@playwright/test';

test.describe('Audit & Validation', () => {
  test.setTimeout(60000);

  test('Homepage should load without console errors and have essential sections', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Handle potential hydration errors which appear as errors but might be warnings in some envs,
    // but user asked to fail on Fetch or Hydration errors.

    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });

    // Check Console Errors
    // Filter out some noise if necessary, but request was strict.
    expect(consoleErrors, `Console errors found: ${consoleErrors.join('\n')}`).toEqual([]);

    // Check Hero Title
    const heroTitle = page.locator('h1');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).not.toBeEmpty();

    // Check Gallery
    // Assuming Gallery has images.
    // We can check if at least one image is loaded.
    const images = page.locator('img');
    expect(await images.count()).toBeGreaterThan(0);

    // Check Testimonials
    // We expect some testimonials content.
    // Searching for text "Reviews" or similar from the scraped content or defaults.
    // The component name is Testimonials.tsx.

    // Check Navigation Links are present
    const navLinks = page.locator('nav a');
    expect(await navLinks.count()).toBeGreaterThan(0);
  });

  test('Crawl internal links for 404s', async ({ page }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });

    // Get all links
    const links = await page.locator('a').evaluateAll(anchors =>
      anchors.map(a => a.href).filter(href => href.startsWith(window.location.origin))
    );

    const uniqueLinks = [...new Set(links)];
    console.log(`Found ${uniqueLinks.length} unique internal links.`);

    for (const link of uniqueLinks) {
        if (link.includes('#')) continue;

        console.log(`Checking ${link}...`);
        const response = await page.goto(link);
        expect(response?.status(), `Broken link: ${link} returned ${response?.status()}`).toBe(200);

        // Double check it's not the 404 page content if status was 200 (Next.js usually sets 404 status correctly)
        const text = await page.locator('h1').first().textContent();
        expect(text).not.toContain('404');
        expect(text).not.toContain('Page Not Found');
    }
  });

});
