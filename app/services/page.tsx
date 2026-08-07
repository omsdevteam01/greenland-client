"use client";

import { 
  Building2, 
  Hammer, 
  Cog, 
  ArrowRight, 
  CheckCircle,
  Home,
  Warehouse,
  Factory,
  HardHat,
  Shield,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  Briefcase,
  Target
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, villas, apartments, and residential complexes with premium quality.",
    features: ["Custom Home Building", "Apartment Complexes", "Villa Construction", "Renovation & Remodeling"],
    image: "/images/residential.jpg",
    color: "cyan",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, shopping malls, and commercial complexes.",
    features: ["Office Buildings", "Retail Spaces", "Shopping Malls", "IT Parks & Campuses"],
    image: "/images/commercial.jpg",
    color: "purple",
  },
  {
    icon: Warehouse,
    title: "Industrial Construction",
    description: "Factories, warehouses, industrial plants, and manufacturing facilities.",
    features: ["Factories & Plants", "Warehouses", "Industrial Sheds", "Manufacturing Facilities"],
    image: "/images/industrial.jpg",
    color: "orange",
  },
  {
    icon: Hammer,
    title: "Steel Fabrication",
    description: "High-quality steel structures built for strength, durability, and precision.",
    features: ["Structural Steel", "Custom Fabrication", "Steel Frames", "Heavy Steel Structures"],
    image: "/images/steel.jpg",
    color: "emerald",
  },
  {
    icon: Cog,
    title: "Engineering Solutions",
    description: "End-to-end engineering solutions tailored to your project requirements.",
    features: ["Structural Engineering", "Civil Engineering", "Project Management", "Consulting"],
    image: "/images/engineering.jpg",
    color: "blue",
  },
  {
    icon: HardHat,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with modern designs and quality workmanship.",
    features: ["Interior Remodeling", "Exterior Renovation", "Space Optimization", "Modern Upgrades"],
    image: "/images/renovation.jpg",
    color: "gold",
  },
];

const stats = [
  { icon: Building2, value: "500+", label: "Projects Completed", color: "cyan" },
  { icon: Users, value: "200+", label: "Happy Clients", color: "purple" },
  { icon: Award, value: "15+", label: "Awards Won", color: "orange" },
  { icon: Clock, value: "10+", label: "Years Experience", color: "emerald" },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We understand your requirements, budget, and vision for the project.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description: "Our team creates detailed plans and designs tailored to your needs.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We execute the project with precision, quality, and timely delivery.",
  },
  {
    step: "04",
    title: "Handover",
    description: "We ensure complete satisfaction and provide ongoing support.",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We maintain the highest quality standards in every project.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals ensure superior craftsmanship.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We value your time and deliver projects on schedule.",
  },
  {
    icon: Award,
    title: "Client Satisfaction",
    description: "We exceed expectations and build lasting relationships.",
  },
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
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
    <>
      <Header />
      <section className="relative w-full min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
        ref={sectionRef}
      >
        {/* Background Glow - Hidden on mobile */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        {/* Animated Orb - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl animate-orb" />

        {/* Floating Particles - Reduced on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-cyan-400/10 animate-float ${
                i < 8 ? 'block' : 'hidden md:block'
              }`}
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 12 + 8}s`,
                animationDelay: `${Math.random() * 8}s`,
                opacity: 0.2 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* Floating Shapes - Hidden on mobile */}
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/5 backdrop-blur-sm animate-float-shape"
              style={{
                width: `${Math.random() * 30 + 15}px`,
                height: `${Math.random() * 30 + 15}px`,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                borderRadius: i % 2 === 0 ? '50%' : '8px',
                animationDuration: `${Math.random() * 12 + 8}s`,
                animationDelay: `${Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                background: `radial-gradient(circle, rgba(22,213,232,.03), transparent)`,
              }}
            />
          ))}
        </div>

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

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Header - Reduced spacing */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-cyan-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/20 mb-2 sm:mb-4 animate-slide-up">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-cyan-300 text-[8px] sm:text-[10px] font-semibold uppercase tracking-[2px] sm:tracking-[3px] animate-text-shimmer">
                What We Offer
              </span>
              <Sparkles size={10} className="sm:w-3 sm:h-3 text-cyan-400 animate-pulse-slow" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mt-2 sm:mt-3 animate-slide-up-delayed">
              Our <span className="text-cyan-400 animate-gradient-text">Services</span>
            </h1>
            <div className="w-14 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 sm:mt-4 animate-scale-x" />
            <p className="max-w-3xl mx-auto text-white/60 mt-2 sm:mt-4 text-sm sm:text-lg leading-relaxed px-2 animate-fade-in-delayed">
              Comprehensive construction and engineering services delivered with excellence,
              innovation, and unwavering quality. From concept to completion, we bring your vision to life.
            </p>
          </div>

          {/* Stats Section - Mobile optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 lg:mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-1 hover:scale-[1.02] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="relative inline-block">
                    <Icon size={20} className="sm:w-7 sm:h-7 text-cyan-400 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 scale-0 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1 animate-counter">{stat.value}</div>
                  <div className="text-[9px] sm:text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Services Grid - Mobile optimized */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(22,213,232,0.05)] relative overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/5 group-hover:from-cyan-400/10 group-hover:via-cyan-400/5 group-hover:to-cyan-400/0 transition-all duration-700" />
                  
                  {/* Shimmer Effect - Hidden on mobile */}
                  <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all duration-300">
                      <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mt-3 sm:mt-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-1.5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-1.5 sm:gap-2 text-white/40 text-[10px] sm:text-xs group-hover:text-white/60 transition-colors duration-300">
                          <CheckCircle size={10} className="sm:w-3 sm:h-3 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1 text-cyan-400 text-xs sm:text-sm font-medium mt-3 sm:mt-4 group-hover:gap-2 transition-all duration-300"
                    >
                      Get a Quote
                      <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us Section - Mobile optimized */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-text-shimmer">
                  Why Choose Us
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1.5 sm:mt-2 animate-slide-up">
                Built with <span className="text-cyan-400">Excellence</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1.5 sm:mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`group p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                      <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mt-2 sm:mt-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Section - Mobile optimized */}
          <div className="mt-6 sm:mt-8 lg:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                  How We Work
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1.5 sm:mt-2">
                Our <span className="text-cyan-400">Process</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1.5 sm:mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`group p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-400/30 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg mt-2 sm:mt-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Mobile optimized */}
          <div className="mt-8 sm:mt-12 lg:mt-16 p-5 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-cyan-400/5 border border-cyan-400/20 text-center hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(22,213,232,0.05)]">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Ready to Start Your Project?</h3>
            <p className="text-white/50 text-sm sm:text-base mt-1.5 sm:mt-2">Let's discuss your requirements and bring your vision to life.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#03141C] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.3)] relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Get a Free Quote</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 border border-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                View Our Projects
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-8px) translateX(4px); }
            50% { transform: translateY(-16px) translateX(-4px); }
            75% { transform: translateY(-8px) translateX(4px); }
          }

          @keyframes float-shape {
            0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
            25% { transform: translateY(-15px) rotate(6deg); opacity: 0.4; }
            50% { transform: translateY(-30px) rotate(-6deg); opacity: 0.6; }
            75% { transform: translateY(-15px) rotate(4deg); opacity: 0.4; }
          }

          @keyframes pulse-delayed {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          @keyframes text-shimmer {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; text-shadow: 0 0 20px rgba(22,213,232,0.3); }
          }

          @keyframes gradient-text {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-up-delayed {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes scale-x {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }

          @keyframes orb {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
          }

          @keyframes counter {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }

          .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
          .animate-pulse-glow-delayed { animation: pulse-glow 4s ease-in-out infinite; animation-delay: 2s; }
          .animate-float { animation: float linear infinite; }
          .animate-float-shape { animation: float-shape ease-in-out infinite; }
          .animate-pulse { animation: pulse-delayed 2s ease-in-out infinite; }
          .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite; animation-delay: 0.5s; }
          .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
          .animate-gradient-text { background-size: 200% 200%; animation: gradient-text 4s ease-in-out infinite; }
          .animate-slide-up { animation: slide-up 0.6s ease-out 0.2s forwards; opacity: 0; }
          .animate-slide-up-delayed { animation: slide-up-delayed 0.6s ease-out 0.4s forwards; opacity: 0; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.6s forwards; opacity: 0; }
          .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
          .animate-orb { animation: orb 6s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
          .animate-counter { animation: counter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; display: inline-block; }

          @media (max-width: 640px) {
            .animate-float {
              animation-duration: 15s !important;
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}