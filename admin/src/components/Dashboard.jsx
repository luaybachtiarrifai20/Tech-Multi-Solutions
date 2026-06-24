import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConfig';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { LogOut, Edit, Trash2, Plus, Save, X } from 'lucide-react';

function Dashboard() {
  const [packages, setPackages] = useState([]);
  const [selectedService, setSelectedService] = useState('website-perusahaan');
  const [editingPackage, setEditingPackage] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPackage, setNewPackage] = useState({
    name: '',
    price: '',
    description: '',
    features: [''],
    support: ''
  });

  const services = [
    // Website Services
    { id: 'website-perusahaan', name: 'Website Perusahaan' },
    { id: 'website-kesehatan', name: 'Website Kesehatan' },
    { id: 'website-edukasi', name: 'Website Edukasi' },
    { id: 'website-ecommerce', name: 'Website E-commerce' },
    { id: 'website-portfolio', name: 'Website Portfolio' },
    { id: 'website-sekolah', name: 'Website Sekolah' },
    // Aplikasi Services
    { id: 'aplikasi-ecommerce', name: 'Aplikasi E-commerce' },
    { id: 'aplikasi-edukasi', name: 'Aplikasi Edukasi' },
    { id: 'aplikasi-game', name: 'Aplikasi Game' },
    { id: 'aplikasi-kesehatan', name: 'Aplikasi Kesehatan' },
    { id: 'aplikasi-perusahaan', name: 'Aplikasi Perusahaan' },
    { id: 'aplikasi-sosial', name: 'Aplikasi Sosial' },
    // Desain Grafis Services
    { id: 'desain-branding', name: 'Desain Branding' },
    { id: 'desain-logo', name: 'Desain Logo' },
    { id: 'desain-marketing', name: 'Desain Marketing' },
    { id: 'desain-pendidikan', name: 'Desain Pendidikan' },
    { id: 'desain-social-media', name: 'Desain Social Media' },
    { id: 'desain-uiux', name: 'Desain UI/UX' },
    // Videografi Services
    { id: 'videografi-acara', name: 'Videografi Acara' },
    { id: 'videografi-edukasi', name: 'Videografi Edukasi' },
    { id: 'videografi-kesehatan', name: 'Videografi Kesehatan' },
    { id: 'videografi-komersial', name: 'Videografi Komersial' },
    { id: 'videografi-konten-sosial', name: 'Videografi Konten Sosial' },
    { id: 'videografi-musik', name: 'Videografi Musik' }
  ];

  const fetchPackages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'services', selectedService, 'packages'));
      const packagesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPackages(packagesData);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    fetchPackages();
    /* eslint-enable react-hooks/set-state-in-effect */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedService]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleEdit = (pkg) => {
    setEditingPackage({ ...pkg });
  };

  const handleSave = async () => {
    try {
      const packageRef = doc(db, 'services', selectedService, 'packages', editingPackage.id);
      await updateDoc(packageRef, {
        name: editingPackage.name,
        price: editingPackage.price,
        description: editingPackage.description,
        features: editingPackage.features,
        support: editingPackage.support
      });
      setEditingPackage(null);
      fetchPackages();
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus paket ini?')) {
      try {
        await deleteDoc(doc(db, 'services', selectedService, 'packages', id));
        fetchPackages();
      } catch (error) {
        console.error('Error deleting package:', error);
      }
    }
  };

  const handleAddPackage = async () => {
    try {
      await addDoc(collection(db, 'services', selectedService, 'packages'), {
        name: newPackage.name,
        price: newPackage.price,
        description: newPackage.description,
        features: newPackage.features.filter(f => f.trim() !== ''),
        support: newPackage.support
      });
      setNewPackage({
        name: '',
        price: '',
        description: '',
        features: [''],
        support: ''
      });
      setShowAddForm(false);
      fetchPackages();
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  const handleFeatureChange = (index, value, isNew = false) => {
    if (isNew) {
      const updatedFeatures = [...newPackage.features];
      updatedFeatures[index] = value;
      setNewPackage({ ...newPackage, features: updatedFeatures });
    } else {
      const updatedFeatures = [...editingPackage.features];
      updatedFeatures[index] = value;
      setEditingPackage({ ...editingPackage, features: updatedFeatures });
    }
  };

  const addFeature = (isNew = false) => {
    if (isNew) {
      setNewPackage({ ...newPackage, features: [...newPackage.features, ''] });
    } else {
      setEditingPackage({ ...editingPackage, features: [...editingPackage.features, ''] });
    }
  };

  const removeFeature = (index, isNew = false) => {
    if (isNew) {
      const updatedFeatures = newPackage.features.filter((_, i) => i !== index);
      setNewPackage({ ...newPackage, features: updatedFeatures });
    } else {
      const updatedFeatures = editingPackage.features.filter((_, i) => i !== index);
      setEditingPackage({ ...editingPackage, features: updatedFeatures });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Service Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Layanan</label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {services.map(service => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))}
          </select>
        </div>

        {/* Add Package Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <Plus size={20} />
            Tambah Paket Baru
          </button>
        </div>

        {/* Add Package Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Tambah Paket Baru</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Paket</label>
                <input
                  type="text"
                  value={newPackage.name}
                  onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Harga</label>
                <input
                  type="text"
                  value={newPackage.price}
                  onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                <input
                  type="text"
                  value={newPackage.description}
                  onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Durasi Support</label>
                <input
                  type="text"
                  value={newPackage.support}
                  onChange={(e) => setNewPackage({ ...newPackage, support: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fitur</label>
                {newPackage.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value, true)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                      onClick={() => removeFeature(index, true)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addFeature(true)}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  + Tambah Fitur
                </button>
              </div>
              <button
                onClick={handleAddPackage}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <Save size={20} />
                Simpan Paket
              </button>
            </div>
          </div>
        )}

        {/* Packages List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              {editingPackage?.id === pkg.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Paket</label>
                    <input
                      type="text"
                      value={editingPackage.name}
                      onChange={(e) => setEditingPackage({ ...editingPackage, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Harga</label>
                    <input
                      type="text"
                      value={editingPackage.price}
                      onChange={(e) => setEditingPackage({ ...editingPackage, price: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                    <input
                      type="text"
                      value={editingPackage.description}
                      onChange={(e) => setEditingPackage({ ...editingPackage, description: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Durasi Support</label>
                    <input
                      type="text"
                      value={editingPackage.support}
                      onChange={(e) => setEditingPackage({ ...editingPackage, support: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fitur</label>
                    {editingPackage.features.map((feature, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleFeatureChange(index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <button
                          onClick={() => removeFeature(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addFeature()}
                      className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      + Tambah Fitur
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      <Save size={20} />
                      Simpan
                    </button>
                    <button
                      onClick={() => setEditingPackage(null)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                      <X size={20} />
                      Batal
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-extrabold text-indigo-600 mb-2">{pkg.price}</p>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-4">
                    {pkg.features?.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Support:</span> {pkg.support}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      <Edit size={18} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      <Trash2 size={18} />
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {packages.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>Belum ada paket untuk layanan ini. Klik "Tambah Paket Baru" untuk memulai.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
