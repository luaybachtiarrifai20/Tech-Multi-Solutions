import { Globe, CheckCircle, ArrowRight, Building, GraduationCap, ShoppingBag, Briefcase, Heart, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Website() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="/website" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Pengembangan Website
                <span className="text-primary-600"> Profesional</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Kami menciptakan website modern, responsif, dan berkinerja tinggi yang
                membantu bisnis Anda tumbuh di era digital.
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
                <Globe className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Fitur Website Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Desain Responsif</h3>
              <p className="text-gray-600">
                Website yang menyesuaikan dengan semua ukuran layar secara sempurna.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Optimasi</h3>
              <p className="text-gray-600">
                Struktur website yang dioptimalkan untuk mesin pencari.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performa Cepat</h3>
              <p className="text-gray-600">
                Loading time yang cepat untuk pengalaman pengguna yang lebih baik.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solusi Kustom</h3>
              <p className="text-gray-600">
                Website yang disesuaikan sepenuhnya dengan kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Create Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Jenis Website yang Kami Buat
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Klik pada jenis website untuk melihat contoh hasil dan paket harga yang tersedia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/website/sekolah" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <GraduationCap className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Sekolah</h3>
              <p className="text-gray-600 mb-4">
                Website profesional untuk institusi pendidikan dengan fitur lengkap
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/website/perusahaan" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Building className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Perusahaan</h3>
              <p className="text-gray-600 mb-4">
                Website korporat untuk meningkatkan citra dan profesionalisme bisnis
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/website/edukasi" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Briefcase className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Edukasi</h3>
              <p className="text-gray-600 mb-4">
                Platform pembelajaran online dengan fitur interaktif dan modern
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/website/ecommerce" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <ShoppingBag className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Toko online dengan sistem pembayaran dan manajemen produk lengkap
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/website/kesehatan" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Kesehatan</h3>
              <p className="text-gray-600 mb-4">
                Website untuk rumah sakit, klinik, dan layanan kesehatan lainnya
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Lihat Contoh
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
            <Link to="/website/portfolio" className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                <Smartphone className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Portfolio</h3>
              <p className="text-gray-600 mb-4">
                Website personal untuk memamerkan karya dan keahlian Anda
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
            Paket Harga Website
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Untuk website sederhana</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Rp 1.000.000</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">1 Halaman</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Desain Responsif</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">SEO Basic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Website Static</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">1 Bulan Support</span>
                </li>
              </ul>
              <Link to="/#contact" className="block text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                Pilih Paket
              </Link>
            </div>
            <div className="bg-primary-600 p-8 rounded-2xl shadow-xl border-2 border-primary-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                POPULER
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-primary-100 mb-6">Untuk bisnis berkembang</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">Rp 5.000.000</span>
                <span className="text-primary-100">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">5 Halaman</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">Desain Kustom</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">SEO Advanced</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">CMS Admin Panel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">3 Bulan Support</span>
                </li>
              </ul>
              <Link to="/#contact" className="block text-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                Pilih Paket
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Untuk bisnis besar</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Rp 15.000.000</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">15 Halaman</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Desain Premium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">SEO & Analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">CMS Admin Panel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">5 Bulan Support</span>
                </li>
              </ul>
              <Link to="/#contact" className="block text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                Pilih Paket
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Membangun Website Profesional?
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

export default Website;
