import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-semibold">Fraire Consultora</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Consultora de implementación de Odoo ERP.
            </p>
            {/* <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FB923C] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contacto@odooexpertos.com"
                className="w-10 h-10 bg-white/10 hover:bg-[#FB923C] rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:fraireconsultora@gmail.com"
                  className="hover:text-[#FB923C] transition-colors"
                >
                  fraireconsultora@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/5493492211070" className="hover:text-[#FB923C] transition-colors" target='_blank'>
                  +54 9 3492 211070
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/5493492317862" className="hover:text-[#FB923C] transition-colors" target='_blank'>
                  +54 9 3492 317862
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rafaela, Santa Fe, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-[#FB923C] transition-colors inline-block"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  className="hover:text-[#FB923C] transition-colors inline-block"
                >
                  Metodología
                </a>
              </li>
              <li>
                <a
                  href="#testimonio"
                  className="hover:text-[#FB923C] transition-colors inline-block"
                >
                  Casos de éxito
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-[#FB923C] transition-colors inline-block"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {currentYear} Fraire Consultora. Todos los derechos reservados.</p>
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-[#FB923C] transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-[#FB923C] transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-[#FB923C] transition-colors">
                Cookies
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
