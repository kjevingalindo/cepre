import Image from "next/image";
import { motion } from "framer-motion";

// Variantes de animación locales
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 }
  }
};

interface HeroStudentProps {
  name: string;
  matriculaCompleta: boolean;
  pagoCompleto: boolean;
  fechaExamen: string;
}

const statusConfig = {
  matricula: {
    true: { text: "Completa", icon: "✅" },
    false: { text: "Pendiente", icon: "⚠️" }
  },
  pago: {
    true: { text: "Completo", icon: "✅" },
    false: { text: "Faltan cuotas", icon: "⚠️" }
  }
} as const;

export default function HeroStudent({ name, matriculaCompleta, pagoCompleto, fechaExamen }: HeroStudentProps) {
  return (
    <motion.div
      className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/logo-cepre.png"
          alt="Panel del estudiante"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
        <motion.div className="text-center text-white px-4 max-w-4xl" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Bienvenido, {name} <span className="text-orange-400">👋</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <StatusCard
              icon="🎓"
              label="Matrícula"
              status={statusConfig.matricula[matriculaCompleta ? "true" : "false"]}
            />
            <StatusCard
              icon="💰"
              label="Pago"
              status={statusConfig.pago[pagoCompleto ? "true" : "false"]}
            />
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-lg font-medium mb-1">🗓 Examen programado</p>
              <p className="text-xl font-semibold">{fechaExamen}</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 shadow-xl"
          >
            Ver Calendario Académico
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface StatusCardProps {
  icon: string;
  label: string;
  status: { text: string; icon: string };
}

const StatusCard = ({ icon, label, status }: StatusCardProps) => (
  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-lg font-medium">{label}</h3>
    </div>
    <p className="text-xl font-semibold">
      {status.icon} {status.text}
    </p>
  </div>
);