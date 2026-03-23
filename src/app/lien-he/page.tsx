import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

export default function LienHePage() {
  const officeAddress = "458/64 Đường 3 Tháng 2, Quận 10, TP. Hồ Chí Minh";
  const encodedOfficeAddress = encodeURIComponent(officeAddress);

  return (
    <main className="overflow-x-hidden bg-[linear-gradient(180deg,#f7faff_0%,#eef3fa_100%)]">
      <Navbar />
      <section className="pt-36 pb-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-10 items-stretch">
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 bg-navy/5 text-navy px-4 py-1.5 rounded-full font-semibold text-sm mb-6 border border-navy/10">
              <Image
                src="/logos/logo-light.png"
                alt="Logo"
                width={24}
                height={24}
                className="h-4 w-auto object-contain brightness-0"
              />
              Liên hệ với chúng tôi
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-navy font-inter tracking-tight leading-[1.08] mb-6">
              Kết nối để bắt đầu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                {" "}
                hành trình nội dung
              </span>
            </h1>

            <p className="text-gray-600 max-w-2xl text-lg leading-8 mb-8">
              Bắt đầu xây dựng hệ thống nội dung chuyên nghiệp cho thương hiệu
              của bạn. Chúng tôi phản hồi trong vòng 24h làm việc và có thể tư
              vấn nhanh theo đúng nhu cầu hiện tại.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="tel:05238600068"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white font-semibold shadow-[0_12px_28px_rgba(10,31,68,0.16)] hover:bg-navy-light transition-colors"
              >
                <FaPhoneAlt size={14} />
                0523 860 068
              </a>
              <a
                href="mailto:contact@shortpro.vn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d3deef] bg-white/80 text-navy font-semibold hover:border-gold hover:text-gold-dark transition-colors"
              >
                <FaEnvelope size={14} />
                contact@shortpro.vn
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-[28px] border border-[#d9e4f4] bg-[linear-gradient(180deg,#ffffff_0%,#eff5fc_100%)] p-6 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="font-bold text-lg text-navy mb-2">Phản hồi nhanh</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Ưu tiên tư vấn đúng nhu cầu thay vì gửi báo giá chung chung.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#d9e4f4] bg-[linear-gradient(180deg,#ffffff_0%,#eff5fc_100%)] p-6 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="font-bold text-lg text-navy mb-2">Làm việc rõ ràng</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Brief, timeline và cách triển khai được thống nhất ngay từ đầu.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#e4dcc9] bg-[linear-gradient(180deg,#fffdfa_0%,#f6f1e7_100%)] p-6 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-gold/12 text-gold-dark flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="font-bold text-lg text-navy mb-2">Tối ưu ngân sách</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Đề xuất phương án phù hợp với giai đoạn và mục tiêu của brand.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-[#d8e3f3] bg-[linear-gradient(180deg,#fcfdff_0%,#eef4fb_100%)] p-6 md:p-7 shadow-[0_20px_50px_rgba(23,42,87,0.08)]">
            <div className="rounded-[28px] bg-navy text-white p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <p className="text-gold-light text-sm font-semibold uppercase tracking-[0.18em] mb-4">
                  Contact Desk
                </p>
                <h2 className="text-3xl md:text-[2.2rem] font-bold leading-tight mb-4">
                  Thông tin liên hệ
                </h2>
                <p className="text-white/72 leading-7 mb-8">
                  Chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn qua điện thoại,
                  email hoặc gặp trực tiếp tại văn phòng.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold-light">
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm font-medium mb-1">
                        Điện thoại / Zalo
                      </h4>
                      <p className="font-bold text-lg">0523 860 068</p>
                      <p className="font-bold text-lg">0888 430 620</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold-light">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm font-medium mb-1">
                        Email
                      </h4>
                      <p className="font-bold text-lg break-all">
                        contact@shortpro.vn
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold-light">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm font-medium mb-1">
                        Văn phòng
                      </h4>
                      <p className="font-medium leading-relaxed">
                        458/64 Đường 3 Tháng 2,
                        <br />
                        Quận 10, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/6 p-5">
                  <p className="text-white/55 text-sm mb-1">Giờ làm việc</p>
                  <p className="text-white font-semibold">
                    Thứ 2 - Thứ 7, 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] border border-[#d8e3f3] bg-[linear-gradient(180deg,#fcfdff_0%,#eef4fb_100%)] p-3 md:p-4 shadow-sm">
          <div className="rounded-[32px] overflow-hidden relative group min-h-[460px]">
            <iframe
              src={`https://www.google.com/maps?q=${encodedOfficeAddress}&z=17&hl=vi&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-6 left-6 rounded-[24px] bg-white/88 backdrop-blur-md px-5 py-4 shadow-[0_14px_34px_rgba(10,31,68,0.12)] max-w-[320px]">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold mb-2">
                Office Pin
              </p>
              <h3 className="text-lg font-bold text-navy mb-1">
                458/64 Đường 3 Tháng 2
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Quận 10, TP. Hồ Chí Minh
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedOfficeAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/92 backdrop-blur-md px-6 py-3 rounded-full shadow-lg text-navy font-bold flex items-center gap-2 hover:bg-gold hover:text-white transition-all duration-300"
            >
              <FaLocationArrow /> Xem trên Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
