"use client";

import { useEffect, useRef, useState } from "react";
import { mediaUrl } from "@/lib/media";
import {
  Users,
  Building2,
  Award,
  Clock,
  Shield,
  HardHat,
  Zap,
  ArrowRight,
  TrendingUp,
  Target,
  Eye,
  Layers,
  Sun,
  Calendar,
  Award as AwardIcon,
  Flame,
  Droplets,
  Wind,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Awards Won",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
];

const features = [
  {
    icon: Shield,
    text: "Quality Construction",
  },
  {
    icon: HardHat,
    text: "Expert Team",
  },
  {
    icon: Clock,
    text: "On-Time Delivery",
  },
  {
    icon: Shield,
    text: "Safety First",
  },
  {
    icon: TrendingUp,
    text: "Competitive Pricing",
  },
  {
    icon: Zap,
    text: "24/7 Support",
  },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We never compromise on quality, using only the best materials and craftsmanship.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Our clients are at the heart of everything we do, ensuring complete satisfaction.",
  },
  {
    icon: Shield,
    title: "Safety & Integrity",
    description:
      "We maintain the highest safety standards and operate with complete integrity.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace cutting-edge technology and innovative construction methods.",
  },
];

const divisions = [
  {
    id: "construction",
    name: "Construction & Interiors",
    icon: Layers,
    tagline: "Building Strong. Designing Beautiful.",
    description:
      "From structural construction to complete interior works, we deliver high-quality residential, commercial, and industrial projects. Our expertise covers civil construction, renovations, and custom interior solutions — all under one roof.",
    link: "/construction",
    features: [
      "Residential Construction",
      "Commercial Construction",
      "Interior Works",
      "Renovation",
    ],
    image: mediaUrl("/images/cons5.png"),
  },
  {
    id: "greenland",
    name: "GreenLand",
    icon: Sun,
    tagline: "Innovative Tensile Shade Solutions",
    description:
      "Designing, supplying, and installing premium tensile and canopy shade structures. From car parking shades to walkway covers and custom tensile roofs, GreenLand delivers stylish, durable, and functional outdoor solutions.",
    link: "/greenland",
    features: [
      "Car Parking Shades",
      "Walkway Covers",
      "Outdoor Canopies",
      "Custom Tensile Roofs",
    ],
    image: mediaUrl("/images/about.webp"),
  },
];

const nanoceramicHighlights = [
  {
    icon: Droplets,
    title: "Zero Moisture Absorption",
    desc: "Nano-coating protection repels dust, moisture, and stains.",
  },
  {
    icon: Wind,
    title: "Acoustic Insulation",
    desc: "Nano-scale ceramic particles help minimize echo and noise.",
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    desc: "Helps block external heat and reduce cooling requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Antibacterial",
    desc: "Resists bacteria, fungi, and dust accumulation.",
  },
  {
    icon: Flame,
    title: "Termite Proof",
    desc: "Resistant to termites, fungi, and algae.",
  },
  {
    icon: AwardIcon,
    title: "Long-Lasting Finish",
    desc: "Maintains color, texture, and finish for longer.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ---------------------------------------------------------
     Intersection Observer
  --------------------------------------------------------- */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.08,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* ---------------------------------------------------------
     Counter Animation
  --------------------------------------------------------- */

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      let current = 0;
      const increment = Math.max(1, Math.ceil(stat.value / 35));

      const interval = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }

        setCounters((prev) => ({
          ...prev,
          [index]: current,
        }));
      }, 30);

      return interval;
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isVisible]);

  return (
    <>
      <Header />

      <main ref={sectionRef} className="relative overflow-hidden">
        {/* =====================================================
            GLOBAL BACKGROUND
        ===================================================== */}

        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#EDE4D5] via-[#F8F6F1] to-[#DCCBB5]" />

        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/10 via-transparent to-white/10" />

        <div
          className="fixed inset-0 -z-10 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(169,148,121,.45) 1px, transparent 1px),
              linear-gradient(90deg, rgba(169,148,121,.45) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Animated Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#A99479]/15 animate-float hidden md:block"
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

        <section className="relative px-3 sm:px-6 pt-6 sm:pt-12 lg:pt-16 pb-5 sm:pb-12">
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            <div className="relative min-h-[390px] sm:min-h-[450px] lg:min-h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E2D8C9] bg-white/55 backdrop-blur-sm shadow-[0_25px_80px_rgba(63,56,47,0.10)]">
              {/* Background glow */}
              <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#DCCBB5]/25 blur-3xl animate-pulse-slow" />

              <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#B8A58D]/15 blur-3xl animate-pulse-slow-delayed" />

              {/* Hero image */}
              <div className="absolute right-0 top-0 w-full lg:w-[49%] h-[230px] sm:h-[270px] lg:h-full">
                <img
                  src={mediaUrl("/images/cons8.png")}
                  alt="Ruhan Groups"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#F8F6F1]/95 via-[#F8F6F1]/25 to-transparent" />

                <div className="absolute inset-0 bg-[#3F382F]/5" />
              </div>

              {/* Hero content */}
              <div className="relative z-10 w-full lg:w-[58%] min-h-[500px] lg:min-h-[500px] flex items-end lg:items-center p-5 sm:p-8 md:p-10 lg:p-14">
                <div className="max-w-2xl mt-[190px] sm:mt-[215px] lg:mt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-[#A99479]/20 backdrop-blur-md animate-fade-in-down">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A99479] animate-pulse" />

                    <span className="text-[#927E64] text-[9px] sm:text-[10px] font-semibold uppercase tracking-[3px]">
                      About Ruhan Groups
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3F382F] leading-[0.95] tracking-[-2px] mt-4 animate-slide-up">
                    Building Ideas.
                    <span className="block text-[#A99479] animate-text-glow">
                      Creating Spaces.
                    </span>
                  </h1>

                  <div className="w-16 h-1 bg-gradient-to-r from-[#A99479] to-transparent mt-4 animate-scale-x" />

                  <p className="max-w-xl text-[#3F382F]/80 text-sm sm:text-base leading-relaxed mt-4 animate-fade-in-delayed">
                    From structural construction to innovative tensile
                    architecture and refined interiors, Ruhan Groups brings
                    multiple expertise together under one vision.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-5 animate-fade-in-delayed-2">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-[#A99479] hover:bg-[#927E64] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium shadow-lg shadow-[#A99479]/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[#A99479]/40"
                    >
                      Discover Our Story

                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-10deg]"
                      />
                    </Link>

                    <span className="text-[#3F382F]/50 text-[9px] uppercase tracking-[3px]">
                      Est. Excellence
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating year */}
              <div className="absolute hidden sm:flex bottom-5 right-5 lg:right-8 lg:bottom-8 w-20 h-20 rounded-full bg-white/85 backdrop-blur-md border border-[#E2D8C9] items-center justify-center shadow-xl animate-float-card">
                <div className="text-center">
                  <p className="text-[#A99479] text-lg font-bold">
                    10+
                  </p>

                  <p className="text-[#3F382F]/65 text-[7px] uppercase tracking-wider">
                    Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT + STATS
        ===================================================== */}

        <section className="px-3 sm:px-6 pb-5 sm:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-5 lg:gap-8">
              {/* Small visual */}
              <div className="relative min-h-[280px] lg:min-h-[400px] rounded-[24px] overflow-hidden border border-[#E2D8C9] bg-white/55 backdrop-blur-md animate-slide-up">
                <img
                  src={mediaUrl("/images/luxury.png")}
                  alt="Ruhan Groups"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3F382F]/80 via-[#3F382F]/10 to-transparent" />

                <div className="absolute left-5 right-5 bottom-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-px bg-[#B8A58D]" />

                    <span className="text-[#A99479] text-[9px] uppercase tracking-[3px]">
                      Who We Are
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white animate-text-glow">
                    One Group.
                    <span className="block text-[#A99479]">
                      Multiple Expertise.
                    </span>
                  </h2>
                </div>
              </div>

              {/* About content */}
              <div className="rounded-[24px] border border-[#E2D8C9] bg-white/55 backdrop-blur-md p-5 sm:p-7 lg:p-9 animate-slide-up-delayed">
                <div>
                  <span className="text-[#927E64] text-[9px] uppercase tracking-[3px] font-semibold">
                    Our Story
                  </span>

                  <div className="w-10 h-0.5 bg-[#A99479] mt-2 animate-scale-x" />
                </div>

                <p className="text-[#3F382F]/85 text-sm sm:text-base leading-7 mt-5 animate-fade-in-delayed">
                  Ruhan Groups is a diversified organization delivering
                  solutions across construction, interior development, and
                  innovative tensile architecture. Our businesses work across
                  different stages of creating spaces — from building strong
                  structures to designing functional environments and
                  delivering modern architectural solutions.
                </p>

                <p className="text-[#3F382F]/70 text-sm leading-7 mt-3 animate-fade-in-delayed-2">
                  With years of expertise and a focus on quality work,
                  on-time delivery, and customer satisfaction, we have
                  established ourselves as a reliable partner for residential,
                  commercial, and industrial projects.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-2 mt-5">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2 py-1.5 transition-all duration-500 hover:translate-x-1 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${0.4 + index * 0.08}s` }}
                      >
                        <Icon
                          size={14}
                          className="text-[#A99479] flex-shrink-0 animate-pulse-slow"
                        />

                        <span className="text-[10px] sm:text-xs text-[#3F382F]/80">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-[#E2D8C9] bg-white/60 backdrop-blur-md">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className={`relative p-4 sm:p-5 flex items-center gap-3 transition-all duration-500 hover:bg-white/55 hover:scale-[1.02] ${
                      index !== 0
                        ? "border-t lg:border-t-0 lg:border-l border-[#E2D8C9]"
                        : ""
                    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#A99479]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#A99479]/20 group-hover:scale-110">
                      <Icon
                        size={17}
                        className="text-[#A99479]"
                      />
                    </div>

                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-[#3F382F] leading-none animate-counter">
                        {counters[index] || 0}
                        {stat.suffix}
                      </p>

                      <p className="text-[8px] sm:text-[9px] text-[#3F382F]/60 uppercase tracking-wider mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR BUSINESSES
        ===================================================== */}

        <section className="px-3 sm:px-6 pb-5 sm:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
              <div className="animate-fade-in-down">
                <span className="text-[#927E64] text-[9px] uppercase tracking-[3px] font-semibold">
                  Our Businesses
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3F382F] mt-1 animate-slide-up">
                  Different Expertise.
                  <span className="text-[#A99479] animate-text-glow">
                    {" "}One Vision.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-[#3F382F]/60 text-xs sm:text-sm leading-relaxed animate-fade-in-delayed">
                Multiple specialized divisions working together to create
                stronger, smarter and more beautiful spaces.
              </p>
            </div>

            <div className="space-y-4">
              {divisions.map((division, index) => {
                const Icon = division.icon;

                return (
                  <div
                    key={division.id}
                    className={`group relative overflow-hidden rounded-[24px] border border-[#E2D8C9] bg-white/55 backdrop-blur-md transition-all duration-700 hover:shadow-[0_0_40px_rgba(63,56,47,0.08)] ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${0.8 + index * 0.2}s` }}
                  >
                    <div
                      className={`grid lg:grid-cols-[0.85fr_1.15fr] ${
                        index % 2 === 1
                          ? "lg:grid-cols-[1.15fr_0.85fr]"
                          : ""
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`relative h-[220px] sm:h-[280px] lg:h-[320px] overflow-hidden ${
                          index % 2 === 1
                            ? "lg:order-2"
                            : ""
                        }`}
                      >
                        <img
                          src={division.image}
                          alt={division.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#3F382F]/50 to-transparent" />

                        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <Icon
                            size={19}
                            className="text-[#A99479]"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`p-5 sm:p-7 lg:p-9 flex flex-col justify-center ${
                          index % 2 === 1
                            ? "lg:order-1"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#A99479] text-[9px] uppercase tracking-[3px] font-semibold">
                            {division.tagline}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#3F382F] mt-2 group-hover:text-[#927E64] transition-colors duration-300">
                          {division.name}
                        </h3>

                        <div className="w-12 h-0.5 bg-[#A99479] mt-3 animate-scale-x" />

                        <p className="text-[#3F382F]/75 text-xs sm:text-sm leading-7 mt-4 max-w-2xl">
                          {division.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {division.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#A99479]/10 border border-[#A99479]/15 text-[9px] text-[#3F382F]/75 transition-all duration-300 hover:bg-[#A99479]/20 hover:scale-105"
                            >
                              <CheckCircle2
                                size={10}
                                className="text-[#A99479]"
                              />

                              {feature}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={division.link}
                          className="inline-flex items-center gap-2 text-[#A99479] text-xs sm:text-sm font-medium mt-5 group/link hover:text-[#927E64] transition-colors duration-300"
                        >
                          Explore {division.name}

                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover/link:translate-x-1 group-hover/link:rotate-[-10deg]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            NANOCERAMIC
        ===================================================== */}

        <section className="px-3 sm:px-6 pb-5 sm:pb-12">
          <div className="max-w-7xl mx-auto rounded-[24px] border border-[#E2D8C9] bg-white/55 backdrop-blur-md overflow-hidden">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              {/* Heading */}
              <div className="p-5 sm:p-7 lg:p-9 bg-[#A99479]/10 border-b lg:border-b-0 lg:border-r border-[#E2D8C9]">
                <span className="text-[#927E64] text-[9px] uppercase tracking-[3px] font-semibold animate-fade-in-down">
                  Granoceramics
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3F382F] mt-2 animate-slide-up">
                  Nanoceramic
                  <span className="block text-[#A99479] animate-text-glow">
                    Ceiling Tiles
                  </span>
                </h2>

                <div className="w-12 h-0.5 bg-[#A99479] mt-3 animate-scale-x" />

                <p className="text-[#3F382F]/70 text-xs sm:text-sm leading-6 mt-4 animate-fade-in-delayed">
                  Developed using advanced nanoceramic particles — a
                  groundbreaking innovation in ceiling technology for modern
                  construction and architectural projects.
                </p>

                <Link
                  href="/businesses/construction#nanoceramic"
                  className="inline-flex items-center gap-2 text-[#A99479] text-xs sm:text-sm font-medium mt-5 group hover:text-[#927E64] transition-colors duration-300"
                >
                  Learn More

                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-10deg]"
                  />
                </Link>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {nanoceramicHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className={`p-4 sm:p-5 transition-all duration-500 hover:bg-white/60 hover:scale-[1.02] ${
                        index % 3 !== 0
                          ? "lg:border-l"
                          : ""
                      } ${index >= 3 ? "border-t" : ""} border-[#E2D8C9] ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${1.0 + index * 0.08}s` }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#A99479]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#A99479]/20 group-hover:scale-110 group-hover:rotate-6">
                        <Icon
                          size={15}
                          className="text-[#A99479]"
                        />
                      </div>

                      <h4 className="text-xs sm:text-sm font-semibold text-[#3F382F] mt-3 group-hover:text-[#927E64] transition-colors duration-300">
                        {item.title}
                      </h4>

                      <p className="text-[9px] sm:text-[10px] text-[#3F382F]/60 leading-5 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CORE VALUES
        ===================================================== */}

        <section className="px-3 sm:px-6 pb-5 sm:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-5">
              <div className="animate-fade-in-down">
                <span className="text-[#927E64] text-[9px] uppercase tracking-[3px] font-semibold">
                  Our Core Values
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3F382F] mt-1 animate-slide-up">
                  What Drives{" "}
                  <span className="text-[#A99479] animate-text-glow">
                    Us.
                  </span>
                </h2>
              </div>

              <Sparkles
                size={25}
                className="text-[#A99479] hidden sm:block animate-pulse-slow"
              />
            </div>

            <div className="relative">
              {/* Desktop connecting line */}
              <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-px bg-[#A99479]/20" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={index}
                      className={`relative rounded-2xl border border-[#E2D8C9] bg-white/55 backdrop-blur-md p-4 sm:p-5 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(63,56,47,0.08)] hover:border-[#A99479]/30 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${1.2 + index * 0.1}s` }}
                    >
                      <div className="relative z-10 w-14 h-14 rounded-full bg-white/80 border border-[#A99479]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#A99479]/10 group-hover:border-[#A99479]/40 group-hover:scale-110 group-hover:rotate-6">
                        <Icon
                          size={20}
                          className="text-[#A99479]"
                        />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#3F382F] mt-4 group-hover:text-[#927E64] transition-colors duration-300">
                        {value.title}
                      </h3>

                      <p className="text-[#3F382F]/65 text-[10px] sm:text-xs leading-6 mt-1.5">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MISSION / VISION
        ===================================================== */}

        <section className="px-3 sm:px-6 pb-5 sm:pb-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-3">
            {/* Mission */}
            <div
              className={`relative overflow-hidden rounded-[24px] bg-[#A99479] p-6 sm:p-8 lg:p-9 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(63,56,47,0.16)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1.4s" }}
            >
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#927E64]/15 blur-3xl animate-pulse-slow" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <Target
                    size={20}
                    className="text-[#A99479]"
                  />
                </div>

                <span className="block text-white/75 text-[9px] uppercase tracking-[3px] mt-6">
                  Our Mission
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 animate-text-glow">
                  Build with purpose.
                </h3>

                <p className="text-white/75 text-xs sm:text-sm leading-7 mt-3">
                  To deliver exceptional construction and architectural
                  solutions that combine quality, innovation, and
                  sustainability, creating lasting value for our clients and
                  communities through our diverse expertise.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`relative overflow-hidden rounded-[24px] bg-white/65 backdrop-blur-md border border-[#E2D8C9] p-6 sm:p-8 lg:p-9 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(63,56,47,0.08)] hover:border-[#A99479]/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1.5s" }}
            >
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#B8A58D]/15 blur-3xl animate-pulse-slow-delayed" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-[#A99479]/10 border border-[#A99479]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <Eye
                    size={20}
                    className="text-[#A99479]"
                  />
                </div>

                <span className="block text-[#927E64] text-[9px] uppercase tracking-[3px] mt-6">
                  Our Vision
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#3F382F] mt-2 group-hover:text-[#927E64] transition-colors duration-300">
                  Shape what comes next.
                </h3>

                <p className="text-[#3F382F]/65 text-xs sm:text-sm leading-7 mt-3">
                  To be the most trusted and innovative construction group,
                  setting new standards of excellence through quality
                  craftsmanship, architectural innovation, and complete client
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="px-3 sm:px-6 pb-5 sm:pb-12">
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#927E64] to-[#A99479] p-6 sm:p-8 lg:p-10 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(63,56,47,0.16)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1.6s" }}
            >
              <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <span className="text-white/60 text-[9px] uppercase tracking-[3px] animate-fade-in-down">
                    Let's Build Something Exceptional
                  </span>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1.5 animate-slide-up">
                    Have an idea?
                    <span className="text-white/70 animate-text-glow">
                      {" "}Let's create it.
                    </span>
                  </h2>

                  <p className="text-white/60 text-xs sm:text-sm mt-2 max-w-xl animate-fade-in-delayed">
                    From construction and interiors to innovative architectural
                    solutions, our team is ready to bring your vision to life.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex self-start sm:self-center items-center gap-2 bg-white text-[#927E64] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold shadow-xl transition-all duration-300 hover:bg-[#3F382F] hover:text-white hover:-translate-y-1 hover:shadow-2xl group whitespace-nowrap"
                >
                  Get a Free Quote

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-10deg]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed-2 {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-12px) translateX(6px);
          }
          50% {
            transform: translateY(-24px) translateX(-6px);
          }
          75% {
            transform: translateY(-12px) translateX(6px);
          }
        }

        @keyframes float-card {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
          }
          50% {
            text-shadow: 0 0 40px rgba(6, 182, 212, 0.25);
          }
        }

        @keyframes counter {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          60% {
            transform: scale(1.1) translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in-delayed-2 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.4s forwards;
          transform-origin: left;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-card {
          animation: float-card 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        .animate-counter {
          animation: counter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          display: inline-block;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 18s !important;
          }

          /* Compact mobile cards for better vertical space usage */
          main .rounded-2xl {
            border-radius: 14px;
          }

          main .rounded-[24px] {
            border-radius: 18px;
          }

          /* Extra compact mobile spacing */
          main section {
            padding-bottom: 1.25rem;
          }

          main section:first-of-type {
            padding-top: 1.5rem;
          }

          main .max-w-7xl {
            width: 100%;
          }

          main .space-y-4 {
            gap: 0.65rem;
          }

          main .grid.lg\\:grid-cols-2 {
            gap: 0.65rem;
          }

          /* Compact hero */
          main .min-h-\\[390px\\] {
            min-height: 340px;
          }

          main .min-h-\\[500px\\] {
            min-height: 390px;
          }

          main .mt-\\[190px\\] {
            margin-top: 155px;
          }

          /* Compact mobile content cards */
          main .p-5 {
            padding: 0.8rem;
          }

          main .p-6 {
            padding: 0.9rem;
          }

          main .mt-5 {
            margin-top: 0.7rem;
          }

          main .mt-4 {
            margin-top: 0.6rem;
          }

          main .mt-3 {
            margin-top: 0.5rem;
          }

          main .gap-3 {
            gap: 0.55rem;
          }

          /* Core value cards */
          main .grid.sm\:grid-cols-2.lg\:grid-cols-4 > div {
            padding: 0.75rem;
          }

          main .grid.sm\:grid-cols-2.lg\:grid-cols-4 > div > div:first-child {
            width: 2.5rem;
            height: 2.5rem;
          }

          main .grid.sm\:grid-cols-2.lg\:grid-cols-4 > div > div:first-child svg {
            width: 1rem;
            height: 1rem;
          }

          /* Nanoceramic feature cards */
          main .grid.sm\:grid-cols-2.lg\:grid-cols-3 > div {
            padding: 0.7rem;
          }

          main .grid.sm\:grid-cols-2.lg\:grid-cols-3 > div > div:first-child {
            width: 1.9rem;
            height: 1.9rem;
          }

          main .grid.sm\:grid-cols-2.lg\:grid-cols-3 > div > div:first-child svg {
            width: 0.8rem;
            height: 0.8rem;
          }

          /* Stats cards */
          main .grid.grid-cols-2.lg\:grid-cols-4 > div {
            padding: 0.7rem;
            gap: 0.55rem;
          }

          main .grid.grid-cols-2.lg\:grid-cols-4 > div > div:first-child {
            width: 2rem;
            height: 2rem;
            border-radius: 0.65rem;
          }

          main .grid.grid-cols-2.lg\:grid-cols-4 > div > div:first-child svg {
            width: 0.85rem;
            height: 0.85rem;
          }

          /* Mission / Vision icon blocks */
          main .grid.lg\:grid-cols-2 > div > div.relative.z-10 > div:first-child {
            width: 2.25rem;
            height: 2.25rem;
          }

          main .grid.lg\:grid-cols-2 > div > div.relative.z-10 > div:first-child svg {
            width: 1rem;
            height: 1rem;
          }

          /* Business division icon badge */
          main .space-y-4 > div .relative.h-\\[220px\\] { height: 170px; }\n\n          main .space-y-4 > div .absolute.top-4.left-4 {
            width: 2.1rem;
            height: 2.1rem;
            top: 0.65rem;
            left: 0.65rem;
            border-radius: 0.65rem;
          }

          main .space-y-4 > div .absolute.top-4.left-4 svg {
            width: 0.9rem;
            height: 0.9rem;
          }

          /* Compact mission / vision on phones */
          main .grid.lg\\:grid-cols-2 > div {
            padding: 0.9rem;
          }

          main .grid.lg\\:grid-cols-2 > div .mt-6 {
            margin-top: 0.75rem;
          }

          /* Compact CTA */
          main .bg-gradient-to-r.from-\\[\\#927E64\\] {
            padding: 0.9rem;
          }

          /* Keep mobile typography readable but compact */
          main h2.text-2xl {
            line-height: 1.05;
          }

          main h3.text-2xl {
            line-height: 1.1;
          }
        }
      `}</style>
    </>
  );
}