import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Treaty Broking',
    urgency: 'Standard Review',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'company':
        if (!value.trim()) return 'Company or cedant name is required.';
        if (value.trim().length < 2) return 'Company name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Work email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid work email address.';
        }
        return '';
      case 'phone':
        if (value.trim() && !/^[+0-9\s\-()]{7,20}$/.test(value.trim())) {
          return 'Please enter a valid phone number (e.g. +256 414 344 500).';
        }
        return '';
      case 'message':
        if (!value.trim()) return 'Please provide your message or risk specifications.';
        if (value.trim().length < 10) return 'Please provide at least 10 characters for review.';
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    ['name', 'company', 'email', 'phone', 'message'].forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = {
      name: true,
      company: true,
      email: true,
      phone: true,
      message: true
    };
    setTouched(allTouched);

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Treaty Broking',
          urgency: 'Standard Review',
          message: ''
        });
        setTouched({});
        setErrors({});
        setTimeout(() => setSubmitted(false), 7000);
      }, 500);
    }
  };

  const contactInfo = [
    {
      icon: 'location_on',
      badge: 'Physical Office',
      title: 'Our Headquarters',
      primary: 'Plot 14/16, Kampala Road',
      secondary: 'Kampala, Uganda, East Africa',
      actionText: 'View on Map',
      actionHref: '#office-map'
    },
    {
      icon: 'call',
      badge: 'Direct Lines',
      title: 'Telephone Lines',
      primary: '+256 414 344 500',
      secondary: '+256 414 344 504',
      actionText: 'Call Office',
      actionHref: 'tel:+256414344500'
    },
    {
      icon: 'mail',
      badge: 'Electronic Dispatch',
      title: 'Email Communications',
      primary: 'info@guardianrebrokers.co.ug',
      secondary: 'claims@guardianrebrokers.co.ug',
      actionText: 'Send Email',
      actionHref: 'mailto:info@guardianrebrokers.co.ug'
    },
    {
      icon: 'schedule',
      badge: 'Availability',
      title: 'Desk Operating Hours',
      primary: 'Mon – Fri: 8:00 AM – 5:30 PM EAT',
      secondary: '24/7 Catastrophe Desk Available',
      actionText: 'Emergency Dispatch',
      actionHref: 'tel:+256414344500'
    }
  ];

  const servicesList = [
    { value: 'Treaty Broking', label: 'Treaty Broking' },
    { value: 'Facultative Reinsurance', label: 'Facultative Reinsurance' },
    { value: 'Claims Recoveries', label: 'Claims Recoveries' },
    { value: 'Technical Accounting', label: 'Technical Accounting' },
    { value: 'Contract Wording Review', label: 'Contract Wording Review' },
    { value: 'General Inquiry', label: 'General Inquiry' }
  ];

  const urgencyOptions = [
    { value: 'Standard Review', label: 'Standard Portfolio Review' },
    { value: 'Upcoming Renewal', label: 'Upcoming Treaty Renewal' },
    { value: 'Immediate Placement', label: 'Immediate Placement' },
    { value: 'Urgent Catastrophe / Loss', label: 'Urgent Catastrophe / Loss Notice' }
  ];

  const specializedDesks = [
    {
      icon: 'account_balance',
      title: 'Treaty Broking Desk',
      email: 'treaty@guardianrebrokers.co.ug',
      description: 'Proportional & non-proportional portfolio structuring across life and general classes.'
    },
    {
      icon: 'hub',
      title: 'Facultative & Special Risks Desk',
      email: 'facultative@guardianrebrokers.co.ug',
      description: 'Single-risk placement for high-value infrastructure, aviation, energy, and commercial exposures.'
    },
    {
      icon: 'receipt_long',
      title: 'Claims Recovery Advocacy Desk',
      email: 'claims@guardianrebrokers.co.ug',
      description: 'Direct advocacy with loss adjusters and lead reinsurers to secure accelerated cash calls.'
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-28 pb-16 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pb-16">
          <div className="mb-4" data-aos="fade-down">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-azure rounded-full animate-pulse"></span>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                CONTACT & CONSULTATION • KAMPALA DESK
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-8" data-aos="fade-right">
              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-charcoal font-normal leading-[1.08] tracking-tight">
                Let's discuss your reinsurance portfolio.
              </h1>
            </div>
            <div className="lg:col-span-4" data-aos="fade-left" data-aos-delay="100">
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
                Whether structuring an upcoming treaty renewal, placing complex facultative capacity, or accelerating claims recoveries, our senior brokers are directly available.
              </p>
            </div>
          </div>

          {/* Institutional Trust Badges Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E0D8]" data-aos="fade-up" data-aos-delay="150">
            <div className="p-3 bg-white border border-[#E5E0D8] flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-azure text-xl">verified</span>
              <div>
                <p className="text-xs font-bold text-charcoal">IRA Supervised</p>
                <p className="text-[10px] text-charcoal-muted">Licensed Broker (Uganda)</p>
              </div>
            </div>
            <div className="p-3 bg-white border border-[#E5E0D8] flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-azure text-xl">timer</span>
              <div>
                <p className="text-xs font-bold text-charcoal">&lt; 2 Hr First Response</p>
                <p className="text-[10px] text-charcoal-muted">Priority Client Intake</p>
              </div>
            </div>
            <div className="p-3 bg-white border border-[#E5E0D8] flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-azure text-xl">public</span>
              <div>
                <p className="text-xs font-bold text-charcoal">Global Syndication</p>
                <p className="text-[10px] text-charcoal-muted">Lloyd’s & Pan-African Hubs</p>
              </div>
            </div>
            <div className="p-3 bg-white border border-[#E5E0D8] flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-azure text-xl">lock</span>
              <div>
                <p className="text-xs font-bold text-charcoal">NDA Fiduciary Standard</p>
                <p className="text-[10px] text-charcoal-muted">Strict Portfolio Discretion</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CONTACT INFORMATION CARDS - DYNAMIC ELEVATED ARCHITECTURAL CARDS */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="group relative bg-white p-7 border border-[#E5E0D8] hover:border-brand-azure/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-azure to-brand-cyan group-hover:h-1.5 transition-all duration-300"></div>

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 bg-gradient-to-br from-brand-navy to-brand-blue text-white rounded-lg flex items-center justify-center shadow-md shadow-brand-navy/15 group-hover:scale-110 group-hover:from-brand-azure group-hover:to-brand-blue transition-all duration-300">
                      <span className="material-symbols-outlined text-xl">{info.icon}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-charcoal-muted px-2 py-0.5 bg-[#FAF8F5] border border-[#E5E0D8]">
                      {info.badge}
                    </span>
                  </div>

                  <h4 className="editorial-heading text-lg text-charcoal font-normal mb-2 group-hover:text-brand-navy transition-colors">
                    {info.title}
                  </h4>

                  <div className="text-xs sm:text-sm text-charcoal-muted space-y-1 font-light leading-relaxed mb-6">
                    <p className="font-medium text-charcoal">{info.primary}</p>
                    <p>{info.secondary}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0ECE4]">
                  <a
                    href={info.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy group-hover:text-brand-azure group-hover:translate-x-1 transition-all"
                  >
                    <span>{info.actionText}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE LOCATION MAP & KAMPALA HEADQUARTERS */}
        {/* ========================================================================= */}
        <section id="office-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="bg-white border border-[#E5E0D8] p-6 sm:p-8 shadow-sm relative overflow-hidden" data-aos="fade-up">
            {/* Top Glowing Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-azure to-brand-cyan"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#E5E0D8]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-azure"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-azure">
                    Central Financial District Desk
                  </span>
                </div>
                <h3 className="editorial-heading text-2xl sm:text-3xl text-charcoal font-normal">
                  Kampala Broking Headquarters Location
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1 font-light">
                  Plot 14/16, Kampala Road • Financial & Commercial Center • Kampala, Uganda
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://www.google.com/maps/place/Guardian+Reinsurance+Brokers+Uganda+Limited/@0.3130511,32.5825015,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs font-semibold tracking-wider uppercase hover:bg-brand-blue border border-brand-navy transition-all shadow-sm text-center"
                >
                  <span className="material-symbols-outlined text-sm">directions</span>
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[520px] border border-[#E5E0D8] overflow-hidden bg-[#FAF8F5]">
              <iframe
                title="Guardian Reinsurance Brokers Uganda Limited Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7587668626993!2d32.582501511241425!3d0.3130510640281853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc7e85574a55%3A0xaa1a85780e659fb0!2sGuardian%20Reinsurance%20Brokers%20Uganda%20Limited!5e0!3m2!1sen!2sug!4v1791329541785!5m2!1sen!2sug"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>

              {/* Floating Architectural Badge on Map */}
              <div className="hidden sm:flex absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-[#E5E0D8] border-l-4 border-l-brand-azure shadow-xl max-w-sm items-start gap-3 pointer-events-none">
                <div className="w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">domain</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">
                    Guardian Reinsurance Brokers (U) Ltd
                  </p>
                  <p className="text-[11px] text-charcoal-muted mt-0.5">
                    Plot 14/16, Kampala Road, Kampala, Uganda
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Executive Boardroom & Underwriting Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FORM & SPECIALIZED BROKING DESKS - MINIMAL CORPORATE */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#E5E0D8] shadow-sm" data-aos="fade-up">
              <div className="mb-8 pb-6 border-b border-[#F0ECE4]">
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-2 font-mono">
                  DIRECT DESK INQUIRY
                </span>
                <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal">
                  Send a Confidential Message
                </h2>
                <p className="text-sm text-charcoal-muted mt-2 font-light leading-relaxed">
                  Submit your treaty parameters, facultative risk slip, or general consultation request. An acknowledgement will be dispatched promptly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-3 bg-[#FAF8F5] border border-[#E5E0D8]">
                  <span className="material-symbols-outlined text-4xl text-brand-navy">check_circle</span>
                  <h3 className="editorial-heading text-2xl text-charcoal font-normal">Message Registered</h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed font-light">
                    Thank you. Your inquiry has been routed directly to our senior broking directors in Kampala. We will respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-2 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Full Name"
                        className={`w-full px-4 py-3 bg-[#FAF8F5] focus:bg-white border text-sm text-charcoal placeholder-slate-400 focus:outline-none transition-colors ${
                          touched.name && errors.name
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E5E0D8] focus:border-brand-navy'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1 font-mono">
                          <span className="material-symbols-outlined text-xs">error</span>
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-2 font-mono">
                        Company / Cedant Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Continental Insurance Ltd"
                        className={`w-full px-4 py-3 bg-[#FAF8F5] focus:bg-white border text-sm text-charcoal placeholder-slate-400 focus:outline-none transition-colors ${
                          touched.company && errors.company
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E5E0D8] focus:border-brand-navy'
                        }`}
                      />
                      {touched.company && errors.company && (
                        <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1 font-mono">
                          <span className="material-symbols-outlined text-xs">error</span>
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-2 font-mono">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="officer@company.com"
                        className={`w-full px-4 py-3 bg-[#FAF8F5] focus:bg-white border text-sm text-charcoal placeholder-slate-400 focus:outline-none transition-colors ${
                          touched.email && errors.email
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E5E0D8] focus:border-brand-navy'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1 font-mono">
                          <span className="material-symbols-outlined text-xs">error</span>
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-2 font-mono">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+256 ..."
                        className={`w-full px-4 py-3 bg-[#FAF8F5] focus:bg-white border text-sm text-charcoal placeholder-slate-400 focus:outline-none transition-colors ${
                          touched.phone && errors.phone
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E5E0D8] focus:border-brand-navy'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1 font-mono">
                          <span className="material-symbols-outlined text-xs">error</span>
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Service & Urgency */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-2 font-mono">
                        Service of Interest
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#FAF8F5] focus:bg-white border border-[#E5E0D8] focus:border-brand-navy text-sm text-charcoal focus:outline-none transition-colors appearance-none pr-10 cursor-pointer"
                        >
                          {servicesList.map((svc) => (
                            <option key={svc.value} value={svc.value}>
                              {svc.label}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted pointer-events-none text-base">
                          expand_more
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-2 font-mono">
                        Urgency Level
                      </label>
                      <div className="relative">
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#FAF8F5] focus:bg-white border border-[#E5E0D8] focus:border-brand-navy text-sm text-charcoal focus:outline-none transition-colors appearance-none pr-10 cursor-pointer"
                        >
                          {urgencyOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted pointer-events-none text-base">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-2 font-mono">
                      Message / Risk Portfolio Specifications *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Please describe your requirements, retention parameters, target syndicate markets, or query..."
                      className={`w-full px-4 py-3 bg-[#FAF8F5] focus:bg-white border text-sm text-charcoal placeholder-slate-400 focus:outline-none transition-colors font-light leading-relaxed ${
                        touched.message && errors.message
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#E5E0D8] focus:border-brand-navy'
                      }`}
                    ></textarea>
                    {touched.message && errors.message && (
                      <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs">error</span>
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit & IRA Fiduciary Note */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F0ECE4]">
                    <span className="text-xs text-charcoal-muted flex items-center gap-1.5 font-light">
                      <span className="material-symbols-outlined text-sm text-brand-navy">lock</span>
                      Protected under IRA non-disclosure governance
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-brand-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-blue transition-colors cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <span>Send Confidential Message</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Practice Desks Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white border border-[#E5E0D8] p-8 sm:p-10 shadow-sm space-y-6">
                <div className="pb-4 border-b border-[#F0ECE4]">
                  <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-1 font-mono">
                    PRACTICE DESKS
                  </span>
                  <h3 className="editorial-heading text-2xl text-charcoal font-normal">
                    Direct Specialized Practice Groups
                  </h3>
                </div>

                <div className="space-y-6">
                  {specializedDesks.map((desk, idx) => (
                    <div
                      key={idx}
                      className="pb-6 border-b border-[#F0ECE4] last:border-b-0 last:pb-0 space-y-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-brand-navy text-lg">
                          {desk.icon}
                        </span>
                        <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
                          {desk.title}
                        </h4>
                      </div>
                      <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                        {desk.description}
                      </p>
                      <a
                        href={`mailto:${desk.email}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy hover:text-brand-azure transition-colors pt-1"
                      >
                        <span>{desk.email}</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Regulatory Authorization Footer Card */}
              <div className="p-6 bg-white border border-[#E5E0D8] border-l-4 border-l-brand-navy shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-navy text-base">verified</span>
                  <p className="text-xs font-bold text-charcoal uppercase tracking-wider">
                    Regulatory Authorization
                  </p>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Guardian Reinsurance Brokers (U) Ltd is officially licensed and regulated by the <strong>Insurance Regulatory Authority of Uganda (IRA)</strong> under the Insurance Act.
                </p>
                <div className="pt-2 text-xs text-charcoal-muted flex items-center gap-4">
                  <span>Telephone: <strong className="text-charcoal font-medium">+256 414 344 500</strong></span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
