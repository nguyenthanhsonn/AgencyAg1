"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Tôi có cần tự quay video không?",
    a: "Không. Đội ngũ của SHORT PRO. sẽ đến trực tiếp địa điểm kinh doanh của bạn để quay. Bạn chỉ cần chuẩn bị không gian và thời gian — chúng tôi lo toàn bộ thiết bị và kỹ thuật.",
  },
  {
    q: "Mất bao lâu để thấy kết quả?",
    a: "Thông thường 4-8 tuần để thấy tăng trưởng rõ rệt. Sau 3 tháng, hầu hết khách hàng đều đạt tăng trưởng follower và lượt xem đáng kể. Chúng tôi cam kết báo cáo minh bạch hàng tuần để bạn theo dõi tiến độ.",
  },
  {
    q: "Nội dung có phù hợp với ngành của tôi không?",
    a: "Có. Trước khi lên kịch bản, chúng tôi sẽ nghiên cứu kỹ ngành, đối thủ và khách hàng mục tiêu của bạn để tạo ra content phù hợp nhất. Chúng tôi đã có kinh nghiệm với nhiều ngành: F&B, spa, thời trang, bất động sản, giáo dục và nhiều hơn nữa.",
  },
  {
    q: "Tôi có thể xem và duyệt video trước khi đăng không?",
    a: "Có. Mỗi video đều được gửi cho bạn duyệt trước ít nhất 24 giờ. Chúng tôi sẽ chỉnh sửa theo ý kiến của bạn trước khi đăng. Bạn luôn là người có quyết định cuối cùng về nội dung.",
  },
  {
    q: "Hợp đồng tối thiểu bao nhiêu tháng?",
    a: "Tối thiểu 3 tháng để đạt được kết quả tốt nhất. TikTok cần thời gian để thuật toán nhận diện và phân phối nội dung của bạn. Kinh nghiệm của chúng tôi cho thấy tháng thứ 2-3 thường là lúc kênh bắt đầu tăng trưởng mạnh mẽ nhất.",
  },
];

interface AccordionItemProps {
  faq: { q: string; a: string };
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function AccordionItem({ faq, isOpen, onClick, index }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="border rounded-xl overflow-hidden"
      style={{ borderColor: isOpen ? "#C9A163" : "#e5e7eb" }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 cursor-pointer"
        style={{ background: isOpen ? "rgba(201,161,99,0.05)" : "white" }}
        aria-expanded={isOpen}
      >
        <span
          className="font-bold text-sm sm:text-base pr-4"
          style={{ color: "#0a1f44" }}
        >
          {faq.q}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? "#C9A163" : "rgba(201,161,99,0.1)",
            color: isOpen ? "#0a1f44" : "#C9A163",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{ background: "#f8f9fa" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span
            className="px-4 py-1.5 rounded-full text-sm font-bold"
            style={{
              background: "rgba(201,161,99,0.12)",
              color: "#a8844f",
              border: "1px solid rgba(201,161,99,0.3)",
            }}
          >
            FAQ
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-center mb-12"
          style={{ color: "#0a1f44" }}
        >
          Câu hỏi{" "}
          <span style={{ color: "#C9A163" }}>thường gặp</span>
        </motion.h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>

        {/* CTA note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Còn câu hỏi khác?{" "}
          <button
            onClick={() => {
              const el = document.querySelector("#lien-he");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-bold cursor-pointer hover:underline"
            style={{ color: "#C9A163" }}
          >
            Liên hệ với chúng tôi
          </button>
        </motion.p>
      </div>
    </section>
  );
}
