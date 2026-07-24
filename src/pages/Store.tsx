import { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Trophy, Zap, Gift, ShoppingCart, CheckCircle2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('ranks');
  const { addToCart } = useCart();

  const ranks = [
    {
      id: 'vip',
      name: 'VIP',
      price: 20000,
      duration: 'Tháng',
      icon: <Star className="w-16 h-16 text-yellow-400" />,
      benefits: [
        'Chat có màu',
        '/hat',
        '/feed',
        '/workbench',
        '/ec',
        '5 Homes',
        'Maximum Jobs: 3',
        'Vào server đầy',
        'Phần thưởng hàng ngày cộng',
        'Giới hạn phòng đấu giá tốt hơn',
        'Prefix',
        'Màu nickname',
        '5 Auras',
        '2 Pets',
        '2 Mounts',
        '5 Hats',
        '2 Balloons'
      ]
    },
    {
      id: 'vip_plus',
      name: 'VIP+',
      price: 40000,
      duration: 'Tháng',
      icon: <Trophy className="w-16 h-16 text-blue-400" />,
      benefits: [
        'Tất cả trong VIP',
        '/craft',
        '/anvil',
        '/stonecutter',
        '/loom',
        '10 Homes',
        'Maximum Jobs: 4',
        'Phần thưởng đấu giá cộng',
        'Phần thưởng hàng ngày cộng',
        'Tiền Elite Mobs cộng',
        'BetterStructures loot cộng',
        'Prefix nâng cấp',
        '12 Auras',
        '5 Pets',
        '5 Mounts',
        '10 Hats',
        '5 Balloons',
        '3 Emotes'
      ]
    },
    {
      id: 'hero',
      name: 'HERO',
      price: 60000,
      duration: 'Tháng',
      icon: <Crown className="w-16 h-16 text-purple-400" />,
      benefits: [
        'Tất cả ở trên',
        '/back',
        '/cartographytable',
        '15 Homes',
        'Maximum Jobs: 5',
        'Phần thưởng đấu giá cộng',
        'Phần thưởng câu cá cộng',
        'Better BetterStructures Rewards',
        'Elite Mobs reward cộng',
        'Phần thưởng hàng ngày thêm',
        'Animated Gradient Prefix',
        '20 Auras',
        '10 Pets',
        '10 Mounts',
        '15 Hats',
        '8 Balloons',
        '10 Emotes',
        'Projectile Effects'
      ]
    },
    {
      id: 'legend',
      name: 'LEGEND',
      price: 80000,
      duration: 'Tháng',
      icon: <Zap className="w-16 h-16 text-orange-400" />,
      benefits: [
        'Tất cả ở trên',
        '/enderchest',
        '/smithingtable',
        '20 Homes',
        'Maximum Jobs: 6',
        'Phần thưởng câu cá tốt hơn',
        'Better Dungeon Rewards',
        'Nhiều chỗ phòng đấu giá hơn',
        'Quà trang trí hàng tháng',
        'Prefix cao cấp',
        'Hạt độc quyền',
        '35 Auras',
        '20 Pets',
        '20 Mounts',
        '25 Hats',
        '15 Balloons',
        'Animated Gadgets',
        'Projectile Effects',
        'Win Effects'
      ]
    },
    {
      id: 'emperor',
      name: 'EMPEROR',
      price: 100000,
      duration: 'Tháng',
      icon: <Crown className="w-16 h-16 text-red-500" />,
      benefits: [
        'Tất cả ở trên',
        '/grindstone',
        '/feed',
        '/heal (cooldown 10 phút)',
        '30 Homes',
        'Maximum Jobs: 7',
        'Chỗ phòng đấu giá tối đa',
        'Phần thưởng Elite Mobs cộng',
        'BetterStructures loot cộng',
        'Phần thưởng hàng ngày x2',
        'Trang trí độc quyền',
        'Prefix độc quyền',
        'Định dạng chat độc quyền',
        'Tên vàng',
        'Hỗ trợ ưu tiên',
        'Unlock ALL UltraCosmetics content',
        'All Auras',
        'All Pets',
        'All Mounts',
        'All Hats',
        'All Balloons',
        'All Gadgets',
        'All Emotes',
        'All Projectile Effects',
        'All Win Effects'
      ]
    }
  ];

  const bundles = [
    { id: 'vip_starter', name: 'Gói VIP Starter', price: 50000, duration: 'Vĩnh viễn' },
    { id: 'hero', name: 'Gói Hero', price: 150000, duration: 'Vĩnh viễn' },
    { id: 'emperor', name: 'Gói Emperor', price: 300000, duration: 'Vĩnh viễn' }
  ];

  const categories = [
    { id: 'ranks', name: 'Ranks', icon: <Crown className="w-5 h-5" /> },
    { id: 'crates', name: 'Crates', icon: <Gift className="w-5 h-5" /> },
    { id: 'coins', name: 'Coins', icon: <Zap className="w-5 h-5" /> },
    { id: 'cosmetics', name: 'Cosmetics', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'bundles', name: 'Bundles', icon: <Gift className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="pixel-font text-3xl md:text-4xl text-center text-gradient mb-4">
          CỬA HÀNG
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Nâng cấp trải nghiệm chơi game của bạn!
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeCategory === cat.id 
                  ? 'bg-gradient-purple-cyan text-white glow-purple' 
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Ranks */}
        {activeCategory === 'ranks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ranks.map((rank, index) => (
              <motion.div
                key={rank.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 hover:scale-105 transition-transform"
              >
                <div className="text-center mb-6">
                  {rank.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-white">{rank.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gradient">{rank.price.toLocaleString('vi-VN')}</span>
                  <span className="text-gray-400">đ/{rank.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {rank.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => addToCart(rank)}
                  className="w-full py-4 bg-gradient-purple-cyan rounded-xl font-bold text-white hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Thêm vào giỏ
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bundles */}
        {activeCategory === 'bundles' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 text-center"
              >
                <Gift className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">{bundle.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gradient">{bundle.price.toLocaleString('vi-VN')}</span>
                  <span className="text-gray-400">đ</span>
                  <p className="text-sm text-gray-400">{bundle.duration}</p>
                </div>
                <button
                  onClick={() => addToCart(bundle)}
                  className="w-full py-4 bg-gradient-purple-cyan rounded-xl font-bold text-white"
                >
                  Mua ngay
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Coming Soon Categories */}
        {['crates', 'coins', 'cosmetics'].includes(activeCategory) && (
          <div className="text-center py-20">
            <Gift className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h3 className="pixel-font text-2xl text-gray-500">SẮP RA MẮT</h3>
          </div>
        )}
      </div>
    </div>
  );
}
