"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DEFAULT_LINKS } from '@/lib/defaults';

interface LinkItem {
    id: number;
    url: string;
    label: string;
    isButton?: boolean;
}

interface NavbarProps {
    siteName?: string;
    logoUrl?: string;
    links?: LinkItem[] | null;
    error?: string | null;
}

const Navbar = ({ siteName, logoUrl, links, error }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const menuLinks = links && links.length > 0 ? links : DEFAULT_LINKS;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navbar is transparent only on Home, when at top, and menu is closed.
  const isTransparent = isHome && !isScrolled && !isOpen;

  const navClasses = isTransparent
    ? 'bg-transparent py-4 shadow-none'
    : 'bg-white/95 backdrop-blur-sm shadow-sm py-2';

  // Text color: White on transparent, Accent (Dark) otherwise.
  const textColorClass = isTransparent ? 'text-white' : 'text-accent';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClasses}`}>
      {error && (
        <div className="bg-red-500 text-white text-center py-2 px-4 text-sm font-medium z-50 relative">
            {error}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-50">
            <Link href="/" className={`font-display font-bold text-2xl tracking-tighter transition-colors duration-300 ${textColorClass}`}>
                {logoUrl ? (
                    <img src={logoUrl} alt="Slow Moto Tours" className="h-12 w-auto" />
                ) : (
                    <>SLOW<span className="text-primary">MOTORS</span></>
                )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuLinks.map((link) => {
                const isActive = pathname === link.url;

                if (link.isButton) {
                    return (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all transform hover:-translate-y-0.5 hover:shadow-md"
                        >
                            {link.label}
                        </Link>
                    );
                }

                return (
                    <Link
                        key={link.id}
                        href={link.url}
                        className={`font-medium text-sm uppercase tracking-wide transition-colors relative group ${
                            isActive ? 'text-primary' : `${textColorClass} hover:text-primary`
                        }`}
                    >
                        {link.label}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
                onClick={toggleMenu}
                className={`transition-colors duration-300 focus:outline-none ${textColorClass} hover:text-primary`}
                aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background w-screen h-screen z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 pt-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {menuLinks.map((link) => {
                const isActive = pathname === link.url;
                return (
                    <Link
                        key={link.id}
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                            link.isButton
                                ? 'text-primary hover:text-orange-600'
                                : isActive ? 'text-primary' : 'text-accent hover:text-primary'
                        }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
      </div>
    </nav>
  );
};

export default Navbar;
