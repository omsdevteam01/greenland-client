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
  Eye,
  Layers,
  Sun,
  Home,
  Sparkles,
  MapPin,
  Calendar,
  Award as AwardIcon,
  Flame,
  Droplets,
  Wind,
  Thermometer,
  ShieldCheck,
} from "lucide-react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { icon: Building2, value: "500+", label: "Projects Completed", color: "cyan" },
  { icon: Users, value: "200+", label: "Happy Clients", color: "cyan" },
  { icon: Award, value: "15+", label: "Awards Won", color: "cyan" },
  { icon: Clock, value: "10+", label: "Years Experience", color: "cyan" },
];

const features = [
  { icon: Shield, text: "Quality Construction", color: "cyan" },
  { icon: HardHat, text: "Expert Team", color: "cyan" },
  { icon: Clock, text: "On-Time Delivery", color: "cyan" },
  { icon: Shield, text: "Safety First", color: "cyan" },
  { icon: TrendingUp, text: "Competitive Pricing", color: "cyan" },
  { icon: Zap, text: "24/7 Support", color: "cyan" },
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

// --- BUSINESS DIVISIONS ---
const divisions = [
  {
    id: "construction",
    name: "Construction & Interiors",
    icon: Layers,
    color: "cyan",
    tagline: "Building Strong. Designing Beautiful.",
    description:
      "From structural construction to complete interior works, we deliver high-quality residential, commercial, and industrial projects. Our expertise covers civil construction, renovations, and custom interior solutions — all under one roof.",
    link: "/construction",
    features: ["Residential Construction", "Commercial Construction", "Interior Works", "Renovation"],
    image: "/images/construction-division.jpg",
  },
  {
    id: "greenland",
    name: "GreenLand",
    icon: Sun,
    color: "cyan",
    tagline: "Innovative Tensile Shade Solutions",
    description:
      "Designing, supplying, and installing premium tensile and canopy shade structures. From car parking shades to walkway covers and custom tensile roofs, GreenLand delivers stylish, durable, and functional outdoor solutions.",
    link: "/greenland",
    features: ["Car Parking Shades", "Walkway Covers", "Outdoor Canopies", "Custom Tensile Roofs"],
    image: "/images/greenland-division.jpg",
  },
];

// --- NANOCERAMIC HIGHLIGHTS (Construction Division Product) ---
const nanoceramicHighlights = [
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
    desc: "Naturally resistant to termites, fungi, and algae, ensuring long-term structural integrity and hygiene.",
  },
  {
    icon: AwardIcon,
    title: "Long-Lasting Finish",
    desc: "Retains color, texture, and sheen far longer than conventional materials, reducing long-term upkeep costs.",
  },
];

// --- GREENLAND HIGHLIGHTS ---
const greenlandHighlights = [
  { icon: AwardIcon, text: "Accredited Fabricator of SERGE FERRARI" },
  { icon: Calendar, text: "Established 2020" },
  { icon: MapPin, text: "Kumbakonam, South India" },
  { icon: Truck, text: "Under 10 Year Warranty on Fabric" },
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
          setCounters((prev) => ({
            ...prev,
            [index]: current,
          }));
        }, 30);
      });
      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isVisible]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

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

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
              About Us
            </span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 sm:mt-3 animate-slide-up">
            Building Ideas.{" "}
            <span className="text-cyan-400">Creating Spaces.</span>
          </h1>
          <div className="w-14 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 sm:mt-4 animate-scale-x"></div>
          <p className="max-w-2xl mx-auto text-white/60 mt-3 sm:mt-6 text-sm sm:text-lg leading-relaxed px-2 animate-fade-in-delayed">
            From structural construction to innovative tensile architecture and refined interiors,
            Ruhan Groups brings multiple expertise together under one vision.
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

      {/* Main About Content */}
      <section
        className="relative py-10 sm:py-16 md:py-20 overflow-hidden"
        ref={sectionRef}
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        <div className="hidden md:block absolute top-20 right-0 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden md:block absolute bottom-20 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
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
          {/* About Ruhan Groups */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-cyan-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/20 animate-slide-up">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="text-cyan-300 text-[9px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px]">
                  Who We Are
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 animate-slide-up-delayed">
                One Group.{" "}
                <span className="block text-cyan-400">Multiple Expertise.</span>
              </h2>

              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent mt-2 sm:mt-4 animate-scale-x-delayed"></div>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-4 sm:mt-6 animate-fade-in-delayed-2">
                Ruhan Groups is a diversified organization delivering solutions across
                construction, interior development, and innovative tensile architecture.
                Our businesses work across different stages of creating spaces — from
                building strong structures to designing functional environments and
                delivering modern architectural solutions.
              </p>

              <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 animate-fade-in-delayed-3">
                With years of expertise and a focus on quality work, on-time delivery,
                and customer satisfaction, we have established ourselves as a reliable
                partner for residential, commercial, and industrial projects across the region.
              </p>

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
                        {stat.value.includes("+")
                          ? `${counters[index] || 0}+`
                          : stat.value}
                      </div>
                      <div className="text-[8px] sm:text-xs text-white/40 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative order-1 lg:order-2 animate-slide-up-delayed">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/images/interior.png"
                  alt="Ruhan Groups"
                  className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

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

          {/* --- OUR BUSINESSES SECTION --- */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                  Our Businesses
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
                Different Expertise. <span className="text-cyan-400">One Vision.</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {divisions.map((division, index) => {
                const Icon = division.icon;
                return (
                  <div
                    key={division.id}
                    className={`group relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(22,213,232,0.05)] hover:-translate-y-2 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300 flex-shrink-0`}
                        >
                          <Icon
                            size={24}
                            className={`sm:w-7 sm:h-7 text-cyan-400`}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {division.name}
                          </h3>
                          <p className="text-xs text-white/40 tracking-wider uppercase">
                            {division.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-white/60 text-sm sm:text-base leading-relaxed flex-1">
                        {division.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {division.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-white/60 border border-white/5`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={division.link}
                        className={`inline-flex items-center gap-1.5 text-cyan-400 hover:text-[#16D5E8] transition-all duration-300 group/link mt-4 text-sm font-medium`}
                      >
                        <span className="relative">
                          Explore {division.name}
                          <span className={`absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover/link:w-full transition-all duration-300`}></span>
                        </span>
                        <ArrowRight size={14} className="transition-all duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-700`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- NANOCERAMIC CEILING TILES (Construction Division Product) --- */}
          <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-white/10">
            <div className="text-center mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                  Granoceramics
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1.5">
                Nanoceramic <span className="text-cyan-400">Ceiling Tiles</span>
              </h2>
              <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mt-2">
                Developed using advanced nanoceramic particles — a groundbreaking innovation
                in ceiling technology for modern construction and architectural projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {nanoceramicHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`group p-4 sm:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-1 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${1.2 + idx * 0.08}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 transition-all duration-300">
                        <Icon size={16} className="sm:w-5 sm:h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm sm:text-base font-semibold">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/businesses/construction#nanoceramic"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-[#16D5E8] transition-all duration-300 group text-sm font-medium"
              >
                <span className="relative">
                  Learn More About Nanoceramic Tiles
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* --- GREENLAND HIGHLIGHT - CYAN THEME --- */}
          <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Column - Cyan Theme */}
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] bg-gradient-to-br from-cyan-900/40 to-blue-900/30 overflow-hidden">
                  {/* Actual Image */}
                  <img
                    src="/images/about.webp"
                    alt="GreenLand Tensile Shade Solutions"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full bg-gradient-to-br from-cyan-900/40 to-blue-900/30 flex flex-col items-center justify-center p-6';
                        fallback.innerHTML = `
                          <div class="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <p class="text-white/90 text-xl font-bold tracking-wider">GREENLAND</p>
                          <p class="text-cyan-300 text-xs tracking-[3px] uppercase">Tensile Shade Solutions</p>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Logo Badge - Top Left - Cyan Theme */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-400/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Sun size={16} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold tracking-wider">GREENLAND</p>
                        <p className="text-cyan-300 text-[8px] tracking-[2px]">Tensile Shade Solutions</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Overlay - Bottom - Cyan Theme */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <p className="text-white text-[10px] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        Est. 2020
                      </p>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <p className="text-white text-[10px] font-semibold flex items-center gap-1.5">
                        <AwardIcon size={10} className="text-cyan-400" />
                        SERGE FERRARI
                      </p>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <p className="text-white text-[10px] font-semibold flex items-center gap-1.5">
                        <Truck size={10} className="text-cyan-400" />
                        10 Year Warranty
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column - Cyan Theme */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span className="text-cyan-300 text-[9px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px]">
                    Our Division
                  </span>
                  <span className="text-cyan-500/30 text-[8px] font-light tracking-[4px]">|</span>
                  <span className="text-cyan-400/50 text-[8px] font-light tracking-[3px] uppercase">
                    Tensile Spirit
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  GreenLand <span className="text-cyan-400">Tensile Shades</span>
                </h2>
                
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2 sm:mt-3" />
                
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3">
                  Started in 2020 in South India, GreenLand is a company that provides
                  high-quality tensile and canopy shade structures. We design, supply,
                  and install different types of shades such as car parking shades,
                  walkway covers, outdoor canopies, and custom tensile roofs.
                </p>

                <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-2">
                  Our aim is to give our customers strong, stylish, and long-lasting
                  shade solutions that protect against sun and rain while improving
                  the look of their space.
                </p>

                {/* Cyan Theme Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {greenlandHighlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300/80 text-[10px] sm:text-xs"
                      >
                        <Icon size={12} className="text-cyan-400 flex-shrink-0" />
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Cyan Theme Button */}
                <div className="flex flex-wrap items-center gap-4 mt-5">
                  <Link
                    href="/greenland"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-lg transition-all duration-300 group text-sm font-medium shadow-lg shadow-cyan-500/20"
                  >
                    <span>Explore GreenLand Solutions</span>
                    <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                  </Link>
                  <span className="text-white/20 text-xs tracking-[3px]">| TENSILE SPIRIT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-white/10">
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
                    style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
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

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 lg:pt-12 border-t border-white/10">
            <div
              className={`group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1.0s" }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                <Target size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-3 sm:mt-4 group-hover:text-cyan-400 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-white/60 text-sm sm:text-base mt-1.5 sm:mt-2 leading-relaxed">
                To deliver exceptional construction and architectural solutions that combine
                quality, innovation, and sustainability, creating lasting value for our
                clients and communities through our diverse expertise.
              </p>
            </div>

            <div
              className={`group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1.1s" }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                <Eye size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-3 sm:mt-4 group-hover:text-cyan-400 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-white/60 text-sm sm:text-base mt-1.5 sm:mt-2 leading-relaxed">
                To be the most trusted and innovative construction group, setting new
                standards of excellence in the industry through quality craftsmanship,
                architectural innovation, and complete client satisfaction.
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