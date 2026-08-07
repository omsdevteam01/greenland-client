'use client';

import { ArrowRight, Shield, Sun, Droplets, Zap, X } from 'lucide-react';
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

const products = [
  {
    title: 'Swimming Pool Shades',
    description: 'Premium pool shades with UV protection.',
    slug: 'swimming-pool-shades',
  },
  {
    title: 'Walkway Shades',
    description: 'Durable walkway covers for comfort.',
    slug: 'walkway-shades',
  },
  {
    title: 'Playground Shades',
    description: 'Safe shade for children play areas.',
    slug: 'playground-shades',
  },
  {
    title: 'Parking Shades',
    description: 'Protect vehicles from harsh weather.',
    slug: 'parking-shades',
  },
  {
    title: 'School Shades',
    description: 'Safe outdoor shade for educational institutions.',
    slug: 'school-shades',
  },
  {
    title: 'Garden Shades',
    description: 'Elegant shade solutions for outdoor gardens.',
    slug: 'garden-shades',
  },
  {
    title: 'Tensile Fabric Structures',
    description: 'Modern tensile structures for various applications.',
    slug: 'tensile-fabric-structures',
  },
  {
    title: 'Awning Shades',
    description: 'Stylish awning solutions for commercial & residential spaces.',
    slug: 'awning-shades',
  },
];

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
        {/* Background Glow - Hidden on mobile */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

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

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button - Reduced margin */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors duration-300 mb-3 sm:mb-4 group"
          >
            <ArrowRight size={14} className="sm:w-4 sm:h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-xs sm:text-sm">Back to Services</span>
          </Link>

          {/* Hero Section - Reduced spacing */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-1.5 sm:mb-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[8px] sm:text-[10px] font-semibold text-cyan-300 uppercase tracking-[2px] sm:tracking-[3px]">
                Green Land Tensile Shade
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Premium <span className="text-cyan-400">Shade</span> Solutions
            </h1>
            <p className="mt-1.5 sm:mt-2 max-w-2xl mx-auto text-white/60 text-xs sm:text-sm md:text-base px-2">
              Discover our premium tensile shade structures designed for elegance, durability, and superior comfort.
            </p>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1.5 sm:mt-2" />
          </div>

          {/* Features - 4 Cards - Reduced spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)] animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Icon size={14} className="sm:w-[18px] sm:h-[18px] text-cyan-400" />
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

          {/* Products - Reduced spacing */}
          <div className="mb-6 sm:mb-8">
            <div className="text-center mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                  Our Product Range
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 sm:mt-1.5">
                What We <span className="text-cyan-400">Offer</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1 sm:mt-1.5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {products.map((product, index) => (
                <Link
                  href={`/greenland/${product.slug}`}
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(22,213,232,0.05)] p-3 sm:p-4 text-center animate-slide-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {/* Number Badge */}
                  <div className="relative z-10 inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[9px] sm:text-[10px] font-bold group-hover:bg-cyan-400/20 transition-all duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-white font-semibold text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-white/40 text-[9px] sm:text-xs mt-0.5 sm:mt-1 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="relative z-10 mt-1.5 sm:mt-2 inline-flex items-center gap-1 text-cyan-400 text-[9px] sm:text-xs font-medium group-hover:gap-2 transition-all duration-300">
                    <span className="relative">
                      Learn More
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight size={10} className="sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-10 transition-all duration-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Gallery Section - Reduced spacing */}
          <div className="mt-3 sm:mt-4">
            <div className="text-center mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
                  Project Gallery
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 sm:mt-1.5">
                Our <span className="text-cyan-400">Work</span>
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1 sm:mt-1.5" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2.5">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(22,213,232,0.05)] animate-slide-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
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

          {/* CTA - Reduced spacing */}
          <div className="text-center mt-6 sm:mt-8">
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

          {/* Back to Top - Reduced spacing */}
          <div className="text-center mt-3 sm:mt-4 pb-3 sm:pb-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-300 text-[10px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] group"
            >
              <span className="w-6 sm:w-8 h-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></span>
              Back to Top
              <span className="w-6 sm:w-8 h-px bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Modal - Mobile optimized */}
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
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={16} className="sm:w-5 sm:h-5 text-white" />
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
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

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

        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .animate-slide-up {
            animation: slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        }
      `}</style>
    </>
  );
}