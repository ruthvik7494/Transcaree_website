const Services = () => {
  const services = [
    {
      title: "Less Than Truck Load",
      desc: "TCI freight is your partner in moving small (up to 1 ton)/LTL (above 1 ton) quantity freight shipments across the country.",
      img: "https://tcifreight.in/wp-content/uploads/2024/01/road-freight-1.jpg",
      link: "https://tcifreight.in/less-than-truck-load/"
    },
    {
      title: "Full Truck Load",
      desc: "TCI Freight is fully equipped to handle Bulk/FTL movement from anywhere in India and its neighboring countries.",
      img: "https://tcifreight.in/wp-content/uploads/2025/06/Full-Truck-Load-1.jpg",
      link: "https://tcifreight.in/full-truck-load/"
    },
    {
      title: "Project & Heavy Haul",
      desc: "TCI specializes in carrying project and heavy haul consignments through challenging terrains and across long distances.",
      img: "https://tcifreight.in/wp-content/uploads/2024/01/Project-Heavy-Haul.jpg",
      link: "https://tcifreight.in/project-and-heavy-haul/"
    },
    {
      title: "Storage Solutions",
      desc: "We offer safe & secure storage facilities that help you save cargo handling & cost in case of delays in accepting your shipments.",
      img: "https://tcifreight.in/wp-content/uploads/2025/06/Storage-facility-1.jpg",
      link: "https://tcifreight.in/storage-solutions/"
    },
    {
      title: "Cross Border Logistics Solutions",
      desc: "End to End Logistics for international locations across Bangladesh, Nepal & Bhutan.",
      img: "https://tcifreight.in/wp-content/uploads/2025/06/Cross-Border.jpg",
      link: "https://tcifreight.in/cross-border-logistics-solutions/"
    },
    {
      title: "CHA Facility",
      desc: "As a certified Authorized Economic Operator (AEO), TCI is a trusted expert in delivering end-to-end customs brokerage, clearance, and regulatory compliance solutions.",
      img: "https://tcifreight.in/wp-content/uploads/2025/06/CHA.jpg",
      link: "https://tcifreight.in/cha-facility/"
    },
    {
      title: "Containerized Services",
      desc: "Container body vehicles / loads especially for movement of FMCG, White Goods and other high value goods as per customer requirements",
      img: "https://tcifreight.in/wp-content/uploads/2025/06/Containerized-Services-1.jpg",
      link: "https://tcifreight.in/containerized-services/"
    },
    {
      title: "Value Added Services",
      desc: "Convenient & enhanced offerings to turn your complex deliveries into hassle free turn key solutions.",
      img: "https://tcifreight.in/wp-content/uploads/2025/07/value-added-service.jpg",
      link: "https://tcifreight.in/value-added-services"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-secondary">Products & Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer flex flex-col items-start text-left">
              <a href={service.link} className="w-full mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <h2 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors">
                <a href={service.link}>{service.title}</a>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://tcifreight.in/products-services/" 
            className="bg-primary hover:bg-black hover:text-white text-secondary font-bold py-3 px-10 rounded transition-all duration-300 uppercase text-sm tracking-widest shadow-md"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

