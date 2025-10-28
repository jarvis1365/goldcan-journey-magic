import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, IndianRupee, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MBABangalore = () => {
  const programs = [
    {
      name: "MBA in Marketing",
      duration: "2 Years",
      fees: "₹75,000",
      eligibility: "Graduation Pass (Any Stream)",
      specialization: "Marketing Management, Brand Management, Digital Marketing",
    },
    {
      name: "MBA in Finance",
      duration: "2 Years",
      fees: "₹75,000",
      eligibility: "Graduation Pass (Any Stream)",
      specialization: "Financial Management, Investment Banking, Corporate Finance",
    },
    {
      name: "MBA in Human Resources",
      duration: "2 Years",
      fees: "₹75,000",
      eligibility: "Graduation Pass (Any Stream)",
      specialization: "HR Management, Talent Acquisition, Organizational Behavior",
    },
    {
      name: "MBA in Operations",
      duration: "2 Years",
      fees: "₹75,000",
      eligibility: "Graduation Pass (Any Stream)",
      specialization: "Operations Management, Supply Chain, Logistics",
    },
    {
      name: "MBA in IT Management",
      duration: "2 Years",
      fees: "₹75,000",
      eligibility: "Graduation Pass (Any Stream)",
      specialization: "IT Strategy, Project Management, Digital Transformation",
    },
    {
      name: "MBA in International Business",
      duration: "2 Years",
      fees: "₹75,000",
      eligibility: "Graduation Pass (Any Stream)",
      specialization: "Global Business, Export-Import, International Trade",
    },
  ];

  const benefits = [
    "UGC-DEB approved distance MBA programs",
    "Study while you work - flexible learning schedule",
    "Industry-relevant curriculum designed by experts",
    "100% placement assistance with leading companies",
    "Affordable fees with easy EMI options",
    "Regular doubt clearing sessions and mentorship",
    "Online and offline examination options",
    "Globally recognized degree certificates",
  ];

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Top Distance & Online MBA Programs in Bangalore</h1>
              <p className="text-xl text-white/90 mb-8">
                Advance your career with industry-recognized MBA programs from UGC-approved universities. Study at your own pace without compromising on quality.
              </p>
              <Link to="/apply">
                <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold px-8">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose MBA in Bangalore?</h2>
              <p className="text-lg text-muted-foreground">
                Bangalore, India's Silicon Valley and IT hub, offers unparalleled opportunities for MBA graduates. 
                With numerous MNCs, startups, and corporate headquarters, the city provides excellent networking, 
                internship, and career opportunities. Our distance and online MBA programs give you the flexibility 
                to upskill while continuing your professional journey in this vibrant city.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">MBA Programs Available</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <Card 
                  key={program.name}
                  className="p-6 hover:shadow-premium transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{program.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <IndianRupee className="w-4 h-4 text-muted-foreground" />
                      <span>Fees: {program.fees}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Eligibility:</span> {program.eligibility}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Specialization:</span> {program.specialization}
                    </div>
                  </div>
                  
                  <Link to="/apply">
                    <Button className="w-full">Apply Now</Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Program Benefits & Features</h2>
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

        {/* Career Opportunities */}
        <section className="py-20 bg-primary text-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Opportunities After MBA</h2>
              <p className="text-xl text-white/90 mb-8">
                An MBA degree opens doors to leadership roles across industries. Our graduates have been placed in 
                positions such as Business Analyst, Marketing Manager, HR Manager, Financial Analyst, Operations Manager, 
                and Product Manager at leading companies like Infosys, Wipro, Accenture, Deloitte, and many more.
              </p>
              <Link to="/apply">
                <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold px-8">
                  Start Your MBA Journey
                </Button>
              </Link>
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

export default MBABangalore;
