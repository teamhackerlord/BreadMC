import { useState } from 'react';
import { LayoutDashboard, Package, Users, Settings, History, Tag, ShoppingBag } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'products', name: 'Sản phẩm', icon: <Package className="w-5 h-5" /> },
    { id: 'orders', name: 'Đơn hàng', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'customers', name: 'Khách hàng', icon: <Users className="w-5 h-5" /> },
    { id: 'coupons', name: 'Coupons', icon: <Tag className="w-5 h-5" /> },
    { id: 'history', name: 'Lịch sử', icon: <History className="w-5 h-5" /> },
    { id: 'settings', name: 'Cài đặt', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="pixel-font text-3xl md:text-4xl text-gradient mb-8">
          BẢNG ĐIỀU KHIỂN ADMIN
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="glass rounded-2xl p-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-purple-cyan text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="glass rounded-2xl p-8">
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Tổng quan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: 'Doanh thu tháng', value: '5,200,000đ' },
                      { label: 'Đơn hàng', value: '128' },
                      { label: 'Khách hàng mới', value: '45' },
                    ].map((stat, i) => (
                      <div key={i} className="glass-strong rounded-2xl p-6">
                        <p className="text-gray-400 mb-2">{stat.label}</p>
                        <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Đơn hàng gần đây</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="glass-strong rounded-xl p-4 flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium">Đơn hàng #{1000 + i}</p>
                          <p className="text-gray-500 text-sm">Player{i} • VIP+</p>
                        </div>
                        <p className="text-primary font-bold">40,000đ</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab !== 'dashboard' && (
                <div className="text-center py-20 text-gray-500">
                  <h3 className="text-xl font-bold mb-2">Chức năng {tabs.find(t => t.id === activeTab)?.name}</h3>
                  <p>Đang được phát triển...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
