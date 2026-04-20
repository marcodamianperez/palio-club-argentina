import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import BenefitsSection from '../components/home/BenefitsSection';
import GallerySection from '../components/home/GallerySection';
import FaqSection from '../components/home/FaqSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <GallerySection />
      <FaqSection />
    </motion.div>
  );
}
