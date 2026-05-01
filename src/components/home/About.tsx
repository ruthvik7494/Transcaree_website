const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Upper Section: About Trans Carrier */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-normal text-secondary mb-2">About Trans Carrier</h1>
              <h2 className="text-2xl font-normal text-secondary">Revolutionizing Logistics with Precision and Reliability</h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-secondary font-black">Trans Carrier</strong> stands as a pioneer in modern logistics and surface transportation, committed to delivering excellence through innovation and dedicated service. With an extensive network and a focus on customer satisfaction, we provide <strong className="text-secondary font-black">comprehensive end-to-end supply chain solutions</strong> tailored to meet the evolving needs of businesses across the region.
              </p>
              <p>
                Whether it’s Full Truck Load <strong className="text-secondary font-black">(FTL)</strong>, Less than Truck Load <strong className="text-secondary font-black">(LTL)</strong>, or specialized Over-Dimensional Cargo <strong className="text-secondary font-black">(ODC)</strong>, Trans Carrier leverages cutting-edge technology and a robust fleet to ensure your cargo reaches its destination safely and on time. Our commitment to quality and safety makes us the preferred partner for complex logistics challenges.
              </p>
              <p>
                Our expansive network covers every corner, ensuring that no destination is out of reach. With Trans Carrier, you gain a partner dedicated to optimizing your supply chain and driving growth through seamless logistics execution.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div>
            <img 
              src="/images/about-truck.png" 
              className="w-full h-auto rounded-lg shadow-sm border border-gray-100" 
              alt="Trans Carrier Logistics Truck" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




