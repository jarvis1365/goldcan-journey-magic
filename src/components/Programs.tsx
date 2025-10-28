import { ProgramCard } from "./ProgramCard";
import { Briefcase, GraduationCap, Globe } from "lucide-react";

const programs = [
  {
    title: "MBA in Bangalore",
    description: "Pursue your Master of Business Administration from top-ranked universities in Bangalore. Gain practical business insights, leadership skills, and networking opportunities that propel your career forward.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    link: "#mba",
  },
  {
    title: "Engineering in Bangalore",
    description: "Explore cutting-edge engineering programs in India's Silicon Valley. From computer science to mechanical engineering, get hands-on experience with the latest technology and industry partnerships.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    link: "#education",
  },
  {
    title: "Masters Abroad",
    description: "Study at prestigious universities worldwide including USA, UK, Canada, and Australia. We guide you through admissions, scholarships, and visa processes for a seamless international education experience.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    link: "#abroad",
  },
];

export const Programs = () => {
  return (
    <section className="py-24" id="programs">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover world-class educational opportunities tailored to your ambitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProgramCard {...program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
