import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-gradient">BREADMC</span>
        </div>
        
        <motion.div
          className="flex items-center gap-2 glass px-4 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Crown className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-gray-300">
            Owner: <span className="text-primary font-bold">BOCW</span>
            <span className="text-gray-500 mx-1">•</span>
            <span className="text-gray-400">King of code</span>
          </span>
        </motion.div>
      </div>
    </motion.nav>
  );
}
