import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import DegustationSection from '../components/DegustationSection';
import { antipasti, tartare, specialita, degustazioni } from '../data/foodMenu';

function FoodMenu() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1a4c4c] text-white p-4 pb-20"
    >
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-6"
      >
        <ChevronLeft size={24} />
        Indietro
      </button>

      <img src="/logo.png" alt="Gorah" className="w-40 mx-auto mb-8" />

      <div className="max-w-3xl mx-auto space-y-12">
        <MenuSection title="Antipasti" items={antipasti} />
        <MenuSection title="Tartare" items={tartare} />
        <MenuSection title="Specialità" items={specialita} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold">Percorsi Degustazione</h2>
          {degustazioni.map((menu, index) => (
            <DegustationSection key={index} menu={menu} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FoodMenu;