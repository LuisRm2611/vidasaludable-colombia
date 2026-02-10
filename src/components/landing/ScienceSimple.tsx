import React from 'react';
import { AlertCircle, Sparkles, ShieldCheck, Zap, Moon, Brain } from 'lucide-react';

const ScienceSimple = ({ onOpenCheckout }) => { // <--- DEBE tener estas llaves { }
  return (
    <section className="py-24 px-6 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Título con Tipografía de Gran Formato */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#3A5A40] tracking-tighter leading-none mb-6">
            Tu cuerpo en <span className="text-[#E76F51] italic">equilibrio</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed opacity-80">
            La Ashwagandha KSM-66 actúa como un termostato natural para tu estrés.
          </p>
        </div>

        {/* Contenedores con Efecto de Movimiento (Hover) */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          
          {/* Lado: Estado Actual - Tarjeta que reacciona al mouse */}
          <div className="group bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-[#E76F51]/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#E76F51]">
                <AlertCircle size={28} />
              </div>
              <h4 className="text-[#E76F51] font-bold uppercase tracking-[0.2em] text-sm">Ritmo Actual</h4>
            </div>
            
            <ul className="space-y-8">
              {[
                "Niveles de cortisol elevados",
                "Mente saturada y falta de enfoque",
                "Cansancio acumulado al despertar"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-gray-400 group-hover:text-gray-600 transition-colors text-xl font-medium">
                  <span className="text-red-200 text-2xl">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Lado: Efecto KSM-66 - Tarjeta que reacciona al mouse */}
          <div className="group bg-[#3A5A40] p-12 rounded-[50px] shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(58,90,64,0.3)] relative overflow-hidden">
            {/* Brillo sutil de fondo al pasar el mouse */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#E76F51]">
                <Sparkles size={28} />
              </div>
              <h4 className="text-[#E76F51] font-bold uppercase tracking-[0.2em] text-sm italic">Efecto KSM-66</h4>
            </div>
            
            <ul className="space-y-8 relative z-10">
              {[
                "Calma mental profunda y constante",
                "Claridad para tus tareas diarias",
                "Energía renovada cada mañana"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-white/70 group-hover:text-white transition-colors text-xl font-medium">
                  <span className="text-[#E76F51] font-bold text-2xl">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fila de Badges Minimalistas con Hover sutil */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Brain, label: "Enfoque Mental" },
            { icon: Moon, label: "Sueño Profundo" },
            { icon: Zap, label: "Vitalidad Real" },
            { icon: ShieldCheck, label: "Calma Natural" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/40 backdrop-blur-md border border-[#3A5A40]/5 p-8 rounded-[35px] flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:shadow-lg group">
              <item.icon className="text-[#3A5A40]/40 group-hover:text-[#E76F51] transition-colors mb-4" size={35} />
              <span className="font-bold text-[#3A5A40] uppercase text-xs tracking-[0.15em]">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
      {/* Los 4 iconos: Enfoque, Sueño, Vitalidad, Calma */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
  {/* Tus iconos actuales aquí... */}
</div>

{/* EL BOTÓN CORREGIDO (Sin propiedades incompatibles) */}
{/* BOTÓN CON SALTO CONSTANTE */}
<div className="mt-12 flex justify-center">
  <button 
    onClick={onOpenCheckout}
    className="bg-[#3A5A40] text-white font-black py-5 px-12 rounded-full text-2xl shadow-2xl hover:bg-[#2d4632] transition-all hover:scale-110 animate-bounce-slow"
  >
    🛒 PEDIR AHORA POR WHATSAPP
  </button>
</div>
    </section>
  );
};

export default ScienceSimple;