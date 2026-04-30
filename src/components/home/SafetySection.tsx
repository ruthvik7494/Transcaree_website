const SafetySection = () => {
  const initiatives = [
    {
      title: "TCI Safe Safar",
      desc: "Our flagship safety program, designed to educate and empower drivers with best practices in road safety, vehicle maintenance, and emergency response. Through regular training sessions, health check-ups, and awareness drives, we ensure our drivers are always road-ready and safety-conscious.",
      link: "https://tcisafesafar.com",
      hasButton: true
    },
    {
      title: "Accidents Policy",
      desc: "We strive for a zero-incident environment by enforcing strict compliance with traffic regulations, speed limits, and vehicle fitness standards. Our fleet is equipped with GPS tracking, real-time monitoring, and telematics to ensure safe and efficient transit.",
      hasButton: false
    },
    {
      title: "Cargo Safety Protocols",
      desc: "From secure packaging to route optimization, we take every measure to safeguard your cargo. Our logistics processes are designed to minimize risk and maximize reliability, ensuring your goods reach their destination safely and on time.",
      hasButton: false
    },
    {
      title: "Safe Material Handling",
      desc: "We follow stringent safety procedures during loading, unloading, and cargo stuffing. Our teams are trained in proper handling techniques, use of personal protective equipment (PPE), and safe operation of material handling equipment to prevent injuries and cargo damage.",
      hasButton: false
    },
    {
      title: "Driver Welfare & Health",
      desc: "We prioritize the well-being of our drivers with regular health camps, rest stops, and wellness programs. A healthy driver is a safe driver, and we leave no stone unturned in supporting our frontline heroes.",
      hasButton: false
    },
    {
      title: "Emergency Response Systems",
      desc: "Our 24x7 control rooms and rapid response teams are always on alert to handle any unforeseen situations swiftly and effectively.",
      hasButton: false
    }
  ];

  return (
    <section className="section-padding bg-[#fdfdfd]">
      <div className="container">
        {/* Header Content */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-6">Safety: Our 1st Priority</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              At TCI Freight, safety is not just a protocol – it’s a promise. We are deeply committed to 
              ensuring the highest standards of health, safety and security across all our road transport 
              and logistics operations. Our goal is clear: <span className="font-bold text-secondary">Zero Accidents. Zero Compromise.</span>
            </p>
            <p className="text-base text-gray-500">
              To uphold this commitment, we have implemented a robust framework of safety initiatives:
            </p>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div key={index} className="group relative h-[300px] [perspective:1000px] cursor-pointer">
              {/* Card Inner */}
              <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md">
                
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-white flex items-center justify-center p-8 [backface-visibility:hidden] border border-gray-100">
                  <div className="text-center">
                    <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
                    <h3 className="text-2xl font-bold text-secondary leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side (The "Flip") */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 opacity-90">
                    {item.desc}
                  </p>
                  {item.hasButton && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-secondary font-bold py-2 px-6 rounded text-xs uppercase tracking-widest hover:bg-white transition-colors"
                    >
                      Know More
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
