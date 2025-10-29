import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "MBA in Bangalore", href: "/mba-bangalore" },
    { name: "Education in Bangalore", href: "/education-bangalore" },
    { name: "MS Abroad", href: "/ms-abroad" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-primary via-blue-600 to-purple-700 backdrop-blur-md z-50 shadow-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-2xl font-bold text-white">GoldCan Education</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-white/90 hover:text-accent transition-all duration-300 font-semibold relative group ${
                  location.pathname === link.href ? 'text-accent' : ''
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link to="/apply">
              <Button className="bg-gradient-to-r from-accent via-yellow-400 to-accent text-foreground hover:shadow-gold-glow font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-110 animate-gradient-shift bg-[length:200%_200%]">
                Apply Now
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-in-up bg-primary/95 backdrop-blur-md rounded-lg mb-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 px-4 text-white/90 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setIsOpen(false)} className="block px-4">
              <Button className="w-full bg-gradient-to-r from-accent to-yellow-400 text-foreground font-bold">Apply Now</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
