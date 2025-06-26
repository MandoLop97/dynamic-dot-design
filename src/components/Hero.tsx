
import { useState, useEffect } from 'react';
import data from '../data/portfolio.json';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      {/* Professional background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(55, 65, 81, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(107, 114, 128, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Elegant geometric elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 rounded-2xl bg-gradient-to-br from-gray-200/40 to-blue-200/30 backdrop-blur-sm border border-gray-300/30 rotate-12" />
      <div className="absolute bottom-32 right-4 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 rounded-xl bg-gradient-to-br from-blue-200/30 to-gray-200/40 backdrop-blur-sm border border-gray-300/30 -rotate-12" />
      <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-gradient-to-br from-gray-300/40 to-blue-300/30 backdrop-blur-sm border border-gray-300/30 rotate-45" />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Professional badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/60 text-xs sm:text-sm font-medium text-gray-700 mb-6 sm:mb-8 shadow-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3"></div>
            Estudio Profesional 2025
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 sm:mb-8 leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              {data.hero.title.split(' ').slice(0, 2).join(' ')}
            </span>
            <br />
            <span className="text-gray-600 font-light">
              {data.hero.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {data.hero.subtitle}
          </p>
          
          {/* Professional CTA */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={scrollToPortfolio}
              className="group relative inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold rounded-2xl transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-700/20"
            >
              <span className="relative z-10">{data.hero.cta}</span>
              <svg className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-400/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1 h-2 sm:h-3 bg-gray-600 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs text-gray-500 font-medium">Explorar</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
