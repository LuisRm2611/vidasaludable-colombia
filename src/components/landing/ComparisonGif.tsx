const ComparisonGif = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            La Diferencia es <span className="text-primary">Real</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre cómo tu día puede transformarse con Ashwagandha KSM-66
          </p>
        </div>
        
        {/* GIF Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-sage-light to-cream rounded-3xl shadow-2xl overflow-hidden border-2 border-sage/20">
            <div className="aspect-video flex items-center justify-center bg-muted/30">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-sage/20 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-sage"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-foreground mb-2">
                    GIF Comparativo
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Día con Estrés" vs "Día con Ashwagandha"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    (Reemplazar con GIF real: /comparison-stress-vs-wellness.gif)
                  </p>
                </div>
              </div>
            </div>
            {/* Placeholder for actual GIF */}
            <img
              src="/comparison-stress-vs-wellness.gif"
              alt="Comparación: Día con estrés vs Día con Ashwagandha KSM-66"
              className="hidden w-full h-full object-cover"
              onError={(e) => {
                // Si la imagen no existe, mantener el placeholder
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonGif;
