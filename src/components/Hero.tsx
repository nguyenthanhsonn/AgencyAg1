"use client";

import { motion } from "framer-motion";
import CountUp from "@/uiux/CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function PhoneMockup({
  size = "md",
  showPlay = false,
  gradientFrom = "#0d2a5c",
  gradientTo = "#0a1f44",
  rotate = 0,
  zIndex = 10,
}: {
  size?: "sm" | "md" | "lg";
  showPlay?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  rotate?: number;
  zIndex?: number;
}) {
  const dimensions = {
    sm: { width: 120, height: 213 },
    md: { width: 150, height: 267 },
    lg: { width: 180, height: 320 },
  };

  const { width, height } = dimensions[size];

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 28,
        border: "6px solid rgba(201,161,99,0.4)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.4), 0 4px 12px rgba(201,161,99,0.15)",
        overflow: "hidden",
        background: `linear-gradient(160deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        transform: `rotate(${rotate}deg)`,
        zIndex,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-sm bg-white/20" />

      {/* Content area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="w-3/5 h-1.5 rounded-sm bg-gold/30" />
        <div className="w-2/5 h-1.5 rounded-sm bg-gold/20" />

        {showPlay && (
          <div className="mt-3 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 2.5L13 8L4 13.5V2.5Z" fill="#C9A163" />
            </svg>
          </div>
        )}
      </div>

      {/* Gold accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-around px-2"
        style={{ background: "rgba(201,161,99,0.08)" }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-5 h-1 rounded-sm bg-gold/30" />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 65% 30%, rgba(201,161,99,0.1) 0%, transparent 55%), linear-gradient(135deg, #0a1f44 0%, #061530 100%)",
      }}
    >

      {/* Background blobs */}
      <div
        className="absolute -top-[10%] -right-[5%] w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,161,99,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[5%] -left-[5%] w-100 h-100 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(13,42,92,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="bg-gold/10 border border-gold/40 text-gold-light rounded-full px-[18px] py-2 text-[13px] font-bold tracking-[0.01em] inline-flex items-center gap-2">
                🎬 Studio TikTok #1 cho thương hiệu Việt
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.15] tracking-tight mb-5"
            >
              <span className="text-white block">
                Thương hiệu không
              </span>
              <span className="block">
                <span className="text-white">thắng nhờ 1 cú viral - </span>
                <span className="text-gradient-gold">Đó</span>
              </span>
              <span className="text-gradient-gold block">
                là kết quả của chiến lược
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-base text-white/65 leading-7 mb-8 max-w-[500px]"
            >
              Chúng tôi không chỉ quay dựng video. Chúng tôi xây dựng cỗ máy
              nội dung giúp thương hiệu của bạn xuất hiện đúng người, đúng lúc
              - và biến người xem thành khách hàng thật sự.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => handleScroll("#lien-he")}
                className="px-7 py-[13px] rounded-full bg-gold hover:bg-gold-dark text-navy font-bold text-[0.95rem] cursor-pointer shadow-[0_4px_20px_rgba(201,161,99,0.4)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(201,161,99,0.5)]"
              >
                Nhận báo giá & tư vấn
              </button>
              <button
                onClick={() => handleScroll("#dich-vu")}
                className="px-7 py-[13px] rounded-full bg-transparent text-white font-bold text-[0.95rem] border-2 border-white/40 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/60"
              >
                Xem dịch vụ
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.56 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex flex-col">
                <span
                  className="text-[1.875rem] font-black tracking-tight leading-none"
                  style={{ color: "#C9A163" }}
                >
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting={false}
                  />
                  +
                </span>
                <span className="text-[0.8rem] text-white/50 font-medium mt-1">
                  Video được tạo ra
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  className="text-[1.875rem] font-black tracking-tight leading-none"
                  style={{ color: "#F2E3BA" }}
                >
                  <CountUp
                    from={0}
                    to={50}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting={false}
                  />
                  +
                </span>
                <span className="text-[0.8rem] text-white/50 font-medium mt-1">
                  Khách hàng tin dùng
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  className="text-[1.875rem] font-black tracking-tight leading-none"
                  style={{ color: "#ffffff" }}
                >
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting={false}
                  />
                  M+
                </span>
                <span className="text-[0.8rem] text-white/50 font-medium mt-1">
                  Views Tiktok
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Phone mockups */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center h-[420px]"
          >
            {/* Left phone */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-170px, -10px) rotate(-8deg)",
                zIndex: 10,
              }}
            >
              <PhoneMockup
                size="sm"
                gradientFrom="#0d2a5c"
                gradientTo="#061530"
                rotate={0}
              />
            </div>

            {/* Right phone */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(50px, -10px) rotate(6deg)",
                zIndex: 10,
              }}
            >
              <PhoneMockup
                size="sm"
                gradientFrom="#061530"
                gradientTo="#0a1f44"
                rotate={0}
              />
            </div>

            {/* Center phone — largest, on top */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-90px, -160px)",
                zIndex: 20,
              }}
            >
              <PhoneMockup
                size="lg"
                showPlay
                gradientFrom="#0a1f44"
                gradientTo="#0d2a5c"
                rotate={0}
              />
            </div>

            {/* Floating heart */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute top-[12%] right-[12%] z-30 w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-lg shadow-[0_4px_16px_rgba(201,161,99,0.3)] border border-gold/20"
            >
              ❤️
            </motion.div>
            {/* Floating chat bubble */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-[22%] left-[8%] z-30 w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-lg shadow-[0_4px_16px_rgba(201,161,99,0.2)] border border-gold/20"
            >
              💬
            </motion.div>

            {/* Floating share icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[14%] right-[18%] z-30 w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-lg shadow-[0_4px_16px_rgba(201,161,99,0.2)] border border-gold/20"
            >
              ↗️
            </motion.div>

            {/* Background glow behind phones */}
            <div
              className="absolute inset-0 z-5 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201,161,99,0.08) 0%, transparent 65%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
