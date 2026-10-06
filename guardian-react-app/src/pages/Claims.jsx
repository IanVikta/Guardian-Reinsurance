import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Claims = () => {
  const [claimData, setClaimData] = useState({
    cedantName: '',
    slipNumber: '',
    dateOfLoss: '',
    estimatedAmount: '',
    description: ''
  });
  const [claimErrors, setClaimErrors] = useState({});
  const [claimTouched, setClaimTouched] = useState({});
  const [isSubmittingClaim, setIsSubmittingClaim] = useState(false);
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  const validateClaimField = (name, value) => {
    switch (name) {
      case 'cedantName':
        if (!value.trim()) return 'Cedant or insurer name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'slipNumber':
        if (!value.trim()) return 'Policy or treaty slip number is required.';
        if (value.trim().length < 3) return 'Please enter a valid slip number.';
        return '';
      case 'dateOfLoss':
        if (!value) return 'Date of loss is required.';
        const today = new Date().toISOString().split('T')[0];
        if (value > today) return 'Date of loss cannot be in the future.';
        return '';
      case 'estimatedAmount':
        if (value.trim() && !/^[0-9,.\s$€£UGXusdUSD]+$/.test(value.trim())) {
          return 'Please enter a valid monetary amount.';
        }
        return '';
      case 'description':
        if (!value.trim()) return 'Loss circumstances and incident summary are required.';
        if (value.trim().length < 10) return 'Please provide more details (minimum 10 characters).';
        return '';
      default:
        return '';
    }
  };

  const validateClaimForm = () => {
    const errors = {};
    ['cedantName', 'slipNumber', 'dateOfLoss', 'estimatedAmount', 'description'].forEach((key) => {
      const err = validateClaimField(key, claimData[key]);
      if (err) errors[key] = err;
    });
    return errors;
  };

  const handleClaimChange = (e) => {
    const { name, value } = e.target;
    setClaimData((prev) => ({ ...prev, [name]: value }));
    if (claimTouched[name]) {
      const err = validateClaimField(name, value);
      setClaimErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleClaimBlur = (e) => {
    const { name, value } = e.target;
    setClaimTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateClaimField(name, value);
    setClaimErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmitClaim = (e) => {
    e.preventDefault();
    const allTouched = {
      cedantName: true,
      slipNumber: true,
      dateOfLoss: true,
      estimatedAmount: true,
      description: true
    };
    setClaimTouched(allTouched);

    const errors = validateClaimForm();
    setClaimErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmittingClaim(true);
      setTimeout(() => {
        setIsSubmittingClaim(false);
        setClaimSubmitted(true);
        setClaimData({
          cedantName: '',
          slipNumber: '',
          dateOfLoss: '',
          estimatedAmount: '',
          description: ''
        });
        setClaimTouched({});
        setClaimErrors({});
        setTimeout(() => setClaimSubmitted(false), 7000);
      }, 500);
    }
  };

  const claimsFeatures = [
    {
      icon: 'speed',
      title: 'Rapid Turnaround',
      description: 'Fast-track claims review with dedicated desk officers ensuring minimum processing latency and accelerated recovery cycles.'
    },
    {
      icon: 'verified',
      title: 'Actuarial Precision',
      description: 'Meticulous evaluation of loss documentation against treaty wording and retention provisions to maximize eligible recovery.'
    },
    {
      icon: 'support_agent',
      title: '24/7 Priority Support',
      description: 'Round-the-clock availability for critical catastrophe notifications and time-sensitive cash call coordination.'
    },
    {
      icon: 'analytics',
      title: 'Transparent Reporting',
      description: 'Clear, real-time audit trails and bordereau updates from initial notice of loss through final settlement disbursement.'
    }
  ];

  const claimsProcess = [
    {
      step: '01',
      phase: 'Initial Intake',
      sla: 'Immediate Log',
      title: 'Notice of Loss',
      description: 'Submit initial claim notifications with preliminary loss estimates, treaty schedules, and incident documentation.',
      details: ['Instant Docket Registration', 'Loss Adjuster Notification', 'Urgent Cash Call Review'],
      icon: 'notification_important'
    },
    {
      step: '02',
      phase: 'Technical Audit',
      sla: '24–48 Hours',
      title: 'Policy Assessment',
      description: 'Our senior actuarial desk reviews retention thresholds, treaty wordings, and excess-of-loss clauses with clinical precision.',
      details: ['Treaty Schedule Alignment', 'Retention Boundary Audit', 'Coverage Verification'],
      icon: 'assessment'
    },
    {
      step: '03',
      phase: 'Market Syndication',
      sla: 'Active Dialogue',
      title: 'Reinsurer Coordination',
      description: 'We liaise directly with participating reinsurers, lead syndicate underwriters, and independent adjusters to secure prompt agreement.',
      details: ['Lead Underwriter Liaison', 'Adjustment Negotiation', 'Dispute Elimination'],
      icon: 'handshake'
    },
    {
      step: '04',
      phase: 'Settlement & Wire',
      sla: 'Expedited Payout',
      title: 'Recovery Disbursement',
      description: 'Full recovery proceeds are verified, reconciled with technical bordereau accounting, and wired into the cedant’s account.',
      details: ['Bordereau Reconciliation', 'Multi-Currency Settlement', 'Final IRA Regulatory Audit'],
      icon: 'payments'
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
              Claims Management & Recovery • Kampala Desk
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-8" data-aos="fade-right">
              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.08] tracking-tight">
                Frictionless claims recovery & dedicated fiduciary advocacy.
              </h1>
            </div>
            <div className="lg:col-span-4" data-aos="fade-left" data-aos-delay="100">
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
                When a catastrophic event or high-value loss occurs, our claims advocacy team bridges the gap between cedants and global reinsurers with prompt, decisive execution.
              </p>
              <a
                href="#claim-notification"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-colors shadow-sm"
              >
                <span>Notify a Claim</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
            </div>
          </div>

          {/* Hero Image Card - Sharp Architectural Geometry */}
          <div className="relative border border-[#E5E0D8] shadow-sm group overflow-hidden" data-aos="fade-up" data-aos-delay="150">
            <img
              src="/images/accounting-desk.jpg"
              alt="Claims document reconciliation and technical accounting"
              className="w-full h-[320px] sm:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 border-l-4 border-l-brand-navy border border-[#E5E0D8] shadow-sm max-w-md">
              <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                Uncompromising Advocacy
              </p>
              <p className="text-xs text-charcoal-muted mt-1">
                Over 99.8% recovery settlement rate on validated reinsurance treaty and facultative losses.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4-STEP CLAIMS PROCESS - DYNAMIC & VIBRANT ARCHITECTURAL TIMELINE */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14" data-aos="fade-up">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-brand-azure rounded-full"></span>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                  STRUCTURED PROTOCOL
                </span>
              </div>
              <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal">
                How We Expedite Your Reinsurance Recovery
              </h2>
            </div>
            <p className="text-sm sm:text-base text-charcoal-muted max-w-md font-light leading-relaxed">
              A clinical, four-stage protocol engineered to eliminate friction, accelerate settlement cash flows, and protect balance sheet solvency.
            </p>
          </div>

          {/* Desktop Connecting Progress Track */}
          <div className="hidden lg:grid grid-cols-4 gap-6 mb-4 px-2" data-aos="fade-in" data-aos-delay="100">
            {claimsProcess.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-azure ring-4 ring-brand-azure/10"></span>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-azure/40 to-[#E5E0D8]"></div>
                {idx < 3 && (
                  <span className="material-symbols-outlined text-sm text-charcoal-light">arrow_forward</span>
                )}
              </div>
            ))}
          </div>

          {/* 4 Dynamic Protocol Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimsProcess.map((item, index) => (
              <div
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group relative bg-white p-7 sm:p-8 border border-[#E5E0D8] hover:border-brand-azure/60 shadow-sm hover:shadow-xl hover:shadow-brand-navy/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing Top Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-azure to-brand-cyan group-hover:h-1.5 transition-all duration-300"></div>

                {/* Subtle Background Watermark Numeral */}
                <span className="absolute -bottom-3 -right-2 text-7xl sm:text-8xl font-serif font-bold text-brand-navy/[0.04] group-hover:text-brand-azure/[0.08] transition-colors pointer-events-none select-none">
                  {item.step}
                </span>

                <div className="relative z-10">
                  {/* Card Header Row: Step Badge + SLA + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-bold tracking-widest font-mono uppercase px-2.5 py-1 bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
                        STAGE {item.step}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-medium text-charcoal-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{item.sla}</span>
                      </div>
                    </div>

                    <div className="w-11 h-11 bg-gradient-to-br from-brand-navy to-brand-blue text-white rounded-lg flex items-center justify-center shadow-md shadow-brand-navy/15 group-hover:scale-110 group-hover:from-brand-azure group-hover:to-brand-blue transition-all duration-300">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </div>
                  </div>

                  {/* Phase & Title */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-azure block mb-1">
                    {item.phase}
                  </span>
                  <h3 className="editorial-heading text-xl text-charcoal font-normal mb-3 group-hover:text-brand-navy transition-colors">
                    {item.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Micro Action Checklist */}
                <div className="relative z-10 pt-4 border-t border-[#F0EBE1] space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[11px] text-charcoal-muted">
                      <span className="material-symbols-outlined text-xs text-brand-azure group-hover:translate-x-0.5 transition-transform">
                        check_circle
                      </span>
                      <span className="font-medium text-charcoal/85">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CORE CLAIMS STRENGTHS */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                THE GUARDIAN STANDARD
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
                Designed to eliminate friction, dispute, and delay.
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                Reinsurance claims must not be stalled by paperwork or conflicting interpretations. We maintain direct, seasoned dialogues with international loss adjusters and lead reinsurers to protect client liquidity.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-navy hover:text-brand-azure"
                >
                  <span>Connect with Claims Desk</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {claimsFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white p-6 border border-[#E5E0D8] space-y-3 hover:border-brand-navy/40 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-brand-navy text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">{feat.icon}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-charcoal">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CLAIMS NOTIFICATION FORM - Sharp Architecture */}
        {/* ========================================================================= */}
        <section id="claim-notification" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#E5E0D8]">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 border border-[#E5E0D8] shadow-sm" data-aos="fade-up">
            <div className="text-center mb-8">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-2">
                OFFICIAL NOTICE OF LOSS
              </span>
              <h2 className="editorial-heading text-3xl text-charcoal font-normal">
                Submit Claim Notification
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-2 max-w-lg mx-auto">
                Please provide primary policy references and initial loss estimates. An acknowledgement will be issued immediately.
              </p>
            </div>

            {claimSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <span className="material-symbols-outlined text-5xl text-emerald-600">verified</span>
                <h3 className="editorial-heading text-2xl text-charcoal">Notice Acknowledged</h3>
                <p className="text-sm text-charcoal-muted">
                  Your claim docket has been registered. Our senior claims counsel is reviewing your submission and will contact you directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitClaim} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                      Cedant / Insurer Name *
                    </label>
                    <input
                      type="text"
                      name="cedantName"
                      value={claimData.cedantName}
                      onChange={handleClaimChange}
                      onBlur={handleClaimBlur}
                      placeholder="e.g. Uganda General Assurance"
                      className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                        claimTouched.cedantName && claimErrors.cedantName
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#E5E0D8] focus:border-brand-navy'
                      }`}
                    />
                    {claimTouched.cedantName && claimErrors.cedantName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs">error</span>
                        <span>{claimErrors.cedantName}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                      Policy / Treaty Slip Number *
                    </label>
                    <input
                      type="text"
                      name="slipNumber"
                      value={claimData.slipNumber}
                      onChange={handleClaimChange}
                      onBlur={handleClaimBlur}
                      placeholder="e.g. GRB-TR-2024-049"
                      className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                        claimTouched.slipNumber && claimErrors.slipNumber
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#E5E0D8] focus:border-brand-navy'
                      }`}
                    />
                    {claimTouched.slipNumber && claimErrors.slipNumber && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs">error</span>
                        <span>{claimErrors.slipNumber}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                      Date of Loss *
                    </label>
                    <input
                      type="date"
                      name="dateOfLoss"
                      max={new Date().toISOString().split('T')[0]}
                      value={claimData.dateOfLoss}
                      onChange={handleClaimChange}
                      onBlur={handleClaimBlur}
                      className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                        claimTouched.dateOfLoss && claimErrors.dateOfLoss
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#E5E0D8] focus:border-brand-navy'
                      }`}
                    />
                    {claimTouched.dateOfLoss && claimErrors.dateOfLoss && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs">error</span>
                        <span>{claimErrors.dateOfLoss}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                      Estimated Recovery Amount (USD / UGX)
                    </label>
                    <input
                      type="text"
                      name="estimatedAmount"
                      value={claimData.estimatedAmount}
                      onChange={handleClaimChange}
                      onBlur={handleClaimBlur}
                      placeholder="e.g. USD 250,000"
                      className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                        claimTouched.estimatedAmount && claimErrors.estimatedAmount
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#E5E0D8] focus:border-brand-navy'
                      }`}
                    />
                    {claimTouched.estimatedAmount && claimErrors.estimatedAmount && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs">error</span>
                        <span>{claimErrors.estimatedAmount}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Loss Description & Circumstances *
                  </label>
                  <textarea
                    rows={4}
                    name="description"
                    value={claimData.description}
                    onChange={handleClaimChange}
                    onBlur={handleClaimBlur}
                    placeholder="Provide a concise summary of the incident, damaged property or liability event..."
                    className={`w-full px-4 py-3 border bg-[#FAF8F5] text-sm text-charcoal focus:outline-none transition-colors ${
                      claimTouched.description && claimErrors.description
                        ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                        : 'border-[#E5E0D8] focus:border-brand-navy'
                    }`}
                  ></textarea>
                  {claimTouched.description && claimErrors.description && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                      <span className="material-symbols-outlined text-xs">error</span>
                      <span>{claimErrors.description}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-charcoal-muted flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-brand-azure">lock</span>
                    Strict confidentiality under IRA guidelines
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmittingClaim}
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-blue border border-brand-navy transition-colors shadow-sm disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmittingClaim ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Registering Docket...</span>
                      </>
                    ) : (
                      <span>Submit Notification</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Claims;
