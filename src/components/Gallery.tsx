import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "/lovable-uploads/b8323982-a7bb-4a9d-873c-ecdc2831cb10.png",
      alt: "Karadeniz Vinç Ford Cargo"
    },
    {
      src: "/lovable-uploads/19c9d8af-25fd-41e7-8ce2-e217d496c2e5.png",
      alt: "Hiyap Kırma İşlemi"
    },
    {
      src: "/lovable-uploads/d73d6aeb-a1db-4a4e-86ff-53346bb95672.png",
      alt: "Vinç Tabela Montajı"
    },
    {
      src: "/lovable-uploads/b352c4cd-4cea-4c90-8253-5ada95b133df.png",
      alt: "Karadeniz Vinç Ekibi"
    },
    {
      src: "/lovable-uploads/fcb4de8d-790c-42d6-890b-5bd22528f34a.png",
      alt: "Şantiye Çalışması"
    },
    {
      src: "/lovable-uploads/81e8e1fc-b72d-43b5-a035-229b7306a1a4.png",
      alt: "Bina Montaj İşlemi"
    }
  ];

  return (
    <section id="galeri" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ÇALIŞMA <span className="text-primary">GALERİMİZ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gerçekleştirdiğimiz hiyap kırma ve vinç hizmetlerinden örnekler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-foreground">{image.alt}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Karadeniz Vinç</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Büyük görünüm"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;