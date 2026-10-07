import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const partners = [
    {
      name: 'Africa Re',
      fullName: 'African Reinsurance Corporation',
      rating: 'AM Best: A',
      type: 'Treaty & Catastrophe',
      region: 'Pan-African'
    },
    {
      name: 'Continental Re',
      fullName: 'Continental Reinsurance Plc',
      rating: 'AM Best: B+',
      type: 'Composite Treaty & Fac',
      region: 'East & West Africa'
    },
    {
      name: 'ZEP-RE',
      fullName: 'PTA Reinsurance Company',
      rating: 'AM Best: B++',
      type: 'Treaty & Facultative',
      region: 'COMESA Region'
    },
    {
      name: 'WAICA Re',
      fullName: 'WAICA Reinsurance Corporation',
      rating: 'AM Best: B+',
      type: 'Specialty Lines & Property',
      region: 'Pan-African'
    },
    {
      name: 'Ghana Re',
      fullName: 'Ghana Reinsurance PLC',
      rating: 'A-Rated',
      type: 'General & Marine Treaty',
      region: 'Continental Markets'
    },
    {
      name: 'Sanlam Allianz',
      fullName: 'Sanlam Allianz Reinsurance',
      rating: 'A+ Rated',
      type: 'Institutional Syndications',
      region: 'Pan-African'
    },
    {
      name: 'Kenya Re',
      fullName: 'Kenya Reinsurance Corporation',
      rating: 'AM Best: B',
      type: 'Life & Non-Life Portfolios',
      region: 'East Africa Hub'
    },
    {
      name: 'CICA-RE',
      fullName: 'Compagnie Commune de Réassurance',
      rating: 'AM Best: B+',
      type: 'Treaty Placement',
      region: 'CIMA Region'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Grace Nansubuga',
      role: 'Senior Reinsurance Manager',
      company: 'Regional Assurance Group (Uganda)',
      image: '/images/testimonial-1.jpg',
      quote: 'Guardian Reinsurance completely elevated our treaty broking. Their analytical rigor and direct access to African and international syndicates gave us pricing terms that our competitors could not match.'
    },
    {
      id: 2,
      name: 'Brenda Akello',
      role: 'Legal & Regulatory Consultant',
      company: 'Continental Risk Advisory (Kampala)',
      image: '/images/testimonial-2.jpg',
      quote: 'Their contract wording precision and strict compliance with Insurance Regulatory Authority (IRA) guidelines make Guardian Re our preferred broking partner for high-stakes portfolio placements.'
    },
    {
      id: 3,
      name: 'David Mugisha',
      role: 'Underwriting Director',
      company: 'Apex Underwriting Partners (East Africa)',
      image: '/images/testimonial-3.jpg',
      quote: 'When we needed specialized facultative capacity for a multi-million-dollar infrastructure project, Guardian placed the entire risk within 72 hours. Outstanding speed, local presence, and reliability.'
    },
    {
      id: 4,
      name: 'Sarah Nalubega',
      role: 'Institutional Risk Officer',
      company: 'East Africa Financial Holdings',
      image: '/images/testimonial-4.jpg',
      quote: 'In claims recovery, Guardian acted as our fiercest advocate. They ensured every valid recovery was reconciled and received without friction. Truly clinical precision and integrity.'
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-28 pb-16 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION - SLEEK ARCHITECTURAL EDITORIAL DESIGN */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pb-16">
          {/* Eyebrow */}
          <div className="mb-4" data-aos="fade-down">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
              Guardian Reinsurance Brokers (U) Ltd • Kampala Desk
            </span>
          </div>

          {/* Split Header: Big Serif on Left, Intro & CTA on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-7" data-aos="fade-right">
              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.08] tracking-tight">
                Your trusted reinsurance partner, strategic & resilient.
              </h1>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end" data-aos="fade-left" data-aos-delay="100">
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6 max-w-lg">
                Delivering bespoke treaty structures, specialized facultative capacity, and rapid claims recoveries across Uganda and East Africa. Engineered with clinical precision and institutional counterparty trust.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-all duration-150 shadow-sm text-center"
                >
                  <span>Request Broking Terms</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-white text-xs font-semibold tracking-wider uppercase transition-all duration-150 text-center"
                >
                  <span>Our Heritage</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Wide Cinematic Photo - Sharp Architectural Geometry */}
          <div className="relative border border-[#E5E0D8] shadow-sm group overflow-hidden" data-aos="fade-up" data-aos-delay="150">
            <img
              src="/images/hero-editorial.jpg"
              alt="Guardian Reinsurance senior Ugandan executive team in boardroom consultation in Kampala"
              className="w-full h-[320px] sm:h-[480px] lg:h-[580px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Subtle natural vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

            {/* Sleek Sharp Architectural Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-8 sm:left-8 max-w-[calc(100%-2rem)] sm:max-w-md bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3 border-l-4 border-brand-azure border border-[#E5E0D8] shadow-lg flex items-center gap-3 sm:gap-4">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shrink-0 animate-pulse"></span>
              <div>
                <p className="text-xs font-semibold text-charcoal tracking-wide">
                  Kampala Broking Desk • International Syndication Power
                </p>
                <p className="text-[11px] text-charcoal-muted">
                  Supervised by Insurance Regulatory Authority of Uganda (IRA)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. REINSURANCE PARTNERS & UNDERWRITING SYNDICATES (Requested Section) */}
        {/* ========================================================================= */}
        <section className="border-y border-[#E5E0D8] bg-[#F4F1EA] py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" data-aos="fade-up">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-2">
                  Market Capacity & Counterparties
                </span>
                <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal">
                  Reinsurance Partners & Syndicates
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg leading-relaxed">
                Guardian Re coordinates treaty and facultative security directly with Africa's premier rated reinsurance institutions and global underwriting syndicates.
              </p>
            </div>

            {/* Partners Minimal Corporate Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partners.map((p, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 40}
                  className="bg-white border border-[#E5E0D8] p-6 hover:border-brand-navy transition-colors duration-200 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-base text-charcoal tracking-tight">
                        {p.name}
                      </h3>
                      <span className="text-[11px] font-mono text-charcoal-muted">
                        {p.rating}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                      {p.fullName}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#F0ECE4] flex items-center justify-between text-xs">
                    <span className="text-charcoal-muted text-[11px] font-light">{p.type}</span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-muted">{p.region}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lloyd's & Global Syndication Banner */}
            <div className="mt-6 p-4 sm:p-5 bg-white border border-[#E5E0D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-navy text-lg shrink-0">public</span>
                <span className="text-charcoal-muted font-light leading-relaxed">
                  Direct syndication access to <strong>Lloyd's of London syndicates</strong>, continental African composite reinsurers, and global retrocession markets.
                </span>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-azure uppercase tracking-wider text-[11px] shrink-0 transition-colors"
              >
                <span>Explore Placements</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. STATISTIC / INSTITUTIONAL PROOF SECTION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                STATISTIC & TRACK RECORD
              </span>

              <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
                Proven results, trusted coverage
              </h2>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                We don't just promise reliability — we deliver it. Leading regional insurers and institutional syndicates trust our actuarial rigor, fiduciary ethics, and placement power across East Africa to protect balance sheets and manage volatility.
              </p>

              {/* Numbers Grid */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="border-l-2 border-brand-navy pl-4">
                  <div className="flex items-baseline gap-1">
                    <span className="editorial-heading text-4xl sm:text-5xl font-medium text-charcoal">99.8</span>
                    <span className="text-lg font-sans text-brand-azure font-semibold">%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-muted mt-1">Placement Success Rate</p>
                </div>

                <div className="border-l-2 border-brand-azure pl-4">
                  <div className="flex items-baseline gap-1">
                    <span className="editorial-heading text-4xl sm:text-5xl font-medium text-charcoal">120</span>
                    <span className="text-lg font-sans text-brand-navy font-semibold">+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-muted mt-1">Global Reinsurance Markets</p>
                </div>

                <div className="border-l-2 border-brand-navy pl-4">
                  <div className="flex items-baseline gap-1">
                    <span className="editorial-heading text-4xl sm:text-5xl font-medium text-charcoal">15</span>
                    <span className="text-lg font-sans text-brand-azure font-semibold">+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-muted mt-1">Years Market Expertise</p>
                </div>

                <div className="border-l-2 border-brand-azure pl-4">
                  <div className="flex items-baseline gap-1">
                    <span className="editorial-heading text-4xl sm:text-5xl font-medium text-charcoal">24/7</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-muted mt-1">Rapid Claims Advocacy</p>
                </div>
              </div>
            </div>

            {/* Right Handshake Portrait Card - Sharp Geometry */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
              <div className="relative border border-[#E5E0D8] shadow-sm group overflow-hidden">
                <img
                  src="/images/corporate-handshake.jpg"
                  alt="Partnership agreement between African cedant and reinsurance executive"
                  className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 bg-white/95 backdrop-blur-md border border-[#E5E0D8] border-l-4 border-l-brand-navy shadow-sm">
                  <p className="text-xs font-semibold text-brand-navy uppercase tracking-wider">
                    Institutional Governance
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Direct access to A+ rated continental reinsurers and Lloyd's syndicates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. OUR CAPABILITIES / BENTO EDITORIAL GRID (Sharp Architectural Cards) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16" data-aos="fade-up">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-3">
                OUR CAPABILITIES
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight max-w-2xl">
                Your Partner in Smart, Reliable Reinsurance Protection
              </h2>
            </div>
            <div className="shrink-0">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue transition-colors shadow-sm"
              >
                <span>View All Solutions</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 6-Card Sharp Staggered Architectural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: African Risk Advisor Photography */}
            <div className="border border-[#E5E0D8] h-[320px] sm:h-[350px] relative group shadow-sm overflow-hidden bg-[#071732]" data-aos="fade-up" data-aos-delay="50">
              <img
                src="/images/african-risk-advisor.jpg"
                alt="Ugandan senior reinsurance advisor reviewing risk blueprints in Kampala"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071732]/95 via-[#071732]/60 to-transparent flex flex-col justify-end p-6 sm:p-7">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/80">
                      Risk Safeguard
                    </span>
                  </div>
                  <h3 className="editorial-heading text-xl sm:text-2xl text-white font-normal leading-snug">
                    Protecting institutional balance sheets and high-stakes infrastructure in East Africa.
                  </h3>
                </div>
                <div className="pt-3.5 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-light">
                  <span className="text-[11px]">Underwriting Risk Advisory</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/60">Kampala</span>
                </div>
              </div>
            </div>

            {/* Card 2: Treaty Broking */}
            <div className="bg-[#FAF8F5] border border-[#E5E0D8] p-8 flex flex-col justify-between h-[320px] sm:h-[350px] hover:border-brand-navy/40 transition-all duration-200" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="w-10 h-10 bg-brand-navy text-white flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-xl">account_balance</span>
                </div>
                <h3 className="editorial-heading text-2xl text-charcoal font-normal mb-3">
                  Treaty Broking
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Proportional and non-proportional treaty structures engineered with clinical precision to safeguard aggregate risk portfolios against catastrophic shocks.
                </p>
              </div>
              <div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy hover:text-brand-azure transition-colors"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Facultative Reinsurance */}
            <div className="bg-[#FAF8F5] border border-[#E5E0D8] p-8 flex flex-col justify-between h-[320px] sm:h-[350px] hover:border-brand-navy/40 transition-all duration-200" data-aos="fade-up" data-aos-delay="150">
              <div>
                <div className="w-10 h-10 bg-brand-azure text-white flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-xl">hub</span>
                </div>
                <h3 className="editorial-heading text-2xl text-charcoal font-normal mb-3">
                  Facultative Placement
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Bespoke risk placement for high-value or complex individual exposures requiring specialized underwriting capacity from international syndicates.
                </p>
              </div>
              <div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy hover:text-brand-azure transition-colors"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Claims Recovery Advocacy */}
            <div className="bg-[#FAF8F5] border border-[#E5E0D8] p-8 flex flex-col justify-between h-[320px] sm:h-[350px] hover:border-brand-navy/40 transition-all duration-200" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="w-10 h-10 bg-brand-navy text-white flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-xl">receipt_long</span>
                </div>
                <h3 className="editorial-heading text-2xl text-charcoal font-normal mb-3">
                  Claims Recoveries
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Dedicated claims advocacy ensuring prompt, transparent claims handling and rapid dispute settlement between cedants and global reinsurers.
                </p>
              </div>
              <div>
                <Link
                  to="/claims"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy hover:text-brand-azure transition-colors"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 5: Technical Accounting */}
            <div className="bg-[#FAF8F5] border border-[#E5E0D8] p-8 flex flex-col justify-between h-[320px] sm:h-[350px] hover:border-brand-navy/40 transition-all duration-200" data-aos="fade-up" data-aos-delay="250">
              <div>
                <div className="w-10 h-10 bg-brand-azure text-white flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-xl">calculate</span>
                </div>
                <h3 className="editorial-heading text-2xl text-charcoal font-normal mb-3">
                  Technical Accounting
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Financial integrity and rigorous audit compliance at every stage. Managing complex premium reconciliation, commission splits, and border reporting.
                </p>
              </div>
              <div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy hover:text-brand-azure transition-colors"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 6: Authentic African Leadership & Strategy Photo */}
            <div className="border border-[#E5E0D8] h-[320px] sm:h-[350px] relative group shadow-sm overflow-hidden bg-[#071732]" data-aos="fade-up" data-aos-delay="300">
              <img
                src="/images/team-leadership.jpg"
                alt="Guardian Reinsurance leadership team at African insurance assembly"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071732]/95 via-[#071732]/60 to-transparent flex flex-col justify-end p-6 sm:p-7">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/80">
                      Regional Leadership
                    </span>
                  </div>
                  <h3 className="editorial-heading text-xl sm:text-2xl text-white font-normal leading-snug">
                    African brokers championing regional market resilience and global placement reach.
                  </h3>
                </div>
                <div className="pt-3.5 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-light">
                  <span className="text-[11px]">Continental Assembly Delegation</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/60">Pan-African</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. TESTIMONIALS / 4-PORTRAIT AFRICAN RISK LEADERS GALLERY */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-3">
                TESTIMONIALS & TRUSTED VOICES
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight max-w-2xl">
                Real Stories. Real Protection.
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted mt-3 max-w-xl leading-relaxed">
                Institutional insurance leaders across Uganda and East Africa trust us to safeguard their balance sheets and treaty programs. Hear directly from our cedant partners.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue transition-colors shadow-sm"
              >
                <span>Contact Us</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 4 Portrait Cards - Sleek Sharp Architectural Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onClick={() => setActiveTestimonial(activeTestimonial === t.id ? null : t.id)}
                className="group relative border border-[#E5E0D8] bg-white cursor-pointer shadow-sm hover:border-brand-navy hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Quote Reveal on Hover or Click */}
                  <div
                    className={`absolute inset-0 p-5 bg-[#071732]/95 text-white flex flex-col justify-center transition-opacity duration-300 ${
                      activeTestimonial === t.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl text-brand-azure mb-2">format_quote</span>
                    <p className="text-xs sm:text-sm italic leading-relaxed text-white/95">
                      "{t.quote}"
                    </p>
                    <span className="text-[10px] text-white/70 uppercase tracking-widest mt-4 block">
                      {t.company}
                    </span>
                  </div>

                  {/* Bottom Static Name & Title Badge */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-white/80 leading-tight">
                      {t.role}
                    </p>
                    <p className="text-[10px] text-brand-azure mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WHY CHOOSE US / TRUST SECTION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo of Executive Discussion */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="border border-[#E5E0D8] shadow-sm group relative overflow-hidden">
                <img
                  src="/images/meeting-boardroom.jpg"
                  alt="Boardroom strategic discussion with Guardian Re team in Kampala"
                  className="w-full h-[420px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 max-w-[calc(100%-2rem)] sm:max-w-md bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3 border-l-4 border-brand-navy border border-[#E5E0D8] shadow-sm text-xs font-semibold text-brand-navy">
                  Strategic Council • Kampala Boardroom
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-left" data-aos-delay="100">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                TRUST & EXCELLENCE
              </span>

              <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
                Why choose us?
              </h2>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                We prioritize your peace of mind with reliable, customized reinsurance structures. Our dedicated broking team is here to support every step of the risk journey.
              </p>

              {/* Checklist Items - Sharp Minimalist Icons */}
              <div className="space-y-5 pt-3">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-navy text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Speed You Can Rely On
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 leading-relaxed">
                      From instant indicative quotes to 48-hour treaty term sheets, we save you time and eliminate market friction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-navy text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Personalized Portfolio Coverage
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 leading-relaxed">
                      No two risk profiles are alike — we tailor structures to fit your exact capital goals and retention tolerances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-navy text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Uncompromising Fiduciary Ethics
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 leading-relaxed">
                      Independent broking with total transparency, zero conflicts of interest, and complete audit trail integrity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-navy text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Top-Tier Global & Regional Capacity
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 leading-relaxed">
                      Direct access to Lloyd’s of London syndicates, continental powerhouses, and AAA/A+ rated reinsurance capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CALL TO ACTION BANNER (Sharp Architectural Style) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="p-10 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto border border-[#E5E0D8] bg-[#F4F1EA] shadow-sm" data-aos="fade-up">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-4">
              TAKE THE NEXT STEP
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal mb-5 leading-tight">
              Ready to secure your balance sheet with Guardian Re?
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Connect directly with our senior broking executives for a confidential consultation on your treaty renewals and facultative placements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-brand-navy text-white text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-brand-blue transition-all shadow-sm"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+256414344500"
                className="w-full sm:w-auto px-8 py-4 border border-charcoal/30 text-charcoal hover:bg-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all"
              >
                Call Desk: +256 414 344 500
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
