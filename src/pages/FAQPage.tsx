
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-8">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
