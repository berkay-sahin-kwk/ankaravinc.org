import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "905331373014"; // 0533 137 30 14 formatında
  const message = "Merhaba, Karadeniz Vinç hiyap kırma hizmetleri hakkında bilgi almak istiyorum.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        asChild
        variant="default"
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl animate-pulse-slow p-4 h-16 w-16 lg:w-auto lg:h-12 lg:px-6"
      >
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-6 h-6 lg:w-5 lg:h-5" />
          <span className="hidden lg:inline font-semibold">WhatsApp</span>
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;