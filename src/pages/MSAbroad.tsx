import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, DollarSign, CheckCircle, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const MSAbroad = () => {
  const countries = [
    {
      name: "United States (USA)",
      universities: "500+ Top Universities",
      duration: "1.5-2 Years",
      averageFees: "$25,000 - $60,000/year",
      workVisa: "Optional Practical Training (OPT) - 12-36 months",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
    },
    {
      name: "United Kingdom (UK)",
      universities: "150+ Top Universities",
      duration: "1 Year",
      averageFees: "£15,000 - £35,000/year",
      workVisa: "Graduate Route Visa - 2 years",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    },
    {
      name: "Canada",
      universities: "100+ Top Universities",
      duration: "1.5-2 Years",
      averageFees: "CAD 15,000 - 35,000/year",
      workVisa: "Post-Graduation Work Permit - 3 years",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
    },
    {
      name: "Germany",
      universities: "50+ Top Universities",
      duration: "2 Years",
      averageFees: "Free to €20,000/year",
      workVisa: "Job Seeker Visa - 18 months",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
    },
  ];

  const benefits = [
    "World-class education from globally ranked universities",
    "Cutting-edge research facilities and resources",
    "International exposure and multicultural experience",
    "High earning potential and better career prospects",
    "Post-study work visa opportunities in most countries",
    "Access to scholarships and financial aid",
    "Improved English proficiency and global networking",
    "Pathway to permanent residency in many countries",
  ];

  const programs = [
    "MS in Computer Science & IT",
    "MS in Data Science & AI",
    "MS in Electrical Engineering",
    "MS in Mechanical Engineering",
    "MS in Civil Engineering",
    "MS in Business Analytics",
    "MS in Biotechnology",
    "MS in Environmental Science",
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
          <div className="absolute inset-0 bg-primary/85" />
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Study MS Abroad – USA | UK | Canada | Germany
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your career with a master's degree from world's top universities. 
                Expert guidance for admissions, visas, and scholarships.
              </p>
              <Link to="/apply">
                <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold px-8">
                  Start Your Journey
                  <Plane className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Study MS Abroad?</h2>
              <p className="text-lg text-muted-foreground">
                Pursuing a Master of Science (MS) degree abroad is one of the best investments in your future. 
                International education offers unparalleled academic quality, research opportunities, global networking, 
                and significantly higher career prospects. With GoldCan Education's expert guidance, we make your dream 
                of studying at top international universities a reality.
              </p>
            </div>
          </div>
        </section>

        {/* Countries */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Top Study Destinations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {countries.map((country, index) => (
                <Card 
                  key={country.name}
                  className="overflow-hidden hover:shadow-premium transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                      <Globe className="w-6 h-6 text-primary" />
                      {country.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold">Universities:</span> {country.universities}
                      </div>
                      <div>
                        <span className="font-semibold">Duration:</span> {country.duration}
                      </div>
                      <div>
                        <span className="font-semibold">Average Fees:</span> {country.averageFees}
                      </div>
                      <div>
                        <span className="font-semibold">Work Visa:</span> {country.workVisa}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Programs */}
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Popular MS Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {programs.map((program, index) => (
                <Card 
                  key={program}
                  className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="font-semibold">{program}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefits of Studying MS Abroad</h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center hover:shadow-premium transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">Scholarship Assistance</h3>
                  <p className="text-sm text-muted-foreground">
                    Help you find and apply for scholarships, grants, and financial aid opportunities
                  </p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-premium transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">Admission Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete support for university selection, application, SOP, and LOR preparation
                  </p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-premium transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Plane className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">Visa Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    End-to-end visa application support, interview preparation, and documentation
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Study at World's Top Universities?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book a free counseling session with our international education experts today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold px-8">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary font-semibold px-8">
                    Talk to Counselor
                  </Button>
                </Link>
              </div>
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

export default MSAbroad;
