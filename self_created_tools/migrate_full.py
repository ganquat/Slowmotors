import requests
from bs4 import BeautifulSoup
import os
import time
import json
from urllib.parse import urljoin, urlparse

# Use env var or default (empty for safety in repo)
STRAPI_TOKEN = os.environ.get("STRAPI_API_TOKEN", "")
STRAPI_URL = os.environ.get("STRAPI_API_URL", "https://whimsical-badge-f41b91c26a.strapiapp.com/api")

HEADERS = {
    "Authorization": f"Bearer {STRAPI_TOKEN}",
    "Content-Type": "application/json"
}

URLS = [
    # Tours
    "https://slowmoto.tours/tour-category/14-days-adventure-motorcycle-trips-kochi/",
    "https://slowmoto.tours/tour-category/6-days-adventure-motorcycle-trips-kochi/",
    "https://slowmoto.tours/tour-category/6-days-adventure-motorcycle-trips-goa/",
    "https://slowmoto.tours/tour-category/12-days-adventure-motorcycle-trips-kochi-to-goa/",
    "https://slowmoto.tours/tour-category/12-days-adventure-motorcycle-trips-goa-to-kochi/",
    "https://slowmoto.tours/custom-motorcycle-adventure-holidays/",
    # Pages
    "https://slowmoto.tours/motorcycle-rides-india/",
    "https://slowmoto.tours/motorbike-holidays-india/",
    "https://slowmoto.tours/about-us-our-philosophy/",
    "https://slowmoto.tours/slow-moto-stories/",
    "https://slowmoto.tours/terms-and-conditions-of-services/",
    "https://slowmoto.tours/terms/",
    "https://slowmoto.tours/privacy-policy/",
    "https://slowmoto.tours/imprint/"
]

def upload_image(img_url):
    print(f"   Processing image: {img_url}")
    try:
        # Generate a safe filename
        parsed = urlparse(img_url)
        filename = os.path.basename(parsed.path)
        if not filename:
            filename = f"image_{int(time.time())}.jpg"

        # Download
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Referer": "https://slowmoto.tours/",
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
        }
        r = requests.get(img_url, headers=headers, timeout=10)
        if r.status_code != 200:
            print(f"   Failed to download image: {r.status_code}")
            return img_url

        # Save temp
        with open(filename, 'wb') as f:
            f.write(r.content)

        # Determine mime type
        mime_type = r.headers.get('Content-Type', 'image/jpeg')

        # Upload
        with open(filename, 'rb') as f:
            files = {'files': (filename, f, mime_type)}
            up_headers = {"Authorization": f"Bearer {STRAPI_TOKEN}"}
            res = requests.post(f"{STRAPI_URL}/upload", headers=up_headers, files=files)

        if res.status_code in [200, 201]:
            data = res.json()
            if isinstance(data, list) and len(data) > 0:
                new_url = data[0]['url']
                print(f"   ✅ Uploaded to {new_url}")
                return new_url
        else:
            print(f"   ❌ Upload failed: {res.status_code}")

    except Exception as e:
        print(f"   Error handling image: {e}")
    finally:
        if os.path.exists(filename):
            os.remove(filename)

    return img_url # Return original if failure

def process_url(url):
    print(f"\nProcessing {url}...")
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Failed to fetch URL: {response.status_code}")
            return

        soup = BeautifulSoup(response.content, 'html.parser')

        # Determine Slug
        path = urlparse(url).path.strip('/')
        if 'tour-category' in path:
            slug = path.split('/')[-1]
            endpoint = "tours"
        else:
            slug = path.split('/')[-1]
            endpoint = "pages"

        # Extract Title
        title_tag = soup.find('h1')
        title = title_tag.get_text().strip() if title_tag else slug.replace('-', ' ').title()

        # Extract Content
        content_div = soup.find(id='content')
        if not content_div:
            content_div = soup.find(class_='elementor-section-wrap')
        if not content_div:
            content_div = soup.find('main')
        if not content_div:
            content_div = soup.body

        # Process Images in Content
        if content_div:
            for img in content_div.find_all('img'):
                src = img.get('src')
                if src:
                    if src.startswith('/'):
                        src = urljoin(url, src)
                    new_src = upload_image(src)
                    img['src'] = new_src
                    if img.has_attr('srcset'):
                        del img['srcset']

            content_html = str(content_div)
        else:
            content_html = "<p>Content migration failed.</p>"

        # Payload
        payload = {
            "data": {
                "title": title,
                "slug": slug,
                "content": content_html,
                "excerpt": f"Imported from {url}"
            }
        }

        # Check if exists (update) or create
        check_url = f"{STRAPI_URL}/{endpoint}?filters[slug][$eq]={slug}"
        check_res = requests.get(check_url, headers=HEADERS)
        existing_doc_id = None
        if check_res.status_code == 200:
            data = check_res.json().get('data', [])
            if len(data) > 0:
                existing_doc_id = data[0].get('documentId')
                if not existing_doc_id:
                     existing_doc_id = data[0].get('id')
                print(f"   Found existing entry Document ID: {existing_doc_id}")

        if existing_doc_id:
            # Update
            update_url = f"{STRAPI_URL}/{endpoint}/{existing_doc_id}"
            res = requests.put(update_url, headers=HEADERS, json=payload)
            if res.status_code == 200:
                print("   ✅ Updated successfully.")
            else:
                print(f"   ❌ Update failed: {res.status_code} {res.text}")
        else:
            # Create
            create_url = f"{STRAPI_URL}/{endpoint}"
            res = requests.post(create_url, headers=HEADERS, json=payload)
            if res.status_code in [200, 201]:
                print("   ✅ Created successfully.")
            else:
                print(f"   ❌ Creation failed: {res.status_code} {res.text}")

    except Exception as e:
        print(f"Error processing {url}: {e}")

def main():
    if not STRAPI_TOKEN:
        print("Please set STRAPI_API_TOKEN environment variable.")
        return
    for url in URLS:
        process_url(url)

if __name__ == "__main__":
    main()
