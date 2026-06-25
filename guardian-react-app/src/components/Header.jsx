import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/products', label: 'Products', icon: 'inventory_2' },
    { path: '/claims', label: 'Claims', icon: 'receipt_long' },
    { path: '/about', label: 'About', icon: 'info' },
    { path: '/gallery', label: 'Gallery', icon: 'photo_library' },
    { path: '/insights', label: 'Insights', icon: 'insights' }
  ];

  const isActive = (path) => {
    if (path.startsWith('#')) return false;
    return location.pathname === path;
  };

  return (
    <>
      {/* Modern Header */}
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 shadow-[0_8px_32px_rgba(0,10,30,0.08)]' 
            : 'bg-white/80'
        } backdrop-blur-2xl`}
      >
        {/* Top bar - ultra thin gold accent */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Modern compact design */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/images/Guardian reinsurance brokers logo 1.png" 
                alt="Guardian Reinsurance Brokers" 
                className="h-20 md:h-24 lg:h-28 w-auto max-w-[400px] object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            
            {/* Desktop Navigation - Modern with hover effects */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors group ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" style={{fontVariationSettings: "'wght' 500"}}>
                      {link.icon}
                    </span>
                    {link.label}
                  </span>
                  <span className="absolute inset-0 bg-surface-muted rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center"></span>
                </Link>
              ))}
            </nav>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Get Quote Button - Premium design */}
              <Link 
                to="/contact"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-[0_8px_24px_rgba(0,10,30,0.25)] hover:scale-105 active:scale-95 transition-all group" 
              >
                <span>Contact Us</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
              
              {/* Secondary Contact Button */}
              <Link 
                to="/contact"
                className="hidden sm:flex md:hidden items-center gap-2 border-2 border-primary text-primary px-5 py-2 rounded-lg font-medium text-sm hover:bg-primary hover:text-white transition-all" 
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </Link>
              
              {/* Mobile Menu Button - Modern hamburger */}
              <button 
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-muted transition-colors group" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span className={`h-0.5 bg-primary rounded-full transition-all origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`h-0.5 bg-primary rounded-full transition-all ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                  <span className={`h-0.5 bg-primary rounded-full transition-all origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[105] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Modern Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm z-[110] bg-gradient-to-br from-primary via-primary-container to-tertiary-container shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/images/Guardian reinsurance brokers logo 1.png" 
              alt="Guardian Reinsurance Brokers" 
              className="h-16 w-auto max-w-[280px] object-contain brightness-0 invert"
            />
          </div>
          <button 
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>
        </div>
        
        {/* Menu Content */}
        <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          <nav className="flex-1 p-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all group ${
                  isActive(link.path)
                    ? 'bg-white/15 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isActive(link.path) 
                    ? 'bg-secondary/30' 
                    : 'bg-white/5 group-hover:bg-secondary/20'
                }`}>
                  <span className="material-symbols-outlined text-secondary-fixed">
                    {link.icon}
                  </span>
                </div>
                <span className="font-medium">{link.label}</span>
                <span className="material-symbols-outlined ml-auto text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </Link>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-white/10 space-y-4">
            <Link 
              to="/contact" 
              className="flex items-center justify-center gap-2 bg-secondary-container text-primary px-6 py-4 rounded-xl font-semibold hover:bg-secondary transition-all shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            
            <div className="flex items-center justify-center gap-3 pt-2">
              <a 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all" 
                href="#linkedin"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all" 
                href="#email"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
              <a 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all" 
                href="#phone"
              >
                <span className="material-symbols-outlined text-xl">call</span>
              </a>
            </div>
            
            <p className="text-center text-white/40 text-xs">
              © 2024 Guardian Reinsurance Brokers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
