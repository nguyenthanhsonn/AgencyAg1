"use client";

import Image from "next/image";
import { HiPhone, HiMapPin } from "react-icons/hi2";

const serviceLinks = [
  { label: "Quay phim/Sản xuất video lẻ", href: "#dich-vu" },
  { label: "Tư vấn chiến lược Content", href: "#dich-vu" },
  { label: "Đào tạo nhân sự In-house", href: "#dich-vu" },
];

const socialLinks = [
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="lien-he" className="bg-navy-dark pt-16 pb-8">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/logos/logo-dark.png"
              alt="SHORT PRO."
              width={140}
              height={42}
              className="h-16 lg:h-28 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Dịch vụ xây dựng kênh TikTok chuyên nghiệp, giúp thương hiệu của
              bạn được nhớ, được tin và được mua.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/8 text-white/60 hover:bg-gold hover:text-navy transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Dich vu */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">
              Dịch vụ
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Lien he */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:05238600068"
                  className="flex items-start gap-3 text-white/50 text-sm hover:text-white transition-colors duration-200"
                >
                  <HiPhone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>0523 860 068</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:08884306200"
                  className="flex items-start gap-3 text-white/50 text-sm hover:text-white transition-colors duration-200"
                >
                  <HiPhone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>0888 430 620</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm hover:text-white transition-colors duration-200">
                <HiMapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>458/64 Đ. 3 Tháng 2, Quận 10, TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/8">
          <p className="text-white/30 text-sm">
            © 2026 SHORT PRO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/30 text-sm hover:text-white/60 transition-colors duration-200 cursor-pointer">
              Chính sách bảo mật
            </button>
            <button className="text-white/30 text-sm hover:text-white/60 transition-colors duration-200 cursor-pointer">
              Điều khoản sử dụng
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
