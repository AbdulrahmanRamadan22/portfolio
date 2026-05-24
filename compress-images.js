/**
 * compress-images.js
 * Converts all PNG/JPG images in the portfolio to WebP format
 * with maximum quality/size balance using sharp.
 *
 * Run: node compress-images.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// ─── Config ────────────────────────────────────────────────────────────────
const ROOT_DIR = __dirname;
const EXTENSIONS = [".png", ".jpg", ".jpeg"];

// WebP quality (1-100). 80 is a great sweet spot — visually lossless but tiny.
const WEBP_QUALITY = 80;

// Max width/height in pixels. Screens wider than this are rare for phone mockups.
// Set to null to skip resizing.
const MAX_DIMENSION = 1080;

// Set to true to DELETE the original PNG/JPG after conversion.
const DELETE_ORIGINALS = false;

// Folders to skip
const SKIP_FOLDERS = ["node_modules", ".git"];
// ───────────────────────────────────────────────────────────────────────────

let totalOriginalBytes = 0;
let totalNewBytes = 0;
let converted = 0;
let skipped = 0;

function getAllImageFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_FOLDERS.includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath));
    } else if (EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  return (bytes / 1024).toFixed(1) + " KB";
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const webpPath = filePath.replace(new RegExp(`\\${ext}$`), ".webp");

  // Skip if WebP already exists and is newer
  if (
    fs.existsSync(webpPath) &&
    fs.statSync(webpPath).mtimeMs > fs.statSync(filePath).mtimeMs
  ) {
    skipped++;
    return;
  }

  const originalSize = fs.statSync(filePath).size;
  totalOriginalBytes += originalSize;

  try {
    let pipeline = sharp(filePath);

    // Resize only if image exceeds MAX_DIMENSION
    if (MAX_DIMENSION) {
      const meta = await pipeline.metadata();
      if (meta.width > MAX_DIMENSION || meta.height > MAX_DIMENSION) {
        pipeline = pipeline.resize(MAX_DIMENSION, MAX_DIMENSION, {
          fit: "inside",
          withoutEnlargement: true,
        });
      }
    }

    await pipeline
      .webp({
        quality: WEBP_QUALITY,
        effort: 6, // 0 (fastest) – 6 (smallest file). 6 = max compression effort.
        smartSubsample: true,
        nearLossless: false,
      })
      .toFile(webpPath);

    const newSize = fs.statSync(webpPath).size;
    totalNewBytes += newSize;

    const saving = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
    const relativePath = path.relative(ROOT_DIR, filePath);

    console.log(
      `✅ ${relativePath.padEnd(55)} ${formatSize(originalSize).padStart(8)} → ${formatSize(newSize).padStart(8)}  (saved ${saving}%)`
    );

    if (DELETE_ORIGINALS) fs.unlinkSync(filePath);
    converted++;
  } catch (err) {
    console.error(`❌ Failed: ${filePath}\n   ${err.message}`);
  }
}

async function main() {
  console.log("🔍 Scanning for images...\n");
  const files = getAllImageFiles(ROOT_DIR);
  console.log(`Found ${files.length} image(s). Starting compression...\n`);
  console.log(
    "File".padEnd(55) + "  Original".padStart(10) + "  WebP".padStart(10) + "  Saved"
  );
  console.log("─".repeat(90));

  for (const file of files) {
    await compressImage(file);
  }

  console.log("\n" + "─".repeat(90));
  console.log(`\n📊 Summary:`);
  console.log(`   Converted : ${converted} file(s)`);
  console.log(`   Skipped   : ${skipped} file(s) (already up-to-date)`);
  console.log(`   Before    : ${formatSize(totalOriginalBytes)}`);
  console.log(`   After     : ${formatSize(totalNewBytes)}`);
  const totalSaving = totalOriginalBytes
    ? (((totalOriginalBytes - totalNewBytes) / totalOriginalBytes) * 100).toFixed(1)
    : 0;
  console.log(`   Saved     : ${formatSize(totalOriginalBytes - totalNewBytes)} (${totalSaving}%)`);
  console.log(
    DELETE_ORIGINALS
      ? "\n🗑️  Original files deleted."
      : "\n💡 Originals kept. Set DELETE_ORIGINALS=true to remove them after you verify."
  );
}

main();
