import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative pt-[70px]">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-brand-secondary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=2000" 
            alt="Maison Dentelle Atelier" 
            className="w-full h-full object-cover grayscale opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-paper/40" />
        </motion.div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] tracking-[4px] uppercase text-brand-label mb-6"
          >
            Haute Couture & Prêt-à-porter
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl font-serif italic font-light mb-12"
          >
            Maison Dentelle
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link to="/shop" className="bg-brand-ink text-white px-12 py-5 text-[11px] uppercase tracking-[2px] font-medium hover:opacity-90 transition-opacity">
              Découvrir la Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-32 px-6 md:px-20 max-w-5xl mx-auto text-center border-b border-brand-border">
        <span className="text-[10px] tracking-[2px] uppercase text-brand-label mb-8 block">Notre Histoire</span>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-12 font-light leading-tight">
          "C'est en cherchant ma robe que j'ai trouvé ma voie."
        </h2>
        <p className="text-lg text-[#555] font-serif leading-relaxed mb-12 max-w-2xl mx-auto italic">
          Maison Dentelle est née de l'envie de créer un lieu où les mariées trouvent enfin une robe à leur image, sans compromis sur le style, la qualité et en respectant leurs budgets.
        </p>
        <div className="w-[1px] h-24 bg-brand-border mx-auto" />
      </section>

      {/* Core Pillars */}
      <section className="flex flex-col md:flex-row border-b border-brand-border h-fit md:h-[600px]">
        {/* Sur Mesure */}
        <div className="flex-1 border-r border-brand-border group relative overflow-hidden flex flex-col p-12 md:p-16">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[2px] text-brand-label mb-4 block">Unique</span>
            <h3 className="text-3xl font-serif italic mb-6">Confection Sur Mesure</h3>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs mb-8">
              Chaque rêve mérite sa robe. Nous créons pour vous l'exceptionnel, une pièce unique façonnée à vos mesures.
            </p>
            <Link to="/couture" className="text-[11px] uppercase border-b border-brand-ink pb-1 font-medium hover:opacity-60 transition-opacity inline-block">
              Prendre RDV
            </Link>
          </div>
          <div className="mt-8 h-48 md:h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
             <img src="https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>

        {/* Location */}
        <div className="flex-1 border-r border-brand-border group relative overflow-hidden flex flex-col p-12 md:p-16 bg-brand-secondary">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[2px] text-brand-label mb-4 block">Archives</span>
            <h3 className="text-3xl font-serif italic mb-6">Location</h3>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs mb-8">
              Accédez à nos créations iconiques pour vos moments précieux. L'élégance responsable pour mariées et invitées.
            </p>
            <Link to="/rentals" className="text-[11px] uppercase border-b border-brand-ink pb-1 font-medium hover:opacity-60 transition-opacity inline-block">
              Voir le Catalogue
            </Link>
          </div>
          <div className="mt-8 h-48 md:h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
             <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>

        {/* RTW */}
        <div className="flex-1 group relative overflow-hidden flex flex-col p-12 md:p-16">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[2px] text-brand-label mb-4 block">E-Shop</span>
            <h3 className="text-3xl font-serif italic mb-6">Prêt-à-porter</h3>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs mb-8">
              Une collection moderne et personnalisable. Choisissez vos modifications pour une robe qui vous ressemble.
            </p>
            <Link to="/shop" className="text-[11px] uppercase border-b border-brand-ink pb-1 font-medium hover:opacity-60 transition-opacity inline-block">
              Shop Now
            </Link>
          </div>
          <div className="mt-8 h-48 md:h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
             <img src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* Pillars Section has been removed as per request */}
    </div>
  );
}

