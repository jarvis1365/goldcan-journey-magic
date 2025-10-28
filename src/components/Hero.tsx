import { Button } from "@/components/ui/button";
import { GraduationCap, Download } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-foreground mb-4 font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm">Your Future Starts Here</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Empowering Careers Through{" "}
            <span className="text-accent">Global Education</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Whether you're looking for distance education, online degrees, MBA programs in Bangalore, or international master's programs, GoldCan Education is your trusted partner in achieving academic excellence and career success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/apply">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold px-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Apply Now
                <GraduationCap className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary font-semibold px-8 transition-all duration-300">
              Download Brochure
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
