import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState('treaty');
  const [quoteData, setQuoteData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    service: 'treaty',
    message: ''
  });
  const [quoteErrors, setQuoteErrors] = useState({});
  const [quoteTouched, setQuoteTouched] = useState({});
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const validateQuoteField = (name, value) => {
    switch (name) {
      case 'companyName':
        if (!value.trim()) return 'Institution or company name is required.';
        if (value.trim().length < 2) return 'Company name must be at least 2 characters.';
        return '';
      case 'contactPerson':
        if (!value.trim()) return 'Contact person name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Corporate email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid work email address.';
        }
        return '';
      case 'message':
        if (!value.trim()) return 'Please provide portfolio details or specifications.';
        if (value.trim().length < 10) return 'Please provide at least 10 characters for review.';
        return '';
      default:
        return '';
    }
  };

  const validateQuoteForm = () => {
    const errors = {};
    ['companyName', 'contactPerson', 'email', 'message'].forEach((key) => {
      const err = validateQuoteField(key, quoteData[key]);
      if (err) errors[key] = err;
    });
    return errors;
  };

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({ ...prev, [name]: value }));
    if (quoteTouched[name]) {
      const err = validateQuoteField(name, value);
      setQuoteErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleQuoteBlur = (e) => {
    const { name, value } = e.target;
    setQuoteTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateQuoteField(name, value);
    setQuoteErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const allTouched = {
      companyName: true,
      contactPerson: true,
      email: true,
      message: true
    };
    setQuoteTouched(allTouched);

    const errors = validateQuoteForm();
    setQuoteErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmittingQuote(true);
      setTimeout(() => {
        setIsSubmittingQuote(false);
        setQuoteSubmitted(true);
        setQuoteData({
          companyName: '',
          contactPerson: '',
          email: '',
          service: 'treaty',
          message: ''
        });
        setQuoteTouched({});
        setQuoteErrors({});
        setTimeout(() => setQuoteSubmitted(false), 7000);
      }, 500);
    }
  };

  const productsList = [
    {
      id: 'treaty',
      title: 'Treaty Broking',
      badge: 'Portfolio Protection',
      icon: 'account_balance',
      accentColor: 'bg-brand-navy',
      shortDesc: 'Comprehensive portfolio protection through proportional and non-proportional treaty structures.',
      fullDesc: 'We utilize sophisticated actuarial modeling to ensure your aggregate exposures are structured with surgical precision. From Quota Share and Surplus treaties to Excess of Loss (XOL) and Stop Loss programs, our team aligns global capacity to your retention strategy.',
      features: [
        'Proportional (Quota Share & Surplus) programs',
        'Non-Proportional (Excess of Loss & Catastrophe) layering',
        'Dynamic exposure accumulation & PML modeling',
        'Multi-currency placements across London, Europe & Africa'
      ],
      image: '/images/hero-editorial.jpg'
    },
    {
      id: 'facultative',
      title: 'Facultative Reinsurance',
      badge: 'Single-Risk Placement',
      icon: 'hub',
      accentColor: 'bg-brand-azure',
      shortDesc: 'Specialized placement for high-value or complex individual exposures.',
      fullDesc: 'When a risk exceeds your treaty retention or requires non-standard policy wordings, our facultative team connects you directly with leading underwriting syndicates across the globe with unmatched speed.',
      features: [
        'Large-scale commercial, energy & infrastructure risks',
        'Financial lines, D&O, and specialized cyber liability',
        'Rapid indicative terms within 48 to 72 hours',
        'Bespoke manuscript endorsements & slippage control'
      ],
      image: '/images/african-risk-advisor.jpg'
    },
    {
      id: 'claims',
      title: 'Claims Recoveries',
      badge: 'Fiduciary Advocacy',
      icon: 'receipt_long',
      accentColor: 'bg-brand-navy',
      shortDesc: 'Dedicated support for prompt, accurate, and transparent claims settlement.',
      fullDesc: 'We act as your dedicated fiduciary representative to ensure that valid reinsurance recoveries are processed, approved, and transferred without friction or bureaucratic delay.',
      features: [
        'Real-time claims tracking and document verification',
        'Active representation in complex or disputed settlements',
        'Prompt bordereau reconciliation with participating reinsurers',
        'Direct cash recovery advocacy ensuring liquidity preservation'
      ],
      image: '/images/meeting-boardroom.jpg'
    },
    {
      id: 'accounting',
      title: 'Technical Accounting',
      badge: 'Financial Governance',
      icon: 'calculate',
      accentColor: 'bg-brand-azure',
      shortDesc: 'Financial integrity and strict regulatory compliance at every stage.',
      fullDesc: 'Our technical accounting desk provides complete financial transparency, managing intricate premium borders, profit commissions, loss reserves, and cross-border regulatory filings.',
      features: [
        'Quarterly treaty bordereaux reconciliation & audit trails',
        'Profit commission calculations & sliding scale adjustments',
        'Insurance Regulatory Authority (IRA) compliance alignment',
        'Multi-currency ledger settlement and banking coordination'
      ],
      image: '/images/accounting-desk.jpg'
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-28 pb-16 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pb-16">
          <div className="mb-4" data-aos="fade-down">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
              Solutions & Expertise • Kampala Desk
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-8" data-aos="fade-right">
              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.08] tracking-tight">
                Innovative & forward-looking reinsurance solutions.
              </h1>
            </div>
            <div className="lg:col-span-4" data-aos="fade-left" data-aos-delay="100">
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
                Empowering regional insurers and institutional cedants with technical precision, global counterparty reach, and balance-sheet stability.
              </p>
              <a
                href="#quote-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-colors shadow-sm text-center"
              >
                <span>Request Broking Terms</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
            </div>
          </div>

          {/* Solution Selector Tabs - Sleek Sharp Rectilinear Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-6 border-t border-[#E5E0D8]" data-aos="fade-up" data-aos-delay="150">
            {productsList.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(p.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-150 border text-center ${
                  selectedProduct === p.id
                    ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                    : 'bg-white border-[#E5E0D8] text-charcoal-muted hover:text-charcoal hover:border-brand-navy/30'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DETAILED SOLUTION HIGHLIGHT (Active Tab Focus) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          {productsList
            .filter((p) => p.id === selectedProduct)
            .map((p) => (
              <div
                key={p.id}
                data-aos="fade-up"
                className="bg-white border border-[#E5E0D8] p-8 lg:p-12 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 ${p.accentColor} text-white flex items-center justify-center`}>
                        <span className="material-symbols-outlined text-xl">{p.icon}</span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                        {p.badge}
                      </span>
                    </div>

                    <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal">
                      {p.title}
                    </h2>

                    <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                      {p.fullDesc}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                        Key Capabilities:
                      </h4>
                      <ul className="space-y-2">
                        {p.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                            <span className="material-symbols-outlined text-sm text-brand-azure shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <a
                        href="#quote-form"
                        className="px-6 py-3.5 sm:py-3 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-colors shadow-sm text-center"
                      >
                        Engage On {p.title}
                      </a>
                      <Link
                        to="/contact"
                        className="px-6 py-3.5 sm:py-3 border border-charcoal/30 text-charcoal text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors text-center"
                      >
                        Speak to Broker
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="border border-[#E5E0D8] h-[260px] sm:h-[400px] lg:h-[420px] relative shadow-sm overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE 4-CARD ARCHITECTURAL GRID */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="mb-12" data-aos="fade-up">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-3">
              ALL SERVICES AT A GLANCE
            </span>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal">
              Specialized Solutions Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsList.map((prod, idx) => (
              <div
                key={prod.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-8 border border-[#E5E0D8] border-l-4 border-l-brand-navy flex flex-col justify-between hover:border-[#173B7A] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 ${prod.accentColor} text-white flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-xl">{prod.icon}</span>
                    </div>
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-charcoal-muted border border-[#E5E0D8] px-2 py-0.5 bg-[#FAF8F5]">
                      {prod.badge}
                    </span>
                  </div>
                  <h3 className="editorial-heading text-2xl text-charcoal font-normal mb-3">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                    {prod.shortDesc}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSelectedProduct(prod.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy hover:text-brand-azure transition-colors"
                  >
                    <span>View Specifications</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* RFQ / TERM SHEET REQUEST FORM - Sharp Crisp Architectural Form */}
        {/* ========================================================================= */}
        <section id="quote-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                BROKING ENQUIRY
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal">
                Request Broking Terms & Treaty Assessment
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Connect directly with our senior broking executives. We assess your retention strategy, evaluate counterparty appetite, and deliver tailored indicative terms.
              </p>

              <div className="p-6 bg-white border border-[#E5E0D8] border-l-4 border-l-brand-azure space-y-3 text-xs text-charcoal-muted">
                <div className="flex items-center gap-2.5 font-semibold text-charcoal">
                  <span className="material-symbols-outlined text-brand-azure text-base">verified</span>
                  <span>Confidential Fiduciary Standard</span>
                </div>
                <p>
                  All submission documents and exposure bordereaux are handled under strict non-disclosure governance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="100">
              <div className="bg-white p-8 sm:p-10 border border-[#E5E0D8] shadow-sm">
                {quoteSubmitted ? (
                  <div className="p-8 text-center space-y-3">
                    <span className="material-symbols-outlined text-5xl text-emerald-600">check_circle</span>
                    <h3 className="editorial-heading text-2xl text-charcoal">Submission Received</h3>
                    <p className="text-sm text-charcoal-muted">
                      Thank you. A senior broking officer from our Kampala office will contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                          Institution / Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={quoteData.companyName}
                          onChange={handleQuoteChange}
                          onBlur={handleQuoteBlur}
                          placeholder="e.g. Apex Assurance Ltd"
                          className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                            quoteTouched.companyName && quoteErrors.companyName
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E5E0D8] focus:border-brand-navy'
                          }`}
                        />
                        {quoteTouched.companyName && quoteErrors.companyName && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                            <span className="material-symbols-outlined text-xs">error</span>
                            <span>{quoteErrors.companyName}</span>
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={quoteData.contactPerson}
                          onChange={handleQuoteChange}
                          onBlur={handleQuoteBlur}
                          placeholder="Full Name"
                          className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                            quoteTouched.contactPerson && quoteErrors.contactPerson
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E5E0D8] focus:border-brand-navy'
                          }`}
                        />
                        {quoteTouched.contactPerson && quoteErrors.contactPerson && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                            <span className="material-symbols-outlined text-xs">error</span>
                            <span>{quoteErrors.contactPerson}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={quoteData.email}
                          onChange={handleQuoteChange}
                          onBlur={handleQuoteBlur}
                          placeholder="officer@company.com"
                          className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                            quoteTouched.email && quoteErrors.email
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E5E0D8] focus:border-brand-navy'
                          }`}
                        />
                        {quoteTouched.email && quoteErrors.email && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                            <span className="material-symbols-outlined text-xs">error</span>
                            <span>{quoteErrors.email}</span>
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={quoteData.service}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-3 border border-[#E5E0D8] bg-[#FAF8F5] text-sm text-charcoal focus:outline-none focus:border-brand-navy cursor-pointer"
                        >
                          <option value="treaty">Treaty Broking</option>
                          <option value="facultative">Facultative Placement</option>
                          <option value="claims">Claims Recovery</option>
                          <option value="accounting">Technical Accounting</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                        Portfolio Details / Message *
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={quoteData.message}
                        onChange={handleQuoteChange}
                        onBlur={handleQuoteBlur}
                        placeholder="Brief summary of required treaty structure, line of business, or facultative placement terms..."
                        className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                          quoteTouched.message && quoteErrors.message
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E5E0D8] focus:border-brand-navy'
                        }`}
                      ></textarea>
                      {quoteTouched.message && quoteErrors.message && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                          <span className="material-symbols-outlined text-xs">error</span>
                          <span>{quoteErrors.message}</span>
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingQuote}
                      className="w-full sm:w-auto px-8 py-4 bg-brand-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-blue border border-brand-navy transition-colors shadow-sm disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmittingQuote ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <span>Submit Broking Enquiry</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Products;
