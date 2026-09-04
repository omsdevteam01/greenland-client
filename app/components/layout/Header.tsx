"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Home, Info, FolderKanban, Settings, Mail } from "lucide-react";
import { mediaUrl } from "@/lib/media";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
     { name: "Services", href: "/services", icon: Settings },
    { name: "Projects", href: "/projects", icon: FolderKanban },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-cyan-700 border-b border-cyan-400/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
            : "bg-cyan-700 border-b border-cyan-400/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with Company Name */}
            <Link
              href="/"
              className="flex items-center gap-2 flex-shrink-0 group"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={mediaUrl("/images/logo main.png")}
                alt="Ruhan Groups"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
              <div className="block">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-tight">Ruhan</span>
                  <span className="text-cyan-200 font-bold text-sm sm:text-base md:text-lg">Groups</span>
                </div>
                <p className="text-white/70 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[1.5px] sm:tracking-[2px] -mt-0.5">
                  Steel Fabrication & Construction
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-white bg-cyan-700/50 border border-cyan-300/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                      : "text-white/80 hover:text-white hover:bg-cyan-700/30"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  )}
                </Link>
              ))}
            </div>
{/* Right Side - CTA Button */}
<div className="hidden lg:flex items-center gap-4">
  <a
  href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-cyan-700 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-cyan-50 active:scale-[0.97] touch-manipulation"
  onClick={() => setIsOpen(false)}
>
  <Phone size={18} />
  Call Now
</a>
</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[7px]" : "group-hover:w-6"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-0" : "group-hover:w-4"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : "group-hover:w-6"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 transition-opacity duration-500 lg:hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel - INCLUDES BOTH BUTTONS INSIDE */}
        <div
          className={`fixed top-0 right-0 h-auto w-[85%] max-w-sm bg-cyan-700 rounded-bl-2xl rounded-br-2xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6">
            {/* Close Button - Top Right */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-white bg-cyan-600/50 border-l-4 border-cyan-300 rounded-r-lg"
                        : "text-cyan-100 hover:text-white hover:bg-white/10 rounded-lg"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={20} className={isActive(item.href) ? "text-cyan-300" : "text-cyan-200"} />
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer - BOTH BUTTONS INSIDE THE CARD */}
            <div className="mt-4 pt-4 border-t border-cyan-500/30 space-y-2.5">
              <a
                href="tel:+917708776022"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-cyan-700 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-cyan-50"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                Call Now
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-3 border-2 border-cyan-400 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}