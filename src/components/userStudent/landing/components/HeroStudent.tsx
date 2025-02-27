import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/components/landing/components/animations";


interface HeroStudentProps {
  name: string;
  matriculaCompleta: boolean;
  pagoCompleto: boolean;
  fechaExamen: string;
}

// Configuración de estados con claves como strings
const statusConfig = {
  matricula: {
    "true": { text: "Completa", icon: "✅" },
    "false": { text: "Pendiente", icon: "⚠️" }
  },
  pago: {
    "true": { text: "Completo", icon: "✅" },
    "false": { text: "Faltan cuotas", icon: "⚠️" }
  }
} as const;

type StatusKey = keyof typeof statusConfig.matricula;

interface StatusCardProps {
  icon: string;
  label: string;
  status: typeof statusConfig.matricula["true" | "false"];
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
      {/* Imagen de fondo optimizada */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/student-dashboard-bg.jpg"
          alt="Panel del estudiante"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
        <motion.div className="text-center text-white px-4 max-w-4xl" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Bienvenido, {name} <span className="text-orange-400">👋</span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StatusCard
              icon="🎓"
              label="Matrícula"
              status={statusConfig.matricula[matriculaCompleta.toString() as StatusKey]}
            />
            
            <StatusCard
              icon="💰"
              label="Estado de Pago"
              status={statusConfig.pago[pagoCompleto.toString() as StatusKey]}
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

// Componente StatusCard con tipos seguros
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