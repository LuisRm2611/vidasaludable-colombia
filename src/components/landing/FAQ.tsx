import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { 
      q: "¿Cómo funciona el Pago Contra Entrega?", 
      a: "Es muy sencillo: realizas tu pedido hoy y solo pagas en efectivo al repartidor en el momento en que recibes el producto físico en la puerta de tu casa u oficina." 
    },
    { 
      q: "¿Cuánto tiempo tarda en llegar mi pedido?", 
      a: "Realizamos despachos diarios. El tiempo estimado de entrega en las principales ciudades de Colombia es de 2 a 4 días hábiles." 
    },
    { 
      q: "¿El producto tiene registro y es seguro?", 
      a: "Sí, nuestro KSM-66 es 100% natural, libre de gluten y fabricado bajo los más altos estándares de calidad (GMP). Es un suplemento seguro para el consumo diario." 
    },
    { 
      q: "¿Cuándo empezaré a notar los beneficios?", 
      a: "Muchos clientes reportan una mejor calidad de sueño desde la primera semana. Los beneficios en la reducción de estrés y cortisol suelen ser más notables después de 3 a 4 semanas de uso constante." 
    }
  ];

  return (
    <section id="faq"className="py-24 px-6 bg-[#F9F7F2]">
        <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle size={48} className="mx-auto text-[#E76F51] mb-4 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A5A40] uppercase">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details 
              key={i} 
              className="group bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <summary className="flex justify-between items-center p-8 text-left cursor-pointer font-bold text-[#3A5A40] text-xl list-none select-none">
                {f.q}
                <div className="bg-[#F9F7F2] p-2 rounded-full group-open:rotate-180 transition-transform">
                  <ChevronDown size={20} className="text-[#E76F51]" />
                </div>
              </summary>
              <div className="px-8 pb-8 text-left text-gray-600 text-lg border-t border-gray-50 pt-6 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;