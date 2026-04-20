import { motion } from 'framer-motion';

const stats = [
  { id: 1, value: '+130', label: 'Miembros Activos' },
  { id: 2, value: '24/7', label: 'Actividad y Soporte' },
  { id: 3, value: '100%', label: 'Alcance Hispanoamérica' },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-base border-b border-card relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center shadow-lg transition-transform"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
