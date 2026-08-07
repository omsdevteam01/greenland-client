'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Complex',
    category: 'Residential',
    image: '/images/villa.png',
    description: 'Modern luxury villas with premium amenities and sustainable design.',
  },
  {
    id: 2,
    title: 'Corporate Office Tower',
    category: 'Commercial',
    image: '/images/corporate.png',
    description: 'State-of-the-art office space with innovative architectural design.',
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    category: 'Industrial',
    image: '/images/warehouse.png',
    description: 'Large-scale industrial facility with advanced logistics infrastructure.',
  },
  {
    id: 4,
    title: 'Green Residential Park',
    category: 'Residential',
    image: '/images/green.png',
    description: 'Eco-friendly residential community with lush green spaces.',
  },
  {
    id: 5,
    title: 'Shopping Mall Complex',
    category: 'Commercial',
    image: '/images/mall.png',
    description: 'Modern retail destination with world-class facilities.',
  },
  {
    id: 6,
    title: 'Steel Fabrication Plant',
    category: 'Industrial',
    image: '/images/steel.png',
    description: 'Advanced steel fabrication facility with cutting-edge technology.',
  },
];

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  // Show only first 4 projects
  const displayedProjects = projects.slice(0, 4);

  return (
    <section className="relative w-full py-12 sm:py-16 overflow-hidden" ref={sectionRef}>

      {/* Background - Dark Glassy */}
      <div className="absolute inset-0">
        <img
          src="/images/cons hero.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#03141C]/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#03141C]/60 via-[#05202B]/70 to-[#03141C]/80"></div>
      </div>

      {/* Glassy Grid Pattern - Hidden on mobile */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.03] z-[5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,213,232,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,213,232,.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Particles - Reduced on mobile but still visible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#16D5E8]/10 animate-float ${
              i < 8 ? 'block' : 'hidden md:block'
            }`}
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

      {/* Floating Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/5 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: `radial-gradient(circle, rgba(22,213,232,.03), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header - With animations */}
        <div 
          className={`text-center mb-6 sm:mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
              Our Portfolio
            </p>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1.5 sm:mt-2">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 sm:mt-3"></div>
        </div>

        {/* Projects Grid - With animations on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group
                relative
                rounded-lg
                overflow-hidden
                border border-white/10
                bg-[#03141C]/40
                backdrop-blur-xl
                transition-all
                duration-500
                hover:scale-[1.04]
                hover:border-cyan-400/30
                hover:shadow-[0_0_40px_rgba(22,213,232,0.08)]
                hover:bg-[#03141C]/60
                cursor-pointer
                ${hoveredIndex === index ? 'z-10' : ''}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                animation: isVisible ? `slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.12}s forwards` : 'none'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Animated Border Gradient on Hover - Hidden on mobile */}
              <div className="hidden md:block absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 animate-border-spin"></div>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03141C]/90 via-[#03141C]/30 to-transparent"></div>
                
                {/* Category Badge - Smaller on mobile */}
                <span className="absolute top-2 sm:top-3 right-2 sm:right-3 px-1.5 sm:px-2 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/15 text-cyan-300 animate-fade-in">
                  {project.category}
                </span>

                {/* Number Badge - Hidden on mobile */}
                <span className="hidden sm:block absolute top-3 left-3 px-2 py-0.5 rounded-full text-[8px] font-medium bg-white/5 backdrop-blur-sm border border-white/5 text-white/40 animate-fade-in">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4">
                <h3 className="text-white font-semibold text-xs sm:text-sm group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-white/70 text-[9px] sm:text-[10px] mt-0.5 line-clamp-1 hidden sm:block">
                  {project.description}
                </p>
                <div className="flex items-center gap-1 sm:gap-1.5 mt-1.5 sm:mt-2 text-cyan-400 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2 sm:group-hover:gap-3">
                  <span className="relative">
                    View Details
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight size={10} className="sm:w-3 sm:h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
                </div>
              </div>

              {/* Shimmer Effect on Hover - Hidden on mobile */}
              <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* View All Button - With animation */}
        <div 
          className={`text-center mt-8 sm:mt-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-1.5 sm:gap-2
              px-4 sm:px-6
              py-2 sm:py-2.5
              rounded-lg
              border border-white/10
              bg-white/5
              backdrop-blur-sm
              text-white/70
              text-xs sm:text-sm
              font-medium
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
              hover:text-white
              hover:shadow-[0_0_30px_rgba(22,213,232,0.05)]
              hover:gap-2 sm:hover:gap-3
            "
          >
            <span className="relative">
              View All Projects
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={14} className="sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
          </Link>
        </div>
      </div>

      {/* Modal - Project Detail - Mobile optimized with animations */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#03141C]/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden animate-scale-up shadow-[0_0_60px_rgba(22,213,232,0.05)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Smaller on mobile */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03141C]/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
                <span className="text-[9px] sm:text-xs text-white/30">Featured Project</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mt-2 sm:mt-3">
                {selectedProject.description}
              </p>
              <Link
                href={`/projects/${selectedProject.id}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 text-cyan-400 font-medium hover:gap-2 sm:hover:gap-3 transition-all duration-300 group text-sm sm:text-base"
              >
                <span className="relative">
                  View Full Details
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ArrowRight size={14} className="sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-20px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes floatShape {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          25% { transform: translateY(-20px) rotate(8deg); opacity: 0.4; }
          50% { transform: translateY(-40px) rotate(-8deg); opacity: 0.6; }
          75% { transform: translateY(-20px) rotate(5deg); opacity: 0.4; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes scale-up {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }

        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </section>
  );
}