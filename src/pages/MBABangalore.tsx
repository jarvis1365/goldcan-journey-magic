import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, IndianRupee, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import mbaProgram from "@/assets/mba-program.jpg";
import bangaloreSkyline from "@/assets/bangalore-skyline.jpg";

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
				backgroundImage: `url(${mbaProgram})`,
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-purple-900/90 to-primary/95" />
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Top Distance & Online MBA Programs in Bangalore</h1>
              <p className="text-xl text-white/90 mb-8">
                Advance your career with industry-recognized MBA programs from UGC-approved universities. Study at your own pace without compromising on quality.
              </p>
				<Link to="/apply">
					<Button size="lg" className="bg-gradient-to-r from-accent via-yellow-400 to-accent text-foreground hover:shadow-gold-glow font-bold px-8 rounded-full transition-all duration-300 hover:scale-110 animate-gradient-shift bg-[length:200%_200%]">
						Apply Now
					</Button>
				</Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
                Why Choose MBA in Bangalore?
              </h2>
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-semibold">Bangalore, India's Silicon Valley and IT hub</span>, offers unparalleled opportunities for MBA graduates. 
                With numerous MNCs, startups, and corporate headquarters, the city provides excellent networking, 
                internship, and career opportunities. Our <span className="text-accent font-semibold">distance and online MBA programs</span> give you the flexibility 
                to upskill while continuing your professional journey in this vibrant city.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">MBA Programs Available</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => {
                const gradients = [
                  { bg: "bg-gradient-to-br from-blue-500 to-cyan-600", card: "bg-blue-50 border-blue-300" },
                  { bg: "bg-gradient-to-br from-green-500 to-emerald-600", card: "bg-green-50 border-green-300" },
                  { bg: "bg-gradient-to-br from-purple-500 to-pink-600", card: "bg-purple-50 border-purple-300" },
                  { bg: "bg-gradient-to-br from-orange-500 to-red-600", card: "bg-orange-50 border-orange-300" },
                  { bg: "bg-gradient-to-br from-indigo-500 to-blue-600", card: "bg-indigo-50 border-indigo-300" },
                  { bg: "bg-gradient-to-br from-teal-500 to-cyan-600", card: "bg-teal-50 border-teal-300" },
                ];
                const gradient = gradients[index % gradients.length];
                
                return (
                  <Card 
                    key={program.name}
                    className={`p-6 hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-slide-in-up border-2 ${gradient.card}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${gradient.bg} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">{program.name}</h3>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span><span className="font-semibold">Duration:</span> {program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <IndianRupee className="w-4 h-4 text-accent" />
                        <span><span className="font-semibold">Fees:</span> {program.fees}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-primary">Eligibility:</span> {program.eligibility}
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-purple-600">Specialization:</span> {program.specialization}
                      </div>
                    </div>
                    
                    <Link to="/apply">
                      <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:shadow-glow">
                        Apply Now
                      </Button>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Program Benefits & Features
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-up bg-white p-5 rounded-xl shadow-md hover:shadow-premium transition-all duration-300 hover:-translate-y-1 border-l-4 border-accent"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/apply">
                <Button size="lg" className="bg-gradient-to-r from-accent via-yellow-400 to-accent text-foreground hover:shadow-gold-glow font-bold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-110 animate-gradient-shift bg-[length:200%_200%]">
                  Enroll Now & Get Benefits
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 bg-gradient-to-br from-primary via-purple-700 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Career Opportunities After MBA</h2>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                An MBA degree opens doors to <span className="text-accent font-semibold">leadership roles across industries</span>. Our graduates have been placed in 
                positions such as <span className="font-semibold">Business Analyst, Marketing Manager, HR Manager, Financial Analyst, Operations Manager, 
                and Product Manager</span> at leading companies like <span className="text-accent">Infosys, Wipro, Accenture, Deloitte</span>, and many more.
              </p>
              <Link to="/apply">
                <Button size="lg" className="bg-gradient-to-r from-accent via-yellow-400 to-accent text-foreground hover:shadow-gold-glow font-bold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-110 animate-gradient-shift bg-[length:200%_200%]">
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
