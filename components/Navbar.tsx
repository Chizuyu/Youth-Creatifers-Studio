"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[52px] z-50 frosted-nav border-b border-surface-variant transition-all duration-200 ${isScrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
        }`}
    >
      <div className="max-w-max-width mx-auto h-full flex items-center justify-between px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-primary-heading text-on-background font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
        >
          Youth Creatifers Studio
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[14px] font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={() => handleButtonClick("#contact")} className="bg-primary text-white text-[13px] font-semibold px-6 py-2 rounded-full hover:bg-[#0077ED] transition-all transform active:scale-95">
          Hire Us
        </button>
      </div>
    </nav>
  );
}
