"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Dịch vụ", href: "/#dich-vu" },
  { label: "Báo giá", href: "/bao-gia" },
  { label: "Dự Án", href: "/du-an" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      if (pathname === "/") {
        const hash = href.substring(1);
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header
      className={`font-inter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)]"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-360 mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/logo-light.png"
              alt="SHORT PRO. Logo"
              width={160}
              height={48}
              className="h-16 md:h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-navy font-semibold text-base hover:text-gold transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("/lien-he")}
              className="bg-gold hover:bg-gold-dark text-white font-bold px-6 py-2.5 rounded-full text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Tư vấn miễn phí
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-navy font-semibold py-3 px-2 text-base hover:text-gold hover:bg-gold-light/30 rounded-lg transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/lien-he")}
              className="mt-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-6 rounded-full text-sm transition-all duration-200 cursor-pointer"
            >
              Tư vấn miễn phí
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
