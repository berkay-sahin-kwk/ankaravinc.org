import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-crane-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              KARADENIZ<span className="text-crane-yellow"> VİNÇ</span>
            </h3>
            <p className="text-white/80 mb-4">
              Hiyap kırma vinç hizmetlerinde güvenilir çözüm ortağınız. 
              Profesyonel ekibimiz ve modern ekipmanlarımızla 7/24 hizmetinizdeyiz.
            </p>
            <div className="text-sm text-white/60">
              Sertifikalı • Güvenli • Hızlı
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-crane-yellow">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-crane-yellow" />
                <div>
                  <div className="font-semibold">Berkan Şahin</div>
                  <a href="tel:+905331373014" className="text-white/80 hover:text-white">
                    0533 137 30 14
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-crane-yellow" />
                <div className="text-white/80">
                  Karadeniz / Ankara Bölgesi
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-crane-yellow" />
                <div className="text-white/80">
                  24 Saat / 7 Gün Hizmet
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-crane-yellow">Hizmet Bölgelerimiz</h4>
            <div className="grid grid-cols-2 gap-1 text-sm text-white/80">
              <div>Altındağ • Çankaya</div>
              <div>Keçiören • Yenimahalle</div>
              <div>Mamak • Sincan</div>
              <div>Etimesgut • Gölbaşı</div>
              <div>Polatlı • Beypazarı</div>
              <div>Çubuk • Kızılcahamam</div>
              <div>Şereflikoçhisar • Haymana</div>
              <div>Kalecik • Güdül</div>
              <div>Evren • Çamlıdere</div>
              <div>Pursaklar • Akyurt</div>
              <div>Elmadağ • Nallıhan</div>
              <div>Bala • Ayaş</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-crane-yellow">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Hiyap Kırma İşlemleri</li>
              <li>• Endüstriyel Vinç Hizmetleri</li>
              <li>• Mobil Vinç Kiralama</li>
              <li>• Montaj ve Demontaj</li>
              <li>• Acil Müdahale</li>
              <li>• Güvenli Operasyon</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Karadeniz Vinç. Tüm hakları saklıdır.
            </div>
            <div className="text-white/60 text-sm">
              Geliştirici: <span className="text-crane-yellow font-medium">SHAZ WEB</span> - 
              <a href="https://berkaysahin.com" target="_blank" rel="noopener noreferrer" className="text-crane-yellow hover:text-white ml-1">
                berkaysahin.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;