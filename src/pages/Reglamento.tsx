import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, MessageCircleOff, Ban, Car } from 'lucide-react';

const rules = [
  {
    icon: ShieldCheck,
    title: '1. Respeto Mutuo ante todo',
    description: 'No se tolerarán insultos, discriminación ni faltas de respeto hacia ningún miembro. Todos compartimos la misma pasión, mantengamos la camaradería.'
  },
  {
    icon: Car,
    title: '2. Temática Específica',
    description: 'El grupo es exclusivamente sobre el Fiat Palio en todas sus versiones y variantes. Consultas técnicas, repuestos, encuentros, fotos de los autos, etc.'
  },
  {
    icon: MessageCircleOff,
    title: '3. Prohibido Política, Religión y Fútbol',
    description: 'Para evitar conflictos innecesarios, estos temas están estrictamente prohibidos. Venimos a hablar de autos.'
  },
  {
    icon: Ban,
    title: '4. Cero Spam y Contenido Inapropiado',
    description: 'No se permite compartir enlaces referidos, publicidad externa no relacionada, ni contenido para adultos o violento.'
  },
  {
    icon: AlertTriangle,
    title: '5. Seguridad Vial',
    description: 'El Palio Club Argentina no promueve ni avala las picadas ilegales o conductas imprudentes al volante. Respetá las normas de tránsito. Cuidá tu vida y la de los demás.'
  }
];

export default function Reglamento() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-card/80 border border-white/10 text-primary font-medium text-sm mb-4">
          Normas Oficiales
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-6">
          Código de <span className="text-primary">Convivencia</span>
        </h1>
        <p className="text-text-muted text-lg">
          Para mantener un grupo ordenado, útil y amigable, te pedimos que leas y aceptes las siguientes básicas antes de unirte.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 flex gap-6 items-start"
          >
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl items-center justify-center">
              <rule.icon className="text-primary" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold mb-2 flex items-center gap-3">
                <span className="sm:hidden text-primary">
                  <rule.icon size={20} />
                </span>
                {rule.title}
              </h2>
              <p className="text-text-muted leading-relaxed">
                {rule.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-card border border-primary/20 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(237,28,36,0.1)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <h3 className="text-2xl font-display font-bold mb-6 relative z-10">¿Estás de acuerdo con el reglamento?</h3>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://chat.whatsapp.com/I5vYyae1oPPBoJzInksAM6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-whatsapp hover:bg-whatsapp-hover rounded-full text-white font-bold text-xl shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all relative z-10"
        >
          Entiendo las reglas, llevarme al grupo
        </motion.a>
        <p className="text-sm text-text-muted mt-4 relative z-10 opacity-70">
          *Serás redirigido a WhatsApp. El incumplimiento de las normas puede resultar en expulsión.
        </p>
      </div>
    </motion.div>
  );
}
