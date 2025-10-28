import { Navigation } from "@/components/Navigation";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Timeline } from "@/components/Timeline";
import { VideoModal } from "@/components/VideoModal";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <Navigation />
      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Programs />
        <Timeline />
        <VideoModal />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
