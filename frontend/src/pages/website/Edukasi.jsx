import { Briefcase, CheckCircle, ArrowRight, BookOpen, GraduationCap, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Edukasi() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="/website/edukasi" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Website Edukasi
                <span className="text-primary-600"> Online</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Platform pembelajaran online dengan fitur interaktif, kuis, dan materi lengkap untuk institusi edukasi.
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
                <GraduationCap className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Fitur Website Edukasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manajemen Kursus</h3>
              <p className="text-gray-600">
                Sistem lengkap untuk mengelola kursus dan materi pembelajaran.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Learning</h3>
              <p className="text-gray-600">
                Platform video streaming untuk materi pembelajaran online.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sistem Kuis</h3>
              <p className="text-gray-600">
                Kuis interaktif dengan auto-grading dan sertifikat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Tracking progress siswa dan laporan pembelajaran.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Forum Diskusi</h3>
              <p className="text-gray-600">
                Komunitas belajar dengan forum diskusi interaktif.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sertifikasi</h3>
              <p className="text-gray-600">
                Sistem sertifikat otomatis setelah menyelesaikan kursus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Paket Harga Website Edukasi
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan institusi edukasi Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Untuk tutor individu</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Rp 6.000.000</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">10 Kursus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Video Learning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Sistem Kuis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">3 Bulan Support</span>
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
              <p className="text-primary-100 mb-6">Untuk lembaga kecil</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">Rp 15.000.000</span>
                <span className="text-primary-100">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">50 Kursus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">Forum Diskusi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">Progress Tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">Sertifikasi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">6 Bulan Support</span>
                </li>
              </ul>
              <Link to="/#contact" className="block text-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                Pilih Paket
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Untuk universitas besar</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Rp 30.000.000</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Unlimited Kursus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Live Classes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Advanced Analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Mobile App</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">12 Bulan Support</span>
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
            Siap Membangun Platform Edukasi Online?
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

export default Edukasi;
