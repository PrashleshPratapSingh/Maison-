import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const STORIES = [
  {
    id: 1,
    title: 'The Art of French Lace',
    excerpt: 'Exploring the heritage of Calais-Caudry lace and its place in modern bridal silhouettes.',
    image: 'https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=1200',
    category: 'Savoir-Faire'
  },
  {
    id: 2,
    title: 'Summer in Avignon',
    excerpt: 'Our latest bridal editorial captured in the sun-drenched gardens of Provence.',
    image: 'https://images.unsplash.com/photo-1594633309242-425056774630?auto=format&fit=crop&q=80&w=1200',
    category: 'Editorial'
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-24 text-center max-w-2xl mx-auto">
        <span className="text-[10px] tracking-[0.4em] uppercase font-medium opacity-60 mb-4 block">Journal</span>
        <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8">
          The <br /> Journal
        </h1>
        <p className="text-sm leading-relaxed opacity-60 italic font-serif text-lg">
          Stories of craftsmanship, inspiration, and the women of Maison Dentelle.
        </p>
      </header>

      <div className="space-y-48">
        {STORIES.map((story, idx) => (
          <motion.article 
            key={story.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex flex-col md:flex-row gap-12 md:gap-24 items-center",
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            )}
          >
            <div className="flex-1 w-full overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full aspect-video md:aspect-[3/4] object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            <div className="flex-1 max-w-md">
              <span className="text-[10px] tracking-widest uppercase opacity-40 mb-4 block">{story.category}</span>
              <h2 className="text-4xl font-serif mb-6 leading-tight">{story.title}</h2>
              <p className="text-sm leading-relaxed opacity-60 mb-8">{story.excerpt}</p>
              <button className="text-[10px] tracking-[0.3em] uppercase font-medium border-b border-brand-ink pb-2 hover:opacity-60 transition-opacity">
                Read Story
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
