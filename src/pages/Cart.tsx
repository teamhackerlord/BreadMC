import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  X, 
  ArrowLeft, 
  Copy, 
  CheckCircle2, 
  Globe, 
  Users
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const paymentMethods = [
    { id: 'momo', name: 'Momo' },
    { id: 'vietqr', name: 'VietQR' },
    { id: 'vietcombank', name: 'Vietcombank' },
    { id: 'techcombank', name: 'Techcombank' },
    { id: 'mb', name: 'MB Bank' },
  ];

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('canhkhoideptrai');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setShowSuccess(true);
  };

  const handleContactClick = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/store" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại cửa hàng
        </Link>

        <h1 className="pixel-font text-3xl md:text-4xl text-gradient mb-8 flex items-center gap-4">
          <ShoppingCart className="w-10 h-10" />
          GIỎ HÀNG
        </h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-3xl p-12 text-center"
          >
            <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-4">Giỏ hàng trống</h3>
            <Link to="/store" className="inline-block px-8 py-4 bg-gradient-purple-cyan rounded-xl font-bold text-white">
              Mua sắm ngay
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-purple-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      <p className="text-gray-400">
                        {item.duration === 'Tháng' ? '1 Tháng' : item.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-bold text-gradient">
                      {item.price.toLocaleString('vi-VN')}đ
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8 mb-8">
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-700">
                <span className="text-xl text-gray-300">Tổng cộng</span>
                <span className="text-4xl font-bold text-gradient">
                  {total.toLocaleString('vi-VN')}đ
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Phương thức thanh toán</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`p-4 rounded-xl font-semibold transition-all ${
                      selectedPayment === method.id
                        ? 'bg-gradient-purple-cyan text-white glow-purple scale-105'
                        : 'glass-strong text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {method.name}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 py-4 glass rounded-xl font-bold text-gray-300 hover:text-white transition-colors"
                >
                  Xóa tất cả
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  disabled={!selectedPayment}
                  className={`flex-2 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    selectedPayment
                      ? 'bg-gradient-purple-cyan hover:scale-105'
                      : 'bg-gray-700 cursor-not-allowed opacity-50'
                  }`}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </>
        )}

        {/* Payment Modal */}
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
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative glass rounded-3xl p-8 max-w-lg w-full border border-purple-500/30"
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                  <h2 className="pixel-font text-2xl text-gradient mb-2">BREADMC PAYMENT</h2>
                  <p className="text-gray-400">
                    Bạn có thể mua rank bằng cách liên hệ chủ sở hữu bằng một trong các phương thức dưới đây:
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="glass-strong rounded-xl p-4">
                    <p className="text-gray-400 mb-2">Facebook:</p>
                    <code className="text-white break-all">https://www.facebook.com/cknopro/</code>
                  </div>

                  <div className="glass-strong rounded-xl p-4">
                    <p className="text-gray-400 mb-2">Discord:</p>
                    <code className="text-white">canhkhoideptrai</code>
                  </div>

                  <p className="text-gray-400 text-center">hoặc</p>

                  <div className="glass-strong rounded-xl p-4">
                    <p className="text-gray-300">
                      Tham gia máy chủ Discord của BreadMC và tạo ticket hỗ trợ. Ping vai trò Owner: <span className="text-primary font-bold">BOCW</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <a
                    href="https://www.facebook.com/cknopro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-gradient-purple-cyan rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Globe className="w-5 h-5" />
                    Mở Facebook
                  </a>

                  <button
                    onClick={handleCopyDiscord}
                    className="px-6 py-3 glass rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        Đã sao chép
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Sao chép Discord
                      </>
                    )}
                  </button>
                </div>

                <a
                  href="https://discord.gg/7th4hDV9T"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleContactClick}
                  className="w-full px-6 py-3 glass rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform mb-4"
                >
                  <Users className="w-5 h-5" />
                  Tham gia máy chủ Discord
                </a>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full px-6 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  Hủy
                </button>

                {/* Success Message */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 glass-strong rounded-xl p-4 text-center"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-gray-300">
                        Vui lòng liên hệ chủ sở hữu và cung cấp rank đã chọn. Đơn hàng của bạn sẽ được xử lý sau khi xác nhận thanh toán.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
