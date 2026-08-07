import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServiceCard from './components/sections/ServiceCard';
import StatsSection from './components/sections/StatsSection';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import AboutSection from './components/sections/AboutSection';
import GallerySection from './components/sections/GallerySection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ContactSection from './components/sections/ContactSection';


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceCard />
        <AboutSection/>
        <StatsSection/>
        <Projects/>
        <Testimonials/>        
       
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}