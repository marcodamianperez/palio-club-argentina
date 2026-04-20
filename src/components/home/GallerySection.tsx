import { motion } from 'framer-motion';
import slider01 from '../../assets/slider/slider01.jpg';
import slider02 from '../../assets/slider/slider02.jpg';
import slider03 from '../../assets/slider/slider03.jpg';
import slider04 from '../../assets/slider/slider04.jpg';
import slider05 from '../../assets/slider/slider05.jpg';
import slider06 from '../../assets/slider/slider06.jpg';
import slider07 from '../../assets/slider/slider07.jpg';
import slider08 from '../../assets/slider/slider08.jpg';
import slider09 from '../../assets/slider/slider09.jpg';


const generations = [
  { name: 'Fiat Palio Style', image: slider01 },
  { name: 'Fiat Palio Adventure', image: slider02 },
  { name: 'Fiat Palio EL', image: slider03 },
  { name: 'Fiat Palio MPI', image: slider04 },
  { name: 'Fiat Palio 1.8R', image: slider05 },
  { name: 'Fiat Palio Novo', image: slider06 },
  { name: 'Fiat Siena', image: slider07 },
  { name: 'Fiat Strada', image: slider08 },
  { name: 'Fiat Palio Weekend', image: slider09 }
];

export default function GallerySection() {
  const carouselItems = [...generations, ...generations];

  return (
    <section className="py-24 bg-card border-y border-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Todas las <span className="text-primary">Generaciones</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Desde el clásico de los 90s hasta los últimos modelos, cada versión tiene un lugar especial en nuestro club.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Fading gradients at the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 min-w-max px-4 sm:px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Slow speed
          }}
        >
          {carouselItems.map((gen, index) => (
            <div
              key={index}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 group"
            >
              <img 
                src={gen.image} 
                alt={gen.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-text-muted mt-12 opacity-60">
          * Imágenes ilustrativas. Pronto actualizaremos con fotos de nuestros miembros.
        </p>
      </div>
    </section>
  );
}
