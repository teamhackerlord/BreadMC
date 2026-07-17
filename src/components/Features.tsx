import { motion } from 'framer-motion';
import { 
  Sword, 
  Coins, 
  Gavel, 
  Gem, 
  Skull, 
  MapPin, 
  Castle, 
  Heart, 
  PartyPopper, 
  Trophy, 
  Gift, 
  Store 
} from 'lucide-react';
import Card from './Card';
import Section from './Section';

const features = [
  {
    icon: Sword,
    title: 'PvP Tùy Chỉnh',
    description: 'Hệ thống PvP được cân bằng với bộ kit và đấu trường riêng.',
  },
  {
    icon: Coins,
    title: 'Kinh Tế',
    description: 'Kinh tế trong game đầy tính năng với công việc, cửa hàng và giao dịch.',
  },
  {
    icon: Gavel,
    title: 'Chợ Đấu Giá',
    description: 'Mua bán vật phẩm với người chơi khác tại chợ đấu giá toàn cầu.',
  },
  {
    icon: Gem,
    title: 'Cửa Hàng Mảnh Shard',
    description: 'Kiếm mảnh shard và đổi chúng lấy phần thưởng và trang phục độc quyền.',
  },
  {
    icon: Skull,
    title: 'Boss Đặc Biệt',
    description: 'Đối đầu những boss tùy chỉnh mạnh mẽ với drop và cơ chế riêng.',
  },
  {
    icon: MapPin,
    title: 'Hơn 150 Công Trình',
    description: 'Khám phá thế giới đầy hầm ngục, làng và địa danh tùy chỉnh.',
  },
  {
    icon: Castle,
    title: 'Hầm Ngục Tùy Chỉnh',
    description: 'Thách thức bản thân trong những hầm ngục được làm thủ công với loot tuyệt vời.',
  },
  {
    icon: Heart,
    title: 'Lifesteal',
    description: 'Cơ chế hút máu độc đáo tạo thêm chiều sâu cho lối chơi sinh tồn.',
  },
  {
    icon: PartyPopper,
    title: 'Sự Kiện',
    description: 'Sự kiện máy chủ thường xuyên với phần thưởng đặc biệt và hoạt động vui vẻ.',
  },
  {
    icon: Trophy,
    title: 'KOTH',
    description: 'Cuộc thi King of the Hill để giành vinh quang và phần thưởng độc quyền.',
  },
  {
    icon: Gift,
    title: 'Điểm Danh Hằng Ngày',
    description: 'Nhận phần thưởng đăng nhập hàng ngày và xây dựng tài sản của mình theo thời gian.',
  },
  {
    icon: Store,
    title: 'Cửa Hàng Người Chơi',
    description: 'Tạo cửa hàng riêng của bạn và trở thành người chơi giàu nhất máy chủ.',
  },
];

export default function Features() {
  return (
    <Section id="features" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Tính Năng Nổi Bật</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Mọi thứ bạn cần cho một trải nghiệm Minecraft hoàn hảo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <feature.icon className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
