import { motion, useInView } from 'framer-motion';
import { Server, Users, Clock, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import Section from './Section';

const AnimatedCounter = ({ target, suffix }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span>{count}{suffix}</span>
  );
};

const stats = [
  { icon: Users, label: 'Người Chơi Online', target: 40, suffix: '' },
  { icon: Clock, label: 'Độ Trễ', target: 18, suffix: 'ms' },
  { icon: Server, label: 'Thời Gian Hoạt Động', target: 99.9, suffix: '%' },
  { icon: Globe, label: 'Phiên Bản Máy Chủ', value: '1.21+', suffix: '' },
];

export default function Stats() {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText('breadmc.site');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="stats" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Thống Kê Máy Chủ</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Thống kê máy chủ thời gian thực từ hạ tầng hiệu suất cao của chúng tôi
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="mb-4 inline-block"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto" />
            </motion.div>
            <div className="text-4xl md:text-5xl font-black mb-2 group-hover:text-gradient transition-all">
              {stat.value !== undefined ? stat.value : <AnimatedCounter target={stat.target} suffix={stat.suffix} />}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>

      {/* Server IP Card */}
      <motion.div
        className="mt-12 glass-strong rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-gray-400 mb-4 uppercase tracking-wider text-sm">
          Địa Chỉ Máy Chủ
        </div>
        <motion.div 
          className="text-3xl md:text-4xl font-mono font-bold text-white mb-4 glow-red inline-block px-6 py-3 rounded-xl bg-surface border border-border cursor-pointer hover:border-primary transition-colors"
          onClick={copyIP}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? 'Đã Sao Chép!' : 'breadmc.site'}
        </motion.div>
        <div className="text-gray-500 text-sm">
          Nhấn để sao chép • Hỗ trợ Java & Bedrock
        </div>
      </motion.div>
    </Section>
  );
}
