import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Hiyap Kırma İşlemlerinde Güvenlik Önlemleri",
      excerpt: "Hiyap kırma işlemleri sırasında alınması gereken güvenlik önlemleri ve profesyonel yaklaşımlar hakkında bilmeniz gerekenler.",
      image: "/lovable-uploads/19c9d8af-25fd-41e7-8ce2-e217d496c2e5.png",
      date: "15 Aralık 2024",
      author: "Berkan Şahin",
      readTime: "5 dk",
      category: "Güvenlik"
    },
    {
      id: 2,
      title: "Modern Vinç Teknolojileri ve Avantajları",
      excerpt: "Günümüz vinç teknolojilerinin sunduğu avantajlar ve Karadeniz Vinç'te kullandığımız son teknoloji ekipmanlar.",
      image: "/lovable-uploads/d73d6aeb-a1db-4a4e-86ff-53346bb95672.png",
      date: "10 Aralık 2024",
      author: "Berkan Şahin",
      readTime: "4 dk",
      category: "Teknoloji"
    },
    {
      id: 3,
      title: "Karadeniz Bölgesinde Vinç Hizmetlerinin Önemi",
      excerpt: "Karadeniz bölgesinin coğrafi yapısı ve iklim koşulları göz önüne alındığında vinç hizmetlerinin kritik önemi.",
      image: "/lovable-uploads/b8323982-a7bb-4a9d-873c-ecdc2831cb10.png",
      date: "5 Aralık 2024",
      author: "Berkan Şahin",
      readTime: "6 dk",
      category: "Bölgesel"
    },
    {
      id: 4,
      title: "Endüstriyel Projeler İçin Vinç Seçimi",
      excerpt: "Büyük endüstriyel projeler için doğru vinç seçiminin önemi ve dikkat edilmesi gereken faktörler.",
      image: "/lovable-uploads/81e8e1fc-b72d-43b5-a035-229b7306a1a4.png",
      date: "1 Aralık 2024",
      author: "Berkan Şahin",
      readTime: "7 dk",
      category: "Endüstriyel"
    },
    {
      id: 5,
      title: "Acil Durum Vinç Hizmetleri: Ne Zaman Aranır?",
      excerpt: "Acil durumlar için vinç hizmetine ne zaman ihtiyaç duyulur ve nasıl hızlı çözüm sağlanır.",
      image: "/lovable-uploads/fcb4de8d-790c-42d6-890b-5bd22528f34a.png",
      date: "28 Kasım 2024",
      author: "Berkan Şahin",
      readTime: "3 dk",
      category: "Acil Servis"
    },
    {
      id: 6,
      title: "Ankara'da Vinç Hizmetleri ve Şehir İçi Operasyonlar",
      excerpt: "Ankara'nın şehir yapısında vinç operasyonlarının zorluları ve çözüm yöntemlerimiz.",
      image: "/lovable-uploads/b352c4cd-4cea-4c90-8253-5ada95b133df.png",
      date: "25 Kasım 2024",
      author: "Berkan Şahin",
      readTime: "5 dk",
      category: "Şehir İçi"
    }
  ];

  const categories = ["Tümü", "Güvenlik", "Teknoloji", "Bölgesel", "Endüstriyel", "Acil Servis", "Şehir İçi"];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      {/* Header */}
      <div className="bg-gradient-to-br from-crane-dark to-crane-dark/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              KARADENIZ VİNÇ <span className="text-crane-yellow">BLOG</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Vinç hizmetleri, güvenlik önlemleri ve sektörel gelişmeler hakkında 
              <br className="hidden md:block" />
              uzman görüşleri ve pratik bilgiler
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-crane-yellow font-semibold">
                "Bilgi paylaştıkça çoğalır, güvenlik artar"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tümü" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Öne Çıkan
                    </span>
                    <span className="text-muted-foreground text-sm">{blogPosts[0].category}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Button variant="default" className="gap-2">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary to-crane-yellow rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Vinç Dünyasından Haberdar Olun
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Sektörel gelişmeler, güvenlik ipuçları ve Karadeniz Vinç'ten son haberler için 
              bizi takip edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Button 
                variant="secondary" 
                size="lg" 
                className="flex-1 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a 
                  href="https://wa.me/905331373014?text=Merhaba, Karadeniz Vinç hiyap kırma hizmetleri hakkında bilgi almak istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp ile İletişim
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+905331373014">0533 137 30 14</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;