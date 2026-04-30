const Stats = () => {
  const capabilities = [
    { value: "10,000", suffix: "+", title: "Trucks Engaged" },
    { value: "1", suffix: " Bn+", title: "Kilometers covered annually (FY2025)" },
    { value: "7.5", suffix: " Mn+", title: "Kilometers by Clean Fuels Trucks (LNG, CNG & EV)" },
    { value: "99.5", suffix: "%", title: "On-time Deliveries Completed" },
    { value: "99.5", suffix: "%", title: "Delivery Accuracy" },
    { value: "3", suffix: " Lac+", title: "Customers Served" }
  ];

  return (
    <section className="bg-gray-50 py-20 border-y border-gray-100">
      <div className="container">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-secondary">Our Capabilities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {capabilities.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="text-4xl font-black text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                {item.value}<span className="text-secondary">{item.suffix}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider leading-tight max-w-[150px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

