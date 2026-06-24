import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { LogIn, Chrome } from 'lucide-react';

function Login() {
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError('Gagal login: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <LogIn className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Login untuk mengelola paket website</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition duration-200"
        >
          <Chrome size={24} />
          <span>Login dengan Google</span>
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Hanya admin yang berhak mengakses panel ini
        </p>
      </div>
    </div>
  );
}

export default Login;
