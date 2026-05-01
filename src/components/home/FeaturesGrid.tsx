const FeaturesGrid = () => {
  const allFeatures = [
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
    },
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
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-secondary">Why Trans Carrier?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="/images/service-storage.png" 
                alt="Trans Carrier Logistics Operations" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-start group cursor-pointer">
                  <div className="w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary leading-tight">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
