import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PricingSection from "@/components/PricingSection";
import NangLucSection from "@/components/NangLucSection";
import { BsLightningFill } from "react-icons/bs";

export default function BaoGiaPage() {
  return (
    <main className="overflow-x-hidden pt-20 bg-[#F9FAFB]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 text-center">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-120 h-120 bg-[#FFE8D6]/70 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute -top-15 left-1/2 w-160 h-160 bg-pink-200/50 rounded-full blur-3xl -translate-x-1/4 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BsLightningFill size={13} />
            Năng lực sản xuất
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy font-inter tracking-tight mb-6">
            Báo Giá{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-blue-400">
              Dịch Vụ
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
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
