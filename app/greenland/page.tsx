'use client';

import { ArrowRight, Shield, Sun, Droplets, Zap, X, Award, Calendar, MapPin, Truck, CheckCircle, Building2, Home, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

const features = [
  {
    icon: Shield,
    title: 'UV Protection',
    desc: 'Blocks 99% of harmful UV rays for safe outdoor spaces.',
  },
  {
    icon: Droplets,
    title: 'Weather Resistant',
    desc: 'Built to withstand rain, wind, and extreme conditions.',
  },
  {
    icon: Sun,
    title: 'Heat Reduction',
    desc: 'Cools outdoor areas by up to 15°C with premium shade.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    desc: 'Reduces energy costs with natural cooling solutions.',
  },
];

// Services Data - No Images
const services = [
  {
    icon: Truck,
    title: 'Car Parking Shades',
    description: 'Elegant and durable car parking tensile structures suitable for villas, apartments, and commercial buildings.',
  },
  {
    icon: Building2,
    title: 'Entrance & Walkway Shades',
    description: 'Stylish entrance covers and walkway shades that enhance the look of your building.',
  },
  {
    icon: Home,
    title: 'Terrace & Outdoor Shades',
    description: 'Perfect solutions for terraces, gardens, and open outdoor spaces.',
  },
  {
    icon: Users,
    title: 'Custom Tensile Structures',
    description: 'Premium quality materials with strong and weather-resistant fabric for any custom requirement.',
  },
];

// Gallery Images - 12 Images
const galleryImages = [
  {
    id: 1,
    image: '/images/gl1.png',
  },
  {
    id: 2,
    image: '/images/gl2.png',
  },
  {
    id: 3,
    image: '/images/gl3.png',
  },
  {
    id: 4,
    image: '/images/gl4.png',
  },
  {
    id: 5,
    image: '/images/gl5.png',
  },
  {
    id: 6,
    image: '/images/gl6.png',
  },
  {
    id: 7,
    image: '/images/gl7.png',
  },
  {
    id: 8,
    image: '/images/gl8.png',
  },
  {
    id: 9,
    image: '/images/gl9.png',
  },
  {
    id: 10,
    image: '/images/gl10.png',
  },
  {
    id: 11,
    image: '/images/gl11.png',
  },
  {
    id: 12,
    image: '/images/gl12.png',
  },
];

// Canopy Solutions
const canopySolutions = [
  'Car Parking Shade',
  'Waiting Area Shade',
  'Entrance Shade',
  'Swimming Pool Shade',
  'Entrance Facade Fabric',
];

// Highlights
const highlights = [
  { icon: Award, text: 'Accredited Fabricator of SERGE FERRARI' },
  { icon: MapPin, text: 'Kumbakonam, South India' },
  { icon: Truck, text: 'Under 10 Year Warranty on Fabric' },
];

export default function GreenlandPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
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
      <section className="relative w-full min-h-screen pt-12 sm:pt-14 pb-6 sm:pb-10 overflow-hidden" ref={sectionRef}
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Background Glow */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        {/* Glassy Grid Pattern */}
        <div
          className="hidden md:block absolute inset-0 opacity-[0.04] z-[5]"
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

        {/* Floating Shapes */}
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/10 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 40 + 15}px`,
                height: `${Math.random() * 40 + 15}px`,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                borderRadius: i % 2 === 0 ? '50%' : '8px',
                animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                background: `radial-gradient(circle, rgba(22,213,232,.05), transparent)`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors duration-300 mb-3 sm:mb-4 group animate-fade-in"
          >
            <ArrowRight size={14} className="sm:w-4 sm:h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-xs sm:text-sm">Back to Service</span>
          </Link>

          {/* Hero Section */}
          <div className={`relative rounded-2xl border border-white/10 bg-[#03141C]/50 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            <div className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/3 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-border-pulse"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-border-pulse-delayed"></div>
            </div>

            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="relative">
                  <div className="hidden md:block absolute inset-[-40px] rounded-full bg-cyan-400/50 blur-3xl animate-glow-subtle"></div>
                  <div className="hidden md:block absolute inset-[-60px] rounded-full bg-cyan-400/30 blur-2xl animate-glow-subtle-delayed"></div>
                  <img
                    src="/images/logo.webp"
                    alt="Greenland"
                    className="w-28 h-28 sm:w-26 sm:h-26 md:w-32 md:h-32 object-contain drop-shadow-[0_0_30px_rgba(22,213,232,0.15)] relative z-10 animate-float-logo"
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-2 sm:mb-3">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[8px] sm:text-[10px] font-semibold text-cyan-300 uppercase tracking-[2px] sm:tracking-[3px]">
                  Greenland Tensile Shade
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Premium <span className="text-cyan-400">Shade</span> Solutions
              </h1>
              <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-white/60 text-sm sm:text-base px-2">
                Modern | Durable | Elegant — Tensile structure systems since 2020.
              </p>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x" />
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 mt-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300/80 text-[8px] sm:text-[10px] animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon size={12} className="text-cyan-400 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Features - 4 Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Icon size={14} className="sm:w-[18px] sm:h-[18px] text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-white font-semibold text-[10px] sm:text-sm mt-1.5 sm:mt-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-[9px] sm:text-xs mt-0.5 sm:mt-1 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* About Section - No Background Image */}
          <div className="mb-8 sm:mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-cyan-900/10 via-[#03141C]/40 to-blue-900/10 backdrop-blur-xl">
              {/* Decorative Lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow-delayed" />

              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                  <span className="uppercase tracking-[3px] text-[9px] sm:text-[10px] font-semibold text-cyan-300">
                    About Us
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent ml-2" />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left - Content */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      <span className="text-cyan-400">Greenland</span> Tensile Shade
                    </h2>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-cyan-400 text-[10px] font-medium tracking-wider">✦ SOUTH INDIA</span>
                      <span className="w-8 h-px bg-cyan-400/30" />
                      <span className="text-white/30 text-[10px] tracking-wider">EST. 2020</span>
                    </div>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-3" />

                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-4">
                      <span className="text-cyan-300 font-medium">Greenland Tensile Shade</span> is a trusted provider of high-quality tensile and canopy shade structures. We design, supply, and install car parking shades, walkway covers, outdoor canopies, and custom tensile roofs for homes, commercial buildings, and industrial spaces.
                    </p>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-3">
                      Our aim is to deliver strong, stylish, and long-lasting shade solutions that protect against sun and rain while enhancing the aesthetics of any space. With a focus on quality workmanship, on-time delivery, and customer satisfaction, we have built a reputation as a reliable shade solution provider across South India.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/5">
                      <div>
                        <span className="text-cyan-400 text-lg font-bold">100+</span>
                        <span className="text-white/30 text-[10px] block uppercase tracking-wider">Projects</span>
                      </div>
                      <span className="w-px h-8 bg-white/10" />
                      <div>
                        <span className="text-cyan-400 text-lg font-bold">50+</span>
                        <span className="text-white/30 text-[10px] block uppercase tracking-wider">Clients</span>
                      </div>
                      <span className="w-px h-8 bg-white/10" />
                      <div>
                        <span className="text-cyan-400 text-lg font-bold">100%</span>
                        <span className="text-white/30 text-[10px] block uppercase tracking-wider">Satisfaction</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Clean Icons with Text */}
                  <div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: CheckCircle, text: "Modern Designs" },
                        { icon: Shield, text: "Strong Steel Structure" },
                        { icon: Award, text: "Long-lasting Fabric" },
                        { icon: Users, text: "Professional Install" },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={idx}
                            className="group flex flex-col items-center text-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-400/5 hover:-translate-y-1"
                          >
                            <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                              <Icon size={18} className="text-cyan-400" />
                            </div>
                            <span className="text-white/70 text-[10px] sm:text-xs font-medium mt-2 group-hover:text-white transition-colors duration-300">
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section - Small Cards with Small Icons */}
          <div className="mb-8 sm:mb-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                  Our Services
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 animate-slide-up">
                What We <span className="text-cyan-400">Offer</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(22,213,232,0.06)] animate-slide-up`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-center pt-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110">
                        <Icon size={16} className="text-cyan-400" />
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 text-center">
                      <h3 className="text-white font-semibold text-xs sm:text-sm group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/40 text-[10px] sm:text-xs mt-1 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gallery Section - 12 Images (No Numbers, No +) */}
          <div className="mb-8 sm:mb-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-fade-in">
                  Project Gallery
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 animate-slide-up">
                Our <span className="text-cyan-400">Work</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2 animate-scale-x" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(22,213,232,0.05)] animate-slide-up"
                  style={{ animationDelay: `${0.5 + index * 0.06}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.image}
                    alt="Gallery Image"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Canopy Solutions Section */}
          <div className="mb-8 sm:mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#03141C]/40 backdrop-blur-xl p-6 sm:p-8 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/10" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow-delayed" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                    Canopy Shade Solutions
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1">
                  <span className="text-cyan-400">Premium</span> Canopy Solutions
                </h2>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2" />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
                  {canopySolutions.map((solution, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/20 transition-all duration-300 animate-slide-up`}
                      style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                    >
                      <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-white/60 text-[10px] sm:text-xs leading-tight">{solution}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                  <Truck size={14} className="text-cyan-400" />
                  <span className="text-cyan-300 text-[10px] sm:text-xs font-medium">Under 10 Year Warranty on Fabric</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#03141C]/40 backdrop-blur-xl p-8 sm:p-12 md:p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-cyan-500/5 to-blue-600/10" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow-delayed" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 text-[8px] font-semibold uppercase tracking-[3px]">
                    Get Your Shade Solution
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Ready for Premium <span className="text-cyan-400">Shade</span>?
                </h3>
                <p className="text-white/50 text-sm sm:text-base mt-2 max-w-xl mx-auto">
                  Contact us today for a free consultation and quote for your tensile shade project.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 group text-sm font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="tel:7708776022"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 group text-sm font-medium border border-white/10 hover:border-white/20"
                  >
                    <span>📞 7708776022</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-6 pb-3">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-300 text-[10px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] group"
            >
              <span className="w-6 sm:w-8 h-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></span>
              Back to Top
              <span className="w-6 sm:w-8 h-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Modal - Dark Cyan Close Button */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#03141C]/95 rounded-2xl border border-white/10 overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A4A5A] hover:bg-[#0D5A6E] border border-cyan-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-cyan-400/20"
            >
              <X size={16} className="sm:w-5 sm:h-5 text-cyan-300" />
            </button>
            <div className="relative aspect-[16/9]">
              <Image
                src={selectedImage.image}
                alt="Gallery Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

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

        @keyframes fade-in-delayed {
          from { opacity: 0; }
          to { opacity: 1; }
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

        @keyframes float-logo {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes floatShape {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          25% { transform: translateY(-20px) rotate(8deg); opacity: 0.4; }
          50% { transform: translateY(-40px) rotate(-8deg); opacity: 0.6; }
          75% { transform: translateY(-20px) rotate(5deg); opacity: 0.4; }
        }

        @keyframes glow-subtle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes glow-subtle-delayed {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes border-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

        .animate-fade-in-delayed {
          opacity: 0;
          animation: fade-in-delayed 0.8s ease-out 0.3s forwards;
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

        .animate-float-logo {
          animation: float-logo 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.4s forwards;
          transform-origin: left;
        }

        .animate-border-pulse {
          animation: border-pulse 2s ease-in-out infinite;
        }

        .animate-border-pulse-delayed {
          animation: border-pulse 2s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-glow-subtle {
          animation: glow-subtle 3s ease-in-out infinite;
        }

        .animate-glow-subtle-delayed {
          animation: glow-subtle-delayed 3s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-slide-up {
            animation: slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          .animate-float {
            animation-duration: 15s !important;
          }
          .animate-float-logo {
            animation: float-logo 2s ease-in-out infinite;
          }
        }
      `}</style>
    </>
  );
}