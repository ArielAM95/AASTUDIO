
import HeroSection from "@/components/HeroSection";
import AISection from "@/components/AISection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AISection />
      <ServicesSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
