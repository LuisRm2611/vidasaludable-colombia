import React from 'react';
import { Pill, AlertTriangle, CheckCircle2 } from 'lucide-react';

const QuickGuide = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Tarjeta Modo de Uso */}
        <div className="bg-[#3A5A40] text-white p-10 rounded-[45px] shadow-xl flex flex-col justify-between">
          <div>
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Pill size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-6 uppercase tracking-tight">
              Modo de Uso
            </h3>
            <ul className="space-y-4 text-xl opacity-90">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-[#E76F51]" size={24} />
                <span>Tomar <strong>2 cápsulas al día</strong> (Dosis recomendada).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-[#E76F51]" size={24} />
                <span>Preferiblemente con una <strong>comida principal</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-[#E76F51]" size={24} />
                <span>Acompañar con un vaso de agua o bebida natural.</span>
              </li>
            </ul>
          </div>
          <p className="mt-8 text-sm italic opacity-70 border-t border-white/10 pt-4">
            *La constancia es la clave para ver resultados óptimos.
          </p>
        </div>

        {/* Tarjeta Recomendaciones */}
        <div className="bg-[#F9F7F2] p-10 rounded-[45px] border-2 border-dashed border-[#3A5A40]/20 flex flex-col">
          <div className="bg-[#E76F51]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <AlertTriangle size={32} className="text-[#E76F51]" />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-6 text-[#3A5A40] uppercase tracking-tight">
            Recomendaciones
          </h3>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-[#E76F51] font-bold text-2xl">•</span>
              <span><strong>No exceder</strong> la dosis diaria recomendada en el empaque.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E76F51] font-bold text-2xl">•</span>
              <span>Mantener en un lugar fresco, seco y fuera del alcance de los niños.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E76F51] font-bold text-2xl">•</span>
              <span>Consultar a su médico si está en embarazo, lactancia o bajo medicación.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E76F51] font-bold text-2xl">•</span>
              <span>Este producto es un suplemento dietario, no es un medicamento.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default QuickGuide;