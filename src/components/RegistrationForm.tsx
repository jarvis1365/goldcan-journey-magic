import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    location: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted successfully! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      location: "",
      course: "",
      message: "",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5" id="contact">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Start Your Journey Today</h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and our expert counselors will guide you
            </p>
          </div>

          <Card className="p-8 backdrop-blur-sm bg-card/80 border-border shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
                <Input
                  placeholder="Qualification"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
                <Input
                  placeholder="Desired Course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <Textarea
                placeholder="Tell us about your educational goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="transition-all duration-300 focus:scale-[1.02]"
              />

              <Button type="submit" size="lg" className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
