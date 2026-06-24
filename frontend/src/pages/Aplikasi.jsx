import { useState, useEffect } from "react";
import { Smartphone, CheckCircle, ArrowRight, ShoppingBag, Heart, GraduationCap, Building, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function Aplikasi() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'services', 'aplikasi-umum', 'packages'));
        const packagesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPackages(packagesData);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="/aplikasi" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Pengembangan Aplikasi
                <span className="text-primary-600"> Modern</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Kami membangun aplikasi mobile dan web kustom yang disesuaikan dengan
                kebutuhan bisnis Anda untuk meningkatkan produktivitas dan engagement.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                Mulai Proyek
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl flex items-center justify-center">
                <Smartphone className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Fitur Aplikasi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-platform</h3>
              <p className="text-gray-600">
                Aplikasi yang berjalan di iOS, Android, dan web secara bersamaan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User-friendly</h3>
              <p className="text-gray-600">
                Antarmuka yang intuitif dan mudah digunakan untuk semua pengguna.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skalabel</h3>
              <p className="text-gray-600">
                Arsitektur yang dapat berkembang seiring dengan pertumbuhan bisnis Anda.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aman</h3>
              <p className="text-gray-600">
                Keamanan tingkat tinggi untuk melindungi data pengguna dan bisnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Create Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Jenis Aplikasi yang Kami Buat
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Klik pada jenis aplikasi untuk melihat contoh hasil dan paket harga yang tersedia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/aplikasi/ecommerce" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <ShoppingBag className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aplikasi E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Aplikasi toko online dengan fitur pembayaran dan manajemen produk
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/aplikasi/kesehatan" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aplikasi Kesehatan</h3>
              <p className="text-gray-600 mb-4">
                Aplikasi medis untuk booking, telemedicine, dan manajemen kesehatan
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/aplikasi/edukasi" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <GraduationCap className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aplikasi Edukasi</h3>
              <p className="text-gray-600 mb-4">
                Platform pembelajaran online dengan fitur kuis dan materi interaktif
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/aplikasi/perusahaan" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Building className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aplikasi Perusahaan</h3>
              <p className="text-gray-600 mb-4">
                Sistem manajemen bisnis dan produktivitas untuk perusahaan
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/aplikasi/game" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Gamepad2 className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aplikasi Game</h3>
              <p className="text-gray-600 mb-4">
                Game mobile dan web dengan grafis menarik dan gameplay seru
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/aplikasi/sosial" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Smartphone className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aplikasi Sosial</h3>
              <p className="text-gray-600 mb-4">
                Platform social media dan komunitas dengan fitur interaktif
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Paket Harga Aplikasi
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={pkg.id} className={`${index === 1 ? 'bg-primary-600 p-8 rounded-2xl shadow-xl border-2 border-primary-500 relative' : 'bg-white p-8 rounded-2xl shadow-lg border border-gray-200'}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    POPULER
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                <p className={`${index === 1 ? 'text-primary-100' : 'text-gray-600'} mb-6`}>{pkg.description}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${index === 1 ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</span>
                  <span className={index === 1 ? 'text-primary-100' : 'text-gray-600'}>/project</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className={index === 1 ? 'text-yellow-400' : 'text-green-500'} mr-2 mt-1 size={16} />
                      <span className={index === 1 ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                  {pkg.support && (
                    <li className="flex items-start">
                      <CheckCircle className={index === 1 ? 'text-yellow-400' : 'text-green-500'} mr-2 mt-1 size={16} />
                      <span className={index === 1 ? 'text-white' : 'text-gray-700'}>{pkg.support}</span>
                    </li>
                  )}
                </ul>
                <Link to="/#contact" className={`block text-center px-6 py-3 font-semibold rounded-lg hover:transition ${index === 1 ? 'bg-white text-primary-700 hover:bg-gray-100' : 'bg-primary-600 text-white hover:bg-primary-700'}`}>
                  Pilih Paket
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Membangun Aplikasi Kustom?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Hubungi Kami
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Aplikasi;
