# Admin Panel - Multi Tech Solution

Admin panel untuk mengelola paket website dengan Firebase Authentication dan Firestore Database.

## Fitur

- Login dengan Google Authentication
- CRUD paket website untuk semua layanan (Perusahaan, Kesehatan, Edukasi, E-commerce, Portfolio, Sekolah)
- Edit harga, nama paket, deskripsi, fitur, dan durasi support
- Dashboard yang responsif dengan Tailwind CSS

## Setup Firebase

1. Buat project baru di [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication**:
   - Pilih tab "Authentication"
   - Klik "Get Started"
   - Pilih "Google" sebagai sign-in provider
   - Enable Google Sign-in
3. Enable **Firestore Database**:
   - Pilih tab "Firestore Database"
   - Klik "Create Database"
   - Pilih lokasi (misal: asia-southeast1)
   - Pilih mode "Start in Test Mode" untuk development
4. Copy Firebase config dari Project Settings:
   - Klik gear icon → Project Settings
   - Scroll ke "Your apps" → Web app
   - Copy config object

## Konfigurasi Firebase

Update file `src/firebase/firebaseConfig.js` dengan config dari Firebase Console:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

## Struktur Database Firestore

Database akan otomatis dibuat dengan struktur:

```
services/
  ├── perusahaan/
  │   └── packages/
  │       ├── {packageId}
  │       │   ├── name: "Basic"
  │       │   ├── price: "Rp 1.000.000"
  │       │   ├── description: "Untuk startup kecil"
  │       │   ├── features: ["1 Halaman", "Website Dinamis", ...]
  │       │   └── support: "1 Bulan Support"
  ├── kesehatan/
  │   └── packages/
  ├── edukasi/
  │   └── packages/
  ├── ecommerce/
  │   └── packages/
  ├── portfolio/
  │   └── packages/
  └── sekolah/
      └── packages/
```

## Instalasi

1. Install dependencies:

```bash
npm install
```

2. Update Firebase config di `src/firebase/firebaseConfig.js`

3. Jalankan development server:

```bash
npm run dev
```

4. Build untuk production:

```bash
npm run build
```

## Penggunaan

1. Buka aplikasi di browser
2. Login dengan akun Google
3. Pilih layanan dari dropdown
4. Tambah, edit, atau hapus paket sesuai kebutuhan
5. Perubahan akan langsung tersimpan di Firestore

## Security Notes

- Untuk production, setup Firestore Rules untuk membatasi akses
- Hanya admin yang diizinkan mengakses panel ini
- Pastikan untuk mengubah mode Firestore dari Test Mode ke Production Mode in your project.
