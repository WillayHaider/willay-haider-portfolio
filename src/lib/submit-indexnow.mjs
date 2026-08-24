// Script to ping Bing and IndexNow API with all live URLs
const KEY = "c4b123984e784532b21c487192a5d41f";
const HOST = "willayhaider.pro";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/gallery`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/how-to-handle-gatekeepers-in-2026`,
  `https://${HOST}/blog/how-b2b-cold-calling-actually-works`,
  `https://${HOST}/blog/top-7-appointment-setting-frameworks-to-double-sales-pipeline`,
  `https://${HOST}/blog/hubspot-workflows-for-outbound-sales-setup-guide`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/terms-and-conditions`,
  `https://${HOST}/terms`
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    console.log("IndexNow submission response code:", res.status);
    if (res.status === 200 || res.status === 202) {
      console.log("✅ Successfully submitted all URLs to IndexNow (Bing & Copilot)!");
    } else {
      const text = await res.text();
      console.log("IndexNow response body:", text);
    }
  } catch (err) {
    console.error("IndexNow submission error:", err);
  }
}

submitIndexNow();
