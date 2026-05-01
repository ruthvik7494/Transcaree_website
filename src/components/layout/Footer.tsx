import logoImg from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-10">
      <div className="container grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="flex items-center mb-6">
            <img src={logoImg} alt="Trans Carrier Logo" className="h-10 w-auto" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Leading the way in Indian logistics with innovative solutions and a commitment to excellence.
          </p>
        </div>

        <div className="md:text-right">
          <h4 className="font-bold mb-6 uppercase text-sm tracking-widest border-r-4 border-primary pr-4 md:inline-block">Contact Us</h4>
          <ul className="text-gray-500 text-sm flex flex-col gap-4">
            <li className="text-secondary font-bold text-lg">
              <a href="mailto:support@transcarrier.in">support@transcarrier.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
        <p>© 2026 Trans Carrier. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
