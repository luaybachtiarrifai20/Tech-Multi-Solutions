import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Option 1: Use a service account JSON file (recommended)
// Download it from Firebase Console > Project Settings > Service Accounts > Generate new private key
// Then place it at: admin/scripts/serviceAccountKey.json
let serviceAccount;
try {
  serviceAccount = require("./serviceAccountKey.json");
} catch {
  console.error(
    "ERROR: serviceAccountKey.json not found.\n" +
    "Please download your service account key from:\n" +
    "Firebase Console > Project Settings > Service Accounts > Generate new private key\n" +
    "And save it as: admin/scripts/serviceAccountKey.json"
  );
  process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount),
  projectId: "utama-24162",
});

const db = getFirestore();
const { doc, setDoc } = {
  doc: (db, ...pathSegments) => {
    let ref = db;
    // pathSegments alternates: collection, doc, collection, doc...
    for (let i = 0; i < pathSegments.length; i += 2) {
      ref = ref.collection(pathSegments[i]).doc(pathSegments[i + 1]);
    }
    return ref;
  },
  setDoc: (ref, data) => ref.set(data),
};

const packagesData = {
  "website-perusahaan": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk startup kecil",
      features: [
        "1 Halaman",
        "Website Dinamis",
        "Profil Perusahaan",
        "Responsive Design",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 3.000.000",
      description: "Untuk perusahaan menengah",
      features: [
        "3 Halaman",
        "Team & Portfolio",
        "CMS Admin Panel",
        "Responsive Design",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 15.000.000",
      description: "Untuk perusahaan besar",
      features: [
        "15 Halaman",
        "Portal Karir",
        "CMS Admin Panel",
        "SEO Optimized",
      ],
      support: "5 Bulan Support",
    },
  ],
  "website-kesehatan": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk klinik kecil",
      features: [
        "1 Halaman",
        "Website Dinamis",
        "Profil Dokter",
        "Responsive Design",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 3.000.000",
      description: "Untuk klinik menengah",
      features: [
        "3 Halaman",
        "Booking Janji Temu",
        "CMS Admin Panel",
        "Responsive Design",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 15.000.000",
      description: "Untuk rumah sakit besar",
      features: [
        "15 Halaman",
        "Manajemen Pasien",
        "CMS Admin Panel",
        "SEO Optimized",
      ],
      support: "5 Bulan Support",
    },
  ],
  "website-edukasi": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk tutor individu",
      features: [
        "1 Halaman",
        "Website Dinamis",
        "Video Learning",
        "Responsive Design",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 3.000.000",
      description: "Untuk lembaga kecil",
      features: [
        "3 Halaman",
        "Sistem Kuis",
        "CMS Admin Panel",
        "Responsive Design",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 15.000.000",
      description: "Untuk universitas besar",
      features: [
        "15 Halaman",
        "Forum Diskusi",
        "CMS Admin Panel",
        "SEO Optimized",
      ],
      support: "5 Bulan Support",
    },
  ],
  "website-ecommerce": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk toko kecil",
      features: [
        "1 Halaman",
        "Website Dinamis",
        "Sistem Pembayaran",
        "Responsive Design",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 3.000.000",
      description: "Untuk toko menengah",
      features: [
        "3 Halaman",
        "Manajemen Produk",
        "CMS Admin Panel",
        "Responsive Design",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 15.000.000",
      description: "Untuk marketplace besar",
      features: [
        "15 Halaman",
        "Multi Payment Gateway",
        "CMS Admin Panel",
        "SEO Optimized",
      ],
      support: "3 Bulan Support",
    },
  ],
  "website-portfolio": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk portfolio sederhana",
      features: [
        "1 Halaman",
        "Website Dinamis",
        "Galeri Karya",
        "Responsive Design",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 3.000.000",
      description: "Untuk profesional",
      features: [
        "3 Halaman",
        "Timeline Karir",
        "CMS Admin Panel",
        "Responsive Design",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 5.000.000",
      description: "Untuk senior profesional",
      features: [
        "10 Halaman",
        "Blog Personal",
        "CMS Admin Panel",
        "SEO Optimized",
      ],
      support: "3 Bulan Support",
    },
  ],
  "website-sekolah": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk sekolah kecil",
      features: [
        "1 Halaman",
        "Website Dinamis",
        "Berita & Pengumuman",
        "Responsive Design",
      ],
      support: "1 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 3.000.000",
      description: "Untuk sekolah menengah",
      features: [
        "3 Halaman",
        "Pendaftaran Online",
        "CMS Admin Panel",
        "Responsive Design",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 25.000.000",
      description: "Untuk sekolah besar/universitas",
      features: [
        "Halaman Unlimited",
        "Sistem Akademik Lengkap",
        "E-learning Integration",
        "Mobile App",
      ],
      support: "5 Bulan Support",
    },
  ],
  "aplikasi-ecommerce": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 10.000.000",
      description: "Untuk toko kecil",
      features: [
        "Single Platform (Android)",
        "10 Screens",
        "Basic Payment",
        "Local Storage",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 25.000.000",
      description: "Untuk toko menengah",
      features: [
        "Cross-platform (Android + iOS)",
        "20 Screens",
        "Multi Payment Gateway",
        "Database Integration",
      ],
      support: "6 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 50.000.000",
      description: "Untuk marketplace besar",
      features: [
        "Multi-platform + Web",
        "Unlimited Screens",
        "Advanced Features",
        "AI Recommendations",
      ],
      support: "12 Bulan Support",
    },
  ],
  "aplikasi-edukasi": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 8.000.000",
      description: "Untuk tutor individu",
      features: [
        "Single Platform (Android)",
        "10 Screens",
        "Video Learning",
        "Local Storage",
      ],
      support: "2 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 20.000.000",
      description: "Untuk lembaga kecil",
      features: [
        "Cross-platform (Android + iOS)",
        "20 Screens",
        "Forum & Kuis",
        "Database Integration",
      ],
      support: "6 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 40.000.000",
      description: "Untuk universitas besar",
      features: [
        "Multi-platform + Web",
        "Unlimited Screens",
        "Live Classes",
        "AI Learning",
      ],
      support: "12 Bulan Support",
    },
  ],
  "aplikasi-game": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 15.000.000",
      description: "Untuk game sederhana",
      features: [
        "Single Platform (Android)",
        "10 Levels",
        "Basic Graphics",
        "Local Storage",
      ],
      support: "3 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 40.000.000",
      description: "Untuk game menengah",
      features: [
        "Cross-platform (Android + iOS)",
        "Unlimited Levels",
        "Multiplayer & Leaderboard",
        "Database Integration",
      ],
      support: "6 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 80.000.000",
      description: "Untuk game AAA",
      features: [
        "Multi-platform + Web + Console",
        "3D Graphics & Physics",
        "Advanced Multiplayer",
        "AI & Machine Learning",
      ],
      support: "12 Bulan Support",
    },
  ],
  "aplikasi-kesehatan": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 12.000.000",
      description: "Untuk klinik kecil",
      features: [
        "Single Platform (Android)",
        "10 Screens",
        "Booking Basic",
        "Local Storage",
      ],
      support: "3 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 30.000.000",
      description: "Untuk klinik menengah",
      features: [
        "Cross-platform (Android + iOS)",
        "20 Screens",
        "Telemedicine",
        "Database Integration",
      ],
      support: "6 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 60.000.000",
      description: "Untuk rumah sakit besar",
      features: [
        "Multi-platform + Web",
        "Unlimited Screens",
        "EMR Integration",
        "AI Diagnostics",
      ],
      support: "12 Bulan Support",
    },
  ],
  "aplikasi-perusahaan": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 10.000.000",
      description: "Untuk startup kecil",
      features: [
        "Single Platform (Android)",
        "10 Screens",
        "Manajemen Karyawan",
        "Local Storage",
      ],
      support: "3 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 25.000.000",
      description: "Untuk perusahaan menengah",
      features: [
        "Cross-platform (Android + iOS)",
        "20 Screens",
        "Manajemen Proyek",
        "Database Integration",
      ],
      support: "6 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 50.000.000",
      description: "Untuk perusahaan besar",
      features: [
        "Multi-platform + Web",
        "Unlimited Screens",
        "ERP Integration",
        "Advanced Analytics",
      ],
      support: "12 Bulan Support",
    },
  ],
  "aplikasi-sosial": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 12.000.000",
      description: "Untuk komunitas kecil",
      features: [
        "Single Platform (Android)",
        "10 Screens",
        "Chat Basic",
        "Local Storage",
      ],
      support: "3 Bulan Support",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 30.000.000",
      description: "Untuk komunitas menengah",
      features: [
        "Cross-platform (Android + iOS)",
        "20 Screens",
        "Stories & Groups",
        "Database Integration",
      ],
      support: "6 Bulan Support",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Rp 60.000.000",
      description: "Untuk platform besar",
      features: [
        "Multi-platform + Web",
        "Unlimited Screens",
        "Live Streaming",
        "AI Content Moderation",
      ],
      support: "12 Bulan Support",
    },
  ],
  "desain-branding": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 2.000.000",
      description: "Untuk startup kecil",
      features: [
        "Logo + 2 Variasi",
        "Color Palette",
        "3 Revisi",
        "5 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 5.000.000",
      description: "Untuk bisnis berkembang",
      features: [
        "Full Logo Suite",
        "Typography & Guidelines",
        "Stationery Design",
        "Unlimited Revisi",
        "10 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 12.000.000",
      description: "Untuk brand besar",
      features: [
        "Complete Brand System",
        "Social Media Kit",
        "Marketing Templates",
        "Brand Book",
        "14 Hari Pengerjaan",
      ],
      support: "",
    },
  ],
  "desain-logo": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 800.000",
      description: "Untuk startup kecil",
      features: [
        "2 Konsep Desain",
        "3 Revisi",
        "File PNG/JPG",
        "2 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 2.000.000",
      description: "Untuk bisnis berkembang",
      features: [
        "5 Konsep Desain",
        "Unlimited Revisi",
        "File Source (AI/PSD)",
        "5 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 5.000.000",
      description: "Untuk brand besar",
      features: [
        "Unlimited Konsep",
        "Unlimited Revisi",
        "File Source + Vector",
        "Brand Guidelines",
        "7 Hari Pengerjaan",
      ],
      support: "",
    },
  ],
  "desain-marketing": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 1.000.000",
      description: "Untuk kampanye kecil",
      features: [
        "5 Social Media Posts",
        "2 Banner Ads",
        "2 Revisi",
        "3 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 3.000.000",
      description: "Untuk kampanye menengah",
      features: [
        "15 Social Media Posts",
        "5 Banner Ads + Brochure",
        "Email Template",
        "5 Revisi",
        "7 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 8.000.000",
      description: "Untuk kampanye besar",
      features: [
        "Unlimited Social Media Posts",
        "Complete Ad Suite",
        "Landing Page Design",
        "Unlimited Revisi",
        "14 Hari Pengerjaan",
      ],
      support: "",
    },
  ],
  "desain-pendidikan": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 500.000",
      description: "Untuk materi sederhana",
      features: [
        "5 Slides/Modules",
        "Basic Design",
        "2 Revisi",
        "2 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 2.000.000",
      description: "Untuk kursus lengkap",
      features: [
        "20 Slides/Modules",
        "Interactive Elements",
        "Infographics Included",
        "5 Revisi",
        "5 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 5.000.000",
      description: "Untuk kurikulum lengkap",
      features: [
        "Unlimited Slides/Modules",
        "Complete Course Design",
        "Video Graphics",
        "Unlimited Revisi",
        "10 Hari Pengerjaan",
      ],
      support: "",
    },
  ],
  "desain-social-media": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 500.000",
      description: "Untuk postingan harian",
      features: ["10 Posts/bulan", "1 Platform", "Basic Design", "2 Revisi"],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 1.500.000",
      description: "Untuk bisnis aktif",
      features: [
        "30 Posts/bulan",
        "3 Platforms",
        "Stories & Reels",
        "Unlimited Revisi",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 4.000.000",
      description: "Untuk brand besar",
      features: [
        "Unlimited Posts",
        "All Platforms",
        "Video Editing",
        "Content Strategy",
        "Unlimited Revisi",
      ],
      support: "",
    },
  ],
  "desain-uiux": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 3.000.000",
      description: "Untuk aplikasi sederhana",
      features: ["Wireframe", "2 Revisi", "Figma File", "3 Hari Pengerjaan"],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 8.000.000",
      description: "Untuk aplikasi menengah",
      features: [
        "High-fidelity Design",
        "Interactive Prototype",
        "Design System",
        "5 Revisi",
        "7 Hari Pengerjaan",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 15.000.000",
      description: "Untuk aplikasi kompleks",
      features: [
        "Complete UX Research",
        "User Testing",
        "Animation Design",
        "Unlimited Revisi",
        "14 Hari Pengerjaan",
      ],
      support: "",
    },
  ],
  "videografi-acara": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 3.000.000",
      description: "Untuk acara kecil",
      features: [
        "4 Jam Coverage",
        "1 Camera",
        "Basic Editing",
        "1080p Resolution",
        "5 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 8.000.000",
      description: "Untuk acara menengah",
      features: [
        "8 Jam Coverage",
        "2 Cameras",
        "Drone Footage",
        "4K Resolution",
        "14 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 20.000.000",
      description: "Untuk acara besar",
      features: [
        "Full Day Coverage",
        "Multi-camera + Drone",
        "Cinematic Editing",
        "Highlight Reel + Full Video",
        "21 Hari Delivery",
      ],
      support: "",
    },
  ],
  "videografi-edukasi": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 2.000.000",
      description: "Untuk tutorial sederhana",
      features: [
        "5-10 Menit Durasi",
        "Screen Recording",
        "Basic Editing",
        "1080p Resolution",
        "5 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 8.000.000",
      description: "Untuk kursus lengkap",
      features: [
        "15-30 Menit Durasi",
        "Studio Recording",
        "Animated Graphics",
        "4K Resolution",
        "10 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 20.000.000",
      description: "Untuk kurikulum lengkap",
      features: [
        "Unlimited Durasi",
        "Full Production + Talent",
        "Interactive Elements",
        "Multi-language Support",
        "14 Hari Delivery",
      ],
      support: "",
    },
  ],
  "videografi-kesehatan": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 3.000.000",
      description: "Untuk klinik kecil",
      features: [
        "3-5 Menit Durasi",
        "Basic Recording",
        "Basic Editing",
        "1080p Resolution",
        "5 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 10.000.000",
      description: "Untuk klinik menengah",
      features: [
        "10-15 Menit Durasi",
        "Studio Recording",
        "Animated Graphics",
        "4K Resolution",
        "10 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 25.000.000",
      description: "Untuk rumah sakit besar",
      features: [
        "Unlimited Durasi",
        "Full Production + Talent",
        "3D Animation",
        "Multi-language Support",
        "14 Hari Delivery",
      ],
      support: "",
    },
  ],
  "videografi-komersial": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 5.000.000",
      description: "Untuk iklan sederhana",
      features: [
        "30 Detik Durasi",
        "Basic Script",
        "Stock Footage",
        "1080p Resolution",
        "7 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 15.000.000",
      description: "Untuk iklan menengah",
      features: [
        "60 Detik Durasi",
        "Custom Script + Concept",
        "Original Footage",
        "4K Resolution",
        "14 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 35.000.000",
      description: "Untuk iklan TV/besar",
      features: [
        "2-3 Menit Durasi",
        "Full Production + Talent",
        "Cinematic Quality",
        "Motion Graphics + VFX",
        "21 Hari Delivery",
      ],
      support: "",
    },
  ],
  "videografi-konten-sosial": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 500.000",
      description: "Untuk personal account",
      features: [
        "15-30 Detik Durasi",
        "Basic Editing",
        "1 Platform",
        "1080p Resolution",
        "2 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 2.000.000",
      description: "Untuk brand aktif",
      features: [
        "30-60 Detik Durasi",
        "Advanced Editing + Effects",
        "All Platforms",
        "4K Resolution",
        "3 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 5.000.000",
      description: "Untuk brand besar",
      features: [
        "Unlimited Durasi",
        "Custom Concept + Production",
        "VFX & Animation",
        "Strategy & Analytics",
        "5 Hari Delivery",
      ],
      support: "",
    },
  ],
  "videografi-musik": [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 5.000.000",
      description: "Untuk indie artist",
      features: [
        "3-4 Menit Durasi",
        "Single Location",
        "Basic Editing",
        "1080p Resolution",
        "7 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "professional",
      name: "Professional",
      price: "Rp 15.000.000",
      description: "Untuk band menengah",
      features: [
        "4-5 Menit Durasi",
        "Multiple Locations",
        "VFX & Color Grading",
        "4K Resolution",
        "14 Hari Delivery",
      ],
      support: "",
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 40.000.000",
      description: "Untuk artis besar",
      features: [
        "Unlimited Durasi",
        "Full Production + Crew",
        "Cinematic Quality",
        "Advanced VFX",
        "21 Hari Delivery",
      ],
      support: "",
    },
  ],
};

async function importPackages() {
  try {
    for (const [service, packages] of Object.entries(packagesData)) {
      console.log(`Importing packages for ${service}...`);

      for (const pkg of packages) {
        const packageRef = doc(db, "services", service, "packages", pkg.id);
        await setDoc(packageRef, {
          name: pkg.name,
          price: pkg.price,
          description: pkg.description,
          features: pkg.features,
          support: pkg.support,
        });
        console.log(`  - Imported ${pkg.name} (${pkg.id})`);
      }

      console.log(`✓ ${service} packages imported successfully\n`);
    }

    console.log("All packages imported successfully!");
  } catch (error) {
    console.error("Error importing packages:", error);
  }
}

importPackages();
