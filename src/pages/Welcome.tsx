import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Wine, Bottle, Martini } from 'lucide-react';

function Welcome() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1a4c4c] text-white flex flex-col items-center justify-center p-4"
    >
      <motion.img 
        src="/logo.png"
        alt="Gorah"
        className="w-64 mb-12"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="flex flex-col sm:flex-row gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/food')}
          className="flex items-center gap-3 bg-white text-[#1a4c4c] px-8 py-4 rounded-lg text-lg font-semibold"
        >
          <UtensilsCrossed size={24} />
          Menu Food
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/wines')}
          className="flex items-center gap-3 bg-white text-[#1a4c4c] px-8 py-4 rounded-lg text-lg font-semibold"
        >
          <Wine size={24} />
          Menu Vini
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/drinks')}
          className="flex items-center gap-3 bg-white text-[#1a4c4c] px-8 py-4 rounded-lg text-lg font-semibold"
        >
          <Martini size={24} />
          Menu Drink
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Welcome;