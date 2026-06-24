/**
 * Script untuk mengganti hardcoded pricing section di semua sub-pages
 * dengan komponen PricingSection yang fetch dari Firestore.
 *
 * Jalankan: node scripts/updateSubPages.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, "../../frontend/src/pages");

// Mapping: file path → { serviceId, title, subtitle, unit }
const PAGES = {
  // ── Website ───────────────────────────────────────────────────────────────
  "website/Perusahaan.jsx": {
    serviceId: "website-perusahaan",
    title: "Paket Harga Website Perusahaan",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan perusahaan Anda",
    unit: "/project",
  },
  "website/Ecommerce.jsx": {
    serviceId: "website-ecommerce",
    title: "Paket Harga Website E-commerce",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan bisnis e-commerce Anda",
    unit: "/project",
  },
  "website/Edukasi.jsx": {
    serviceId: "website-edukasi",
    title: "Paket Harga Website Edukasi",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan institusi pendidikan Anda",
    unit: "/project",
  },
  "website/Kesehatan.jsx": {
    serviceId: "website-kesehatan",
    title: "Paket Harga Website Kesehatan",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan layanan kesehatan Anda",
    unit: "/project",
  },
  "website/Portfolio.jsx": {
    serviceId: "website-portfolio",
    title: "Paket Harga Website Portfolio",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan portfolio Anda",
    unit: "/project",
  },
  "website/Sekolah.jsx": {
    serviceId: "website-sekolah",
    title: "Paket Harga Website Sekolah",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan institusi pendidikan Anda",
    unit: "/project",
  },
  // ── Aplikasi ─────────────────────────────────────────────────────────────
  "aplikasi/Ecommerce.jsx": {
    serviceId: "aplikasi-ecommerce",
    title: "Paket Harga Aplikasi E-commerce",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan bisnis e-commerce Anda",
    unit: "/project",
  },
  "aplikasi/Edukasi.jsx": {
    serviceId: "aplikasi-edukasi",
    title: "Paket Harga Aplikasi Edukasi",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan platform edukasi Anda",
    unit: "/project",
  },
  "aplikasi/Game.jsx": {
    serviceId: "aplikasi-game",
    title: "Paket Harga Aplikasi Game",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan game Anda",
    unit: "/project",
  },
  "aplikasi/Kesehatan.jsx": {
    serviceId: "aplikasi-kesehatan",
    title: "Paket Harga Aplikasi Kesehatan",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan layanan kesehatan Anda",
    unit: "/project",
  },
  "aplikasi/Perusahaan.jsx": {
    serviceId: "aplikasi-perusahaan",
    title: "Paket Harga Aplikasi Perusahaan",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan perusahaan Anda",
    unit: "/project",
  },
  "aplikasi/Sosial.jsx": {
    serviceId: "aplikasi-sosial",
    title: "Paket Harga Aplikasi Sosial",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan platform sosial Anda",
    unit: "/project",
  },
  // ── Desain Grafis ─────────────────────────────────────────────────────────
  "desain-grafis/Branding.jsx": {
    serviceId: "desain-branding",
    title: "Paket Harga Desain Branding",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan branding Anda",
    unit: "/item",
  },
  "desain-grafis/Logo.jsx": {
    serviceId: "desain-logo",
    title: "Paket Harga Desain Logo",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan logo Anda",
    unit: "/item",
  },
  "desain-grafis/Marketing.jsx": {
    serviceId: "desain-marketing",
    title: "Paket Harga Desain Marketing",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan marketing Anda",
    unit: "/item",
  },
  "desain-grafis/Pendidikan.jsx": {
    serviceId: "desain-pendidikan",
    title: "Paket Harga Desain Pendidikan",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan materi pendidikan Anda",
    unit: "/item",
  },
  "desain-grafis/Social-media.jsx": {
    serviceId: "desain-social-media",
    title: "Paket Harga Desain Social Media",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan konten sosial media Anda",
    unit: "/bulan",
  },
  "desain-grafis/Uiux.jsx": {
    serviceId: "desain-uiux",
    title: "Paket Harga Desain UI/UX",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan desain UI/UX Anda",
    unit: "/project",
  },
  // ── Videografi ────────────────────────────────────────────────────────────
  "videografi/Acara.jsx": {
    serviceId: "videografi-acara",
    title: "Paket Harga Videografi Acara",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan dokumentasi acara Anda",
    unit: "/video",
  },
  "videografi/Edukasi.jsx": {
    serviceId: "videografi-edukasi",
    title: "Paket Harga Video Edukasi",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan konten edukasi Anda",
    unit: "/video",
  },
  "videografi/Kesehatan.jsx": {
    serviceId: "videografi-kesehatan",
    title: "Paket Harga Video Kesehatan",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan konten kesehatan Anda",
    unit: "/video",
  },
  "videografi/Komersial.jsx": {
    serviceId: "videografi-komersial",
    title: "Paket Harga Video Komersial",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan iklan dan promosi Anda",
    unit: "/video",
  },
  "videografi/Konten-sosial.jsx": {
    serviceId: "videografi-konten-sosial",
    title: "Paket Harga Konten Social Media",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan konten sosial media Anda",
    unit: "/video",
  },
  "videografi/Musik.jsx": {
    serviceId: "videografi-musik",
    title: "Paket Harga Video Musik",
    subtitle: "Pilih paket yang sesuai dengan kebutuhan video musik Anda",
    unit: "/video",
  },
};

// Regex to match the entire Pricing section (from {/* Pricing Section */} to end of that section)
const PRICING_SECTION_REGEX =
  /\{\/\* Pricing Section \*\/\}[\s\S]*?\{\/\* CTA Section \*\/\}/;

let updated = 0;
let skipped = 0;

for (const [relPath, config] of Object.entries(PAGES)) {
  const filePath = path.join(pagesDir, relPath);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  File not found: ${relPath}`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");

  // 1. Add PricingSection import if not present
  if (!content.includes("PricingSection")) {
    content = content.replace(
      /import Navbar from ["']\.\.\/\.\.\/components\/Navbar["'];/,
      `import Navbar from "../../components/Navbar";\nimport PricingSection from "../../components/PricingSection";`
    );
  }

  // 2. Replace the Pricing section JSX block with the component
  const pricingReplacement = `{/* Pricing Section */}
      <PricingSection
        serviceId="${config.serviceId}"
        title="${config.title}"
        subtitle="${config.subtitle}"
        unit="${config.unit}"
      />

      {/* CTA Section */}`;

  const newContent = content.replace(PRICING_SECTION_REGEX, pricingReplacement);

  if (newContent === content) {
    console.warn(`⚠️  Pattern not matched in: ${relPath}`);
    skipped++;
    continue;
  }

  fs.writeFileSync(filePath, newContent, "utf8");
  console.log(`✅ Updated: ${relPath}`);
  updated++;
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
