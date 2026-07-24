import { motion } from 'framer-motion';
import { Newspaper, Calendar, Clock } from 'lucide-react';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Cập nhật season 2!',
      date: '24/07/2024',
      category: 'Cập nhật',
      excerpt: 'Mở ra nhiều nội dung mới với dungeon mới, items mới và nhiều tính năng hấp dẫn!',
      readTime: '5 phút đọc'
    },
    {
      id: 2,
      title: 'Sự kiện lễ hội hè',
      date: '20/07/2024',
      category: 'Sự kiện',
      excerpt: 'Tham gia sự kiện lễ hội hè với nhiều phần thưởng giá trị!',
      readTime: '3 phút đọc'
    },
    {
      id: 3,
      title: 'Bảo trì định kỳ',
      date: '15/07/2024',
      category: 'Bảo trì',
      excerpt: 'Máy chủ sẽ được bảo trì vào ngày 15/07 để cập nhật và khắc phục lỗi.',
      readTime: '2 phút đọc'
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="pixel-font text-3xl md:text-4xl text-center text-gradient mb-4 flex items-center justify-center gap-4">
          <Newspaper className="w-10 h-10" />
          TIN TỨC
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Cập nhật những tin tức mới nhất về BreadMC
        </p>

        <div className="space-y-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  {item.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-gray-400 mb-4">{item.excerpt}</p>
              <button className="text-secondary font-medium hover:underline">
                Đọc thêm →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
