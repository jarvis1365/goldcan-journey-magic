import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { Target, Eye, Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const accreditations = [
    { name: "UGC Approved", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "AICTE Recognized", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "NAAC A+ Accredited", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  ];

  const values = [
    { icon: Target, title: "Our Mission", description: "To provide accessible, quality education that empowers students to achieve their career goals and make meaningful contributions to society." },
    { icon: Eye, title: "Our Vision", description: "To be India's most trusted education partner, bridging the gap between aspirations and achievements through innovative learning solutions." },
    { icon: Award, title: "Our Values", description: "Excellence, integrity, innovation, and student-centricity guide everything we do. We believe in transforming lives through education." },
  ];

  const achievements = [
    "10,000+ successful student placements",
    "25+ global university partnerships",
    "15+ years of educational excellence",
    "100% placement assistance guarantee",
    "Industry-recognized degree programs",
    "Dedicated career counseling support",
  ];

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About GoldCan Education</h1>
              <p className="text-xl text-white/90">
                Your trusted partner in transforming educational dreams into reality since 2012
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p className="leading-relaxed">
                  <span className="text-primary font-semibold">GoldCan Education</span> was founded in <span className="text-accent font-semibold">2012</span> with a singular mission: to make quality education accessible to every student in India and abroad. What started as a small counseling center in Bangalore has grown into one of India's most trusted education consultancies, helping thousands of students achieve their academic and career goals.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Over the past decade, we have built strong partnerships with over <span className="text-primary font-semibold">25 top universities</span> across India and internationally. Our comprehensive approach combines personalized counseling, career guidance, and end-to-end support—from program selection to final admission and beyond.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Today, we specialize in distance education, online degree programs, MBA courses, engineering programs, and international master's degrees. Our success is measured not just in numbers, but in the <span className="text-accent font-semibold">lives we've transformed</span> and the careers we've helped launch.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <a href="/apply" className="inline-block bg-gradient-to-r from-accent via-yellow-400 to-accent text-foreground hover:shadow-gold-glow font-bold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-110 animate-gradient-shift bg-[length:200%_200%]">
                  Join Our Success Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-50 to-blue-50">
          <div className="container px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const gradients = [
                  "bg-gradient-to-br from-blue-500 to-purple-600",
                  "bg-gradient-to-br from-purple-500 to-pink-600", 
                  "bg-gradient-to-br from-blue-600 to-teal-500"
                ];
                const bgColors = [
                  "bg-blue-50",
                  "bg-purple-50",
                  "bg-teal-50"
                ];
                return (
                  <Card 
                    key={value.title}
                    className={`p-8 text-center hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-slide-in-up border-2 ${bgColors[index]}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 rounded-full ${gradients[index]} flex items-center justify-center shadow-lg`}>
                        <value.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Achievements</h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-up bg-white p-4 rounded-lg shadow-md hover:shadow-premium transition-all duration-300 hover:-translate-y-1 border-l-4 border-accent"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular MS Programs */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Popular MS Programs</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: "MS in Computer Science & IT", color: "from-blue-500 to-cyan-500" },
                { name: "MS in Data Science & AI", color: "from-purple-500 to-pink-500" },
                { name: "MS in Electrical Engineering", color: "from-orange-500 to-red-500" },
                { name: "MS in Mechanical Engineering", color: "from-teal-500 to-green-500" },
                { name: "MS in Civil Engineering", color: "from-indigo-500 to-blue-500" },
                { name: "MS in Business Analytics", color: "from-yellow-500 to-orange-500" },
                { name: "MS in Biotechnology", color: "from-green-500 to-emerald-500" },
                { name: "MS in Environmental Science", color: "from-lime-500 to-green-600" },
              ].map((program, index) => (
                <Card 
                  key={program.name}
                  className="p-6 text-center hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-slide-in-up border-0 bg-white relative overflow-hidden group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground leading-tight">{program.name}</h3>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="/apply" className="inline-block bg-gradient-to-r from-primary via-blue-600 to-purple-700 text-white hover:shadow-glow font-bold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-110">
                Apply Now
              </a>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-20 bg-gradient-to-br from-primary via-blue-700 to-purple-900 text-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Accreditations & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {accreditations.map((accreditation, index) => (
                <Card 
                  key={accreditation.name}
                  className="p-8 text-center bg-white hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-2 animate-slide-in-up border-4 border-accent"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{accreditation.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingApplyButton />
    </div>
  );
};

export default About;
