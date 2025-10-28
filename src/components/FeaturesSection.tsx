import { Award, Briefcase, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "UGC Approved",
    description: "All our programs are approved by UGC, AICTE, and recognized by top accreditation bodies.",
  },
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
    description: "Dedicated placement cell with strong industry connections to ensure your career success.",
  },
  {
    icon: Award,
    title: "Industry Recognized Degrees",
    description: "Globally accepted degrees from top universities with industry-relevant curriculum.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GoldCan Education?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive support and guidance to help you achieve your educational goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-8 text-center hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
