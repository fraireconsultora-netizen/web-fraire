import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';

const initialFormData = {
  nombre: '',
  email: '',
  empresa: '',
  mensaje: '',
};

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL;

export function ContactCTA() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      if (!contactApiUrl) {
        throw new Error('Falta configurar la URL del servicio de contacto.');
      }

      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || 'No pudimos enviar tu consulta. Intentá nuevamente.');
      }

      setSubmitMessage({
        type: 'success',
        text: 'Gracias. Recibimos tu consulta y te responderemos en menos de 24 horas.',
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text:
          error instanceof Error
            ? error.message
            : 'No pudimos enviar tu consulta. Intentá nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="bg-gradient-to-br from-[#ed6b1d] to-[#F97316] p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Agendá tu consulta
              </h2>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
              En un encuentro analizamos tu negocio y te damos un plan claro para implementar software que se adapte a tus necesidades.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Diagnóstico inicial</p>
                    <p className="text-sm text-white/80">Listado de procesos y necesidades</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Plan de implementación claro</p>
                    <p className="text-sm text-white/80">Qué módulos desarrollar, en qué orden y por qué</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Estimación de inversión y tiempos</p>
                    <p className="text-sm text-white/80">Tiempos y costos de implementación</p>
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
                    className="border-[#E7E9F2] focus:border-[#ed6b1d]"
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
                    className="border-[#E7E9F2] focus:border-[#ed6b1d]"
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
                    className="border-[#E7E9F2] focus:border-[#ed6b1d]"
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
                    className="border-[#E7E9F2] focus:border-[#ed6b1d] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ed6b1d] hover:bg-[#F97316] text-white py-6 text-base"
                >
                  {isSubmitting ? 'Enviando consulta...' : 'Solicitar diagnóstico gratuito'}
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                {submitMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-sm text-center ${
                      submitMessage.type === 'success' ? 'text-green-700' : 'text-red-600'
                    }`}
                  >
                    {submitMessage.text}
                  </p>
                )}

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
