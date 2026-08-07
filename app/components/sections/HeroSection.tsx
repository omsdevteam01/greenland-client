'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/cons hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= Background ================= */}

      {/* Main Overlay - Very light for brighter image */}
      <div className="absolute inset-0 bg-[#03141C]/5" />

      {/* Left Dark Gradient - Mobile optimized */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02141D]/90 via-[#05202B]/80 to-transparent z-[5] md:from-[#02141D]/90 md:via-[#05202B]/70" />

      {/* Cyan Ambient Glow - Mobile adjusted */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full blur-[100px] md:blur-[140px] z-[4]"
        style={{
          background:
            "radial-gradient(circle, rgba(22,213,232,.12), transparent 70%)",
        }}
      />

      {/* Shimmer - Hidden on mobile for performance */}
      <div
        className="hidden md:block absolute inset-0 z-[6] opacity-20"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(22,213,232,.10) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 5s ease-in-out infinite",
        }}
      />

      {/* Floating Cyan Particles - Reduced count on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[7]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#16D5E8] hidden md:block"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatCyan ${
                Math.random() * 15 + 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Left Diagonal Panel - Mobile optimized */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[75%] overflow-hidden z-10">
        <div
          className={`absolute inset-0 md:-skew-x-[15deg] origin-top-left transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, rgba(3,20,28,.92) 0%, rgba(4,32,44,.80) 40%, rgba(5,38,52,.50) 70%, rgba(5,38,52,.20) 90%, rgba(5,38,52,0) 100%)",
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left center",
            transition: "transform 1.2s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>

      {/* Soft Right Edge Blend - Mobile adjusted */}
      <div
        className="absolute top-0 left-[60%] md:left-[70%] h-full w-16 md:w-24 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(3,20,28,0), rgba(3,20,28,.10))",
          filter: "blur(10px) md:blur(15px)",
        }}
      />

      {/* Blueprint Grid - Hidden on mobile */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.03] z-[6]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,213,232,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,213,232,.10) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Blueprint Circles - Hidden on mobile */}
      <div className="hidden md:block absolute left-20 bottom-16 w-64 h-64 rounded-full border border-cyan-400/3 z-[6]" />
      <div className="hidden md:block absolute left-32 bottom-28 w-40 h-40 rounded-full border border-cyan-400/3 z-[6]" />

      {/* ================= Main Content ================= */}
      <div className="relative z-30 min-h-screen max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-[620px] pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-24 md:pb-0">
          
          {/* Badge - Mobile optimized */}
          <div
            className="
              inline-flex
              items-center
              gap-2 sm:gap-3
              mb-6 sm:mb-6 md:mb-8
              px-3 sm:px-5
              py-2 sm:py-2.5
              rounded-full
              border
              border-cyan-400/25
              bg-cyan-400/10
              backdrop-blur-md
            "
            style={{
              opacity: 0,
              animation: "fadeInScale .8s ease-out .2s forwards",
            }}
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-400"></span>
            </span>
            <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
              BUILDING TOMORROW
            </span>
          </div>

          {/* Heading - Mobile responsive */}
          <h1
            className="
              text-white
              font-black
              leading-[1.08] sm:leading-[1.03]
              tracking-[-1px] sm:tracking-[-2px]
              text-[36px] 
              sm:text-[48px] 
              md:text-[62px] 
              lg:text-[72px]
            "
            style={{
              opacity: 0,
              animation: "fadeInUp .8s ease-out .4s forwards",
            }}
          >
            With Strength,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Steel &amp;
            <span
              className="text-[#16D5E8]"
              style={{
                animation: "textGlow 3s ease-in-out infinite",
              }}
            >
              {" "}
              Innovation
            </span>
          </h1>

          {/* Description - Mobile optimized */}
          <p
            className="
              mt-5 sm:mt-6 md:mt-8
              max-w-[560px]
              text-[15px] sm:text-[16px] md:text-[18px]
              leading-[1.6] sm:leading-8 md:leading-9
              text-white/80
            "
            style={{
              opacity: 0,
              animation: "fadeInUp .8s ease-out .6s forwards",
            }}
          >
            Ruhan Groups is a trusted name in construction,
            steel fabrication and engineering solutions.
            We build stronger structures with innovative
            engineering and long-lasting quality.
          </p>

          {/* Buttons - Mobile responsive with smaller cards */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12"
            style={{
              opacity: 0,
              animation: "fadeInUp .8s ease-out .8s forwards",
            }}
          >
            {/* Primary - Smaller on mobile */}
            <a
              href="#services"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-2 sm:gap-3
                overflow-hidden
                rounded-lg
                bg-[#16D5E8]
                px-5 sm:px-7 md:px-8
                py-2.5 sm:py-3 md:py-4
                text-xs sm:text-sm md:text-base
                font-semibold
                text-[#02141D]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#11C5D6]
                hover:shadow-[0_0_35px_rgba(22,213,232,.45)]
              "
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
              <span className="relative z-10">Explore Our Services</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary - Smaller on mobile */}
            <a
              href="#contact"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                rounded-lg
                border
                border-white/30
                bg-white/5
                backdrop-blur-md
                px-5 sm:px-7 md:px-8
                py-2.5 sm:py-3 md:py-4
                text-xs sm:text-sm md:text-base
                font-semibold
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-400
                hover:bg-cyan-400
                hover:text-[#02141D]
              "
            >
              <span className="absolute inset-0 bg-cyan-400 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>

        </div>
      </div>

      {/* ================= Scroll Indicator - Now visible on all devices ================= */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30"
        style={{
          opacity: 0,
          animation: "fadeIn 1s ease-out 1.2s forwards",
        }}
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer">
          <span className="text-cyan-300/70 text-[8px] sm:text-[10px] uppercase tracking-[3px] sm:tracking-[4px] transition-colors duration-300 group-hover:text-cyan-300">
            SCROLL DOWN
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-cyan-400/40 flex justify-center pt-1.5 sm:pt-2 backdrop-blur-sm">
            <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 rounded-full bg-cyan-400 animate-scroll-down" />
          </div>
        </div>
      </div>

      {/* Bottom Fade - Mobile adjusted */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-[#02141D]/50 to-transparent z-20" />

      {/* ================= Animations ================= */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes floatCyan {
          0%,100% {
            transform: translateY(0) translateX(0);
            opacity: .25;
          }
          25% {
            transform: translateY(-35px) translateX(15px);
            opacity: .6;
          }
          50% {
            transform: translateY(-70px) translateX(-12px);
            opacity: 1;
          }
          75% {
            transform: translateY(-35px) translateX(18px);
            opacity: .6;
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }

        @keyframes textGlow {
          0%,100% {
            text-shadow: 0 0 15px rgba(22,213,232,.12);
          }
          50% {
            text-shadow: 0 0 30px rgba(22,213,232,.35),
                         0 0 60px rgba(22,213,232,.18);
          }
        }

        .animate-scroll-down {
          animation: scrollDown 2s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          section {
            background-position: 60% center !important;
          }
        }
      `}</style>
    </section>
  );
}