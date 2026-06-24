import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

let serviceAccount;
try {
  serviceAccount = require("./serviceAccountKey.json");
} catch {
  console.error(
    "ERROR: serviceAccountKey.json not found.\n" +
      "Place it at: admin/scripts/serviceAccountKey.json"
  );
  process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount),
  projectId: "utama-24162",
});

const db = getFirestore();

// ─────────────────────────────────────────────────────────────────────────────
// Paket utama — disesuaikan dengan gambar di 4 halaman:
//   Website     → services/website-umum/packages
//   Aplikasi    → services/aplikasi-umum/packages
//   Desain Graf → services/desain-umum/packages
//   Videografi  → services/videografi-umum/packages
// ─────────────────────────────────────────────────────────────────────────────
const mainPackages = {

  // Website.jsx (services/website-umum/packages)
  "website-umum": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk website sederhana",
      features: [
        "1 Halaman",
        "Desain Responsif",
        "SEO Basic",
        "Website Static",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 5.000.000",
      description: "Untuk bisnis berkembang",
      features: [
        "5 Halaman",
        "Desain Kustom",
        "SEO Advanced",
        "CMS Admin Panel",
      ],
      support: "3 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 15.000.000",
      description: "Untuk bisnis besar",
      features: [
        "15 Halaman",
        "Desain Premium",
        "SEO & Analytics",
        "CMS Admin Panel",
      ],
      support: "5 Bulan Support",
    },
  ],

  // Aplikasi.jsx (services/aplikasi-umum/packages)
  "aplikasi-umum": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 5.000.000",
      description: "Untuk aplikasi sederhana",
      features: [
        "Single Platform (Android/iOS)",
        "UI/UX Basic",
        "5 Screens",
        "Local Storage",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 15.000.000",
      description: "Untuk bisnis berkembang",
      features: [
        "Cross-platform (Android + iOS)",
        "UI/UX Kustom",
        "15 Screens",
        "Database Integration",
      ],
      support: "3 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 30.000.000",
      description: "Untuk bisnis besar",
      features: [
        "Multi-platform + Web",
        "UI/UX Premium",
        "Unlimited Screens",
        "Advanced Features",
      ],
      support: "6 Bulan Support",
    },
  ],

  // DesainGrafis.jsx (services/desain-umum/packages)
  "desain-umum": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 500.000",
      description: "Untuk kebutuhan sederhana",
      features: [
        "2 Konsep Desain",
        "3 Revisi",
        "File JPG/PNG",
        "1 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 1.500.000",
      description: "Untuk bisnis berkembang",
      features: [
        "5 Konsep Desain",
        "Unlimited Revisi",
        "File Source (AI/PSD)",
        "3 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 3.500.000",
      description: "Untuk bisnis besar",
      features: [
        "Unlimited Konsep",
        "Unlimited Revisi",
        "File Source + Vector",
        "7 Hari Pengerjaan",
      ],
      support: "",
    },
  ],

  // Videografi.jsx (services/videografi-umum/packages)
  "videografi-umum": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 2.000.000",
      description: "Untuk video sederhana",
      features: [
        "1-2 Menit Durasi",
        "1080p Resolution",
        "Basic Editing",
        "Background Music",
        "2 Revisi",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 5.000.000",
      description: "Untuk bisnis berkembang",
      features: [
        "3-5 Menit Durasi",
        "4K Resolution",
        "Advanced Editing",
        "Color Grading",
        "3 Revisi",
      ],
      support: "",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 10.000.000",
      description: "Untuk bisnis besar",
      features: [
        "Unlimited Durasi",
        "4K + Drone Footage",
        "Cinematic Editing",
        "Custom Animation",
        "Unlimited Revisi",
      ],
      support: "",
    },
  ],
};

async function importMainPackages() {
  try {
    for (const [service, packages] of Object.entries(mainPackages)) {
      console.log(`\nImporting packages for ${service}...`);

      for (const pkg of packages) {
        const ref = db
          .collection("services")
          .doc(service)
          .collection("packages")
          .doc(pkg.id);

        await ref.set({
          name: pkg.name,
          price: pkg.price,
          description: pkg.description,
          features: pkg.features,
          support: pkg.support,
        });

        console.log(`  ✓ ${pkg.name} (${pkg.id})`);
      }

      console.log(`✅ ${service} — selesai`);
    }

    console.log("\n🎉 Semua paket utama berhasil diimport!");
    process.exit(0);
  } catch (error) {
    console.error("Error importing packages:", error);
    process.exit(1);
  }
}

importMainPackages();
