'use client';

import {
  Building2,
  Layers,
  Sun,
  ArrowRight,
  Home,
  Building,
  Sofa,
  Paintbrush,
  Truck,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const businesses = [
  {
    icon: Building2,
    title: 'CONSTRUCTION & INTERIORS',
    description:
      'Building strong, functional, and reliable spaces. From residential and commercial projects to complete interior works and renovations.',
    link: '/construction',
    features: ['Residential', 'Commercial', 'Interior', 'Renovation'],
    gradient: 'from-cyan-500/20 to-cyan-600/10',
  },
  {
    icon: Sun,
    title: 'GREENLAND',
    description:
      'Innovative tensile and canopy shade solutions. Designing, supplying, and installing premium tensile structures for outdoor spaces.',
    link: '/greenland',
    features: ['Car Parking', 'Walkway', 'Canopy', 'Custom'],
    gradient: 'from-cyan-500/20 to-cyan-600/10',
  },
];

export default function OurBusinesses() {
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

      {/* Glassy Grid Pattern */}
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

      {/* Animated Particles */}
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

      {/* Floating Shapes */}
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

        {/* Main Glass Card */}
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

          {/* Glass Reflection Effect */}
          <div className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/3 to-transparent rounded-full blur-3xl"></div>
          </div>

          {/* Animated Border Glow */}
          <div className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-border-pulse"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-border-pulse-delayed"></div>
          </div>

          {/* Heading */}
          <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[9px] sm:text-[11px] font-semibold text-cyan-300 animate-fade-in">
                Our Businesses
              </p>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 mt-12 sm:mt-14">

            {/* Left Side - Construction */}
            <div className="lg:col-span-1">
              <Link
                href="/construction"
                className="
                block
                h-full
                rounded-l-xl
                border-r border-white/5
                bg-[#03141C]/30
                backdrop-blur-xl
                px-4 sm:px-6
                py-5 sm:py-7
                flex
                flex-col
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
                relative
                "
                style={{ animationDelay: '0.2s' }}
              >
                {/* Glass reflection */}
                <div className="absolute inset-0 rounded-l-xl bg-gradient-to-br from-white/3 to-transparent pointer-events-none"></div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="
                    w-14 h-14 sm:w-16 sm:h-16
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
                    group-hover/card:bg-cyan-400
                    group-hover/card:text-[#03141C]
                    group-hover/card:scale-110
                    group-hover/card:shadow-[0_0_30px_rgba(22,213,232,0.2)]
                    group-hover/card:border-cyan-400/50
                    "
                  >
                    <Layers size={26} className="sm:w-7 sm:h-7" />
                  </div>
                </div>

                <h3 className="uppercase font-bold text-white/90 text-xs sm:text-sm tracking-wide mt-3 sm:mt-4 group-hover/card:text-cyan-400 transition-colors duration-300">
                  Construction & Interiors
                </h3>

                <p className="text-white/50 text-xs sm:text-sm leading-5 sm:leading-6 mt-2 sm:mt-3 max-w-[260px] group-hover/card:text-white/70 transition-colors duration-300">
                  Building strong, functional, and reliable spaces. From residential and commercial projects to complete interior works and renovations.
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                  {['Residential', 'Commercial', 'Interior', 'Renovation'].map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300/70 border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-cyan-400 text-xs sm:text-sm font-medium group-hover/card:gap-2 transition-all duration-300">
                  <span className="relative">
                    Explore Construction
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover/card:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="sm:w-4 sm:h-4 group-hover/card:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Right Side - Greenland */}
            <div className="lg:col-span-1">
              <Link
                href="/greenland"
                className="
                block
                h-full
                rounded-r-xl
                bg-[#03141C]/30
                backdrop-blur-xl
                px-4 sm:px-6
                py-5 sm:py-7
                flex
                flex-col
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
                relative
                "
                style={{ animationDelay: '0.4s' }}
              >
                {/* Glass reflection */}
                <div className="absolute inset-0 rounded-r-xl bg-gradient-to-br from-white/3 to-transparent pointer-events-none"></div>

                {/* Logo with Cyan Glow */}
                <div className="relative">
                  <div className="hidden md:block absolute inset-[-30px] rounded-full bg-cyan-400/70 blur-3xl animate-glow-subtle"></div>
                  <div className="hidden md:block absolute inset-[-10px] rounded-full bg-cyan-400/20 blur-2xl animate-glow-subtle-delayed"></div>
                  <img
                    src="/images/logo.webp"
                    alt="Greenland"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_30px_rgba(22,213,232,0.2)] relative z-10 animate-float-logo group-hover/card:animate-pulse-slow"
                  />
                </div>

                <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[7px] sm:text-[8px] text-cyan-300/50 mt-1 animate-fade-in-delayed">
                  Tensile Shade
                </p>

                <h3 className="mt-1 text-cyan-400 uppercase font-bold text-sm sm:text-base group-hover/card:scale-105 transition-transform duration-300">
                  Greenland
                </h3>

                <p className="text-white/50 text-xs sm:text-sm leading-5 sm:leading-6 mt-2 sm:mt-3 max-w-[260px] group-hover/card:text-white/70 transition-colors duration-300">
                  Innovative tensile and canopy shade solutions. Designing, supplying, and installing premium tensile structures for outdoor spaces.
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                  {['Car Parking', 'Walkway', 'Canopy', 'Custom'].map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300/70 border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-cyan-400 text-xs sm:text-sm font-medium group-hover/card:gap-2 transition-all duration-300">
                  <span className="relative">
                    Explore Greenland
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover/card:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="sm:w-4 sm:h-4 group-hover/card:translate-x-1 transition-transform duration-300"
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