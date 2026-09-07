'use client';

import { Phone, Mail, MapPin, Send, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { mediaUrl } from "@/lib/media";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  // Get data from environment variables
  const phone = process.env.NEXT_PUBLIC_PHONE || "+91 7708 7760 22";
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL || "Info@gltgroup.com";
  const address = process.env.NEXT_PUBLIC_ADDRESS || "3/72 swamimalai Main Road, Baburajapuram, kumbakonam.";
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Ruhan Groups";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN || "#";
  const twitter = process.env.NEXT_PUBLIC_TWITTER || "#";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM || "#";

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background - Same as Header */}
      <div className="absolute inset-0 bg-[#A99479]"></div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A99479]/20 via-transparent to-[#927E64]/30"></div>

      {/* Glassy Grid Pattern */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.04] z-[4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float hidden md:block"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-18 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Column 1 - Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute -inset-3 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={mediaUrl("images/logo new.png")}
                  alt={companyName}
                  className="h-12 sm:h-14 w-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold text-base sm:text-xl tracking-tight">Ruhan</span>
                  <span className="text-white font-bold text-base sm:text-xl">Groups</span>
                </div>
                <p className="text-white/90 text-[7px] sm:text-[9px] uppercase tracking-[2px] -mt-0.5">
                  Steel Fabrication & Construction
                </p>
              </div>
            </Link>
            
            <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-xs">
              Building stronger structures with innovative engineering and long-lasting quality since 2020.
            </p>
            
            <div className="flex items-center gap-3 mt-4">
              <span className="w-8 h-0.5 bg-white/50" />
              <span className="text-white/80 text-[8px] sm:text-[10px] uppercase tracking-[3px]">Excellence</span>
            </div>

            {/* Social Links - Moved here for better layout */}
            <div className="flex items-center gap-2 mt-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/20 hover:border-white/60 hover:bg-white/15 flex items-center justify-center text-white/95 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/20 hover:border-white/60 hover:bg-white/15 flex items-center justify-center text-white/95 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/20 hover:border-white/60 hover:bg-white/15 flex items-center justify-center text-white/95 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white" />
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 text-xs sm:text-sm hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white" />
              Contact Us
            </h4>

            <div className="space-y-3">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-white/90 hover:text-white transition-all duration-300 group"
              >
                <Phone size={15} className="text-white shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                  {phone}
                </span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="flex items-start gap-3 text-white/90 hover:text-white transition-all duration-300 group"
              >
                <Mail size={15} className="text-white shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                  {emailAddress}
                </span>
              </a>

              <div className="flex items-start gap-3 text-white/90 group">
                <MapPin size={15} className="text-white shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-relaxed">
                  {address}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 - Newsletter & Brands */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white" />
              Stay Updated
            </h4>

            <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-3">
              Subscribe for latest projects & updates.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-white/70 outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                required
              />

              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white hover:bg-white text-[#3F382F] p-1.5 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send size={14} className="sm:w-4 sm:h-4" />
              </button>
            </form>

            {/* Brands Section */}
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">

              {/* Greenland */}
              <Link
                href="/greenland"
                className="group flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-2.5 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse-glow"></div>
                    <img
                      src={mediaUrl("/images/logo.webp")}
                      alt="Greenland"
                      className="h-6 sm:h-8 w-auto object-contain relative z-10"
                    />
                  </div>

                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">Greenland</p>
                    <p className="text-white/85 text-[6px] sm:text-[8px] uppercase tracking-wider">Tensile Shade</p>
                  </div>
                </div>

                <ArrowRight
                  size={14}
                  className="text-white/95 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>

              {/* Construction & Interiors */}
              <Link
                href="/construction"
                className="group flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-2.5 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse-glow"></div>
                    <img
                      src={mediaUrl("/images/logo main.png")}
                      alt="Construction & Interiors"
                      className="h-6 sm:h-8 w-auto object-contain relative z-10"
                    />
                  </div>

                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">
                      Construction &amp; Interiors
                    </p>
                    <p className="text-white/85 text-[6px] sm:text-[8px] uppercase tracking-wider">
                      Building &amp; Design
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={14}
                  className="text-white/95 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact with Bigger Darker Text */}
        <div className="border-t border-white/15 mt-4 sm:mt-6 pt-2.5 sm:pt-3 flex flex-col md:flex-row justify-between items-center gap-1.5">
          <p className="text-white/90 text-[10px] sm:text-xs font-medium text-center sm:text-left">
            © {currentYear} {companyName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium">
            <Link
              href="/privacy"
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <span className="w-0.5 h-0.5 rounded-full bg-white/30" />

            <Link
              href="/terms"
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>

            <span className="w-0.5 h-0.5 rounded-full bg-white/30" />

            <Link
              href="/sitemap"
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-20px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;