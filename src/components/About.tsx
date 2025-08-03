import { Award, Users, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="hakkimizda" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              BİZ <span className="text-primary">KİMİZ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Karadeniz ve Ankara bölgesinde güvenilir hiyap kırma vinç hizmetleri sunuyoruz
            </p>
            <div className="text-lg font-semibold text-primary">
              "15 yıldır güvenle yükseklerde"
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/19c9d8af-25fd-41e7-8ce2-e217d496c2e5.png"
                alt="Karadeniz Vinç Ekibi"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Profesyonel Hiyap Kırma Vinç Hizmetleri
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Karadeniz Vinç</strong> olarak, Karadeniz ve Ankara bölgesinde hızlı, güvenli ve profesyonel 
                hiyap kırma vinç hizmetleri sunuyoruz. Deneyimli ekibimiz ve modern ekipmanlarımızla 
                24 saat kesintisiz hizmet veriyoruz.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                Sertifikalı operatörlerimiz ve son teknoloji vinç araçlarımızla, en zorlu işleri bile 
                güvenle gerçekleştiriyoruz. Müşteri memnuniyeti bizim için öncelik.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sertifikalı ve deneyimli operatörler</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Profesyonel ve güler yüzlü hizmet</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">24/7 kesintisiz hizmet</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Karadeniz ve Ankara bölgesi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-foreground font-medium">Yıllık Deneyim</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-foreground font-medium">Başarılı Proje</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-foreground font-medium">Hizmet Saati</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">%100</div>
                <div className="text-foreground font-medium">Müşteri Memnuniyeti</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;