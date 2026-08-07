'use client';

import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
    { href: '/#services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
      }}
    >
      {/* Background Glow Effects - Hidden on mobile */}
      <div className="hidden md:block absolute -top-40 -right-20 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Glassy Grid Pattern - Hidden on mobile */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.02] z-[4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,213,232,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,213,232,.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Top Section - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
          {/* Company Info - With Logo Image like Header - Wordings visible on mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 group">
              <div className="relative">
                {/* Glow behind logo like header */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-cyan-400/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="/images/logo main.png"
                  alt={companyName}
                  className="h-9 sm:h-12 w-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(22,213,232,0.2)]"
                />
              </div>
              {/* Company Name - Always visible on mobile */}
              <div className="block">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-white font-bold text-xs sm:text-lg tracking-tight drop-shadow-lg">Ruhan</span>
                  <span className="text-cyan-400 font-bold text-xs sm:text-lg drop-shadow-lg">Groups</span>
                </div>
                <p className="text-white/40 text-[6px] sm:text-[8.5px] uppercase tracking-[1px] sm:tracking-[2px] drop-shadow-lg -mt-0.5">Construction & Engineering</p>
              </div>
            </Link>
            <p className="text-white/50 text-[11px] sm:text-sm leading-relaxed mt-1.5 sm:mt-3">
              Building stronger structures with innovative engineering and long-lasting quality since 2020.
            </p>
            <div className="flex items-center gap-2.5 sm:gap-3 mt-2.5 sm:mt-4">
              <span className="w-5 sm:w-8 h-0.5 bg-cyan-400/50" />
              <span className="text-cyan-400/50 text-[7px] sm:text-[10px] uppercase tracking-[1.5px] sm:tracking-[3px]">Construction</span>
            </div>
          </div>

          {/* Quick Links & Contact Info - Combined in one row on mobile */}
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold text-[11px] sm:text-sm mb-2.5 sm:mb-4 uppercase tracking-wider">
                  Quick Links
                </h4>
                <ul className="space-y-1.5 sm:space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/40 text-[11px] sm:text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400/30" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-white font-semibold text-[11px] sm:text-sm mb-2.5 sm:mb-4 uppercase tracking-wider">
                  Contact Info
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-2 sm:gap-3 text-white/40 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <Phone size={13} className="sm:w-4 sm:h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-start gap-2 sm:gap-3 text-white/40 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <Mail size={13} className="sm:w-4 sm:h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {emailAddress}
                    </span>
                  </a>
                  <div className="flex items-start gap-2 sm:gap-3 text-white/40 group">
                    <MapPin size={13} className="sm:w-4 sm:h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-sm leading-relaxed">
                      {address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Greenland - Mobile optimized */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold text-[11px] sm:text-sm mb-2.5 sm:mb-4 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-white/40 text-[11px] sm:text-sm leading-relaxed mb-2.5 sm:mb-4">
              Subscribe for latest projects and updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2.5 text-[11px] sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-cyan-400 hover:bg-cyan-500 text-[#03141C] p-1 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send size={13} className="sm:w-4 sm:h-4" />
              </button>
            </form>

            {/* Greenland Brand Section - Mobile optimized */}
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
              <Link
                href="/greenland"
                className="group flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-lg p-2 sm:p-3 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-xl animate-pulse-glow"></div>
                    <img
                      src="/images/logo.webp"
                      alt="Greenland"
                      className="h-5 sm:h-8 w-auto object-contain relative z-10"
                    />
                  </div>
                  <div>
                    <p className="text-white text-[11px] sm:text-sm font-semibold">Greenland</p>
                    <p className="text-white/30 text-[7px] sm:text-[10px] uppercase tracking-wider">Tensile Shade</p>
                  </div>
                </div>
                <ArrowRight size={13} className="sm:w-4 sm:h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Social Links - Mobile optimized */}
            <div className="flex items-center gap-1.5 sm:gap-3 mt-2.5 sm:mt-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 flex items-center justify-center text-white/40 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 flex items-center justify-center text-white/40 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 flex items-center justify-center text-white/40 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider - Mobile optimized */}
        <div className="border-t border-white/5 mt-6 sm:mt-10 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-2.5 sm:gap-4">
          <p className="text-white/30 text-[9px] sm:text-xs text-center sm:text-left">
            © {currentYear} {companyName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[9px] sm:text-xs">
            <Link href="/privacy" className="text-white/30 hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="w-0.5 h-0.5 rounded-full bg-white/10" />
            <Link href="/terms" className="text-white/30 hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <span className="w-0.5 h-0.5 rounded-full bg-white/10" />
            <Link href="/sitemap" className="text-white/30 hover:text-cyan-400 transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;