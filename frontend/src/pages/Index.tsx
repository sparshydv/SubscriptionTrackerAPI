import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HeroCTA from "@/components/landing/HeroCTA";
import TestimonialSlider from "@/components/ui/testimonial-slider";
import { Hero195 } from "@/components/ui/hero-195";
import { TextParallaxContentExample } from "@/components/ui/text-parallax-content-scroll";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesGridSection from "@/components/landing/FeaturesGridSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import { CTA } from "@/components/ui/call-to-action";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/landing/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();

  // If user is already logged in, redirect them to the dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HeroCTA />
      <TestimonialSlider />
      <ProblemSection />
      <TextParallaxContentExample />
      <Separator className="container mx-auto" />
      <Hero195 />
      <FeaturesGridSection />
      <Separator className="container mx-auto" />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
