import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo demora una implementación de Odoo?',
      answer:
        'Depende del alcance y complejidad de tu negocio. Una implementación estándar (ventas, compras, inventario, contabilidad) toma entre 8 y 12 semanas desde el kick-off hasta el go-live. Proyectos más complejos con manufactura, integraciones múltiples o desarrollos a medida pueden extenderse a 16-20 semanas.',
    },
    {
      question: '¿Cuál es el costo aproximado de implementar Odoo?',
      answer:
        'El costo de la implementación varía según la cantidad de usuarios, módulos necesarios y nivel de personalización. Primero se debe contratar la licencia del sistema ERP Odoo que puede ser estándar o personalizada, variando según contratación mensual o anual. Nuestro servicio de implementación incluye análisis, configuración, migración, capacitación y go-live. En el encuentro de consulta te brindamos un presupuesto detallado según tu caso particular.'
    },
    {
      question: '¿Cómo migran los datos de nuestro sistema actual?',
      answer:
        'Realizamos una migración estructurada en 4 pasos: (1) Auditoría de calidad de datos actuales, (2) Limpieza y normalización, (3) Carga en ambiente de pruebas con validación de tu equipo, (4) Migración final en producción. Migramos maestros (clientes, productos, proveedores), históricos (facturas, movimientos de stock) y saldos iniciales. Todo el proceso está documentado y validado antes del go-live.',
    },
    {
      question: '¿Odoo se integra con nuestras herramientas actuales?',
      answer:
        'Sí. Odoo tiene conectores nativos para e-commerce (Shopify, WooCommerce, MercadoLibre), pagos (Stripe, PayPal, MercadoPago), logística (correos y transportes), BI (Power BI, Metabase) y muchos más. Si no existe conector nativo, desarrollamos integraciones personalizadas vía API REST. También conectamos con bancos para conciliación automática y facturación electrónica.',
    },
    {
      question: '¿Qué tipo de soporte ofrecen post implementación?',
      answer:
        'Ofrecemos planes de soporte con SLA definido: respuesta en 4-24 horas según criticidad, canales de atención (email, WhatsApp, videollamada), horas mensuales incluidas y soporte en actualizaciones de Odoo. También hacés consultas funcionales, pedidos de reportes nuevos y ajustes menores. Para desarrollos grandes o nuevos módulos, cotizamos por separado.',
    },
    {
      question: '¿Capacitan a nuestro equipo?',
      answer:
        'Absolutamente. La capacitación es parte integral de la implementación. Hacemos training diferenciado por roles: usuarios operativos (cómo usar cada módulo en su día a día), supervisores (reportes, configuración básica) y administradores (gestión de usuarios, parámetros avanzados). Post go-live, ofrecemos refuerzos y capacitación para nuevos usuarios.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
            <span className="text-sm text-[#ed6b1d] font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-[#64748B]">
            Resolvemos las dudas más comunes sobre implementación de Odoo
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#F8FAFC] border border-[#E7E9F2] rounded-xl px-6 data-[state=open]:border-[#FED7AA] data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-[#0F172A] pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Below FAQ */}
        <div className="mt-12 text-center">
          <p className="text-[#64748B] mb-4">¿No encontraste tu respuesta?</p>
          <a
            href="#contacto"
            className="text-[#ed6b1d] hover:text-[#F97316] font-medium underline underline-offset-4"
          >
            Hablemos directamente →
          </a>
        </div>
      </div>
    </section>
  );
}
