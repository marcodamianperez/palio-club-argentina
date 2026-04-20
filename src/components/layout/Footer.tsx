import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-base py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-text-main">
            Palio Club <span className="text-primary">AR</span>
          </span>
          <span className="text-text-muted text-sm hidden sm:inline-block">|</span>
          <span className="text-text-muted text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link to="/reglamento" className="text-sm text-text-muted hover:text-primary transition-colors">
            Reglamento
          </Link>
          <Link to="/privacidad" className="text-sm text-text-muted hover:text-primary transition-colors">
            Privacidad
          </Link>
          <Link to="/terminos" className="text-sm text-text-muted hover:text-primary transition-colors">
            Términos
          </Link>
        </div>

        <div className="flex items-center gap-1 text-sm text-text-muted">
          Hecho con <Heart size={14} className="text-primary mx-1" /> en Argentina
        </div>
      </div>
    </footer>
  );
}
