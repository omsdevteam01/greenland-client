"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid3x3, LayoutList, Search, Sparkles, Building2, Sun, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

// Type definitions
interface Project {
  id: number;
  title: string;
  subCategory: string;
  image: string;
  slug: string;
  description: string;
  fullDescription: string;
  features: string[];
  category?: string;
}

const constructionProjects: Project[] = [
  {
    id: 1,
    title: "Modern Villa",
    subCategory: "Residential",
    image: "/images/villa.png",
    slug: "modern-villa",
    description: "Modern luxury villas with premium amenities and sustainable design.",
    fullDescription: "This stunning modern villa features contemporary architecture, sustainable materials, and premium amenities.",
    features: ["Smart Home Technology", "Sustainable Materials", "Infinity Pool", "Home Automation", "Energy Efficient"],
  },
  {
    id: 2,
    title: "Luxury Duplex House",
    subCategory: "Residential",
    image: "/images/luxury.png",
    slug: "luxury-duplex-house",
    description: "Spacious duplex with premium finishes and modern design.",
    fullDescription: "A beautifully designed duplex house with premium finishes, modern aesthetics, and thoughtful spaces.",
    features: ["Double Height Living", "Premium Finishes", "Home Theater", "Garden Terrace", "Smart Lighting"],
  },
  {
    id: 3,
    title: "SR Complex",
    subCategory: "Residential",
    image: "/images/project3.png",
    slug: "sr-complex",
    description: "Modern residential complex with premium amenities.",
    fullDescription: "SR Complex is a modern residential development offering premium living spaces with world-class amenities.",
    features: ["Clubhouse", "Swimming Pool", "Gymnasium", "Landscaped Gardens", "24/7 Security"],
  },
  {
    id: 4,
    title: "Contemporary Home",
    subCategory: "Residential",
    image: "/images/project4.png",
    slug: "contemporary-home",
    description: "Elegant contemporary home with innovative design.",
    fullDescription: "This contemporary home combines modern design with functional living spaces.",
    features: ["Modern Design", "Open Floor Plan", "Large Windows", "Sustainable Materials", "Smart Home"],
  },
  {
    id: 5,
    title: "Premium Interior",
    subCategory: "Interior",
    image: "/images/interior.png",
    slug: "premium-interior",
    description: "Luxury interior design with premium finishes.",
    fullDescription: "A premium interior design project featuring luxury finishes, modern aesthetics, and thoughtful spatial planning.",
    features: ["Luxury Finishes", "Modern Design", "Custom Furniture", "Premium Lighting", "Home Automation"],
  },
  {
    id: 6,
    title: "Home Renovation",
    subCategory: "Renovation",
    image: "/images/home.png",
    slug: "home-renovation",
    description: "Complete home renovation with modern upgrades.",
    fullDescription: "A comprehensive home renovation project transforming a traditional space into a modern masterpiece.",
    features: ["Structural Changes", "Modern Finishes", "Energy Efficient", "New Kitchen", "Bathroom Upgrades"],
  },
  {
    id: 7,
    title: "ABC Office Building",
    subCategory: "Commercial",
    image: "/images/off.png",
    slug: "abc-office-building",
    description: "State-of-the-art office space with innovative design.",
    fullDescription: "ABC Office Building is a state-of-the-art commercial space featuring innovative design and sustainable infrastructure.",
    features: ["Green Building", "Smart Office", "Collaborative Spaces", "Sustainable Design", "Modern Amenities"],
  },
  {
    id: 8,
    title: "Farm House",
    subCategory: "Residential",
    image: "/images/farm.png",
    slug: "farm-house",
    description: "Spacious farm house with premium amenities.",
    fullDescription: "A spacious farm house designed for peaceful living amidst nature.",
    features: ["Organic Gardens", "Sustainable Design", "Pool", "Outdoor Living", "Eco-Friendly"],
  },
  {
    id: 9,
    title: "Interior Project",
    subCategory: "Interior",
    image: "/images/inte.png",
    slug: "interior-project",
    description: "Modern interior design with premium finishes.",
    fullDescription: "A modern interior design project featuring premium finishes and contemporary aesthetics.",
    features: ["Modern Design", "Premium Finishes", "Custom Furniture", "Smart Lighting", "Home Automation"],
  },
  {
    id: 10,
    title: "Renovation Project",
    subCategory: "Renovation",
    image: "/images/reno.png",
    slug: "renovation-project",
    description: "Complete renovation with modern upgrades.",
    fullDescription: "A comprehensive renovation project transforming an outdated space into a modern living environment.",
    features: ["Complete Renovation", "Modern Finishes", "Smart Features", "New Interiors", "Energy Efficient"],
  },
  {
    id: 11,
    title: "Commercial Project",
    subCategory: "Commercial",
    image: "/images/commercial.png",
    slug: "commercial-project",
    description: "Modern commercial project with innovative design.",
    fullDescription: "A modern commercial project featuring innovative design, sustainable features, and premium amenities.",
    features: ["Innovative Design", "Sustainable Features", "Modern Amenities", "Green Building", "Smart Infrastructure"],
  },
  {
    id: 12,
    title: "Residential Project",
    subCategory: "Residential",
    image: "/images/residential.png",
    slug: "residential-project",
    description: "Premium residential project with modern design.",
    fullDescription: "A premium residential project featuring modern design, luxury amenities, and sustainable living spaces.",
    features: ["Modern Design", "Luxury Amenities", "Sustainable Living", "Smart Home", "Premium Finishes"],
  },
];

const tensileProjects: Project[] = [
  {
    id: 13,
    title: "",
    subCategory: "",
    image: "/images/gl5.png",
    slug: "tensile-shade-01",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 14,
    title: "",
    subCategory: "",
    image: "/images/gl1.png",
    slug: "tensile-shade-02",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 15,
    title: "",
    subCategory: "",
    image: "/images/gl2.png",
    slug: "tensile-shade-03",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 16,
    title: "",
    subCategory: "",
    image: "/images/gl3.png",
    slug: "tensile-shade-04",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 17,
    title: "",
    subCategory: "",
    image: "/images/gl4.png",
    slug: "tensile-shade-05",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 18,
    title: "",
    subCategory: "",
    image: "/images/gl6.png",
    slug: "tensile-shade-06",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 19,
    title: "",
    subCategory: "",
    image: "/images/gl7.png",
    slug: "tensile-shade-07",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 20,
    title: "",
    subCategory: "",
    image: "/images/gl8.png",
    slug: "tensile-shade-08",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 21,
    title: "",
    subCategory: "",
    image: "/images/gl9.png",
    slug: "tensile-shade-09",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 22,
    title: "",
    subCategory: "",
    image: "/images/gl10.png",
    slug: "tensile-shade-10",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 23,
    title: "",
    subCategory: "",
    image: "/images/gl11.png",
    slug: "tensile-shade-11",
    description: "",
    fullDescription: "",
    features: [],
  },
  {
    id: 24,
    title: "",
    subCategory: "",
    image: "/images/gl12.png",
    slug: "tensile-shade-12",
    description: "",
    fullDescription: "",
    features: [],
  },
];

// Category sections
interface CategorySection {
  id: string;
  label: string;
  icon: React.ElementType;
  subCategories: string[];
}

const categorySections: CategorySection[] = [
  {
    id: "construction",
    label: "Construction",
    icon: Building2,
    subCategories: ["Residential", "Commercial", "Interior", "Renovation"],
  },
  {
    id: "tensile",
    label: "Tensile Shade",
    icon: Sun,
    subCategories: [],
  },
];

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
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

  // Reset sub-category when main category changes
  useEffect(() => {
    setActiveSubCategory(null);
  }, [activeCategory]);

  // Get filtered projects based on active category
  const getFilteredProjects = (): Project[] => {
    let allProjects: Project[] = [];

    // If no category is selected, show construction projects by default
    if (!activeCategory) {
      allProjects = constructionProjects.map(p => ({ ...p, category: "Construction" }));
    } else if (activeCategory === "construction") {
      allProjects = constructionProjects.map(p => ({ ...p, category: "Construction" }));
    } else if (activeCategory === "tensile") {
      allProjects = tensileProjects.map(p => ({ ...p, category: "Tensile Shade" }));
    }

    // Apply sub-category filter (only for construction)
    if (activeSubCategory && activeCategory === "construction") {
      allProjects = allProjects.filter(p => p.subCategory === activeSubCategory);
    }

    // Apply search filter
    if (searchQuery) {
      allProjects = allProjects.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return allProjects;
  };

  const filteredProjects = getFilteredProjects();

  const getCategoryIcon = (category: string) => {
    if (category === "Construction") return Building2;
    if (category === "Tensile Shade") return Sun;
    return null;
  };

  const getCategoryColor = (category: string) => {
    if (category === "Construction") return "text-cyan-400 border-cyan-400/20 bg-cyan-400/10";
    if (category === "Tensile Shade") return "text-cyan-400 border-cyan-400/20 bg-cyan-400/10";
    return "text-cyan-400 border-cyan-400/20 bg-cyan-400/10";
  };

  const getTotalProjects = (): number => {
    if (activeCategory === "construction") return constructionProjects.length;
    if (activeCategory === "tensile") return tensileProjects.length;
    return constructionProjects.length;
  };

  return (
    <>
      <Header />
      <section className="relative w-full min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden" ref={sectionRef}
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Background Glow */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        {/* Glassy Grid Pattern */}
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

        {/* Animated Particles */}
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
          {/* Header */}
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
              Explore our portfolio of completed construction projects and tensile shade structures showcasing excellence,
              innovation, and superior craftsmanship.
            </p>
          </div>

          {/* Category Buttons - Construction & Tensile Shade */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.3s forwards",
            }}
          >
            <button
              onClick={() => {
                setActiveCategory(activeCategory === "construction" ? null : "construction");
                setActiveSubCategory(null);
              }}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "construction" || !activeCategory
                  ? "bg-cyan-400 text-[#03141C] shadow-[0_0_30px_rgba(22,213,232,0.25)]"
                  : "border border-white/10 text-white/60 hover:text-white hover:border-white/20 bg-white/5 backdrop-blur-sm"
              }`}
            >
              <Building2 size={16} className="sm:w-[18px] sm:h-[18px]" />
              Construction
              <span className="ml-1 text-[10px] bg-[#03141C]/20 px-1.5 py-0.5 rounded-full">
                {constructionProjects.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveCategory(activeCategory === "tensile" ? null : "tensile");
                setActiveSubCategory(null);
              }}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "tensile"
                  ? "bg-cyan-400 text-[#03141C] shadow-[0_0_30px_rgba(22,213,232,0.25)]"
                  : "border border-white/10 text-white/60 hover:text-white hover:border-white/20 bg-white/5 backdrop-blur-sm"
              }`}
            >
              <Sun size={16} className="sm:w-[18px] sm:h-[18px]" />
              Tensile Shade
              <span className="ml-1 text-[10px] bg-[#03141C]/20 px-1.5 py-0.5 rounded-full">
                {tensileProjects.length}
              </span>
            </button>
          </div>

          {/* Sub-Category Filters - Only for Construction */}
          {activeCategory === "construction" && (
            <div
              className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.35s forwards",
              }}
            >
              <button
                onClick={() => setActiveSubCategory(null)}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-medium transition-all duration-300 ${
                  !activeSubCategory
                    ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 shadow-[0_0_20px_rgba(22,213,232,0.05)]"
                    : "border border-white/5 text-white/40 hover:text-white/60 hover:border-white/15 bg-white/5 backdrop-blur-sm"
                }`}
              >
                All
              </button>
              {categorySections
                .find(c => c.id === "construction")
                ?.subCategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubCategory(activeSubCategory === sub ? null : sub)}
                    className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-medium transition-all duration-300 ${
                      activeSubCategory === sub
                        ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 shadow-[0_0_20px_rgba(22,213,232,0.05)]"
                        : "border border-white/5 text-white/40 hover:text-white/60 hover:border-white/15 bg-white/5 backdrop-blur-sm"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
            </div>
          )}

          {/* Search and View Controls */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            <div className="relative w-full max-w-xs group">
              <Search size={16} className="sm:w-[18px] sm:h-[18px] absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-9 sm:px-10 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-white/20"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-focus-within:w-full transition-all duration-500" />
            </div>

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

          {/* Projects Grid/List */}
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
              {filteredProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category || "");
                const isTensile = project.category === "Tensile Shade";
                
                return (
                  <div
                    key={project.id}
                    onClick={() => {
                      if (isTensile) {
                        setSelectedImage(project);
                      }
                    }}
                    className={`group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 shadow-lg hover:shadow-[0_0_40px_rgba(22,213,232,0.05)] transition-all duration-500 ${
                      viewMode === "grid"
                        ? "hover:-translate-y-2 hover:scale-[1.02]"
                        : "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-3 sm:p-4 hover:translate-x-2"
                    } animate-slide-up relative ${isTensile ? 'cursor-pointer' : ''}`}
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {/* Only wrap with Link for construction projects */}
                    {!isTensile ? (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="absolute inset-0 z-10"
                      />
                    ) : null}

                    <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "grid"
                          ? "aspect-[4/3] w-full"
                          : "w-full sm:w-32 h-48 sm:h-32 shrink-0 rounded-xl"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title || "Project"}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Category Badge - Only show for Construction */}
                      {!isTensile && (
                        <span className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-medium border backdrop-blur-sm flex items-center gap-1 ${getCategoryColor(project.category || "")}`}>
                          {CategoryIcon && <CategoryIcon size={10} className="sm:w-3 sm:h-3" />}
                          {project.category}
                        </span>
                      )}

                      {/* Sub-category badge - Only show for Construction */}
                      {!isTensile && project.subCategory && (
                        <span className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[7px] sm:text-[8px] font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white/60">
                          {project.subCategory}
                        </span>
                      )}
                    </div>

                    {/* Content - Only show for Construction */}
                    {!isTensile ? (
                      <div
                        className={
                          viewMode === "grid"
                            ? "px-3 sm:px-4 py-2 sm:py-3"
                            : "flex-1 px-2 sm:px-0"
                        }
                      >
                        <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                          <span className="text-[9px] sm:text-xs font-medium text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                            {project.category === "Construction" ? (
                              <Building2 size={12} className="sm:w-3.5 sm:h-3.5" />
                            ) : (
                              <Sun size={12} className="sm:w-3.5 sm:h-3.5" />
                            )}
                            {project.category}
                          </span>
                          <span className="text-white/20 text-[8px]">•</span>
                          <span className="text-[8px] sm:text-[9px] text-white/30">{project.subCategory}</span>
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
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}

          {/* Project Count */}
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
                Showing {filteredProjects.length} of {getTotalProjects()} projects
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

      {/* Image Modal - Like Greenland Page */}
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
                alt="Project Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

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

        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
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
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

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