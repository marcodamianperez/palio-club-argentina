import { motion } from 'framer-motion';
import { Wrench, Users, ShoppingCart } from 'lucide-react';

const benefits = [
  {
    icon: Wrench,
    title: 'Experiencias y recomendaciones',
    description: 'Aprendé de problemas ya resueltos por otros usuarios: fallas comunes, mantenimientos clave y tips que no aparecen en el manual.'
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Aportá tu conocimiento o realizá tus consultas, siempre habrá alguien dispuesto a ayudar.'
  },
  {
    icon: ShoppingCart,
    title: 'Compra y Venta',
    description: 'Accedé a publicaciones de autos, repuestos y accesorios de otros miembros de la comunidad.'
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            ¿Por qué <span className="text-primary">sumarte?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg"
          >
            Más que un grupo de WhatsApp, somos la red de soporte más activa para mantener tu Palio en óptimas condiciones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <benefit.icon className="text-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
