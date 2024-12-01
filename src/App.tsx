import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './pages/Welcome';
import FoodMenu from './pages/FoodMenu';
import DrinkMenu from './pages/DrinkMenu';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/food" element={<FoodMenu />} />
          <Route path="/drinks" element={<DrinkMenu />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;