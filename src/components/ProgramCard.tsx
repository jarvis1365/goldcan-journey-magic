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
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-card border-border">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Icon className="w-6 h-6" />
          <span className="font-semibold">Featured Program</span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
        <Button 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          variant="outline"
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
};
