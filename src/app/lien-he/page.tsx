import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

export default function LienHePage() {
  return (
    <main className="overflow-x-hidden pt-20 bg-[#F9FAFB]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <div className="inline-flex justify-center items-center gap-2 bg-navy/5 text-navy px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
           <Image src="/logos/logo-light.png" alt="Logo" width={24} height={24} className="h-4 w-auto object-contain brightness-0" /> Liên hệ với chúng tôi
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-navy font-inter tracking-tight mb-6">
          Kết nối <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">Ngay</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Bắt đầu xây dựng hệ thống nội dung chuyên nghiệp cho thương hiệu của bạn. Chúng tôi phản hồi trong vòng 24h làm việc.
        </p>
      </section>

      {/* Value Props */}
      <section className="px-4 max-w-5xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-8 rounded-[32px] text-center shadow-sm hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <h3 className="font-bold text-xl text-navy mb-3">Hiệu quả</h3>
             <p className="text-gray-500 text-sm leading-relaxed">Tối ưu quy trình, rút ngắn thời gian sản xuất nhưng vẫn đảm bảo chất lượng đầu ra cao nhất.</p>
           </div>
           
           <div className="bg-white p-8 rounded-[32px] text-center shadow-sm hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h3 className="font-bold text-xl text-navy mb-3">Chính xác</h3>
             <p className="text-gray-500 text-sm leading-relaxed">Thấu hiểu brief, bám sát mục tiêu thương hiệu và đối tượng mục tiêu trong từng sản phẩm.</p>
           </div>

           <div className="bg-white p-8 rounded-[32px] text-center shadow-sm hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-gold/10 text-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h3 className="font-bold text-xl text-navy mb-3">Giá thành</h3>
             <p className="text-gray-500 text-sm leading-relaxed">Tối ưu chi phí sản xuất, mang đến giá trị vượt trội so với ngân sách đầu tư.</p>
           </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 max-w-6xl mx-auto pb-24">
        <div className="bg-white rounded-[40px] p-2 md:p-3 shadow-sm border border-gray-100 flex flex-col lg:flex-row overflow-hidden gap-4">
          
          {/* Info Side */}
          <div className="bg-navy rounded-[32px] text-white p-8 md:p-12 lg:w-1/3 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-3xl font-bold mb-2 relative z-10">Thông tin liên hệ</h2>
            <p className="text-white/70 mb-10 relative z-10">Chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn.</p>
            
            <div className="space-y-8 relative z-10 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold-light">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-medium mb-1">Điện thoại / Zalo</h4>
                  <p className="font-bold text-lg">0523 860 068</p>
                  <p className="font-bold text-lg">0888 430 620</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold-light">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-medium mb-1">Email</h4>
                  <p className="font-bold">contact@shortpro.vn</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold-light">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-medium mb-1">Văn phòng</h4>
                  <p className="font-medium leading-relaxed">458/64 Đường 3 Tháng 2,<br/>Quận 10, TP. Hồ Chí Minh</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Map Side */}
          <div className="lg:w-2/3 max-h-[600px] min-h-[400px] rounded-[32px] overflow-hidden relative group">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x31752f20bd5c9545%3A0xe5ed8a1d7ec7f2dc!2zNDU4LCA2NCDEkC4gMyBUaMOhbmcgMiwgUGjGsOG7nW5nIDEyLCBRdeG6rW4gMTAsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1701332768565!5m2!1svi!2s" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={false} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale group-hover:grayscale-0 transition-all duration-700"
             ></iframe>
             <a href="https://maps.app.goo.gl/pK3t1oM4HQSqwTw47" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg text-navy font-bold flex items-center gap-2 hover:bg-gold hover:text-white transition-all duration-300">
               <FaLocationArrow /> Xem trên Google Maps
             </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
