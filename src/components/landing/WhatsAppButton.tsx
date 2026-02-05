import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Aparece después de 3 segundos para no ser agresivo al cargar
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Muestra el mensaje de ayuda automáticamente por 5 segundos
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 8000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "573154498209"; // REEMPLAZA CON TU NÚMERO
  const message = "Hola! Vengo de la página web y me gustaría recibir más información sobre la Ashwagandha KSM-66.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      
      {/* Burbuja de Mensaje (Tooltip) */}
      {showTooltip && (
        <div className="bg-white text-[#3A5A40] px-6 py-4 rounded-[25px] shadow-2xl border border-gray-100 mb-2 animate-bounce flex items-center gap-3 relative">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600"
          >
            <X size={12} />
          </button>
          <div className="w-2 h-2 bg-[#E76F51] rounded-full animate-pulse"></div>
          <p className="text-sm font-bold tracking-tight">
            ¿Tienes dudas? <span className="text-[#E76F51]">¡Hablemos por WhatsApp!</span>
          </p>
          {/* Triángulo de la burbuja */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
        </div>
      )}

      {/* Botón Principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-16 h-16 bg-[#3A5A40] text-white rounded-[22px] shadow-[0_15px_30px_rgba(58,90,64,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(58,90,64,0.4)] hover:bg-[#E76F51]"
      >
        {/* Efecto de Pulso Radial */}
        <span className="absolute inset-0 rounded-[22px] bg-[#3A5A40] animate-ping opacity-20 group-hover:bg-[#E76F51]"></span>
        
        <MessageCircle size={32} className="relative z-10 transition-transform group-hover:scale-110" />
        
        {/* Badge de Notificación */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E76F51] border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;