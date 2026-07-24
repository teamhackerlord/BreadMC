import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2, Users, Zap, Clock, Shield, Coins, Sword, Skull, Gift, Users2, Anchor, Fish, Trophy, Crown, Disc, Heart, MapPin, Home as HomeIcon, Star, X, Copy, CheckCircle2, WifiOff, Wifi } from 'lucide-react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Mock server status
  const serverStatus = {
    online: true,
    players: 87,
    maxPlayers: 200,
    tps: 20
  };

  const features = [
    { icon: <Coins className="w-8 h-8 text-primary" />, title: "Kinh tế", desc: "Hệ thống kinh tế hoàn chỉnh với tiền tệ riêng" },
    { icon: <Users2 className="w-8 h-8 text-primary" />, title: "Nghề nghiệp", desc: "Nhiều nghề nghiệp để lựa chọn và phát triển" },
    { icon: <Skull className="w-8 h-8 text-primary" />, title: "Dungeon", desc: "Những dungeon hiểm trở với phần thưởng hấp dẫn" },
    { icon: <Anchor className="w-8 h-8 text-primary" />, title: "Phòng đấu giá", desc: "Mua bán items với người chơi khác" },
    { icon: <Gift className="w-8 h-8 text-primary" />, title: "Phần thưởng hàng ngày", desc: "Nhận phần thưởng mỗi khi đăng nhập" },
    { icon: <Star className="w-8 h-8 text-primary" />, title: "BetterStructures", desc: "Những công trình độc đáo và thú vị" },
    { icon: <Sword className="w-8 h-8 text-primary" />, title: "PvP Arena", desc: "Thỏa sức thể hiện kỹ năng chiến đấu" },
    { icon: <Disc className="w-8 h-8 text-primary" />, title: "Voice Chat", desc: "Giọng nói trong game với proximity" },
    { icon: <Heart className="w-8 h-8 text-primary" />, title: "Hôn nhân", desc: "Kết hôn với người bạn yêu thương" },
    { icon: <MapPin className="w-8 h-8 text-primary" />, title: "RTP", desc: "Dịch chuyển ngẫu nhiên để khám phá" },
    { icon: <HomeIcon className="w-8 h-8 text-primary" />, title: "Claims", desc: "Bảo vệ vùng đất của bạn" },
    { icon: <Fish className="w-8 h-8 text-primary" />, title: "Câu cá", desc: "Hệ thống câu cá nâng cao" },
    { icon: <Trophy className="w-8 h-8 text-primary" />, title: "Thành tựu", desc: "Nhiều thành tựu để hoàn thành" },
    { icon: <Crown className="w-8 h-8 text-primary" />, title: "Elite Mobs", desc: "Những con quái vật mạnh mẽ" },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "128", label: "Người chơi trực tuyến" },
    { icon: <Users2 className="w-8 h-8" />, value: "5,234", label: "Tổng thành viên" },
    { icon: <Disc className="w-8 h-8" />, value: "8,192", label: "Thành viên Discord" },
    { icon: <Zap className="w-8 h-8" />, value: "20", label: "TPS" },
    { icon: <Clock className="w-8 h-8" />, value: "99.9%", label: "Uptime" },
  ];

  const copyIP = () => {
    navigator.clipboard.writeText("breadmc.site");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Play Now Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass rounded-3xl p-8 max-w-md w-full border border-purple-500/30"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-purple-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="pixel-font text-2xl text-gradient mb-2">CHƠI NGAY</h2>
                <p className="text-gray-400">Tham gia máy chủ BreadMC ngay hôm nay!</p>
              </div>

              <div className="space-y-4">
                {/* Java Edition */}
                <div className="glass-strong rounded-xl p-4">
                  <p className="text-sm text-gray-400 mb-1">Java Edition</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-lg text-white font-mono">breadmc.site</code>
                    <button
                      onClick={copyIP}
                      className="px-3 py-2 bg-gradient-purple-cyan rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          Đã sao chép
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Sao chép
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bedrock Edition */}
                <div className="glass-strong rounded-xl p-4">
                  <p className="text-sm text-gray-400 mb-1">Bedrock Edition</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-gray-300">IP:</span>
                      <code className="text-white font-mono">breadmc.site</code>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-gray-300">Port:</span>
                      <code className="text-white font-mono">19132</code>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-6 py-3 glass rounded-xl font-bold text-white hover:bg-white/10 transition-colors"
              >
                Đóng
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="pixel-font text-4xl md:text-6xl text-gradient mb-6">
              BREADMC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Chill SMP • Giữ kho đồ • Kinh tế • PvP • Nghề nghiệp • Dungeon
            </p>

            {/* Live Server Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-6 glass-strong rounded-2xl px-8 py-4 mb-8"
            >
              <div className="flex items-center gap-2">
                {serverStatus.online ? (
                  <Wifi className="w-5 h-5 text-green-400" />
                ) : (
                  <WifiOff className="w-5 h-5 text-red-400" />
                )}
                <span className={`font-semibold ${serverStatus.online ? 'text-green-400' : 'text-red-400'}`}>
                  {serverStatus.online ? 'Đang hoạt động' : 'Đang bảo trì'}
                </span>
              </div>
              <div className="h-6 w-px bg-gray-600" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-white font-semibold">
                  {serverStatus.players} / {serverStatus.maxPlayers}
                </span>
              </div>
              <div className="h-6 w-px bg-gray-600" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">{serverStatus.tps} TPS</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => setShowModal(true)} 
              className="px-8 py-4 bg-gradient-purple-cyan rounded-xl font-bold text-white hover:scale-105 transition-transform glow-purple"
            >
              <Gamepad2 className="w-5 h-5 inline mr-2" />
              Chơi ngay
            </button>
            <a 
              href="https://discord.gg/7th4hDV9T" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 glass rounded-xl font-bold text-white hover:scale-105 transition-transform"
            >
              <Disc className="w-5 h-5 inline mr-2" />
              Tham gia Discord
            </a>
            <Link 
              to="/store"
              className="px-8 py-4 glass rounded-xl font-bold text-white hover:scale-105 transition-transform"
            >
              <Shield className="w-5 h-5 inline mr-2" />
              Cửa hàng
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-font text-2xl md:text-3xl text-center text-gradient mb-12">
            TÍNH NĂNG CỦA CHÚNG TÔI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-font text-2xl md:text-3xl text-center text-gradient mb-12">
            THỐNG KÊ MÁY CHỦ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-gradient-cyan mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
