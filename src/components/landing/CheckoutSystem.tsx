import React, { useState, useEffect } from 'react';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutSystem: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  // --- LÓGICA Y ESTADOS ---
  const [step, setStep] = useState<'form' | 'discount'>('form');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos
  const [hasDiscount, setHasDiscount] = useState(false); // ¿Tiene el 10%?
  const [error, setError] = useState(false); // Para la barra roja de error

  // Datos del cliente
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ciudad: '',
    direccion: ''
  });

  // Precios
  const PRECIO_BASE = 69900;
  // Si tiene descuento: 62.910, si no: 69.900
  const precioFinal = hasDiscount ? Math.round(PRECIO_BASE * 0.9) : PRECIO_BASE;

  // Temporizador
  useEffect(() => {
    let timer: any;
    if (step === 'discount' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  // Formato de tiempo MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Manejar escritura en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(false); // Quitar error si el usuario empieza a escribir
  };

  // Interceptar el cierre (La lógica inteligente)
  const handleCloseAttempt = () => {
    if (step === 'form' && !hasDiscount) {
      // Si está en el formulario y NO tiene descuento aún -> Mostrar oferta
      setStep('discount');
    } else {
      // Si ya vio la oferta o ya la aceptó -> Cerrar de verdad
      onClose();
      setTimeout(() => {
        setStep('form');
        setError(false);
      }, 300);
    }
  };

  // Confirmar pedido y enviar a WhatsApp
  const handleConfirm = () => {
    // 1. Validación: ¿Están vacíos?
    if (!formData.nombre || !formData.telefono || !formData.ciudad || !formData.direccion) {
      setError(true);
      setTimeout(() => setError(false), 3000); // Ocultar error a los 3 seg
      return;
    }

    // 2. Construir mensaje
    const miTelefono = "573154498209"; // ⚠️ ¡PON TU NÚMERO AQUÍ!
    const mensaje = `*NUEVO PEDIDO - BIO BALANCE*%0A%0A` +
      `*Cliente:* ${formData.nombre}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Ciudad:* ${formData.ciudad}%0A` +
      `*Dirección:* ${formData.direccion}%0A%0A` +
      `*Producto:* Kit BioBalance%0A` +
      `*Total a Pagar:* $${precioFinal.toLocaleString()} ${hasDiscount ? '(✅ 10% OFF Aplicado)' : ''}%0A%0A` +
      `_Quedo atento al envío._`;

    // 3. Abrir WhatsApp
    window.open(`https://wa.me/${miTelefono}?text=${mensaje}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-[#F9F7F2] rounded-[32px] w-full max-w-lg overflow-hidden relative shadow-2xl border border-white/20">
        
        {/* --- BARRA DE ERROR (Solo aparece si faltan datos) --- */}
        {error && (
          <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2 text-sm font-bold animate-in slide-in-from-top duration-300 z-50">
            ⚠️ Por favor completa todos los campos para el envío
          </div>
        )}

        {/* Botón X superior */}
        <button 
          onClick={handleCloseAttempt}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {step === 'form' ? (
          /* --- PASO 1: FORMULARIO (Diseño Original) --- */
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#3A5A40] p-3 rounded-2xl shadow-lg">
                <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#3A5A40]">Finalizar Pedido</h2>
                <p className="text-[#3A5A40]/60 text-sm font-medium">Pagas en casa al recibir 🏠</p>
              </div>
            </div>

            <div className="space-y-4">
              <input name="nombre" value={formData.nombre} onChange={handleInputChange} type="text" placeholder="Nombre Completo" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all" />
              <input name="telefono" value={formData.telefono} onChange={handleInputChange} type="tel" placeholder="Teléfono / WhatsApp" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all" />
              <input name="ciudad" value={formData.ciudad} onChange={handleInputChange} type="text" placeholder="Ciudad y Departamento" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all" />
              <input name="direccion" value={formData.direccion} onChange={handleInputChange} type="text" placeholder="Dirección Exacta" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all" />
            </div>

            <div className="mt-8 bg-white/50 p-6 rounded-2xl border border-dashed border-[#3A5A40]/20 text-center">
              <p className="text-[#3A5A40]/60 font-medium">Total a pagar:</p>
              
              {/* Lógica Visual de Precios */}
              <div className="flex justify-center items-center gap-3">
                {hasDiscount && (
                   <span className="text-lg text-red-400 line-through font-bold">${PRECIO_BASE.toLocaleString()}</span>
                )}
                <p className="text-3xl font-black text-[#3A5A40]">${precioFinal.toLocaleString()}</p>
              </div>
              
              {hasDiscount ? (
                <p className="text-[12px] text-red-500 mt-1 uppercase tracking-widest font-black animate-pulse">🎁 Descuento aplicado</p>
              ) : (
                <p className="text-[10px] text-[#3A5A40]/40 mt-1 uppercase tracking-widest font-bold">Envío gratis incluido</p>
              )}
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full mt-6 bg-[#E76F51] text-white font-black py-5 rounded-2xl text-xl shadow-lg hover:bg-[#cf5f44] transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"
            >
              <span>CONFIRMAR POR WHATSAPP</span>
            </button>
          </div>
        ) : (
          /* --- PASO 2: GANCHO (Diseño Recuperado de tu archivo impor2.txt) --- */
          <div className="p-10 text-center animate-in zoom-in duration-500">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-xs font-black mb-4 animate-pulse uppercase tracking-wider">
              ⚠️ ¡Oferta por tiempo limitado!
            </div>
            <h3 className="text-4xl font-black text-[#3A5A40] mb-2 leading-tight">¡ESPERA! <br/> NO TE VAYAS</h3>
            <p className="text-[#3A5A40]/70 mb-6 font-medium">Completa tu pedido en los próximos:</p>
            
            <div className="text-7xl font-mono font-black text-[#E76F51] mb-8 tracking-tighter">
              {formatTime(timeLeft)}
            </div>

            <div className="bg-white p-6 rounded-[25px] border-2 border-dashed border-[#E76F51]/30 mb-8 shadow-inner">
              <p className="text-[#3A5A40] font-bold text-sm uppercase tracking-widest mb-1">Tu regalo exclusivo:</p>
              <span className="text-3xl font-black text-[#E76F51]">10% OFF EXTRA</span>
            </div>

            <button 
              onClick={() => { setHasDiscount(true); setStep('form'); }}
              className="w-full bg-[#3A5A40] text-white font-black py-5 rounded-2xl text-xl shadow-xl hover:scale-105 transition-transform"
            >
              🚀 ¡SÍ, APLICAR MI DESCUENTO!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSystem;