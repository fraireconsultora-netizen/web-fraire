import { Award, Users, TrendingUp, Clock } from 'lucide-react';

export function TrustBar() {
  const stats = [
    { icon: Users, value: '+150', label: 'Implementaciones exitosas' },
    { icon: Clock, value: '8+', label: 'Años de experiencia' },
    { icon: Award, value: 'Partner', label: 'Odoo oficial' },
    { icon: TrendingUp, value: '98%', label: 'Satisfacción cliente' },
  ];

  const clients = [
    'Cliente A',
    'Cliente B',
    'Cliente C',
    'Cliente D',
    'Cliente E',
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E7E9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="mb-12">
          <p className="text-center text-sm text-[#64748B] mb-6">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="h-12 w-32 bg-[#F8FAFC] border border-[#E7E9F2] rounded-lg flex items-center justify-center"
              >
                <span className="text-sm text-[#64748B] font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFF7ED] rounded-xl mb-3">
                <stat.icon className="w-6 h-6 text-[#ed6b1d]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
