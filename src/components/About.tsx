import { Award, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Personalized Guidance",
    description: "Expert counselors provide one-on-one support to help you choose the perfect program aligned with your career goals.",
  },
  {
    icon: Users,
    title: "Extensive Network",
    description: "Access to over 50 partner universities across India and abroad, offering diverse programs and opportunities.",
  },
  {
    icon: Award,
    title: "Proven Success",
    description: "Over 500 successful placements with a track record of helping students achieve their educational dreams.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Goldcan Education?
            </h2>
            <p className="text-lg text-muted-foreground">
              With over 15 years of experience in educational consulting, we've helped 
              thousands of students achieve their academic dreams. Our comprehensive approach 
              ensures you receive personalized guidance from program selection to final admission.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're pursuing an MBA in Bangalore, engineering degree, or planning to 
              study abroad, our expert team provides end-to-end support including scholarship 
              assistance, application guidance, and visa processing.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 transition-all duration-500 hover:shadow-lg hover:-translate-x-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
