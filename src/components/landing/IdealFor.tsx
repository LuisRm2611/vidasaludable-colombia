import React from 'react';
import { CheckCircle2, Moon, Brain, Zap, Shield } from 'lucide-react';

const IdealFor = () => {
  const points = [
    "No logran dormir profundo",
    "Se levantan cansadas aunque duerman varias horas",
    "Sienten estrés, ansiedad o tensión diaria",
    "Necesitan claridad mental para trabajar o estudiar",
    "Trabajan bajo presión y viven días exigentes",
    "Quieren mejorar su estado de ánimo y energía natural",
    "Buscan un descanso real sin sensación pesada"
  ];

  return (
    <section className="pt-8 pb-24 px-6 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        
        {/* PARTE 1: Identificación del Cliente (Basado en IdealFor.tsx) */}
        <div className="bg-[#F9F7F2] p-10 md:p-20 rounded-[50px] border border-[#3A5A40]/5 mb-16 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-[#3A5A40] font-bold uppercase tracking-tight">
              Ideal para personas <span className="text-[#E76F51]">que...</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-[25px] border border-gray-100 shadow-sm hover:translate-x-2 transition-transform">
                <CheckCircle2 className="text-[#E76F51] shrink-0" size={26} />
                <span className="text-lg md:text-xl text-gray-700 font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PARTE 2: Beneficios de Alto Impacto (Basado en Benefits.tsx) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#3A5A40] text-white p-10 rounded-[45px] shadow-xl hover:-translate-y-2 transition-all">
            <Moon className="text-[#E76F51] mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 font-serif">Sueño Reparador</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Mejora la calidad de tu sueño profundo para despertar con energía renovada. Estudios demuestran hasta un 72% de mejora.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[45px] border-2 border-[#3A5A40]/10 shadow-sm hover:-translate-y-2 transition-all">
            <Brain className="text-[#3A5A40] mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 font-serif text-[#3A5A40]">Claridad Mental</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Despídete de la niebla mental. KSM-66 mejora la concentración y la memoria para que rindas al máximo.
            </p>
          </div>

          <div className="bg-[#E76F51] text-white p-10 rounded-[45px] shadow-xl hover:-translate-y-2 transition-all">
            <Zap className="text-white mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 font-serif">Energía Sostenida</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Energía constante sin los altibajos del café. Reduce el cortisol y libera tu vitalidad interior de forma natural.
            </p>
          </div>
        </div>

        {/* PARTE 3: El Dato Científico (Diferenciador de Confianza) */}
        <div className="bg-gradient-to-r from-[#3A5A40] to-[#2D4531] p-10 rounded-[40px] text-center text-white border-b-8 border-[#E76F51]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Shield size={40} className="text-[#E76F51]" />
            </div>
            <p className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed">
              <span className="text-[#E76F51] font-black text-3xl">59% DE REDUCCIÓN</span> comprobada en niveles de ansiedad y estrés clínico según estudios científicos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IdealFor;