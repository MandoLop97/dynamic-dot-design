
import { useState, useEffect, useRef } from 'react';
import data from '../data/portfolio.json';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 sm:mb-6 text-gray-800">
            Servicios Profesionales
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Soluciones integrales y estratégicas para empresas innovadoras
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {data.services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/60 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-3 sm:mb-4 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700 text-sm sm:text-base"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-gray-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 sm:mt-20 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-3 sm:mb-4">
              ¿Listo para Comenzar?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
              Desarrollemos juntos soluciones que impulsen su crecimiento
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
            >
              Iniciar Consulta
              <svg className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
