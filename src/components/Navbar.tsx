"use client";

import "@/scss/navbar.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/components/PageTransitionProvider";

const navLinks = [
  { label: "Dịch vụ", href: "/#dich-vu" },
  { label: "Báo giá", href: "/bao-gia" },
  { label: "Dự Án", href: "/du-an" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navigate } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    setMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate("/");
  };

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
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="header-shell">
      <nav className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__brand-wrap">
          <button
            type="button"
            onClick={handleHomeClick}
            className="header__brand-button"
            aria-label="Ve trang dau"
          >
            <Image
              src="/logos/logo-light.png"
              alt="SHORT PRO. Logo"
              width={160}
              height={48}
              className="h-14 md:h-20 w-auto object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(76%) sepia(32%) saturate(712%) hue-rotate(355deg) brightness(93%) contrast(86%)",
              }}
              priority
            />
          </button>
        </div>

        <ul className="header__menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="header__menu-button"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <button
            onClick={() => handleNavClick("/bao-gia")}
            className="header__ghost-button"
          >
            Báo giá
          </button>
          <button
            onClick={() => handleNavClick("/lien-he")}
            className="header__cta"
          >
            Nhận tư vấn
          </button>
        </div>

        <button
          className={`header__toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`header__mobile-panel ${menuOpen ? "is-open" : ""}`}>
        <div className="header__mobile-inner">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="header__mobile-link"
            >
              {link.label}
            </button>
          ))}
          <div className="header__mobile-actions">
            <button
              onClick={() => handleNavClick("/bao-gia")}
              className="header__mobile-ghost"
            >
              Báo giá
            </button>
            <button
              onClick={() => handleNavClick("/lien-he")}
              className="header__mobile-cta"
            >
              Nhận tư vấn
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
