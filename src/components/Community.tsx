import { motion } from 'framer-motion';
import { MessageCircle, Music, Share2, Video } from 'lucide-react';
import Card from './Card';
import Section from './Section';

const socialLinks = [
  { icon: MessageCircle, name: 'Discord', color: 'hover:text-[#5865F2]' },
  { icon: Music, name: 'TikTok', color: 'hover:text-[#00F2EA]' },
  { icon: Share2, name: 'Facebook', color: 'hover:text-[#1877F2]' },
  { icon: Video, name: 'YouTube', color: 'hover:text-[#FF0000]' },
];

export default function Community() {
  return (
    <Section id="community" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Cộng Đồng</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Gia nhập cộng đồng của chúng tôi trên tất cả các nền tảng
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialLinks.map((social, index) => (
          <Card key={index} className="text-center group cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <social.icon className={`w-10 h-10 mx-auto text-gray-400 transition-colors ${social.color}`} />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{social.name}</h3>
            <div className="text-primary font-semibold">Tham Gia Ngay</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
