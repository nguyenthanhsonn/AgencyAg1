"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "NL",
    name: "Nguyễn Thị Lan",
    title: "Chủ chuỗi spa Lily Beauty",
    quote:
      "Sau 3 tháng hợp tác với SHORT PRO., kênh TikTok của tôi từ 0 lên 50K followers và doanh thu online tăng 40%. Đội ngũ rất chuyên nghiệp và hiểu rõ khách hàng mục tiêu của tôi.",
    rating: 5,
    result: "+50K followers trong 3 tháng",
  },
  {
    initials: "TM",
    name: "Trần Văn Minh",
    title: "CEO thương hiệu thời trang MINH Style",
    quote:
      "Tôi không cần phải lo lắng về content nữa. SHORT PRO. lo hết và kênh vẫn tăng trưởng đều đặn mỗi tháng. ROI rất xứng đáng với đầu tư.",
    rating: 5,
    result: "ROI tích cực từ tháng thứ 2",
  },
  {
    initials: "PH",
    name: "Phạm Thu Hương",
    title: "Chủ nhà hàng Phố Xưa",
    quote:
      "Đội ngũ hiểu insight khách hàng trong ngành F&B rất tốt. Những video viral họ tạo ra đã đưa nhà hàng của tôi lên top trending nhiều lần.",
    rating: 5,
    result: "Top trending nhiều lần",
  },
];

const avatarColors = ["#C9A163", "#0d2a5c", "#a8844f"];

export default function Testimonials() {
  return (
    <section
      id="ket-qua"
      className="py-20 md:py-28"
      style={{ background: "#0a1f44" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              background: "rgba(201,161,99,0.15)",
              color: "#F2E3BA",
              border: "1px solid rgba(201,161,99,0.4)",
            }}
          >
            Khách hàng nói gì
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-center mb-4 text-white"
        >
          Kết quả thực tế từ{" "}
          <span style={{ color: "#C9A163" }}>khách hàng của chúng tôi</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/60 mb-14 max-w-xl mx-auto text-base"
        >
          Không phải lời hứa — đây là những con số và câu chuyện có thật từ các doanh nghiệp đã tin tưởng chúng tôi.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-[linear-gradient(180deg,#ffffff_0%,#eff5fc_100%)] border border-[#d9e4f4] rounded-2xl p-7 flex flex-col cursor-default"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5 self-start"
                style={{
                  background: "rgba(201,161,99,0.12)",
                  color: "#a8844f",
                  border: "1px solid rgba(201,161,99,0.3)",
                }}
              >
                📊 {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: avatarColors[i] }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "#0a1f44" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs">{t.title}</p>
                </div>
              </div>

              {/* Gold top border accent */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-lg"
                style={{ background: "#C9A163" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
