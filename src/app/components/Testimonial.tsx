import { useState } from 'react';
import { Play, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CaseStudy } from "./CaseStudy"

export function Testimonial() {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
            <span className="text-sm text-[#FB923C] font-medium">Casos de éxito</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Escuchá de primera mano el impacto real
          </h2>
          <p className="text-lg text-[#64748B]">
            Resultados medibles. Así transformamos operaciones manuales en sistemas
            eficientes.
          </p>
        </div>

        {/* Main Testimonial Card - HERO STYLE */}
        <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl border-2 border-[#FED7AA] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Testimonial Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#FB923C] opacity-20" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-tight">
                "Pasamos de planillas y caos a control total en semanas"
              </h3>

              <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                Antes de Odoo, cerrábamos el mes contable en 15 días con errores constantes. Hoy lo
                hacemos en 3 días con trazabilidad completa. El inventario está sincronizado en
                tiempo real entre todos nuestros puntos de venta y el almacén central. Ya no
                perdemos ventas por falta de stock ni tenemos sobrantes ocultos. La decisión de
                migrar a Odoo fue el cambio más importante que hicimos en los últimos 5 años.
              </p>

              {/* Metrics Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge
                  variant="outline"
                  className="bg-white border-[#FED7AA] text-[#0F172A] px-4 py-2 text-sm font-semibold"
                >
                  -35% errores
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white border-[#FED7AA] text-[#0F172A] px-4 py-2 text-sm font-semibold"
                >
                  Cierre contable 50% más rápido
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white border-[#FED7AA] text-[#0F172A] px-4 py-2 text-sm font-semibold"
                >
                  Stock en tiempo real
                </Badge>
              </div>

              {/* Author Info */}
              <div className="border-t border-[#FED7AA] pt-6 mb-6">
                <p className="font-semibold text-[#0F172A] mb-1">Martín Rodríguez</p>
                <p className="text-sm text-[#64748B]">
                  CFO / Director de Operaciones · Distribuidora del Sur
                </p>
                <p className="text-sm text-[#FB923C] mt-1">Industria: Distribución mayorista</p>
              </div>

              {/* CTA */}
              <Button
                onClick={scrollToContact}
                className="bg-[#FB923C] hover:bg-[#F97316] text-white w-full md:w-auto"
              >
                Quiero resultados así
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right: Video Player */}
            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1e293b] flex items-center justify-center p-8 md:p-12">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                {/* Video Thumbnail */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762341111756-caf184156fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3Njg5OTAzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cliente testimonio video"
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  aria-label="Reproducir video"
                >
                  <div className="w-20 h-20 bg-[#FB923C] hover:bg-[#F97316] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 ring-4 ring-white/20">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </button>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <span className="text-white text-sm font-medium">1:12</span>
                </div>

                {/* Video Title Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg max-w-[200px]">
                  <span className="text-white text-xs">Cliente: CFO / Operaciones</span>
                </div>

                {/* If playing - show placeholder for actual video */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                    <div className="text-center text-white p-8">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm opacity-75">
                        Video testimonial player
                        <br />
                        (Integrá con YouTube, Vimeo o tu plataforma de video)
                      </p>
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="mt-4 px-4 py-2 bg-[#FB923C] hover:bg-[#F97316] rounded-lg text-sm transition-colors"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-[#FB923C]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-40 h-40 bg-[#F97316]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              <Quote className="w-8 h-8 text-[#FB923C] opacity-20 mb-4" />
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