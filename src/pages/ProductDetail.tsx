import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { PRODUCTS } from '../data/products';

const MODIFICATIONS = [
  { id: 'sleeve-short', label: 'Short Sleeves', price: 0 },
  { id: 'sleeve-long', label: 'Long Sleeves', price: 150 },
  { id: 'length-mini', label: 'Mini Length', price: 0 },
  { id: 'length-midi', label: 'Midi Length', price: 100 },
  { id: 'neck-v', label: 'V-Neckline', price: 0 },
  { id: 'neck-high', label: 'High Neckline', price: 80 },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedMods, setSelectedMods] = useState<string[]>([]);
  
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="pt-32 text-center">Produit non trouvé</div>;

  const totalPrice = product.price + selectedMods.reduce((sum, modId) => {
    const mod = MODIFICATIONS.find(m => m.id === modId);
    return sum + (mod?.price || 0);
  }, 0);

  const relatedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 2);

  const toggleMod = (modId: string) => {
    setSelectedMods(prev => {
      if (prev.includes(modId)) return prev.filter(id => id !== modId);
      if (prev.length >= 2) return prev;
      return [...prev, modId];
    });
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id!,
      name: product.name,
      price: totalPrice,
      image: product.images[0],
      customizations: selectedMods.map(mid => MODIFICATIONS.find(m => m.id === mid)?.label || mid)
    });
  };

  return (
    <div className="pt-[70px] min-h-screen bg-brand-paper">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left: Sticky Image Gallery */}
        <div className="lg:w-3/5 h-[60vh] lg:h-[calc(100vh-70px)] bg-brand-secondary overflow-y-auto no-scrollbar scroll-smooth">
          {product.images.map((img, i) => (
            <div key={i} className="h-full w-full sticky top-0">
              <img 
                src={img} 
                alt={`${product.name} view ${i + 1}`} 
                className="w-full h-full object-cover grayscale-[0.1]"
              />
            </div>
          ))}
        </div>

        {/* Right: Product Interface */}
        <div className="lg:w-2/5 p-8 lg:p-16 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[10px] tracking-[3px] uppercase text-brand-label mb-2 block">Nouvelle Collection</span>
                <h1 className="text-4xl md:text-5xl font-serif italic mb-2">{product.name}</h1>
                <p className="text-sm text-brand-label">Prêt-à-porter Personnalisable</p>
              </div>
              <p className="text-2xl font-serif">€{totalPrice}</p>
            </div>

            <div className="space-y-12 mb-16">
              <p className="text-[#555] leading-relaxed font-light italic font-serif text-lg">
                {product.description}
              </p>

              {/* Customization Atelier Drawer */}
              <div className="bg-white border border-brand-border p-8 shadow-sm">
                <header className="flex justify-between items-center mb-8 border-b border-brand-secondary pb-4">
                  <h3 className="text-[11px] tracking-[2px] uppercase font-medium">Atelier Modifications</h3>
                  <span className="text-[10px] text-brand-label italic font-serif">(Max 2)</span>
                </header>

                <div className="space-y-6">
                  {MODIFICATIONS.map((mod) => {
                    const isSelected = selectedMods.includes(mod.id);
                    const isDisabled = !isSelected && selectedMods.length >= 2;
                    return (
                      <button
                        key={mod.id}
                        disabled={isDisabled}
                        onClick={() => toggleMod(mod.id)}
                        className={cn(
                          "w-full flex justify-between items-center py-2 transition-all group relative",
                          isDisabled ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-5 h-5 border border-brand-ink flex items-center justify-center transition-colors rounded-full",
                            isSelected ? "bg-brand-ink" : "bg-transparent"
                          )}>
                            {isSelected && <Check size={10} className="text-white" />}
                          </div>
                          <span className={cn(
                            "text-sm tracking-wide transition-colors",
                            isSelected ? "font-medium" : "text-[#555] font-light"
                          )}>{mod.label}</span>
                        </div>
                        <span className="text-[11px] text-brand-label">
                          {mod.price > 0 ? `+€${mod.price}` : 'Incl.'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10 pt-6 border-t border-brand-secondary flex justify-between items-center">
                  <span className="text-[10px] tracking-[2px] uppercase text-brand-label">Estimation</span>
                  <span className="text-xl font-serif italic text-brand-ink">€{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-brand-ink text-white py-5 text-[11px] uppercase tracking-[2px] font-medium hover:opacity-90 transition-opacity"
                >
                  Ajouter au Panier
                </button>
                <button className="border border-brand-ink text-brand-ink py-5 text-[11px] uppercase tracking-[2px] font-medium hover:bg-brand-ink hover:text-white transition-all">
                  Guide des Tailles
                </button>
              </div>
            </div>

            <div className="border-t border-brand-border pt-8 space-y-4">
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer text-[11px] uppercase tracking-widest py-2">
                  <span>Détails & Matières</span>
                  <Plus size={14} className="group-open:rotate-45 transition-transform" />
                </summary>
                <ul className="pt-4 pb-4 space-y-2 text-xs text-brand-label list-disc pl-4">
                  {product.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </details>
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer text-[11px] uppercase tracking-widest py-2">
                  <span>Livraison & Retours</span>
                  <Plus size={14} className="group-open:rotate-45 transition-transform" />
                </summary>
                <p className="pt-4 pb-4 text-xs text-brand-label leading-relaxed">
                  Livraison standard sous 3 mois pour les pièces personnalisées. Retours acceptés sous 14 jours pour les tailles standards sans modification.
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recommended Section */}
      <section className="bg-brand-paper py-32 px-6 md:px-12 border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <span className="text-[10px] tracking-[4px] uppercase text-brand-label mb-4 block">Suggestions</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-2">Vous Aimerez Aussi</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {relatedProducts.map((p) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/shop/${p.id}`} className="block overflow-hidden mb-8 aspect-[4/5] bg-brand-secondary">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </Link>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-brand-label mb-1 block">{p.category}</span>
                    <h3 className="text-2xl font-serif italic">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-serif italic block">€{p.price}</span>
                    <Link to={`/shop/${p.id}`} className="text-[10px] uppercase tracking-widest border-b border-brand-ink pb-1">Personnaliser</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
