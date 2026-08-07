"use client";

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  Clock,
  MessageSquare,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <>
      <Header />
      <section
        id="contact"
        className="relative overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12 w-full min-h-screen"
        ref={sectionRef}
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Background Glow Effects - Hidden on mobile */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow-delayed" />

        {/* Animated Gradient Orb - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl animate-orb" />

        {/* Floating Particles - Reduced on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-cyan-400/10 animate-float ${
                i < 8 ? 'block' : 'hidden md:block'
              }`}
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 12 + 8}s`,
                animationDelay: `${Math.random() * 8}s`,
                opacity: 0.2 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* Floating Shapes - Hidden on mobile */}
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/5 backdrop-blur-sm animate-float-shape"
              style={{
                width: `${Math.random() * 30 + 15}px`,
                height: `${Math.random() * 30 + 15}px`,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                borderRadius: i % 2 === 0 ? '50%' : '8px',
                animationDuration: `${Math.random() * 12 + 8}s`,
                animationDelay: `${Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                background: `radial-gradient(circle, rgba(22,213,232,.03), transparent)`,
              }}
            />
          ))}
        </div>

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

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* CENTER HEADER - Reduced spacing */}
          <div
            className="text-center mb-6 sm:mb-8 lg:mb-10"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            }}
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-text-shimmer">
                GET IN TOUCH
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
            </div>

            <h2 className="mt-1.5 sm:mt-3 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white animate-slide-up">
              Let's Build the Perfect
              <span className="block text-cyan-400 mt-0.5 sm:mt-1 animate-gradient-text">
                Solution for You
              </span>
            </h2>

            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
              <span className="w-8 sm:w-12 h-[2px] bg-cyan-400 animate-scale-x" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-cyan-400 flex-shrink-0 animate-spin-slow" />
              <span className="w-8 sm:w-12 h-[2px] bg-cyan-400/40 animate-scale-x-delayed" />
            </div>

            <p className="max-w-2xl mx-auto text-white/60 mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed px-2 animate-fade-in-delayed">
              Have a question or need a custom quote? Our team is here to help you with the best 
              solutions tailored to your construction needs.
            </p>
          </div>

          {/* MAIN CONTENT - Reduced gap */}
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* LEFT SIDE - Contact Cards */}
            <div
              className="w-full order-2 lg:order-1"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              }}
            >
              {/* Contact Cards - Mobile optimized */}
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    text: "+91 7708 7760 22",
                    link: "tel:+917708776022",
                    subtext: "Mon-Fri 9AM - 6PM",
                    iconBg: "bg-blue-400/10",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    text: "Info@gltgroup.com",
                    link: "mailto:Info@gltgroup.com",
                    subtext: "We reply within 24 hours",
                    iconBg: "bg-purple-400/10",
                  },
                  {
                    icon: MapPin,
                    title: "Our Location",
                    text: (
                      <>
                        3/72 swamimalai Main Road,
                        <br />
                        Baburajapuram, kumbakonam.
                      </>
                    ),
                    link: null,
                    subtext: "Visit our office",
                    iconBg: "bg-green-400/10",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const Wrapper = item.link ? "a" : "div";

                  return (
                    <Wrapper
                      key={index}
                      href={item.link || undefined}
                      className={`
                        group
                        flex
                        items-start
                        gap-3 sm:gap-4
                        p-3 sm:p-4
                        rounded-xl
                        bg-white/5
                        backdrop-blur-sm
                        border border-white/10
                        hover:bg-white/10
                        hover:border-cyan-400/30
                        hover:translate-x-1 sm:hover:translate-x-2
                        transition-all
                        duration-500
                        w-full
                        ${item.link ? 'cursor-pointer' : 'cursor-default'}
                        animate-slide-up-stagger
                      `}
                      style={{
                        animationDelay: `${index * 0.15}s`,
                      }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Card Glow Effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div
                        className={`
                          w-8 h-8 sm:w-10 sm:h-10
                          rounded-lg
                          ${item.iconBg}
                          border border-cyan-400/20
                          flex-shrink-0
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          group-hover:bg-cyan-400/20
                          transition-all
                          duration-500
                          ${hoveredCard === index ? 'animate-pulse-icon' : ''}
                        `}
                      >
                        <Icon
                          size={15}
                          className="sm:w-[18px] sm:h-[18px] text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-white text-xs sm:text-sm font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed break-words group-hover:text-white/80 transition-colors duration-300">
                          {item.text}
                        </p>
                        {item.subtext && (
                          <p className="text-white/30 text-[10px] sm:text-xs mt-0.5 flex items-center gap-1 group-hover:text-white/50 transition-colors duration-300">
                            <Clock size={8} className="sm:w-[10px] sm:h-[10px] animate-pulse-slow" />
                            {item.subtext}
                          </p>
                        )}
                      </div>

                      {item.link && (
                        <ArrowRight
                          size={12}
                          className="sm:w-[14px] sm:h-[14px] text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:rotate-[-10deg] transition-all duration-500 flex-shrink-0"
                        />
                      )}
                    </Wrapper>
                  );
                })}
              </div>

              {/* Working Hours - Mobile optimized */}
              <div
                className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,213,232,0.05)]"
                style={{
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.6s forwards",
                }}
              >
                <h4 className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
                  <Clock size={14} className="sm:w-4 sm:h-4 text-cyan-400 animate-spin-slow" />
                  Working Hours
                </h4>
                <div className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between text-white/50 hover:text-white/80 transition-colors duration-300">
                    <span>Monday - Friday</span>
                    <span className="text-white/70">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-white/50 hover:text-white/80 transition-colors duration-300">
                    <span>Saturday</span>
                    <span className="text-white/70">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-white/50 hover:text-white/80 transition-colors duration-300">
                    <span>Sunday</span>
                    <span className="text-white/70">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM - Mobile optimized, moves to top */}
            <div
              className="w-full order-1 lg:order-2"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.6s forwards",
              }}
            >
              <div
                className="
                  bg-white/5
                  backdrop-blur-xl
                  rounded-2xl
                  border border-white/10
                  shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_8px_40px_rgba(22,213,232,0.05)]
                  transition-all
                  duration-500
                  p-4 sm:p-6 md:p-8
                  w-full
                  max-w-sm
                  mx-auto
                  hover:-translate-y-1
                  relative
                "
              >
                {/* Glass reflection */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/3 to-transparent pointer-events-none" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 hover:border-cyan-400/20 transition-all duration-700 pointer-events-none" />

                {/* Form Header - Compact */}
                <div className="mb-3 sm:mb-4 md:mb-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight flex items-center gap-1.5 sm:gap-2">
                    Send Us a Message
                    <Sparkles size={14} className="sm:w-4 sm:h-4 text-cyan-400 animate-pulse-slow" />
                  </h3>
                  <div className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent mt-1.5 sm:mt-2" />
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1.5 sm:mt-2 flex items-center gap-1">
                    <MessageSquare size={10} className="sm:w-3 sm:h-3 animate-pulse-slow" />
                    We'll get back within 24 hours
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-6 sm:py-8 space-y-2 sm:space-y-3 animate-fade-in">
                    <div className="relative">
                      <CheckCircle size={36} className="sm:w-12 sm:h-12 text-cyan-400 animate-bounce-in" />
                      <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping-slow" />
                    </div>
                    <h4 className="text-white font-semibold text-base sm:text-lg animate-slide-up">Message Sent!</h4>
                    <p className="text-white/50 text-xs sm:text-sm text-center animate-fade-in-delayed">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form className="w-full space-y-2.5 sm:space-y-3" onSubmit={handleSubmit}>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="
                          w-full
                          h-[38px] sm:h-[42px]
                          rounded-lg
                          border border-white/10
                          bg-white/5
                          px-3 sm:px-4
                          text-xs sm:text-sm
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-cyan-400/50
                          focus:ring-2
                          focus:ring-cyan-400/20
                          placeholder:text-white/30
                          hover:border-white/20
                          group-hover:border-white/20
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="
                          w-full
                          h-[38px] sm:h-[42px]
                          rounded-lg
                          border border-white/10
                          bg-white/5
                          px-3 sm:px-4
                          text-xs sm:text-sm
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-cyan-400/50
                          focus:ring-2
                          focus:ring-cyan-400/20
                          placeholder:text-white/30
                          hover:border-white/20
                          group-hover:border-white/20
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    <div className="relative group">
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="
                          w-full
                          h-[38px] sm:h-[42px]
                          rounded-lg
                          border border-white/10
                          bg-white/5
                          px-3 sm:px-4
                          text-xs sm:text-sm
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-cyan-400/50
                          focus:ring-2
                          focus:ring-cyan-400/20
                          placeholder:text-white/30
                          hover:border-white/20
                          group-hover:border-white/20
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    <div className="relative group">
                      <select
                        className="
                          w-full
                          h-[38px] sm:h-[42px]
                          rounded-lg
                          border border-white/10
                          bg-white/5
                          px-3 sm:px-4
                          text-xs sm:text-sm
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-cyan-400/50
                          focus:ring-2
                          focus:ring-cyan-400/20
                          hover:border-white/20
                          group-hover:border-white/20
                          appearance-none
                        "
                      >
                        <option value="" className="bg-[#03141C]">Select Service</option>
                        <option value="residential" className="bg-[#03141C]">Residential Construction</option>
                        <option value="commercial" className="bg-[#03141C]">Commercial Construction</option>
                        <option value="industrial" className="bg-[#03141C]">Industrial Construction</option>
                        <option value="steel" className="bg-[#03141C]">Steel Fabrication</option>
                        <option value="engineering" className="bg-[#03141C]">Engineering Solutions</option>
                        <option value="renovation" className="bg-[#03141C]">Renovation & Remodeling</option>
                        <option value="other" className="bg-[#03141C]">Other</option>
                      </select>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    <div className="relative group">
                      <textarea
                        placeholder="Your Message"
                        required
                        rows={3}
                        className="
                          w-full
                          h-[80px] sm:h-[100px]
                          rounded-lg
                          border border-white/10
                          bg-white/5
                          p-3 sm:p-4
                          text-xs sm:text-sm
                          resize-none
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-cyan-400/50
                          focus:ring-2
                          focus:ring-cyan-400/20
                          placeholder:text-white/30
                          hover:border-white/20
                          group-hover:border-white/20
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    <button
                      type="submit"
                      className="
                        w-full
                        h-[40px] sm:h-[46px]
                        flex
                        items-center
                        justify-center
                        gap-1.5 sm:gap-2
                        bg-gradient-to-r from-cyan-400 to-cyan-500
                        text-[#03141C]
                        rounded-lg
                        font-semibold
                        text-xs sm:text-sm
                        shadow-[0_0_30px_rgba(22,213,232,0.15)]
                        hover:shadow-[0_0_40px_rgba(22,213,232,0.25)]
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        group
                        relative
                        overflow-hidden
                      "
                    >
                      <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10">Send Message</span>
                      <Send
                        size={14}
                        className="sm:w-4 sm:h-4 relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-[-10deg]"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-8px) translateX(4px); }
            50% { transform: translateY(-16px) translateX(-4px); }
            75% { transform: translateY(-8px) translateX(4px); }
          }

          @keyframes float-shape {
            0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
            25% { transform: translateY(-15px) rotate(6deg); opacity: 0.4; }
            50% { transform: translateY(-30px) rotate(-6deg); opacity: 0.6; }
            75% { transform: translateY(-15px) rotate(4deg); opacity: 0.4; }
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
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(10px); }
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

          @keyframes text-shimmer {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; text-shadow: 0 0 20px rgba(22,213,232,0.3); }
          }

          @keyframes gradient-text {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
          }

          @keyframes bounce-in {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.2); opacity: 1; }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
          }

          @keyframes orb {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
          }

          .animate-float { animation: float linear infinite; }
          .animate-float-shape { animation: float-shape ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
          .animate-pulse-glow-delayed { animation: pulse-glow 4s ease-in-out infinite; animation-delay: 2s; }
          .animate-pulse { animation: pulse-delayed 2s ease-in-out infinite; }
          .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite; animation-delay: 0.5s; }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.4s forwards; opacity: 0; }
          .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
          .animate-scale-x-delayed { animation: scale-x-delayed 0.8s ease-out 0.6s forwards; transform-origin: right; }
          .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
          .animate-gradient-text { background-size: 200% 200%; animation: gradient-text 4s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 4s linear infinite; }
          .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
          .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
          .animate-ping-slow { animation: ping-slow 2s ease-in-out infinite; }
          .animate-orb { animation: orb 6s ease-in-out infinite; }
          .animate-slide-up { animation: slide-up 0.6s ease-out 0.4s forwards; opacity: 0; }
          .animate-slide-up-stagger { opacity: 0; animation: slide-up 0.6s ease-out forwards; }

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