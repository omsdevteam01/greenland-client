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
      className="relative w-full py-12 sm:py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/40 via-cyan-300/30 to-blue-400/40" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/15" />
      </div>

      {/* Grid Pattern */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.04] z-[5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,213,232,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,213,232,.10) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#16D5E8]/20 animate-float hidden md:block"
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
            className="absolute border border-cyan-400/15"
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
                'radial-gradient(circle, rgba(22,213,232,.08), transparent)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          className={`text-center mb-6 sm:mb-10 transition-all duration-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-600 animate-pulse" />

            <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-700">
              Our Portfolio
            </p>

            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-600 animate-pulse-delayed" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001a1f] mt-1.5 sm:mt-2">
            Featured <span className="text-cyan-600">Projects</span>
          </h2>

          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-transparent mx-auto mt-2 sm:mt-3" />
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
                border border-white/40
                bg-white/20
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:border-cyan-600/40
                hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]
                hover:bg-white/30
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
                  from-[#001a1f]/50
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
          className={`text-center mt-8 sm:mt-10 transition-all duration-500 ${
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
              bg-cyan-600
              text-white
              text-xs
              sm:text-sm
              font-medium
              shadow-[0_8px_25px_rgba(6,182,212,0.25)]
              transition-all
              duration-200
              hover:bg-cyan-700
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
            bg-black/80
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
              bg-black
              shadow-[0_0_60px_rgba(6,182,212,0.08)]
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
                className="text-[#001a1f]"
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