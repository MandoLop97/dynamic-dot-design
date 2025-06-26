
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 overflow-hidden">
      {/* Professional background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(55, 65, 81, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, rgba(107, 114, 128, 0.3) 0%, transparent 50%)`
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Professional Logo & Description */}
          <div className="sm:col-span-2">
            <div className="text-3xl sm:text-4xl font-bold font-poppins mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Estudio
              </span>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-md text-base sm:text-lg leading-relaxed">
              Desarrollamos soluciones digitales estratégicas que impulsan el crecimiento empresarial y fortalecen la presencia de marca en el mercado global.
            </p>
            
            {/* Professional social icons */}
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { name: 'LinkedIn', icon: '💼' },
                { name: 'Behance', icon: '🎨' },
                { name: 'GitHub', icon: '👨‍💻' },
                { name: 'Dribbble', icon: '🏀' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-800/50 backdrop-blur-md border border-gray-700/60 rounded-2xl flex items-center justify-center hover:scale-110 hover:bg-gray-700 transition-all duration-300 group"
                >
                  <span className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Professional Quick Links */}
          <div>
            <h3 className="font-bold font-poppins mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Navegación
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Nosotros', id: 'about' },
                { name: 'Servicios', id: 'services' },
                { name: 'Portafolio', id: 'portfolio' },
                { name: 'Contacto', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Contact Info */}
          <div>
            <h3 className="font-bold font-poppins mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contacto Profesional
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-base sm:text-lg">📧</span>
                <span className="text-sm sm:text-base">contacto@estudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-base sm:text-lg">📱</span>
                <span className="text-sm sm:text-base">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-base sm:text-lg">📍</span>
                <span className="text-sm sm:text-base">Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 Estudio Profesional. Excelencia en cada proyecto.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 items-center">
            <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300 hover:underline">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300 hover:underline">
              Términos de Servicio
            </a>
            <a href="#" className="px-3 sm:px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-xs sm:text-sm rounded-lg hover:scale-105 transition-transform duration-300">
              Descargar Portafolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
