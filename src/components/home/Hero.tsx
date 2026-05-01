import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Driven by Safety",
      subtitle: "Delivered with Care",
      desc: "Your Trusted Road Partner",
      image: "/images/hero-safety.png"
    },
    {
      title: "Reliability That’s Stood",
      subtitle: "the Test of Time",
      desc: "Delivering Trust Across the Region",
      image: "/images/hero-reliability.png"
    },
    {
      title: "Green Miles,",
      subtitle: "Smart Moves",
      desc: "Trans Carrier – Sustainability at the Heart of Every Journey",
      image: "/images/hero-green.png"
    },
    {
      title: "Empowering Industries,",
      subtitle: "Enabling Growth",
      desc: "Fuelling Businesses with Reliable Freight Services",
      image: "/images/hero-industries.png"
    },
    {
      title: "Nationwide Network,",
      subtitle: "Seamless Reach",
      desc: "Trans Carrier Delivering from Anywhere to Everywhere",
      image: "/images/hero-network.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[calc(100vh-120px)] min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          {/* Content */}
          <div className="container relative h-full flex flex-col justify-center text-white z-10">
            <div className={`max-w-3xl transform transition-all duration-700 delay-300 ${
              index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tight">
                {slide.title} <br />
                <span className="text-primary">{slide.subtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-10 text-gray-200">
                {slide.desc}
              </p>
              <div className="flex gap-4">
                <a 
                  href="/contact-us"
                  className="bg-primary hover:bg-secondary hover:text-white text-secondary font-black px-10 py-4 rounded-lg uppercase tracking-widest transition-all duration-300 shadow-xl"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container flex items-center justify-between">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === currentSlide ? 'w-12 bg-primary' : 'w-6 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-3 rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all group"
            >
              <svg className="w-6 h-6 rotate-180 group-hover:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-3 rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all group"
            >
              <svg className="w-6 h-6 group-hover:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

