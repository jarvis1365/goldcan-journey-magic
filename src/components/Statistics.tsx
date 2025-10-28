import { Users, BookOpen, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Students Enrolled" },
  { icon: BookOpen, value: "50+", label: "Programs Offered" },
  { icon: Globe, value: "25", label: "Global University Tie-ups" },
];

export const Statistics = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center space-y-4 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
