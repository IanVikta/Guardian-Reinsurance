import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/guardian-reinsurance-brokers-ltd',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/GuardianReUg',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/guardianrebrokers',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/watch?v=gUVFBa-ouLM',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/skyline.jpg" 
          alt="City Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-tertiary-container opacity-95"></div>
      </div>

      {/* Top decorative line */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      {/* Main Footer Content - Big Logo + Reorganized Content */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          
          {/* Left Side: Very Big Logo - Spans 3 columns */}
          <div className="md:col-span-3 flex justify-center md:justify-start" data-aos="fade-right">
            <Link to="/" className="inline-block group">
              <img 
                src="/images/Guardian reinsurance brokers logo 1.png" 
                alt="Guardian Reinsurance Brokers" 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Right Side: Reorganized Content - Spans 9 columns */}
          <div className="md:col-span-9" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Column 1: Tagline */}
              <div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Your preferred reinsurance broker, delivering innovative solutions with integrity and expertise.
                </p>
              </div>
              
              {/* Column 2: Quick Links */}
              <div>
                <h5 className="font-semibold text-secondary-fixed mb-3 text-xs uppercase tracking-wider">
                  Quick Links
                </h5>
                <ul className="space-y-2">
                  <li>
                    <Link to="/products#treaty" className="text-white/70 hover:text-white transition-colors text-sm block">
                      Treaty Broking
                    </Link>
                  </li>
                  <li>
                    <Link to="/products#facultative" className="text-white/70 hover:text-white transition-colors text-sm block">
                      Facultative Reinsurance
                    </Link>
                  </li>
                  <li>
                    <Link to="/claims" className="text-white/70 hover:text-white transition-colors text-sm block">
                      Claims Recoveries
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm block">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Legal */}
              <div>
                <h5 className="font-semibold text-secondary-fixed mb-3 text-xs uppercase tracking-wider">
                  Legal
                </h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#privacy" className="text-white/70 hover:text-white transition-colors text-sm block">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="text-white/70 hover:text-white transition-colors text-sm block">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <Link to="/about#sustainability" className="text-white/70 hover:text-white transition-colors text-sm block">
                      Sustainability
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact + Social */}
              <div>
                <h5 className="font-semibold text-secondary-fixed mb-3 text-xs uppercase tracking-wider">
                  Contact
                </h5>
                <div className="space-y-2 mb-4">
                  <a 
                    href="tel:+256414344500" 
                    className="flex items-center gap-2 text-white/70 hover:text-secondary-fixed transition-colors text-sm"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    <span>+256 414 344 500</span>
                  </a>
                  
                  <a 
                    href="mailto:info@guardianrebrokers.co.ug" 
                    className="flex items-center gap-2 text-white/70 hover:text-secondary-fixed transition-colors text-sm"
                  >
                    <span className="material-symbols-outlined text-base">mail</span>
                    <span className="break-all">info@guardianrebrokers.co.ug</span>
                  </a>
                  
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Kampala, Uganda</span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary/20 border border-white/10 hover:border-secondary/50 flex items-center justify-center text-white/70 hover:text-secondary-fixed transition-all"
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Compact */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Copyright */}
            <div className="text-white/50 text-center md:text-left">
              © {currentYear} Guardian Reinsurance Brokers. All rights reserved.
            </div>

            {/* Legal Links - Inline */}
            <div className="flex items-center gap-4 text-xs">
              <a href="#privacy" className="text-white/50 hover:text-white transition-colors">
                Privacy
              </a>
              <span className="text-white/20">•</span>
              <a href="#terms" className="text-white/50 hover:text-white transition-colors">
                Terms
              </a>
              <span className="text-white/20">•</span>
              <a href="#cookies" className="text-white/50 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
