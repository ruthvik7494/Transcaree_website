const SustainabilitySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-secondary">Sustainability at Trans Carrier</h2>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Trans Carrier, sustainability is not an afterthought, but ingrained in all our solutions. 
            To all our customers, we offer the power to track, measure and reduce the carbon emissions 
            from their logistics operations.
          </p>
        </div>

        {/* Video Container */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-2xl bg-black aspect-video max-w-5xl mx-auto">
          <video 
            className="w-full h-full" 
            src="https://tcil.canto.com/direct/video/0n1hlmh52p1d9118j6m5ptog0t/6ombSZeDyzN9yiCCviEhXo7KTXQ/original?content-type=video%2Fmp4&name=ISO+TEMT+Product+VID-_1.mp4" 
            controls 
            preload="metadata"
          ></video>
        </div>

        {/* Bottom Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed mb-10">
            Trans Carrier is committed to environmental excellence. We leverage advanced tools like the 
            ISO certified Transport Emission Measurement Tool (TEMT) which enables all businesses to 
            track the exact emissions from their Transport Chain Elements (TCE). These systems are 
            integrated for transparent emission reporting and easier regulatory compliance. 
            Come, join the movement and opt for more environment-friendly choices with Trans Carrier.
          </p>

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-secondary hover:text-white text-secondary font-bold py-4 px-10 rounded transition-all duration-300 uppercase text-sm tracking-widest shadow-lg"
          >
            Click here to check your emissions now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
