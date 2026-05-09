import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function CaseStudy() {
  const beforeMetrics = [
    { label: 'Cierre mensual', value: '15 días', icon: Clock, trend: 'bad' },
    { label: 'Errores de stock', value: '23%', icon: TrendingUp, trend: 'bad' },
    { label: 'Tiempo de facturación', value: '4 horas/día', icon: Clock, trend: 'bad' },
  ];

  const afterMetrics = [
    { label: 'Cierre mensual', value: '3 días', icon: Clock, trend: 'good' },
    { label: 'Errores de stock', value: '2%', icon: TrendingDown, trend: 'good' },
    { label: 'Tiempo de facturación', value: '30 min/día', icon: Clock, trend: 'good' },
  ];

  return (
    <section id="casos" className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
            <span className="text-sm text-[#ed6b1d] font-medium">Caso de éxito</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Resultados clave
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* BEFORE */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#E7E9F2]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">Antes</h3>
                <p className="text-sm text-[#64748B]">Sistemas fragmentados</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {beforeMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-red-50/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <metric.icon className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-[#64748B]">{metric.label}</span>
                  </div>
                  <span className="font-bold text-[#0F172A]">{metric.value}</span>
                </div>
              ))}
            </div>

            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>5 sistemas diferentes sin integrar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Inventario desactualizado constantemente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Reportes manuales en planillas Excel</span>
              </li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-2xl p-8 border-2 border-[#FED7AA] shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#ed6b1d] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">Después</h3>
                <p className="text-sm text-[#64748B]">Con Odoo implementado</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {afterMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#FED7AA]"
                >
                  <div className="flex items-center gap-3">
                    <metric.icon className="w-5 h-5 text-[#ed6b1d]" />
                    <span className="text-sm text-[#64748B]">{metric.label}</span>
                  </div>
                  <span className="font-bold text-[#ed6b1d]">{metric.value}</span>
                </div>
              ))}
            </div>

            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex items-start gap-2">
                <span className="text-[#ed6b1d] mt-1">✓</span>
                <span>Sistema único integrado end-to-end</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ed6b1d] mt-1">✓</span>
                <span>Stock sincronizado en tiempo real</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ed6b1d] mt-1">✓</span>
                <span>Dashboards automáticos con BI integrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Results Banner */}
        {/* <div className="bg-white rounded-2xl p-8 border border-[#E7E9F2] shadow-lg">
          <h3 className="text-center text-xl font-bold text-[#0F172A] mb-8">
            Resultados clave en 6 meses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '80%', label: 'Reducción en tiempo de cierre' },
              { value: '91%', label: 'Menos errores de inventario' },
              { value: '87%', label: 'Mejora en facturación' },
              { value: '6 meses', label: 'ROI alcanzado' },
            ].map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ed6b1d] mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-[#64748B]">{result.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Image */}
        {/* <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-[#E7E9F2]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY5MDYyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Almacén operando con Odoo"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </section>
  );
}
