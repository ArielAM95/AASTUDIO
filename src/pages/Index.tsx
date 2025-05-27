
import HeroSection from "@/components/HeroSection";
import AISection from "@/components/AISection";
import DigitalAdvertisingSection from "@/components/DigitalAdvertisingSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { HoverSliderDemo } from "@/components/ui/demo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HoverSliderDemo />
      <AISection />
      <DigitalAdvertisingSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
