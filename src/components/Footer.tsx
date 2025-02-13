import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/carreras" className="text-gray-100 hover:text-white hover:underline transition-all duration-200">Carreras</a></li>
              <li><a href="/precios" className="text-gray-100 hover:text-white hover:underline transition-all duration-200">Precios</a></li>
              <li><a href="/login" className="text-gray-100 hover:text-white hover:underline transition-all duration-200">Iniciar Sesión</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-300 mb-2">Email: cepre@unajma.edu.pe</p>
            <p className="text-gray-300">Teléfono: +51 123 456 789</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400 uppercase">Contactos</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-blue-500 p-2 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-sky-400 p-2 hover:text-sky-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-pink-500 p-2 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;