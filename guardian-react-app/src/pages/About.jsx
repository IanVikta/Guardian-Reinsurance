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
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto" data-aos="fade-up" data-aos-delay="150">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-all duration-150 shadow-sm"
                >
                  <span>Partner With Us</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-white text-xs font-semibold tracking-wider uppercase transition-all duration-150 text-center"
                >
                  <span>Our Solutions</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Kampala Executive Desk Portrait Framing */}
            <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="100">
              <div className="relative border border-[#E5E0D8] bg-[#F5F2EB] shadow-md group overflow-hidden">
                <img
                  src="/images/hero-editorial.jpg"
                  alt="Guardian Reinsurance senior Ugandan executive team in boardroom consultation in Kampala"
                  className="w-full h-[340px] sm:h-[480px] lg:h-[620px] object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Subtle vignette at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 border-l-4 border-brand-azure border border-[#E5E0D8] shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-azure">
                      Kampala Executive Desk
                    </span>
                  </div>
                  <h3 className="editorial-heading text-base sm:text-lg font-normal text-charcoal leading-snug">
                    Underwriting & Treaty Advisory
                  </h3>
                  <p className="text-[11px] sm:text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Combining local market intimacy with international placement reach under IRA governance.
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
        {/* OUR TEAM SECTION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authentic Team Photograph */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="relative border border-[#E5E0D8] bg-white shadow-sm overflow-hidden group">
                <img
                  src="/images/team-leadership.jpg"
                  alt="Guardian Reinsurance executive leadership team representing the firm at the African Insurance Assembly"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Clean Editorial Caption */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 border-l-4 border-brand-navy border border-[#E5E0D8] shadow-md">
                  <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-brand-navy block mb-1">
                    Leadership Delegation • Continental Assembly (FANAF)
                  </span>
                  <p className="text-xs sm:text-sm font-normal text-charcoal leading-snug">
                    Senior executives representing Guardian Reinsurance Brokers Uganda in bilateral syndications and market placements.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Corporate Narrative & Institutional Standards */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-left" data-aos-delay="100">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-3 font-mono">
                  OUR TEAM
                </span>
                <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
                  Experienced brokers, dedicated partners.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
                <p>
                  At Guardian Reinsurance Brokers, our strength lies in the technical depth and professional integrity of our people. Headquartered in Kampala, our broking team brings together seasoned reinsurance practitioners, technical accountants, and risk analysts with decades of combined experience across East African and continental markets.
                </p>
                <p>
                  We operate as true fiduciary partners for our cedants. Rather than relying on off-the-shelf placement slips, our brokers engage directly with insurance executives to understand capital requirements, evaluate retention limits, and negotiate optimal terms with top-tier African and international syndicates.
                </p>
              </div>

              {/* Three Fiduciary Principles */}
              <div className="space-y-3.5 pt-2">
                <div className="p-4 bg-white border border-[#E5E0D8] flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-brand-navy text-xl shrink-0 mt-0.5">verified_user</span>
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider font-mono">
                      Senior Executive Oversight
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed font-light">
                      Every treaty renewal, facultative slip, and claims recovery is personally stewarded by senior broking directors.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#E5E0D8] flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-brand-azure text-xl shrink-0 mt-0.5">calculate</span>
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider font-mono">
                      Actuarial & Technical Rigor
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed font-light">
                      Meticulous exposure modeling, slip wording audits, and strict compliance with Insurance Regulatory Authority (IRA) standards.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#E5E0D8] flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-brand-navy text-xl shrink-0 mt-0.5">public</span>
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider font-mono">
                      Continental & Global Syndication
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed font-light">
                      Direct access to Africa Re, Continental Re, ZEP-RE, WAICA Re, Ghana Re, and Lloyd’s of London underwriting syndicates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-all shadow-sm text-center"
                >
                  <span>Connect With Our Team</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <a
                  href="tel:+256414344500"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-white text-xs font-semibold tracking-wider uppercase transition-all text-center"
                >
                  <span>Call Desk: +256 414 344 500</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
