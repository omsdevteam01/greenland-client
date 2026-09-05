'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { mediaUrl } from "@/lib/media";

const projects = [
  {
    id: 1,
    image: mediaUrl("images/cons5.png"),
  },
  {
    id: 2,
    image: mediaUrl("images/cons2.png"),
  },
  {
    id: 3,
    image: mediaUrl("images/cons3.png"),
  },
  {
    id: 4,
    image: mediaUrl("images/cons4.png"),
  },
];

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedProjects = projects.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-7 sm:py-9 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-[#F8F6F1] via-[#EDE4D5] to-[#DCCBB5]/70" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/25" />
      </div>

      {/* Grid Pattern */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.04] z-[5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(169,148,121,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169,148,121,.10) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#A99479]/20 animate-float hidden md:block"
            style={{
              width: `${2 + i % 5}px`,
              height: `${2 + i % 5}px`,
              left: `${10 + i * 9}%`,
              top: `${8 + ((i * 17) % 80)}%`,
              animationDuration: `${12 + i}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#B8A58D]/20"
            style={{
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
              left: `${15 + i * 13}%`,
              top: `${12 + i * 11}%`,
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              animation: `floatShape ${10 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              transform: `rotate(${i * 25}deg)`,
              background:
                'radial-gradient(circle, rgba(184,165,141,.08), transparent)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          className={`text-center mb-4 sm:mb-7 transition-all duration-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse" />

            <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-[#766B5E]">
              Our Portfolio
            </p>

            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse-delayed" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F382F] mt-1.5 sm:mt-2">
            Featured <span className="text-[#A99479]">Projects</span>
          </h2>

          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#A99479] to-transparent mx-auto mt-2 sm:mt-3" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayedProjects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              aria-label="Open project image"
              className={`
                group
                relative
                w-full
                rounded-lg
                overflow-hidden
                border border-[#E2D8C9]/80
                bg-white/45
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:border-[#A99479]/50
                hover:shadow-[0_0_40px_rgba(169,148,121,0.10)]
                hover:bg-white/65
                cursor-pointer
                text-left
                ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: isVisible
                  ? `${index * 80}ms`
                  : '0ms',
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt="Project"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3F382F]/50
                  via-transparent
                  to-transparent
                  opacity-70
                  group-hover:opacity-40
                  transition-opacity
                  duration-300
                " />

                {/* Shine Effect */}
                <div className="
                  hidden
                  md:block
                  absolute
                  inset-0
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  pointer-events-none
                " />
              </div>
            </button>
          ))}
        </div>

        {/* View All */}
        <div
          className={`text-center mt-5 sm:mt-7 transition-all duration-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              px-4
              sm:px-6
              py-2
              sm:py-2.5
              rounded-lg
              bg-[#A99479]
              text-white
              text-xs
              sm:text-sm
              font-medium
              shadow-[0_8px_25px_rgba(169,148,121,0.20)]
              transition-all
              duration-200
              hover:bg-[#927E64]
              hover:-translate-y-1
            "
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            p-3
            sm:p-6
            bg-[#3F382F]/80
            backdrop-blur-sm
            animate-fade-in
          "
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-2xl
              bg-[#3F382F]
              shadow-[0_0_60px_rgba(169,148,121,0.12)]
              animate-scale-up
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close image"
              className="
                absolute
                top-3
                right-3
                sm:top-4
                sm:right-4
                z-10
                w-8
                h-8
                rounded-full
                bg-white/80
                hover:bg-white
                flex
                items-center
                justify-center
                transition-transform
                duration-200
                hover:scale-110
              "
            >
              <X
                size={17}
                className="text-[#3F382F]"
              />
            </button>

            {/* Large Image */}
            <div className="relative w-full aspect-[16/10]">
              <img
                src={selectedProject.image}
                alt="Project"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(-18px) translateX(5px);
          }
        }

        @keyframes floatShape {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.15;
          }

          50% {
            transform: translateY(-30px) rotate(8deg);
            opacity: 0.5;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.96);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-delayed {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }

        .animate-scale-up {
          animation: scale-up 0.25s ease-out forwards;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse-delayed {
            animation: none !important;
          }

          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}