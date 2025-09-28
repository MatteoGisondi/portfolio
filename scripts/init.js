import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { pipeline } from "node:stream/promises";

const REMOTE_URL =
    "https://github.com/MatteoGisondi/portfolio/releases/download/latest/Matteo_Gisondi-Resume.pdf";

const PUBLIC_PATH = new URL("../public/", import.meta.url);

function resolvePath(relativePath) {
    return new URL(relativePath, import.meta.url);
}

if (!existsSync(PUBLIC_PATH)) {
    mkdirSync(PUBLIC_PATH, { recursive: true });
}

async function downloadResume() {
    const DEST_PATH = new URL(
        join(PUBLIC_PATH.pathname, "Matteo_Gisondi-Resume.pdf"),
        import.meta.url
    );

    if (existsSync(DEST_PATH)) {
        console.log(`✅ Resume already cached at ${DEST_PATH}`);
        return;
    }

    console.log(`Downloading resume from ${REMOTE_URL}…`);
    const res = await fetch(REMOTE_URL);
    if (!res.ok) throw new Error(`Failed: ${res.status} ${res.statusText}`);

    await pipeline(res.body, createWriteStream(DEST_PATH));
    console.log(`✅ Saved to ${DEST_PATH}`);
}

async function main() {
    try {
        await downloadResume();
        console.log("🚀 All init steps completed.");
    } catch (e) {
        console.error("❌ Init failed:", e);
        process.exit(1);
    }
}

if (import.meta.main) {
    await main();
}
