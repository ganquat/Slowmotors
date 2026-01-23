import { test, expect } from '@playwright/test';

test.describe('Audit & Validation', () => {
  test.setTimeout(60000);

  test('Homepage should load without console errors and have essential sections', async ({ page }) => {
    // 1. Monitor Console for Errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (!text.includes('favicon') && !text.includes('React DevTools')) {
             consoleErrors.push(text);
        }
      }
    });

    // 2. Navigate to Homepage
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });

    // 3. Verify Essential Sections
    // Hero Title - allowing for some layout shift or load time
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 20000 });

    // Navbar
    await expect(page.locator('nav').first()).toBeVisible();

    const criticalErrors = consoleErrors.filter(e => !e.includes('404') && !e.includes('Failed to load resource'));
    expect(criticalErrors, `Critical Console errors found: ${criticalErrors.join('\n')}`).toEqual([]);
  });

  test('Crawl internal links for 404s', async ({ page }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });

    const links = await page.locator('a').evaluateAll(anchors =>
      anchors
        .map(a => a.href)
        .filter(href => href.startsWith('http://localhost:3000') && !href.includes('#'))
    );

    const uniqueLinks = [...new Set(links)];
    console.log(`Found ${uniqueLinks.length} unique internal links.`);

    for (const link of uniqueLinks) {
        // console.log(`Checking ${link}...`);
        const response = await page.goto(link);
        expect(response?.status(), `Broken link: ${link} returned ${response?.status()}`).toBe(200);
    }
  });
});
