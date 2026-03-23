import { LuCamera } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import CardSwap, { Card } from "../uiux/CardSwap";

// ─── Equipment pill ──────────────────────────────────────────────
function EquipmentPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
      {label}
    </span>
  );
}

// ─── Block 1 — THIẾT BỊ ─────────────────────────────────────────
function ThietBiBlock() {
  const pills = ["Sony A73", "Sony A74", "FX3", "Lens Cine", "Gimbal DJI"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] items-center gap-12 lg:gap-16">
      {/* Left — text */}
      <div className="w-full max-w-2xl">
        {/* Category pill */}
        <div className="inline-flex items-center gap-2 border border-navy/12 rounded-full px-4 py-1.5 text-xs font-semibold text-navy/70 tracking-widest uppercase mb-5 bg-white">
          <LuCamera size={13} className="text-gold-dark" />
          THIẾT BỊ
        </div>

        {/* Heading */}
        <h3 className="font-extrabold text-2xl md:text-3xl text-gray-900 leading-snug mb-4">
          Một video tốt không chỉ bắt đầu từ kịch bản.
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed max-w-md">
          Chúng tôi đầu tư vào thiết bị chuẩn production được dùng trong quảng
          cáo thương mại. Để mỗi frame nâng tầm thương hiệu của bạn.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mt-5">
          {pills.map((pill) => (
            <EquipmentPill key={pill} label={pill} />
          ))}
        </div>
      </div>

      {/* Right — image placeholder */}
      <div className="w-full flex justify-center lg:justify-end lg:pl-6">
        <div
          className="w-full max-w-[420px]"
          style={{ height: "410px", position: "relative" }}
        >
          <CardSwap
            cardDistance={46}
            verticalDistance={34}
            delay={3000}
            pauseOnHover={false}
          >
            <Card>
              <img
                src="https://i.pinimg.com/avif/736x/7b/90/a1/7b90a1ddf37bc30327d1b4054c349399.avf"
                alt="Editorial reference 1"
              />
            </Card>
            <Card>
              <img
                src="https://i.pinimg.com/736x/80/4f/5a/804f5a6e8acd9d340b8d2a494df86f5f.jpg"
                alt="Editorial reference 2"
              />
            </Card>
            <Card>
              <img
                src="https://i.pinimg.com/736x/0f/6c/79/0f6c7988ae6a5dd384683be4e9a0ec59.jpg"
                alt="Editorial reference 3"
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ────────────────────────────────────────────────
export default function NangLucSection() {
  return (
    <section className="py-24 bg-[#eef3fa]">
      <div className="max-w-7xl mx-auto px-4">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-navy/9 border border-navy/14 rounded-full px-4 py-1.5 text-sm font-semibold text-navy mb-6">
            <BsStars size={14} />
            Năng lực sản xuất
          </div>

          {/* Heading */}
          <h2 className="font-extrabold text-4xl md:text-5xl text-gray-900 leading-tight max-w-2xl">
            Nếu chưa chắc chắn, hãy xem chúng tôi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-navy-light to-gold-dark">
              làm được gì.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-base md:text-lg mt-5 max-w-xl leading-relaxed">
            Chất lượng không chỉ nằm ở con số. Nó nằm ở hệ thống sản xuất phía
            sau.
          </p>
        </div>

        {/* ── Feature blocks ── */}
        <div className="space-y-24">
          <ThietBiBlock />
        </div>
      </div>
    </section>
  );
}
