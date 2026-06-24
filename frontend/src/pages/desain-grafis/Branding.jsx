import { Building, CheckCircle, ArrowRight, Palette, Layers, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PricingSection from "../../components/PricingSection";

function Branding() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="/desain-grafis/branding" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Desain Branding
                <span className="text-primary-600"> Lengkap</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Identitas visual lengkap untuk membangun brand yang kuat, konsisten, dan memorable di pasar.
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
                <Building className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Fitur Desain Branding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Palette className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Logo Design</h3>
              <p className="text-gray-600">
                Logo utama dengan variasi untuk berbagai kebutuhan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Color Palette</h3>
              <p className="text-gray-600">
                Palet warna brand dengan kode hex dan CMYK.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Typography</h3>
              <p className="text-gray-600">
                Font dan gaya tipografi untuk brand identity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Assets</h3>
              <p className="text-gray-600">
                Template kartu nama, kop surat, dan stationery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Guidelines</h3>
              <p className="text-gray-600">
                Dokumen panduan penggunaan brand yang lengkap.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media Kit</h3>
              <p className="text-gray-600">
                Template untuk berbagai platform social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        serviceId="desain-branding"
        title="Paket Harga Desain Branding"
        subtitle="Pilih paket yang sesuai dengan kebutuhan branding Anda"
        unit="/item"
      />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Membangun Brand Identity?
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

export default Branding;
