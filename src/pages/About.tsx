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
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  GoldCan Education was founded in 2012 with a singular mission: to make quality education accessible to every student in India and abroad. What started as a small counseling center in Bangalore has grown into one of India's most trusted education consultancies, helping thousands of students achieve their academic and career goals.
                </p>
                <p>
                  Over the past decade, we have built strong partnerships with over 25 top universities across India and internationally. Our comprehensive approach combines personalized counseling, career guidance, and end-to-end support—from program selection to final admission and beyond.
                </p>
                <p>
                  Today, we specialize in distance education, online degree programs, MBA courses, engineering programs, and international master's degrees. Our success is measured not just in numbers, but in the lives we've transformed and the careers we've helped launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="p-8 text-center hover:shadow-premium transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Achievements</h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-20 bg-primary text-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Accreditations & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {accreditations.map((accreditation, index) => (
                <Card 
                  key={accreditation.name}
                  className="p-6 text-center bg-white hover:shadow-premium transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={accreditation.logo} 
                    alt={accreditation.name}
                    className="w-full h-20 object-contain mb-4"
                  />
                  <h3 className="font-bold text-foreground">{accreditation.name}</h3>
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
