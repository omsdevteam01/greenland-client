"use client";

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
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

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
      /\D/g,
      ""
    );

    if (!whatsappNumber) {
      console.error("NEXT_PUBLIC_WHATSAPP_NUMBER is not configured.");
      return;
    }

    const whatsappMessage = `Hello Greenland Tensile Shade,

I would like to enquire about your services.

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}

Thank you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Clear the form before leaving the page.
    form.reset();

    // Directly redirect to WhatsApp.
    window.location.assign(whatsappUrl);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-10 md:pb-10 w-full"
      ref={sectionRef}
    >
      {/* Background - Same as Business Section */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/40 via-cyan-300/30 to-blue-400/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/15"></div>
      </div>

      {/* Glassy Grid Pattern - Same as Business Section */}
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

      {/* Animated Particles - Same as Business Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#16D5E8]/20 animate-float hidden md:block"
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

      {/* Floating Shapes - Same as Business Section */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/15 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              animation: `floatShape ${Math.random() * 12 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: `radial-gradient(circle, rgba(22,213,232,.08), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Background Glow Effects */}
      <div
        className="hidden md:block absolute -top-40 -right-20 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
      />
      <div
        className="hidden md:block absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow-delayed"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CENTER HEADER */}
        <div
          className="text-center mb-4 sm:mb-5"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out 0.2s forwards",
          }}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-600 animate-pulse"></span>
            <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-700">
              GET IN TOUCH
            </span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-600 animate-pulse-delayed"></span>
          </div>

          <h2 className="mt-1.5 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#001a1f]">
            Let's Build the Perfect
            <span className="block text-cyan-600 mt-0.5">
              Solution for You
            </span>
          </h2>

          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
            <span className="w-8 sm:w-10 h-[2px] bg-cyan-600" />
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rotate-45 bg-cyan-600 flex-shrink-0" />
            <span className="w-8 sm:w-10 h-[2px] bg-cyan-600/40" />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-4 sm:gap-6 lg:gap-10 items-start">
          {/* LEFT SIDE - Moves below form on mobile */}
          <div
            className="w-full order-2 lg:order-1"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            {/* Description */}
            <p className="text-[#001a1f]/60 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-3 max-w-md">
              Have a question or need a custom quote?
              Our team is here to help you with the best solutions tailored to your needs.
            </p>

            {/* Contact Cards */}
            <div className="space-y-1.5 sm:space-y-2">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  text: "+91 7708 7760 22",
                  link: "tel:+917708776022",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  text: "Info@gltgroup.com",
                  link: "mailto:Info@gltgroup.com",
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
                      gap-2.5 sm:gap-3
                      p-2 sm:p-2.5
                      rounded-lg
                      bg-white/30
                      backdrop-blur-sm
                      border border-white/40
                      hover:bg-white/40
                      hover:border-cyan-600/30
                      hover:translate-x-1.5
                      transition-all
                      duration-300
                      w-full
                      ${item.link ? 'cursor-pointer' : 'cursor-default'}
                    `}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    <div
                      className="
                        w-7 h-7 sm:w-8 sm:h-8
                        rounded-lg
                        bg-cyan-600/10
                        border border-cyan-600/20
                        flex-shrink-0
                        flex
                        items-center
                        justify-center
                        group-hover:scale-110
                        group-hover:bg-cyan-600/20
                        transition-all
                        duration-300
                      "
                    >
                      <Icon
                        size={13}
                        className="sm:w-[15px] sm:h-[15px] text-cyan-700"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-[#001a1f] text-[11px] sm:text-xs font-semibold group-hover:text-cyan-700 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[#001a1f]/50 text-[11px] sm:text-xs leading-relaxed break-words group-hover:text-[#001a1f]/70 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>

                    {item.link && (
                      <ArrowRight
                        size={11}
                        className="sm:w-3 sm:h-3 text-[#001a1f]/20 group-hover:text-cyan-700 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                      />
                    )}
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* RIGHT FORM - Compact - Moves to top on mobile */}
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
                rounded-xl
                border border-white/40
                shadow-[0_8px_32px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_40px_rgba(6,182,212,0.08)]
                transition-all
                duration-500
                p-3 sm:p-4
                w-full
                max-w-sm
                mx-auto
                relative
              "
            >
              {/* Glass reflection */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

              {/* Form Header - Compact */}
              <div className="mb-2.5 sm:mb-3">
                <h3 className="text-sm sm:text-base font-bold text-[#001a1f] leading-tight">
                  Send Us a Message
                </h3>
                <div className="w-6 sm:w-8 h-[2px] bg-cyan-600 mt-1" />
                <p className="text-[#001a1f]/40 text-[9px] sm:text-[10px] mt-1">
                  We'll get back within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full space-y-1.5 sm:space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    h-[32px] sm:h-[34px]
                    rounded-lg
                    border border-[#001a1f]/20
                    bg-white/20
                    px-2.5 sm:px-3
                    text-[11px] sm:text-xs
                    text-[#001a1f]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-600/50
                    focus:ring-2
                    focus:ring-cyan-600/20
                    placeholder:text-[#001a1f]/40
                    hover:border-[#001a1f]/30
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    h-[32px] sm:h-[34px]
                    rounded-lg
                    border border-[#001a1f]/20
                    bg-white/20
                    px-2.5 sm:px-3
                    text-[11px] sm:text-xs
                    text-[#001a1f]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-600/50
                    focus:ring-2
                    focus:ring-cyan-600/20
                    placeholder:text-[#001a1f]/40
                    hover:border-[#001a1f]/30
                  "
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  className="
                    w-full
                    h-[32px] sm:h-[34px]
                    rounded-lg
                    border border-[#001a1f]/20
                    bg-white/20
                    px-2.5 sm:px-3
                    text-[11px] sm:text-xs
                    text-[#001a1f]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-600/50
                    focus:ring-2
                    focus:ring-cyan-600/20
                    placeholder:text-[#001a1f]/40
                    hover:border-[#001a1f]/30
                  "
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="
                    w-full
                    h-[50px] sm:h-[60px]
                    rounded-lg
                    border border-[#001a1f]/20
                    bg-white/20
                    p-2.5 sm:p-3
                    text-[11px] sm:text-xs
                    resize-none
                    text-[#001a1f]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-600/50
                    focus:ring-2
                    focus:ring-cyan-600/20
                    placeholder:text-[#001a1f]/40
                    hover:border-[#001a1f]/30
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    h-[34px] sm:h-[36px]
                    flex
                    items-center
                    justify-center
                    gap-1.5 sm:gap-2
                    bg-cyan-600
                    text-white
                    rounded-lg
                    font-semibold
                    text-[11px] sm:text-xs
                    shadow-[0_0_30px_rgba(6,182,212,0.15)]
                    hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]
                    hover:-translate-y-0.5
                    hover:bg-cyan-700
                    transition-all
                    duration-300
                    group
                    touch-manipulation
                    active:scale-[0.97]
                  "
                >
                  <span>Send Message</span>
                  <Send
                    size={12}
                    className="sm:w-[13px] sm:h-[13px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-16px) translateX(-4px); }
          75% { transform: translateY(-8px) translateX(4px); }
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

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse {
          animation: pulse-delayed 2s ease-in-out infinite;
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