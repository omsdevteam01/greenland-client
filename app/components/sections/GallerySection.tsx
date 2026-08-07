'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    title: 'Luxury Villa Construction',
    category: 'Residential',
    image: '/images/product1.png',
  },
  {
    id: 2,
    title: 'Commercial Office Complex',
    category: 'Commercial',
    image: '/images/product2.png',
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    category: 'Industrial',
    image: '/images/product3.png',
  },
  {
    id: 4,
    title: 'Steel Structure Fabrication',
    category: 'Industrial',
    image: '/images/product4.png',
  },
  {
    id: 5,
    title: 'Residential Apartment Complex',
    category: 'Residential',
    image: '/images/product5.png',
  },
  {
    id: 6,
    title: 'Shopping Mall Construction',
    category: 'Commercial',
    image: '/images/product6.png',
  },
];

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<any[]>([]);

  // Generate particles only on the client side
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 10 }, () => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
      }));
    };

    setParticles(generateParticles());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full py-10 sm:py-16 md:py-20 overflow-hidden"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
      }}
    >
      {/* Background Glow Effects - Hidden on mobile */}
      <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

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
        {particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full bg-cyan-400/8 animate-float ${
              i < 6 ? 'block' : 'hidden md:block'
            }`}
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Reduced spacing */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300">
              Our Gallery
            </span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-1.5 sm:mt-2">
            Project <span className="text-cyan-400">Showcase</span>
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-1.5 sm:mt-3" />
          <p className="max-w-2xl mx-auto text-white/60 text-xs sm:text-sm mt-2 sm:mt-3 px-2">
            Explore our completed projects showcasing excellence in construction and engineering.
          </p>
        </div>

        {/* Gallery Grid - Mobile optimized */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Content - Hidden on mobile */}
                <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center p-4">
                    <span className="text-xs text-cyan-400 uppercase tracking-wider font-medium">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm mt-1">
                      {image.title}
                    </h3>
                    <span className="inline-block mt-2 text-cyan-400 text-xs hover:gap-2 transition-all duration-300">
                      View Project →
                    </span>
                  </div>
                </div>

                {/* Mobile Overlay - Always visible but subtle */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent sm:hidden">
                  <span className="text-[8px] text-cyan-400 uppercase tracking-wider font-medium block">
                    {image.category}
                  </span>
                  <h4 className="text-white text-[10px] font-semibold truncate">
                    {image.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Reduced spacing */}
        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-1.5 sm:gap-2 text-cyan-400 text-sm sm:text-base font-semibold hover:text-[#16D5E8] transition-all duration-300"
          >
            <span className="relative">
              View All Gallery
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={14} className="sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Modal - Mobile optimized */}
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
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-[10px] sm:text-xs text-cyan-400 uppercase tracking-wider font-medium">
                {selectedImage.category}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-16px) translateX(-4px); }
          75% { transform: translateY(-8px) translateX(4px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-float { animation: float linear infinite; }
        .animate-slide-up { opacity: 0; animation: slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-pulse-glow-delayed { animation: pulse-glow 4s ease-in-out infinite; animation-delay: 2s; }
        .animate-pulse { animation: pulse-delayed 2s ease-in-out infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite; animation-delay: 0.5s; }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </section>
  );
}