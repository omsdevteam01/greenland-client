'use client';

import {
  Building2,
  Hammer,
  Cog,
  ArrowRight,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: Building2,
    title: 'CONSTRUCTION',
    description:
      'Residential, Commercial & Industrial Construction',
  },
  {
    icon: Hammer,
    title: 'STEEL FABRICATION',
    description:
      'High-quality steel structures built for strength & durability.',
  },
  {
    icon: Cog,
    title: 'ENGINEERING SOLUTIONS',
    description:
      'End-to-end engineering solutions tailored to your projects.',
  },
];

export default function ServiceCard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-12 overflow-hidden" ref={sectionRef}>

      {/* Background - Dark Glassy */}
      <div className="absolute inset-0">
        <img
          src="/images/cons hero.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#03141C]/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#03141C]/50 via-[#05202B]/60 to-[#03141C]/70"></div>
      </div>

      {/* Glassy Grid Pattern - Hidden on mobile */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.04] z-[5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,213,232,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,213,232,.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Particles - Cyan - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#16D5E8]/15 animate-float hidden md:block"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Shapes - Cyan - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: `radial-gradient(circle, rgba(22,213,232,.05), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6">

        {/* Main Glass Card - Dark Glassy */}
        <div
          className={`
          relative
          rounded-2xl
          border
          border-white/10
          bg-[#03141C]/50
          backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          overflow-hidden
          transition-all
          duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >

          {/* Glass Reflection Effect - Subtle - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/3 to-transparent rounded-full blur-3xl"></div>
          </div>

          {/* Animated Border Glow - Cyan - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-border-pulse"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-border-pulse-delayed"></div>
          </div>

          {/* Heading with Animation - Cyan */}
          <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[10px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                Our Core Services
              </p>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 mt-12 sm:mt-16">

            {/* Left Side - 3 Services */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className={`
                      relative
                      px-3 sm:px-4
                      py-6 sm:py-8
                      group
                      transition-all
                      duration-500
                      hover:bg-white/5
                      flex
                      flex-col
                      items-center
                      text-center
                      animate-slide-up
                      ${index < services.length - 1 ? 'border-b border-white/5 sm:border-b-0' : ''}
                      ${index === 0 ? 'sm:border-r border-white/5' : ''}
                      ${index === 1 ? 'sm:border-r border-white/5' : ''}
                      `}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Glass reflection on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/5 to-transparent"></div>

                      {/* Icon - Dark Glassy Style */}
                      <div className="flex-shrink-0">
                        <div
                          className="
                          w-10 h-10 sm:w-12 sm:h-12
                          rounded-full
                          border
                          border-white/15
                          bg-white/5
                          backdrop-blur-sm
                          flex
                          items-center
                          justify-center
                          text-cyan-400
                          transition-all
                          duration-500
                          group-hover:bg-cyan-400
                          group-hover:text-[#03141C]
                          group-hover:scale-110
                          group-hover:shadow-[0_0_30px_rgba(22,213,232,0.2)]
                          group-hover:border-cyan-400/50
                          "
                        >
                          <Icon size={16} className="sm:w-5 sm:h-5" />
                        </div>
                      </div>

                      {/* Title - Cyan on Hover */}
                      <h3 className="uppercase font-bold text-white/90 text-[10px] sm:text-xs tracking-wide mt-3 sm:mt-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-[11px] sm:text-xs leading-5 sm:leading-6 mt-1.5 sm:mt-2 max-w-[160px] sm:max-w-[180px] group-hover:text-white/70 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Learn More Button - Cyan */}
                      <button
                        className="
                        mt-3 sm:mt-4
                        flex
                        items-center
                        gap-1 sm:gap-1.5
                        text-cyan-400
                        hover:text-[#16D5E8]
                        transition-all
                        group/btn
                        text-[10px] sm:text-xs
                        "
                      >
                        <span className="relative">
                          Learn More
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover/btn:w-full transition-all duration-300"></span>
                        </span>
                        <ArrowRight
                          size={11}
                          className="sm:w-[13px] sm:h-[13px] group-hover/btn:translate-x-1 transition-transform duration-300"
                        />
                      </button>

                      {/* Vertical Divider - Glassy - Hidden on mobile */}
                      {index !== services.length - 1 && (
                        <div
                          className="
                          hidden
                          md:block
                          absolute
                          top-6
                          bottom-6
                          right-0
                          w-px
                          bg-gradient-to-b
                          from-transparent
                          via-white/10
                          to-transparent
                          animate-divider-pulse
                          "
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Greenland Card - Moves to top on mobile */}
            <div className="p-3 sm:p-4 border-t border-white/5 lg:border-t-0 order-first lg:order-last">
              <Link
                href="/greenland"
                className="
                block
                h-full
                rounded-xl
                border
                border-white/10
                bg-[#03141C]/40
                backdrop-blur-xl
                px-3 sm:px-4
                pt-2
                py-4 sm:py-6
                flex
                flex-col
                justify-center
                items-center
                text-center
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                hover:shadow-[0_8px_40px_rgba(22,213,232,0.15)]
                transition-all
                duration-500
                hover:scale-[1.02]
                group/card
                animate-slide-up
                cursor-pointer
                "
                style={{ animationDelay: '0.6s' }}
              >
                {/* Glass reflection */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/3 to-transparent pointer-events-none"></div>

                {/* Logo Image with Subtle Cyan Glow - No Pop */}
                <div className="relative">
                  {/* Outer Glow - Very subtle - Hidden on mobile */}
                  <div className="hidden md:block absolute inset-[-20px] rounded-full bg-cyan-400/50 blur-3xl animate-glow-subtle"></div>
                  
                  {/* Inner Glow - Gentle - Hidden on mobile */}
                  <div className="hidden md:block absolute inset-[-10px] rounded-full bg-cyan-400/30 blur-2xl animate-glow-subtle-delayed"></div>
                  
                  {/* Logo */}
                  <img
                    src="/images/logo.webp"
                    alt="Greenland"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_0_30px_rgba(22,213,232,0.15)] relative z-10 animate-float-logo group-hover/card:animate-pulse-slow"
                  />
                </div>

                <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] text-cyan-300/50 mt-0 animate-fade-in-delayed">
                  Tensile Shade
                </p>

                <h3 className="mt-1.5 sm:mt-2 text-cyan-400 uppercase font-bold text-base sm:text-lg group-hover/card:scale-105 transition-transform duration-300">
                  Greenland
                </h3>

                <h4 className="text-white/50 uppercase tracking-wide text-[10px] sm:text-xs mt-0.5">
                  Shade Solutions
                </h4>

                <p className="text-white/40 text-[11px] sm:text-xs leading-4 sm:leading-5 mt-2 sm:mt-3 max-w-[200px] sm:max-w-none">
                  Premium tensile structures,
                  parking shades and
                  customized engineering
                  solutions for every project.
                </p>

                <div className="mt-3 sm:mt-4 flex items-center gap-1 sm:gap-1.5 text-cyan-400 text-[10px] sm:text-xs font-medium group-hover/card:gap-2 transition-all duration-300">
                  <span className="relative">
                    Explore More
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover/card:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight
                    size={11}
                    className="sm:w-[13px] sm:h-[13px] group-hover/card:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-20px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes float-logo {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        
        @keyframes floatShape {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          25% { transform: translateY(-20px) rotate(8deg); opacity: 0.4; }
          50% { transform: translateY(-40px) rotate(-8deg); opacity: 0.6; }
          75% { transform: translateY(-20px) rotate(5deg); opacity: 0.4; }
        }
        
        @keyframes glow-subtle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes glow-subtle-delayed {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes border-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-float-logo {
          animation: float-logo 3s ease-in-out infinite;
        }
        
        .animate-glow-subtle {
          animation: glow-subtle 3s ease-in-out infinite;
        }
        
        .animate-glow-subtle-delayed {
          animation: glow-subtle-delayed 3s ease-in-out infinite;
        }
        
        .animate-border-pulse {
          animation: border-pulse 2s ease-in-out infinite;
        }
        
        .animate-border-pulse-delayed {
          animation: border-pulse 2s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.3s forwards;
        }
        
        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-divider-pulse {
          animation: pulse-delayed 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-delayed 3s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-float-logo {
            animation: float-logo 2s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
}