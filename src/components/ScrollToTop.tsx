
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp 
        size={18} 
        className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 group-hover:-translate-y-0.5 transform transition-transform mx-auto" 
      />
    </button>
  );
};

export default ScrollToTop;
