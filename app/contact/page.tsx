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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      ?.replace(/\\D/g, "");

    if (!whatsappNumber) {
      console.error(
        "NEXT_PUBLIC_WHATSAPP_NUMBER is not configured in .env.local"
      );
      return;
    }

    const whatsappMessage = [
      "Hello Greenland Tensile Shade,",
      "",
      "I would like to enquire about your services.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      "Thank you.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Clear all typed values before leaving the Contact page.
    // This also prevents the browser from restoring the old form
    // values when the user returns to this page.
    e.currentTarget.reset();
    setFormSubmitted(false);

    // Redirect directly to WhatsApp.
    // On mobile this opens the WhatsApp app when available;
    // otherwise it opens WhatsApp Web in the browser.
    window.location.assign(whatsappUrl);
  };

  return (
    <>
      <Header />
      <section
        id="contact"
        className="relative overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12 w-full min-h-screen"
        ref={sectionRef}
      >
        {/* Background - Same as Business Section */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#DCCBB5]/40 via-[#EDE4D5]/30 to-[#DCCBB5]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/15"></div>
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
              className="absolute border border-[#DCCBB5]/20 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 40 + 15}px`,
                height: `${Math.random() * 40 + 15}px`,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                borderRadius: i % 2 === 0 ? '50%' : '8px',
                animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                background: `radial-gradient(circle, rgba(169,148,121,.08), transparent)`,
              }}
            />
          ))}
        </div>

        {/* Background Glow Effects */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-[#A99479]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#A99479]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow-delayed" />

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* CENTER HEADER */}
          <div
            className="text-center mb-6 sm:mb-8 lg:mb-10"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            }}
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse"></span>
              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-[#927E64] animate-text-shimmer">
                GET IN TOUCH
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse-delayed"></span>
            </div>

            <h2 className="mt-1.5 sm:mt-3 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-[#3F382F] animate-slide-up">
              Let's Build the Perfect
              <span className="block text-[#A99479] mt-0.5 sm:mt-1">
                Solution for You
              </span>
            </h2>

            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
              <span className="w-8 sm:w-12 h-[2px] bg-[#A99479] animate-scale-x" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#A99479] flex-shrink-0 animate-spin-slow" />
              <span className="w-8 sm:w-12 h-[2px] bg-[#A99479]/40 animate-scale-x-delayed" />
            </div>

            <p className="max-w-2xl mx-auto text-[#3F382F]/75 mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed px-2 animate-fade-in-delayed">
              Have a question or need a custom quote? Our team is here to help you with the best 
              solutions tailored to your construction needs.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* LEFT SIDE - Contact Cards */}
            <div
              className="w-full order-2 lg:order-1"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              }}
            >
              {/* Contact Cards */}
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    text: "+91 7708 7760 22",
                    link: "tel:+917708776022",
                    subtext: "Mon-Fri 9AM - 6PM",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    text: "Info@gltgroup.com",
                    link: "mailto:Info@gltgroup.com",
                    subtext: "We reply within 24 hours",
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
                        bg-white/30
                        backdrop-blur-sm
                        border border-white/40
                        hover:bg-white/40
                        hover:border-[#A99479]/40
                        hover:translate-x-1 sm:hover:translate-x-2
                        transition-all
                        duration-500
                        w-full
                        ${item.link ? 'cursor-pointer' : 'cursor-default'}
                      `}
                      style={{
                        animationDelay: `${index * 0.15}s`,
                      }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Card Glow Effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#A99479]/0 via-[#A99479]/5 to-[#A99479]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div
                        className={`
                          w-8 h-8 sm:w-10 sm:h-10
                          rounded-lg
                          bg-[#A99479]/10
                          border border-[#A99479]/20
                          flex-shrink-0
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          group-hover:bg-[#A99479]/20
                          transition-all
                          duration-500
                          ${hoveredCard === index ? 'animate-pulse-icon' : ''}
                        `}
                      >
                        <Icon
                          size={15}
                          className="sm:w-[18px] sm:h-[18px] text-[#A99479] group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-[#3F382F] text-xs sm:text-sm font-semibold group-hover:text-[#927E64] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-[#3F382F]/80 text-xs sm:text-sm leading-relaxed break-words group-hover:text-[#3F382F]/80 transition-colors duration-300">
                          {item.text}
                        </p>
                        {item.subtext && (
                          <p className="text-[#3F382F]/70 text-[10px] sm:text-xs mt-0.5 flex items-center gap-1 group-hover:text-[#3F382F]/80 transition-colors duration-300">
                            <Clock size={8} className="sm:w-[10px] sm:h-[10px] animate-pulse-slow" />
                            {item.subtext}
                          </p>
                        )}
                      </div>

                      {item.link && (
                        <ArrowRight
                          size={12}
                          className="sm:w-[14px] sm:h-[14px] text-[#3F382F]/35 group-hover:text-[#A99479] group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:rotate-[-10deg] transition-all duration-500 flex-shrink-0"
                        />
                      )}
                    </Wrapper>
                  );
                })}
              </div>

              {/* Working Hours */}
              <div
                className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/40 hover:border-[#A99479]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(169,148,121,0.05)]"
                style={{
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.6s forwards",
                }}
              >
                <h4 className="text-[#3F382F] font-semibold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
                  <Clock size={14} className="sm:w-4 sm:h-4 text-[#A99479] animate-spin-slow" />
                  Working Hours
                </h4>
                <div className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between text-[#3F382F]/75 hover:text-[#3F382F]/80 transition-colors duration-300">
                    <span>Monday - Friday</span>
                    <span className="text-[#3F382F]/70">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#3F382F]/75 hover:text-[#3F382F]/80 transition-colors duration-300">
                    <span>Saturday</span>
                    <span className="text-[#3F382F]/70">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#3F382F]/75 hover:text-[#3F382F]/80 transition-colors duration-300">
                    <span>Sunday</span>
                    <span className="text-[#3F382F]/70">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              className="w-full order-1 lg:order-2"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.6s forwards",
              }}
            >
              <div
                className="
                  bg-white/30
                  backdrop-blur-xl
                  rounded-2xl
                  border border-white/40
                  shadow-[0_8px_32px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_8px_40px_rgba(169,148,121,0.08)]
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border border-[#A99479]/0 hover:border-[#A99479]/20 transition-all duration-700 pointer-events-none" />

                {/* Form Header */}
                <div className="mb-3 sm:mb-4 md:mb-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#3F382F] leading-tight flex items-center gap-1.5 sm:gap-2">
                    Send Us a Message
                    <Sparkles size={14} className="sm:w-4 sm:h-4 text-[#A99479] animate-pulse-slow" />
                  </h3>
                  <div className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-[#A99479] to-transparent mt-1.5 sm:mt-2" />
                  <p className="text-[#3F382F]/70 text-[10px] sm:text-xs mt-1.5 sm:mt-2 flex items-center gap-1">
                    <MessageSquare size={10} className="sm:w-3 sm:h-3 animate-pulse-slow" />
                    We'll get back within 24 hours
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-6 sm:py-8 space-y-2 sm:space-y-3 animate-fade-in">
                    <div className="relative">
                      <CheckCircle size={36} className="sm:w-12 sm:h-12 text-[#A99479] animate-bounce-in" />
                      <div className="absolute inset-0 rounded-full bg-[#A99479]/20 animate-ping-slow" />
                    </div>
                    <h4 className="text-[#3F382F] font-semibold text-base sm:text-lg animate-slide-up">WhatsApp Opened!</h4>
                    <p className="text-[#3F382F]/75 text-xs sm:text-sm text-center animate-fade-in-delayed">
                      Your message is ready in WhatsApp. Please press Send to complete your enquiry.
                    </p>
                  </div>
                ) : (
                  <form className="w-full space-y-2.5 sm:space-y-3" onSubmit={handleSubmit}>
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="
                          w-full
                          h-[38px] sm:h-[42px]
                          rounded-lg
                          border border-[#3F382F]/20
                          bg-white/20
                          px-3 sm:px-4
                          text-xs sm:text-sm
                          text-[#3F382F]
                          outline-none
                          transition-all
                          duration-300
                          focus:border-[#A99479]/50
                          focus:ring-2
                          focus:ring-[#A99479]/20
                          placeholder:text-[#3F382F]/70
                          hover:border-[#3F382F]/30
                          group-hover:border-[#3F382F]/30
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A99479] to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="
                          w-full
                          h-[38px] sm:h-[42px]
                          rounded-lg
                          border border-[#3F382F]/20
                          bg-white/20
                          px-3 sm:px-4
                          text-xs sm:text-sm
                          text-[#3F382F]
                          outline-none
                          transition-all
                          duration-300
                          focus:border-[#A99479]/50
                          focus:ring-2
                          focus:ring-[#A99479]/20
                          placeholder:text-[#3F382F]/70
                          hover:border-[#3F382F]/30
                          group-hover:border-[#3F382F]/30
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A99479] to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="
                          w-full
                          h-[38px] sm:h-[42px]
                          rounded-lg
                          border border-[#3F382F]/20
                          bg-white/20
                          px-3 sm:px-4
                          text-xs sm:text-sm
                          text-[#3F382F]
                          outline-none
                          transition-all
                          duration-300
                          focus:border-[#A99479]/50
                          focus:ring-2
                          focus:ring-[#A99479]/20
                          placeholder:text-[#3F382F]/70
                          hover:border-[#3F382F]/30
                          group-hover:border-[#3F382F]/30
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A99479] to-transparent group-focus-within:w-full transition-all duration-500" />
                    </div>

                    

                    <div className="relative group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows={3}
                        className="
                          w-full
                          h-[80px] sm:h-[100px]
                          rounded-lg
                          border border-[#3F382F]/20
                          bg-white/20
                          p-3 sm:p-4
                          text-xs sm:text-sm
                          resize-none
                          text-[#3F382F]
                          outline-none
                          transition-all
                          duration-300
                          focus:border-[#A99479]/50
                          focus:ring-2
                          focus:ring-[#A99479]/20
                          placeholder:text-[#3F382F]/70
                          hover:border-[#3F382F]/30
                          group-hover:border-[#3F382F]/30
                        "
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A99479] to-transparent group-focus-within:w-full transition-all duration-500" />
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
                        bg-[#A99479]
                        hover:bg-[#927E64]
                        text-white
                        rounded-lg
                        font-semibold
                        text-xs sm:text-sm
                        shadow-[0_0_30px_rgba(169,148,121,0.15)]
                        hover:shadow-[0_0_40px_rgba(169,148,121,0.25)]
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
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-20px) translateX(-5px); }
            75% { transform: translateY(-10px) translateX(5px); }
          }
          
          @keyframes floatShape {
            0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
            25% { transform: translateY(-20px) rotate(8deg); opacity: 0.4; }
            50% { transform: translateY(-40px) rotate(-8deg); opacity: 0.6; }
            75% { transform: translateY(-20px) rotate(5deg); opacity: 0.4; }
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
            50% { opacity: 1; text-shadow: 0 0 20px rgba(169,148,121,0.2); }
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

          .animate-float { animation: float linear infinite; }
          .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
          .animate-pulse-glow-delayed { animation: pulse-glow 4s ease-in-out infinite; animation-delay: 2s; }
          .animate-pulse { animation: pulse-delayed 2s ease-in-out infinite; }
          .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite; animation-delay: 0.5s; }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.4s forwards; opacity: 0; }
          .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
          .animate-scale-x-delayed { animation: scale-x-delayed 0.8s ease-out 0.6s forwards; transform-origin: right; }
          .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 4s linear infinite; }
          .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
          .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
          .animate-ping-slow { animation: ping-slow 2s ease-in-out infinite; }
          .animate-slide-up { animation: slide-up 0.6s ease-out 0.4s forwards; opacity: 0; }

          @keyframes mobile-pop {
            0% { transform: scale(1); }
            35% { transform: scale(0.96); }
            65% { transform: scale(1.025); }
            100% { transform: scale(1); }
          }

          @media (hover: none) and (pointer: coarse) {
            #contact a,
            #contact button,
            #contact input,
            #contact textarea,
            #contact select {
              touch-action: manipulation;
              -webkit-tap-highlight-color: transparent;
            }

            #contact a:active,
            #contact button:active {
              animation: mobile-pop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            #contact input:focus,
            #contact textarea:focus,
            #contact select:focus {
              transform: scale(1.01);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            #contact *,
            #contact *::before,
            #contact *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }

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