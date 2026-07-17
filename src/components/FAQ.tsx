import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Card from './Card';
import Section from './Section';

const faqs = [
  {
    question: 'Làm sao để tham gia máy chủ?',
    answer: 'Chỉ cần thêm breadmc.site vào danh sách máy chủ của bạn trong Minecraft Java hoặc Bedrock và kết nối!',
  },
  {
    question: 'Máy chủ hỗ trợ phiên bản nào?',
    answer: 'Chúng tôi hỗ trợ Minecraft 1.21+ cho cả hai phiên bản Java và Bedrock.',
  },
  {
    question: 'Chơi có miễn phí không?',
    answer: 'Có! BreadMC hoàn toàn miễn phí để tham gia và chơi. Chúng tôi cung cấp các hạng trang trí tùy chọn cho những người ủng hộ.',
  },
  {
    question: 'Có hỗ trợ Bedrock không?',
    answer: 'Hoàn toàn có! Cả người chơi Java và Bedrock đều có thể chơi cùng nhau trên cùng một máy chủ.',
  },
  {
    question: 'Báo lỗi ở đâu?',
    answer: 'Gia nhập máy chủ Discord của chúng tôi và sử dụng kênh báo lỗi để giúp chúng tôi cải thiện!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-gradient">Câu Hỏi Thường Gặp</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Có thắc mắc? Chúng tôi sẽ giải đáp
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            hover={false}
            className="cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-4">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        ))}
      </div>
    </Section>
  );
}
