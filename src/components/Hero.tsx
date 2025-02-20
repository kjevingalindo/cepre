// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";

export default function Hero() {
  return (
    <motion.div 
      className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Imagen de Fondo con Movimiento Sutil */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image 
          src="/images/ImagenTecnica1.jpg" 
          alt="CEPRE UNAJMA" 
          fill 
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay Mejorado con Degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
        <motion.div 
          className="text-center text-white px-4"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
            Bienvenido a la CEPRE UNAJMA
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 drop-shadow-md">
            Preparación de calidad para tu ingreso a la universidad.
          </p>

          {/* Botón con Mejor Hover y Glow */}
          <motion.div 
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 140, 0, 0.8)" }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/carreras"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold tracking-wide 
                         hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Explora Nuestras Carreras
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
