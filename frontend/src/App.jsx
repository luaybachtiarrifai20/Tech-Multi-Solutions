import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  X,
  Globe,
  Smartphone,
  Palette,
  Video,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronRight,
  CheckCircle,
  ChevronDown
} from "lucide-react";
import Website from "./pages/Website";
import Aplikasi from "./pages/Aplikasi";
import DesainGrafis from "./pages/DesainGrafis";
import Videografi from "./pages/Videografi";

// Website example pages
import Sekolah from "./pages/website/Sekolah";
import Perusahaan from "./pages/website/Perusahaan";
import Edukasi from "./pages/website/Edukasi";
import Ecommerce from "./pages/website/Ecommerce";
import Kesehatan from "./pages/website/Kesehatan";
import Portfolio from "./pages/website/Portfolio";

// Aplikasi example pages
import AplikasiEcommerce from "./pages/aplikasi/Ecommerce";
import AplikasiKesehatan from "./pages/aplikasi/Kesehatan";
import AplikasiEdukasi from "./pages/aplikasi/Edukasi";
import AplikasiPerusahaan from "./pages/aplikasi/Perusahaan";
import AplikasiGame from "./pages/aplikasi/Game";
import AplikasiSosial from "./pages/aplikasi/Sosial";

// Desain Grafis example pages
import DesainLogo from "./pages/desain-grafis/Logo";
import DesainBranding from "./pages/desain-grafis/Branding";
import DesainMarketing from "./pages/desain-grafis/Marketing";
import DesainUiux from "./pages/desain-grafis/Uiux";
import DesainSocialMedia from "./pages/desain-grafis/Social-media";
import DesainPendidikan from "./pages/desain-grafis/Pendidikan";

// Videografi example pages
import VideoAcara from "./pages/videografi/Acara";
import VideoKomersial from "./pages/videografi/Komersial";
import VideoEdukasi from "./pages/videografi/Edukasi";
import VideoKesehatan from "./pages/videografi/Kesehatan";
import VideoMusik from "./pages/videografi/Musik";
import VideoKontenSosial from "./pages/videografi/Konten-sosial";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("id");
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const translations = {
    id: {
      nav: {
        home: "Beranda",
        services: "Layanan",
        about: "Tentang",
        contact: "Kontak",
      },
      hero: {
        title: "Transformasi Kehadiran Digital Anda dengan",
        titleHighlight: "Tech Multi Solution",
        description:
          "Kami menyediakan solusi digital komprehensif termasuk pembuatan website, aplikasi, fotografi profesional, dan layanan videografi untuk membantu bisnis Anda berkembang.",
        exploreServices: "Jelajahi Layanan",
        getStarted: "Mulai Sekarang",
      },
      services: {
        title: "Layanan Kami",
        description:
          "Solusi digital komprehensif yang disesuaikan untuk memenuhi kebutuhan bisnis Anda",
        website: {
          title: "Pengembangan Website",
          description:
            "Pengembangan website profesional dengan teknologi modern dan desain responsif",
          features: [
            "Desain Responsif",
            "SEO Optimasi",
            "Performa Cepat",
            "Solusi Kustom",
          ],
        },
        app: {
          title: "Pengembangan Aplikasi",
          description:
            "Aplikasi mobile dan web kustom yang disesuaikan dengan kebutuhan bisnis Anda",
          features: ["Cross-platform", "User-friendly", "Skalabel", "Aman"],
        },
        graphicDesign: {
          title: "Layanan Desain Grafis",
          description:
            "Desain grafis profesional untuk branding, marketing, dan kebutuhan visual bisnis",
          features: [
            "Desain Logo",
            "Desain Branding",
            "Desain Marketing",
            "Desain UI/UX",
          ],
        },
        videography: {
          title: "Layanan Videografi",
          description:
            "Produksi video profesional untuk iklan, acara, dan pembuatan konten",
          features: [
            "Videografi Acara",
            "Video Komersial",
            "Pembuatan Konten",
            "Editing Video",
          ],
        },
      },
      about: {
        title: "Tentang Tech Multi Solution",
        description1:
          "Tech Multi Solution adalah penyedia layanan digital terkemuka yang berdedikasi untuk membantu bisnis membangun dan meningkatkan kehadiran online mereka. Dengan pengalaman bertahun-tahun dalam pengembangan website, pembuatan aplikasi, fotografi, dan videografi, kami memberikan hasil luar biasa yang melampaui ekspektasi.",
        description2:
          "Tim profesional kami berkomitmen untuk memberikan solusi inovatif yang mendorong pertumbuhan dan kesuksesan bagi klien kami. Kami menggabungkan kreativitas dengan keahlian teknis untuk menghasilkan proyek yang memberikan dampak lasting.",
        projects: "Proyek Selesai",
        clients: "Klien Puas",
        experience: "Tahun Pengalaman",
        support: "Dukungan",
        whyChooseUs: "Mengapa Memilih Kami?",
        reasons: [
          "Tim ahli dengan keahlian dan pengalaman beragam",
          "Solusi kustom yang disesuaikan dengan kebutuhan Anda",
          "Hasil berkualitas dengan perhatian terhadap detail",
          "Harga kompetitif tanpa mengorbankan kualitas",
          "Pengiriman proyek tepat waktu dan dukungan excellent",
        ],
      },
      contact: {
        title: "Hubungi Kami",
        description: "Siap memulai proyek Anda? Hubungi kami hari ini",
        name: "Nama",
        email: "Email",
        service: "Layanan",
        message: "Pesan",
        selectService: "Pilih layanan",
        sendMessage: "Kirim Pesan",
        success: "Terima kasih! Pesan Anda telah berhasil dikirim.",
        emailLabel: "Email",
        phoneLabel: "Telepon",
        addressLabel: "Alamat",
        businessHours: "Jam Operasional",
        weekdays: "Senin - Jumat: 09:00 - 18:00",
        saturday: "Sabtu: 10:00 - 16:00",
        sunday: "Minggu: Tutup",
      },
      footer: {
        description:
          "Mitra terpercaya Anda untuk solusi digital, fotografi, dan layanan videografi.",
        services: "Layanan",
        company: "Perusahaan",
        connect: "Hubungkan",
        aboutUs: "Tentang Kami",
        rights: "© 2024 Tech Multi Solution. Hak cipta dilindungi.",
      },
    },
    en: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
      },
      hero: {
        title: "Transform Your Digital Presence with",
        titleHighlight: "Tech Multi Solution",
        description:
          "We provide comprehensive digital solutions including website development, application creation, professional photography, and videography services to help your business thrive.",
        exploreServices: "Explore Services",
        getStarted: "Get Started",
      },
      services: {
        title: "Our Services",
        description:
          "Comprehensive digital solutions tailored to meet your business needs",
        website: {
          title: "Website Development",
          description:
            "Professional website development with modern technologies and responsive design",
          features: [
            "Responsive Design",
            "SEO Optimized",
            "Fast Performance",
            "Custom Solutions",
          ],
        },
        app: {
          title: "Application Development",
          description:
            "Custom mobile and web applications tailored to your business needs",
          features: ["Cross-platform", "User-friendly", "Scalable", "Secure"],
        },
        graphicDesign: {
          title: "Graphic Design Services",
          description:
            "Professional graphic design for branding, marketing, and business visual needs",
          features: [
            "Logo Design",
            "Branding Design",
            "Marketing Design",
            "UI/UX Design",
          ],
        },
        videography: {
          title: "Videography Services",
          description:
            "Professional video production for commercials, events, and content creation",
          features: [
            "Event Videography",
            "Commercial Videos",
            "Content Creation",
            "Video Editing",
          ],
        },
      },
      about: {
        title: "About Tech Multi Solution",
        description1:
          "Tech Multi Solution is a leading digital services provider dedicated to helping businesses establish and enhance their online presence. With years of experience in website development, application creation, photography, and videography, we deliver exceptional results that exceed expectations.",
        description2:
          "Our team of skilled professionals is committed to providing innovative solutions that drive growth and success for our clients. We combine creativity with technical expertise to deliver projects that make a lasting impact.",
        projects: "Projects Completed",
        clients: "Happy Clients",
        experience: "Years Experience",
        support: "Support",
        whyChooseUs: "Why Choose Us?",
        reasons: [
          "Expert team with diverse skills and experience",
          "Customized solutions tailored to your needs",
          "Quality deliverables with attention to detail",
          "Competitive pricing without compromising quality",
          "Timely project delivery and excellent support",
        ],
      },
      contact: {
        title: "Contact Us",
        description: "Ready to start your project? Get in touch with us today",
        name: "Name",
        email: "Email",
        service: "Service",
        message: "Message",
        selectService: "Select a service",
        sendMessage: "Send Message",
        success: "Thank you! Your message has been sent successfully.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        addressLabel: "Address",
        businessHours: "Business Hours",
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 4:00 PM",
        sunday: "Sunday: Closed",
      },
      footer: {
        description:
          "Your trusted partner for digital solutions, photography, and videography services.",
        services: "Services",
        company: "Company",
        connect: "Connect",
        aboutUs: "About Us",
        rights: "© 2024 Tech Multi Solution. All rights reserved.",
      },
    },
  };

  const t = translations[language];

  const services = [
    {
      icon: Globe,
      title: t.services.website.title,
      description: t.services.website.description,
      features: t.services.website.features,
    },
    {
      icon: Smartphone,
      title: t.services.app.title,
      description: t.services.app.description,
      features: t.services.app.features,
    },
    {
      icon: Palette,
      title: t.services.graphicDesign.title,
      description: t.services.graphicDesign.description,
      features: t.services.graphicDesign.features,
    },
    {
      icon: Video,
      title: t.services.videography.title,
      description: t.services.videography.description,
      features: t.services.videography.features,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    Tech Multi Solution
                  </span>
                </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 transition">
                {t.nav.home}
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition">
                  {t.nav.services}
                  <ChevronDown className="ml-1" size={16} />
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <Link
                      to="/website"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition">
                      {t.services.website.title}
                    </Link>
                    <Link
                      to="/aplikasi"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition">
                      {t.services.app.title}
                    </Link>
                    <Link
                      to="/desain-grafis"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition">
                      {t.services.graphicDesign.title}
                    </Link>
                    <Link
                      to="/videografi"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition">
                      {t.services.videography.title}
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/#about"
                className="text-gray-700 hover:text-primary-600 transition">
                {t.nav.about}
              </Link>
              <Link
                to="/#contact"
                className="text-gray-700 hover:text-primary-600 transition">
                {t.nav.contact}
              </Link>
              <button
                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <span className="text-sm font-medium">
                  {language === "id" ? "EN" : "ID"}
                </span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                className="md:hidden flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <span className="text-sm font-medium">
                  {language === "id" ? "EN" : "ID"}
                </span>
              </button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-primary-600">
                {t.nav.home}
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="flex items-center w-full py-2 text-gray-700 hover:text-primary-600">
                  {t.nav.services}
                  <ChevronDown className="ml-1" size={16} />
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/website"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary-600">
                      {t.services.website.title}
                    </Link>
                    <Link
                      to="/aplikasi"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary-600">
                      {t.services.app.title}
                    </Link>
                    <Link
                      to="/desain-grafis"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary-600">
                      {t.services.graphicDesign.title}
                    </Link>
                    <Link
                      to="/videografi"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary-600">
                      {t.services.videography.title}
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/#about"
                className="block py-2 text-gray-700 hover:text-primary-600">
                {t.nav.about}
              </Link>
              <Link
                to="/#contact"
                className="block py-2 text-gray-700 hover:text-primary-600">
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              {t.hero.title}
              <span className="text-primary-600"> {t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                {t.hero.exploreServices}
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition">
                {t.hero.getStarted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border border-gray-100">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600">
                      <CheckCircle
                        className="text-primary-600 mr-2"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t.about.description2}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">{t.about.projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    200+
                  </div>
                  <div className="text-gray-600">{t.about.clients}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-600">{t.about.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">{t.about.support}</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t.about.whyChooseUs}</h3>
              <ul className="space-y-4">
                {t.about.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      className="mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={language === "id" ? "Nama Anda" : "Your name"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.service}
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">{t.contact.selectService}</option>
                    <option value="website">{t.services.website.title}</option>
                    <option value="application">{t.services.app.title}</option>
                    <option value="graphic-design">
                      {t.services.graphicDesign.title}
                    </option>
                    <option value="videography">
                      {t.services.videography.title}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={
                      language === "id"
                        ? "Ceritakan tentang proyek Anda..."
                        : "Tell us about your project..."
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                  {t.contact.sendMessage}
                  <Send className="ml-2" size={20} />
                </button>
                {formSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {t.contact.success}
                  </div>
                )}
              </form>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t.contact.emailLabel}
                  </h3>
                  <p className="text-gray-600">info@multitechsolution.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t.contact.phoneLabel}
                  </h3>
                  <p className="text-gray-600">+62 896 1934 4767</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t.contact.addressLabel}
                  </h3>
                  <p className="text-gray-600">Sukoharjo, Indonesia</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.contact.businessHours}
                </h3>
                <p className="text-gray-600">{t.contact.weekdays}</p>
                <p className="text-gray-600">{t.contact.saturday}</p>
                <p className="text-gray-600">{t.contact.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Tech Multi Solution</h3>
              <p className="text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t.footer.services}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t.services.website.title}</li>
                <li>{t.services.app.title}</li>
                <li>{t.services.graphicDesign.title}</li>
                <li>{t.services.videography.title}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    {t.footer.aboutUs}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.connect}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
        </div>
      } />
      <Route path="/website" element={<Website />} />
      <Route path="/aplikasi" element={<Aplikasi />} />
      <Route path="/desain-grafis" element={<DesainGrafis />} />
      <Route path="/videografi" element={<Videografi />} />
      
      {/* Website example pages */}
      <Route path="/website/sekolah" element={<Sekolah />} />
      <Route path="/website/perusahaan" element={<Perusahaan />} />
      <Route path="/website/edukasi" element={<Edukasi />} />
      <Route path="/website/ecommerce" element={<Ecommerce />} />
      <Route path="/website/kesehatan" element={<Kesehatan />} />
      <Route path="/website/portfolio" element={<Portfolio />} />
      
      {/* Aplikasi example pages */}
      <Route path="/aplikasi/ecommerce" element={<AplikasiEcommerce />} />
      <Route path="/aplikasi/kesehatan" element={<AplikasiKesehatan />} />
      <Route path="/aplikasi/edukasi" element={<AplikasiEdukasi />} />
      <Route path="/aplikasi/perusahaan" element={<AplikasiPerusahaan />} />
      <Route path="/aplikasi/game" element={<AplikasiGame />} />
      <Route path="/aplikasi/sosial" element={<AplikasiSosial />} />
      
      {/* Desain Grafis example pages */}
      <Route path="/desain-grafis/logo" element={<DesainLogo />} />
      <Route path="/desain-grafis/branding" element={<DesainBranding />} />
      <Route path="/desain-grafis/marketing" element={<DesainMarketing />} />
      <Route path="/desain-grafis/uiux" element={<DesainUiux />} />
      <Route path="/desain-grafis/social-media" element={<DesainSocialMedia />} />
      <Route path="/desain-grafis/pendidikan" element={<DesainPendidikan />} />
      
      {/* Videografi example pages */}
      <Route path="/videografi/acara" element={<VideoAcara />} />
      <Route path="/videografi/komersial" element={<VideoKomersial />} />
      <Route path="/videografi/edukasi" element={<VideoEdukasi />} />
      <Route path="/videografi/kesehatan" element={<VideoKesehatan />} />
      <Route path="/videografi/musik" element={<VideoMusik />} />
      <Route path="/videografi/konten-sosial" element={<VideoKontenSosial />} />
    </Routes>
  );
}

export default App;
