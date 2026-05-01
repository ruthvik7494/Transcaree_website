const IndustriesServed = () => {
  const industries = [
    { name: "Industrial Engineering & Instrumentation", img: "https://tcifreight.in/wp-content/uploads/2025/07/Industrial-Engineering-Instrumentation.jpg" },
    { name: "Agri++", img: "https://tcifreight.in/wp-content/uploads/2025/06/farming-equipments.jpg" },
    { name: "Paper & Stationary", img: "https://tcifreight.in/wp-content/uploads/2025/06/Paper-Stationary-2.jpg" },
    { name: "Battery Industry", img: "https://tcifreight.in/wp-content/uploads/2025/06/battery.jpg" },
    { name: "Cables", img: "https://tcifreight.in/wp-content/uploads/2025/06/cables.jpg" },
    { name: "Dairy Products", img: "https://tcifreight.in/wp-content/uploads/2025/06/dairy-and-milks.jpg" },
    { name: "Seeds", img: "https://tcifreight.in/wp-content/uploads/2025/06/seeds.jpg" },
    { name: "Pipe MFG", img: "https://tcifreight.in/wp-content/uploads/2025/06/Pipe-MFG.jpg" },
    { name: "Defense", img: "https://tcifreight.in/wp-content/uploads/2025/06/defance.jpg" },
    { name: "Renewable Energy", img: "https://tcifreight.in/wp-content/uploads/2025/06/Renewable-Energy.jpg" },
    { name: "Other Industries", img: "https://tcifreight.in/wp-content/uploads/2025/07/all-others-industries.jpg" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-secondary">Industries Served</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100 mb-4 aspect-[4/3]">
                <img 
                  src={industry.img} 
                  alt={industry.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-sm font-bold text-secondary text-center px-2 group-hover:text-primary transition-colors leading-tight">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
