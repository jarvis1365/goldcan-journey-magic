import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;
}

export const ProgramCard = ({ title, description, icon: Icon, image, link }: ProgramCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-premium hover:-translate-y-3 bg-card border-0 rounded-3xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-purple-600/70 to-primary/90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 bg-accent text-foreground px-4 py-2 rounded-full font-bold text-sm shadow-gold-glow">
          Featured
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-bold text-lg">Premium Program</span>
        </div>
      </div>
      
      <div className="p-8 space-y-4 bg-gradient-to-br from-white to-blue-50/30">
        <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button 
          className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-accent hover:to-yellow-500 text-white font-bold py-6 rounded-full transition-all duration-300 hover:shadow-glow hover:scale-105"
        >
          Learn More & Apply
        </Button>
      </div>
    </Card>
  );
};
