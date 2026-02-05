import React from 'react';
import { Check, Zap, Truck, Gift } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Pack Inicial",
      qty: "1 frasco x 100 cápsulas",
      price: "69.900",
      before: "85.000",
      features: ["🚚 Envío GRATIS Nacional", "💊 Ashwagandha KSM-66", "🛡️ Compra Protegida"],
      highlight: false,
      cta: "Pedir Pack Inicial"
    },
    {
      name: "Dúo Bienestar",
      qty: "2 frascos x 100 cápsulas",
      price: "109.900", // Ahorro significativo: La 2da unidad sale a ~40k
      before: "139.800",
      features: ["🚚 Envío GRATIS Nacional", "💊 Ashwagandha KSM-66", "🎁 Guía Digital de Sueño", "✨ Ahorro del 22%"],
      highlight: true,
      cta: "¡Aprovechar Oferta 2x1!"
    },
    {
      name: "Pack Familiar",
      qty: "3 frascos x 100 cápsulas",
      price: "159.900", // Mayor ahorro: Cada unidad queda en ~53k
      before: "209.700",
      features: ["🚚 Envío GRATIS Nacional", "💊 Ashwagandha KSM-66", "🎁 Guía + Acceso Premium", "🔥 Máximo Ahorro"],
      highlight: false,
      cta: "Pedir Pack Familiar"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-[#F9F7F2] pb-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-[#3A5A40] mb-6 font-bold tracking-tighter">
            Invierte en tu <span className="text-[#E76F51] italic">Paz Mental</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu ritmo de vida. Todos incluyen envío gratuito y pago contra entrega.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white p-10 rounded-[50px] transition-all duration-500 hover:-translate-y-4 shadow-sm border border-gray-100 flex flex-col ${
                plan.highlight ? 'ring-4 ring-[#E76F51] shadow-2xl scale-105 z-10' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#E76F51] text-white px-8 py-2 rounded-full font-bold text-sm uppercase tracking-[0.2em] shadow-lg animate-pulse">
                  Más Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#3A5A40] mb-2">{plan.name}</h3>
                <p className="text-[#E76F51] font-bold text-sm uppercase tracking-widest">{plan.qty}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-[#3A5A40] tracking-tighter">${plan.price}</span>
                  <span className="text-gray-400 font-bold text-xl uppercase">Cop</span>
                </div>
                <p className="text-gray-400 line-through mt-1 text-lg">Antes: ${plan.before}</p>
              </div>
             {plan.highlight && (
                <p className="text-[#E76F51] text-xs font-bold mt-2 animate-pulse">
                    🔥 SOLO QUEDAN 7 PACKS DISPONIBLES
                </p>
                     )}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium">
                    <div className="bg-[#3A5A40]/10 p-1 rounded-full">
                      <Check size={18} className="text-[#3A5A40]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/573154498209?text=Hola! Quiero el ${plan.name} de Ashwagandha`}
                className={`block w-full py-6 rounded-[30px] font-bold text-xl text-center transition-all shadow-md active:scale-95 ${
                  plan.highlight 
                    ? 'bg-[#E76F51] text-white hover:bg-[#cf5d42] hover:shadow-[#E76F51]/30' 
                    : 'bg-[#3A5A40] text-white hover:bg-[#2d4531] shadow-[#3A5A40]/20'
                }`}
              >
                {plan.cta}
              </a>
              
              <p className="text-center text-xs text-gray-400 mt-6 font-medium uppercase tracking-widest flex items-center justify-center gap-2">
                <Truck size={14} /> Envío gratis y Pago Contra Entrega
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;