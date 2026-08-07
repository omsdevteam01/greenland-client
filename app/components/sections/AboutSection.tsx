'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Award, Shield, Zap, TrendingUp } from 'lucide-react';

const features = [
  { icon: Building2, label: 'Premium Quality Materials' },
  { icon: Users, label: 'Expert Team' },
  { icon: Award, label: 'Custom Solutions' },
  { icon: Zap, label: 'Innovative Engineering' },
];

const stats = [
  { icon: Building2, value: '2020', label: 'Founded' },
  { icon: TrendingUp, value: '500+', label: 'Projects' },
  { icon: Users, value: '98%', label: 'Satisfaction' },
];

export default function AboutPage() {
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
    <section
      id="about"
      className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
      }}
    >
      {/* Background Glow Effects - Hidden on mobile */}
      <div
        className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
      />
      <div
        className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow-delayed"
      />

      {/* Glassy Grid Pattern - Hidden on mobile */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.02] z-[5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,213,232,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,213,232,.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Particles - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/10 animate-float hidden md:block"
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

      {/* Diagonal Lines - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-[5] opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(22,213,232,0.3) 40px, rgba(22,213,232,0.3) 41px)
          `,
        }} />
      </div>

      {/* Floating Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/5 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              borderRadius: i % 2 === 0 ? '50%' : '12px',
              animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: `radial-gradient(circle, rgba(22,213,232,.03), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-cyan-400/10 to-cyan-400/5 border border-cyan-400/20 mb-4 sm:mb-6 relative overflow-hidden group"
              style={{
                opacity: 0,
                animation: "fadeInScale 0.8s ease-out 0.2s forwards",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-300 uppercase tracking-[2px] sm:tracking-[3px] relative z-10">
                Who We Are
              </span>
              <Shield size={11} className="sm:w-3 sm:h-3 text-cyan-400 relative z-10" />
            </div>

            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              }}
            >
              <span className="text-white">About</span>{' '}
              <span
                className="text-transparent bg-clip-text relative"
                style={{
                  background: "linear-gradient(135deg, #16D5E8 0%, #0EA5E9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ruhan Groups
              </span>
              <span className="block w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mt-2 rounded-full animate-pulse-glow"></span>
            </h2>

            {/* Description */}
            <div
              className="relative pl-3 sm:pl-4 border-l-2 border-cyan-400/30 mt-3 sm:mt-4 mb-4 sm:mb-5"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.5s forwards",
              }}
            >
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                Ruhan Groups is a trusted name in construction, steel fabrication and engineering solutions.
                We build stronger structures with innovative engineering and long-lasting quality.
              </p>
            </div>

            <p
              className="text-white/60 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-xl"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.6s forwards",
              }}
            >
              We pride ourselves on providing innovative and sustainable solutions
              for residential, commercial, and institutional clients across the region.
            </p>

            {/* Features */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6 max-w-xl"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.7s forwards",
              }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all duration-300">
                      <Icon size={14} className="sm:w-4 sm:h-4 text-cyan-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats Cards */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.9s forwards",
              }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 text-center overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.08)]"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-center mb-1">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                          <Icon size={15} className="sm:w-[17px] sm:h-[17px] text-cyan-400" />
                        </div>
                      </div>
                      <div className="text-base sm:text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-[8px] sm:text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE SECTION - Moves to top on mobile */}
          <div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            {/* Top Border Only - Hidden on mobile */}
            <div className="absolute -top-8 right-10 w-48 h-20 border-2 border-cyan-400/20 rounded-t-[2rem] border-b-0 hidden lg:block" />

            {/* Decorative dots - Hidden on mobile */}
            <div className="absolute -right-4 top-10 hidden lg:grid grid-cols-4 gap-2 opacity-30">
              {[...Array(16)].map((_, index) => (
                <span
                  key={index}
                  className="w-1 h-1 rounded-full bg-cyan-400/40 animate-pulse"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>

            {/* IMAGE + CARD WRAPPER */}
            <div className="relative w-full max-w-[480px] lg:max-w-[450px]">
              {/* Main image with unique frame */}
              <div className="relative overflow-visible">
                <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img
                  src="/images/con hero.png"
                  alt="Ruhan Groups - Construction"
                  className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] object-cover rounded-[1.5rem] sm:rounded-[1.8rem] shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[1.8rem] bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Corner accents - Top only - Hidden on mobile */}
                <div className="absolute top-3 left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg hidden sm:block"></div>
                <div className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg hidden sm:block"></div>
              </div>

              {/* Unique Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-3 sm:left-5 w-[80%] sm:w-[78%] z-20 animate-float-card">
                <div className="rounded-xl bg-gradient-to-br from-[#05202B]/95 to-[#03141C]/95 border border-cyan-400/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-3 sm:p-4 backdrop-blur-xl overflow-hidden">
                  {/* Card shimmer - Hidden on mobile */}
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full animate-shimmer-slow"></div>
                  
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <div className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400/30 bg-cyan-400/10 items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <span className="text-xl sm:text-2xl">🏗️</span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-lg font-bold text-white leading-tight">
                        Excellence in{' '}
                        <span className="text-cyan-400">Construction</span>
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                        <span className="w-4 sm:w-6 h-[2px] bg-cyan-400"></span>
                        <span className="text-[8px] sm:text-[9px] text-white/40 uppercase tracking-wider">Since 2020</span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-white/50 leading-relaxed mt-0.5 sm:mt-1">
                        Building stronger structures with innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative glow - Hidden on mobile */}
            <div className="hidden md:block absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-16px) translateX(-4px); }
          75% { transform: translateY(-8px) translateX(4px); }
        }

        @keyframes floatShape {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          25% { transform: translateY(-15px) rotate(6deg); opacity: 0.4; }
          50% { transform: translateY(-30px) rotate(-6deg); opacity: 0.6; }
          75% { transform: translateY(-15px) rotate(4deg); opacity: 0.4; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes shimmer-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-card {
          animation: float-card 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse {
          animation: pulse-delayed 2s ease-in-out infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-shimmer-slow {
          animation: shimmer-slow 3s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-float-card {
            animation: float-card 2s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
}