import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function SecretEasterEgg() {
  const [active, setActive] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.key].slice(-KONAMI_CODE.length);
      setKeySequence(newSequence);

      if (JSON.stringify(newSequence) === JSON.stringify(KONAMI_CODE)) {
        setActive(true);
        setTimeout(() => setActive(false), 10000);
        setKeySequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[99999] bg-black/95 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Floating hearts */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: -50,
                opacity: [0, 1, 0],
                x: [null, Math.random() * 100 - 50, null],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
              className="absolute"
            >
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </motion.div>
          ))}

          {/* Main content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative z-10 text-center px-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Heart className="w-24 h-24 text-primary fill-primary mx-auto" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-gradient mb-6">
              For Tiên ❤️
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              If you're reading this...
              <br />
              you've just discovered the most important person hidden inside this website.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
