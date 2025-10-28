import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    program: "MBA in Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "GoldCan Education helped me pursue my MBA while working full-time. The flexibility and quality of education exceeded my expectations. I got placed in a top MNC within 3 months of graduation!",
  },
  {
    name: "Rahul Verma",
    program: "MS in Computer Science - USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "The counseling team guided me through every step of my MS application process. From university selection to visa processing, they were incredibly supportive. Now I'm studying at a top US university!",
  },
  {
    name: "Sneha Patel",
    program: "Distance B.Tech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content: "As a working professional, distance education was my only option. GoldCan made it seamless and hassle-free. The quality of education and support throughout my journey was outstanding.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful students who transformed their careers with GoldCan Education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 hover:shadow-premium transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
