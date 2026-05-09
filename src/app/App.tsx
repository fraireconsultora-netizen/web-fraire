import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { TrustBar } from '@/app/components/TrustBar';
import { Services } from '@/app/components/Services';
import { Industries } from '@/app/components/Industries';
import { Methodology } from '@/app/components/Methodology';
import { AboutUs } from '@/app/components/AboutUs';
import { Testimonial } from '@/app/components/Testimonial';
import { CaseStudy } from '@/app/components/CaseStudy';
import { FAQ } from '@/app/components/FAQ';
import { ContactCTA } from '@/app/components/ContactCTA';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* <TrustBar /> */}
        <Services />
        {/* <Industries /> */}
        <Testimonial />
        <Methodology />
        <AboutUs />
        {/* <CaseStudy /> */}
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
