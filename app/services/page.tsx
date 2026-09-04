"use client";

import {
  ArrowRight,
  Building2,
  Sun,
  Users,
  Award,
  Clock,
  Shield,
  CheckCircle,
  Home,
  Paintbrush,
  Sofa,
  Building,
  Phone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { mediaUrl } from "@/lib/media";

/* =========================================================
   BUSINESS DIVISIONS
========================================================= */

const divisions = [
  {
    id: "construction",
    name: "Construction",
    subtitle: "Construction & Interiors",
    icon: Building2,
    image: mediaUrl("/images/villa.png"),
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
    subtitle: "Tensile Shade Solutions",
    icon: Sun,
    image: mediaUrl("/images/product2.png"),
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

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChoose = [
  {
    icon: Shield,
    title: "Experienced Team",
    description: "Skilled professionals with industry expertise.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "Reliable materials selected for lasting results.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Efficient execution without compromising quality.",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "Long-term relationships built through trust.",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function BusinessesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <Header />

      <main className="overflow-hidden text-[#001a1f]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative bg-gradient-to-br from-cyan-400/35 via-cyan-300/25 to-blue-400/30">

          {/* subtle architectural grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(22,213,232,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(22,213,232,1) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />

          {/* Animated Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#16D5E8]/15 animate-float hidden md:block"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 18 + 12}s`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* top spacing */}
            <div className="pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10">

              <div className="grid lg:grid-cols-[1fr_0.75fr] gap-8 lg:gap-16 items-end">

                {/* Heading */}
                <div>
                  <div className="flex items-center gap-2 mb-3 animate-fade-in">
                    <span className="w-8 h-px bg-cyan-600 animate-scale-x" />
                    <span className="text-cyan-700 text-[8px] sm:text-[9px] uppercase tracking-[3px] font-bold">
                      Our Businesses
                    </span>
                  </div>

                  <h1 className="text-[42px] sm:text-[55px] md:text-[65px] lg:text-[76px] font-black leading-[0.86] tracking-[-4px] animate-slide-up">
                    DIFFERENT
                    <span className="block text-cyan-600 animate-text-glow">
                      EXPERTISE.
                    </span>
                    <span className="block">
                      ONE VISION.
                    </span>
                  </h1>

                  <div className="w-14 h-1 bg-cyan-600 mt-5 animate-scale-x" />
                </div>

                {/* Intro */}
                <div className="lg:pb-1 animate-fade-in-delayed">
                  <p className="text-[#001a1f]/55 text-sm sm:text-base leading-7 max-w-lg">
                    Ruhan Groups operates through specialized businesses
                    united by one commitment — creating reliable,
                    functional and beautifully designed spaces.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {[
                      { text: "Quality Driven" },
                      { text: "Client Focused" },
                      { text: "Result Oriented" },
                    ].map((item, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center gap-1.5 text-[8px] uppercase tracking-[1.5px] text-cyan-700 font-semibold transition-all duration-500 hover:scale-105 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <CheckCircle size={11} />
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            DIVISIONS
        ===================================================== */}

        <section
          ref={sectionRef}
          className="relative bg-gradient-to-br from-cyan-400/35 via-cyan-300/25 to-blue-400/30 py-9 sm:py-11 lg:py-14"
        >

          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(22,213,232,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(22,213,232,1) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Animated Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#16D5E8]/12 animate-float hidden md:block"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 18 + 12}s`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
              <div className="animate-fade-in">
                <span className="text-cyan-700 text-[8px] uppercase tracking-[3px] font-bold">
                  Our Divisions
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-[-2px] mt-1 animate-slide-up">
                  TWO BUSINESSES.
                  <span className="text-cyan-600 animate-text-glow">
                    {" "}ONE STANDARD.
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-[#001a1f]/45 text-xs leading-5 animate-fade-in-delayed">
                Specialized expertise working together to deliver complete
                solutions.
              </p>
            </div>

            {/* Division panels */}
            <div className="space-y-3">
              {divisions.map((division, index) => {
                const Icon = division.icon;
                return (
                  <div
                    key={division.id}
                    className={`group relative overflow-hidden bg-white/30 backdrop-blur-sm border border-white/50 transition-all duration-700 hover:bg-white/45 hover:border-cyan-600/30 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(6,182,212,0.05)] ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      transitionDelay: `${index * 120}ms`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                    <div
                      className={`grid lg:grid-cols-[1fr_0.75fr] ${
                        index % 2 === 1
                          ? "lg:grid-cols-[0.75fr_1fr]"
                          : ""
                      }`}
                    >
                      {/* IMAGE */}
                      <div
                        className={`relative h-[230px] sm:h-[280px] lg:h-[310px] overflow-hidden ${
                          index % 2 === 1
                            ? "lg:order-2"
                            : ""
                        }`}
                      >
                        <Image
                          src={division.image}
                          alt={division.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#001a1f]/65 via-[#001a1f]/10 to-transparent" />

                        {/* image label */}
                        <div className="absolute left-5 bottom-5">
                          <div className="flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-2 transition-all duration-300 group-hover:scale-105">
                            <Icon
                              size={15}
                              className="text-cyan-600"
                            />
                            <div>
                              <p className="text-[#001a1f] text-[10px] font-bold uppercase tracking-wide">
                                {division.name}
                              </p>
                              <p className="text-cyan-600 text-[7px] uppercase tracking-[2px]">
                                {division.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div
                        className={`p-5 sm:p-7 lg:p-8 flex flex-col justify-center ${
                          index % 2 === 1
                            ? "lg:order-1"
                            : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-cyan-600 text-[7px] uppercase tracking-[3px] font-bold">
                              Specialized Solutions
                            </span>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-1.5px] mt-1 group-hover:text-cyan-700 transition-colors duration-300">
                              {division.name}
                            </h3>
                          </div>
                          <div className="hidden sm:flex w-10 h-10 bg-cyan-600/10 border border-cyan-600/15 items-center justify-center text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white group-hover:rotate-6">
                            <Icon size={18} />
                          </div>
                        </div>

                        <p className="text-[#001a1f]/55 text-xs sm:text-sm leading-6 mt-4 max-w-xl">
                          {division.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4">
                          {division.features.map((feature, idx) => (
                            <div
                              key={feature}
                              className={`flex items-center gap-2 transition-all duration-500 hover:translate-x-1 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                              }`}
                              style={{ transitionDelay: `${0.6 + index * 0.1 + idx * 0.05}s` }}
                            >
                              <span className="w-4 h-4 bg-cyan-600/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-cyan-600/20">
                                <CheckCircle
                                  size={9}
                                  className="text-cyan-600"
                                />
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-[#001a1f]/55">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link
                          href={division.link}
                          className="inline-flex items-center gap-2 self-start mt-5 text-cyan-600 hover:text-cyan-700 text-[10px] uppercase tracking-[1.5px] font-bold group/link transition-all duration-300 hover:gap-3"
                        >
                          Explore {division.name}
                          <ArrowRight
                            size={13}
                            className="group-hover/link:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>

                    {/* bottom accent */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-600 group-hover:w-full transition-all duration-700" />
                  </div>
                );
              })}
            </div>

          </div>

        </section>

        {/* =====================================================
            WHY CHOOSE
        ===================================================== */}

        <section className="bg-white py-9 sm:py-11 lg:py-13">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-6 lg:gap-10 items-start">
              {/* Heading */}
              <div className="animate-fade-in">
                <span className="text-cyan-600 text-[8px] uppercase tracking-[3px] font-bold">
                  Why Ruhan Groups
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.9] tracking-[-2px] mt-2 animate-slide-up">
                  BUILT ON
                  <span className="block text-cyan-600 animate-text-glow">TRUST.</span>
                </h2>
                <p className="text-[#001a1f]/70 text-xs leading-5 max-w-sm mt-3 animate-fade-in-delayed">
                  Our approach combines experienced people, dependable
                  materials and a commitment to delivering what we promise.
                </p>
              </div>

              {/* Advantages - Instant Hover */}
              <div className="grid sm:grid-cols-2 gap-2.5">
                {whyChoose.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`group relative p-4 sm:p-5 bg-[#f4fafb] border border-[#001a1f]/[0.06] hover:bg-cyan-800 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ 
                        transitionDelay: `${0.8 + index * 0.1}s`,
                        transition: 'none'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-cyan-600/10 group-hover:bg-cyan-500 text-cyan-600 group-hover:text-[#001a1f] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6">
                          <Icon size={16} />
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold group-hover:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#001a1f]/80 group-hover:text-white/80 text-[9px] sm:text-[10px] leading-5 mt-3">
                        {item.description}
                      </p>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="bg-cyan-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-6 sm:py-7 text-center transition-all duration-500 hover:bg-white/5 ${
                    index !== 0
                      ? "border-l border-white/10"
                      : ""
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${1.0 + index * 0.1}s` }}
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-300 animate-counter">
                    {stat.value}
                  </p>
                  <p className="text-[7px] sm:text-[8px] uppercase tracking-[2px] text-white/80 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-[#edf8fa] py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`relative overflow-hidden bg-white border border-cyan-600/10 transition-all duration-700 hover:shadow-[0_0_40px_rgba(6,182,212,0.05)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* decorative shape */}
              <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow" />

              <div className="relative p-6 sm:p-8 lg:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={14}
                      className="text-cyan-600 animate-pulse-slow"
                    />
                    <span className="text-cyan-600 text-[8px] uppercase tracking-[3px] font-bold">
                      Let's Work Together
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2 animate-slide-up">
                    HAVE A PROJECT
                    <span className="text-cyan-600 animate-text-glow">
                      {" "}IN MIND?
                    </span>
                  </h2>
                  <p className="text-[#001a1f]/40 text-xs sm:text-sm mt-1.5 animate-fade-in-delayed">
                    Let's build something exceptional together.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-all group whitespace-nowrap hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-600/20"
                >
                  Contact Us
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform group-hover:rotate-[-10deg]"
                  />
                </Link>
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
        @keyframes slide-up {
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
        .animate-float { animation: float linear infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-counter { animation: counter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; display: inline-block; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

        @media (max-width: 640px) {
          .animate-float { animation-duration: 18s !important; }
        }
      `}</style>
    </>
  );
}