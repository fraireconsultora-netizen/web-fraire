import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { CaseStudy } from "./CaseStudy";
import CasoExitoImage from "../../assets/caso_exito_img.jpeg";

export function Testimonial() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
            <span className="text-sm text-[#ed6b1d] font-medium">Casos de éxito</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Odoo como eje de la transformación operativa de Aglietto Ingeniería SRL
          </h2>
          <p className="text-lg text-[#64748B]">
            Un caso de centralización operativa, información confiable y procesos más
            profesionales.
          </p>
        </div>

        {/* Main Testimonial Card - HERO STYLE */}
        <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl border-2 border-[#FED7AA] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Testimonial Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#ed6b1d] opacity-20" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-tight">
                "Centralizamos la operación, mejoramos la confiabilidad de la información y profesionalizamos la gestión de datos administrativos"
              </h3>

              <div className="space-y-4 text-lg text-[#64748B] leading-relaxed mb-8">
                <p>
                  Antes trabajábamos con sistemas aislados y múltiples planillas de Excel, lo que
                  generaba reprocesos, falta de visibilidad y dificultades para obtener información
                  confiable.
                </p>
                <p>
                  Con la implementación de Odoo centralizamos compras, ventas, inventario y
                  contabilidad en una única plataforma integrada, logrando que la gestión diaria sea
                  mucho más ordenada y eficiente.
                </p>
                <p>
                  Hoy operamos con información en tiempo real, reportes seguros y procesos
                  estandarizados que nos brindan mayor trazabilidad, control y confianza para tomar
                  decisiones estratégicas.
                </p>
              </div>

              {/* Metrics Badges */}
              {/* <div className="flex flex-wrap gap-3 mb-8">
                <Badge
                  variant="outline"
                  className="bg-white border-[#FED7AA] text-[#0F172A] px-4 py-2 text-sm font-semibold"
                >
                  Operación centralizada
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white border-[#FED7AA] text-[#0F172A] px-4 py-2 text-sm font-semibold"
                >
                  Información en tiempo real
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white border-[#FED7AA] text-[#0F172A] px-4 py-2 text-sm font-semibold"
                >
                  Procesos estandarizados
                </Badge>
              </div> */}

              {/* Author Info */}
              <div className="border-t border-[#FED7AA] pt-6 mb-6">
                <p className="font-semibold text-[#0F172A] mb-1">Romina Diaz (Team Leader Admin - Contable) - Aglietto Ingeniería SRL</p>
                <p className="text-sm text-[#64748B]">
                  Implementación de Odoo ERP | Compras · Ventas · Inventario · Contabilidad
                </p>
              </div>

              {/* CTA */}
              <Button
                onClick={scrollToContact}
                className="bg-[#ed6b1d] hover:bg-[#F97316] text-white w-full md:w-auto"
              >
                Quiero resultados así
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right: Case study image */}

            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1e293b] flex items-center justify-center p-6 md:p-10">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white">
                <img
                  src={CasoExitoImage}
                  alt="Caso de éxito con Odoo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <CaseStudy/>

        {/* Secondary Testimonials - Mini cards */}
        {/* <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              quote: 'Reducimos el tiempo de inventario mensual de 3 días a 4 horas',
              author: 'Laura Méndez',
              role: 'Gerente de Operaciones',
              company: 'RetailMax',
            },
            {
              quote: 'La integración con e-commerce fue más simple de lo que imaginábamos',
              author: 'Diego Santos',
              role: 'Director Comercial',
              company: 'TecnoPro',
            },
            {
              quote: 'El ROI se vio en los primeros 6 meses. Mejor inversión que hicimos',
              author: 'Carolina Vega',
              role: 'CEO',
              company: 'Manufacturas del Plata',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#E7E9F2] hover:border-[#FED7AA] hover:shadow-md transition-all"
            >
              <Quote className="w-8 h-8 text-[#ed6b1d] opacity-20 mb-4" />
              <p className="text-[#0F172A] mb-4 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-[#E7E9F2] pt-4">
                <p className="font-semibold text-sm text-[#0F172A]">{testimonial.author}</p>
                <p className="text-xs text-[#64748B]">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
