import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias! Te contactaremos pronto para agendar tu diagnóstico.');
    setFormData({ nombre: '', email: '', empresa: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF7ED]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#FED7AA] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="bg-gradient-to-br from-[#FB923C] to-[#F97316] p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Agendá un diagnóstico gratuito
              </h2>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                En 30 minutos te decimos qué módulos implementar, en qué orden y cuál es el ROI
                esperado para tu caso específico.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Diagnóstico sin costo</p>
                    <p className="text-sm text-white/80">Análisis de procesos y necesidades</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Roadmap personalizado</p>
                    <p className="text-sm text-white/80">Módulos y fases sugeridas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Presupuesto estimado</p>
                    <p className="text-sm text-white/80">Tiempos y costos transparentes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 md:p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-[#0F172A] mb-2 block">
                    Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="border-[#E7E9F2] focus:border-[#FB923C]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#0F172A] mb-2 block">
                    Email corporativo
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    className="border-[#E7E9F2] focus:border-[#FB923C]"
                  />
                </div>

                <div>
                  <Label htmlFor="empresa" className="text-[#0F172A] mb-2 block">
                    Empresa
                  </Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Mi Empresa S.A."
                    className="border-[#E7E9F2] focus:border-[#FB923C]"
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-[#0F172A] mb-2 block">
                    Contanos brevemente qué necesitás
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Ej: Necesitamos unificar ventas, inventario y contabilidad en nuestras 3 sucursales..."
                    className="border-[#E7E9F2] focus:border-[#FB923C] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FB923C] hover:bg-[#F97316] text-white py-6 text-base"
                >
                  Solicitar diagnóstico gratuito
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-[#64748B] text-center">
                  Te responderemos en menos de 24 horas. Sin compromiso.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
