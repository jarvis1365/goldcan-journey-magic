import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919663817429?text=Hello, I'm interested in learning more about your programs", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
