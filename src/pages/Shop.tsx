import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Shop() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <span className="text-[10px] tracking-[3px] uppercase text-brand-label mb-4 block">E-Shop Atelier</span>
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.9] italic">
            Prêt à Porter <br /> Personnalisé
          </h1>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[#555] font-serif italic text-lg">
          L'élégance du sur-mesure dans une collection capsule personnalisable. Choisissez vos modifications signatures.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
        {PRODUCTS.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx % 2 * 0.2, duration: 1 }}
            className="group"
          >
            <Link to={`/shop/${product.id}`} className="block overflow-hidden mb-6 bg-brand-secondary aspect-[4/5]">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000"
              />
            </Link>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-brand-label mb-1 block">{product.category}</span>
                <h3 className="text-2xl font-serif italic">{product.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-lg font-serif italic block">€{product.price}</span>
                <Link to={`/shop/${product.id}`} className="text-[10px] uppercase tracking-widest border-b border-brand-ink pb-1 opacity-0 group-hover:opacity-100 transition-opacity">Personnaliser</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

