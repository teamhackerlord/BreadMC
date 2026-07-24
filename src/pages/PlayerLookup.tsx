import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, Crown, History, Gift } from 'lucide-react';

export default function PlayerLookup() {
  const [username, setUsername] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="pixel-font text-3xl md:text-4xl text-center text-gradient mb-8">
          TRA CỨU NGƯỜI CHƠI
        </h1>

        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên Minecraft..."
              className="w-full px-6 py-4 glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-purple-cyan rounded-xl font-bold text-white"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-700">
              <div className="w-24 h-24 bg-gradient-purple-cyan rounded-2xl flex items-center justify-center">
                <User className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{username}</h2>
                <p className="text-gray-400">Thành viên từ: 01/01/2024</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Current Rank */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-primary" />
                  Rank hiện tại
                </h3>
                <div className="glass-strong rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gradient">VIP+</p>
                      <p className="text-gray-400">Hết hạn: 31/12/2024</p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-purple-cyan rounded-xl flex items-center justify-center">
                      <Crown className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase History */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <History className="w-6 h-6 text-secondary" />
                  Lịch sử mua hàng
                </h3>
                <div className="space-y-3">
                  {[
                    { item: 'VIP+ Tháng', date: '01/11/2024', price: 40000 },
                    { item: 'VIP Tháng', date: '01/10/2024', price: 20000 },
                  ].map((purchase, i) => (
                    <div key={i} className="glass-strong rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">{purchase.item}</p>
                        <p className="text-gray-500 text-sm">{purchase.date}</p>
                      </div>
                      <p className="text-primary font-bold">{purchase.price.toLocaleString('vi-VN')}đ</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Owned Cosmetics */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-primary" />
                  Trang trí đã sở hữu
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {['Gói trang trí I', 'Gói trang trí II', 'Hạt đỏ'].map((cosmetic, i) => (
                    <div key={i} className="glass-strong rounded-xl p-4 text-center text-gray-300">
                      {cosmetic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
