import { useState } from 'react';
import { ShoppingCart, Package, Factory, Briefcase, Store, Truck } from 'lucide-react';

export function Industries() {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      icon: ShoppingCart,
      name: 'Retail',
      pains: [
        'Inventario desactualizado entre puntos de venta',
        'Dificultad para gestionar promociones y precios',
        'Reportes de venta fragmentados',
      ],
      solution:
        'Odoo unifica tu POS, e-commerce, inventario y contabilidad. Stock sincronizado en tiempo real, promociones automáticas y reportes consolidados.',
    },
    {
      icon: Package,
      name: 'Distribución',
      pains: [
        'Gestión manual de rutas y entregas',
        'Falta de trazabilidad de pedidos',
        'Errores en facturación y remitos',
      ],
      solution:
        'Optimizá rutas de reparto, rastreá cada pedido desde el almacén hasta el cliente y automatizá la facturación electrónica integrada.',
    },
    {
      icon: Factory,
      name: 'Manufactura',
      pains: [
        'Control de producción en planillas Excel',
        'Falta de trazabilidad de materias primas',
        'Retrasos en costeo de productos',
      ],
      solution:
        'Planificación de producción MRP/MPS, control de calidad, trazabilidad lote a lote y costeo automático de productos terminados.',
    },
    {
      icon: Briefcase,
      name: 'Servicios',
      pains: [
        'Gestión manual de proyectos y timesheet',
        'Facturación por horas poco eficiente',
        'Dificultad en seguimiento de rentabilidad',
      ],
      solution:
        'Gestión de proyectos con timesheet integrado, facturación automática por hitos o horas y dashboards de rentabilidad por proyecto.',
    },
    {
      icon: Store,
      name: 'E-commerce',
      pains: [
        'Sincronización manual entre tienda y stock',
        'Errores en pedidos y devoluciones',
        'Integración débil con logística',
      ],
      solution:
        'Integración nativa con Shopify, WooCommerce y MercadoLibre. Stock en tiempo real, automatización de fulfillment y gestión de devoluciones.',
    },
    {
      icon: Truck,
      name: 'Logística',
      pains: [
        'Control manual de flota y conductores',
        'Falta de visibilidad de envíos',
        'Costos ocultos en operación',
      ],
      solution:
        'Gestión de flota, trazabilidad GPS de envíos, control de costos por ruta y análisis de KPIs logísticos en tiempo real.',
    },
  ];

  return (
    <section id="industrias" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
            <span className="text-sm text-[#ed6b1d] font-medium">Pymes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Soluciones adaptadas a tu negocio
          </h2>
          <p className="text-lg text-[#64748B]">
            ¿Tu empresa está creciendo pero la gestión sigue en Excel?
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === index
                  ? 'bg-[#ed6b1d] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#FFF7ED] hover:text-[#ed6b1d]'
              }`}
            >
              <industry.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-12 border border-[#E7E9F2]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pains */}
            <div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">
                Dolores típicos en {industries[activeTab].name}
              </h3>
              <ul className="space-y-3">
                {industries[activeTab].pains.map((pain, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#ed6b1d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#64748B]">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Cómo lo resolvemos</h3>
              <div className="bg-white rounded-xl p-6 border border-[#E7E9F2]">
                <p className="text-[#64748B] leading-relaxed">{industries[activeTab].solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
