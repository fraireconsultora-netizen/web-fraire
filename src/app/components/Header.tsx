import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import fraireLogoSrc from '@/assets/fraire_logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E7E9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={fraireLogoSrc} alt="Fraire Consultora" width={120} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors"
            >
              Servicios
            </button>
            {/* <button
              onClick={() => scrollToSection('industrias')}
              className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors"
            >
              Industrias
            </button> */}
            {/* <button
              onClick={() => scrollToSection('testimonio')}
              className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors"
            >
              Testimonio
            </button> */}
            <button
              onClick={() => scrollToSection('testimonio')}
              className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors"
            >
              Casos de éxito
            </button>
            <button
              onClick={() => scrollToSection('metodologia')}
              className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors"
            >
              Metodología
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#ed6b1d] hover:bg-[#F97316] text-white px-6"
            >
              Agendá tu consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#64748B]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E7E9F2]">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('industrias')}
                className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors text-left"
              >
                Industrias
              </button>
              <button
                onClick={() => scrollToSection('casos')}
                className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors text-left"
              >
                Casos
              </button>
              <button
                onClick={() => scrollToSection('testimonio')}
                className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors text-left"
              >
                Testimonio
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-sm text-[#64748B] hover:text-[#ed6b1d] transition-colors text-left"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-[#ed6b1d] hover:bg-[#F97316] text-white w-full"
              >
                Agendar diagnóstico
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
