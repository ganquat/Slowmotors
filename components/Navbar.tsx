"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
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

  const menuLinks = links && links.length > 0 ? links : DEFAULT_LINKS;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      {error && (
        <div className="bg-red-500 text-white text-center py-2 px-4 text-sm font-medium z-50 relative">
            {error}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-display font-bold text-2xl text-accent tracking-tighter z-50 relative">
                {logoUrl ? (
                    <img src={logoUrl} alt="Slow Moto Tours" className="h-12 w-auto" />
                ) : (
                    <>SLOW<span className="text-primary">MOTORS</span></>
                )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuLinks.map((link) => (
                link.isButton ? (
                    <Link key={link.id} href={link.url} className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all transform hover:-translate-y-0.5 hover:shadow-md">
                        {link.label}
                    </Link>
                ) : (
                    <Link key={link.id} href={link.url} className="text-accent hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors relative group">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
                onClick={toggleMenu}
                className="text-accent hover:text-primary focus:outline-none z-50 relative"
                aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background w-screen h-screen z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 pt-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {menuLinks.map((link) => (
                <Link
                    key={link.id}
                    href={link.url}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold uppercase tracking-widest ${link.isButton ? 'text-primary' : 'text-accent hover:text-primary'}`}
                >
                    {link.label}
                </Link>
            ))}
      </div>
    </nav>
  );
};

export default Navbar;
