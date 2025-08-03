import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative">
      {/* Top contact bar */}
      <div className="bg-crane-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Berkan Şahin: 0533 137 30 14</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ankara ve Çevresi</span>
              </div>
            </div>
          <div className="text-xs">
            <span className="text-crane-yellow">24/7</span> Hizmet
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-crane-dark">
                KARADENIZ<span className="text-primary"> VİNÇ</span>
              </h1>
              <div className="ml-4 text-xs text-muted-foreground">
                Hiyap Kırma Vinç Hizmetleri
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              <a href="/#anasayfa" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</a>
              <a href="/#hakkimizda" className="text-foreground hover:text-primary transition-colors">Hakkımızda</a>
              <a href="/#hizmetler" className="text-foreground hover:text-primary transition-colors">Hizmetlerimiz</a>
              <a href="/#galeri" className="text-foreground hover:text-primary transition-colors">Galeri</a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="/#iletisim" className="text-foreground hover:text-primary transition-colors">İletişim</a>
            </div>

            <Button variant="contact" size="lg" className="hidden sm:flex">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Hemen Ara</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;