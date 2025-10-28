import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Your Future Starts Here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Transform Your Future with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Goldcan Education
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock world-class education opportunities in Bangalore and abroad. 
            We guide you through MBA programs, engineering courses, and international 
            master's degrees at top universities worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="group transition-all duration-300 hover:shadow-lg hover:scale-105">
              Explore Programs
              <Award className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group transition-all duration-300 hover:border-primary">
              Study Abroad
              <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Partner Universities</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
