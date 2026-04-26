import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-paper shadow-2xl z-[101] flex flex-col"
          >
            <header className="p-8 border-b border-brand-border flex justify-between items-center bg-brand-paper sticky top-0">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <h2 className="text-[11px] tracking-[4px] uppercase font-medium">Votre Panier ({cart.length})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:opacity-50 transition-opacity">
                <X size={20} strokeWidth={1.5} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                  <div className="w-16 h-16 border border-brand-ink rounded-full flex items-center justify-center">
                    <ShoppingBag size={24} strokeWidth={1} />
                  </div>
                  <p className="text-xs uppercase tracking-widest">Le panier est vide</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-24 aspect-[3/4] bg-brand-secondary overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.2]" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-serif italic text-brand-ink">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(idx)}
                            className="p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-900"
                          >
                            <Trash2 size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                        {item.customizations.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {item.customizations.map((mod, i) => (
                              <span key={i} className="text-[9px] uppercase tracking-wider bg-brand-secondary px-2 py-0.5 text-brand-label">
                                {mod}
                              </span>
                            ))}
                          </div>
                        )}
                        <span className="text-[10px] text-brand-label block italic font-serif">Livraison estimée : 3 mois</span>
                      </div>
                      <p className="text-lg font-serif italic font-medium">€{item.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <footer className="p-8 border-t border-brand-border bg-white space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] tracking-[4px] uppercase font-medium">Sous-total</span>
                  <span className="text-2xl font-serif italic">€{total.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-brand-label leading-relaxed italic text-center">
                  Livraison gratuite vers la France. Taxes incluses.
                </p>
                <button className="w-full bg-brand-ink text-white py-5 text-[11px] uppercase tracking-[4px] font-medium hover:opacity-90 transition-opacity">
                  Procéder au Paiement
                </button>
              </footer>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
