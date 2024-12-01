import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import { signatureDrinks, classicDrinks, nonAlcoholicDrinks } from '../data/drinkMenu';

function DrinkMenu() {
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

      <div className="max-w-2xl mx-auto space-y-12">
        <MenuSection title="I Nostri Drink" items={signatureDrinks} />
        <MenuSection title="Classici" items={classicDrinks} showRatings />
        <MenuSection title="Analcolici" items={nonAlcoholicDrinks} showRatings />
      </div>
    </motion.div>
  );
}

export default DrinkMenu;