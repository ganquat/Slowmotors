import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOGfdEVD4__usxvd9UQwMO8HrAmuaE-rqpP8t-F7pndveuOrdsU03K3kQuFTWZzhHwjJzReXD2Nrz9_4KgO39-pML-ppzbGdK1X2fDJ2A6MuC2rO2HOHDY7g1NDFZ0Sya_nB6Jp7czKwU6lZU5PpVapbmmJDIlz4dKDdBDv1RqAm6pOJIlbxSffiIbjOJcwoP_BOSW6RHuARobdkTqYgiMQNVyUMHf0m-FPaSwokbHP_WDNlNjkVt4d0FPT1rKZU0XAKOBs97eNS8g" 
          alt="Motorcycle on a road in India" 
          className="w-full h-full object-cover brightness-[0.75] dark:brightness-[0.50]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-light/90 dark:from-background-dark/90 via-transparent to-transparent h-32 bottom-0 w-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 animate-fade-in-up">
        <span className="block text-secondary font-display italic text-2xl md:text-3xl mb-4 tracking-wider">
          slooow traveling
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
          Time to let <br/>
          impressions settle
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto drop-shadow-lg mb-10 leading-relaxed">
          We believe the journey matters just as much as the destination. Experience authentic India.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#our-rides" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            Find Your Ride
            <span className="material-icons-outlined text-sm">east</span>
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
        <span className="material-icons-outlined text-4xl">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
};