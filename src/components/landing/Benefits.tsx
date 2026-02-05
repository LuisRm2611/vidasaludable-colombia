import { Moon, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const benefits = [
  {
    icon: Moon,
    title: "Sueño Reparador",
    description:
      "Mejora la calidad de tu sueño profundo para despertar con energía renovada cada mañana. Estudios demuestran hasta un 72% de mejora en la calidad del sueño.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Brain,
    title: "Claridad Mental",
    description:
      "Despídete de la niebla mental. KSM-66 mejora la concentración, la memoria y la capacidad cognitiva para que rindas al máximo.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Energía Sostenida",
    description:
      "Obtén energía natural y constante sin los altibajos del café. Reduce el cortisol y libera tu vitalidad interior.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
  },
];
const Benefits = () => {
  return (
    <section id="Benefits" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sage-light text-sage rounded-full text-sm font-medium mb-4">
            Beneficios Comprobados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transforma tu <span className="text-primary">Bienestar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Ashwagandha KSM-66 puede mejorar cada aspecto de tu vida diaria
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className={`w-10 h-10 ${benefit.iconColor}`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Benefits;
