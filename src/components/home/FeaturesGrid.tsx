const FeaturesGrid = () => {
  const leftFeatures = [
    {
      icon: "https://tcifreight.in/wp-content/uploads/2023/11/pioneer-of-cargo-transportation-brown.svg",
      title: "Pioneer of cargo transportation since 2018"
    },
    {
      icon: "https://tcifreight.in/wp-content/uploads/2025/06/24X7-Support.png",
      title: "24X7 Support & Agentic AI Based Solutions"
    },
    {
      icon: "https://tcifreight.in/wp-content/uploads/2023/11/assured-quality-brown.svg",
      title: "Assured Quality & Reliability"
    }
  ];

  const rightFeatures = [
    {
      icon: "https://tcifreight.in/wp-content/uploads/2023/11/pan-india-presence-brown.svg",
      title: "Pan-India Presence"
    },
    {
      icon: "https://tcifreight.in/wp-content/uploads/2023/11/online-track-n-trace-brown.svg",
      title: "Online track & trace"
    },
    {
      icon: "https://tcifreight.in/wp-content/uploads/2023/11/single-integrated-solution-provider-brown.svg",
      title: "Single Window Solution with dedicated KAMs"
    },
    {
      icon: "https://tcifreight.in/wp-content/uploads/2025/06/Green-Fuels-1.png",
      title: "Green Fuels based Sustainable transportation"
    }
  ];

  return (
    <section className="section-padding bg-[#f8f9fa]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column */}
          <div className="space-y-12">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center lg:items-end text-center lg:text-right group cursor-pointer">
                <div className="w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-secondary leading-tight max-w-[200px]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Middle Column (Large Image) */}
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/images/service-storage.png" 
                alt="Trans Carrier Logistics Operations" 
                className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer">
                <div className="w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-secondary leading-tight max-w-[200px]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
