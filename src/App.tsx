import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './pages/Welcome';
import FoodMenu from './pages/FoodMenu';
import DrinkMenu from './pages/DrinkMenu';
import WineMenu from './pages/WineMenu';
import Allergeni from './pages/Allergeni';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/food" element={<FoodMenu />} />
          <Route path="/drinks" element={<DrinkMenu />} />
          <Route path="/wines" element={<WineMenu />} />
          <Route path="/allergeni" element={<Allergeni />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;