import logoImg from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-8">
            <img src={logoImg} alt="TCI Freight Logo" className="h-10 w-auto" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Leading the way in Indian logistics with innovative solutions and a commitment to excellence.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer text-secondary font-bold">f</div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer text-secondary font-bold">t</div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer text-secondary font-bold">in</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-sm tracking-widest border-l-4 border-primary pl-4">Useful Links</h4>
          <ul className="text-gray-500 text-sm flex flex-col gap-4">
            <li className="hover:text-primary transition-all cursor-pointer">Track Consignment</li>
            <li className="hover:text-primary transition-all cursor-pointer">Pincode Search</li>
            <li className="hover:text-primary transition-all cursor-pointer">Distance Calculator</li>
            <li className="hover:text-primary transition-all cursor-pointer">Route Planner</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-sm tracking-widest border-l-4 border-primary pl-4">Services</h4>
          <ul className="text-gray-500 text-sm flex flex-col gap-4">
            <li className="hover:text-primary transition-all cursor-pointer">Surface Transport</li>
            <li className="hover:text-primary transition-all cursor-pointer">Rail & Multimodal</li>
            <li className="hover:text-primary transition-all cursor-pointer">Express Cargo</li>
            <li className="hover:text-primary transition-all cursor-pointer">Warehousing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-sm tracking-widest border-l-4 border-primary pl-4">Contact Us</h4>
          <ul className="text-gray-500 text-sm flex flex-col gap-4">
            <li>TCI House 69 Industrial Area, Sector - 32, Gurgaon - 122001</li>
            <li className="text-secondary font-bold">+91 9818866824</li>
            <li className="text-secondary font-bold">care@tcifreight.in</li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 TCI Freight. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-widest">
          <a href="#" className="hover:text-secondary">Privacy Policy</a>
          <a href="#" className="hover:text-secondary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
