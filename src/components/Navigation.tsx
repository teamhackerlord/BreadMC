import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Store, Newspaper, Search, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const location = useLocation();
  const { cart } = useCart();

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: <Home className="w-5 h-5" /> },
    { path: '/store', label: 'Cửa hàng', icon: <Store className="w-5 h-5" /> },
    { path: '/news', label: 'Tin tức', icon: <Newspaper className="w-5 h-5" /> },
    { path: '/lookup', label: 'Tra cứu', icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Crown className="w-8 h-8 text-gradient" />
          <span className="text-2xl font-black text-gradient pixel-font">BREADMC</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                location.pathname === item.path
                  ? 'bg-gradient-purple-cyan text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <Link to="/cart" className="relative">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl hover:bg-white/10 transition-all">
            <ShoppingCart className="w-5 h-5 text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full text-xs font-bold flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </motion.nav>
  );
}
