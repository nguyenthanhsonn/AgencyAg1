"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiShoppingBag,
  HiEye,
  HiUserGroup,
  HiChartBar,
  HiBolt,
  HiLightBulb,
  HiCheck,
  HiSparkles,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const problems: {
  icon: IconType;
  text: string;
  solution: { heading: string; points: string[] };
}[] = [
  {
    icon: HiShoppingBag,
    text: "Sản phẩm/ dịch vụ tốt, nhưng video không kể được câu chuyện đó.",
    solution: {
      heading:
        "Chúng tôi mang chuẩn production phim vào từng video TikTok của bạn.",
      points: [
        "Ekip 3 người chuyên biệt: đạo diễn, quay phim, dựng phim",
        "Thiết bị Sony A73/A74/FX3, hình ảnh sắc nét, màu sắc chuẩn brand guideline",
        "Nói không với thiếu sáng, rung tay, tạp âm...",
      ],
    },
  },
  {
    icon: HiEye,
    text: 'Video không đủ "wao", dù bạn đã thuê người quay.',
    solution: {
      heading:
        "Script và visual identity được thiết kế riêng cho thương hiệu bạn.",
      points: [
        "Mỗi video có hook 3 giây giữ người xem lại",
        "Storytelling theo framework đã kiểm chứng",
        "A/B test format để tìm ra style phù hợp nhất",
      ],
    },
  },
  {
    icon: HiUserGroup,
    text: "Không có gương mặt đại diện, không biết ai phù hợp với thương hiệu",
    solution: {
      heading:
        "Chúng tôi casting và đào tạo KOC phù hợp với DNA thương hiệu.",
      points: [
        "Database 200+ KOC đã được kiểm định",
        "Đào tạo speaking & on-camera presence",
        "Thử nghiệm nhiều gương mặt để tìm ra người convert tốt nhất",
      ],
    },
  },
  {
    icon: HiChartBar,
    text: "Đăng video nhưng không biết cái nào hiệu quả, cứ làm rồi để đó.",
    solution: {
      heading:
        "Dashboard analytics realtime — bạn biết con số, chúng tôi biết hành động.",
      points: [
        "Báo cáo hàng tuần với insight cụ thể",
        "Phân tích retention, CTR, conversion theo từng video",
        "Điều chỉnh chiến lược dựa trên data thực tế",
      ],
    },
  },
  {
    icon: HiBolt,
    text: "Muốn nhanh thì ẩu. Muốn chất thì chậm. Không thể có cả hai.",
    solution: {
      heading: "Quy trình sản xuất chuẩn hóa — nhanh VÀ chất cùng lúc.",
      points: [
        "8–16 video/tháng với quy trình batch production",
        "Turnround time 48h từ brief đến video hoàn chỉnh",
        "Không cần bạn có mặt — chúng tôi tự vận hành",
      ],
    },
  },
];

export default function Problems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 3000);
  };

  const stopCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startCycle();
    } else {
      stopCycle();
    }
    return () => stopCycle();
  }, [isPaused]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const activeSolution = problems[activeIndex].solution;

  return (
    <section
      id="problems"
      className="py-20 md:py-28 bg-[radial-gradient(circle_at_center,#17325f_0%,#234272_22%,#4f6d98_38%,#b8c8df_62%,#eef4fb_82%,#ffffff_100%)]"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-semibold border border-gold/40 bg-gold/10 text-gold-dark">
            Bạn có đang gặp điều này?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-center text-gold mb-4 leading-tight"
        >
          Làm TikTok mãi mà không phát triển?
          <br className="hidden sm:block" /> Đây là lý do tại sao.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gold/80 mb-14 max-w-xl mx-auto text-base"
        >
          90% thương hiệu thất bại trên TikTok không phải vì thiếu ngân sách —
          mà vì thiếu hệ thống.
        </motion.p>

        {/* Main 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">

          {/* LEFT — Problem list */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:w-5/12 flex flex-col gap-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {problems.map((problem, i) => {
              const isActive = activeIndex === i;
              const Icon = problem.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  onClick={() => setActiveIndex(i)}
                  className={[
                    "flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300",
                    isActive
                      ? "border border-gold/45 bg-[linear-gradient(180deg,#d6aa67_0%,#bf8d45_100%)] shadow-[0_14px_30px_rgba(150,108,43,0.22)]"
                      : "border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,249,255,0.9)_100%)] hover:border-gold/35 hover:bg-[linear-gradient(180deg,rgba(255,251,242,0.96)_0%,rgba(248,241,226,0.82)_100%)]",
                  ].join(" ")}
                  style={isActive ? { borderLeftColor: "#C9A163", borderLeftWidth: 4 } : {}}
                >
                  <div
                    className={[
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                      isActive ? "bg-white/18 text-white" : "bg-white/80 text-gold-dark",
                    ].join(" ")}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <p
                    className={[
                      "text-sm leading-snug transition-all duration-300",
                      isActive ? "text-white font-semibold" : "text-gold-dark",
                    ].join(" ")}
                  >
                    {problem.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT — Solution card */}
          <div
            className="lg:w-7/12"
            data-aos="flip-right"
          >
            <div className="bg-navy rounded-3xl p-8 h-full flex flex-col justify-center min-h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Label */}
                  <div className="flex items-center gap-2 mb-4">
                    <HiSparkles className="w-4 h-4 text-gold" />
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">
                      Giải pháp
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-white font-black text-xl sm:text-2xl leading-snug mb-6">
                    {activeSolution.heading}
                  </h3>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-4">
                    {activeSolution.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                          <HiCheck className="w-3 h-3 text-gold" />
                        </span>
                        <span className="text-white/80 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Insight bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gold/8 rounded-2xl px-6 py-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
            <HiLightBulb className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-gold-dark text-xs font-bold uppercase tracking-wider mb-1">
              Insight
            </p>
            <p className="text-navy font-semibold text-base leading-snug">
              TikTok không ưu tiên sự hoàn hảo, TikTok ưu tiên sự đúng hướng
              và đều đặn.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
