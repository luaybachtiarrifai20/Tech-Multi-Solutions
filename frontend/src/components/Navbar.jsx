import { Link } from "react-router-dom";

function Navbar({ activePage }) {
  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Website", path: "/website" },
    { name: "Aplikasi", path: "/aplikasi" },
    { name: "Desain Grafis", path: "/desain-grafis" },
    { name: "Videografi", path: "/videografi" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Tech Multi Solution
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  activePage === link.path
                    ? "text-primary-600 font-semibold"
                    : "text-gray-700 hover:text-primary-600 transition"
                }
              >
                {link.name}
              </Link>
            ))}
            <Link to="/#contact" className="text-gray-700 hover:text-primary-600 transition">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
