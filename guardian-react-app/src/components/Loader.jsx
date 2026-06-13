import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-tertiary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo with Pulse Animation */}
        <div className="relative mb-8">
          {/* Glow Effect */}
          <div className="absolute inset-0 -m-4">
            <div className="w-56 h-56 rounded-full bg-secondary/10 animate-pulse-slow blur-2xl"></div>
          </div>

          {/* Logo Container with Scale Animation */}
          <div className="relative w-48 h-48 flex items-center justify-center animate-scale-pulse">
            <img 
              src="/images/Guardian reinsurance brokers logo 1.png" 
              alt="Guardian Reinsurance Brokers" 
              className="w-40 h-40 object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h3 className="text-primary text-xl md:text-2xl font-semibold tracking-wide animate-fade-in-up">
            Guardian Reinsurance
          </h3>
          
          {/* Animated Dots */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
