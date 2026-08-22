"use client";

import {
  ArrowRight,
  Home,
  Building,
  Sofa,
  Paintbrush,
  Users,
  Award,
  Clock,
  Shield,
  TrendingUp,
  Droplets,
  Wind,
  Thermometer,
  ShieldCheck,
  Flame,
  Ruler,
  ArrowUpRight,
  Phone,
  Check,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    shortTitle: "Residential",
    description:
      "Dream homes built with superior quality, modern design and sustainable materials.",
  },
  {
    icon: Building,
    title: "Commercial Construction",
    shortTitle: "Commercial",
    description:
      "Efficient commercial spaces designed for productivity, growth and long-term value.",
  },
  {
    icon: Sofa,
    title: "Interior Works",
    shortTitle: "Interiors",
    description:
      "Elegant interiors with premium finishes, thoughtful planning and functional design.",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    shortTitle: "Renovation",
    description:
      "Modern upgrades and structural improvements that transform existing spaces.",
  },
];

/* =========================================================
   NANO CERAMIC
========================================================= */

const nanoFeatures = [
  {
    icon: Droplets,
    title: "Moisture Resistant",
    desc: "Repels dust, moisture and stains.",
  },
  {
    icon: Wind,
    title: "Acoustic Insulation",
    desc: "Helps minimize echo and unwanted noise.",
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    desc: "Helps reduce external heat.",
  },
  {
    icon: ShieldCheck,
    title: "Antibacterial",
    desc: "Resists bacteria, fungi and dust.",
  },
  {
    icon: Flame,
    title: "Termite Proof",
    desc: "Resistant to termites and algae.",
  },
  {
    icon: Award,
    title: "Long Lasting",
    desc: "Maintains finish and texture for longer.",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const advantages = [
  {
    icon: Shield,
    title: "Quality First",
    text: "Best materials and careful craftsmanship.",
  },
  {
    icon: Users,
    title: "Expert Team",
    text: "Experienced professionals on every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    text: "Projects completed within agreed timelines.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    text: "Excellent value without compromising quality.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    title: "Consultation",
    text: "Understand your requirements, vision and budget.",
  },
  {
    title: "Planning",
    text: "Prepare designs, materials and project schedules.",
  },
  {
    title: "Execution",
    text: "Build with precision, quality and attention to detail.",
  },
  {
    title: "Handover",
    text: "Complete the project and ensure your satisfaction.",
  },
];

/* =========================================================
   COLORS
========================================================= */

const productColors = [
  {
    name: "Redwood",
    color: "#8B4513",
  },
  {
    name: "Coffee",
    color: "#6F4E37",
  },
  {
    name: "Chocolate",
    color: "#3B2F2F",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ConstructionPage() {
  const [visible, setVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.05,
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main
        ref={pageRef}
        className="relative overflow-hidden"
      >
        {/* =====================================================
            GLOBAL BACKGROUND - Same as Business Section
        ===================================================== */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-cyan-400/40 via-cyan-300/30 to-blue-400/40" />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/15 via-transparent to-white/15" />

        <div
          className="fixed inset-0 -z-10 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22,213,232,.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22,213,232,.10) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#16D5E8]/15 animate-float hidden md:block"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 18 + 12}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pt-4 sm:pt-5 animate-fade-in">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#001a1f]/40 hover:text-cyan-600 text-[10px] transition-colors group"
              >
                <ArrowRight
                  size={12}
                  className="rotate-180 group-hover:-translate-x-1 transition-transform"
                />
                Back to Services
              </Link>
              <span className="hidden sm:block text-[8px] uppercase tracking-[3px] text-[#001a1f]/25">
                Ruhan Groups
              </span>
            </div>

            <div
              className={`grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-center py-7 sm:py-8 lg:py-10 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {/* LEFT */}
              <div className="lg:pr-4">
                <div className="flex items-center gap-2 mb-3 animate-fade-in">
                  <span className="w-7 h-px bg-cyan-600 animate-scale-x" />
                  <span className="text-cyan-700 text-[8px] uppercase tracking-[3px] font-bold">
                    Construction & Interiors
                  </span>
                </div>

                <h1 className="text-[43px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-black leading-[0.87] tracking-[-4px] animate-slide-up">
                  BUILDING
                  <span className="block text-cyan-600 animate-text-glow">STRONG.</span>
                  <span className="block">DESIGNING</span>
                  <span className="block text-[#001a1f]/35">BEAUTIFUL.</span>
                </h1>

                <div className="w-10 h-1 bg-cyan-600 mt-4 animate-scale-x" />

                <p className="max-w-lg text-[#001a1f]/50 text-xs sm:text-sm leading-6 mt-3 animate-fade-in-delayed">
                  From structural construction to complete interior works,
                  Ruhan Groups creates residential, commercial and industrial
                  spaces with quality, precision and thoughtful design.
                </p>

                <div className="flex flex-wrap gap-2 mt-4 animate-fade-in-delayed-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2.5 text-[10px] font-semibold transition-all group hover:-translate-y-0.5"
                  >
                    Start Your Project
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 border border-[#001a1f]/15 hover:border-cyan-600 text-[#001a1f]/60 hover:text-cyan-700 px-4 py-2.5 text-[10px] font-semibold transition-all hover:-translate-y-0.5"
                  >
                    Explore Services
                  </Link>
                </div>

                <div className="flex items-center gap-5 sm:gap-7 mt-5 pt-4 border-t border-[#001a1f]/10 animate-fade-in-delayed-3">
                  {[
                    { value: "500+", label: "Projects" },
                    { value: "10+", label: "Years" },
                    { value: "100%", label: "Commitment" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 hover:-translate-y-1 ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <p className="text-xl font-black text-cyan-600 animate-counter">
                        {stat.value}
                      </p>
                      <p className="text-[7px] uppercase tracking-[1.5px] text-[#001a1f]/35">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[300px] sm:h-[370px] lg:h-[450px] animate-slide-up-delayed">
                <div className="absolute right-0 top-0 w-[88%] h-[88%] overflow-hidden">
                  <Image
                    src="/images/villa.png"
                    alt="Ruhan Groups Construction"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a1f]/50 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 w-[58%] bg-cyan-800 text-white p-4 animate-fade-in">
                  <span className="text-cyan-300 text-[7px] uppercase tracking-[3px]">
                    Ruhan Groups
                  </span>
                  <h2 className="text-lg font-black mt-1">
                    STRUCTURE.
                    <span className="text-white/40"> FUNCTION.</span>
                  </h2>
                </div>

                <div className="absolute top-7 left-0 w-14 h-14 border-l border-t border-cyan-600/30" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="relative bg-cyan-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-[0.7fr_1.3fr] gap-5 items-center py-5 sm:py-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}>
              <h2 className="text-xl sm:text-2xl font-black text-white animate-slide-up">
                MORE THAN
                <span className="text-cyan-300 animate-text-glow"> STRUCTURES.</span>
              </h2>
              <p className="text-white/60 text-xs leading-5 animate-fade-in-delayed">
                We combine construction expertise, interior design, quality
                materials and disciplined execution to create spaces that
                remain valuable for years.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section id="services" className="py-8 sm:py-10 lg:py-12 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5 sm:mb-7">
              <div className="animate-fade-in">
                <span className="text-cyan-600 text-[8px] uppercase tracking-[3px] font-bold">
                  What We Do
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none tracking-[-2px] mt-1.5 animate-slide-up">
                  OUR
                  <span className="text-cyan-600 animate-text-glow"> SERVICES.</span>
                </h2>
              </div>
              <p className="max-w-sm text-[#001a1f]/40 text-[10px] sm:text-xs leading-5 animate-fade-in-delayed">
                Complete construction and interior solutions under one roof.
              </p>
            </div>

            {/* SERVICES GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      href="#showcase"
                      key={service.title}
                      className={`group relative min-h-[205px] sm:min-h-[220px] bg-white/20 backdrop-blur-sm border border-white/20 overflow-hidden hover:bg-cyan-800 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)] ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ 
                        transitionDelay: `${0.3 + index * 0.1}s`,
                        transition: 'none'
                      }}
                    >
                      {/* TOP ACCENT - Instant */}
                      <div className="absolute top-0 left-0 w-10 h-0.5 bg-cyan-700 group-hover:w-full" />
                      
                      {/* CORNER DETAIL - Instant */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                        <div className="absolute -right-8 -top-8 w-16 h-16 rotate-45 bg-cyan-700/10 group-hover:bg-cyan-700/20" />
                      </div>
                      
                      {/* CONTENT */}
                      <div className="relative z-10 h-full p-5 flex flex-col">
                        {/* ICON ROW */}
                        <div className="flex items-start justify-between">
                          <div className="relative w-11 h-11 bg-cyan-600/15 backdrop-blur-sm border border-cyan-600/35 flex items-center justify-center text-cyan-600 shadow-sm group-hover:bg-cyan-600 group-hover:text-white group-hover:rotate-3">
                            <Icon size={18} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-600 group-hover:bg-cyan-300" />
                          </div>
                          <ArrowUpRight
                            size={15}
                            className="text-[#001a1f]/20 group-hover:text-cyan-300"
                          />
                        </div>
                        
                        {/* CATEGORY - Instant */}
                        <span className="text-cyan-600 group-hover:text-cyan-300 text-[7px] uppercase tracking-[2px] font-bold mt-5">
                          {service.shortTitle}
                        </span>
                        
                        {/* TITLE - Instant */}
                        <h3 className="text-base sm:text-[17px] font-black leading-tight mt-1.5 text-[#001a1f] group-hover:text-white">
                          {service.title}
                        </h3>
                        
                        {/* DESCRIPTION - Instant */}
                        <p className="text-[#001a1f]/40 group-hover:text-white/80 text-[9px] sm:text-[10px] leading-5 mt-2">
                          {service.description}
                        </p>
                        
                        {/* BOTTOM */}
                        <div className="mt-auto pt-4 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-cyan-600 group-hover:text-cyan-300 text-[8px] uppercase tracking-[1.5px] font-bold">
                            Explore Service
                            <ArrowRight
                              size={11}
                              className="group-hover:translate-x-1"
                            />
                          </span>
                          <span className="w-8 h-px bg-cyan-800/20 group-hover:w-12 group-hover:bg-cyan-400/40" />
                        </div>
                      </div>
                      
                      {/* BOTTOM ACCENT - Instant */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-500 group-hover:w-full" />
                    </Link>
                  );
                })}
              </div>
              </div>
              </section>

        {/* =====================================================
            IMAGE SHOWCASE
        ===================================================== */}

        <section id="showcase" className="py-7 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-[1.4fr_0.6fr] gap-2.5 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* MAIN IMAGE */}
              <div className="relative h-[270px] sm:h-[340px] lg:h-[390px] overflow-hidden group">
                <Image
                  src="/images/commercial.png"
                  alt="Commercial Construction"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a1f]/80 to-transparent" />
                <div className="absolute bottom-5 left-5 sm:left-6">
                  <span className="text-cyan-300 text-[7px] uppercase tracking-[3px]">
                    Commercial
                  </span>
                  <h3 className="text-white text-xl sm:text-2xl font-black mt-1">
                    BUILT TO PERFORM.
                  </h3>
                </div>
              </div>

              {/* SMALL IMAGES */}
              <div className="grid grid-rows-2 gap-2.5">
                <div className="relative min-h-[130px] sm:min-h-[160px] overflow-hidden group">
                  <Image
                    src="/images/inte.png"
                    alt="Interior Works"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a1f]/75 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-cyan-300 text-[7px] uppercase tracking-[2px]">
                      Interior
                    </span>
                    <h3 className="text-white text-base font-bold mt-1">
                      THOUGHTFUL DETAILS.
                    </h3>
                  </div>
                </div>

                <div className="relative min-h-[130px] sm:min-h-[160px] overflow-hidden group">
                  <Image
                    src="/images/home.png"
                    alt="Renovation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a1f]/75 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-cyan-300 text-[7px] uppercase tracking-[2px]">
                      Renovation
                    </span>
                    <h3 className="text-white text-base font-bold mt-1">
                      NEW LIFE. NEW SPACE.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NANOCERAMIC
        ===================================================== */}

        <section className="py-8 sm:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-5 lg:gap-8 items-end mb-5">
              <div className="animate-fade-in">
                <span className="text-cyan-600 text-[8px] uppercase tracking-[3px] font-bold">
                  Granoceramics
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.9] tracking-[-2px] mt-1.5 animate-slide-up">
                  NANOCERAMIC
                  <span className="block text-cyan-600 animate-text-glow">CEILING TILES.</span>
                </h2>
              </div>
              <p className="text-[#001a1f]/45 text-[10px] sm:text-xs leading-5 max-w-xl animate-fade-in-delayed">
                Advanced nanoceramic technology designed for modern
                construction and architectural projects.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {nanoFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`relative p-4 bg-white/30 backdrop-blur-sm border border-white/40 hover:border-cyan-600/25 hover:-translate-y-0.5 transition-all duration-300 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${1.0 + index * 0.08}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/80 backdrop-blur-sm text-cyan-600 flex items-center justify-center flex-shrink-0 border border-cyan-600/10 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                        <Icon size={15} />
                      </div>
                      <div>
                        <h3 className="text-[12px] sm:text-xs font-bold text-[#001a1f]">
                          {feature.title}
                        </h3>
                        <p className="text-[#001a1f]/80 text-[10px] sm:text-[9px] leading-4 mt-1">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-5 h-0.5 bg-cyan-600/30" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <section className="relative py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* WEATHERED */}
              <div className="grid sm:grid-cols-2 min-h-[280px]">
                <div className="relative min-h-[200px] sm:min-h-full">
                  <Image
                    src="/images/weatherwood.png"
                    alt="Weathered Wood"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-cyan-600 p-5 flex flex-col justify-center">
                  <span className="text-cyan-300 text-[7px] uppercase tracking-[3px]">
                    Collection
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1.5">
                    WEATHERED
                    <span className="block text-cyan-300">WOOD</span>
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-[8px] mt-2">
                    <Ruler size={11} />
                    465 × 330 mm
                  </div>
                  <p className="text-white/80 text-[10px] leading-5 mt-3">
                    Rustic wood aesthetics combined with advanced nanoceramic
                    technology for refined interiors.
                  </p>
                  <div className="flex gap-1.5 mt-3">
                    {productColors.map((item) => (
                      <div
                        key={item.name}
                        className="w-6 h-6 border border-white/10 transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* HERITAGE */}
              <div className="grid sm:grid-cols-2 min-h-[280px]">
                <div className="relative min-h-[200px] sm:min-h-full order-1 sm:order-2">
                  <Image
                    src="/images/heritage.png"
                    alt="Heritage Series"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-cyan-800 p-5 flex flex-col justify-center order-2 sm:order-1">
                  <span className="text-cyan-300 text-[7px] uppercase tracking-[3px]">
                    Collection
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1.5">
                    HERITAGE
                    <span className="block text-cyan-300">SERIES</span>
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-[8px] mt-2">
                    <Ruler size={11} />
                    465 × 465 mm
                  </div>
                  <p className="text-white/80 text-[10px] leading-5 mt-3">
                    Timeless architectural patterns combined with modern
                    durability and refined nanoceramic technology.
                  </p>
                  <div className="flex gap-1.5 mt-3">
                    {productColors.map((item) => (
                      <div
                        key={item.name}
                        className="w-6 h-6 border border-white/10 transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY CHOOSE
        ===================================================== */}

        <section className="py-8 sm:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-5 lg:gap-8">
              <div className="animate-fade-in">
                <span className="text-cyan-600 text-[8px] uppercase tracking-[3px] font-bold">
                  Why Ruhan Groups
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.9] tracking-[-2px] mt-1.5 animate-slide-up">
                  BUILT ON
                  <span className="block text-cyan-600 animate-text-glow">TRUST.</span>
                </h2>
                <p className="text-[#001a1f]/40 text-[10px] leading-5 max-w-sm mt-3 animate-fade-in-delayed">
                  Quality materials, experienced professionals and disciplined
                  execution come together in every project.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                {advantages.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`group bg-white/30 backdrop-blur-sm p-4 border border-white/40 hover:border-cyan-600/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-cyan-600 text-white flex items-center justify-center group-hover:rotate-3 transition-transform">
                          <Icon size={15} />
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-[#001a1f] group-hover:text-cyan-700 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#001a1f]/40 text-[9px] leading-5 mt-2.5">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-1 text-cyan-600 text-[7px] uppercase tracking-[1.5px] font-bold mt-3">
                        <Check size={10} />
                        Guaranteed Approach
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-5">
              <div className="animate-fade-in">
                <span className="text-cyan-600 text-[8px] uppercase tracking-[3px] font-bold">
                  Our Process
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#001a1f] mt-1.5 animate-slide-up">
                  HOW WE
                  <span className="text-cyan-600 animate-text-glow"> WORK.</span>
                </h2>
              </div>
              <span className="hidden sm:block text-[#001a1f]/20 text-[8px] uppercase tracking-[3px] animate-fade-in-delayed">
                Simple · Clear · Reliable
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className={`group relative p-4 sm:p-5 bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-[#001a1f] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${1.6 + index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-600 text-[7px] uppercase tracking-[2px] font-bold group-hover:text-cyan-500">
                      Step {index + 1}
                    </span>
                    <ArrowRight
                      size={12}
                      className="text-cyan-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#001a1f] mt-3 group-hover:text-cyan-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#001a1f]/40 group-hover:text-cyan-800 text-[9px] leading-5 mt-1.5">
                    {step.text}
                  </p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="relative bg-cyan-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
                `,
                backgroundSize: "55px 55px",
              }}
            />
          </div>
          
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow-delayed" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row md:items-center justify-between gap-5 py-7 sm:py-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="animate-fade-in">
                <span className="text-cyan-300 text-[8px] uppercase tracking-[3px]">
                  Start Your Project
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1.5 animate-slide-up">
                  LET'S CREATE
                  <span className="text-cyan-300 animate-text-glow"> YOUR SPACE.</span>
                </h2>
                <p className="text-white/35 text-[10px] sm:text-xs mt-1.5 max-w-xl animate-fade-in-delayed">
                  Tell us about your construction, interior or renovation
                  project and let our team turn your vision into reality.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 animate-fade-in-delayed-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#001a1f] px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide transition-all group hover:-translate-y-1 hover:shadow-lg"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-cyan-400 text-white/60 hover:text-white px-4 py-2.5 text-[9px] font-bold transition-all hover:-translate-y-1"
                >
                  <Phone size={12} />
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed-2 {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed-3 {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-12px) translateX(6px); }
          50% { transform: translateY(-24px) translateX(-6px); }
          75% { transform: translateY(-12px) translateX(6px); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.1); }
          50% { text-shadow: 0 0 40px rgba(6, 182, 212, 0.25); }
        }
        @keyframes counter {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          60% { transform: scale(1.1) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-in-delayed-2 { animation: fade-in-delayed-2 0.8s ease-out 0.5s forwards; opacity: 0; }
        .animate-fade-in-delayed-3 { animation: fade-in-delayed-3 0.8s ease-out 0.7s forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        .animate-slide-up-delayed { animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards; opacity: 0; }
        .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
        .animate-float { animation: float linear infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-counter { animation: counter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; display: inline-block; }

        @media (max-width: 640px) {
          .animate-float { animation-duration: 18s !important; }
        }
      `}</style>
    </>
  );
}