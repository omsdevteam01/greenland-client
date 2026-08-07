"use client";

import { useEffect, useRef, useState } from "react";
import { 
  CheckCircle, 
  Users, 
  Building2, 
  Award, 
  Clock, 
  Shield, 
  HardHat, 
  Truck, 
  Zap,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Target,
  Eye
} from "lucide-react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

const stats = [
  { icon: Building2, value: "500+", label: "Projects Completed", color: "cyan" },
  { icon: Users, value: "200+", label: "Happy Clients", color: "emerald" },
  { icon: Award, value: "15+", label: "Awards Won", color: "purple" },
  { icon: Clock, value: "10+", label: "Years Experience", color: "gold" },
];

const features = [
  { icon: Shield, text: "Quality Construction", color: "cyan" },
  { icon: HardHat, text: "Expert Team", color: "emerald" },
  { icon: Clock, text: "On-Time Delivery", color: "purple" },
  { icon: Shield, text: "Safety First", color: "gold" },
  { icon: TrendingUp, text: "Competitive Pricing", color: "cyan" },
  { icon: Zap, text: "24/7 Support", color: "emerald" },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality, using only the best materials and craftsmanship.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Our clients are at the heart of everything we do, ensuring complete satisfaction.",
  },
  {
    icon: Shield,
    title: "Safety & Integrity",
    description: "We maintain the highest safety standards and operate with complete integrity.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace cutting-edge technology and innovative construction methods.",
  },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
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

  // Counter animation for stats
  useEffect(() => {
    if (isVisible) {
      const statValues = [500, 200, 15, 10];
      const intervals = statValues.map((target, index) => {
        let current = 0;
        const increment = Math.ceil(target / 40);
        return setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervals[index]);
          }
          setCounters(prev => ({
            ...prev,
            [index]: current
          }));
        }, 30);
      });
      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isVisible]);

  return (
    <>
      <Header />

      {/* Hero Section - Mobile optimized */}
      <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Background Glow - Hidden on mobile */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        {/* Floating Particles - Reduced on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-cyan-400/10 animate-float ${
                i < 6 ? 'block' : 'hidden md:block'
              }`}
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

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
              About Us
            </span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 sm:mt-3 animate-slide-up">
            Building Tomorrow,{" "}
            <span className="text-cyan-400">Today</span>
          </h1>
          <div className="w-14 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 sm:mt-4 animate-scale-x"></div>
          <p className="max-w-2xl mx-auto text-white/60 mt-3 sm:mt-6 text-sm sm:text-lg leading-relaxed px-2 animate-fade-in-delayed">
            We are a trusted name in construction, steel fabrication and engineering solutions,
            delivering excellence with every project.
          </p>
        </div>

        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-20px) translateX(-5px); }
            75% { transform: translateY(-10px) translateX(5px); }
          }
          @keyframes pulse-delayed {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scale-x {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
          .animate-pulse-glow-delayed { animation: pulse-glow 4s ease-in-out infinite; animation-delay: 2s; }
          .animate-float { animation: float linear infinite; }
          .animate-pulse { animation: pulse-delayed 2s ease-in-out infinite; }
          .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite; animation-delay: 0.5s; }
          .animate-fade-in { animation: fade-in 0.8s ease-out 0.2s forwards; opacity: 0; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.6s forwards; opacity: 0; }
          .animate-slide-up { animation: slide-up 0.8s ease-out 0.4s forwards; opacity: 0; }
          .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
        `}</style>
      </section>

      {/* Main About Content - Mobile optimized */}
      <section className="relative py-10 sm:py-16 md:py-20 overflow-hidden" ref={sectionRef}
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Decorative Elements - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 right-0 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden md:block absolute bottom-20 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Glassy Grid Pattern - Hidden on mobile */}
        <div className="hidden md:block absolute inset-0 opacity-[0.02] z-[5]"
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
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/8 animate-float hidden md:block"
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

        <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-20 items-center">
            {/* Left Content - Mobile optimized */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-cyan-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/20 animate-slide-up">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="text-cyan-300 text-[9px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px]">
                  Who We Are
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 animate-slide-up-delayed">
                Delivering Excellence in
                <span className="block text-cyan-400">Construction & Engineering</span>
              </h2>

              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent mt-2 sm:mt-4 animate-scale-x-delayed"></div>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-4 sm:mt-6 animate-fade-in-delayed-2">
                With years of expertise in the construction industry, we have established ourselves
                as a reliable partner for residential, commercial, and industrial projects across the region.
              </p>

              <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 animate-fade-in-delayed-3">
                Our commitment to quality, safety, and innovation ensures that every structure
                we build stands the test of time. We take pride in delivering projects that
                exceed expectations and create lasting value for our clients.
              </p>

              {/* Features Grid - Mobile optimized */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg transition-all duration-500 hover:bg-white/5 hover:translate-x-1 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 0.08}s` }}
                    >
                      <CheckCircle size={14} className="sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-white/70">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Stats - Mobile optimized */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-5 sm:mt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`text-center p-2.5 sm:p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-1 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 0.12}s` }}
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 mx-auto group-hover:scale-110 transition-transform" />
                      <div className="text-base sm:text-lg md:text-xl font-bold text-white mt-0.5 sm:mt-1">
                        {stat.value.includes('+') 
                          ? `${counters[index] || 0}+` 
                          : stat.value}
                      </div>
                      <div className="text-[8px] sm:text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image - Mobile optimized, moves to top */}
            <div className="relative order-1 lg:order-2 animate-slide-up-delayed">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/images/about.webp"
                  alt="About Us"
                  className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Floating Card 1 - Mobile optimized */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:left-4 bg-[#03141C]/95 backdrop-blur-xl rounded-xl shadow-2xl p-3 sm:p-4 max-w-[160px] sm:max-w-[200px] border-l-4 border-cyan-400 border border-white/10 animate-float-card">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-400/10 flex items-center justify-center animate-pulse-slow">
                    <span className="text-base sm:text-xl">🏗️</span>
                  </div>
                  <div>
                    <p className="text-sm sm:text-lg font-bold text-white">10+ Years</p>
                    <p className="text-[8px] sm:text-xs text-white/50">Of Excellence</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-3 sm:-top-4 -right-2 sm:-right-4 bg-cyan-400 rounded-xl shadow-2xl p-3 sm:p-4 max-w-[150px] sm:max-w-[180px] animate-float-card-delayed">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xl sm:text-2xl animate-pulse-star">⭐</span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#03141C]">4.9/5</p>
                    <p className="text-[8px] sm:text-[10px] text-[#03141C]/70">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Mobile optimized */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-white/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                  Our Core Values
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1.5 sm:mt-2">
                What Drives <span className="text-cyan-400">Us</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1.5 sm:mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`group p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-2 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                      <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mt-2 sm:mt-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission & Vision - Mobile optimized */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 lg:pt-12 border-t border-white/10">
            <div
              className={`group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                <Target size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-3 sm:mt-4 group-hover:text-cyan-400 transition-colors duration-300">Our Mission</h3>
              <p className="text-white/60 text-sm sm:text-base mt-1.5 sm:mt-2 leading-relaxed">
                To deliver exceptional construction solutions that combine quality, innovation,
                and sustainability, creating lasting value for our clients and communities.
              </p>
            </div>

            <div
              className={`group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                <Eye size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-3 sm:mt-4 group-hover:text-cyan-400 transition-colors duration-300">Our Vision</h3>
              <p className="text-white/60 text-sm sm:text-base mt-1.5 sm:mt-2 leading-relaxed">
                To be the most trusted and innovative construction company, setting new standards
                of excellence in the industry through quality craftsmanship and client satisfaction.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-cyan-400 hover:text-[#16D5E8] transition-all duration-300 group text-sm sm:text-base"
            >
              <span className="relative">
                Get a Free Quote
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </span>
              <ArrowRight size={14} className="sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-8px) translateX(4px); }
            50% { transform: translateY(-16px) translateX(-4px); }
            75% { transform: translateY(-8px) translateX(4px); }
          }
          @keyframes float-card {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes pulse-star {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up-delayed {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delayed-2 {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delayed-3 {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scale-x-delayed {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .animate-float { animation: float linear infinite; }
          .animate-float-card { animation: float-card 3s ease-in-out infinite; }
          .animate-float-card-delayed { animation: float-card 3s ease-in-out infinite; animation-delay: 1.5s; }
          .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
          .animate-pulse-star { animation: pulse-star 2s ease-in-out infinite; }
          .animate-slide-up { animation: slide-up 0.8s ease-out 0.2s forwards; opacity: 0; }
          .animate-slide-up-delayed { animation: slide-up-delayed 0.8s ease-out 0.4s forwards; opacity: 0; }
          .animate-fade-in-delayed-2 { animation: fade-in-delayed-2 0.8s ease-out 0.6s forwards; opacity: 0; }
          .animate-fade-in-delayed-3 { animation: fade-in-delayed-3 0.8s ease-out 0.8s forwards; opacity: 0; }
          .animate-scale-x-delayed { animation: scale-x-delayed 0.8s ease-out 0.4s forwards; transform-origin: left; }

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