"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
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

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <section className="relative w-full min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #03141C 0%, #05202B 50%, #03141C 100%)",
        }}
      >
        {/* Background Glow - Hidden on mobile */}
        <div className="hidden md:block absolute -top-40 -right-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="hidden md:block absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow-delayed" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button - Reduced margin */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors duration-300 mb-4 sm:mb-6 group"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm">Back to Projects</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Image - Mobile optimized */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Category Badge */}
              <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/20 text-cyan-300">
                {project.category}
              </span>
            </div>

            {/* Details - Mobile optimized */}
            <div>
              <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-0.5 sm:mt-1">
                {project.title}
              </h1>
              <div className="w-10 sm:w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent mt-2 sm:mt-4" />
              
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                {project.fullDescription || project.description}
              </p>

              {/* Features - Mobile optimized */}
              {project.features && (
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/50">
                        <CheckCircle size={12} className="sm:w-[14px] sm:h-[14px] text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons - Perfect for mobile */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 mt-6 sm:mt-8">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#03141C] rounded-full font-semibold text-center text-sm sm:text-base hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(22,213,232,0.3)] transition-all duration-300"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-white/20 text-white rounded-full font-semibold text-center text-sm sm:text-base hover:bg-white/10 transition-all duration-300 hover:border-white/30"
                >
                  Contact Us
                </Link>
              </div>
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

        @keyframes pulse-glow-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}