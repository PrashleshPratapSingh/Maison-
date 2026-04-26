import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Couture from './pages/Couture';
import Rentals from './pages/Rentals';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="relative min-h-screen selection:bg-brand-ink selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/couture" element={<Couture />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}
