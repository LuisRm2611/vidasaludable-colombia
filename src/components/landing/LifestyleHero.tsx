import React from 'react';

const LifestyleHero = () => {
  return (
    <section className="pt-8 pb-24 px-6 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#3A5A40] tracking-tighter mb-8 leading-none">
          Tu transformación <br /> <span className="text-[#E76F51]">empieza hoy</span>.
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 h-[500px] rounded-[50px] overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-500">
          <img src="https://i.ibb.co/5XS9GkrX/Gemini-Generated-Image-iqspuciqspuciqsp.png" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt="KSM-66 Premium" />
        </div>
        
        <div className="h-[500px] rounded-[50px] overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-500 border-b-8 border-[#E76F51]">
          <img src="https://i.ibb.co/j9gbt80d/Dise-o-sin-t-tulo-5.png" className="w-full h-full object-cover" alt="Bienestar real" />
        </div>
      </div>
    </section>
  );
};

export default LifestyleHero;