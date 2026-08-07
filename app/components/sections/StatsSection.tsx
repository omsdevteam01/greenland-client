'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: 500,
    label: 'Projects',
    suffix: '+',
  },
  {
    icon: Users,
    value: 200,
    label: 'Clients',
    suffix: '+',
  },
  {
    icon: Award,
    value: 15,
    label: 'Awards',
    suffix: '+',
  },
  {
    icon: Clock,
    value: 10,
    label: 'Years',
    suffix: '+',
  },
];

export default function StatsSection() {
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
    <section className="relative w-full py-10 sm:py-12 overflow-hidden" ref={sectionRef}>

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

      {/* Animated Particles - Reduced on mobile but visible */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header - With animation */}
        <div 
          className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
              Our Achievements
            </p>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1.5 sm:mt-2">
            Numbers That <span className="text-cyan-400">Speak</span>
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1.5 sm:mt-2"></div>
        </div>

        {/* Stats Grid - Mobile optimized with animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`
                  relative
                  rounded-lg
                  border border-white/10
                  bg-[#03141C]/40
                  backdrop-blur-xl
                  p-2.5 sm:p-3
                  text-center
                  transition-all
                  duration-500
                  hover:scale-[1.08]
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_40px_rgba(22,213,232,0.08)]
                  hover:bg-[#03141C]/60
                  group
                  cursor-default
                  overflow-hidden
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  animation: isVisible ? `slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s forwards` : 'none'
                }}
              >
                {/* Pop Effect - Animated Background - Hidden on mobile */}
                <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pop-glow"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pop-glow-delayed"></div>
                </div>

                {/* Glass reflection - Hidden on mobile */}
                <div className="hidden md:block absolute inset-0 rounded-lg bg-gradient-to-br from-white/3 to-transparent pointer-events-none"></div>

                {/* Icon - Smaller with Pop Effect */}
                <div className="flex justify-center mb-1.5 sm:mb-2">
                  <div className="
                    w-8 h-8 sm:w-10 sm:h-10 
                    rounded-full 
                    border border-cyan-400/20 
                    bg-cyan-400/5 
                    flex 
                    items-center 
                    justify-center 
                    transition-all 
                    duration-300
                    group-hover:bg-cyan-400/20
                    group-hover:scale-110
                    group-hover:shadow-[0_0_20px_rgba(22,213,232,0.15)]
                  ">
                    <Icon size={15} className="sm:w-[18px] sm:h-[18px] text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" />
                  </div>
                </div>

                {/* Value - Animated Counter with Pop */}
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                  <span className="inline-block animate-counter">{stat.value}</span>
                  {stat.suffix}
                </div>

                {/* Label - Smaller */}
                <p className="text-white/40 text-[8px] sm:text-[10px] uppercase tracking-wider mt-0.5 transition-all duration-300 group-hover:text-white/60">
                  {stat.label}
                </p>

                {/* Bottom glow line with pop - Hidden on mobile */}
                <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-3/4 transition-all duration-500"></div>

                {/* Corner accents - Hidden on mobile */}
                <div className="hidden md:block absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-500 rounded-tl-lg"></div>
                <div className="hidden md:block absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-500 rounded-tr-lg"></div>
                <div className="hidden md:block absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-500 rounded-bl-lg"></div>
                <div className="hidden md:block absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-500 rounded-br-lg"></div>
              </div>
            );
          })}
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
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes counter {
          0% { 
            opacity: 0; 
            transform: scale(0.5) translateY(10px); 
          }
          60% { 
            transform: scale(1.1) translateY(-2px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }

        @keyframes pop-glow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }

        @keyframes pop-glow-delayed {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }

        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-counter {
          animation: counter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          display: inline-block;
        }

        .animate-pop-glow {
          animation: pop-glow 3s ease-in-out infinite;
        }

        .animate-pop-glow-delayed {
          animation: pop-glow-delayed 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        @media (max-width: 640px) {
          .animate-counter {
            animation: counter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        }
      `}</style>
    </section>
  );
}