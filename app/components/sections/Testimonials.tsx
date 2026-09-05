'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mr. Rajesh Kumar',
    position: 'CEO, BuildTech Solutions',
    image: '/images/testimonial1.jpg',
    rating: 5,
    text: 'The construction quality and attention to detail was exceptional. They delivered our commercial complex ahead of schedule with superior quality.',
  },
  {
    id: 2,
    name: 'Mrs. Priya Sharma',
    position: 'Director, Green Estates',
    image: '/images/testimonial2.jpg',
    rating: 5,
    text: 'We have partnered with them for multiple residential projects. Their commitment to quality and timely delivery is unmatched in the industry.',
  },
  {
    id: 3,
    name: 'Mr. Suresh Patel',
    position: 'Managing Partner, Industrial Corp',
    image: '/images/testimonial3.jpg',
    rating: 5,
    text: 'The steel fabrication and engineering solutions provided were top-notch. They understand the industrial requirements perfectly.',
  },
  {
    id: 4,
    name: 'Mr. Ananya Reddy',
    position: 'Architect, Design Studio',
    image: '/images/testimonial4.jpg',
    rating: 4,
    text: 'Working with this team was a pleasure. They transformed our design concepts into reality with precision and craftsmanship.',
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section
      className="relative w-full py-7 sm:py-9 overflow-hidden"
      ref={sectionRef}
    >

      {/* Background - Beige + White Premium Theme */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-[#F8F6F1] via-[#EDE4D5] to-[#DCCBB5]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/25"></div>
      </div>

      {/* Glassy Grid Pattern */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.04] z-[5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(169,148,121,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169,148,121,.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#A99479]/20 animate-float hidden md:block"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
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
            className="absolute border border-[#B8A58D]/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: `radial-gradient(circle, rgba(184,165,141,.08), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header - With animation */}
        <div
          className={`text-center mb-4 sm:mb-7 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse"></span>

            <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-[#3F382F]">
              Client Testimonials
            </p>

            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse-delayed"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F382F] mt-1.5 sm:mt-2">
            What Our <span className="text-[#A99479]">Clients Say</span>
          </h2>

          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#A99479] to-transparent mx-auto mt-1.5 sm:mt-3"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div
                    className={`
                      relative
                      rounded-xl
                      border border-[#E2D8C9]/80
                      bg-white/45
                      backdrop-blur-xl
                      p-4 sm:p-8
                      text-center
                      transition-all
                      duration-500
                      hover:border-[#A99479]/50
                      hover:shadow-[0_0_30px_rgba(169,148,121,0.08)]
                      hover:bg-white/65
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                    style={{
                      transitionDelay: `${index * 0.1}s`,
                      animation: isVisible
                        ? `slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s forwards`
                        : 'none'
                    }}
                  >
                    {/* Glass reflection - Hidden on mobile */}
                    <div className="hidden md:block absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>

                    {/* Quote Icon - Smaller on mobile */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-10">
                      <Quote
                        size={32}
                        className="sm:w-12 sm:h-12 text-[#3F382F]"
                      />
                    </div>

                    {/* Stars - Smaller on mobile */}
                    <div className="flex justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`sm:w-4 sm:h-4 ${
                            i < testimonial.rating
                              ? 'text-[#A99479] fill-[#A99479]'
                              : 'text-[#3F382F]/55'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Text - Smaller on mobile */}
                    <p className="text-[#3F382F]/95 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info - Smaller on mobile */}
                    <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-4 sm:mt-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#A99479]/20 to-[#B8A58D]/10 border border-[#A99479]/25 flex items-center justify-center text-[#3F382F] font-bold text-base sm:text-lg">
                        {testimonial.name.charAt(0)}
                      </div>

                      <div className="text-left">
                        <p className="text-[#3F382F] font-semibold text-xs sm:text-sm">
                          {testimonial.name}
                        </p>

                        <p className="text-[#3F382F]/90 text-[10px] sm:text-xs">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Smaller on mobile */}
          <button
            onClick={prevSlide}
            className="
              absolute
              -left-2 sm:-left-4
              top-1/2
              -translate-y-1/2
              w-8 h-8 sm:w-10 sm:h-10
              rounded-full
              border border-[#A99479]/30
              bg-white/60
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-[#3F382F]
              transition-all
              duration-300
              hover:border-[#A99479]/60
              hover:bg-[#A99479]/10
              hover:text-[#3F382F]
              hover:scale-110
            "
          >
            <ChevronLeft size={15} className="sm:w-[18px] sm:h-[18px]" />
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute
              -right-2 sm:-right-4
              top-1/2
              -translate-y-1/2
              w-8 h-8 sm:w-10 sm:h-10
              rounded-full
              border border-[#A99479]/30
              bg-white/60
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-[#3F382F]
              transition-all
              duration-300
              hover:border-[#A99479]/60
              hover:bg-[#A99479]/10
              hover:text-[#3F382F]
              hover:scale-110
            "
          >
            <ChevronRight size={15} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

        {/* Dot Indicators - Smaller on mobile */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                transition-all duration-300 rounded-full
                ${
                  index === currentIndex
                    ? 'w-6 sm:w-8 h-1 sm:h-1.5 bg-[#A99479] shadow-[0_0_10px_rgba(169,148,121,0.30)]'
                    : 'w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3F382F]/20 hover:bg-[#3F382F]/40'
                }
              `}
            />
          ))}
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-20px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(5px); }
        }

        @keyframes floatShape {
          0%,100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.15;
          }

          25% {
            transform: translateY(-20px) rotate(8deg);
            opacity: 0.4;
          }

          50% {
            transform: translateY(-40px) rotate(-8deg);
            opacity: 0.6;
          }

          75% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.4;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse-delayed {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </section>
  );
}