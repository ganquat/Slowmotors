from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 1920, "height": 3000})
        page.goto("http://localhost:3000")
        page.screenshot(path="verification_2.png", full_page=True)
        browser.close()
        print("Screenshot saved to verification_2.png")

if __name__ == "__main__":
    run()
