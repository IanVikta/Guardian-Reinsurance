import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Claims = () => {
  const claimsFeatures = [
    {
      icon: 'speed',
      title: 'Rapid Processing',
      description: 'Fast-track claims processing with dedicated support teams ensuring quick turnaround times.'
    },
    {
      icon: 'verified',
      title: 'Accurate Assessment',
      description: 'Thorough evaluation and documentation of all claims for maximum recovery potential.'
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Round-the-clock assistance for urgent claims and emergency situations.'
    },
    {
      icon: 'analytics',
      title: 'Transparent Reporting',
      description: 'Real-time updates and detailed reporting throughout the claims lifecycle.'
    }
  ];

  const claimsProcess = [
    {
      step: '01',
      title: 'Notification',
      description: 'Submit your claim notification with all relevant documentation and details.',
      icon: 'notification_important'
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'Our experts review and assess the claim against policy terms and conditions.',
      icon: 'assessment'
    },
    {
      step: '03',
      title: 'Coordination',
      description: 'We liaise with reinsurers to facilitate smooth processing and recovery.',
      icon: 'handshake'
    },
    {
      step: '04',
      title: 'Settlement',
      description: 'Efficient settlement and recovery of reinsurance proceeds to your account.',
      icon: 'payments'
    }
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Redesigned Hero Section - Modern & Compact */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#000a1e] via-[#001838] to-[#002855] overflow-hidden">
          {/* Animated Background Image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-tertiary/85 mix-blend-multiply"></div>
            <img 
              src="/images/claims-hero.jpg" 
              alt="Claims Recovery Services" 
              className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
            />
          </div>

          {/* Modern Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center mb-6" data-aos="fade-down">
                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-2xl px-5 py-2 rounded-full border border-secondary/30 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                  <span className="text-secondary-fixed text-xs font-semibold uppercase tracking-[0.2em]">Claims Support</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1] text-center font-bold" data-aos="fade-up">
                Efficient Claims
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-fixed to-secondary mt-1 font-bold">
                  Recoveries
                </span>
              </h1>
              
              {/* Description */}
              <p className="font-body-lg text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed text-center" data-aos="fade-up" data-aos-delay="100">
                Dedicated support for prompt and accurate claims handling. We ensure the bridge between cedant and reinsurer remains fluid and transparent.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10" data-aos="fade-up" data-aos-delay="200">
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary via-secondary-fixed to-secondary text-primary px-8 py-3.5 rounded-xl font-bold hover:shadow-[0_20px_60px_rgba(252,212,0,0.4)] transition-all overflow-hidden"
                >
                  <span className="relative z-10">Submit a Claim</span>
                  <span className="material-symbols-outlined relative z-10 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </Link>
                
                <Link 
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-xl"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  <span>Contact Claims Team</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary-fixed mb-1">24/7</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Support</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-secondary-fixed mb-1">98%</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary-fixed mb-1">Fast</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Recovery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 47.5C1200 45 1320 40 1380 37.5L1440 35V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="currentColor" className="text-surface"/>
            </svg>
          </div>
        </section>

        {/* Claims Features Grid */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-4">
                Expert Claims Management
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Our dedicated claims team ensures smooth processing and maximum recovery for your reinsurance claims.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {claimsFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-outline-variant/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-primary">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Claims Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                Our Process
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-4">
                How Claims Work
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                A streamlined four-step process designed for efficiency and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {claimsProcess.map((process, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < claimsProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-secondary via-secondary/50 to-transparent -z-10"></div>
                  )}
                  
                  <div className="relative bg-gradient-to-br from-surface to-surface-muted p-8 rounded-2xl border-2 border-outline-variant/30 hover:border-secondary/50 transition-all group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                      {process.step}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-4xl text-primary">
                        {process.icon}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-xl text-primary mb-3">
                      {process.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Claims Documentation */}
        <section className="py-20 bg-surface-muted">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                  Documentation
                </span>
                <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-6">
                  Required Documents for Claims
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  To expedite your claim processing, please ensure you have the following documentation ready:
                </p>

                <div className="space-y-4">
                  {[
                    'Original policy documents and endorsements',
                    'Detailed loss or damage report',
                    'Supporting invoices and receipts',
                    'Investigation reports (if applicable)',
                    'Treaty or facultative slip confirmation',
                    'Any other relevant correspondence'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 bg-secondary-container rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary text-sm">check</span>
                      </div>
                      <p className="text-text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/analytics.jpg" 
                    alt="Claims Documentation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="material-symbols-outlined text-secondary-fixed text-3xl">description</span>
                        <div>
                          <div className="text-white font-semibold text-lg">Digital Submission</div>
                          <div className="text-white/70 text-sm">Secure online portal available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-4">
                Claims FAQs
              </h2>
              <p className="text-text-secondary text-lg">
                Common questions about our claims process.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'Who should clients contact for claims information?',
                  answer: 'Clients can contact their insurance brokers, agents, or directly reach out to our claims team for assistance and advice regarding claims recoveries.'
                },
                {
                  question: 'How long does claims processing take?',
                  answer: 'Processing times vary based on claim complexity. Simple claims are typically processed within 10-15 business days, while complex cases may require additional time for thorough assessment.'
                },
                {
                  question: 'Can I track my claim status online?',
                  answer: 'Yes, we provide a secure online portal where you can submit claims and track their progress in real-time with detailed status updates.'
                }
              ].map((faq, index) => (
                <details 
                  key={index}
                  className="glass-card rounded-xl border border-outline-variant/30 open:shadow-xl transition-all group"
                >
                  <summary className="list-none p-6 flex justify-between items-center cursor-pointer">
                    <span className="font-headline-sm text-lg text-primary pr-4">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 flex-shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-tertiary-container relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <span className="text-secondary-fixed font-label-caps text-label-caps block mb-6 uppercase tracking-widest">
              Need Assistance?
            </span>
            <h2 className="font-display-lg text-4xl md:text-6xl text-white mb-6">
              Our Claims Team is <span className="text-secondary-fixed">Here to Help</span>
            </h2>
            <p className="font-body-lg text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Get in touch with our expert claims handlers for personalized support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+256414344500"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-primary px-10 py-5 rounded-xl font-semibold hover:bg-secondary hover:shadow-2xl transition-all"
              >
                <span className="material-symbols-outlined">call</span>
                <span>Call: +256 414 344 500</span>
              </a>
              <a 
                href="mailto:info@guardianrebrokers.co.ug"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-xl"
              >
                <span className="material-symbols-outlined">mail</span>
                <span>Email Claims Team</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Claims;
