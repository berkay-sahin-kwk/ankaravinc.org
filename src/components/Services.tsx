import { Truck, Building, Factory, Wrench, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Hiyap Kırma İşlemleri",
      description: "Profesyonel hiyap kırma hizmetleri ile yapıların güvenli şekilde yıkımı"
    },
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Endüstriyel Vinç Hizmetleri",
      description: "Ağır yüklerin kaldırılması ve taşınması için özel vinç hizmetleri"
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Mobil Vinç Kiralama",
      description: "İhtiyacınıza uygun kapasitede mobil vinç araçları"
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Montaj ve Demontaj",
      description: "Prefabrik yapıların montaj ve demontaj işlemleri"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Güvenli Operasyon",
      description: "Tüm işlemler tam güvenlik önlemleri ile gerçekleştirilir"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Acil Müdahale",
      description: "7/24 acil durum ve kurtarma operasyonları"
    }
  ];

  return (
    <section id="hizmetler" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              HİZMETLERİMİZ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesyonel ekibimiz ve modern ekipmanlarımızla kapsamlı hiyap kırma vinç hizmetleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured service with image */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Hiyap Kırma Uzmanları
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Özel hiyap kırma vinç hizmetlerimizle, yapıların güvenli ve kontrollü şekilde yıkımını gerçekleştiriyoruz. 
                  Sertifikalı operatörlerimiz ve özel ekipmanlarımızla en zorlu işleri bile başarıyla tamamlıyoruz.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Güvenli Yıkım</h4>
                      <p className="text-muted-foreground">Çevre güvenliğini ön planda tutarak kontrollü yıkım</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Çevre Dostu</h4>
                      <p className="text-muted-foreground">Çevresel etkileri minimum seviyede tutan yöntemler</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Hızlı Çözüm</h4>
                      <p className="text-muted-foreground">Planlanan sürede işlemlerin tamamlanması</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/d73d6aeb-a1db-4a4e-86ff-53346bb95672.png"
                  alt="Hiyap Kırma Vinç Hizmeti"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;