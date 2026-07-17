import { motion } from 'framer-motion';
import { Globe, Zap, Users } from 'lucide-react';
import Card from './Card';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Giới Thiệu BREADMC</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Trải nghiệm Minecraft cao cấp được thiết kế cho những người chơi đòi hỏi tốt nhất
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Globe className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3">Hạ Tầng Chất Lượng Cao</h3>
          <p className="text-gray-400">
            Được lưu trữ trên hạ tầng cao cấp với độ trễ thấp cho người chơi toàn cầu
          </p>
        </Card>

        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Zap className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3">Hiệu Năng Ổn Định</h3>
          <p className="text-gray-400">
            Máy chủ được tối ưu với 20 TPS và độ trễ tối thiểu cho trải nghiệm tốt nhất
          </p>
        </Card>

        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Users className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3">Cộng Đồng Thân Thiện</h3>
          <p className="text-gray-400">
            Gia nhập hàng ngàn người chơi trong cộng đồng thân thiện và năng động của chúng tôi
          </p>
        </Card>
      </div>
    </Section>
  );
}
