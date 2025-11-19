import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero" className="pt-16">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
