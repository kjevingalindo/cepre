import { FaFacebook} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-orange-400 uppercase">Contactos</h3>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="text-blue-500 p-2 hover:text-blue-600">
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
