import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">Goldcan Education</span>
            </div>
            <p className="text-background/80">
              We support colleges to reach the right candidates through unique campaigns 
              and direct contact. Empowering students to achieve their educational dreams 
              since 2008.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "MBA Programs", "Engineering", "Study Abroad", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-background/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <span className="text-background/80">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-background/80">+91 9663817429</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-background/80">info@goldcaneducation.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60">
            © 2024 Goldcan Education. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
