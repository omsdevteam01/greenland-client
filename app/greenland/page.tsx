"use client";

import {
  ArrowRight,
  Shield,
  Sun,
  Droplets,
  Zap,
  X,
  Award,
  MapPin,
  Truck,
  CheckCircle,
  Building2,
  Home,
  Users,
  Calendar,
  Phone,
  Wind,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { mediaUrl } from "@/lib/media";

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    icon: Sun,
    title: "UV Protection",
    desc: "Blocks harmful UV rays and keeps outdoor spaces comfortable.",
  },
  {
    icon: Droplets,
    title: "Weather Resistant",
    desc: "Built to withstand rain, wind and harsh conditions.",
  },
  {
    icon: Wind,
    title: "Heat Reduction",
    desc: "Reduces heat and keeps the shaded area cool and pleasant.",
  },
  {
    icon: Shield,
    title: "Long Lasting",
    desc: "Premium fabric and steel for long-term performance.",
  },
];

const services = [
  {
    icon: Truck,
    title: "Car Parking Shades",
    description:
      "Elegant and durable car parking tensile structures suitable for villas, apartments and commercial buildings.",
  },
  {
    icon: Building2,
    title: "Entrance & Walkway Shades",
    description:
      "Stylish entrance covers and walkway shades that enhance the look of your building.",
  },
  {
    icon: Home,
    title: "Terrace & Outdoor Shades",
    description:
      "Perfect shade solutions for terraces, gardens and open outdoor spaces.",
  },
  {
    icon: Users,
    title: "Custom Tensile Structures",
    description:
      "Custom designed structures using premium fabric for unique shade requirements.",
  },
];

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: mediaUrl(`/images/gl${i + 1}.png`),
}));

const canopySolutions = [
  "Car Parking Shade",
  "Waiting Area Shade",
  "Entrance Shade",
  "Swimming Pool Shade",
  "Entrance Facade Fabric",
];

const companyHighlights = [
  { icon: Award, text: "Accredited Fabricator of SERGE FERRARI" },
  { icon: MapPin, text: "Kumbakonam, South India" },
  { icon: Calendar, text: "Established in 2020" },
  { icon: Shield, text: "Under 10 Year Warranty on Fabric" },
];

const aboutPoints = [
  "Modern designs",
  "Strong steel structure",
  "Long-lasting fabric",
  "Professional installation",
];

const projectPoints = [
  "Premium quality materials",
  "Strong and weather-resistant fabric",
  "Attractive modern designs",
  "Affordable pricing",
  "Experienced installation team",
];

const stats = [
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "100%", label: "Satisfaction" },
];

const warrantyItems = [
  { icon: Award, text: "Accredited Fabricator of SERGE FERRARI" },
  { icon: Shield, text: "Under 10 Year Warranty on Fabric" },
  { icon: MapPin, text: "Kumbakonam, South India" },
];

/* =========================================================
   COMPONENTS
========================================================= */

const SectionHeader = ({ badge, title, highlight, description }: any) => (
  <div className="text-center mb-5 sm:mb-6">
    <div className="flex items-center justify-center gap-2 animate-fade-in">
      <span className="w-8 h-px bg-[#A99479] animate-scale-x" />
      <span className="text-[#927E64] text-[9px] sm:text-[10px] uppercase tracking-[3px] font-bold">
        {badge}
      </span>
      <span className="w-8 h-px bg-[#A99479] animate-scale-x-delayed" />
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#3F382F] mt-2 tracking-[-1px] animate-slide-up">
      {title}{" "}
      <span className="text-[#A99479] animate-text-glow">{highlight}</span>
    </h2>
    {description && (
      <p className="max-w-xl mx-auto text-[#3F382F]/90 text-xs sm:text-sm leading-6 mt-1.5 animate-fade-in-delayed">
        {description}
      </p>
    )}
  </div>
);

/* =========================================================
   PAGE
========================================================= */

export default function GreenlandPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main ref={sectionRef} className="relative overflow-hidden">
        {/* =====================================================
            GLOBAL BACKGROUND
        ===================================================== */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#B8A58D]/40 via-[#DCCBB5]/30 to-[#DCCBB5]/40" />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/15 via-transparent to-white/15" />
        <div
          className="fixed inset-0 -z-10 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(169,148,121,.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(169,148,121,.10) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
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
        <section className="relative w-full pt-8 sm:pt-10 lg:pt-12 pb-5 sm:pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#3F382F]/85 hover:text-[#A99479] transition-colors duration-300 mb-3 sm:mb-4 group animate-fade-in"
            >
              <ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs sm:text-sm">Back to Service</span>
            </Link>

            <div
              className={`relative rounded-2xl border border-white/40 bg-white/25 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,100,120,0.08)] overflow-hidden transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#DCCBB5]/20 blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#DCCBB5]/10 blur-3xl animate-pulse-slow-delayed" />

              <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
                <div className="flex justify-center mb-3 sm:mb-4 animate-fade-in-down">
                  <div className="relative">
                    <div className="absolute inset-[-35px] rounded-full bg-[#B8A58D]/15 blur-3xl animate-pulse-glow" />
                    <Image
                      src={mediaUrl("/images/logo.webp")}
                      alt="Greenland Tensile Shade Solutions"
                      width={150}
                      height={150}
                      priority
                      className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain animate-float-logo"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#A99479]/10 border border-[#A99479]/20 animate-fade-in">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A99479] animate-pulse" />
                  <span className="text-[8px] sm:text-[10px] font-semibold text-[#927E64] uppercase tracking-[2px] sm:tracking-[3px]">
                    Greenland Tensile Shade
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A99479] animate-pulse-delayed" />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3F382F] leading-tight mt-3 animate-slide-up">
                  Modern <span className="text-[#A99479] animate-text-glow">Shade</span> Solutions
                </h1>

                <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-[#3F382F]/95 text-sm sm:text-base px-2 animate-fade-in-delayed">
                  Modern | Durable | Elegant — Tensile structure systems since 2020.
                </p>

                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#A99479] to-transparent mx-auto mt-3 animate-scale-x" />

                <div className="flex flex-wrap items-center justify-center gap-3 mt-4 animate-fade-in-delayed-2">
                  <Link
                    href="projects"
                    className="animate-shimmer inline-flex items-center gap-2 bg-[#A99479] hover:bg-[#927E64] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium shadow-lg shadow-[#A99479]/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[#A99479]/40"
                  >
                    Explore Projects
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-[#A99479]/40 text-[#927E64] hover:bg-[#A99479] hover:text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 group hover:-translate-y-1"
                  >
                    Get a Free Quote
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mt-4">
              {companyHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-white/30 border border-white/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_12px_30px_rgba(63,56,47,0.10)] hover:border-[#A99479]/30 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <Icon size={15} className="text-[#A99479] flex-shrink-0 animate-pulse-slow" />
                    <span className="text-[9px] sm:text-[10px] text-[#3F382F]/95 leading-4">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURE STRIP
        ===================================================== */}
        <section className="relative bg-[#A99479] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-3 py-3 sm:py-4 px-3 sm:px-5 transition-all duration-500 hover:bg-white/5 ${
                      index !== 0 ? "border-l border-white/20" : ""
                    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <Icon size={29} strokeWidth={1.5} className="text-white flex-shrink-0 animate-float-icon" />
                    <div>
                      <h3 className="text-[9px] sm:text-xs font-bold uppercase tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-[8px] sm:text-[10px] text-white/90 leading-5 mt-1">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section className="relative py-8 sm:py-10 lg:py-12 animate-section-reveal">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 animate-fade-in">
                  <span className="text-[#927E64] text-[9px] sm:text-[10px] font-bold uppercase tracking-[3px]">
                    About Greenland
                  </span>
                  <span className="w-10 h-px bg-[#A99479] animate-scale-x" />
                </div>

                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-[0.95] tracking-[-1.5px] text-[#3F382F] animate-slide-up">
                  SHADE SOLUTIONS
                  <span className="block text-[#A99479] mt-1 animate-text-glow-delayed">
                    FOR MODERN SPACES
                  </span>
                </h2>

                <div className="w-12 h-1 bg-[#A99479] mt-3 animate-scale-x" />

                <p className="text-[#3F382F]/95 text-sm sm:text-base leading-7 mt-3 animate-fade-in-delayed">
                  <span className="font-semibold text-[#927E64]">
                    Greenland Tensile Shade
                  </span>{" "}
                  specializes in designing and installing high-quality tensile
                  shade structures for homes, commercial buildings, parking
                  areas, walkways and outdoor spaces.
                </p>

                <p className="text-[#3F382F]/90 text-sm sm:text-base leading-7 mt-2 animate-fade-in-delayed-2">
                  We provide strong steel frames with premium tensile fabric
                  to create stylish, durable and weather-resistant shading
                  solutions. Our team focuses on quality workmanship,
                  professional installation and dependable service.
                </p>

                <div className="grid grid-cols-2 gap-x-5 gap-y-1.5 mt-3">
                  {aboutPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 transition-all duration-500 hover:translate-x-1 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <CheckCircle size={15} className="text-[#A99479] flex-shrink-0 animate-pulse-slow" />
                      <span className="text-xs sm:text-sm text-[#3F382F]/95">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-[#3F382F]/10">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <p className="text-2xl sm:text-3xl font-black text-[#A99479] animate-counter">
                        {stat.value}
                      </p>
                      <p className="text-[8px] sm:text-[9px] uppercase tracking-wide text-[#3F382F]/90 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-slide-up-delayed">
                <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-full h-full border-[10px] sm:border-[14px] border-[#A99479]/15 animate-pulse-slow" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image
                    src={mediaUrl("/images/about.webp")}
                    alt="Greenland Tensile Shade Project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 animate-soft-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F382F]/40 to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-2 text-[8px] sm:text-[9px] uppercase tracking-[2px] font-bold text-[#3F382F] border border-white/40">
                      Professional Tensile Structure Systems
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <section className="relative py-8 sm:py-10 animate-section-reveal">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <SectionHeader
              badge="What We Create"
              title="OUR"
              highlight="SERVICES"
              description="Practical and elegant shade solutions designed for residential, commercial and outdoor spaces."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`relative px-5 sm:px-6 py-4 lg:py-2 text-center transition-all duration-500 hover:bg-white/20 hover:-translate-y-1 ${
                      index !== 0 ? "border-t sm:border-t-0 sm:border-l border-[#927E64]/15" : ""
                    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${1.0 + index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-14 h-14 flex items-center justify-center text-[#A99479] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon size={40} strokeWidth={1} className="transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#3F382F] group-hover:text-[#927E64] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] leading-5 text-[#3F382F]/90 max-w-[230px] mx-auto mt-1">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ===================================================== */}
        <section id="gallery" className="relative py-8 sm:py-10 scroll-mt-20 animate-section-reveal">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <SectionHeader
              badge="Project Gallery"
              title="OUR"
              highlight="WORK"
              description="A selection of tensile shade structures designed and installed by Greenland."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer aspect-square bg-white/30 border border-[#3F382F]/10 hover:border-[#A99479]/40 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(169,148,121,0.16)] text-left ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${1.2 + index * 0.05}s` }}
                >
                  <Image
                    src={image.image}
                    alt="Greenland Tensile Shade Project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F382F]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#A99479]/0 group-hover:bg-[#A99479]/10 transition-colors duration-500" />
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-4 animate-fade-in-up">
              <Link
                href="projects"
                className="inline-flex items-center gap-2 border border-[#A99479] text-[#927E64] hover:bg-[#A99479] hover:text-white px-5 py-2.5 text-[9px] sm:text-[10px] uppercase tracking-wide font-bold transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-[#A99479]/20"
              >
                View More Projects
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT QUALITY
        ===================================================== */}
        <section className="relative py-6 sm:py-8 lg:py-10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="relative overflow-hidden rounded-[28px] border border-[#927E64]/10 bg-white/35 backdrop-blur-xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-[#B8A58D]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DCCBB5]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">

                <div className="px-6 sm:px-8 lg:px-10 pt-5 sm:pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-px bg-[#A99479]" />
                        <span className="text-[#927E64] text-[9px] uppercase tracking-[3px] font-bold">
                          Our Projects
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3F382F] leading-[0.9] tracking-[-2px] mt-2">
                        BUILT FOR{" "}
                        <span className="text-[#A99479]">
                          PERFORMANCE
                        </span>
                      </h2>
                    </div>
                    <p className="max-w-sm text-[#3F382F]/90 text-xs sm:text-sm leading-6">
                      Every project combines dependable materials, experienced
                      installation and designs created to complement the space.
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 lg:px-10 pb-5 sm:pb-6 mt-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#927E64]/10 rounded-2xl overflow-hidden">
                    {projectPoints.map((point, index) => (
                      <div
                        key={point}
                        className={`group relative bg-[#927E64] backdrop-blur-sm px-4 sm:px-5 py-4 sm:py-5 min-h-[100px] transition-all duration-500 hover:bg-[#A99479] ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: `${1.4 + index * 0.08}s` }}
                      >
                        <div className="w-8 h-1 bg-[#A99479] group-hover:bg-[#F8F6F1] transition-colors duration-300" />
                        <div className="mt-4">
                          <CheckCircle size={21} strokeWidth={1.7} className="text-[#A99479] group-hover:text-[#F8F6F1] transition-colors duration-300" />
                        </div>
                        <p className="text-[10px] sm:text-xs font-semibold leading-5 text-white group-hover:text-[#F8F6F1] transition-colors duration-300 mt-2">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#927E64]/10 px-6 sm:px-8 lg:px-10 py-3 sm:py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A99479] animate-pulse" />
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[2px] font-semibold text-[#3F382F]/90">
                        Quality Materials
                      </span>
                    </div>
                    <div className="hidden sm:block h-px flex-1 mx-4 bg-[#927E64]" />
                    <span className="text-[9px] sm:text-[10px] text-[#3F382F]/85">
                      Designed • Fabricated • Installed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CANOPY SOLUTIONS
        ===================================================== */}
        <section className="relative py-6 sm:py-8 lg:py-10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="relative overflow-hidden rounded-[26px] border border-white/50 bg-white/30 backdrop-blur-xl">

              <div className="absolute -top-28 -right-28 w-64 h-64 rounded-full bg-[#B8A58D]/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-28 -left-28 w-64 h-64 rounded-full bg-[#DCCBB5]/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative p-5 sm:p-7 lg:p-8 bg-[#A99479]/[0.04] lg:border-r border-[#927E64]/10">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-[#A99479]" />
                    <span className="text-[#927E64] text-[9px] uppercase tracking-[3px] font-bold">
                      Canopy Solutions
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#3F382F] leading-[0.9] tracking-[-2px] mt-3">
                    PREMIUM
                    <span className="block text-[#A99479]">
                      CANOPY
                    </span>
                    <span className="block">
                      SOLUTIONS
                    </span>
                  </h2>

                  <div className="w-12 h-1 bg-[#A99479] mt-4" />

                  <p className="text-[#3F382F]/90 text-xs sm:text-sm leading-6 mt-4 max-w-md">
                    Purpose-built shade structures for parking areas, entrances,
                    waiting spaces, pools and architectural facades.
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#927E64]/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#A99479]/10 border border-[#A99479]/10 flex items-center justify-center">
                        <Sun size={18} className="text-[#A99479]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#3F382F]">
                          Designed For
                        </p>
                        <p className="text-[9px] text-[#3F382F]/85 mt-0.5">
                          Protection · Comfort · Style
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="mb-2">
                    <span className="text-[#927E64] text-[8px] uppercase tracking-[2.5px] font-bold">
                      Applications
                    </span>
                    <p className="text-[#3F382F]/85 text-[10px] sm:text-xs mt-1">
                      Shade solutions tailored to your space.
                    </p>
                  </div>

                  <div className="divide-y divide-[#927E64]/10">
                    {canopySolutions.map((solution, index) => (
                      <div
                        key={solution}
                        className="group flex items-center gap-3 py-3 first:pt-2 last:pb-2 px-1 hover:px-3 transition-all duration-300"
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#A99479]/8 border border-[#A99479]/10 flex items-center justify-center shrink-0 group-hover:bg-[#A99479] group-hover:border-[#A99479] transition-all duration-300">
                          {index === 0 && <Truck size={15} className="text-[#A99479] group-hover:text-white transition-colors" />}
                          {index === 1 && <Users size={15} className="text-[#A99479] group-hover:text-white transition-colors" />}
                          {index === 2 && <Building2 size={15} className="text-[#A99479] group-hover:text-white transition-colors" />}
                          {index === 3 && <Sun size={15} className="text-[#A99479] group-hover:text-white transition-colors" />}
                          {index === 4 && <Home size={15} className="text-[#A99479] group-hover:text-white transition-colors" />}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xs sm:text-sm font-bold text-[#3F382F] group-hover:text-[#927E64] transition-colors">
                            {solution}
                          </h3>
                          <p className="hidden sm:block text-[9px] text-[#3F382F]/80 mt-0.5">
                            Premium tensile structure solution
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
              {warrantyItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon size={14} className="text-[#A99479]" />
                    <span className="text-[9px] sm:text-[10px] font-medium text-[#3F382F]/90">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="relative bg-[#927E64] text-white overflow-hidden py-6 sm:py-8">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
                `,
                backgroundSize: "55px 55px",
              }}
            />
          </div>
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow-delayed" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-5">
              <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#F8F6F1]/20 border border-[#B8A58D]/30 items-center justify-center animate-pulse-slow">
                <Phone size={24} className="text-[#DCCBB5]" />
              </div>

              <div className="animate-slide-up">
                <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight">
                  Let's Build Something
                  <span className="text-[#DCCBB5] animate-text-glow">
                    {" "}Amazing Together
                  </span>
                </h2>
                <p className="text-white/85 text-xs sm:text-sm mt-1">
                  Contact us today for a free consultation and quote for your
                  tensile shade project.
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-2 animate-fade-in-delayed">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#927E64] hover:bg-[#F8F6F1] px-5 sm:px-6 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                >
                  Get a Free Quote
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
                </Link>
                <a
                  href="tel:7708776022"
                  className="inline-flex items-center gap-2 text-[#B8A58D] hover:text-white text-sm sm:text-base font-semibold transition-colors hover:scale-105"
                >
                  <Phone size={14} />
                  7708776022
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          GALLERY MODAL
      ===================================================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#3F382F]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white/90 backdrop-blur-xl overflow-hidden rounded-2xl animate-scale-up shadow-[0_0_60px_rgba(169,148,121,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute z-20 top-3 right-3 w-9 h-9 rounded-full bg-[#3F382F]/80 hover:bg-[#A99479] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X size={17} />
            </button>
            <div className="relative aspect-[16/10]">
              <Image
                src={selectedImage.image}
                alt="Greenland Tensile Shade Project"
                fill
                className="object-contain bg-[#3F382F]"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
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
        @keyframes scale-x-delayed {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-12px) translateX(6px); }
          50% { transform: translateY(-24px) translateX(-6px); }
          75% { transform: translateY(-12px) translateX(6px); }
        }
        @keyframes float-logo {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
          animation-delay: 2s;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(169, 148, 121, 0.12); }
          50% { text-shadow: 0 0 40px rgba(169, 148, 121, 0.28); }
        }
        @keyframes text-glow-delayed {
          0%, 100% { text-shadow: 0 0 20px rgba(169, 148, 121, 0.12); }
          50% { text-shadow: 0 0 40px rgba(169, 148, 121, 0.28); }
          animation-delay: 1s;
        }
        @keyframes counter {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          60% { transform: scale(1.1) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes section-reveal {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-130%); }
          55%, 100% { transform: translateX(230%); }
        }

        @keyframes soft-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }

        .animate-section-reveal {
          animation: section-reveal 0.9s ease-out both;
        }

        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }

        .animate-shimmer::after {
          content: "";
          position: absolute;
          inset: 0 auto 0 -45%;
          width: 35%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent);
          transform: skewX(-18deg);
          animation: shimmer 3.5s ease-in-out infinite;
          pointer-events: none;
        }

        .animate-soft-zoom {
          animation: soft-zoom 6s ease-in-out infinite;
        }

        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-down { animation: fade-in-down 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-in-delayed-2 { animation: fade-in-delayed-2 0.8s ease-out 0.5s forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        .animate-slide-up-delayed { animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards; opacity: 0; }
        .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
        .animate-scale-x-delayed { animation: scale-x-delayed 0.8s ease-out 0.6s forwards; transform-origin: right; }
        .animate-float { animation: float linear infinite; }
        .animate-float-logo { animation: float-logo 3s ease-in-out infinite; }
        .animate-float-icon { animation: float-icon 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-slow-delayed { animation: pulse-slow-delayed 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite; animation-delay: 0.5s; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-text-glow-delayed { animation: text-glow-delayed 3s ease-in-out infinite; }
        .animate-counter { animation: counter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; display: inline-block; }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }

        @media (max-width: 640px) {
          .animate-float { animation-duration: 18s !important; }
        }
      `}</style>
    </>
  );
}