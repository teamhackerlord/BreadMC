import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Store from './pages/Store';
import CartPage from './pages/Cart';
import PlayerLookup from './pages/PlayerLookup';
import Admin from './pages/Admin';
import News from './pages/News';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import MagneticParticles from './components/MagneticParticles';
import MouseEffects from './components/MouseEffects';
import SecretEasterEgg from './components/SecretEasterEgg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <AnimatePresence>
            {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
          </AnimatePresence>
          <MagneticParticles />
          <div className="noise-overlay" />
          <MouseEffects />
          <SecretEasterEgg />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/lookup" element={<PlayerLookup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/news" element={<News />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
