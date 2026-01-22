from playwright.sync_api import sync_playwright

def verify_landing_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the landing page
        try:
            page.goto("http://localhost:3000", timeout=30000)

            # Wait for main content to be visible
            page.wait_for_selector("text=time to explore", timeout=10000)

            # Take a screenshot
            page.screenshot(path="verification/landing_page.png", full_page=True)
            print("Screenshot taken successfully")

        except Exception as e:
            print(f"Verification failed: {e}")
            # Try taking screenshot anyway to see what's wrong
            page.screenshot(path="verification/error_state.png")

        finally:
            browser.close()

if __name__ == "__main__":
    verify_landing_page()
