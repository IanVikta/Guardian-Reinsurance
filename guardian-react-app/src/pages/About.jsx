import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: 'verified_user',
      title: 'Integrity',
      description: 'Trust in ethical practices and unwavering transparency in every transaction.'
    },
    {
      icon: 'person_pin',
      title: 'Client-Centered',
      description: 'Enjoy personalized services tailored to your unique risk profile and business needs.'
    },
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description: 'Stay ahead with tailored risk solutions and cutting-edge reinsurance strategies.'
    },
    {
      icon: 'public',
      title: 'Global Reach',
      description: 'Access a wide network of international reinsurers for competitive pricing and capacity.'
    },
    {
      icon: 'military_tech',
      title: 'Expertise',
      description: 'Benefit from seasoned professionals with decades of combined industry experience.'
    },
    {
      icon: 'eco',
      title: 'Sustainability',
      description: 'Committed to environmental and social responsibility in all our operations.'
    }
  ];

  const team = [
    {
      role: 'Leadership',
      description: 'Experienced executives guiding strategic vision and operational excellence.'
    },
    {
      role: 'Broking Team',
      description: 'Skilled professionals managing treaty and facultative placements globally.'
    },
    {
      role: 'Technical Team',
      description: 'Experts in contract wording, accounting, and claims management.'
    },
    {
      role: 'Support Staff',
      description: 'Dedicated professionals ensuring seamless client service delivery.'
    }
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Redesigned Hero Section - Elegant & Compact */}
        <section className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-[#000a1e] via-[#001636] to-[#002449] overflow-hidden">
          {/* Premium Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/88 to-tertiary/85 mix-blend-multiply"></div>
            <img 
              src="/images/guardian-feb.png" 
              alt="Guardian Reinsurance" 
              className="w-full h-full object-cover opacity-35 scale-110 animate-slow-zoom"
            />
          </div>

          {/* Elegant Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-tertiary/15 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          {/* Refined Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(rgba(252,212,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(252,212,0,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Premium Badge */}
              <div className="flex justify-center mb-6" data-aos="fade-down">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-secondary/40 shadow-2xl">
                  <span className="material-symbols-outlined text-secondary-fixed">business</span>
                  <span className="text-white text-xs font-bold uppercase tracking-[0.25em]">About Us</span>
                </div>
              </div>
              
              {/* Main Heading with Gradient */}
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05] text-center" data-aos="fade-up">
                Your Preferred
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-fixed to-[#d4a700]">
                  Reinsurance
                </span>
                <span className="block mt-2 text-white/95">Broker</span>
              </h1>
              
              {/* Premium Description */}
              <p className="font-body-lg text-lg md:text-xl text-white/75 mb-10 max-w-3xl mx-auto leading-relaxed text-center font-light" data-aos="fade-up" data-aos-delay="100">
                Guardian Reinsurance Brokers delivers innovative and forward-looking reinsurance services with unwavering commitment to integrity, expertise, and client success.
              </p>

              {/* Stats Grid - Modern Cards - Fixed Mobile Overflow */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:bg-white/10 hover:border-secondary/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity"></div>
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto">
                      <span className="material-symbols-outlined text-secondary-fixed text-lg sm:text-xl">workspace_premium</span>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 text-center leading-none">15+</div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider font-medium text-center leading-tight">Years<br className="sm:hidden" /> Experience</div>
                  </div>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:bg-white/10 hover:border-secondary/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity"></div>
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto">
                      <span className="material-symbols-outlined text-secondary-fixed text-lg sm:text-xl">handshake</span>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 text-center leading-none">120+</div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider font-medium text-center leading-tight">Global<br className="sm:hidden" /> Markets</div>
                  </div>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:bg-white/10 hover:border-secondary/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity"></div>
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto">
                      <span className="material-symbols-outlined text-secondary-fixed text-lg sm:text-xl">trending_up</span>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 text-center leading-none">99.8%</div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider font-medium text-center leading-tight">Success<br className="sm:hidden" /> Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 80L60 72.5C120 65 240 50 360 42.5C480 35 600 35 720 40C840 45 960 55 1080 57.5C1200 60 1320 55 1380 52.5L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="currentColor" className="text-white"/>
            </svg>
          </div>
        </section>
        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                The principles that guide our approach to reinsurance broking and client partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-surface to-surface-muted p-8 rounded-2xl border-2 border-outline-variant/30 hover:border-secondary/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-primary">
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-surface-muted">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/expertise.jpg" 
                    alt="Guardian Reinsurance Office" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border-2 border-outline-variant/30">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">A+</div>
                    <div className="text-sm text-text-secondary uppercase tracking-wider">Reinsurer Rating</div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
              </div>

              <div>
                <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                  Our Story
                </span>
                <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-6">
                  Building Trust Since Day One
                </h2>
                <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                  <p>
                    Guardian Reinsurance Brokers was established with a clear mission: to provide exceptional reinsurance broking services that combine technical excellence with personalized client relationships.
                  </p>
                  <p>
                    Over the years, we have built strong partnerships with leading reinsurers worldwide, enabling us to secure optimal terms and capacity for our clients across all lines of business.
                  </p>
                  <p>
                    Our team of experienced professionals brings deep expertise in treaty broking, facultative placements, claims recoveries, and technical accounting—ensuring comprehensive support throughout the reinsurance lifecycle.
                  </p>
                  <p>
                    Today, we stand as a trusted partner to insurance companies across East Africa and beyond, recognized for our integrity, innovation, and unwavering commitment to client success.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-tertiary hover:shadow-xl transition-all"
                  >
                    <span>Partner With Us</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                  <a 
                    href="/products"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
                  >
                    <span>Our Services</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                Our People
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-4">
                Expert Team Structure
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Seasoned professionals dedicated to delivering excellence in reinsurance broking.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-outline-variant/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-primary">group</span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary mb-3">
                    {member.role}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Approach */}
        <section className="py-20 bg-surface-muted">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                  Sustainability
                </span>
                <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-6">
                  Our Approach to Sustainability
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  We recognize our responsibility to contribute positively to society and the environment. Our sustainability initiatives focus on:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Environmental Stewardship',
                      description: 'Minimizing our carbon footprint through digital operations and paperless processes.'
                    },
                    {
                      title: 'Social Responsibility',
                      description: 'Supporting local communities and promoting diversity within our organization.'
                    },
                    {
                      title: 'Governance Excellence',
                      description: 'Maintaining the highest standards of ethical conduct and corporate governance.'
                    },
                    {
                      title: 'Sustainable Risk Solutions',
                      description: 'Advising clients on climate-related risks and sustainable insurance practices.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-outline-variant/30 hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary">eco</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                        <p className="text-text-secondary text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/skyline.jpg" 
                    alt="Sustainability" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20">
                      <h4 className="text-white font-semibold text-xl mb-2">Committed to a Better Future</h4>
                      <p className="text-white/80 text-sm">Integrating sustainability into every aspect of our operations.</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
              </div>
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
              Ready to Get Started?
            </span>
            <h2 className="font-display-lg text-4xl md:text-6xl text-white mb-6">
              Let's Build a <span className="text-secondary-fixed">Partnership</span>
            </h2>
            <p className="font-body-lg text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Experience the Guardian Reinsurance difference. Contact us today to discuss your reinsurance needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-primary px-10 py-5 rounded-xl font-semibold hover:bg-secondary hover:shadow-2xl transition-all"
              >
                <span>Get in Touch</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link 
                to="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-xl"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
