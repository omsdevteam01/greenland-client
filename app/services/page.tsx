"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Sun,
  Layers,
  Users,
  Award,
  Clock,
  Shield,
  HardHat,
  Truck,
  Zap,
  TrendingUp,
  Target,
  CheckCircle,
  Sparkles,
  Home,
  Paintbrush,
  Sofa,
  Building,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

// Business Divisions Data
const divisions = [
  {
    id: "construction",
    name: "Construction",
    icon: Building2,
    image: "/images/luxury.png",
    description:
      "End-to-end construction solutions that build strong, functional and sustainable spaces.",
    link: "/construction",
    features: [
      "Building Construction",
      "Interior Works",
      "Renovation & Remodeling",
      "Project Management",
      "Quality Assurance",
    ],
  },
  {
    id: "greenland",
    name: "GreenLand",
    icon: Sun,
    image: "/images/product2.png",
    subtitle: "Tensile Shade Solutions",
    description:
      "Modern tensile and shade structures designed for comfort, durability and aesthetic appeal.",
    link: "/greenland",
    features: [
      "Car Parking Shades",
      "Walkway & Entrance Shades",
      "Outdoor Canopies",
      "Custom Tensile Structures",
      "Design & Installation",
    ],
  },
];

// Why Choose Data
const whyChoose = [
  {
    icon: Shield,
    title: "Experienced Team",
    description: "Skilled professionals with industry expertise",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "We use quality materials for lasting results",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time execution without compromising on quality",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "Building long-term relationships through trust and transparency",
  },
];

// Stats
const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years of Experience" },
];

export default function BusinessesPage() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <>
      <Header />

      {/* Hero Section - No Image */}
      <section
        className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-cyan-400/10 animate-float ${
                i < 8 ? "block" : "hidden md:block"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                Our Businesses
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-slide-up">
              Different Expertise.{" "}
              <span className="text-cyan-400">One Vision.</span>
            </h1>
            <div className="w-14 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 sm:mt-4 animate-scale-x" />
            <p className="max-w-2xl mx-auto text-white/60 mt-3 sm:mt-6 text-sm sm:text-lg leading-relaxed px-2 animate-fade-in-delayed">
              Ruhan Groups operates through two specialized divisions, united by a commitment to quality, innovation and client satisfaction.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-6 animate-fade-in-delayed-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(22,213,232,0.1)]">
                <CheckCircle size={12} className="text-cyan-400" />
                Quality Driven
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(22,213,232,0.1)]">
                <CheckCircle size={12} className="text-cyan-400" />
                Client Focused
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(22,213,232,0.1)]">
                <CheckCircle size={12} className="text-cyan-400" />
                Result Oriented
              </span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          @keyframes pulse-delayed {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-20px) translateX(-5px); }
            75% { transform: translateY(-10px) translateX(5px); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delayed-2 {
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
          .animate-fade-in-delayed-2 { animation: fade-in-delayed-2 0.8s ease-out 0.8s forwards; opacity: 0; }
          .animate-slide-up { animation: slide-up 0.8s ease-out 0.4s forwards; opacity: 0; }
          .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
        `}</style>
      </section>

      {/* Main Content */}
      <section
        className="relative py-10 sm:py-16 md:py-20 overflow-hidden"
        ref={sectionRef}
        style={{
          background: "linear-gradient(180deg, #03141C 0%, #05202B 30%, #03141C 100%)",
        }}
      >
        {/* Grid Pattern */}
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

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/5 animate-float-slow hidden md:block"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header - Customizable Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                Our Divisions
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 animate-slide-up-delayed">
              {/* Change this heading to anything you want */}
              Two Divisions. <span className="text-cyan-400">Endless Possibilities.</span>
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x-delayed" />
          </div>

          {/* Divisions Cards with Images */}
          <div className="space-y-6 sm:space-y-8">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <div
                  key={division.id}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(22,213,232,0.05)] hover:-translate-y-1">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="p-6 sm:p-8 lg:p-10 relative">
                      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
                        {/* Left - Content */}
                        <div className="lg:col-span-3">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300 border border-cyan-400/20 group-hover:border-cyan-400/40 flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(22,213,232,0.1)]">
                              <Icon size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 group-hover:translate-x-1">
                                {division.name}
                              </h3>
                              {division.subtitle && (
                                <p className="text-xs sm:text-sm text-cyan-300/50 tracking-wider uppercase font-light group-hover:text-cyan-300/70 transition-colors duration-300">
                                  {division.subtitle}
                                </p>
                              )}
                            </div>
                          </div>

                          <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-4 group-hover:text-white/70 transition-colors duration-300">
                            {division.description}
                          </p>

                          {/* Features List */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-4">
                            {division.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-all duration-300 group-hover:bg-white/5"
                              >
                                <CheckCircle size={12} className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          <Link
                            href={division.link}
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group/btn mt-4 text-sm font-medium"
                          >
                            <span className="relative">
                              Explore More
                              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover/btn:w-full transition-all duration-300" />
                            </span>
                            <ArrowRight size={14} className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                          </Link>
                        </div>

                        {/* Right - Image */}
                        <div className="lg:col-span-2">
                          <div className="relative rounded-xl overflow-hidden h-[180px] sm:h-[200px] lg:h-[220px] bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-white/5 group/image">
                            <Image
                              src={division.image}
                              alt={division.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback = document.createElement('div');
                                  fallback.className = 'w-full h-full bg-gradient-to-br from-cyan-900/20 to-blue-900/10 flex flex-col items-center justify-center';
                                  fallback.innerHTML = `
                                    <div class="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center mb-2 border border-cyan-400/20 animate-pulse-slow">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-cyan-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                    </div>
                                    <p class="text-white/30 text-xs">${division.name}</p>
                                  `;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 transition-all duration-300 group-hover/image:bg-cyan-500/20 group-hover/image:border-cyan-400/30">
                              <p className="text-white text-[10px] font-medium flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                {division.id === "construction" ? "Construction" : "GreenLand Tensile Shades"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Choose Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-white/10">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                  Why Choose Ruhan Groups?
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 animate-slide-up-delayed">
                Built on Trust. <span className="text-cyan-400">Driven by Excellence.</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x-delayed" />
              <p className="text-white/50 text-sm max-w-2xl mx-auto mt-3 animate-fade-in-delayed">
                With a skilled team, modern approach and client-first mindset, we deliver solutions that stand the test of time.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 transition-all duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`group p-5 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(22,213,232,0.06)] ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${0.6 + index * 0.08}s` }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={20} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mt-3 group-hover:text-cyan-400 transition-colors duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-xs sm:text-sm mt-1 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 24/7 Support Badge */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 transition-all duration-500 hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-[0_0_30px_rgba(22,213,232,0.1)]">
                <Clock size={18} className="text-cyan-400 animate-spin-slow" />
                <span className="text-cyan-300 text-sm font-semibold tracking-wider">24/7 Support & Service</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_60px_rgba(22,213,232,0.08)]">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-cyan-500/10 to-blue-600/5 animate-gradient-shift" />
              
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-slow" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-slow-delayed" />

              <div className="relative z-10 p-8 sm:p-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4 transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-105">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 text-[8px] font-semibold uppercase tracking-[3px]">
                    Let's Work Together
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white animate-slide-up-delayed">
                  Have a project in mind?
                </h3>
                
                <p className="text-white/50 text-sm sm:text-base mt-2 max-w-xl mx-auto animate-fade-in-delayed">
                  Let's build something great together.
                </p>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 group text-sm font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 mt-4"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up-delayed {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scale-x-delayed {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-15px) translateX(8px); }
            50% { transform: translateY(-25px) translateX(-8px); }
            75% { transform: translateY(-15px) translateX(8px); }
          }
          @keyframes pulse-glow-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          @keyframes pulse-glow-slow-delayed {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          .animate-slide-up { animation: slide-up 0.8s ease-out 0.2s forwards; opacity: 0; }
          .animate-slide-up-delayed { animation: slide-up-delayed 0.8s ease-out 0.4s forwards; opacity: 0; }
          .animate-fade-in { animation: fade-in 0.8s ease-out 0.2s forwards; opacity: 0; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.6s forwards; opacity: 0; }
          .animate-scale-x-delayed { animation: scale-x-delayed 0.8s ease-out 0.4s forwards; transform-origin: left; }
          .animate-float-slow { animation: float-slow linear infinite; }
          .animate-pulse-glow-slow { animation: pulse-glow-slow 4s ease-in-out infinite; }
          .animate-pulse-glow-slow-delayed { animation: pulse-glow-slow-delayed 4s ease-in-out infinite; animation-delay: 2s; }
          .animate-gradient-shift { animation: gradient-shift 8s ease-in-out infinite; background-size: 200% 200%; }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
          .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        `}</style>
      </section>

      <Footer />
    </>
  );
}