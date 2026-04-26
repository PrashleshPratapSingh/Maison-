import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import CartSidebar from '../cart/CartSidebar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-paper/80 backdrop-blur-md border-b border-brand-border h-[70px] flex items-center px-10">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[1.5px] font-medium">
            <Link to="/" className="hover:opacity-60 transition-opacity">Accueil</Link>
            <Link to="/couture" className="hover:opacity-60 transition-opacity">Sur Mesure</Link>
            <Link to="/rentals" className="hover:opacity-60 transition-opacity">Location</Link>
          </div>

          {/* Center Logo */}
          <Link to="/" className="text-2xl font-serif tracking-[4px] uppercase text-center absolute left-1/2 -translate-x-1/2">
            Maison Dentelle
          </Link>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[1.5px] font-medium">
            <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop RTW</Link>
            <Link to="/blog" className="hover:opacity-60 transition-opacity">Journal</Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="hover:opacity-60 transition-opacity flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              <span>Panier ({cart.length})</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden ml-auto">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-brand-ink rounded-full" />
              )}
            </button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed inset-0 top-[70px] bg-brand-paper p-10 flex flex-col gap-6 text-[11px] uppercase tracking-widest font-medium z-40 border-t border-brand-border h-fit shadow-lg"
            >
              <Link onClick={() => setIsOpen(false)} to="/">Accueil</Link>
              <Link onClick={() => setIsOpen(false)} to="/couture">Sur Mesure</Link>
              <Link onClick={() => setIsOpen(false)} to="/rentals">Location</Link>
              <Link onClick={() => setIsOpen(false)} to="/shop">Shop ({cart.length})</Link>
              <Link onClick={() => setIsOpen(false)} to="/blog">Journal</Link>
              <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

