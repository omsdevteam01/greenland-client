import { BusinessInfo, Service, SocialLinks } from '@/app/types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "SHIKKANDAR BATCHA",
  title: "Owner",
  phone: "7708 7760 22",
  email: "Info@gltgroup.com",
  address: "3/72 swamimalai Main Road, Baburajapuram, kumbakonam.",
  website: "https://gltgroup.com"
};

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://linkedin.com/in/shikkandarbatcha",
  twitter: "https://twitter.com/shikkandarbatcha",
  instagram: "https://instagram.com/shikkandarbatcha"
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Business Consulting",
    description: "Expert advice and strategies for your business growth and development.",
    icon: "📊"
  },
  {
    id: 2,
    title: "Real Estate Solutions",
    description: "Comprehensive real estate services including buying, selling, and property management.",
    icon: "🏢"
  },
  {
    id: 3,
    title: "Green Energy",
    description: "Sustainable and eco-friendly energy solutions for a better future.",
    icon: "🌱"
  },
  {
    id: 4,
    title: "Construction Services",
    description: "Quality construction and renovation services for residential and commercial projects.",
    icon: "🏗️"
  },
  {
    id: 5,
    title: "Investment Advisory",
    description: "Professional investment guidance to maximize your returns and secure your future.",
    icon: "💼"
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your queries and concerns.",
    icon: "🎯"
  }
];