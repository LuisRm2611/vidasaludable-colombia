import React from 'react';
import { ShieldCheck, Truck, Wallet, CheckCircle } from 'lucide-react';

const TrustBadges = () => {
  return (
    <section className="bg-white py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Contenedor Principal Optimizado */}
        <div className="grid lg:grid-cols-3 gap-8 items-center bg-[#F9F7F2] rounded-[40px] p-8 md:p-12 border border-[#3A5A40]/10 shadow-sm">
          
          {/* 1. Garantía Compacta (Lado Izquierdo) */}
          <div className="flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-[#3A5A40]/10 pb-8 lg:pb-0 lg:pr-8">
            <img 
              src="https://i.ibb.co/5WhJVgG9/satisfaccion-garantizada.png" 
              alt="Garantía" 
              className="h-24 w-auto drop-shadow-md" 
            />
            <div>
              <h3 className="text-xl font-bold text-[#3A5A40] uppercase tracking-tight">Garantía Real</h3>
              <p className="text-gray-600 text-sm leading-snug">
                <span className="font-bold text-[#E76F51]">30 días</span> de satisfacción total o te devolvemos tu dinero.
              </p>
            </div>
          </div>

          {/* 2. Beneficios Logísticos (Centro) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#3A5A40]/5">
              <div className="bg-[#3A5A40]/10 p-2 rounded-lg">
                <Truck className="text-[#3A5A40]" size={24} />
              </div>
              <span className="font-bold text-[#3A5A40]">Envío Express Nacional</span>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#3A5A40]/5">
              <div className="bg-[#3A5A40]/10 p-2 rounded-lg">
                <Wallet className="text-[#3A5A40]" size={24} />
              </div>
              <span className="font-bold text-[#3A5A40]">Pago Contra Entrega</span>
            </div>
          </div>

          {/* 3. Métodos de Pago y Seguridad (Derecha) */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex items-center gap-2 text-[#3A5A40] font-bold text-sm uppercase tracking-widest mb-2">
              <CheckCircle size={16} className="text-[#E76F51]" />
              Transacción Segura
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl shadow-inner flex flex-wrap justify-center gap-4 w-full lg:w-auto border border-[#3A5A40]/5">
              <img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/468X60.jpg" alt="Mercado Pago" className="h-10 object-contain" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal"alt="PayPal" className="h-8" />"
            </div>
          </div>

        </div>

        {/* Micro-Texto de Confianza Adicional (Aprovechando el espacio inferior) */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[#3A5A40]/50 font-medium text-sm">
          <span>✓ KSM-66 Certificado</span>
          <span>✓ Sin Gluten</span>
          <span>✓ No GMO</span>
          <span>✓ Hecho en USA</span>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;