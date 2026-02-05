import React from 'react';

const ScientificStats = () => {
  const stats = [
    { value: "-66%", label: "Cortisol", desc: "Reducción de la hormona del estrés" },
    { value: "-59%", label: "Ansiedad", desc: "Mejora en escala HAM-A" },
    { value: "+72%", label: "Sueño", desc: "Mejora en calidad del descanso" },
    { value: "+33%", label: "Vitalidad", desc: "Aumento en niveles de energía" }
  ];

  return (
    // IMPORTANTE: Aquí agregamos id="beneficios" para que el menú funcione
    <section id="beneficios" className="py-24 px-6 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-[#3A5A40] mb-6 font-bold">
            Resultados Reales Respaldados por la Ciencia
          </h2>
          <p className="text-gray-500 text-xl">Estudios clínicos de 60 días, doble ciego y controlados.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <span className="block text-6xl md:text-7xl font-bold text-[#E76F51] mb-4">{stat.value}</span>
              <h3 className="font-serif text-3xl text-[#3A5A40] mb-2 font-bold">{stat.label}</h3>
              <p className="text-gray-500 text-lg leading-tight">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScientificStats;