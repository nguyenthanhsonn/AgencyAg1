"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiSparkles, HiArrowUpRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DuAnPage() {
  const [activeVideo, setActiveVideo] = useState<null | {
    title: string;
    category: string;
    video: string;
  }>(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const projects = [
    {
      title: "Review Bất Động Sản Cao Cấp",
      category: "Review",
      img: "/images/hero-1.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      title: "Trải Nghiệm Dịch Vụ Nha Khoa",
      category: "Vlog",
      img: "/images/hero-2.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Giới Thiệu Sản Phẩm Mỹ Phẩm",
      category: "Sản Phẩm",
      img: "/images/hero-3.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      title: "Phỏng Vấn Người Đi Đường",
      category: "Tương Tác",
      img: "/images/hero-4.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      title: "Clip Viral Tình Huống Hài",
      category: "Viral",
      img: "/images/hero-1.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    },
    {
      title: "Chia Sẻ Kiến Thức Bán Hàng",
      category: "Giáo Dục",
      img: "/images/hero-2.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    },
    {
      title: "Khám Phá Quán Ăn Ngon",
      category: "Review",
      img: "/images/hero-3.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    {
      title: "Livestream Khai Trương Cửa Hàng",
      category: "Sự Kiện",
      img: "/images/hero-4.jpg",
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
  ];

  const featuredVideos = [
    {
      title: "Brand Reel mở màn chiến dịch",
      tag: "Video dọc",
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      stats: "Hook mạnh trong 3 giây đầu",
    },
    {
      title: "Case study định vị thương hiệu",
      tag: "Case study",
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      stats: "Format review giàu cảm xúc",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-[linear-gradient(180deg,#f5f8fd_0%,#edf3fb_100%)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-navy/6 text-navy px-4 py-1.5 rounded-full font-semibold text-sm mb-6 border border-navy/10">
              <HiSparkles className="w-4 h-4 text-gold-dark" />
              Portfolio thực chiến
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy font-inter tracking-tight leading-[1.05] mb-6">
              Dự Án
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-navy-light to-gold-dark">
                {" "}
                tiêu biểu
              </span>
              <br />
              cho từng nhóm ngành
            </h1>
            <p className="text-gray-600 max-w-2xl text-lg leading-8 mb-8">
              Khám phá những video review, branding reel, case study và nội dung
              chuyển đổi mà đội ngũ chúng tôi đã triển khai cho khách hàng ở
              nhiều lĩnh vực khác nhau.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-[24px] border border-[#d9e4f4] bg-[linear-gradient(180deg,#ffffff_0%,#eff5fc_100%)] p-5 shadow-sm">
                <p className="text-3xl font-black text-navy mb-1">120+</p>
                <p className="text-sm text-gray-500">Video thương mại đã triển khai</p>
              </div>
              <div className="rounded-[24px] border border-[#d9e4f4] bg-[linear-gradient(180deg,#ffffff_0%,#eff5fc_100%)] p-5 shadow-sm">
                <p className="text-3xl font-black text-navy mb-1">15+</p>
                <p className="text-sm text-gray-500">Ngành hàng đã thực chiến</p>
              </div>
              <div className="rounded-[24px] border border-[#e4dcc9] bg-[linear-gradient(180deg,#fffdfa_0%,#f6f1e7_100%)] p-5 shadow-sm">
                <p className="text-3xl font-black text-gold-dark mb-1">10M+</p>
                <p className="text-sm text-gray-500">Lượt xem tích lũy từ dự án</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Tất Cả", "Sản Xuất Video", "Xây Kênh Vlog", "Livestream Tương Tác", "Video Viral", "Review Sản Phẩm"].map((filter, index) => (
                <button
                  key={index}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-navy text-white shadow-md"
                      : "bg-[linear-gradient(180deg,#fbfdff_0%,#f0f5fc_100%)] text-navy border border-[#d8e3f3] hover:border-gold hover:text-gold"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#d8e3f3] bg-[linear-gradient(180deg,#fcfdff_0%,#eef4fb_100%)] p-4 shadow-[0_20px_50px_rgba(23,42,87,0.08)]">
            <div className="relative overflow-hidden rounded-[28px] min-h-[520px] bg-[radial-gradient(circle_at_22%_20%,rgba(61,95,150,0.28),transparent_26%),linear-gradient(180deg,#162c54_0%,#102445_100%)] p-8 md:p-10 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

              <div className="relative z-10">
                <p className="text-gold-light text-sm font-semibold uppercase tracking-[0.22em] mb-3">
                  Featured Selection
                </p>
                <h2 className="text-white text-3xl font-bold leading-tight mb-4">
                  Những format đang giúp thương hiệu nổi bật hơn trên TikTok
                </h2>
                <p className="text-white/70 leading-7">
                  Từ branded reel đến case study bán hàng, mỗi video đều được
                  thiết kế để vừa đẹp về hình ảnh vừa rõ về mục tiêu chuyển đổi.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {featuredVideos.map((video) => (
                  <div
                    key={video.title}
                    className="rounded-[24px] overflow-hidden border border-white/10 bg-white/6 backdrop-blur-sm shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
                  >
                    <div className="aspect-[9/16] bg-black">
                      <video
                        src={video.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    </div>
                    <div className="p-4">
                      <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold mb-3">
                        {video.tag}
                      </div>
                      <h3 className="text-white font-bold leading-snug mb-2">
                        {video.title}
                      </h3>
                      <p className="text-white/60 text-sm">{video.stats}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-dark mb-2">
              Project Library
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-navy">
              Kho dự án theo định dạng nội dung
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#d8e3f3] bg-white/80 text-navy font-semibold hover:border-gold hover:text-gold-dark transition-colors">
            Xem tất cả
            <HiArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 180}
              data-aos-duration="650"
              data-aos-anchor-placement="top-bottom"
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer border border-[#dce5f3] shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() =>
                setActiveVideo({
                  title: project.title,
                  category: project.category,
                  video: project.video,
                })
              }
            >
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors z-10 duration-500"></div>
              <div className="w-full h-full bg-gray-200 relative">
                <video
                  src={project.video}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.img}
                />
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover -z-10"
                />
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
          <button className="px-8 py-3.5 rounded-full border border-[#d1def1] bg-[linear-gradient(180deg,#fbfdff_0%,#eff5fc_100%)] text-navy font-bold hover:border-gold hover:text-gold-dark transition-colors duration-300">
            Xem thêm dự án
          </button>
        </div>
      </section>

      <CTA />
      <Footer />

      {activeVideo && (
        <div
          className="fixed inset-0 z-[120] bg-[rgba(6,14,31,0.78)] backdrop-blur-md flex items-center justify-center px-4 py-8"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-[32px] overflow-hidden border border-white/12 bg-[linear-gradient(135deg,rgba(15,33,68,0.96),rgba(24,43,82,0.9))] shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/35 text-white flex items-center justify-center border border-white/12 hover:bg-black/50 transition-colors"
              aria-label="Đóng video"
            >
              <IoClose size={24} />
            </button>

            <div className="p-5 md:p-6 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold mb-3">
                {activeVideo.category}
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {activeVideo.title}
              </h3>
            </div>

            <div className="bg-black">
              <div className="aspect-video">
                <video
                  key={activeVideo.video}
                  src={activeVideo.video}
                  className="w-full h-full object-contain"
                  autoPlay
                  controls
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
