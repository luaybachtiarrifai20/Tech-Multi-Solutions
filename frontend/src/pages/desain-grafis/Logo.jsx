import { Palette, CheckCircle, ArrowRight, PenTool, Layers, Sparkles, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Logo() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="/desain-grafis/logo" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Desain Logo
                <span className="text-primary-600"> Profesional</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Logo profesional yang unik dan memorable untuk identitas brand Anda dengan berbagai konsep kreatif.
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
                <Palette className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Fitur Desain Logo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <PenTool className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Concepts</h3>
              <p className="text-gray-600">
                Berbagai konsep logo untuk Anda pilih sesuai preferensi.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vector Format</h3>
              <p className="text-gray-600">
                File vector (AI, SVG, EPS) untuk skalabilitas tanpa batas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Color Variations</h3>
              <p className="text-gray-600">
                Variasi warna untuk berbagai kebutuhan penggunaan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Formats</h3>
              <p className="text-gray-600">
                File PNG, JPG, PDF untuk berbagai platform dan media.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Guidelines</h3>
              <p className="text-gray-600">
                Panduan penggunaan logo untuk konsistensi brand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unlimited Revisions</h3>
              <p className="text-gray-600">
                Revisi tanpa batas sampai logo sesuai keinginan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Paket Harga Desain Logo
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan logo Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Untuk startup kecil</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Rp 800.000</span>
                <span className="text-gray-600">/logo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">2 Konsep Desain</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">3 Revisi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">File PNG/JPG</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">2 Hari Pengerjaan</span>
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
                <span className="text-4xl font-extrabold text-white">Rp 2.000.000</span>
                <span className="text-primary-100">/logo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">5 Konsep Desain</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">Unlimited Revisi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">File Source (AI/PSD)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-yellow-400 mr-2 mt-1" size={16} />
                  <span className="text-white">5 Hari Pengerjaan</span>
                </li>
              </ul>
              <Link to="/#contact" className="block text-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                Pilih Paket
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">Untuk brand besar</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Rp 5.000.000</span>
                <span className="text-gray-600">/logo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Unlimited Konsep</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Unlimited Revisi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">File Source + Vector</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">Brand Guidelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">7 Hari Pengerjaan</span>
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
            Siap Membuat Logo Profesional?
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

export default Logo;
