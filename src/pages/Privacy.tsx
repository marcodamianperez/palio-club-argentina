import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Privacy() {
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
          Política de <span className="text-primary">Privacidad</span>
        </h1>
        
        <p className="text-text-muted mb-8 italic">Última actualización: 19 de Abril de 2026</p>

        <div className="space-y-8 text-text-muted leading-relaxed">
          <section>
            <p className="text-lg">
              Este sitio web tiene como único propósito brindar información y facilitar el acceso al grupo de WhatsApp "Palio Club Argentina".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">1.</span> Datos que recopila este sitio
            </h2>
            <p className="mb-4">
              Este sitio no recopila datos personales de forma directa ni solicita registro de usuarios. No se utilizan formularios de contacto ni bases de datos propias.
            </p>
            <p className="mb-2">Sin embargo, pueden recopilarse datos de forma automática mediante herramientas de terceros, como:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Datos de navegación (cookies, estadísticas básicas)</li>
            </ul>
            <p className="mt-4">
              Esto puede ocurrir si se utilizan servicios de analítica o herramientas similares.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">2.</span> Uso de cookies
            </h2>
            <p>
              Este sitio puede utilizar cookies con fines técnicos o estadísticos. Podés configurar tu navegador para rechazarlas si lo preferís.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">3.</span> Enlace a WhatsApp
            </h2>
            <p className="mb-4">
              Este sitio contiene enlaces que redirigen a un grupo de WhatsApp. Al hacer clic y unirte al grupo, pasás a interactuar dentro de la plataforma WhatsApp, que tiene sus propias políticas de privacidad.
            </p>
            <p className="mb-2">Al unirte a un grupo de WhatsApp, otros miembros podrán ver:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Tu nombre de perfil</li>
              <li>Tu número de teléfono</li>
              <li>Tu foto de perfil (si la tenés configurada)</li>
            </ul>
            <p className="mb-4 font-semibold text-text-main">
              Estos datos son gestionados exclusivamente por WhatsApp y no por este sitio.
            </p>
            <p>
              Se recomienda revisar la{' '}
              <a 
                href="https://www.whatsapp.com/legal/privacy-policy?lang=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1 transition-colors"
              >
                política de privacidad de WhatsApp
                <ExternalLink size={14} />
              </a>{' '}
              para entender cómo se utilizan tus datos dentro de esa plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">4.</span> Responsabilidad sobre datos en terceros
            </h2>
            <p>
              Este sitio no tiene control ni responsabilidad sobre el tratamiento de datos personales realizado por WhatsApp u otros servicios externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-primary">5.</span> Cambios en esta política
            </h2>
            <p>
              Esta política puede actualizarse en cualquier momento sin previo aviso. Se recomienda revisarla periódicamente.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
