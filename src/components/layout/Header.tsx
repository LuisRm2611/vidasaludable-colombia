import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#3A5A40] text-white p-2 rounded-xl font-bold text-2xl">VS</div>
          <span className="font-serif text-3xl font-bold text-[#3A5A40]">Vida Saludable</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="#beneficios" className="text-xl text-gray-600 hover:text-[#3A5A40] font-medium">Beneficios</a>
          <a href="#testimonials" className="text-xl text-gray-600 hover:text-[#3A5A40] font-medium">Testimonios</a>
          <a href="#pricing" className="bg-[#E76F51] text-white px-8 py-3 rounded-full font-bold text-xl flex items-center gap-2 shadow-lg">
            <ShoppingCart size={20} /> ¡Comprar!
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-[#3A5A40]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-8 flex flex-col gap-6 shadow-2xl absolute w-full">
          <a href="#beneficios" className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
          <a href="#testimonials" className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>Testimonios</a>
          <a href="#pricing" className="bg-[#E76F51] text-white py-4 rounded-full font-bold text-2xl text-center" onClick={() => setIsMenuOpen(false)}>¡Pedir Ahora!</a>
        </div>
      )}
    </header>
  );
};

export default Header;