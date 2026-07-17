import { motion } from 'framer-motion';
import { Monitor, Smartphone } from 'lucide-react';
import Card from './Card';
import Section from './Section';

export default function JavaBedrock() {
  return (
    <Section id="platforms" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Hỗ Trợ Java & Bedrock</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Chơi từ bất kỳ thiết bị nào - chúng tôi hỗ trợ cả hai phiên bản!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="text-center group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Monitor className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h3 className="text-3xl font-bold mb-3">Phiên Bản Java</h3>
          <p className="text-gray-400 text-lg">
            Chơi trên PC với mod đầy đủ, skin tùy chỉnh và tất cả các tính năng
          </p>
        </Card>

        <Card className="text-center group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Smartphone className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h3 className="text-3xl font-bold mb-3">Phiên Bản Bedrock</h3>
          <p className="text-gray-400 text-lg">
            Chơi trên di động, console và Windows 10/11 với crossplay
          </p>
        </Card>
      </div>
    </Section>
  );
}
