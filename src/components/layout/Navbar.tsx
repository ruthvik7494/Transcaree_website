import { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products & Services', path: '/products-services' },
    { name: 'Industry Solutions', path: '/industry-solutions' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Careers', path: 'https://tcil.com/careers/', isExternal: true },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
      isScrolled ? 'py-2 shadow-xl' : 'py-4 shadow-md'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img 
            src={logo} 
            alt="Trans Carrier Logo" 
            className="h-8 md:h-10 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              target={item.isExternal ? '_blank' : '_self'}
              rel={item.isExternal ? 'noopener noreferrer' : ''}
              className="px-4 py-2 text-sm font-bold text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wide whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-secondary focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'
      }`}>
        <div className="container py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              target={item.isExternal ? '_blank' : '_self'}
              rel={item.isExternal ? 'noopener noreferrer' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

