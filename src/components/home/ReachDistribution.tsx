const ReachDistribution = () => {
  const benefits = [
    { label: "Maximum Reach", text: "From metro cities to remote locations, our network delivers consistent coverage and accessibility across 19000+ Pin Codes." },
    { label: "Cost-Effective Operations", text: "Optimized routing and consolidation reduce transit costs while maintaining service quality." },
    { label: "Localized Distribution", text: "Tailored solutions for regional enterprises with frequent service schedules and flexible delivery options." },
    { label: "Modular Scalability", text: "Our infrastructure adapts to seasonal demand, project logistics and diverse cargo types." },
    { label: "Reliable Scheduling", text: "High-frequency service offerings allow clients to plan shipments with confidence and agility." }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Our Reach & Distribution</h2>
              <p className="text-gray-700 leading-relaxed">
                Trans Carrier operates through a robust and modular logistics infrastructure, featuring 25 strategically located hubs across India’s major commercial centers. These hubs, each averaging 25,000 sq. ft., anchor a vast network of 700+ branch offices, enabling seamless cargo movement and consolidation across urban and rural markets. Our multi-tiered distribution model – comprising hubs, transshipment centers and storage facilities – ensures:
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-gray-700 text-sm">
                    <strong className="text-secondary">{benefit.label}:</strong> {benefit.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 italic border-l-4 border-primary pl-4">
              Whether you’re moving bulk industrial goods or time – sensitive consignments, Trans Carrier’s expansive and intelligent logistics ecosystem ensures speed, reliability and cost-efficiency – empowering businesses to scale without limits.
            </p>

            <div className="pt-4 space-y-4">
              <h3 className="text-2xl font-bold text-secondary">International locations served</h3>
              <p className="text-gray-700">
                Trans Carrier, in collaboration with our regional partners, provides end-to-end logistics solutions for international locations across Bangladesh, Nepal & Bhutan.
              </p>
              <a 
                href="#" 
                className="inline-block bg-primary hover:bg-secondary hover:text-white text-secondary font-bold py-3 px-8 rounded transition-all duration-300 uppercase text-xs tracking-widest shadow-md"
              >
                Know More
              </a>
            </div>
          </div>

          {/* Right Column: Map Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="https://tcifreight.in/wp-content/uploads/2025/07/TCI_Hub_Map_for-Website2.png" 
              alt="Trans Carrier Network Map" 
              className="w-full h-auto rounded-lg relative z-10 drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReachDistribution;
