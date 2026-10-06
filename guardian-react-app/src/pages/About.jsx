import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: 'verified_user',
      title: 'Integrity & Ethics',
      description: 'Trust in ethical practices and unwavering transparency in every transaction. We operate as true fiduciaries for our cedants.'
    },
    {
      icon: 'person_pin',
      title: 'Client-Centered Focus',
      description: 'Personalized services tailored to your unique capital requirements, retention limits, and business goals.'
    },
    {
      icon: 'lightbulb',
      title: 'Technical Innovation',
      description: 'Pioneering dynamic risk architectures and sophisticated modeling to anticipate complex market shifts.'
    },
    {
      icon: 'public',
      title: 'Global Counterparty Reach',
      description: 'Direct access to premier Lloyd’s syndicates, continental reinsurers, and regional capacity providers.'
    },
    {
      icon: 'military_tech',
      title: 'Seasoned Expertise',
      description: 'Seasoned reinsurance brokers and actuarial professionals bringing decades of combined institutional experience.'
    },
    {
      icon: 'eco',
      title: 'ESG & Sustainability',
      description: 'Committed to environmental risk consciousness, ethical corporate governance, and community resilience in East Africa.'
    }
  ];

  const team = [
    {
      icon: 'domain',
      role: 'Executive Leadership',
      title: 'Strategic Direction & Governance',
      description: 'Guiding long-term institutional vision, regulatory alignment, and senior relationships with international reinsurers.',
      focus: 'Board Oversight & IRA Governance'
    },
    {
      icon: 'account_balance',
      role: 'Treaty Broking Desk',
      title: 'Portfolio Architecture & Placement',
      description: 'Specialists in proportional and non-proportional treaty structuring, exposure aggregation, and competitive capacity syndication.',
      focus: 'Life & General Treaty Portfolios'
    },
    {
      icon: 'hub',
      role: 'Facultative & Special Risks',
      title: 'Single-Risk Placement',
      description: 'Rapid syndication for high-value infrastructure, energy, aviation, and complex commercial exposures.',
      focus: 'Aviation, Marine & Energy Lines'
    },
    {
      icon: 'receipt_long',
      role: 'Technical Accounting & Claims',
      title: 'Financial Integrity & Advocacy',
      description: 'Actuarial reconciliation, claims recovery acceleration, and adherence to Insurance Regulatory Authority standards.',
      focus: 'Fast-Track Cash Calls & Audits'
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-28 pb-16 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* HERO SECTION - SPLIT TWO-COLUMN ARCHITECTURAL EDITORIAL LAYOUT */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Headline, Lead Copy, Trust Metrics & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center" data-aos="fade-right">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-brand-azure rounded-full"></span>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                  ABOUT GUARDIAN REINSURANCE • UGANDA
                </span>
              </div>

              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-charcoal font-normal leading-[1.1] tracking-tight mb-6">
                Your preferred reinsurance broker in Uganda and East Africa.
              </h1>

              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed mb-8 max-w-xl font-light">
                Combining the personalized attention of a premier boutique broker with the placement muscle of leading African and global reinsurance syndicates.
              </p>

              {/* Trust Indicators / Strategic Pillars */}
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#E5E0D8] mb-8 max-w-xl" data-aos="fade-up" data-aos-delay="100">
                <div>
                  <span className="text-xl sm:text-2xl font-normal text-charcoal editorial-heading block">
                    IRA Regulated
                  </span>
                  <span className="text-xs text-charcoal-muted tracking-wide mt-1 block">
                    Licensed Reinsurance Broker (Uganda)
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-normal text-charcoal editorial-heading block">
                    Pan-African Reach
                  </span>
                  <span className="text-xs text-charcoal-muted tracking-wide mt-1 block">
                    Syndications across continental & global desks
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-delay="150">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-all duration-150 shadow-sm"
                >
                  <span>Partner With Us</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-white text-xs font-semibold tracking-wider uppercase transition-all duration-150"
                >
                  <span>Our Solutions</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Authentic Leadership Photo in Natural Portrait Framing */}
            <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="100">
              <div className="relative border border-[#E5E0D8] bg-[#F5F2EB] shadow-md group overflow-hidden">
                <img
                  src="/images/team-leadership.jpg"
                  alt="Guardian Reinsurance leadership team representing the firm at the African Insurance Assembly (FANAF)"
                  className="w-full h-[480px] sm:h-[560px] lg:h-[620px] object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Subtle vignette at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 border-l-4 border-brand-azure border border-[#E5E0D8] shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-azure">
                      Continental Representation
                    </span>
                  </div>
                  <h3 className="editorial-heading text-base sm:text-lg font-normal text-charcoal leading-snug">
                    Leadership at the African Insurance Assembly (FANAF)
                  </h3>
                  <p className="text-[11px] sm:text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Actively shaping reinsurance capacity, treaty agreements, and regional partnerships across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR STORY & MISSION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                OUR HERITAGE
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
                Building trust since day one.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-charcoal-muted leading-relaxed">
                <p>
                  Guardian Reinsurance Brokers was established with a singular, resolute mission: to provide exceptional reinsurance broking services that combine clinical technical excellence with personalized, high-trust client relationships.
                </p>
                <p>
                  Over the years, we have forged steadfast partnerships with top-tier reinsurers across Africa, Europe, and London. This expansive network enables us to secure optimal treaty terms and specialized capacity across all classes of general and life business.
                </p>
                <p>
                  Today, licensed and regulated by the Insurance Regulatory Authority of Uganda (IRA), Guardian Re stands as a pillar of stability for cedants seeking thoughtful risk structures, prompt claims recovery, and uncompromising integrity.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <div className="p-4 bg-white border border-[#E5E0D8] border-l-4 border-l-brand-azure flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand-azure text-2xl">verified</span>
                  <div>
                    <p className="text-xs font-bold text-charcoal">Licensed Reinsurance Broker</p>
                    <p className="text-[11px] text-charcoal-muted">Insurance Regulatory Authority of Uganda (IRA)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
              <div className="border border-[#E5E0D8] shadow-sm overflow-hidden">
                <img
                  src="/images/meeting-boardroom.jpg"
                  alt="Boardroom strategic consultation with Guardian Re brokers in Kampala"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CORE VALUES / FIDUCIARY CHARTER - UNIQUE MINIMAL ARCHITECTURAL MATRIX */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Anchor Column: Fiduciary Statement & Charter */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-6" data-aos="fade-right">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-3 font-mono">
                  FIDUCIARY CHARTER
                </span>
                <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
                  Principles that govern every placement.
                </h2>
              </div>

              <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                In an industry defined by volatility and risk aggregation, our values are operational protocols enforced across every treaty structure, slip wording, and loss recovery negotiation.
              </p>

              <div className="pt-6 border-t border-[#E5E0D8] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal uppercase tracking-wider font-mono">
                  <span className="w-1.5 h-1.5 bg-brand-navy rounded-full"></span>
                  <span>Fiduciary Standard</span>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Operating with absolute transparency and strict counterparty discretion under IRA governance.
                </p>
              </div>
            </div>

            {/* Right Column: Unified Single-Surface Architectural Matrix */}
            <div className="lg:col-span-8" data-aos="fade-left" data-aos-delay="100">
              <div className="border border-[#E5E0D8] bg-white divide-y divide-[#E5E0D8] shadow-xs">
                {[0, 2, 4].map((startIndex) => (
                  <div
                    key={startIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8]"
                  >
                    {values.slice(startIndex, startIndex + 2).map((v, idx) => {
                      const num = startIndex + idx + 1;
                      return (
                        <div
                          key={idx}
                          className="p-8 sm:p-9 hover:bg-[#FAF8F5] transition-colors duration-200 flex flex-col justify-between group min-h-[220px]"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-xs font-mono text-charcoal-muted/70 tracking-widest uppercase">
                                0{num}
                              </span>
                              <span className="material-symbols-outlined text-lg text-charcoal-muted/60 group-hover:text-brand-navy transition-colors">
                                {v.icon}
                              </span>
                            </div>
                            <h3 className="editorial-heading text-xl sm:text-2xl text-charcoal font-normal mb-2.5 group-hover:text-brand-navy transition-colors">
                              {v.title}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light mt-2">
                            {v.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OPERATIONAL TEAMS - ARCHITECTURAL HORIZONTAL PRACTICE LEDGER */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 border-t border-[#E5E0D8]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8" data-aos="fade-up">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-2 font-mono">
                ORGANIZATIONAL STRUCTURE
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal">
                Specialized Desks & Practice Groups
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-md font-light leading-relaxed">
              Dedicated broking divisions in Kampala providing specialized portfolio structuring, direct capacity syndication, and post-loss advocacy.
            </p>
          </div>

          {/* Enclosed Architectural Ledger Table */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="border border-[#E5E0D8] bg-white divide-y divide-[#E5E0D8] shadow-xs"
          >
            {/* Table Column Headers (Desktop) */}
            <div className="hidden lg:grid grid-cols-12 gap-6 px-6 sm:px-8 py-3.5 bg-[#F5F2EB]/70 border-b border-[#E5E0D8] text-[10px] font-mono font-semibold tracking-wider uppercase text-charcoal-muted">
              <div className="col-span-4">Practice Desk & Division</div>
              <div className="col-span-5">Operational Mandate & Portfolio Scope</div>
              <div className="col-span-3 text-right">Direct Inquiry</div>
            </div>

            {/* Desk Rows */}
            {team.map((t, idx) => (
              <div
                key={idx}
                className="py-5 sm:py-6 px-6 sm:px-8 hover:bg-[#FAF8F5] transition-colors duration-150 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                  {/* Column 1: Index + Desk Identity + Title (4 cols) */}
                  <div className="lg:col-span-4 flex items-start gap-3.5">
                    <span className="text-xs font-mono text-charcoal-muted/50 tracking-wider pt-0.5 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-brand-navy block">
                        {t.role}
                      </span>
                      <h3 className="editorial-heading text-lg sm:text-xl text-charcoal font-normal mt-0.5 leading-snug group-hover:text-brand-navy transition-colors">
                        {t.title}
                      </h3>
                    </div>
                  </div>

                  {/* Column 2: Mandate Narrative + Focus Tag (5 cols) */}
                  <div className="lg:col-span-5 space-y-1.5">
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                      {t.description}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-brand-azure rounded-full shrink-0"></span>
                      <span className="text-[11px] font-mono text-charcoal-muted/80">
                        Scope: {t.focus}
                      </span>
                    </div>
                  </div>

                  {/* Column 3: Desk Action (3 cols) */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-1 lg:pt-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E0D8] bg-white text-xs font-semibold text-charcoal uppercase tracking-wider group-hover:border-charcoal/40 hover:!bg-brand-navy hover:!text-white hover:!border-brand-navy transition-all duration-150"
                    >
                      <span>Consult Desk</span>
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
