import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from './Button';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const copyIP = () => {
    navigator.clipboard.writeText('breadmc.site');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Ambient light blobs with parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{
          x: mousePosition.x * -0.5,
          y: mousePosition.y * -0.5,
        }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Fog effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">🔥 BREADMC • MÁY CHỦ MINECRAFT VIỆT NAM</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-gradient">Trải Nghiệm</span>
          <br />
          <span className="text-white">Minecraft Cao Cấp</span>
          <br />
          <span className="text-gradient">Của Bạn</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gia nhập cộng đồng BREADMC để trải nghiệm máy chủ Minecraft sinh tồn hiện đại dành cho người chơi Việt Nam.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button size="lg" href="#join">
            Vào Chơi Ngay
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="secondary" onClick={copyIP}>
            {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
            {copied ? 'Đã Sao Chép!' : 'Sao Chép IP'}
          </Button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass rounded-xl p-6 text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">99.9%</div>
            <div className="text-gray-400 text-sm">Thời Gian Hoạt Động</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">40</div>
            <div className="text-gray-400 text-sm">Người Chơi Online</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">&lt;20ms</div>
            <div className="text-gray-400 text-sm">Độ Trễ Trung Bình</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
