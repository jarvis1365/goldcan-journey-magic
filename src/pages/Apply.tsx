import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Course Selection
    program: "",
    specialization: "",
    studyMode: "",
    
    // Step 2: Personal Information
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    
    // Step 3: Academic Background
    qualification: "",
    university: "",
    yearOfPassing: "",
    percentage: "",
    workExperience: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying! Our counselor will contact you within 24 hours.",
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="py-20">
            <div className="container px-4">
              <Card className="max-w-2xl mx-auto p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for applying to GoldCan Education. Our counselor will review your application 
                  and contact you within 24 hours to discuss the next steps.
                </p>
                <div className="space-y-3 text-left bg-muted/30 p-6 rounded-lg mb-8">
                  <p className="text-sm"><strong>Application ID:</strong> GCE{Date.now().toString().slice(-6)}</p>
                  <p className="text-sm"><strong>Program:</strong> {formData.program}</p>
                  <p className="text-sm"><strong>Contact:</strong> {formData.email}</p>
                </div>
                <Button size="lg" onClick={() => window.location.href = "/"}>
                  Back to Home
                </Button>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h1>
              <p className="text-lg text-muted-foreground">
                Complete your application in 3 simple steps
              </p>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto flex justify-between items-center">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto flex justify-between mt-2 text-sm">
              <span className={step >= 1 ? 'text-primary font-semibold' : 'text-muted-foreground'}>Course Selection</span>
              <span className={step >= 2 ? 'text-primary font-semibold' : 'text-muted-foreground'}>Personal Info</span>
              <span className={step >= 3 ? 'text-primary font-semibold' : 'text-muted-foreground'}>Academic Background</span>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12">
          <div className="container px-4">
            <Card className="max-w-3xl mx-auto p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Course Selection */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Step 1: Course Selection</h2>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Program *</label>
                      <Select required value={formData.program} onValueChange={(value) => setFormData({ ...formData, program: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mba">MBA / PGDM</SelectItem>
                          <SelectItem value="btech">B.Tech / Engineering</SelectItem>
                          <SelectItem value="ms-usa">MS in USA</SelectItem>
                          <SelectItem value="ms-uk">MS in UK</SelectItem>
                          <SelectItem value="ms-canada">MS in Canada</SelectItem>
                          <SelectItem value="ms-germany">MS in Germany</SelectItem>
                          <SelectItem value="distance">Distance Education</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Specialization</label>
                      <Input
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        placeholder="e.g., Marketing, Computer Science, Finance"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Study Mode *</label>
                      <Select required value={formData.studyMode} onValueChange={(value) => setFormData({ ...formData, studyMode: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select study mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="distance">Distance Learning</SelectItem>
                          <SelectItem value="online">Online</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="button" onClick={nextStep} className="w-full">
                      Next Step
                    </Button>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Step 2: Personal Information</h2>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                      <Input
                        required
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <Input
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Street address"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">City</label>
                        <Input
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">State</label>
                        <Input
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          placeholder="State"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                        Previous
                      </Button>
                      <Button type="button" onClick={nextStep} className="flex-1">
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Academic Background */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Step 3: Academic Background</h2>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Highest Qualification *</label>
                      <Select required value={formData.qualification} onValueChange={(value) => setFormData({ ...formData, qualification: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select qualification" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12th">12th Pass</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="graduation">Graduation</SelectItem>
                          <SelectItem value="postgraduation">Post Graduation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">University / Board</label>
                      <Input
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        placeholder="Name of university or board"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Year of Passing</label>
                        <Input
                          value={formData.yearOfPassing}
                          onChange={(e) => setFormData({ ...formData, yearOfPassing: e.target.value })}
                          placeholder="e.g., 2023"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Percentage / CGPA</label>
                        <Input
                          value={formData.percentage}
                          onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                          placeholder="e.g., 75% or 8.5 CGPA"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Work Experience (if any)</label>
                      <Input
                        value={formData.workExperience}
                        onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                        placeholder="e.g., 2 years at ABC Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Information</label>
                      <Textarea
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        placeholder="Any additional information you'd like to share..."
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                        Previous
                      </Button>
                      <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-accent">
                        Submit Application
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Apply;
