import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

/**
 * Reusable pricing section that fetches packages from Firestore.
 *
 * Props:
 *  - serviceId   : string  — Firestore doc ID under "services/" (e.g. "website-perusahaan")
 *  - title       : string  — Section heading
 *  - subtitle    : string  — Section sub-heading
 *  - unit        : string  — Price unit label, default "/project"
 */
function PricingSection({ serviceId, title, subtitle, unit = "/project" }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const q = query(
          collection(db, "services", serviceId, "packages"),
          orderBy("__name__")   // stable order: basic → enterprise
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Sort by known order
        const ORDER = ["basic", "professional", "enterprise", "premium"];
        data.sort(
          (a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)
        );

        setPackages(data);
      } catch (err) {
        console.error(`Error fetching packages for ${serviceId}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [serviceId]);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          Memuat paket harga...
        </div>
      </section>
    );
  }

  if (packages.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          {title}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const isPopular = index === 1;
            return (
              <div
                key={pkg.id}
                className={
                  isPopular
                    ? "bg-primary-600 p-8 rounded-2xl shadow-xl border-2 border-primary-500 relative"
                    : "bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                }
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    POPULER
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isPopular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mb-6 ${
                    isPopular ? "text-primary-100" : "text-gray-600"
                  }`}
                >
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-extrabold ${
                      isPopular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={isPopular ? "text-primary-100" : "text-gray-600"}
                  >
                    {unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className={
                          isPopular ? "text-yellow-400" : "text-green-500"
                        }
                        size={16}
                        style={{ marginRight: 8, marginTop: 2, flexShrink: 0 }}
                      />
                      <span
                        className={isPopular ? "text-white" : "text-gray-700"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                  {pkg.support && (
                    <li className="flex items-start">
                      <CheckCircle
                        className={
                          isPopular ? "text-yellow-400" : "text-green-500"
                        }
                        size={16}
                        style={{ marginRight: 8, marginTop: 2, flexShrink: 0 }}
                      />
                      <span
                        className={isPopular ? "text-white" : "text-gray-700"}
                      >
                        {pkg.support}
                      </span>
                    </li>
                  )}
                </ul>
                <Link
                  to="/#contact"
                  className={`block text-center px-6 py-3 font-semibold rounded-lg transition ${
                    isPopular
                      ? "bg-white text-primary-700 hover:bg-gray-100"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                >
                  Pilih Paket
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
