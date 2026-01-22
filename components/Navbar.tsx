import Link from 'next/link';
import { Menu } from 'lucide-react';

interface NavbarProps {
    siteName?: string;
    logoUrl?: string;
}

const Navbar = ({ siteName, logoUrl }: NavbarProps) => {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-display font-bold text-2xl text-accent tracking-tighter">
                {/* Use logo image if available, else text */}
                SLOW<span className="text-primary">MOTORS</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/tours" className="text-accent hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors">
                Tours
            </Link>
            <Link href="/holidays" className="text-accent hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors">
                Holidays
            </Link>
            <Link href="/about" className="text-accent hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors">
                About
            </Link>
            <Link href="/blog" className="text-accent hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors">
                Blog
            </Link>
            <Link href="/contact" className="bg-primary hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all transform hover:scale-105">
                Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-accent hover:text-primary focus:outline-none">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
