import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PricingSection from "@/components/PricingSection";
import NangLucSection from "@/components/NangLucSection";
import { BsLightningFill } from "react-icons/bs";

export default function BaoGiaPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-36 pb-28 md:pt-40 md:pb-36 text-center bg-[radial-gradient(circle_at_18%_22%,rgba(94,120,170,0.22),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(75,105,160,0.16),transparent_24%),linear-gradient(180deg,#0f2144_0%,#132a53_52%,#163160_100%)]">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.03)_100%)]" />
        <div className="absolute top-0 left-0 w-160 h-160 bg-[#27457d]/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute -top-10 left-1/2 w-200 h-200 bg-[#18315e]/28 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-140 h-140 bg-[#34558d]/18 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/14 backdrop-blur-sm">
            <BsLightningFill size={13} />
            Năng lực sản xuất
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold font-inter tracking-tight mb-6">
            <span className="text-[#f5f8ff]">Báo Giá </span>
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#f0c57a_0%,#dcae5d_45%,#f4cf8c_100%)]">
              Dịch Vụ
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/82 max-w-2xl mx-auto text-lg leading-relaxed">
            Chúng tôi đầu tư vào thiết bị chuẩn production được dùng trong quảng cáo thương mại. Để mỗi frame hình nâng tầm thương hiệu của bạn.
          </p>
        </div>
      </section>

      {/* Pricing Section with interactive tabs */}
      <PricingSection />
      <NangLucSection />

      <CTA />
      <Footer />
    </main>
  );
}
