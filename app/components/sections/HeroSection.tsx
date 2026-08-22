'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden -mt-8 sm:-mt-12 md:-mt-16"
    >
      {/* =========================================================
          MAIN HERO BACKGROUND
          SAME LIGHT STYLE AS OUR BUSINESSES
      ========================================================= */}

      <div className="absolute inset-0 z-0">

        {/* Same background gradient as Our Businesses - DARKER CYAN */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/50 via-cyan-400/40 to-blue-500/50" />

        {/* Soft white lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/15" />

        {/* Soft bottom cyan lighting - DARKER */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-400/50 to-transparent" />

      </div>

      {/* =========================================================
          RIGHT SIDE BUILDING IMAGE
          PURE / CLEAR IMAGE
      ========================================================= */}

      <div
        className="
          absolute
          right-0
          top-0
          z-[5]
          h-full
          w-full
          lg:w-[52%]
        "
      >
        <img
          src="/images/cons hero.png"
          alt="Ruhan Groups Construction"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Only blend the LEFT EDGE of the image - DARKER */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[30%]
          "
          style={{
            background:
              'linear-gradient(90deg, rgba(180,240,245,0.95) 0%, rgba(180,240,245,0.65) 35%, rgba(180,240,245,0) 100%)',
          }}
        />

        {/* Very subtle bottom blend - DARKER */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[18%]
          "
          style={{
            background:
              'linear-gradient(to top, rgba(160,235,240,0.45), transparent)',
          }}
        />
      </div>

      {/* =========================================================
          LEFT SIDE LIGHT BACKGROUND - DARKER
      ========================================================= */}

      <div
        className="
          absolute
          left-0
          top-0
          z-[6]
          hidden
          h-full
          w-[62%]
          lg:block
        "
        style={{
          background:
            'linear-gradient(90deg, rgba(190,245,248,0.98) 0%, rgba(180,242,245,0.94) 58%, rgba(180,242,245,0.60) 82%, rgba(180,242,245,0) 100%)',
        }}
      />

      {/* =========================================================
          MOBILE BACKGROUND - DARKER
      ========================================================= */}

      <div className="absolute inset-0 z-[6] bg-gradient-to-br from-cyan-200/95 via-cyan-100/80 to-blue-200/70 lg:hidden" />

      {/* =========================================================
          DECORATIVE CYAN GLOW - DARKER
      ========================================================= */}

      <div
        className="
          absolute
          -left-40
          top-1/3
          z-[7]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/30
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -right-40
          top-1/4
          z-[7]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-400/20
          blur-[130px]
        "
      />

      {/* =========================================================
          DECORATIVE TOP LEFT CIRCLE - DARKER
      ========================================================= */}

      <div
        className="
          absolute
          -left-20
          -top-20
          z-[8]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-cyan-500/30
          bg-cyan-400/15
        "
      />

      <div
        className="
          absolute
          -left-10
          -top-10
          z-[8]
          h-[200px]
          w-[200px]
          rounded-full
          bg-cyan-400/15
          blur-2xl
        "
      />

      {/* =========================================================
          DOT PATTERN - DARKER
      ========================================================= */}

      <div
        className="
          absolute
          left-0
          top-[34%]
          z-[8]
          hidden
          h-[190px]
          w-[150px]
          opacity-60
          md:block
        "
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(22,213,232,0.6) 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
          maskImage: 'linear-gradient(to right, black, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, black, transparent)',
        }}
      />

      {/* =========================================================
          BOTTOM DECORATIVE WAVES - DARKER
      ========================================================= */}

      <div className="absolute bottom-0 left-0 z-[8] h-[180px] w-[420px] opacity-50">
        <svg
          viewBox="0 0 500 180"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-20 140C80 40 150 40 250 115C330 175 410 160 520 55"
            stroke="#16D5E8"
            strokeWidth="1.5"
            strokeOpacity="0.50"
          />

          <path
            d="M-20 155C80 55 150 55 250 130C330 190 410 175 520 70"
            stroke="#16D5E8"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />

          <path
            d="M-20 170C80 70 150 70 250 145C330 205 410 190 520 85"
            stroke="#16D5E8"
            strokeWidth="1.5"
            strokeOpacity="0.25"
          />
        </svg>
      </div>

      {/* =========================================================
          RIGHT SIDE SOFT CIRCLE - DARKER
      ========================================================= */}

      <div
        className="
          absolute
          -right-32
          top-1/2
          z-[2]
          hidden
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-300/15
          blur-sm
          lg:block
        "
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-4
          pb-20
          pt-16
          sm:px-6
          sm:pt-20
          lg:px-10
          lg:pt-24
        "
      >
        <div className="w-full max-w-[690px]">

          {/* =====================================================
              BADGE - UPDATED TO HEADER COLORS
          ===================================================== */}

          <div
            className={`
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-600/40
              bg-cyan-600/10
              px-4
              py-2.5
              shadow-[0_5px_25px_rgba(6,182,212,0.15)]
              backdrop-blur-md
              transition-all
              duration-1000
              sm:mb-7
              sm:px-5
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }
            `}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-600 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-600" />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-cyan-700 sm:text-[10px] sm:tracking-[4px]">
              BUILDING TOMORROW
            </span>
          </div>

          {/* =====================================================
              MAIN HEADING - WITH "RUHAN GROUPS" HIGHLIGHTED
          ===================================================== */}

          <h1
            className={`
              max-w-[700px]
              text-[40px]
              font-black
              leading-[1.03]
              tracking-[-2px]
              text-[#001a1f]
              transition-all
              duration-1000
              sm:text-[50px]
              md:text-[62px]
              lg:text-[72px]
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            With Strength,
            <br />
            Steel &{' '}
            <span className="text-cyan-600">
              Innovation
            </span>
            <br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-700/50 font-light tracking-[4px] sm:tracking-[6px] mt-1 block animate-fade-in-delayed">
              — Ruhan Groups
            </span>
          </h1>

          {/* =====================================================
              ACCENT LINE - HEADER CYAN COLOR
          ===================================================== */}

          <div
            className={`
              mt-5
              h-1
              rounded-full
              bg-cyan-600
              transition-all
              duration-1000
              sm:mt-6
              ${
                isVisible
                  ? 'w-20 opacity-100'
                  : 'w-0 opacity-0'
              }
            `}
          />

          {/* =====================================================
              DESCRIPTION - DARKER TEXT
          ===================================================== */}

          <p
            className={`
              mt-5
              max-w-[600px]
              text-[15px]
              leading-7
              text-[#001a1f]/80
              transition-all
              delay-200
              duration-1000
              sm:mt-6
              sm:text-[16px]
              sm:leading-8
              md:text-[18px]
              md:leading-9
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }
            `}
          >
            Ruhan Groups is a trusted name in construction,
            steel fabrication and engineering solutions. We build
            stronger structures with innovative engineering and
            long-lasting quality.
          </p>

          {/* =====================================================
              BUTTONS - UPDATED TO HEADER COLORS
          ===================================================== */}

          <div
            className={`
              mt-7
              flex
              flex-col
              gap-3
              transition-all
              delay-300
              duration-1000
              sm:mt-9
              sm:flex-row
              sm:gap-4
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }
            `}
          >

            {/* Primary Button - HEADER CYAN COLOR */}
            <a
              href="#services"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-lg
                bg-cyan-600
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(6,182,212,0.30)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-cyan-700
                hover:shadow-[0_15px_40px_rgba(6,182,212,0.40)]
                sm:px-7
                md:px-8
                md:py-4
                md:text-base
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10">
                Explore Our Services
              </span>

              <ArrowRight
                size={18}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Secondary Button - HEADER CYAN BORDER */}
            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-lg
                border-2
                border-cyan-600/50
                bg-white/40
                px-6
                py-3.5
                text-sm
                font-semibold
                text-cyan-700
                shadow-[0_5px_20px_rgba(6,182,212,0.08)]
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-600
                hover:bg-white/70
                hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]
                sm:px-7
                md:px-8
                md:py-4
                md:text-base
              "
            >
              Contact Us
            </a>

          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL DOWN - UPDATED TO HEADER COLORS
      ========================================================= */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          md:block
          lg:bottom-10
        "
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-[4px] text-cyan-700/80">
            SCROLL DOWN
          </span>
          <div
            className="
              flex
              h-9
              w-6
              justify-center
              rounded-full
              border-2
              border-cyan-600/50
              bg-white/25
              pt-2
              backdrop-blur-sm
            "
          >
            <div className="h-2 w-1 animate-scroll-down rounded-full bg-cyan-600" />
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SOFT BLEND - DARKER
      ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 z-[10] h-20 bg-gradient-to-t from-cyan-300/30 to-transparent" />

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
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

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scroll-down {
          animation: scrollDown 1.8s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        /* Shimmer effect on the image edge */
        .shimmer-effect {
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(6,182,212,0.08) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: shimmer 5s ease-in-out infinite;
        }

        /* Fade in animations */
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

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

        /* Floating shapes animation */
        @keyframes floatShape {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.15;
          }
          25% {
            transform: translateY(-20px) rotate(8deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px) rotate(-8deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.4;
          }
        }

        .animate-float-shape {
          animation: floatShape 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}