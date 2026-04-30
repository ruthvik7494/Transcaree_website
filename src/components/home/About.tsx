const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Upper Section: About TCI */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-normal text-secondary mb-2">About TCI Freight</h1>
              <h2 className="text-2xl font-normal text-secondary">India’s foremost surface transport entity</h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-secondary font-black">TCI Freight</strong>, the largest division of <strong className="text-secondary font-black">TCI Group</strong>, stands as India’s foremost surface transport entity, trusted by industries nationwide for its scale, reliability and innovation. With a pan-India presence and decades of expertise, TCI Freight is fully equipped to deliver <strong className="text-secondary font-black">end-to-end surface transport solutions</strong> for cargo of every dimension and product category.
              </p>
              <p>
                Whether it’s Full Truck Load <strong className="text-secondary font-black">(FTL)</strong>, Less than Truck Load <strong className="text-secondary font-black">(LTL)</strong>, Over-Dimensional Cargo <strong className="text-secondary font-black">(ODC)</strong>, or Project Heavy Haul <strong className="text-secondary font-black">(PHH)</strong> across <strong className="text-secondary font-black">India or Cross-Border</strong> to neighboring countries, TCI Freight ensures safe, timely and cost-effective delivery through its <strong className="text-secondary font-black">Value Added Services</strong> and advanced fleet and logistics infrastructure.
              </p>
              <p>
                With TCI Freight’s Bull’s Eye Network, you’ll find our branches in the remotest corners of India – from Leh to Kanyakumari and from Kandla, to Lumshnong in Meghalaya. We ensure unmatched geographical reach Not just in India, but also to Bhutan, Bangladesh & Nepal.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div>
            <img 
              src="https://tcifreight.in/wp-content/uploads/2025/06/about-truck.jpg" 
              className="w-full h-auto rounded-lg shadow-sm border border-gray-100" 
              alt="TCI Freight Truck" 
            />
          </div>
        </div>

        {/* Lower Section: Sustainability */}
        <div className="pt-12 border-t border-gray-100">
          <h2 className="text-3xl font-normal text-secondary mb-6">Driving Sustainability with Clean Fuel Logistics</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed max-w-5xl">
            <p>
              In alignment with India’s sustainability goals for 2030, TCI Freight is pioneering <strong className="text-secondary font-black">Zero-Emission Trucking (ZET)</strong>. Our fleet includes <strong className="text-secondary font-black">EVs, LNG and CNG-powered trucks</strong>, all compliant with <strong className="text-secondary font-black">Bharat Stage VI norms</strong>, significantly reducing carbon emissions across road transport operations.
            </p>
            <p>
              By integrating <strong className="text-secondary font-black">AI-powered route optimization</strong>, <strong className="text-secondary font-black">real-time tracking</strong> and <strong className="text-secondary font-black">green fuel technologies</strong>, TCI Freight is not just moving cargo – it’s moving India toward a cleaner, smarter logistics future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



