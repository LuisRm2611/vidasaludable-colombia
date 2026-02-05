import React from 'react';

const VisualTransformation = () => {
  return (
    <section className="pt-24 pb-8 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#3A5A40] leading-[0.9] tracking-tighter">
              Calma para tu <span className="text-[#E76F51] italic">mente</span>, Energía para tu <span className="text-[#E76F51] italic">vida</span>.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-md">
              No es solo un suplemento, es el interruptor que apaga el ruido mental y enciende tu vitalidad diaria.
            </p>
            <a 
  href="https://wa.me/573154498209?text=Hola! Quiero recuperar mi vitalidad con Ashwagandha"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#E76F51] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95 inline-block text-center cursor-pointer"
>
  Pedir Ahora por WhatsApp
</a>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="relative rounded-[50px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://i.ibb.co/rX0j0vs/Gemini-Generated-Image-4gwzo14gwzo14gwz.png" 
                alt="Transformación diaria" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-8 rounded-[30px] shadow-xl max-w-xs transition-all group-hover:-translate-y-2">
                <span className="text-[#E76F51] font-bold uppercase tracking-widest text-xs">Efecto Diario</span>
                <p className="text-[#3A5A40] font-bold text-xl mt-2 leading-tight">
                  "Siento que mi día rinde el doble desde que mi mente está en paz."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualTransformation;