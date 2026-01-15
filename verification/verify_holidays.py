from playwright.sync_api import sync_playwright, expect

def verify_holidays():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        page.on("console", lambda msg: print(f"Browser console: {msg.text}"))
        page.on("pageerror", lambda err: print(f"Browser page error: {err}"))

        page.goto("http://localhost:3001")

        # Wait for page to load
        page.wait_for_load_state("networkidle")

        # Verify navigation to Holidays/Itinerary
        try:
             page.get_by_role("link", name="Holidays").click()
        except:
             print("Could not find link by role, trying by text")
             page.get_by_text("Holidays").click()

        # Wait for scrolling
        page.wait_for_timeout(2000)

        # Verify Itinerary section
        itinerary_section = page.locator("#itinerary")
        expect(itinerary_section).to_be_visible()
        itinerary_section.screenshot(path="verification/itinerary.png")

        # Verify Bikes section
        bikes_section = page.locator("#bikes")
        bikes_section.scroll_into_view_if_needed()
        expect(bikes_section).to_be_visible()
        # Ensure we wait a bit for any lazy loading or animations
        page.wait_for_timeout(500)
        bikes_section.screenshot(path="verification/bikes.png")

        # Verify Safety section
        safety_section = page.locator("#safety")
        safety_section.scroll_into_view_if_needed()
        expect(safety_section).to_be_visible()
        page.wait_for_timeout(500)
        safety_section.screenshot(path="verification/safety.png")

        # Verify FAQ section
        faq_section = page.locator("#faq")
        faq_section.scroll_into_view_if_needed()
        expect(faq_section).to_be_visible()
        page.wait_for_timeout(500)
        faq_section.screenshot(path="verification/faq.png")

        print("Verification complete. Screenshots saved.")

        browser.close()

if __name__ == "__main__":
    verify_holidays()
