import { useRef } from 'react';

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Less Than Truck Load",
      desc: "Trans Carrier is your partner in moving small (up to 1 ton)/LTL (above 1 ton) quantity freight shipments across the country.",
      img: "/images/service-ltl.png",
      link: "#"
    },
    {
      title: "Full Truck Load",
      desc: "Trans Carrier is fully equipped to handle Bulk/FTL movement from anywhere in India and its neighboring countries.",
      img: "/images/service-ftl.png",
      link: "#"
    },
    {
      title: "Project & Heavy Haul",
      desc: "Trans Carrier specializes in carrying project and heavy haul consignments through challenging terrains and across long distances.",
      img: "/images/service-project.png",
      link: "#"
    },
    {
      title: "Storage Solutions",
      desc: "We offer safe & secure storage facilities that help you save cargo handling & cost in case of delays in accepting your shipments.",
      img: "/images/service-storage.png",
      link: "#"
    },
    {
      title: "Containerized Services",
      desc: "Container body vehicles / loads especially for movement of FMCG, White Goods and other high value goods as per customer requirements",
      img: "/images/service-container.png",
      link: "#"
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-4">Products & Services</h2>
            <p className="text-gray-500 max-w-xl">Comprehensive logistics solutions tailored to your business needs, delivered with precision and care.</p>
          </div>
          
          {/* Slider Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-gray-200 text-secondary hover:bg-primary hover:border-primary transition-all group"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-gray-200 text-secondary hover:bg-primary hover:border-primary transition-all group"
              aria-label="Next service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Slider Row */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-8 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-none w-[85%] md:w-[45%] lg:w-[23%] snap-start group cursor-pointer flex flex-col items-start text-left"
            >
              <a href={service.link} className="w-full mb-6 overflow-hidden rounded-xl shadow-sm border border-gray-100 block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </a>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                <a href={service.link}>{service.title}</a>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;

