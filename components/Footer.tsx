import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface LinkItem {
    id: number;
    url: string;
    label: string;
}

interface FooterProps {
    links?: LinkItem[] | null;
}

const Footer = ({ links }: FooterProps) => {
  const exploreLinks = links || [
      { id: 1, url: '/tours', label: 'Our Motorcycle Rides' },
      { id: 2, url: '/holidays', label: 'Your Motorbike Holidays' },
      { id: 3, url: '/about', label: 'About us / our Philosophy' },
      { id: 4, url: '/blog', label: 'Slow Moto Stories' },
  ];

  return (
    <footer className="bg-accent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Stay in touch */}
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold font-display mb-6">Stay in touch</h3>
                <p className="text-gray-400 mb-6">
                    Sign in for NEW TOUR DATES and our latest posts! No worries, we´re too slooow to spam.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary flex-grow"
                    />
                    <button className="bg-primary hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-md uppercase tracking-wider transition-colors">
                        JOIN
                    </button>
                </form>
            </div>

            {/* Column 2: Explore */}
            <div>
                <h3 className="text-lg font-bold font-display mb-6">Explore</h3>
                <ul className="space-y-3">
                    {exploreLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={link.url} className="text-gray-400 hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Follow Us */}
            <div>
                 <h3 className="text-lg font-bold font-display mb-6">Follow Us</h3>
                 <div className="flex space-x-4">
                     <a href="https://facebook.com" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors">
                         <Facebook size={20} />
                     </a>
                     <a href="https://instagram.com" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors">
                         <Instagram size={20} />
                     </a>
                     <a href="https://youtube.com" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors">
                         <Youtube size={20} />
                     </a>
                 </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 Slow Moto Tours. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/imprint" className="hover:text-white transition-colors">Imprint</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
