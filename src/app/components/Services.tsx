import { Rocket, RefreshCw, Link2, Headphones } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Rocket,
      title: 'Implementación ERP',
      description: 'Desde el análisis inicial hasta el lanzamiento con tu equipo capacitado.',
      bullets: [
        'Configuración completa de módulos',
        'Parametrización según tu negocio',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Migración y optimización',
      description: 'Pasá de otros sistemas o versiones antiguas de Odoo sin perder datos.',
      bullets: [
        'Migración segura de datos históricos',
        'Optimización de procesos existentes',
      ],
    },
    // {
    //   icon: Link2,
    //   title: 'Integraciones',
    //   description: 'Conectá Odoo con tu ecosistema tecnológico actual.',
    //   bullets: [
    //     'E-commerce, BI, pagos y logística',
    //     'APIs personalizadas y webhooks',
    //   ],
    // },
    {
      icon: Headphones,
      title: 'Soporte y evolución',
      description: 'Acompañamiento continuo para que tu ERP crezca con tu empresa.',
      bullets: [
        'Soporte técnico prioritario',
        'Nuevos módulos y funcionalidades',
      ],
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
            <span className="text-sm text-[#FB923C] font-medium">Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Te acompañamos en cada etapa
          </h2>
          <p className="text-lg text-[#64748B]">
            Desde la estrategia hasta la operación diaria, tu éxito es nuestra prioridad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E7E9F2] hover:border-[#FED7AA] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#FFF7ED] group-hover:bg-[#FB923C] rounded-xl flex items-center justify-center mb-4 transition-colors">
                <service.icon className="w-6 h-6 text-[#FB923C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{service.title}</h3>
              <p className="text-sm text-[#64748B] mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B]">
                    <span className="w-1 h-1 bg-[#FB923C] rounded-full mt-2 flex-shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
