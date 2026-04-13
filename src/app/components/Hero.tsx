import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
              Implementamos Odoo para escalar tu negocio
            </h1>

            <p className="text-lg text-[#64748B] leading-relaxed">
              Unificá ventas, inventario, finanzas, contabilidad, manufactura, compras y automatizaciones en un solo
              sistema. Control total, trazabilidad en tiempo real y decisiones basadas en datos.
            </p>

            <div className="space-y-3">
              {[
                'Integración completa de todos tus procesos',
                'Reportes y métricas en tiempo real',
                'Automatización de tareas repetitivas',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FB923C] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#0F172A]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-[#FB923C] hover:bg-[#F97316] text-white px-8 py-6 text-base"
              >
                Agendar diagnóstico
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('casos')}
                variant="outline"
                className="border-[#E7E9F2] text-[#0F172A] hover:border-[#FB923C] hover:text-[#FB923C] px-8 py-6 text-base"
              >
                Ver casos de éxito
              </Button>
            </div> */}
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E7E9F2] bg-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY4OTY3MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Odoo ERP Dashboard"
                className="w-full h-auto"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FB923C]/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating metrics cards - Only visible on large screens */}
            {/* <div className="hidden xl:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-[#E7E9F2]">
              <div className="text-2xl font-bold text-[#FB923C]">+150</div>
              <div className="text-sm text-[#64748B] whitespace-nowrap">Implementaciones</div>
            </div>
            <div className="hidden xl:block absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-[#E7E9F2]">
              <div className="text-2xl font-bold text-[#FB923C]">98%</div>
              <div className="text-sm text-[#64748B]">Satisfacción</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}