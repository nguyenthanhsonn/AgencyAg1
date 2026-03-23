"use client";

import { useState, type ReactNode } from "react";
import { FaCheck } from "react-icons/fa";
import {
  LuCamera,
  LuMonitor,
  LuLayoutDashboard,
  LuFilm,
  LuFileText,
  LuUsers,
  LuClock,
  LuCalendar,
  LuActivity,
  LuBuilding2,
} from "react-icons/lu";
import { BsStars, BsPersonFill, BsPersonSlash } from "react-icons/bs";

type Tab = "chuyen-nghiep" | "cao-cap" | "tron-goi";

const tabs: { id: Tab; label: string }[] = [
  { id: "chuyen-nghiep", label: "Gói Chuyên Nghiệp" },
  { id: "cao-cap", label: "Gói Cao Cấp" },
  { id: "tron-goi", label: "Gói Trọn Gói" },
];

// ─── Shared types ───────────────────────────────────────────────
interface PricingRow {
  qty: string;
  withActor: string;
  withoutActor: string;
  duration: string;
}

// ─── CARD 1 — GÓI CHUYÊN NGHIỆP ────────────────────────────────
function ChuyenNghiepCard() {
  const rows: PricingRow[] = [
    { qty: "10 video", withActor: "8.000.000", withoutActor: "7.500.000", duration: "1 buổi (4h)" },
    { qty: "20 video", withActor: "12.000.000", withoutActor: "11.000.000", duration: "1 ngày (8h)" },
    { qty: "40 video", withActor: "23.000.000", withoutActor: "21.000.000", duration: "2 ngày" },
    { qty: "100 video", withActor: "50.000.000", withoutActor: "45.000.000", duration: "5 ngày" },
    { qty: "200 video", withActor: "95.000.000", withoutActor: "85.000.000", duration: "10 ngày" },
    { qty: "400 video", withActor: "180.000.000", withoutActor: "160.000.000", duration: "20 ngày" },
  ];

  return (
    <div className="bg-[radial-gradient(circle_at_20%_18%,rgba(86,114,165,0.2),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(51,75,118,0.16),transparent_26%),linear-gradient(135deg,rgba(15,33,68,0.95),rgba(24,43,82,0.88))] rounded-3xl border border-[rgba(173,196,239,0.18)] shadow-[0_18px_45px_rgba(7,17,39,0.3)] overflow-hidden backdrop-blur-xl">
      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-navy to-gold" />

      <div className="p-8 md:p-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="md:w-[60%]">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-xl p-3 text-gold flex-shrink-0">
                <LuCamera size={22} />
              </div>
              <h2 className="font-bold text-2xl text-[#f0c57a]">GÓI CHUYÊN NGHIỆP</h2>
            </div>

            {/* Subtitle */}
            <p className="font-bold italic text-white/92 text-sm mt-3 mb-4">
              Giải pháp xây kênh bài bản – tối ưu hình ảnh thương hiệu &amp; chuyển đổi
            </p>

            {/* Features */}
            <ul className="space-y-2">
              {[
                "Video ngắn chuẩn xu hướng TikTok & Facebook",
                "Kịch bản được xây dựng riêng theo ngành hàng",
                "Quay tại studio với bối cảnh chuyên nghiệp",
                "Hậu kỳ trọn gói: edit, hiệu ứng, âm thanh, phụ đề",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-white/82">
                  <FaCheck size={12} className="text-gold flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            {/* Equipment */}
            <div className="flex items-center gap-2 text-xs text-white/55 mt-4">
              <LuCamera size={13} className="flex-shrink-0" />
              <span>Sony Alpha A73 + Lens Cine, đèn studio, mic thu âm chuyên dụng</span>
            </div>
          </div>

          {/* Right column — pills */}
          <div className="md:w-[40%] flex flex-col items-start gap-2">
            {[
              { icon: <LuMonitor size={12} />, label: "Video chuẩn TikTok, Facebook" },
              { icon: <LuLayoutDashboard size={12} />, label: "Studio + setup bối cảnh" },
              { icon: <LuFilm size={12} />, label: "Edit, âm thanh, hiệu ứng" },
              { icon: <LuFileText size={12} />, label: "Kịch bản theo ngành hàng" },
              { icon: <LuUsers size={12} />, label: "Ekip quay 3+ người" },
              { icon: <LuCamera size={12} />, label: "Sony Alpha A73 + Lens Cine" },
            ].map((pill) => (
              <div
                key={pill.label}
                className="border border-white/14 rounded-full px-3 py-1.5 text-xs text-white/75 inline-flex items-center gap-2 bg-white/6 backdrop-blur-sm"
              >
                <span className="text-gold/90 flex-shrink-0">{pill.icon}</span>
                {pill.label}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Pricing table */}
        <div>
          {/* Table header */}
          <div className="grid grid-cols-4 text-xs font-bold uppercase text-white/50 pb-3">
            <span className="text-[#f0c57a]">Số lượng video</span>
            <span className="flex items-center gap-1">
              <BsPersonFill size={11} /> Có diễn viên
            </span>
            <span className="flex items-center gap-1">
              <BsPersonSlash size={13} /> Không diễn viên
            </span>
            <span className="flex items-center gap-1">
              <LuClock size={11} /> Thời gian
            </span>
          </div>
          {/* Accent line */}
          <div className="h-px bg-white/10 mb-1" />

          {rows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 py-4 border-b border-white/8 text-sm"
            >
              <span className="font-bold text-white">{row.qty}</span>
              <span>
                <span className="font-bold text-white">{row.withActor}</span>{" "}
                <span className="text-white/45 text-xs">VND</span>
              </span>
              <span>
                <span className="font-bold text-white">{row.withoutActor}</span>{" "}
                <span className="text-white/45 text-xs">VND</span>
              </span>
              <span className="text-white/68">{row.duration}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-4 border-t border-white/10 gap-4">
          <p className="text-white/62 text-sm italic">Bạn muốn tư vấn chi tiết cho gói này?</p>
          <button className="bg-navy hover:bg-navy-light text-white rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 transition-colors duration-200 flex-shrink-0">
            Tư vấn ngay →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CARD 2 — GÓI CAO CẤP ──────────────────────────────────────
function CaoCapCard() {
  const rows: PricingRow[] = [
    { qty: "10 video", withActor: "12.000.000", withoutActor: "11.000.000", duration: "1 buổi (4h)" },
    { qty: "20 video", withActor: "18.000.000", withoutActor: "16.000.000", duration: "1 ngày (8h)" },
    { qty: "40 video", withActor: "34.000.000", withoutActor: "30.000.000", duration: "2 ngày" },
    { qty: "100 video", withActor: "75.000.000", withoutActor: "65.000.000", duration: "5 ngày" },
    { qty: "200 video", withActor: "140.000.000", withoutActor: "85.000.000", duration: "10 ngày" },
    { qty: "400 video", withActor: "270.000.000", withoutActor: "160.000.000", duration: "20 ngày" },
  ];

  return (
    <div className="bg-[radial-gradient(circle_at_20%_18%,rgba(86,114,165,0.2),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(51,75,118,0.16),transparent_26%),linear-gradient(135deg,rgba(15,33,68,0.95),rgba(24,43,82,0.88))] rounded-3xl border border-[rgba(173,196,239,0.18)] shadow-[0_18px_45px_rgba(7,17,39,0.3)] overflow-hidden backdrop-blur-xl">
      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-navy-light to-gold" />

      <div className="p-8 md:p-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="md:w-[60%]">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-xl p-3 text-gold flex-shrink-0">
                <LuCamera size={22} />
              </div>
              <h2 className="font-bold text-2xl text-[#f0c57a]">GÓI CAO CẤP</h2>
            </div>

            {/* Subtitle */}
            <p className="font-bold italic text-white/92 text-sm mt-3 mb-4">
              Phù hợp SME cần nội dung chỉn chu – xây dựng hình ảnh chuyên nghiệp
            </p>

            {/* Features */}
            <ul className="space-y-2">
              {[
                "Video cinema-grade cho thương hiệu lớn",
                "Chiến lược nội dung toàn diện do đạo diễn chỉ đạo",
                "Quay studio + ngoại cảnh premium",
                "Motion graphics, VFX, hậu kỳ cao cấp",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-white/82">
                  <FaCheck size={12} className="text-gold-dark flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            {/* Equipment */}
            <div className="flex items-center gap-2 text-xs text-white/55 mt-4">
              <LuCamera size={13} className="flex-shrink-0" />
              <span>Sony Alpha A73 + Lens Cine, đèn studio, mic thu âm chuyên dụng</span>
            </div>
          </div>

          {/* Right column — pills */}
          <div className="md:w-[40%] flex flex-col items-start gap-2">
            {[
              { icon: <LuFilm size={12} />, label: "Video cinema-grade" },
              { icon: <LuLayoutDashboard size={12} />, label: "Studio + ngoại cảnh premium" },
              { icon: <LuFileText size={12} />, label: "Chiến lược nội dung toàn diện" },
              { icon: <LuMonitor size={12} />, label: "Motion graphics + VFX" },
              { icon: <LuUsers size={12} />, label: "Ekip 4-5 người + đạo diễn" },
              { icon: <LuCamera size={12} />, label: "Thiết bị cinema chuyên dụng" },
            ].map((pill) => (
              <div
                key={pill.label}
                className="border border-white/14 rounded-full px-3 py-1.5 text-xs text-white/75 inline-flex items-center gap-2 bg-white/6 backdrop-blur-sm"
              >
                <span className="text-gold/90 flex-shrink-0">{pill.icon}</span>
                {pill.label}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Pricing table */}
        <div>
          <div className="grid grid-cols-4 text-xs font-bold uppercase text-white/50 pb-3">
            <span className="text-[#f0c57a]">Số lượng video</span>
            <span className="flex items-center gap-1">
              <BsPersonFill size={11} /> Có diễn viên
            </span>
            <span className="flex items-center gap-1">
              <BsPersonSlash size={13} /> Không diễn viên
            </span>
            <span className="flex items-center gap-1">
              <LuClock size={11} /> Thời gian
            </span>
          </div>
          <div className="h-px bg-white/10 mb-1" />

          {rows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 py-4 border-b border-white/8 text-sm"
            >
              <span className="font-bold text-white">{row.qty}</span>
              <span>
                <span className="font-bold text-white">{row.withActor}</span>{" "}
                <span className="text-white/45 text-xs">VND</span>
              </span>
              <span>
                <span className="font-bold text-white">{row.withoutActor}</span>{" "}
                <span className="text-white/45 text-xs">VND</span>
              </span>
              <span className="text-white/68">{row.duration}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-4 border-t border-white/10 gap-4">
          <p className="text-white/62 text-sm italic">Bạn muốn tư vấn chi tiết cho gói này?</p>
          <button className="bg-navy hover:bg-navy-light text-white rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 transition-colors duration-200 flex-shrink-0">
            Tư vấn ngay →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CARD 3 — GÓI TRỌN GÓI ─────────────────────────────────────
function TronGoiCard() {
  const features: { icon: ReactNode; text: string }[] = [
    {
      icon: <LuCamera size={16} />,
      text: "Thiết bị cao cấp: Sony Alpha A73 + Lens Cine + Mic Saramonic.",
    },
    {
      icon: <LuCalendar size={16} />,
      text: "Số lượng: 50 - 100 video trong 3-4 tháng",
    },
    {
      icon: <LuFileText size={16} />,
      text: "Kịch bản chi tiết theo từng ngành hàng/nhu cầu.",
    },
    {
      icon: <LuActivity size={16} />,
      text: "Hậu kỳ trọn gói: Edit, âm thanh, hiệu ứng chuẩn xu hướng",
    },
    {
      icon: <LuUsers size={16} />,
      text: "Ekip quay chuyên nghiệp",
    },
    {
      icon: <LuBuilding2 size={16} />,
      text: "Miễn phí Studio & Setup bối cảnh",
    },
  ];

  return (
    <div className="bg-[radial-gradient(circle_at_20%_18%,rgba(86,114,165,0.2),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(51,75,118,0.16),transparent_26%),linear-gradient(135deg,rgba(15,33,68,0.95),rgba(24,43,82,0.88))] rounded-3xl border border-[rgba(173,196,239,0.18)] shadow-[0_18px_45px_rgba(7,17,39,0.3)] p-8 md:p-10 backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">
          <BsStars size={22} className="text-gold" />
        </div>
        <h2 className="font-bold text-2xl text-[#f0c57a]">Hệ Thống Xây Kênh Toàn Diện</h2>
        <span className="bg-gradient-to-r from-navy to-gold-dark text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
          ✦ Best seller
        </span>
      </div>

      {/* Price row */}
      <div className="flex items-baseline gap-0 mt-4 mb-1">
        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(90deg,#f6d58d_0%,#e6bb67_45%,#dca24e_100%)]">
          50,000,000 VNĐ
        </span>
        <span className="text-white/68 font-bold text-base ml-3 italic">Cho 100 Videos</span>
      </div>

      {/* Subtitle */}
      <p className="text-white/62 text-sm mb-6">
        Bán hàng, Nhận diện, Uy tín, Kết nối, Educate...
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="bg-white/[0.06] rounded-2xl p-4 flex items-start gap-3 border border-white/12 backdrop-blur-sm"
          >
            <div className="bg-white/10 rounded-lg p-2 flex-shrink-0">
              <span className="text-gold">{feat.icon}</span>
            </div>
            <p className="text-sm text-white/82">{feat.text}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-6" />

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-sm text-white/68">
            <FaCheck size={12} className="text-gold" />
            Bảo hành chất lượng
          </span>
          <span className="flex items-center gap-1.5 text-sm text-white/68">
            <FaCheck size={12} className="text-gold" />
            Hỗ trợ 24/7
          </span>
        </div>
        <button className="bg-navy hover:bg-navy-light text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 flex-shrink-0">
          Liên hệ ngay
        </button>
      </div>
    </div>
  );
}

// ─── Main export ────────────────────────────────────────────────
export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<Tab>("chuyen-nghiep");

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto">
      {/* Tab switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex gap-2 bg-[radial-gradient(circle_at_24%_32%,rgba(90,117,166,0.16),transparent_34%),linear-gradient(135deg,rgba(15,33,68,0.88),rgba(24,43,82,0.72))] p-1.5 rounded-full border border-white/12 backdrop-blur-xl shadow-[0_18px_40px_rgba(7,17,39,0.24)]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? "px-6 py-3 rounded-full text-sm font-semibold uppercase bg-[linear-gradient(135deg,#d9ab61,#f0c57a)] shadow-[0_10px_25px_rgba(201,161,99,0.24)] text-navy transition-all duration-300"
                  : "px-6 py-3 rounded-full text-sm font-semibold uppercase text-white/72 hover:bg-white/8 transition-all duration-300"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active card */}
      {activeTab === "chuyen-nghiep" && <ChuyenNghiepCard />}
      {activeTab === "cao-cap" && <CaoCapCard />}
      {activeTab === "tron-goi" && <TronGoiCard />}
    </section>
  );
}
