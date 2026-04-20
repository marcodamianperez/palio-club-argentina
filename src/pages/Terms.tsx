import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="bg-card rounded-2xl shadow-xl p-8 mt-16 md:p-12 border border-base relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-6">
          Términos y <span className="text-primary">Condiciones</span>
        </h1>
        
        <p className="text-text-muted mb-8 italic">Última actualización: 19 de Abril de 2026</p>

        <div className="space-y-8 text-text-muted leading-relaxed">
          <section>
            <p className="text-lg">
              Al acceder y utilizar este sitio web, aceptás los siguientes términos y condiciones:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">1.</span> Objeto del sitio
            </h2>
            <p>
              Este sitio tiene como finalidad proporcionar información y facilitar el acceso al grupo de WhatsApp "Palio Club Argentina". No se ofrece ningún servicio adicional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">2.</span> No afiliación con la marca
            </h2>
            <p className="mb-4">
              Este sitio web y el grupo de WhatsApp "Palio Club Argentina" son iniciativas independientes creadas por usuarios.
            </p>
            <p className="mb-4">
              No existe relación, asociación, patrocinio ni respaldo por parte de Fiat ni de ninguna de sus empresas vinculadas.
            </p>
            <p>
              Todas las marcas, nombres y modelos mencionados pertenecen a sus respectivos propietarios y se utilizan únicamente con fines descriptivos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">3.</span> Uso del grupo de WhatsApp
            </h2>
            <p>
              El acceso al grupo es voluntario. Cada usuario es responsable de su participación y de los contenidos que comparte dentro del grupo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">4.</span> Responsabilidad sobre el contenido
            </h2>
            <p className="mb-4">
              Las opiniones, comentarios y publicaciones realizadas por los miembros del grupo de WhatsApp son responsabilidad exclusiva de cada usuario.
            </p>
            <p>
              Dichas opiniones no representan necesariamente la postura del creador del grupo, de los administradores, moderadores ni de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">5.</span> Conducta de los usuarios
            </h2>
            <p>
              Se espera que los miembros del grupo mantengan un comportamiento respetuoso. No obstante, este sitio no garantiza la conducta de los usuarios ni el contenido que puedan compartir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">6.</span> Enlaces externos
            </h2>
            <p>
              Este sitio contiene enlaces a servicios de terceros, como WhatsApp. El uso de estos servicios se rige por sus propios términos y condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">7.</span> Limitación de responsabilidad
            </h2>
            <p className="mb-4">El titular de este sitio no se hace responsable por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El uso que los usuarios hagan del grupo</li>
              <li>El contenido compartido por terceros</li>
              <li>Posibles daños o perjuicios derivados del uso de WhatsApp o del grupo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">8.</span> Modificaciones
            </h2>
            <p>
              Estos términos pueden ser modificados en cualquier momento sin previo aviso. El uso continuado del sitio implica la aceptación de los cambios.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
