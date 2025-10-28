import { Navigation } from "@/components/Navigation";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <Navigation />
      <main className="relative z-10 pt-20">
        <Hero />
        <Statistics />
        <FeaturesSection />
        <Programs />
        <Testimonials />
        <RegistrationForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingApplyButton />
    </div>
  );
};

export default Index;
