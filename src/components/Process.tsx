"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    username: "autotrade2828.official",
    displayName: "Auto Trade 2828",
    initials: "AT",
    gradientFrom: "#0d1f3c",
    gradientTo: "#040e1f",
    accentColor: "#C9A163",
    centerLine1: "Auto Trade",
    centerLine2: "2828",
  },
  {
    username: "tee8eyebrows",
    displayName: "Tee8 Eyebrows",
    initials: "T8",
    gradientFrom: "#111827",
    gradientTo: "#030712",
    accentColor: "#C9A163",
    centerLine1: "Tee8",
    centerLine2: "Eyebrows",
  },
  {
    username: "kinhdichthaycuong",
    displayName: "Kinh Dịch Thầy Cường",
    initials: "KD",
    gradientFrom: "#0f1f3a",
    gradientTo: "#050d1c",
    accentColor: "#C9A163",
    centerLine1: "Kinh Dịch",
    centerLine2: "Thầy Cường",
  },
  {
    username: "thienkhoituyendung",
    displayName: "Thiên Khôi Tuyển Dụng",
    initials: "TK",
    gradientFrom: "#13202f",
    gradientTo: "#060e18",
    accentColor: "#C9A163",
    centerLine1: "Thiên Khôi",
    centerLine2: "Tuyển Dụng",
  },
];

function TikTokIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export default function Process() {
  return (
    <section
      id="case-study"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#061530" }}
    >
      {/* Radial glow behind cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,161,99,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0 }}
          className="flex justify-center mb-5"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Case Study
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 text-white"
        >
          Những dự án nổi bật
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-center mb-14 max-w-lg mx-auto text-base"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Xem những kết quả thực tế từ khách hàng của chúng tôi
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.username}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                aspectRatio: "9/16",
                background: `linear-gradient(175deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
              }}
            >
              {/* Subtle inner vignette */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.6) 100%)",
                }}
              />

              {/* Top bar — avatar + username */}
              <div className="absolute top-0 left-0 right-0 p-3 flex items-center gap-2">
                {/* Avatar circle */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-black"
                  style={{
                    background: `linear-gradient(135deg, ${study.accentColor} 0%, #a8844f 100%)`,
                    color: "#061530",
                  }}
                >
                  {study.initials}
                </div>
                {/* Username */}
                <span
                  className="text-white font-semibold leading-tight"
                  style={{ fontSize: "0.65rem" }}
                >
                  @{study.username}
                </span>
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-1 px-3">
                <div
                  className="text-center"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
                >
                  <p
                    className="font-black leading-tight"
                    style={{
                      color: study.accentColor,
                      fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                    }}
                  >
                    {study.centerLine1}
                  </p>
                  <p
                    className="font-black leading-tight text-white"
                    style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
                  >
                    {study.centerLine2}
                  </p>
                </div>
              </div>

              {/* Bottom-right TikTok watermark */}
              <div
                className="absolute bottom-3 right-3 flex flex-col items-center gap-0.5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <TikTokIcon />
                <span style={{ fontSize: "0.55rem", letterSpacing: "0.04em" }}>
                  TikTok
                </span>
              </div>

              {/* Gold accent line at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg, transparent, ${study.accentColor}, transparent)`,
                  opacity: 0.6,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(90deg, #C9A163 0%, #F2E3BA 100%)",
              color: "#061530",
              boxShadow: "0 4px 20px rgba(201,161,99,0.35)",
            }}
          >
            Xem tất cả dự án
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
