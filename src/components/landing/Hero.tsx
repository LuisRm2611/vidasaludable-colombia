import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Izquierdo: Texto */}
        <div className="z-10">
          <span className="text-[#E76F51] font-bold tracking-wider text-lg mb-6 block uppercase">
            Extracto KSM-66 Premium • 100% Natural
          </span>
          
          <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-[#3A5A40] leading-[1.05] mb-8 font-bold">
            Adiós al Estrés.<br/>
            <span className="text-[#E76F51] italic">Hola Energía.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            La fórmula científica que reduce el cortisol, mejora tu sueño profundo y te devuelve la vitalidad que perdiste.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-12">
            <a 
              href="#pricing" 
              className="bg-[#E76F51] text-white px-10 py-5 rounded-full font-bold text-2xl shadow-xl hover:scale-105 transition-all w-full sm:w-auto text-center"
            >
              ¡Recuperar mi Energía!
            </a>
            
            <div className="flex flex-col">
              <span className="text-[#3A5A40] font-bold text-2xl">
                Desde <span className="text-4xl text-[#E76F51]">$69.900</span>
              </span>
              <span className="text-sm text-gray-500 font-medium">Envío Gratis Nacional</span>
            </div>
          </div>

          {/* Prueba Social */}
          <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl w-max border border-[#3A5A40]/10">
            <div className="flex text-yellow-500 text-4xl tracking-tighter">
              ★★★★★
            </div>
            <div className="flex flex-col">
              <span className="text-[#3A5A40] text-2xl font-black">+9,900 Clientes Felices</span>
              <span className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">Resultados Garantizados</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Contenedor de Imagen (SIN FONDO BLANCO) */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -top-4 -right-2 bg-[#E76F51] text-white h-24 w-24 rounded-full z-20 font-bold shadow-xl flex items-center justify-center text-center text-sm transform rotate-12">
            100%<br/>Natural
          </div>
          
          {/* Aquí eliminamos cualquier bg-white del contenedor */}
          <div className="relative w-full flex items-center justify-center p-4 bg-transparent">
            <img 
              src="https://i.ibb.co/zhMQdSqj/Gemini-Generated-Image-dczn5cdczn5cdczn-1.png" 
              alt="Frasco Ashwagandha" 
              className="w-full max-h-[650px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// ESTA LÍNEA ES LA QUE FALTA Y CAUSA LA PANTALLA BLANCA:
export default Hero;