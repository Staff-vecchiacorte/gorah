import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  variants?: { size: string; price: string; }[];
  ratings?: {
    intensity: number;
    aroma: number;
    taste: number;
    calories: string;
  };
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  showRatings?: boolean;
}

function MenuSection({ title, items, showRatings }: MenuSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 rounded-lg p-6"
    >
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-white/20 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                )}
                {showRatings && item.ratings && (
                  <div className="mt-2 space-y-1">
                    <Rating label="Intensità" value={item.ratings.intensity} />
                    <Rating label="Profumo" value={item.ratings.aroma} />
                    <Rating label="Sapore" value={item.ratings.taste} />
                    <p className="text-sm text-gray-300">{item.ratings.calories}</p>
                  </div>
                )}
              </div>
              <div className="text-right">
                {item.variants ? (
                  <div className="space-y-1">
                    {item.variants.map((variant, idx) => (
                      <p key={idx} className="text-sm">
                        {variant.size}: {variant.price}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="font-medium">{item.price}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Rating({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-300 w-16">{label}:</span>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < value ? 'fill-current' : 'opacity-30'}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;