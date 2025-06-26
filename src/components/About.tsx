
import { useState, useEffect, useRef } from 'react';
import data from '../data/portfolio.json';

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 sm:mb-6 text-gray-800">
            {data.about.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            {data.about.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Text Content */}
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {data.about.description}
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 p-6 sm:p-8 rounded-2xl border border-gray-200/60">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 font-poppins">
                  Nuestra Misión
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {data.about.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className={`transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              {data.about.team.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/60 ${
                    index === 2 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 font-poppins text-sm sm:text-base">
                        {member.name}
                      </h4>
                      <p className="text-blue-600 font-medium text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '150+', label: 'Proyectos Completados' },
            { number: '50+', label: 'Clientes Satisfechos' },
            { number: '5', label: 'Años de Experiencia' },
            { number: '24/7', label: 'Soporte Profesional' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient font-poppins mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
