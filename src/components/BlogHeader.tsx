import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogHeader = () => {
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
              <span>Karadeniz / Ankara Bölgesi</span>
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
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-crane-dark">
                KARADENIZ<span className="text-primary"> VİNÇ</span>
              </h1>
              <div className="ml-4 text-xs text-muted-foreground">
                Hiyap Kırma Vinç Hizmetleri
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
              <Link to="/#hakkimizda" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
              <Link to="/#hizmetler" className="text-foreground hover:text-primary transition-colors">Hizmetlerimiz</Link>
              <Link to="/#galeri" className="text-foreground hover:text-primary transition-colors">Galeri</Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-semibold">Blog</Link>
              <Link to="/#iletisim" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
            </div>

            <Button variant="contact" size="lg" className="hidden md:flex">
              <Phone className="w-4 h-4" />
              Hemen Ara
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BlogHeader;