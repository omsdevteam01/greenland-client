"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Home,
  Building,
  Sofa,
  Paintbrush,
  CheckCircle,
  Users,
  Award,
  Clock,
  Shield,
  HardHat,
  Truck,
  Zap,
  TrendingUp,
  Target,
  Eye,
  Sparkles,
  Droplets,
  Wind,
  Thermometer,
  ShieldCheck,
  Flame,
  Award as AwardIcon,
  Ruler,
  Palette,
  Quote,
} from "lucide-react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

// Service Data
const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    description:
      "Building dream homes with superior quality, modern design, and sustainable materials. From villas to apartments, we create spaces that reflect your lifestyle.",
    image: "/images/villa.png",
  },
  {
    id: "commercial",
    icon: Building,
    title: "Commercial Construction",
    description:
      "State-of-the-art commercial spaces designed for productivity, efficiency, and growth. We deliver office buildings, retail spaces, and commercial complexes.",
    image: "/images/commercial.png",
  },
  {
    id: "interior",
    icon: Sofa,
    title: "Interior Works",
    description:
      "Transforming spaces with elegant interior design, premium finishes, and thoughtful planning. We create interiors that are both beautiful and functional.",
    image: "/images/inte.png",
  },
  {
    id: "renovation",
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    description:
      "Breathing new life into existing spaces with modern upgrades, structural improvements, and contemporary design solutions.",
    image: "/images/home.png",
  },
];

// Nanoceramic Features
const nanoceramicFeatures = [
  {
    icon: Droplets,
    title: "Zero Moisture Absorption",
    desc: "Nano-coating protection repels dust, moisture, and stains, preventing particles and liquids from adhering.",
  },
  {
    icon: Wind,
    title: "Acoustic Insulation",
    desc: "Engineered with nano-scale ceramic particles that disrupt and absorb sound waves, minimizing echo and noise infiltration.",
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    desc: "Blocks external heat from entering indoor spaces, reducing reliance on air conditioning and lowering energy bills.",
  },
  {
    icon: ShieldCheck,
    title: "Antibacterial & Dust Repelling",
    desc: "Actively resists bacteria, fungi, and dust accumulation, maintaining a cleaner and healthier indoor environment.",
  },
  {
    icon: Flame,
    title: "Termite Proof & Zero Migration",
    desc: "Naturally resistant to termites, fungi, and algae, ensuring long-term structural integrity and longevity.",
  },
  {
    icon: AwardIcon,
    title: "Long-Lasting Finish",
    desc: "Retains color, texture, and sheen far longer than conventional materials, reducing long-term upkeep costs.",
  },
];

// Why Choose Data
const whyChoose = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on quality, using only the best materials and craftsmanship.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of experienced professionals delivers excellence in every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and deliver projects within the agreed timeframe.",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description: "We provide competitive pricing without compromising on quality.",
  },
];

// Process Steps
const process = [
  {
    title: "Consultation",
    description: "We discuss your vision, requirements, and budget to create a tailored plan.",
  },
  {
    title: "Design & Planning",
    description: "Our experts create detailed designs and comprehensive project plans.",
  },
  {
    title: "Construction",
    description: "We execute the project with precision, quality, and attention to detail.",
  },
  {
    title: "Handover",
    description: "We deliver the completed project and ensure your complete satisfaction.",
  },
];

export default function ConstructionPage() {
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
    <>
      <Header />
      <section className="relative w-full min-h-screen pt-8 sm:pt-10 pb-6 sm:pb-10 overflow-hidden" ref={sectionRef}
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Background Glow */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        {/* Floating Particles - Reduced on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-cyan-400/10 animate-float ${
                i < 6 ? "block" : "hidden md:block"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors duration-300 mb-3 sm:mb-4 group animate-fade-in"
          >
            <ArrowRight size={14} className="sm:w-4 sm:h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-xs sm:text-sm">Back to Service</span>
          </Link>

          {/* Hero Section - Smaller */}
          <div className="relative rounded-2xl overflow-hidden mb-6 sm:mb-8 border border-white/10 animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-cyan-500/10 to-blue-600/10" />
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow-delayed" />
            
            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-2 sm:mb-3">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[8px] sm:text-[10px] font-semibold text-cyan-300 uppercase tracking-[2px] sm:tracking-[3px]">
                  Ruhan Groups - Construction & Interiors
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Building <span className="text-cyan-400">Strong</span>.{" "}
                <span className="text-cyan-400">Designing</span> Beautiful.
              </h1>
              <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-white/60 text-sm sm:text-base px-2">
                From structural construction to complete interior works, we deliver high-quality residential,
                commercial, and industrial projects with precision and excellence.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 group text-sm font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* What We Offer - Premium Grid with Full Images */}
          <div className="mb-10 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                  What We Offer
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 animate-slide-up">
                Our <span className="text-cyan-400">Services</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(22,213,232,0.08)] animate-slide-up`}
                    style={{ animationDelay: `${0.3 + index * 0.12}s` }}
                  >
                    <div className="relative w-full h-52 sm:h-56 lg:h-64 xl:h-72 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        priority={index < 2}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'w-full h-full bg-gradient-to-br from-cyan-900/30 to-blue-900/20 flex items-center justify-center';
                            fallback.innerHTML = `
                              <div class="text-center">
                                <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto border border-cyan-400/20">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <p class="text-white/30 text-xs mt-2">${service.title}</p>
                              </div>
                            `;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400/30 transition-all duration-300">
                          <Icon size={18} className="sm:w-5 sm:h-5 text-cyan-300" />
                        </div>
                      </div>
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 text-[7px] sm:text-[8px] font-medium tracking-wider">
                        {service.id.toUpperCase()}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 lg:p-6">
                      <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/50 text-xs sm:text-sm lg:text-base mt-1.5 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nanoceramic Section - Premium Design */}
          <div className="mb-10 sm:mb-12 pt-8 sm:pt-10 border-t border-white/10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                  Granoceramics
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 animate-slide-up">
                Nanoceramic <span className="text-cyan-400">Ceiling Tiles</span>
              </h2>
              <p className="text-white/50 text-sm max-w-2xl mx-auto mt-2 animate-fade-in px-2">
                Developed using advanced nanoceramic particles — a groundbreaking innovation in ceiling technology for modern construction
              </p>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x" />
            </div>

            {/* Features - Premium Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
              {nanoceramicFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(22,213,232,0.06)] animate-slide-up`}
                    style={{ animationDelay: `${0.5 + index * 0.08}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300 flex-shrink-0">
                        <Icon size={18} className="sm:w-5 sm:h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm group-hover:text-cyan-400 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-white/40 text-[10px] sm:text-xs mt-1 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Weathered Wood Series - Premium Layout with Full Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-6 sm:mb-8 animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/10" />
              <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow" />
              
              <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                  {/* Left - Full Image */}
                  <div className="relative rounded-xl overflow-hidden h-52 sm:h-64 md:h-72 lg:h-80 group/image">
                    <Image
                      src="/images/weatherwood.png"
                      alt="Weathered Wood Series"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-amber-900/30 to-amber-800/20 flex items-center justify-center';
                          fallback.innerHTML = `
                            <div class="text-center">
                              <span class="text-4xl sm:text-5xl mb-2 block">🪵</span>
                              <p class="text-white/30 text-xs sm:text-sm">Weathered Wood Series</p>
                            </div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/70">Wall Panelling Tiles</span>
                      <span className="text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/70">False Ceiling Tile</span>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400/30">WEATHERED</span>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">WOOD</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-3">
                      <Ruler size={14} className="text-cyan-400" />
                      Size: 465 x 330 mm
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none">
                      Granoceramic's Weathered Wood Series ceiling tiles combine the rustic elegance of traditional wooden ceilings with the advanced performance of nanoceramic technology. Designed to replicate the rich textures and natural aesthetics of real wood, these tiles offer a warm, classic look ideal for both heritage-style and modern interiors.
                    </p>
                    
                    <div className="mt-4">
                      <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Palette size={14} className="text-cyan-400" />
                        Available Colors
                      </p>
                      <div className="flex gap-2 sm:gap-3">
                        {[
                          { name: "Redwood Brown", color: "#8B4513" },
                          { name: "Coffee Brown", color: "#6F4E37" },
                          { name: "Chocolate Brown", color: "#3B2F2F" },
                        ].map((color, idx) => (
                          <div key={idx} className="text-center group/color">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg border border-white/10 transition-all duration-300 group-hover/color:border-cyan-400/50 group-hover/color:scale-110" style={{ backgroundColor: color.color }} />
                            <p className="text-white/40 text-[7px] sm:text-[8px] mt-1 group-hover/color:text-white/60 transition-colors duration-300">{color.name.split(' ')[0]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-white/20 text-[8px] sm:text-[10px] uppercase tracking-[3px]">JUST LOOK UP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heritage Series - Premium Layout with Full Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/10" />
              <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow-delayed" />
              
              <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                  {/* Left - Full Image (Order 2 on desktop) */}
                  <div className="relative rounded-xl overflow-hidden h-52 sm:h-64 md:h-72 lg:h-80 order-2 lg:order-1 group/image">
                    <Image
                      src="/images/heritage.png"
                      alt="Heritage Series"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-amber-900/30 to-amber-800/20 flex items-center justify-center';
                          fallback.innerHTML = `
                            <div class="text-center">
                              <span class="text-4xl sm:text-5xl mb-2 block">🏛️</span>
                              <p class="text-white/30 text-xs sm:text-sm">Heritage Series</p>
                            </div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <span className="text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/70">False Ceiling Tiles</span>
                    </div>
                  </div>

                  {/* Right - Content (Order 1 on desktop) */}
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400/30">HERITAGE</span>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">SERIES</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-3">
                      <Ruler size={14} className="text-cyan-400" />
                      Size: 465 x 465 mm
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none">
                      The Nanoceramic Heritage Series ceiling tiles are designed to evoke the timeless elegance of classic architecture, combining modern durability with a vintage aesthetic. Featuring intricate patterns and refined textures, these tiles mirror the craftsmanship and ornamental detail of traditional heritage styles.
                    </p>
                    
                    <div className="mt-4">
                      <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Palette size={14} className="text-cyan-400" />
                        Available Colors
                      </p>
                      <div className="flex gap-2 sm:gap-3">
                        {[
                          { name: "Redwood Brown", color: "#8B4513" },
                          { name: "Coffee Brown", color: "#6F4E37" },
                          { name: "Chocolate Brown", color: "#3B2F2F" },
                        ].map((color, idx) => (
                          <div key={idx} className="text-center group/color">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg border border-white/10 transition-all duration-300 group-hover/color:border-cyan-400/50 group-hover/color:scale-110" style={{ backgroundColor: color.color }} />
                            <p className="text-white/40 text-[7px] sm:text-[8px] mt-1 group-hover/color:text-white/60 transition-colors duration-300">{color.name.split(' ')[0]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-white/20 text-[8px] sm:text-[10px] uppercase tracking-[3px]">JUST LOOK UP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose - Premium Cards */}
          <div className="mb-10 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                  Why Choose Us
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 animate-slide-up">
                Built on <span className="text-cyan-400">Trust</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(22,213,232,0.06)] animate-slide-up`}
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                      <Icon size={18} className="sm:w-5 sm:h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm mt-2 sm:mt-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-[10px] sm:text-xs mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process - Premium Simple (No Numbers) */}
          <div className="mb-8 sm:mb-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                  Our Process
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 animate-slide-up">
                How We <span className="text-cyan-400">Work</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`group p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] animate-slide-up`}
                  style={{ animationDelay: `${1.1 + index * 0.1}s` }}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                    <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-0.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Premium Full Width */}
          <div className="text-center animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-cyan-500/5 to-blue-600/10" />
              <div className="absolute -top-24 -right-24 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-24 -left-24 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow-delayed" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-3 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 text-[8px] font-semibold uppercase tracking-[3px]">
                    Let's Build Together
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Ready to Start Your <span className="text-cyan-400">Project</span>?
                </h3>
                <p className="text-white/50 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto px-2">
                  Get in touch with us today. Our team is ready to discuss your
                  project requirements and provide the best solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 group text-sm font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 mt-4"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-6 pb-3">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-300 text-[10px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] group"
            >
              <span className="w-5 sm:w-6 md:w-8 h-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></span>
              Back to Top
              <span className="w-5 sm:w-6 md:w-8 h-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

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

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.4s forwards;
          transform-origin: left;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .animate-slide-up {
            animation: slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          .animate-float {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </>
  );
}