import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-paper border-t border-brand-border pt-32 pb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-[4px] uppercase block mb-8">
              Maison Dentelle
            </Link>
            <p className="text-sm text-[#555] font-serif italic mb-8 leading-relaxed">
              L'art du sur-mesure et de l'élégance responsable au cœur du Grand Est. 
              Chaque creation est une invitation au voyage.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com/maisondentelle_" target="_blank" rel="noopener noreferrer" className="text-brand-ink hover:opacity-50 transition-opacity">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:info.maisondentelle@gmail.com" className="text-brand-ink hover:opacity-50 transition-opacity">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase font-medium mb-10 text-brand-label">Exploration</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-medium">
              <li><Link to="/shop" className="hover:opacity-60 transition-opacity">E-Shop Atelier</Link></li>
              <li><Link to="/couture" className="hover:opacity-60 transition-opacity">Sur Mesure</Link></li>
              <li><Link to="/rentals" className="hover:opacity-60 transition-opacity">Location Premium</Link></li>
              <li><Link to="/blog" className="hover:opacity-60 transition-opacity">Le Journal</Link></li>
            </ul>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase font-medium mb-10 text-brand-label">Showroom</h4>
            <div className="space-y-6 text-sm">
              <div className="flex gap-3 text-[#555]">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <p>5 rue de la Poste,<br />57100 THIONVILLE</p>
              </div>
              <div className="flex gap-3 text-[#555]">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <p>Sur Rendez-vous uniquement</p>
              </div>
              <a href="mailto:info.maisondentelle@gmail.com" className="flex gap-3 text-brand-ink italic font-serif group">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span className="group-hover:opacity-60 transition-opacity">info.maisondentelle@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase font-medium mb-10 text-brand-label">Newsletter</h4>
            <p className="text-xs text-[#555] mb-6 font-serif italic">Recevez nos inspirations et invitations aux ventes privées.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full bg-transparent border-b border-brand-ink/20 py-3 text-xs focus:outline-none focus:border-brand-ink transition-colors font-serif italic"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest font-medium hover:opacity-50 transition-opacity">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-[10px] tracking-[2px] uppercase opacity-40">
            © 2026 Maison Dentelle — Haute Couture & Prêt-à-porter
          </span>
          <div className="flex gap-12 text-[10px] tracking-[2px] uppercase opacity-40 font-medium">
            <Link to="#" className="hover:opacity-100 transition-opacity">Mentions Légales</Link>
            <Link to="#" className="hover:opacity-100 transition-opacity">CGV</Link>
            <Link to="#" className="hover:opacity-100 transition-opacity">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
