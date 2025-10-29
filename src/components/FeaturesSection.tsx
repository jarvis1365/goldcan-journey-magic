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
  const gradients = [
    { bg: "bg-gradient-to-br from-green-500 to-emerald-600", card: "bg-green-50 border-green-200" },
    { bg: "bg-gradient-to-br from-blue-500 to-cyan-600", card: "bg-blue-50 border-blue-200" },
    { bg: "bg-gradient-to-br from-purple-500 to-pink-600", card: "bg-purple-50 border-purple-200" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
            Why Choose GoldCan Education?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive support and guidance to help you achieve your educational goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`p-8 text-center hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-slide-in-up border-2 ${gradients[index].card}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-full ${gradients[index].bg} flex items-center justify-center shadow-lg animate-float`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
