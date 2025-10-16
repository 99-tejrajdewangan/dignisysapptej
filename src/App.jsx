import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
