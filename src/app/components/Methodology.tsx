import { Search, Pencil, Cog, GraduationCap, TrendingUp } from 'lucide-react';

export function Methodology() {
  const steps = [
    {
      icon: Search,
      title: 'Descubrimiento',
      description: 'Relevamos procesos actuales y detectamos oportunidades de mejora',
      duration: '1-2 semanas',
    },
    {
      icon: Pencil,
      title: 'Diseño de solución',
      description: 'Definimos módulos, flujos, integraciones y roadmap de implementación',
      duration: '1 semana',
    },
    {
      icon: Cog,
      title: 'Implementación',
      description: 'Configuración, desarrollo, migración de datos y pruebas',
      duration: '4-12 semanas',
    },
    {
      icon: GraduationCap,
      title: 'Capacitación',
      description: 'Entrenamiento para tus equipos',
      duration: '1-2 semanas',
    },
    {
      icon: TrendingUp,
      title: 'Mejora continua',
      description: 'Soporte, nuevos módulos, automatizaciones y optimizaciones',
      duration: 'Permanente',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]" id='metodologia'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
            <span className="text-sm text-[#FB923C] font-medium">Metodología</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Proceso probado, resultados garantizados
          </h2>
          <p className="text-lg text-[#64748B]">
            Implementaciones predecibles con fases claras y entregables concretos
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-[#E7E9F2]"></div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-[#E7E9F2]"></div>
                )}

                <div className="relative z-10">
                  {/* Icon Circle */}
                  <div className="flex items-center mb-4 md:justify-center">
                    <div className="w-12 h-12 bg-[#FB923C] rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Step Number */}
                    <span className="ml-3 md:hidden text-sm text-[#64748B] font-medium">
                      Paso {index + 1}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-6 border border-[#E7E9F2] hover:border-[#FED7AA] hover:shadow-lg transition-all">
                    {/* <div className="text-xs text-[#FB923C] font-medium mb-2 uppercase">
                      {step.duration}
                    </div> */}
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#64748B]">
            La duración estimada del proyecto dependerá de tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
