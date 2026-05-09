import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import firmaJuliCeciSrc from '@/assets/firma_juli_ceci.png';
import quienesSomosImgSrc from '@/assets/quienes_somos_img.png';

export function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white" id="quienes-somos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#FFF7ED] border border-[#FED7AA] rounded-full mb-4">
              <span className="text-sm text-[#ed6b1d] font-medium">Quiénes somos</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
              Un puente entre tu empresa y el futuro digital
            </h2>

            <div className="space-y-5 text-lg text-[#475569] leading-relaxed">
              <p>
                Somos dos hermanas de Rafaela apasionadas por profesionalizar las pymes de nuestra
                región a través de la implementación estratégica de Odoo. Actuamos como un puente
                humano entre la tecnología y las soluciones simples, prácticas y funcionales que
                permiten centralizar la información y tomar decisiones basadas en datos reales.
              </p>

              <p>
                Nuestro enfoque va más allá de instalar un software; acompañamos a los equipos codo
                a codo para impulsar una transformación organizacional sostenible. Buscamos que la
                tecnología sea una aliada estratégica que prepare a las empresas locales para un
                mercado dinámico y competitivo, sin que pierdan la esencia y la cercanía que las
                hace únicas.
              </p>
            </div>

            <img
              src={firmaJuliCeciSrc}
              alt="Firma de Juli y Ceci"
              className="mt-8 w-56 max-w-full"
            />
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[#E7E9F2] shadow-xl bg-[#F8FAFC] aspect-[4/5] max-w-md mx-auto lg:mr-0">
              <ImageWithFallback
                src={quienesSomosImgSrc}
                alt="Juli y Ceci de Fraire Consultora"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ed6b1d]/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
