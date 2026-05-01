const TopBar = () => {
  return (
    <div className="bg-secondary text-white py-2 hidden md:block">
      <div className="container flex justify-between items-center text-xs tracking-wide">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <span className="text-primary font-bold">TOLL FREE:</span> 1800 1800 824
          </span>
          <span className="flex items-center gap-2">
            <span className="text-primary font-bold">EMAIL:</span> support@transcarrier.in
          </span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">PARTNER GATEWAY</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-primary transition-colors">CUSTOMER LOGIN</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-primary transition-colors">MY TRANS CARRIER</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
