import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Reglamento', path: '/reglamento' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-base/80 backdrop-blur-md border-b border-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl text-text-main tracking-wide">
              Palio Club <span className="text-primary">AR</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-text-main'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://chat.whatsapp.com/I5vYyae1oPPBoJzInksAM6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-whatsapp/20"
            >
              Unirme al Grupo
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-main hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-card border-b border-base p-4 flex flex-col gap-4 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-main hover:bg-base'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://chat.whatsapp.com/I5vYyae1oPPBoJzInksAM6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 mt-2 rounded-xl bg-whatsapp text-white font-semibold shadow-md"
            >
              Unirme al Grupo
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
