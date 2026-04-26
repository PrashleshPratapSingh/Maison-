import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const RENTAL_CATEGORIES = [
  {
    id: 'bridals',
    title: 'Archive Mariée',
    description: 'Une sélection curatée de pièces héritage et de silhouettes contemporaines pour votre grand jour.',
    image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ball',
    title: 'Bals & Occasions',
    description: "L'élégance du sur-mesure disponible pour vos soirées les plus mémorables.",
    image: 'https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'heritage',
    title: 'Série Limitée',
    description: 'Pièces de collection uniques issues de nos archives de défilés.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Rentals() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <header className="mb-32">
        <span className="text-[10px] tracking-[4px] uppercase text-brand-label mb-6 block">Le Vestiaire Ethique</span>
        <h1 className="text-7xl md:text-[8rem] font-serif font-light leading-none mb-12 italic">
          La Location <br /> d'Exception
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-12 items-end">
          <p className="max-w-md text-sm leading-relaxed text-[#555] font-light">
            Maison Dentelle vous propose une alternative responsable et chic : louez la robe de vos rêves. Notre service de location premium permet d'accéder à l'excellence artisanale pour un instant suspendu.
          </p>
          <button className="text-[11px] tracking-widest uppercase font-medium border border-brand-ink px-12 py-6 hover:bg-brand-ink hover:text-white transition-all">
            Consulter les Disponibilités
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {RENTAL_CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden bg-brand-secondary mb-8 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
              />
            </div>
            <h3 className="text-3xl font-serif italic mb-4">{cat.title}</h3>
            <p className="text-sm text-brand-label leading-relaxed mb-8 italic font-serif opacity-80">
              {cat.description}
            </p>
            <button className="text-[10px] tracking-widest uppercase font-medium border-b border-brand-ink pb-2 hover:opacity-60 transition-opacity">
              Explorer l'Archive &rarr;
            </button>
          </motion.div>
        ))}
      </div>

      <section className="mt-64 bg-brand-secondary p-12 md:p-32 text-center border border-brand-border">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Un Service Attentionné</h2>
        <p className="max-w-xl mx-auto text-sm text-[#555] font-light leading-relaxed mb-12">
          Toutes nos pièces en location bénéficient d'un entretien haute couture et de retouches mineures pour un ajustement parfait.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-[11px] uppercase tracking-widest font-medium">
           <span className="flex items-center gap-2">✨ Nettoyage Inclus</span>
           <span className="flex items-center gap-2">🪡 Ajustements Légers</span>
           <span className="flex items-center gap-2">📦 Livraison Rapide</span>
        </div>
      </section>
    </div>
  );
}

