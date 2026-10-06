import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { label: 'Treaty Broking', path: '/products' },
    { label: 'Facultative Placement', path: '/products' },
    { label: 'Claims Recoveries', path: '/claims' },
    { label: 'Technical Accounting', path: '/products' },
    { label: 'Market Analytics', path: '/insights' }
  ];

  const companyLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Practice Desks & Leadership', path: '/about' },
    { label: 'Market Insights', path: '/insights' },
    { label: 'Industry Gallery', path: '/gallery' },
    { label: 'Publications', path: '/blog' },
    { label: 'Careers & Contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/guardian-reinsurance-brokers-ltd',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.4 9.74V9.97H5.06v8.53z" />
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/GuardianReUg',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/watch?v=gUVFBa-ouLM',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#071735] text-slate-200 pt-16 pb-12 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* TIER 1: BRAND MASTHEAD & DIRECT REINSURANCE DESK CHANNELS */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
          {/* Logo & Corporate Identity */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <Link to="/" className="inline-block shrink-0 focus:outline-none">
              <img
                src="/images/guardian-logo-white.png"
                alt="Guardian Reinsurance Brokers Uganda"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>

            <div className="space-y-1.5 max-w-lg">
              <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-slate-400 block">
                GUARDIAN REINSURANCE BROKERS UGANDA LIMITED
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-normal leading-snug">
                Your preferred reinsurance broker in Uganda and East Africa.
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Licensed and regulated by the Insurance Regulatory Authority of Uganda (IRA).
              </p>
            </div>
          </div>

          {/* Quick Direct Broking Channels */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-8 text-xs font-mono text-slate-300 lg:border-l lg:border-white/[0.08] lg:pl-8">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5">
                Direct Switchboard
              </span>
              <a
                href="tel:+256414344500"
                className="text-white hover:text-brand-azure transition-colors text-sm font-medium block"
              >
                +256 414 344 500
              </a>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5">
                Treaty Inquiries
              </span>
              <a
                href="mailto:info@guardianrebrokers.co.ug"
                className="text-white hover:text-brand-azure transition-colors text-sm font-medium block break-all"
              >
                info@guardianrebrokers.co.ug
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIER 2: FOUR EVENLY ALIGNED PRACTICE & CORPORATE COLUMNS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-12 border-b border-white/[0.08]">
          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              {solutionsLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors duration-150 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors duration-150 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Principal Headquarters */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="space-y-0.5">
                <p className="text-slate-300 font-medium">Plot 14/16 Kampala Road</p>
                <p>P.O. Box 7120, Kampala</p>
                <p className="text-xs font-mono text-slate-400">Kampala, Uganda • East Africa</p>
              </div>

              <div className="pt-1 text-xs font-mono text-slate-400/80">
                <span>Market Hours: Mon – Fri 08:30 – 17:00</span>
              </div>
            </div>
          </div>

          {/* Column 4: Institutional Fiduciary Standing & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Institutional Fiduciary
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
              Delivering innovative risk transfer solutions with clinical precision, integrity, and institutional trust under IRA oversight.
            </p>

            <div className="pt-3 border-t border-white/[0.08] flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-slate-400 hover:text-white transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIER 3: STATUTORY LEGAL ATTRIBUTION & COMPLIANCE LINKS */}
        {/* ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Guardian Reinsurance Brokers Uganda Limited. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors duration-150">
              Privacy Statement
            </Link>
            <Link to="/about" className="hover:text-white transition-colors duration-150">
              Terms of Engagement
            </Link>
            <Link to="/about" className="hover:text-white transition-colors duration-150">
              Regulatory Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
