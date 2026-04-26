import { motion } from 'motion/react';
import { Mail, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <header className="mb-24">
        <span className="text-[10px] tracking-[4px] uppercase text-brand-label mb-4 block">Nous Contacter</span>
        <h1 className="text-6xl md:text-8xl font-serif italic font-light leading-tight">
          Showroom <br /> sur RDV
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div>
            <h3 className="text-[10px] tracking-[2px] uppercase text-brand-label mb-6 flex items-center gap-3">
              <MapPin size={14} strokeWidth={1.5} />
              Adresse
            </h3>
            <p className="text-xl font-serif italic">
              5 rue de la Poste <br />
              57100 THIONVILLE
            </p>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[2px] uppercase text-brand-label mb-6 flex items-center gap-3">
              <Mail size={14} strokeWidth={1.5} />
              Email
            </h3>
            <a href="mailto:info.maisondentelle@gmail.com" className="text-xl font-serif italic hover:opacity-60 transition-opacity">
              info.maisondentelle@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[2px] uppercase text-brand-label mb-6 flex items-center gap-3">
              <Instagram size={14} strokeWidth={1.5} />
              Social
            </h3>
            <a href="https://instagram.com/maisondentelle_" target="_blank" rel="noopener noreferrer" className="text-xl font-serif italic hover:opacity-60 transition-opacity">
              @maisondentelle_
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-secondary p-12 md:p-20 relative overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200" 
            alt="Atelier"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-[3s]"
          />
          <div className="relative">
             <h2 className="text-3xl font-serif italic mb-8">Votre rendez-vous</h2>
             <p className="text-sm text-[#555] leading-relaxed mb-12">
               Nous vous accueillons dans notre showroom de Thionville pour une consultation privée et personnalisée. 
               Délais de création estimés : 3 mois.
             </p>
             <a 
               href="https://www.maisondentelle.com/book-online" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block w-full text-center bg-brand-ink text-white py-5 text-[11px] uppercase tracking-[2px] font-medium hover:opacity-90 transition-opacity"
             >
               Réserver en ligne
             </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
