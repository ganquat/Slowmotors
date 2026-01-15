import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Our Rides', id: 'our-rides' },
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Holidays', id: 'itinerary' },
    { label: 'Stories', id: 'stories' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-light/95 dark:bg-background-dark/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={`material-icons-outlined text-4xl ${isScrolled ? 'text-primary' : 'text-white'} transition-colors`}>two_wheeler</span>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-wide uppercase leading-none ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} transition-colors`}>
                Slow Moto
              </span>
              <span className={`text-[0.65rem] tracking-[0.3em] font-body uppercase ${isScrolled ? 'text-gray-500 dark:text-gray-400' : 'text-gray-200'} transition-colors`}>
                Tours
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
            
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              Book Now
            </button>

            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-200 dark:hover:bg-gray-700' : 'hover:bg-white/20'}`}>
              <span className={`material-icons-outlined ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}>
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className={`p-2 rounded-full ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}>
              <span className="material-icons-outlined text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
            >
              <span className="material-icons-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.id}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
             <button 
               onClick={(e) => scrollToSection(e, 'contact')}
               className="w-full mt-4 bg-primary text-white px-5 py-3 rounded-md text-sm font-bold uppercase tracking-wider"
             >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};