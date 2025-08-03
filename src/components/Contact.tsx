import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="iletisim" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              İLETİŞİM
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hiyap kırma vinç hizmetleri için bizimle iletişime geçin
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    Telefon İletişim
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Berkan Şahin</h4>
                      <a href="tel:+905331373014" className="text-xl font-bold text-primary hover:underline">
                        0533 137 30 14
                      </a>
                    </div>
                    <p className="text-muted-foreground">
                      7/24 acil vinç hizmetleri için direkt arayabilirsiniz
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Hizmet Bölgelerimiz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Karadeniz Bölgesi</p>
                    <p className="font-semibold text-foreground">Ankara ve Çevresi</p>
                    <p className="text-muted-foreground">
                      Diğer bölgeler için özel durumlarda hizmet verebiliriz
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    Çalışma Saatleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary">24 Saat / 7 Gün</p>
                    <p className="text-muted-foreground">
                      Hafta içi, hafta sonu ve tatil günlerinde kesintisiz hizmet
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Acil durumlar için 7/24 ulaşabilirsiniz
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary to-crane-yellow rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Hemen Teklif Alın
              </h3>
              <p className="text-lg mb-8 text-white/90">
                Hiyap kırma vinç hizmetleriniz için profesyonel çözümler sunuyoruz. 
                Deneyimli ekibimiz ile güvenli ve hızlı hizmet garantisi.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Neden Karadeniz Vinç?</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 15+ yıllık deneyim</li>
                    <li>✓ Sertifikalı operatörler</li>
                    <li>✓ Modern ekipman parkuru</li>
                    <li>✓ Güvenlik öncelikli çalışma</li>
                    <li>✓ Uygun fiyat garantisi</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="flex-1 bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="tel:+905331373014" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Hemen Ara
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;