import React from 'react';
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Entrega Satisfactoria ✅",
    content: "Después de años luchando con el insomnio, finalmente duermo profundamente. Mi energía ha cambiado completamente.",
    rating: 5,
    // Aquí pondrás el enlace de la foto del cliente con el producto
    productImg: "https://i.ibb.co/LX2LrQhZ/D-NQ-NP-2-X-977591-MLA105717182070-012026-F.webp" 
  },
  {
    name: "Carlos Mendoza",
    role: "Cliente Feliz 🥰",
    content: "El estrés del trabajo me tenía agotado. Con KSM-66 noto una calma increíble y mi concentración ha mejorado.",
    rating: 5,
    productImg: "https://i.ibb.co/bnFMP2F/D-NQ-NP-2-X-969022-MLA105097057779-012026-F.webp"
  },
 {
    name: "Sebastian Solis",
    role: "Cliente Frecuente ✅​",
    content: "El estrés de mi negocio me tenía agotado físicamente. El Dúo Bienestar me devolvió la energía que necesitaba sin darme taquicardia como el café. Me siento mucho más centrado y productivo..",
    rating: 5,
    productImg: "https://i.ibb.co/v4mYgh8J/D-NQ-NP-2-X-915163-MLA99643039839-112025-F.webp"
  },

 {
    name: "Sophia Valencia",
    role: "Clienta Satisfecha ⭐⭐⭐⭐⭐",
    content: "Amo este producto. Siento que comienza a hacer efecto desde el día 1 que lo tomo. Soy una persona extremadamente ansiosa, y desde que lo tomo, siento que puedo gestionar mejor sin tanto estrés mi día a día.",
    rating: 5,
    productImg: "https://i.ibb.co/5hcbz2w8/D-NQ-NP-2-X-656089-MLA103459791139-012026-F.webp"
  },

 {
    name: "Geraldin Rodriguez",
    role: "Stilista",
    content: "increíble. Mis niveles de ansiedad bajaron notablemente. Ya no me siento abrumada por las tareas diarias y descanso profundamente. El pago contra entrega fue super rápido.",
    rating: 5,
    productImg: "https://i.ibb.co/mVzz1Lfw/D-NQ-NP-2-X-840570-MLA105678614368-012026-F.webp"
  },
{
    name: "Juliana Posada",
    role: "Madre y Contadora",
    content: "Recomiendo el KSM-66 a mis pacientes por su respaldo científico. En mi caso personal, me ha ayudado a mantener la calma en jornadas de 10 horas. Es pureza real en cada cápsula.",
    rating: 5,
    productImg:"https://i.ibb.co/Fb6Z8Qs2/D-NQ-NP-2-X-788937-MLA106510800085-022026-F.webp"
  },
  {
    name: "Valeria Quesada",
    role: "Psicóloga",
    content: "Lo que más valoro es la claridad mental. Antes llegaba al mediodía agotada mentalmente; ahora mantengo el enfoque y la paciencia durante todas mis clases. Es un cambio sutil pero poderoso..",
    rating: 5,
    productImg:"https://i.ibb.co/S7y7VM5h/D-NQ-NP-2-X-624247-MLA106511126875-022026-F.webp"
  },
  {
    name: "Sandra Ortega",
    role: "Deportista 🚵​",
    content: "Mi recuperación muscular mejoró y mis niveles de cortisol bajaron. Me siento fuerte, vital y sobre todo, con mucha paz mental. ¡El envío a Medellín fue gratuito!",
    rating: 5,
    productImg:"https://i.ibb.co/2rdNqwL/1-VMJHG1-CIm-Wbeo-r1e-U6.webp"

  },
  {
    name: "Ana Rodríguez",
    role: "Recomendado ⭐⭐⭐⭐",
    content: "Entre los niños y el trabajo, siempre estaba exhausta. Ahora tengo energía para todo y duermo mejor que nunca.",
    rating: 5,
    productImg: "https://i.ibb.co/p6zqXKSr/1-VNt-Q71-YRp-Z8-Pg-4uf4e.webp"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-[#F9F7F2] text-[#3A5A40] rounded-full text-sm font-bold uppercase tracking-widest mb-4 border border-[#3A5A40]/10">
            Historias Reales
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#3A5A40] uppercase">
            Lo que dicen nuestros <span className="text-[#E76F51]">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-[#F9F7F2] p-8 rounded-[45px] border border-[#3A5A40]/5 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* ESPACIO PARA FOTO REAL DEL PRODUCTO (Basado en ejemplo web) */}
              <div className="mb-6 rounded-[30px] overflow-hidden border-4 border-white shadow-sm h-64">
                <img 
                  src={t.productImg} 
                  alt="Resultado real" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow">
                <div className="flex mb-4 text-[#E76F51]">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={20} fill="#E76F51" />
                  ))}
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="bg-[#3A5A40] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#3A5A40] text-xl">{t.name}</span>
                  <span className="text-xs font-black text-[#E76F51] uppercase tracking-tighter">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;