"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function DuAnPage() {
  const projects = [
    { title: "Review Bất Động Sản Cao Cấp", category: "Review", img: "/images/hero-1.jpg" },
    { title: "Trải Nghiệm Dịch Vụ Nha Khoa", category: "Vlog", img: "/images/hero-2.jpg" },
    { title: "Giới Thiệu Sản Phẩm Mỹ Phẩm", category: "Sản Phẩm", img: "/images/hero-3.jpg" },
    { title: "Phỏng Vấn Người Đi Đường", category: "Tương Tác", img: "/images/hero-4.jpg" },
    { title: "Clip Viral Tình Huống Hài", category: "Viral", img: "/images/hero-1.jpg" },
    { title: "Chia Sẻ Kiến Thức Bán Hàng", category: "Giáo Dục", img: "/images/hero-2.jpg" },
    { title: "Khám Phá Quán Ăn Ngon", category: "Review", img: "/images/hero-3.jpg" },
    { title: "Livestream Khai Trương Cửa Hàng", category: "Sự Kiện", img: "/images/hero-4.jpg" },
  ];

  return (
    <main className="overflow-x-hidden pt-20 bg-[#F9FAFB]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <div className="inline-block bg-navy/5 text-navy px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
          Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-navy font-inter tracking-tight mb-6">
          Dự Án <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">Tiêu Biểu</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Khám phá những sản phẩm truyền thông đột phá mà đội ngũ chúng tôi đã mang đến cho khách hàng.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Tất Cả", "Sản Xuất Video", "Xây Kênh Vlog", "Livestream Tương Tác", "Video Viral", "Review Sản Phẩm"].map((filter, index) => (
            <button
              key={index}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                index === 0 
                ? "bg-navy text-white shadow-md" 
                : "bg-white text-navy border border-gray-200 hover:border-gold hover:text-gold"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors z-10 duration-500"></div>
              {/* Note: Fallback to placeholder if img not found, but we keep the current struct */}
              <div className="w-full h-full bg-gray-200 relative">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                        // Suppress error in case missing image file
                        e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback image background just in case */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 -z-10"></div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 bg-gradient-to-t from-black/80 via-transparent to-black/30">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex justify-between items-end">
                  <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 max-w-[80%]">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-gold/90 text-white flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:bg-gold group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <FaPlay className="ml-1" size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3.5 rounded-full border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-colors duration-300">
            Xem thêm dự án
          </button>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
