import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#FB923C] hover:bg-[#F97316] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}
