import { Sword, Crown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sword className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BREADMC</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Máy chủ Minecraft Việt Nam với trải nghiệm sinh tồn hiện đại, hiệu năng ổn định và cộng đồng thân thiện.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-primary transition-colors">Tính Năng</a></li>
              <li><a href="#stats" className="hover:text-primary transition-colors">Thống Kê</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors">Cộng Đồng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Luật Chơi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Báo Lỗi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Liên Hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 BREADMC. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Crown className="w-4 h-4 text-primary" />
            <span>Owner: <span className="text-primary font-bold">BOCW</span> - King of code</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
