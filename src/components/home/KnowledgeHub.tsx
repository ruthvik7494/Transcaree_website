const KnowledgeHub = () => {
  const assets = [
    {
      title: "Indian Road Freight Index",
      tagline: "The Route Map For Tracking Freight Rates",
      desc: "This is the seminal research and tool that forms the basis of all online freight cost calculators that we use today.",
      link: "#"
    },
    {
      title: "Study Reports",
      desc: "TCI & IIM Calcutta launched a Joint Study Report on “Operational Efficiency of Freight Transportation by Road in India”.",
      link: "#"
    },
    {
      title: "Ready Reckoner of TCI-IIMC Joint Study Report",
      desc: "Operational efficiency of freight transportation by road in India.",
      link: "https://cdn.tcil.in/website/tcil/Study_Report/ready-reckoner-of-tci-iim-joint-study-report-3rd-edition.pdf"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-6">Trans Carrier - Knowledge Hub</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Trans Carrier is at the forefront of driving cutting edge logistics solutions. 
            On the way, we continue to pioneer groundbreaking researches and innovations 
            that have shaped the Transport & Logistics industry.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assets.map((asset, index) => (
            <div key={index} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-4 leading-tight">
                {asset.title}
              </h3>
              {asset.tagline && (
                <p className="text-primary font-bold text-sm uppercase tracking-wide mb-4">
                  {asset.tagline}
                </p>
              )}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {asset.desc}
              </p>
              <div>
                <a 
                  href={asset.link}
                  target={asset.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-primary text-secondary hover:bg-primary font-bold py-2 px-8 rounded-full text-xs uppercase tracking-widest transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
