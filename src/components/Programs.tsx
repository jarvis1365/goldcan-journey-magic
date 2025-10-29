import { ProgramCard } from "./ProgramCard";
import { Briefcase, Code, Globe } from "lucide-react";
import mbaProgram from "@/assets/mba-program.jpg";
import engineeringLab from "@/assets/engineering-lab.jpg";
import internationalUniversity from "@/assets/international-university.jpg";

const programs = [
  {
    title: "MBA in Bangalore",
    description: "Advance your career with distance and online MBA programs from top UGC-approved universities. Study while you work with flexible schedules and industry-relevant curriculum.",
    icon: Briefcase,
    image: mbaProgram,
    link: "/mba-bangalore",
  },
  {
    title: "Engineering in Bangalore",
    description: "Pursue B.Tech and engineering degrees in India's Silicon Valley. Access world-class facilities, expert faculty, and excellent placement opportunities in top tech companies.",
    icon: Code,
    image: engineeringLab,
    link: "/education-bangalore",
  },
  {
    title: "Masters Abroad",
    description: "Study MS programs at prestigious universities in USA, UK, Canada, and Germany. Get comprehensive support for admissions, visas, scholarships, and career guidance.",
    icon: Globe,
    image: internationalUniversity,
    link: "/ms-abroad",
  },
];

export const Programs = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="programs">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:30px_30px]" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            Our Premium Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated education programs designed to accelerate your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProgramCard {...program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
