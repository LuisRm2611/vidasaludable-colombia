const LifestyleGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Producto en Uso",
      description: "Estilo de vida saludable",
      image: "/lifestyle-1.jpg",
    },
    {
      id: 2,
      title: "Bienestar Diario",
      description: "Energía y vitalidad",
      image: "/lifestyle-2.jpg",
    },
    {
      id: 3,
      title: "Momento Premium",
      description: "Calidad de vida",
      image: "/lifestyle-3.jpg",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-sage-light text-sage rounded-full text-sm font-medium mb-4">
            Estilo de Vida
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Vive tu Mejor <span className="text-primary">Versión</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre cómo Ashwagandha KSM-66 se integra en tu vida diaria
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-sage/30 bg-muted/20 hover:border-sage/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-sage-light/50 to-cream">
                <div className="text-center space-y-3 p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-sage/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    (Foto real: {item.image})
                  </p>
                </div>
              </div>
              {/* Placeholder for actual image */}
              <img
                src={item.image}
                alt={item.title}
                className="hidden absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Si la imagen no existe, mantener el placeholder
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;
