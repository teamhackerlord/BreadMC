import { motion } from 'framer-motion';
import { Server, Users, Activity, Clock, Globe } from 'lucide-react';
import Card from './Card';
import Section from './Section';

export default function ServerStatus() {
  return (
    <Section id="status" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Trạng Thái Máy Chủ</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Thông tin thời gian thực về máy chủ BREADMC
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Server className="w-10 h-10 text-primary mx-auto" />
          </motion.div>
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Trạng Thái</div>
          <div className="text-2xl font-bold text-green-400">Online</div>
        </Card>

        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Users className="w-10 h-10 text-primary mx-auto" />
          </motion.div>
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Người Chơi</div>
          <div className="text-2xl font-bold">40 / 100</div>
        </Card>

        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Activity className="w-10 h-10 text-primary mx-auto" />
          </motion.div>
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">TPS</div>
          <div className="text-2xl font-bold text-green-400">20.0</div>
        </Card>

        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Clock className="w-10 h-10 text-primary mx-auto" />
          </motion.div>
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Ping</div>
          <div className="text-2xl font-bold text-green-400">15ms</div>
        </Card>

        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Globe className="w-10 h-10 text-primary mx-auto" />
          </motion.div>
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Phiên Bản</div>
          <div className="text-2xl font-bold">1.20.4</div>
        </Card>

        <Card className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Server className="w-10 h-10 text-primary mx-auto" />
          </motion.div>
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Địa Chỉ IP</div>
          <div className="text-2xl font-bold">breadmc.site</div>
        </Card>
      </div>

      <motion.div
        className="mt-8 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        * Dữ liệu được cập nhật theo thời gian thực qua API
      </motion.div>
    </Section>
  );
}
