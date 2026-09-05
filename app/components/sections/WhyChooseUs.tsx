'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Building2,
  CheckCircle,
  TrendingUp,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    desc: 'We maintain the highest quality standards in every project with rigorous quality control processes.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We understand the importance of deadlines and ensure every project is completed on schedule.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    desc: 'With years of experience, we bring unmatched expertise to every construction project.',
  },
  {
    icon: Users,
    title: 'Skilled Team',
    desc: 'Our team of skilled professionals ensures superior craftsmanship and attention to detail.',
  },
  {
    icon: Building2,
    title: 'End-to-End Solutions',
    desc: 'From design to completion, we provide comprehensive construction solutions under one roof.',
  },
  // Extra feature for mobile (hidden on desktop)
  {
    icon: TrendingUp,
    title: 'Innovation & Growth',
    desc: 'We continuously innovate and adapt to deliver cutting-edge construction solutions.',
  },
];

export default function WhyChooseUs() {
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

  // Show 5 features on desktop, all 6 on mobile
  const desktopFeatures = features.slice(0, 5);
  const mobileFeatures = features;

  return (
    <section className="relative w-full py-6 sm:py-8 overflow-hidden" ref={sectionRef}>

      {/* Background - Same as Business Section */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-[#F8F6F1] via-[#EDE4D5] to-[#DCCBB5]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/40"></div>
      </div>

      {/* Glassy Grid Pattern - Same as Business Section */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.04] z-[5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(169,148,121,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169,148,121,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Particles - Same as Business Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#A99479]/20 animate-float hidden md:block"
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

      {/* Floating Shapes - Same as Business Section */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#B8A58D]/30 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: `radial-gradient(circle, rgba(184,165,141,.12), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Compact on mobile */}
        <div 
          className={`text-center mb-3 sm:mb-6 lg:mb-7 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse"></span>
            <span className="uppercase tracking-[1.5px] sm:tracking-[4px] text-[7px] sm:text-[10px] font-semibold text-[#3F382F]">
              WHY CHOOSE US
            </span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse-delayed"></span>
          </div>

          <h2 className="mt-1 sm:mt-3 text-lg sm:text-2xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#3F382F]">Built with</span>{" "}
            <span className="text-[#A99479]">Excellence</span>
          </h2>

          <div className="flex justify-center items-center gap-1.5 sm:gap-3 mt-1.5 sm:mt-3">
            <span className="w-6 sm:w-10 h-[2px] bg-[#A99479]" />
            <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rotate-45 bg-[#A99479]" />
            <span className="w-6 sm:w-10 h-[2px] bg-[#A99479]/40" />
          </div>

          <p className="hidden sm:block max-w-2xl mx-auto mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#3F382F]/90 leading-relaxed px-2">
            We combine years of experience, skilled craftsmanship, and cutting-edge technology
            to deliver construction projects that stand the test of time.
          </p>
        </div>

        {/* Desktop Features Grid - 5 columns */}
        <div className="hidden lg:grid grid-cols-5 gap-0">
          {desktopFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`
                  group
                  relative
                  flex flex-col items-center text-center
                  px-4 py-6
                  transition-all
                  duration-500
                  ${index < desktopFeatures.length - 1 ? "border-r border-[#A99479]/20" : ""}
                  hover:bg-white/30
                  rounded-2xl
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  animation: isVisible ? `slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s forwards` : 'none'
                }}
              >
                {/* Glass reflection on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A99479]/10 border border-[#A99479]/25 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#A99479]/20 group-hover:shadow-[0_0_30px_rgba(169,148,121,0.15)]">
                  <Icon size={20} className="text-[#927E64]" />
                </div>

                {/* Heading */}
                <h4 className="mt-3 text-sm font-bold leading-snug text-[#3F382F] group-hover:text-[#927E64] transition-colors duration-300">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-1.5 max-w-[150px] text-xs text-[#3F382F]/90 leading-relaxed group-hover:text-[#3F382F]/95 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#A99479]/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Features Grid - 2 columns with 6 items (perfect grid) */}
        <div className="lg:hidden grid grid-cols-2 gap-2 sm:gap-4">
          {mobileFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`
                  group
                  relative
                  flex flex-col items-center text-center
                  px-2 sm:px-4 py-3 sm:py-6
                  transition-all
                  duration-500
                  ${index < mobileFeatures.length - 1 ? "border-b border-[#A99479]/15" : ""}
                  ${index % 2 === 0 ? "border-r border-[#A99479]/15" : ""}
                  ${index < mobileFeatures.length - 2 ? "border-b border-[#A99479]/15" : ""}
                  hover:bg-white/30
                  rounded-lg sm:rounded-2xl
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  animation: isVisible ? `slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s forwards` : 'none'
                }}
              >
                {/* Glass reflection on hover - Hidden on mobile */}
                <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>

                {/* Icon - Even smaller on mobile */}
                <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#A99479]/10 border border-[#A99479]/25 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#A99479]/20 group-hover:shadow-[0_0_30px_rgba(169,148,121,0.15)]">
                  <Icon size={14} className="sm:w-5 sm:h-5 text-[#927E64]" />
                </div>

                {/* Heading - Compact on mobile */}
                <h4 className="mt-1 sm:mt-3 text-[9px] sm:text-sm font-bold leading-tight text-[#3F382F] group-hover:text-[#927E64] transition-colors duration-300">
                  {item.title}
                </h4>

                {/* Description - Hidden on mobile, shown on tablet+ */}
                <p className="hidden sm:block mt-1 sm:mt-1.5 max-w-[150px] text-[10px] sm:text-xs text-[#3F382F]/90 leading-relaxed group-hover:text-[#3F382F]/95 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Short description for mobile */}
                <p className="block sm:hidden text-[8px] text-[#3F382F]/80 leading-tight mt-0.5 max-w-[80px]">
                  {item.desc.split(' ').slice(0, 4).join(' ')}...
                </p>

                {/* Bottom glow line - Hidden on mobile */}
                <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#A99479]/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative divider - Smaller on mobile */}
        <div className="mt-3 sm:mt-5 flex items-center justify-center gap-2 sm:gap-4">
          <span className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent to-[#A99479]/50" />
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rotate-45 bg-[#A99479]" />
          <span className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-transparent to-[#A99479]/50" />
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
        
        @keyframes floatShape {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          25% { transform: translateY(-15px) rotate(6deg); opacity: 0.4; }
          50% { transform: translateY(-30px) rotate(-6deg); opacity: 0.6; }
          75% { transform: translateY(-15px) rotate(4deg); opacity: 0.4; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
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

        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse {
          animation: pulse-delayed 2s ease-in-out infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
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