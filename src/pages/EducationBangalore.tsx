import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { Card } from "@/components/ui/card";
import { Building2, Users, GraduationCap, TrendingUp } from "lucide-react";

const EducationBangalore = () => {
  const universities = [
    {
      name: "Bangalore University",
      type: "State University",
      programs: "UG & PG Programs",
      accreditation: "NAAC A+ Grade",
    },
    {
      name: "Christ University",
      type: "Deemed University",
      programs: "Multi-disciplinary Programs",
      accreditation: "NAAC A++ Grade",
    },
    {
      name: "Jain University",
      type: "Deemed University",
      programs: "Engineering, Management, Arts",
      accreditation: "NAAC A+ Grade",
    },
    {
      name: "PES University",
      type: "Private University",
      programs: "Engineering & Technology",
      accreditation: "NAAC A Grade",
    },
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Top Educational Hub",
      description: "Bangalore hosts over 100+ engineering colleges, 50+ management institutes, and numerous research centers.",
    },
    {
      icon: Users,
      title: "Vibrant Student Life",
      description: "Multicultural environment with students from across India and abroad, fostering global perspectives.",
    },
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "World-class faculty, modern infrastructure, and industry-aligned curriculum ensure excellent learning outcomes.",
    },
    {
      icon: TrendingUp,
      title: "Career Opportunities",
      description: "Being IT capital, Bangalore offers abundant internship and placement opportunities with top MNCs.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Education in Bangalore</h1>
              <p className="text-xl text-white/90">
                Discover why Bangalore is India's premier education destination for engineering, 
                management, and professional degree programs
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Bangalore: India's Education & IT Hub</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Bangalore, officially known as Bengaluru, is not just India's Silicon Valley but also its premier 
                  education destination. The city is home to some of the country's most prestigious universities, 
                  engineering colleges, business schools, and research institutions. With a perfect blend of quality 
                  education, industry exposure, and vibrant campus life, Bangalore attracts students from across India 
                  and the globe.
                </p>
                <p>
                  The city's education ecosystem is uniquely positioned at the intersection of academia and industry. 
                  Students benefit from regular interactions with tech giants like Infosys, Wipro, TCS, and numerous 
                  startups. This proximity to the corporate world translates into excellent internship opportunities, 
                  live projects, and superior placement prospects.
                </p>
                <p>
                  Beyond academics, Bangalore offers an unmatched quality of life with pleasant weather year-round, 
                  cosmopolitan culture, excellent connectivity, and a thriving student community. The city's parks, 
                  cafes, libraries, and cultural venues provide the perfect environment for holistic development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Study in Bangalore?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="p-6 text-center hover:shadow-premium transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Top Universities in Bangalore</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {universities.map((university, index) => (
                <Card 
                  key={university.name}
                  className="p-6 hover:shadow-premium transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bold text-xl mb-4">{university.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Type:</span> {university.type}
                    </div>
                    <div>
                      <span className="font-semibold">Programs:</span> {university.programs}
                    </div>
                    <div>
                      <span className="font-semibold">Accreditation:</span>{" "}
                      <span className="text-accent font-semibold">{university.accreditation}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Available */}
        <section className="py-20 bg-primary text-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Programs Available</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="p-6 bg-white text-foreground">
                  <h3 className="font-bold text-lg mb-3">Engineering (B.Tech)</h3>
                  <p className="text-sm text-muted-foreground">
                    Computer Science, Electronics, Mechanical, Civil, and more specializations
                  </p>
                </Card>
                <Card className="p-6 bg-white text-foreground">
                  <h3 className="font-bold text-lg mb-3">Management (MBA/PGDM)</h3>
                  <p className="text-sm text-muted-foreground">
                    Marketing, Finance, HR, Operations, IT Management, and International Business
                  </p>
                </Card>
                <Card className="p-6 bg-white text-foreground">
                  <h3 className="font-bold text-lg mb-3">Distance & Online Degrees</h3>
                  <p className="text-sm text-muted-foreground">
                    Flexible learning options for working professionals in various disciplines
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Student Life */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Student Life in Bangalore</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bangalore offers an enriching student experience with diverse cultural events, tech meetups, 
                hackathons, sports facilities, and recreational activities. The city's café culture, weekend 
                getaways to nearby hill stations, and thriving startup ecosystem make it an ideal place for 
                young minds to learn, network, and grow.
              </p>
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

export default EducationBangalore;
