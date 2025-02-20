"use client";
import { useState, useEffect } from "react";
import ItemNavBar from "./ItemNavBar";
import { Menu, X } from "lucide-react"
interface NavbarProps {
  setView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full shadow-lg transition-all ${scrolled ? "bg-orange-600 shadow-md" : "bg-orange-500"
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="font-semibold text-white flex items-center justify-center"
            onClick={() => setView("home")}
          >
            <img src="/images/logo-cepre.png" alt="Logo del Centro Preuniversitario UNAJMA" width={90} height={90} className="mr-3 h-auto" />
            <span className="text-2xl">CEPRE UNAJMA</span>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <ItemNavBar text="Inicio" targetView="home" setView={setView} />
          <ItemNavBar text="Precios" targetView="precios" setView={setView} />
          <ItemNavBar text="Carreras" targetView="Carreras" setView={setView} />
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <a href="/auth/register" className="bg-white text-orange-700 px-4 py-2 rounded-md">
            Registrarme
          </a>
          <a href="/auth/login" className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Ingresar
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-orange-600 text-white transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="p-6 flex flex-col space-y-4">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <X size={28} />
          </button>
          <ItemNavBar text="Inicio" targetView="home" setView={setView} />
          <ItemNavBar text="Precios" targetView="precios" setView={setView} />
          <ItemNavBar text="Carreras" targetView="Carreras" setView={setView} />
          <a href="/auth/register" className="bg-white text-orange-700 px-4 py-2 rounded-md">
            Registrarme
          </a>
          <a href="/auth/login" className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Ingresar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
