import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FloatingApplyButton = () => {
  return (
    <Link to="/apply" className="fixed bottom-6 left-6 z-50 animate-float">
      <Button 
        size="lg" 
        className="shadow-premium hover:shadow-glow bg-gradient-to-r from-primary to-accent text-white font-semibold"
      >
        <GraduationCap className="w-5 h-5 mr-2" />
        Apply Now
      </Button>
    </Link>
  );
};
