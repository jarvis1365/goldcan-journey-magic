import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export const VideoModal = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
              alt="Campus life"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/30" />
            
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 h-20 p-0 transition-all duration-300 hover:scale-110 bg-white/90 hover:bg-white"
                >
                  <PlayCircle className="w-10 h-10 text-primary" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Goldcan Education Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <div className="absolute bottom-8 left-8 text-white space-y-2">
              <h3 className="text-3xl font-bold">Watch Our Story</h3>
              <p className="text-white/90">Discover how we've helped thousands achieve their dreams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
