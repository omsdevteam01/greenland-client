"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid3x3, LayoutList, Search, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Residential",
    image: "/images/villa.png",
    slug: "modern-villa",
    description: "Modern luxury villas with premium amenities and sustainable design.",
    fullDescription: "This stunning modern villa features contemporary architecture, sustainable materials, and premium amenities. The open-plan living spaces seamlessly connect indoor and outdoor areas, creating a perfect harmony with nature.",
    features: ["Smart Home Technology", "Sustainable Materials", "Infinity Pool", "Home Automation", "Energy Efficient"],
  },
  {
    id: 2,
    title: "Luxury Duplex House",
    category: "Residential",
    image: "/images/luxury.png",
    slug: "luxury-duplex-house",
    description: "Spacious duplex with premium finishes and modern design.",
    fullDescription: "A beautifully designed duplex house with premium finishes, modern aesthetics, and thoughtful spaces. The double-height living room and large windows bring in abundant natural light.",
    features: ["Double Height Living", "Premium Finishes", "Home Theater", "Garden Terrace", "Smart Lighting"],
  },
  {
    id: 3,
    title: "SR Complex",
    category: "Residential",
    image: "/images/project3.jpg",
    slug: "sr-complex",
    description: "Modern residential complex with premium amenities and sustainable design.",
    fullDescription: "SR Complex is a modern residential development offering premium living spaces with world-class amenities. The project focuses on sustainable design and community living.",
    features: ["Clubhouse", "Swimming Pool", "Gymnasium", "Landscaped Gardens", "24/7 Security"],
  },
  {
    id: 4,
    title: "Contemporary Home",
    category: "Residential",
    image: "/images/project4.jpg",
    slug: "contemporary-home",
    description: "Elegant contemporary home with innovative design and premium finishes.",
    fullDescription: "This contemporary home combines modern design with functional living spaces. The clean lines, natural materials, and open spaces create a warm and inviting atmosphere.",
    features: ["Modern Design", "Open Floor Plan", "Large Windows", "Sustainable Materials", "Smart Home"],
  },
  {
    id: 5,
    title: "Premium Interior",
    category: "Interior",
    image: "/images/interior.png",
    slug: "premium-interior",
    description: "Luxury interior design with premium finishes and modern aesthetics.",
    fullDescription: "A premium interior design project featuring luxury finishes, modern aesthetics, and thoughtful spatial planning. Every detail is carefully curated for elegance and comfort.",
    features: ["Luxury Finishes", "Modern Design", "Custom Furniture", "Premium Lighting", "Home Automation"],
  },
  {
    id: 6,
    title: "Home Renovation",
    category: "Renovation",
    image: "/images/home.png",
    slug: "home-renovation",
    description: "Complete home renovation with modern upgrades and contemporary design.",
    fullDescription: "A comprehensive home renovation project transforming a traditional space into a modern masterpiece. The renovation includes structural changes, modern finishes, and energy-efficient upgrades.",
    features: ["Structural Changes", "Modern Finishes", "Energy Efficient", "New Kitchen", "Bathroom Upgrades"],
  },
  {
    id: 7,
    title: "ABC Office Building",
    category: "Commercial",
    image: "/images/office.png",
    slug: "abc-office-building",
    description: "State-of-the-art office space with innovative architectural design.",
    fullDescription: "ABC Office Building is a state-of-the-art commercial space featuring innovative design, sustainable infrastructure, and modern amenities. The building sets new standards for workplace excellence.",
    features: ["Green Building", "Smart Office", "Collaborative Spaces", "Sustainable Design", "Modern Amenities"],
  },
  {
    id: 8,
    title: "Farm House",
    category: "Residential",
    image: "/images/farm.png",
    slug: "farm-house",
    description: "Spacious farm house with premium amenities and sustainable design.",
    fullDescription: "A spacious farm house designed for peaceful living amidst nature. The property features sustainable design, organic gardens, and modern comforts.",
    features: ["Organic Gardens", "Sustainable Design", "Pool", "Outdoor Living", "Eco-Friendly"],
  },
  {
    id: 9,
    title: "Interior Project",
    category: "Interior",
    image: "/images/inte.png",
    slug: "interior-project",
    description: "Modern interior design with premium finishes and contemporary aesthetics.",
    fullDescription: "A modern interior design project featuring premium finishes, contemporary aesthetics, and thoughtful spatial planning.",
    features: ["Modern Design", "Premium Finishes", "Custom Furniture", "Smart Lighting", "Home Automation"],
  },
  {
    id: 10,
    title: "Renovation Project",
    category: "Renovation",
    image: "/images/reno.png",
    slug: "renovation-project",
    description: "Complete renovation with modern upgrades and contemporary design.",
    fullDescription: "A comprehensive renovation project transforming an outdated space into a modern living environment with premium finishes and smart features.",
    features: ["Complete Renovation", "Modern Finishes", "Smart Features", "New Interiors", "Energy Efficient"],
  },
  {
    id: 11,
    title: "Commercial Project",
    category: "Commercial",
    image: "/images/commercial.png",
    slug: "commercial-project",
    description: "Modern commercial project with innovative design and sustainable features.",
    fullDescription: "A modern commercial project featuring innovative design, sustainable features, and premium amenities.",
    features: ["Innovative Design", "Sustainable Features", "Modern Amenities", "Green Building", "Smart Infrastructure"],
  },
  {
    id: 12,
    title: "Residential Project",
    category: "Residential",
    image: "/images/residential.png",
    slug: "residential-project",
    description: "Premium residential project with modern design and luxury amenities.",
    fullDescription: "A premium residential project featuring modern design, luxury amenities, and sustainable living spaces.",
    features: ["Modern Design", "Luxury Amenities", "Sustainable Living", "Smart Home", "Premium Finishes"],
  },
];

const categories = ["All Projects", "Residential", "Commercial", "Interior", "Renovation"];

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Projects");
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

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All Projects" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <section className="relative w-full min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden" ref={sectionRef}
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Background Glow - Hidden on mobile */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        {/* Glassy Grid Pattern - Hidden on mobile */}
        <div
          className="hidden md:block absolute inset-0 opacity-[0.02] z-[5]"
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

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Header - Reduced spacing */}
          <div
            className="text-center mb-6 sm:mb-8"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            }}
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[8px] sm:text-[10px] font-semibold text-cyan-300 animate-text-shimmer">
                Our Portfolio
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse-delayed"></span>
            </div>

            <h2 className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white animate-slide-up">
              Our <span
                className="text-transparent bg-clip-text animate-gradient-text"
                style={{
                  background: "linear-gradient(135deg, #16D5E8 0%, #0EA5E9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projects
              </span>
            </h2>

            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-1.5 sm:mt-3">
              <span className="w-8 sm:w-10 h-[2px] bg-cyan-400 animate-scale-x" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 bg-cyan-400 animate-spin-slow" />
              <span className="w-8 sm:w-10 h-[2px] bg-cyan-400/40 animate-scale-x-delayed" />
            </div>

            <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-center text-xs sm:text-sm md:text-base text-white/60 leading-relaxed animate-fade-in-delayed px-2">
              Explore our portfolio of completed construction projects showcasing excellence,
              innovation, and superior craftsmanship.
            </p>
          </div>

          {/* Category Filter - Mobile optimized */}
          <div
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.3s forwards",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-cyan-400 text-[#03141C] shadow-[0_0_20px_rgba(22,213,232,0.2)]"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-white/20 bg-white/5 backdrop-blur-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search and View Controls - Mobile optimized */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            {/* Search Bar */}
            <div className="relative w-full max-w-xs group">
              <Search size={16} className="sm:w-[18px] sm:h-[18px] absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-cyan-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-9 sm:px-10 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-white/20"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-focus-within:w-full transition-all duration-500" />
            </div>

            {/* Project Count & View Mode */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-white/30 text-[11px] sm:text-sm flex items-center gap-1">
                <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] text-cyan-400 animate-pulse-slow" />
                {filteredProjects.length} Projects
              </span>
              
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-cyan-400 text-[#03141C] shadow-sm scale-105"
                      : "text-white/40 hover:text-white/60 hover:scale-105"
                  }`}
                >
                  <Grid3x3 size={14} className="sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-cyan-400 text-[#03141C] shadow-sm scale-105"
                      : "text-white/40 hover:text-white/60 hover:scale-105"
                  }`}
                >
                  <LayoutList size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid/List - Mobile optimized */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-8 sm:py-12 animate-fade-in">
              <p className="text-white/40 text-sm sm:text-base">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6"
                  : "space-y-3 sm:space-y-4"
              }
            >
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className={`group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 shadow-lg hover:shadow-[0_0_40px_rgba(22,213,232,0.05)] transition-all duration-500 ${
                    viewMode === "grid"
                      ? "hover:-translate-y-2 hover:scale-[1.02]"
                      : "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-3 sm:p-4 hover:translate-x-2"
                  } animate-slide-up relative`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Shimmer Effect - Hidden on mobile */}
                  <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "grid"
                        ? "aspect-[4/3] w-full"
                        : "w-full sm:w-32 h-48 sm:h-32 flex-shrink-0 rounded-xl"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-medium bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/20 text-cyan-300 animate-pulse-slow">
                      {project.category}
                    </span>
                  </div>

                  {/* Content - No location or year */}
                  <div
                    className={
                      viewMode === "grid"
                        ? "px-3 sm:px-4 py-2 sm:py-3"
                        : "flex-1 px-2 sm:px-0"
                    }
                  >
                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                      <span className="text-[9px] sm:text-xs font-medium text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {viewMode === "list" && (
                      <p className="text-xs sm:text-sm text-white/50 mt-0.5 sm:mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-sm font-medium text-cyan-400 hover:text-[#16D5E8] transition-colors mt-1.5 sm:mt-2 group-hover:gap-2">
                      <span className="relative">
                        View Details
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Project Count - Reduced spacing */}
          <div
            className="flex justify-center mt-6 sm:mt-8"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.6s forwards",
            }}
          >
            <div className="text-center">
              <p className="text-white/20 text-[10px] sm:text-sm flex items-center justify-center gap-2">
                <span className="w-6 sm:w-8 h-px bg-white/10"></span>
                Showing {filteredProjects.length} of {projects.length} projects
                <span className="w-6 sm:w-8 h-px bg-white/10"></span>
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-white/40 text-[10px] sm:text-sm font-medium hover:text-cyan-400 transition-all duration-300 group mt-2 sm:mt-3"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
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

        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-pulse-glow-delayed { animation: pulse-glow 4s ease-in-out infinite; animation-delay: 2s; }
        .animate-float { animation: float linear infinite; }
        .animate-pulse { animation: pulse-delayed 2s ease-in-out infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 2s ease-in-out infinite; animation-delay: 0.5s; }
        .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
        .animate-gradient-text { background-size: 200% 200%; animation: gradient-text 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-slide-up { opacity: 0; animation: slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: left; }
        .animate-scale-x-delayed { animation: scale-x-delayed 0.8s ease-out 0.6s forwards; transform-origin: right; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.6s forwards; opacity: 0; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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