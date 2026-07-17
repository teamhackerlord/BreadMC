import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import Card from './Card';
import Section from './Section';

const galleryImages = [
  { id: 1, title: 'Khu Vực Spawn' },
  { id: 2, title: 'Đấu Trường PvP' },
  { id: 3, title: 'Khu Vực Spawn' },
  { id: 4, title: 'Trận Đánh Boss' },
  { id: 5, title: 'Hầm Ngục' },
  { id: 6, title: 'Sự Kiện' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <Section id="gallery" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Thư Viện Hình Ảnh</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cái nhìn sơ lược về thế giới tuyệt vời của chúng tôi
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelectedImage(image.id)}
          >
            <Card className="group cursor-pointer overflow-hidden p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center text-gray-500 text-lg">
                  Sắp Có
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{image.title}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-4xl max-h-[80vh]"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center rounded-2xl">
              <div className="text-center text-gray-500 text-2xl">
                Hình Ảnh Đầy Đủ Sắp Có
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </Section>
  );
}
