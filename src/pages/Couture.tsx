import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const COUTURE_WORKS = [
  {
    id: 1,
    title: 'La Muse Collection',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200',
    description: 'Une exploration de la fluidité et du mouvement, utilisant des soies italiennes et de la dentelle de Chantilly.'
  },
  {
    id: 2,
    title: 'Héritage Floral',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=1200',
    description: 'Une ode aux jardins de Provence, avec des broderies faites à la main et des appliques de fleurs en soie.'
  }
];

export default function Couture() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-48">
        <span className="text-[10px] tracking-[4px] uppercase text-brand-label mb-6 block">L'Atelier Sur Mesure</span>
        <h1 className="text-7xl md:text-[10rem] font-serif font-light leading-none mb-16 italic">
          L'Ame du <br /> Savoir-Faire
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-16 items-start">
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl font-serif leading-relaxed italic text-brand-ink mb-8">
              "Chaque robe est une histoire, un dialogue suspendu entre la matière et le rêve."
            </p>
            <p className="text-sm leading-relaxed text-[#555] font-light">
              Notre processus de création sur mesure est un voyage collaboratif. De l'esquisse initiale au dernier point de couture, nous façonnons une pièce unique qui transcende le temps. À Thionville, notre atelier perpétue l'excellence de la haute couture française avec modernité.
            </p>
          </div>
          <a 
            href="https://www.maisondentelle.com/book-online" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[11px] tracking-[3px] uppercase font-medium border border-brand-ink px-16 py-8 hover:bg-brand-ink hover:text-white transition-all duration-500"
          >
            Réserver une Consultation
          </a>
        </div>
      </header>

      <div className="space-y-64">
        {COUTURE_WORKS.map((work, idx) => (
          <motion.div 
            key={work.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className={cn(
              "flex flex-col gap-12",
              idx % 2 === 1 ? "md:items-end" : "md:items-start"
            )}
          >
            <div className="w-full md:w-3/4 aspect-[4/5] overflow-hidden grayscale opacity-90 hover:grayscale-0 transition-all duration-[3s]">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[5s]"
              />
            </div>
            <div className="max-w-md">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-4xl font-serif italic">{work.title}</h3>
                <span className="text-[10px] font-medium tracking-widest text-brand-label">{work.year}</span>
              </div>
              <p className="text-sm text-brand-label leading-relaxed font-light font-serif italic">
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-64 py-40 border-t border-brand-border text-center">
        <span className="text-[10px] tracking-[4px] uppercase text-brand-label mb-8 block">Prochaine étape</span>
        <h2 className="text-5xl md:text-7xl font-serif italic mb-12 font-light">Votre Voyage de Mariée</h2>
        <p className="max-w-2xl mx-auto text-lg text-[#555] font-serif italic leading-relaxed mb-16">
          Nous vous accueillons dans notre showroom privé à Thionville pour donner vie à votre vision. Les délais de confection sont de 3 à 6 mois.
        </p>
        <button className="text-[11px] tracking-[4px] uppercase font-medium border-b border-brand-ink pb-2 hover:opacity-60 transition-opacity">
          Découvrir le Processus &rarr;
        </button>
      </section>
    </div>
  );
}

