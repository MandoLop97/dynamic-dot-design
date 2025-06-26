
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Mobile header hide/show logic
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setShowHeader(false);
        } else {
          // Scrolling up
          setShowHeader(true);
        }
      } else {
        // Always show on desktop
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-gray-200/60 rounded-2xl' 
          : 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Professional logo */}
          <div className="text-xl sm:text-2xl font-bold font-poppins">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Estudio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-50/80 backdrop-blur-md rounded-xl p-2 border border-gray-200/60">
            {[
              { name: 'Inicio', id: 'hero' },
              { name: 'Nosotros', id: 'about' },
              { name: 'Servicios', id: 'services' },
              { name: 'Portafolio', id: 'portfolio' },
              { name: 'Contacto', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2.5 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 transition-all duration-300 font-medium rounded-lg"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-xl bg-gray-50/80 backdrop-blur-md border border-gray-200/60 hover:bg-gray-100/80 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-around">
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl py-6 shadow-xl">
            <div className="container mx-auto px-6 flex flex-col space-y-2">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Nosotros', id: 'about' },
                { name: 'Servicios', id: 'services' },
                { name: 'Portafolio', id: 'portfolio' },
                { name: 'Contacto', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 transition-all duration-300 font-medium py-3 px-4 rounded-xl"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
