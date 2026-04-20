import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: '¿Tiene algún costo ser miembro del club?',
    answer: 'No, unirse y participar del grupo de WhatsApp es 100% gratuito. Tampoco cobramos suscripciones ni pedimos donaciones.'
  },
  {
    question: '¿Qué requisitos hay para entrar?',
    answer: (
      <>
        El único requisito es tener o ser entusiasta del Fiat Palio (cualquier generación o versión) y comprometerse a respetar nuestro{' '}
        <Link to="/reglamento" className="text-primary hover:underline transition-colors">
          reglamento de convivencia
        </Link>.
      </>
    )
  },
  {
    question: 'Tengo un Siena/Strada, ¿puedo participar?',
    answer: '¡Por su puesto! Aceptamos a todos los modelos y variantes que comparten plataforma con el Palio, como el Siena, la Strada, las versiones Weekend, Adventure, etc. ¡Todos son bienvenidos!'
  },
  {
    question: '¿El grupo es exclusivo para argentinos?',
    answer: 'El grupo está abierto a todo hispanohablante amante del Palio, independientemente de donde residas. También tenemos miembros de Chile, Colombia, República Dominicana y muchos otros países.'
  },
  {
    question: '¿Hacen encuentros presenciales?',
    answer: 'Al ser un grupo tan federal y con integrantes de todo el continente, las reuniones presenciales son difíciles de coordinar. De todas formas, fomentamos el contacto entre miembros de distintas zonas para poder organizar encuentros locales.'
  },
  {
    question: '¿Se puede vender o comprar dentro del grupo?',
    answer: 'Sí. Recordá realizar una publicación clara con una descripción, precio e imagen del producto o vehículo en venta. Evitá el spam y la publicación de enlaces externos.'
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Preguntas <span className="text-primary">Frecuentes</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-card transition-colors hover:border-primary/50"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display font-bold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-muted">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div id="unirme" className="mt-20 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-white/5 p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-whatsapp/20 rounded-full blur-3xl" />
            
            <h3 className="text-3xl font-display font-bold mb-4 relative z-10">¿Listo para rutear con nosotros?</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto relative z-10">
              Leé detenidamente nuestro{' '}
              <Link to="/reglamento" className="text-primary hover:underline transition-colors">
                reglamento de convivencia
              </Link>{' '}
               y accedé al enlace directo del grupo oficial.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://chat.whatsapp.com/I5vYyae1oPPBoJzInksAM6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-whatsapp hover:bg-whatsapp-hover rounded-full text-white font-bold text-xl shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all relative z-10"
            >
              Unirme al Grupo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
