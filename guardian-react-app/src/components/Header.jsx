import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Solutions' },
    { path: '/claims', label: 'Claims' },
    { path: '/insights', label: 'Insights' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/98 backdrop-blur-md border-b border-[#E5E0D8] shadow-sm py-3'
            : 'bg-[#FAF8F5] border-b border-[#E5E0D8]/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/Guardian reinsurance brokers logo 1.png"
                alt="Guardian Reinsurance Brokers (U) Ltd"
                className="h-12 sm:h-14 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>

            {/* Desktop Navigation - Sleek Sharp Editorial Design */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 text-[13px] tracking-wide font-medium transition-all duration-150 ${
                      active
                        ? 'text-brand-navy bg-[#EFECE6] border-b-2 border-brand-navy font-semibold'
                        : 'text-charcoal-muted hover:text-charcoal hover:bg-[#F2EFE9]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Button & Mobile Menu Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-brand-navy text-white hover:bg-brand-blue border border-brand-navy transition-all duration-200 shadow-sm"
              >
                Get in Touch
              </Link>

              {/* Mobile Hamburger Button - Clean & Borderless */}
              <button
                type="button"
                className="lg:hidden p-2 text-charcoal hover:text-brand-navy border-0 outline-none focus:outline-none focus:ring-0 ring-0 shadow-none bg-transparent active:bg-transparent transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-2xl select-none">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs z-50 bg-[#FAF8F5] border-l border-[#E7E2D9] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E2D9]">
            <img
              src="/images/Guardian reinsurance brokers logo 1.png"
              alt="Guardian Reinsurance Brokers"
              className="h-10 w-auto object-contain"
            />
            {/* Borderless Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-charcoal hover:text-brand-navy border-0 outline-none focus:outline-none focus:ring-0 ring-0 shadow-none bg-transparent active:bg-transparent transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-2xl select-none">close</span>
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#EFECE6] text-brand-navy border-l-2 border-brand-navy font-semibold'
                    : 'text-charcoal-muted hover:text-charcoal hover:bg-[#F2EFE9]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#E7E2D9] space-y-4">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-3.5 bg-brand-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-blue transition-colors shadow-sm"
          >
            Get in Touch
          </Link>
          <div className="space-y-1.5 text-xs text-center font-mono text-charcoal-muted">
            <a href="tel:+256414344500" className="block text-brand-navy font-semibold hover:underline">
              +256 414 344 500
            </a>
            <p className="text-[11px] text-charcoal-muted/70">
              Kampala, Uganda • IRA Licensed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
