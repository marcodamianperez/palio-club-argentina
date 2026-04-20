import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hero.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/60 to-base z-10" />
        <img 
          src={heroImage} 
          alt="Fiat Palio en la ruta" 
          className="w-full h-full object-cover object-center grayscale-[0.2]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-card/80 border border-white/10 text-primary font-medium text-sm mb-6 backdrop-blur-sm">
            La comunidad más grande de Argentina
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Unite a la mejor comunidad del<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
              Fiat Palio en Argentina
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-main/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
            Sumate al mejor grupo de dueños y entusiastas del Fiat Palio. 
            Compartí experiencias, encontrá respuestas a tus preguntas y unite a esta gran pasión.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://chat.whatsapp.com/I5vYyae1oPPBoJzInksAM6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-colors flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Unirme al Grupo de WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#beneficios"
              className="px-8 py-4 bg-card hover:bg-card/80 border border-white/10 rounded-full text-white font-bold text-lg backdrop-blur-sm transition-colors"
            >
              Ver Beneficios
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative gradient blur at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent z-10 pointer-events-none" />
    </section>
  );
}
