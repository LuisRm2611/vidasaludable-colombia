import { AlertTriangle, Sparkles, Brain, Moon, Zap, Heart, Check, X } from "lucide-react";
const problems = [
  { icon: AlertTriangle, text: "Estrés constante y ansiedad" },
  { icon: Moon, text: "Insomnio y sueño de mala calidad" },
  { icon: Brain, text: "Niebla mental y falta de concentración" },
  { icon: Zap, text: "Fatiga crónica sin energía" },
];
const solutions = [
  { icon: Heart, text: "Cortisol reducido hasta un 66%" },
  { icon: Moon, text: "Sueño profundo y reparador" },
  { icon: Brain, text: "Claridad mental y enfoque" },
  { icon: Zap, text: "Energía sostenida todo el día" },
];
const ProblemSolution = () => {
  return (
    <section id="ciencia" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sage-light text-sage rounded-full text-sm font-medium mb-4">
            La Ciencia Detrás del Cambio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            De la Fatiga a la <span className="text-primary">Vitalidad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KSM-66 es el extracto de Ashwagandha más estudiado y con mayor respaldo científico del mundo
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Problems */}
          <div className="bg-background rounded-3xl p-8 lg:p-10 shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                ¿Te sientes así?
              </h3>
            </div>
            
            <div className="space-y-5">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-destructive/5 rounded-2xl border border-destructive/10"
                >
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Solutions */}
          <div className="bg-sage rounded-3xl p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-sage-foreground/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-sage-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-sage-foreground">
                Con KSM-66
              </h3>
            </div>
            
            <div className="space-y-5">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-sage-foreground/10 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-foreground/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-sage-foreground" />
                  </div>
                  <p className="text-sage-foreground font-medium">{solution.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "24+", label: "Estudios Clínicos", isPercentage: false },
            { number: "66%", label: "Reducción Cortisol", isPercentage: true },
            { number: "72%", label: "Mejor Sueño", isPercentage: true },
            { number: "60+", label: "Días de Garantía", isPercentage: false },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-2xl shadow-md">
              <p className={`font-display text-3xl lg:text-4xl font-bold mb-1 ${
                stat.isPercentage ? "text-cta" : "text-primary"
              }`}>
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProblemSolution;
