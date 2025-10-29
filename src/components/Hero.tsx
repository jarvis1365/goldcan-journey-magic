import { Button } from "@/components/ui/button";
import { GraduationCap, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroStudents from "@/assets/hero-students.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroStudents})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-purple-900/90" />
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
              <Button size="lg" className="relative bg-gradient-to-r from-accent via-yellow-400 to-accent text-foreground hover:shadow-gold-glow font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-110 animate-gradient-shift bg-[length:200%_200%]">
                Apply Now
                <GraduationCap className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" className="relative bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-primary font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow">
              Download Brochure
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
