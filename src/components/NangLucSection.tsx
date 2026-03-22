import { LuCamera } from "react-icons/lu";
import { BsStars } from "react-icons/bs";

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
    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      {/* Left — text */}
      <div className="flex-1 w-full">
        {/* Category pill */}
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">
          <LuCamera size={13} className="text-pink-400" />
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
      <div className="flex-1 w-full">
        <div className="relative w-full">
          <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

// ─── Main export ────────────────────────────────────────────────
export default function NangLucSection() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 rounded-full px-4 py-1.5 text-sm font-semibold text-pink-500 mb-6">
            <BsStars size={14} />
            Năng lực sản xuất
          </div>

          {/* Heading */}
          <h2 className="font-extrabold text-4xl md:text-5xl text-gray-900 leading-tight max-w-2xl">
            Nếu chưa chắc chắn, hãy xem chúng tôi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400">
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
