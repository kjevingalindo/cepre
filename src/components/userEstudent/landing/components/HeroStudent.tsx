import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/components/landing/components/animations";


interface HeroStudentProps {
  name: string;
  matriculaCompleta: boolean;
  pagoCompleto: boolean;
  fechaExamen: string;
}

export default function HeroStudent({
  name,
  matriculaCompleta,
  pagoCompleto,
  fechaExamen,
}: HeroStudentProps) {
  return (
    <motion.div
      className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Imagen de Fondo */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/student-dashboard-bg.jpg"
          alt="Student Dashboard"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay y Contenido */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
        <motion.div className="text-center text-white px-4" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
            Hola, {name} 👋
          </h1>
          <p className="text-lg md:text-xl font-light mb-2">
            🎓 Matrícula: {matriculaCompleta ? "✅ Completa" : "⚠️ Pendiente"}
          </p>
          <p className="text-lg md:text-xl font-light mb-2">
            💰 Pago: {pagoCompleto ? "✅ Completo" : "⚠️ Faltan cuotas"}
          </p>
          <p className="text-lg md:text-xl font-light mb-6">
            🗓️ Examen programado: {fechaExamen}
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold tracking-wide hover:bg-orange-600 transition duration-300 shadow-lg"
          >
            Ver Detalles
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
