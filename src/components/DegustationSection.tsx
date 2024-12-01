import React from 'react';
import { motion } from 'framer-motion';
import { Wine } from 'lucide-react';
import { DegustationMenu } from '../types';

interface DegustationSectionProps {
  menu: DegustationMenu;
}

function DegustationSection({ menu }: DegustationSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 rounded-lg p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Wine className="w-6 h-6" />
        <h3 className="text-xl font-semibold">{menu.name}</h3>
        <span className="text-sm bg-white/20 px-2 py-1 rounded">{menu.type}</span>
        <span className="ml-auto font-semibold">{menu.price}</span>
      </div>
      
      <p className="text-gray-300 mb-6">{menu.description}</p>

      <div className="space-y-6">
        {menu.courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-l-2 border-white/20 pl-4"
          >
            <h4 className="font-medium text-lg">{course.dish}</h4>
            <p className="text-sm text-gray-300 mt-1">{course.description}</p>
            <div className="mt-2 bg-white/5 p-3 rounded">
              <p className="text-sm font-medium">{course.wine.name}</p>
              <p className="text-xs text-gray-300">{course.wine.notes}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default DegustationSection;