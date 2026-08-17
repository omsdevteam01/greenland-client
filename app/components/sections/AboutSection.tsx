'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Award, Shield, Zap, TrendingUp, Target, Eye, CheckCircle } from 'lucide-react';

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

const values = [
  { icon: Shield, title: 'Quality First', desc: 'We never compromise on quality, using only the best materials and craftsmanship.' },
  { icon: Target, title: 'Client-Centric', desc: 'Our clients are at the heart of everything we do, ensuring complete satisfaction.' },
  { icon: Eye, title: 'Safety & Integrity', desc: 'We maintain the highest safety standards and operate with complete integrity.' },
  { icon: Zap, title: 'Innovation', desc: 'We embrace cutting-edge technology and innovative construction methods.' },
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
            <p
              className="text-white/60 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-xl"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.6s forwards",
              }}
            >
              Ruhan Groups is a diversified organization delivering solutions across
              construction, interior development, and innovative tensile architecture.
              Our businesses work across different stages of creating spaces — from
              building strong structures to designing functional environments and
              delivering modern architectural solutions.
            </p>

            <p
              className="text-white/50 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3 max-w-xl"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.7s forwards",
              }}
            >
              With years of expertise and a focus on quality work, on-time delivery,
              and customer satisfaction, we have established ourselves as a reliable
              partner for residential, commercial, and industrial projects across the region.
            </p>

            {/* Features - 2x2 Grid */}
            <div
              className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-5 max-w-xl"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.8s forwards",
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
              className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mt-4 sm:mt-5"
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

          {/* RIGHT IMAGE SECTION */}
          <div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            <div className="relative w-full max-w-[480px] lg:max-w-[450px]">
              {/* Main image */}
              <div className="relative overflow-visible">
                <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img
                  src="/images/con hero.png"
                  alt="Ruhan Groups - Construction"
                  className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] object-cover rounded-[1.5rem] sm:rounded-[1.8rem] shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[1.8rem] bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-3 sm:left-5 w-[80%] sm:w-[78%] z-20 animate-float-card">
                <div className="rounded-xl bg-gradient-to-br from-[#05202B]/95 to-[#03141C]/95 border border-cyan-400/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-3 sm:p-4 backdrop-blur-xl overflow-hidden">
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
          </div>

        </div>

        {/* Values Section - Below the main content */}
        <div
          className="mt-10 sm:mt-14 pt-6 sm:pt-10 border-t border-white/10"
          style={{
            opacity: 0,
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.6s forwards" : "none",
          }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                Core Values
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1 sm:mt-2">
              What Drives <span className="text-cyan-400">Us</span>
            </h3>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1 sm:mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group p-4 sm:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Icon size={18} className="sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm sm:text-base mt-2 sm:mt-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-white/50 text-xs sm:text-sm mt-1 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
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