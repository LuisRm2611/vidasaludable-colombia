import React, { useState } from 'react';
import { Instagram, Facebook, MessageCircle, ShieldCheck, X } from 'lucide-react';

const Footer = () => {
  // 1. Estado para controlar el Modal de Políticas
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  // 2. Textos de Políticas
  const policyContent: Record<string, { title: string, text: string }> = {
    privacidad: {
      title: "Política de Privacidad",
      text: "En Vida Saludable, tus datos están seguros. Solo los usamos para coordinar la entrega de tu Ashwagandha KSM-66 con las transportadoras aliadas."
    },
    reembolso: {
      title: "Política de Reembolso",
      text: "Garantía de 30 días. Si no estás satisfecho con la calidad del producto, gestionamos tu devolución de inmediato."
    },
    envio: {
      title: "Política de Envío",
      text: "Despachos a nivel nacional con pago contra entrega. El tiempo de entrega es de 2 a 5 días hábiles según tu ciudad."
    },
    terminos: {
      title: "Términos del Servicio",
      text: "Al comprar, aceptas recibir el producto y pagar el valor acordado en efectivo al repartidor. Incluye asesoría post-compra vía WhatsApp."
    }
  };

  // 3. Configuración de Redes Sociales
  const socialLinks = {
    instagram: "#",
    facebook: "#",
    whatsapp: "https://wa.me/573154498209"
  };

  return (
    <footer className="bg-[#3A5A40] text-white pt-20 pb-10 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* FILA SUPERIOR: CONTACTO, HORARIO Y POLÍTICAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16 mb-16 text-left">
          
          {/* Columna A: Marca y Contacto Real */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white mb-2 italic font-serif">Vida Saludable</h3>
            <div className="space-y-3">
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-[#E76F51] transition-colors">
                <span className="text-xl">💬</span>
                <span className="text-sm font-medium">+57 315 449 8209</span>
              </a>
              <a href="mailto:contacto@vidasaludable.com" className="flex items-center gap-3 text-white/70 hover:text-[#E76F51] transition-colors">
                <span className="text-xl">📧</span>
                <span className="text-sm font-medium">contacto@vidasaludable.com</span>
              </a>
            </div>
          </div>

          {/* Columna B: Horarios */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📅</span>
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">Horario de atención</h4>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Lunes a Sábados: <span className="text-white font-bold">07:00 – 20:00</span><br />
              Domingos y festivos: <span className="italic">09:00 – 19:00</span>
            </p>
          </div>

          {/* Columna C: Botones de Políticas */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Políticas</h4>
            <ul className="grid grid-cols-1 gap-3">
              {Object.keys(policyContent).map((key) => (
                <li key={key}>
                  <button 
                    onClick={() => setActivePolicy(key)}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-all hover:translate-x-1 cursor-pointer"
                  >
                    <span className="h-1 w-1 bg-[#E76F51] rounded-full"></span> 
                    {policyContent[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECCIÓN TRANSPORTADORAS */}
        <div className="border border-white/10 rounded-[40px] p-8 mb-20 bg-white/10 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col items-center">
            <span className="bg-[#E76F51] text-white px-6 py-2 rounded-full font-black text-sm tracking-[0.2em] mb-8 shadow-lg">
              PAGO CONTRA ENTREGA CON:
            </span>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {['servientrega', 'interrapidisimo', 'envia', 'coordinadora', '99minutos', 'tcc'].map((logo) => (
                <img 
                  key={logo} 
                  src={`/logos/${logo}.png`} 
                  alt={logo} 
                  className="h-8 md:h-10 object-contain filter brightness-110 saturate-110" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* SECCIÓN INFERIOR: NAVEGACIÓN Y GARANTÍA */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div>
            <h4 className="text-[#E76F51] font-black text-lg tracking-[0.15em] mb-6 uppercase">Ashwagandha KSM-66</h4>
            <h2 className="font-serif text-4xl mb-6 italic leading-tight">Vida Saludable</h2>
            <div className="flex gap-4 mt-8">
              <a href={socialLinks.instagram} className="bg-white/10 p-4 rounded-full hover:bg-[#E76F51] transition-all"><Instagram size={24} /></a>
              <a href={socialLinks.facebook} className="bg-white/10 p-4 rounded-full hover:bg-[#E76F51] transition-all"><Facebook size={24} /></a>
              <a href={socialLinks.whatsapp} className="bg-white/10 p-4 rounded-full hover:bg-[#E76F51] transition-all"><MessageCircle size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#E76F51] font-black text-lg tracking-[0.15em] mb-8 uppercase">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xl text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#testimonials" className="text-xl text-gray-300 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#pricing" className="text-xl text-gray-300 hover:text-white transition-colors">Ver Ofertas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#E76F51] font-black text-lg tracking-[0.15em] mb-8 uppercase">Garantía</h4>
            <div className="bg-white/5 p-8 rounded-[30px] border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="text-[#E76F51]" size={40} />
                <span className="text-2xl font-bold">Compra Protegida</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Pago 100% en efectivo al recibir tu pedido.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-white/10 text-gray-400 font-medium">
          <p>© 2026 Vida Saludable - Ashwagandha KSM-66. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* MODAL DE POLÍTICAS (CORREGIDO PARA VERCEL) */}
      {activePolicy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white text-[#3A5A40] p-8 rounded-[30px] max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setActivePolicy(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4 italic font-serif text-[#3A5A40]">
              {policyContent[activePolicy].title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              {policyContent[activePolicy].text}
            </p>
            <button 
              onClick={() => setActivePolicy(null)}
              className="w-full bg-[#E76F51] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;