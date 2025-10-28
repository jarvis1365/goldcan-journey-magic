import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "MBA in Bangalore", href: "/mba-bangalore" },
    { name: "Education in Bangalore", href: "/education-bangalore" },
    { name: "MS Abroad", href: "/ms-abroad" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">GoldCan Education</span>
            </div>
            <p className="text-white/80 text-sm">
              Empowering students to achieve their educational dreams since 2012. 
              Your trusted partner for quality education and career success.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-white/80 text-sm">GoldCan Education Headquarters, MG Road, Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-white/80 text-sm">+91-9663817429</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-white/80 text-sm">info@goldcaneducation.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <Link to="/apply" className="block">
              <button className="mt-4 w-full bg-accent text-foreground font-semibold py-2 px-4 rounded-lg hover:bg-accent/90 transition-colors">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            © 2024 GoldCan Education. All Rights Reserved. | UGC Approved | AICTE Recognized
          </p>
        </div>
      </div>
    </footer>
  );
};
