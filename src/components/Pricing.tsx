"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "15.000.000đ",
    period: "/tháng",
    badge: null,
    featured: false,
    features: [
      "8 video/tháng",
      "Lên kịch bản sáng tạo",
      "Quay & dựng chuyên nghiệp",
      "Đăng bài & quản lý cơ bản",
      "Báo cáo hàng tháng",
      "Hỗ trợ qua email",
    ],
    notIncluded: ["Quản lý kênh đầy đủ", "Báo cáo hàng tuần", "Account manager"],
  },
  {
    name: "Growth",
    price: "25.000.000đ",
    period: "/tháng",
    badge: "Phổ biến nhất",
    featured: true,
    features: [
      "16 video/tháng",
      "Tất cả của gói Starter",
      "Quản lý kênh đầy đủ",
      "Tối ưu hashtag & caption",
      "Báo cáo hàng tuần",
      "Tư vấn chiến lược định kỳ",
      "Hỗ trợ ưu tiên",
    ],
    notIncluded: ["Account manager riêng"],
  },
  {
    name: "Enterprise",
    price: "40.000.000đ",
    period: "/tháng",
    badge: null,
    featured: false,
    features: [
      "30+ video/tháng",
      "Tất cả của gói Growth",
      "Team sản xuất riêng biệt",
      "Quay tại nhiều địa điểm",
      "Báo cáo chi tiết, chuyên sâu",
      "Account manager riêng",
      "Chiến lược đa kênh",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="bang-gia" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-gold/12 text-gold-dark border border-gold/30">
            Bảng giá
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-center mb-3 text-navy"
        >
          Đầu tư minh bạch,{" "}
          <span className="text-gold">kết quả rõ ràng</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-500 mb-14 max-w-xl mx-auto text-base"
        >
          Tất cả gói đều bao gồm tư vấn chiến lược và báo cáo định kỳ
        </motion.p>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 flex flex-col border-2 ${
                plan.featured
                  ? "shadow-2xl scale-105 bg-navy border-gold"
                  : "shadow-sm bg-white border-gray-200"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-black whitespace-nowrap bg-gold text-navy">
                    ⭐ {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`text-xl font-black mb-2 ${
                  plan.featured ? "text-gold-light" : "text-navy"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span
                  className={`text-3xl font-black ${
                    plan.featured ? "text-gold" : "text-navy"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm mb-1 ${
                    plan.featured ? "text-white/50" : "text-gray-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`w-full h-px mb-6 ${
                  plan.featured ? "bg-gold/30" : "bg-gray-200"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span
                      className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 font-bold text-gold ${
                        plan.featured ? "bg-gold/20" : "bg-gold/12"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white/85" : "text-gray-700"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feat, j) => (
                  <li key={`no-${j}`} className="flex items-start gap-2.5 opacity-40">
                    <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 bg-gray-200 text-gray-400">
                      ×
                    </span>
                    <span
                      className={`text-sm line-through ${
                        plan.featured ? "text-white/50" : "text-gray-400"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleScroll("#lien-he")}
                className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                  plan.featured
                    ? "bg-gold text-navy shadow-[0_4px_20px_rgba(201,161,99,0.4)]"
                    : "bg-transparent text-navy border-2 border-navy"
                }`}
              >
                Bắt đầu ngay
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Tất cả giá chưa bao gồm VAT. Hợp đồng tối thiểu 3 tháng.{" "}
          <button
            onClick={() => handleScroll("#lien-he")}
            className="underline cursor-pointer hover:text-gray-600 transition-colors text-gold"
          >
            Liên hệ tư vấn gói phù hợp
          </button>
        </motion.p>
      </div>
    </section>
  );
}
