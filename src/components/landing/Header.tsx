import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
const WHATSAPP_NUMBER = "5491112345678"; // Número placeholder - reemplazar
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Me interesa conocer más sobre Ashwagandha KSM-66");
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
              <span className="text-sage-foreground font-display font-bold text-lg">A</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground hidden sm:block">
              Ashwagandha <span className="text-primary">KSM-66</span>
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("ciencia")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Ciencia
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Testimonios
            </button>
          </nav>
          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold hidden sm:flex"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Comprar
            </Button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("ciencia")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left"
            >
              Ciencia
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left"
            >
              Testimonios
            </button>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold w-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Comprar Ahora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
