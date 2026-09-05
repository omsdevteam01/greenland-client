"use client";

import Image from "next/image";
import { Building2, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { mediaUrl } from "@/lib/media";

interface Project {
  id: number;
  image: string;
}

const constructionProjects: Project[] = [
  {
    id: 1,
    image: mediaUrl("images/cons5.png"),
  },
  {
    id: 2,
    image: mediaUrl("images/cons2.png"),
  },
  {
    id: 3,
    image: mediaUrl("images/cons7.png"),
  },
  {
    id: 4,
    image: mediaUrl("images/cons4.png"),
  },
  {
    id: 5,
    image: mediaUrl("images/cons1.jpg"),
  },
  {
    id: 6,
    image: mediaUrl("images/cons8.png"),
  },
  {
    id: 7,
    image: mediaUrl("images/cons3.png"),
  },
  {
    id: 8,
    image: mediaUrl("images/cons6.png"),
  },
];

const tensileProjects: Project[] = [
  {
    id: 13,
    image: mediaUrl("images/gl5.png"),
  },
  {
    id: 14,
    image: mediaUrl("images/gl1.png"),
  },
  {
    id: 15,
    image: mediaUrl("images/gl2.png"),
  },
  {
    id: 16,
    image: mediaUrl("images/gl3.png"),
  },
  {
    id: 17,
    image: mediaUrl("images/gl4.png"),
  },
  {
    id: 18,
    image: mediaUrl("images/gl6.png"),
  },
  {
    id: 19,
    image: mediaUrl("images/gl7.png"),
  },
  {
    id: 20,
    image: mediaUrl("images/gl8.png"),
  },
  {
    id: 21,
    image: mediaUrl("images/gl9.png"),
  },
  {
    id: 22,
    image: mediaUrl("images/gl10.png"),
  },
  {
    id: 23,
    image: mediaUrl("images/gl11.png"),
  },
  {
    id: 24,
    image: mediaUrl("images/gl12.png"),
  },
];

type Category = "construction" | "tensile";

export default function ProjectsPage() {
  /*
   * Default category for a first-time visitor.
   * The previously selected category is restored
   * from localStorage after the component mounts.
   */
  const [activeCategory, setActiveCategory] =
    useState<Category>("tensile");

  const [selectedImage, setSelectedImage] =
    useState<Project | null>(null);

  /*
   * Restore the last selected category after refresh.
   *
   * IMPORTANT:
   * The selected category is stored only for the current browser tab/session,
   * so a refresh keeps the selection, while leaving this page and returning
   * starts with the default Tensile category.
   */
  useEffect(() => {
    const savedCategory = sessionStorage.getItem(
      "projects-active-category"
    );

    if (
      savedCategory === "construction" ||
      savedCategory === "tensile"
    ) {
      setActiveCategory(savedCategory);
    }
  }, []);

  /*
   * Change category only when the user clicks a category.
   * The selected value is immediately saved for the current browser session.
   */
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);

    sessionStorage.setItem(
      "projects-active-category",
      category
    );
  };

  /*
   * Get projects for the currently selected category.
   */
  const activeProjects =
    activeCategory === "construction"
      ? constructionProjects
      : tensileProjects;

  /*
   * Close image modal with Escape key.
   * Disable page scrolling while modal is open.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <Header />

      <section className="relative w-full min-h-screen pt-12 sm:pt-16 pb-6 sm:pb-9 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#DCCBB5]/40 via-[#EDE4D5]/30 to-[#DCCBB5]/40" />

          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/15" />
        </div>

        {/* Glass Grid */}
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
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#A99479]/20 animate-float hidden md:block"
              style={{
                width: `${(i * 3) % 6 + 2}px`,
                height: `${(i * 3) % 6 + 2}px`,
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
                animationDuration: `${12 + (i % 5) * 2}s`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-[5]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-[#DCCBB5]/15 backdrop-blur-sm"
              style={{
                width: `${25 + i * 8}px`,
                height: `${25 + i * 8}px`,
                left: `${12 + i * 14}%`,
                top: `${12 + i * 11}%`,
                borderRadius: i % 2 === 0 ? "50%" : "8px",
                animation: `floatShape ${9 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
                transform: `rotate(${i * 45}deg)`,
                background:
                  "radial-gradient(circle, rgba(22,213,232,.08), transparent)",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <div
            className="text-center mb-4 sm:mb-6"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            }}
          >
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse" />

              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-[#927E64] animate-text-shimmer">
                Our Portfolio
              </span>

              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#A99479] animate-pulse-delayed" />
            </div>

            <h2 className="mt-1 sm:mt-2 text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#3F382F] animate-slide-up">
              Our <span className="text-[#A99479]">Projects</span>
            </h2>

            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
              <span className="w-8 sm:w-10 h-[2px] bg-[#A99479] animate-scale-x" />

              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 bg-[#A99479] animate-spin-slow" />

              <span className="w-8 sm:w-10 h-[2px] bg-[#A99479]/40 animate-scale-x-delayed" />
            </div>

            <p className="mt-1.5 sm:mt-2 max-w-2xl mx-auto text-center text-xs sm:text-sm md:text-base text-[#3F382F]/70 leading-relaxed animate-fade-in-delayed px-2">
              Explore our portfolio of completed construction projects and
              tensile shade structures showcasing excellence, innovation, and
              superior craftsmanship.
            </p>
          </div>

          {/* Main Category Buttons */}
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-4 mb-5 sm:mb-7"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.3s forwards",
            }}
          >
            {/* Tensile Shade - FIRST */}
            <button
              type="button"
              onClick={() => handleCategoryChange("tensile")}
              className={`w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-7 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "tensile"
                  ? "bg-[#A99479] text-white shadow-[0_0_30px_rgba(169,148,121,0.25)] scale-[1.02]"
                  : "border border-[#3F382F]/20 text-[#3F382F]/70 hover:text-[#3F382F] hover:border-[#A99479]/30 bg-white/30 backdrop-blur-sm"
              }`}
            >
              <Sun
                size={16}
                className="sm:w-[18px] sm:h-[18px]"
              />

              <span>Tensile Shade</span>

              <span
                className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === "tensile"
                    ? "bg-white/20 text-white"
                    : "bg-[#3F382F]/10 text-[#3F382F]/65"
                }`}
              >
                {tensileProjects.length}
              </span>
            </button>

            {/* Construction - SECOND */}
            <button
              type="button"
              onClick={() => handleCategoryChange("construction")}
              className={`w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-7 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "construction"
                  ? "bg-[#A99479] text-white shadow-[0_0_30px_rgba(169,148,121,0.25)] scale-[1.02]"
                  : "border border-[#3F382F]/20 text-[#3F382F]/70 hover:text-[#3F382F] hover:border-[#A99479]/30 bg-white/30 backdrop-blur-sm"
              }`}
            >
              <Building2
                size={16}
                className="sm:w-[18px] sm:h-[18px]"
              />

              <span>Construction</span>

              <span
                className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === "construction"
                    ? "bg-white/20 text-white"
                    : "bg-[#3F382F]/10 text-[#3F382F]/65"
                }`}
              >
                {constructionProjects.length}
              </span>
            </button>
          </div>

          {/* Image Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-5"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            {activeProjects.map((project, index) => (
              <button
                type="button"
                key={project.id}
                onClick={() => setSelectedImage(project)}
                aria-label="Open project image"
                className="group relative w-full rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/40 hover:border-[#A99479]/30 shadow-lg hover:shadow-[0_0_40px_rgba(63,56,47,0.10)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer text-left animate-slide-up"
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt="Project image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F382F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </button>
            ))}
          </div>

          {/* Project Count */}
          <div
            className="flex justify-center mt-5 sm:mt-7"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.6s forwards",
            }}
          >
            <div className="text-center">
              <p className="text-[#3F382F]/55 text-[10px] sm:text-sm flex items-center justify-center gap-2">
                <span className="w-6 sm:w-8 h-px bg-[#3F382F]/10" />

                Showing {activeProjects.length} projects

                <span className="w-6 sm:w-8 h-px bg-[#3F382F]/10" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden animate-scale-up shadow-[0_0_80px_rgba(63,56,47,0.12)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white border border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <X
                size={18}
                className="sm:w-5 sm:h-5 text-[#3F382F]"
              />
            </button>

            {/* Large Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src={selectedImage.image}
                alt="Project image"
                fill
                sizes="100vw"
                className="object-contain bg-black/10"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }

          25% {
            transform: translateY(-10px) translateX(5px);
          }

          50% {
            transform: translateY(-20px) translateX(-5px);
          }

          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes floatShape {
          0%,
          100% {
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

        @keyframes pulse-delayed {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(10px);
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

        @keyframes scale-x-delayed {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes text-shimmer {
          0%,
          100% {
            opacity: 0.8;
          }

          50% {
            opacity: 1;
            text-shadow: 0 0 20px rgba(169, 148, 121, 0.2);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse {
          animation: pulse-delayed 2s ease-in-out infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-text-shimmer {
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.4s forwards;
          transform-origin: left;
        }

        .animate-scale-x-delayed {
          animation: scale-x-delayed 0.8s ease-out 0.6s forwards;
          transform-origin: right;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }

        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </>
  );
}