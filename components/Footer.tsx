import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1c1917] text-gray-400 py-16 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <span className="material-icons text-primary text-3xl">two_wheeler</span>
              <span className="font-display font-bold text-2xl text-white">Slow Moto Tours</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Authentic guided Royal Enfield motorcycle tours in Southern India. Experience the culture, the food, and the ride of a lifetime.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
               {['facebook', 'camera_alt', 'smart_display'].map(icon => (
                   <a key={icon} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                       <span className="material-icons text-lg">{icon}</span>
                   </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-display text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['Our Motorcycle Rides', 'About Us / Philosophy', 'Terms & Conditions', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-right">
             <h3 className="font-display text-white font-bold text-lg mb-6 tracking-wide">Stay Updated</h3>
             <div className="flex flex-col items-center md:items-end gap-4">
                 <p className="text-xs text-gray-500 italic max-w-xs">Sign in for NEW TOUR DATES and our latest posts! No worries, we're too slooow to spam.</p>
                 <div className="flex w-full max-w-xs">
                     <input type="email" placeholder="Your email..." className="bg-gray-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-primary text-sm" />
                     <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md font-bold text-sm uppercase">Go</button>
                 </div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 Slow Moto Tours. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a href="#" className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
         <span className="material-icons text-3xl">chat</span>
         <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat with us!</span>
      </a>
    </footer>
  );
};