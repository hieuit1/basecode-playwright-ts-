require("dotenv").config();

async function testKey() {
    const apiKey = process.env.PAGESPEED_API_KEY;
    if (!apiKey) {
        console.error("❌ Không tìm thấy PAGESPEED_API_KEY trong .env");
        return;
    }

    console.log("🔑 Đang test key:", apiKey.slice(0, 6) + "..." + apiKey.slice(-4));

    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&key=${apiKey}&strategy=mobile&category=performance`;

    try {
        const res = await fetch(url);
        console.log("📡 HTTP Status:", res.status);

        if (!res.ok) {
            const body = await res.text();
            console.error("❌ Lỗi:", body);
            return;
        }

        const data = await res.json();
        const score = data.lighthouseResult?.categories?.performance?.score;
        console.log("✅ Key hoạt động tốt! Performance score:", score != null ? Math.round(score * 100) : "N/A");
    } catch (err) {
        console.error("❌ Exception:", err.message);
    }
}

testKey();