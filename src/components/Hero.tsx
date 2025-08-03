import { Phone, CheckCircle, Clock, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center bg-gradient-to-br from-crane-dark via-crane-dark/95 to-crane-dark/90 overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b8323982-a7bb-4a9d-873c-ecdc2831cb10.png"
          alt="Karadeniz Vinç Hizmeti"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            GÜVENİN ADRESİ
            <span className="block text-crane-yellow">KARADENIZ VİNÇ</span>
            <span className="block text-lg md:text-2xl lg:text-3xl font-normal text-white/90 mt-4">
              "Yükseklik bizim işimiz, güvenlik bizim önceliğimiz"
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Karadeniz ve Ankara bölgesinde profesyonel, hızlı ve güvenli 
            <br className="hidden md:block" />
            hiyap kırma vinç hizmetleri
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="xl" className="gap-3">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">Hemen Ara: </span>0533 137 30 14
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-crane-dark">
              Hizmetlerimizi İncele
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
              <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-crane-yellow mx-auto mb-2 lg:mb-3" />
              <h3 className="font-semibold mb-1 lg:mb-2 text-sm lg:text-base">Sertifikalı Ekip</h3>
              <p className="text-xs lg:text-sm text-white/80">Uzman operatörler</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
              <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-crane-yellow mx-auto mb-2 lg:mb-3" />
              <h3 className="font-semibold mb-1 lg:mb-2 text-sm lg:text-base">24/7 Hizmet</h3>
              <p className="text-xs lg:text-sm text-white/80">Hafta içi ve sonu</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
              <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-crane-yellow mx-auto mb-2 lg:mb-3" />
              <h3 className="font-semibold mb-1 lg:mb-2 text-sm lg:text-base">Güvenli İşlem</h3>
              <p className="text-xs lg:text-sm text-white/80">Tam sigorta</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
              <Truck className="w-6 h-6 lg:w-8 lg:h-8 text-crane-yellow mx-auto mb-2 lg:mb-3" />
              <h3 className="font-semibold mb-1 lg:mb-2 text-sm lg:text-base">Modern Ekipman</h3>
              <p className="text-xs lg:text-sm text-white/80">Son teknoloji</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;