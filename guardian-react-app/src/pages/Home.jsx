import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: '/images/guardian-sm-work.png',
      tag: 'Strategic Intelligence',
      title: 'The Benchmark of',
      titleAccent: 'Trust',
      titleEnd: 'in Reinsurance',
      description: 'Bespoke risk transfer solutions engineered with clinical precision for the global institutional market.'
    },
    {
      image: '/images/hero-2.jpg',
      tag: 'Universal Connectivity',
      title: 'Unrivaled',
      titleAccent: 'Global',
      titleEnd: 'Reinsurance Reach',
      description: 'Navigating complex international markets with a network that spans continents and transcends boundaries.'
    },
    {
      image: '/images/guardian-feb-1.2.png',
      tag: 'Analytical Excellence',
      title: 'Data-Driven',
      titleAccent: 'Insights',
      titleEnd: '',
      description: 'Transforming volatile market data into actionable risk strategies using state-of-the-art predictive modeling.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Header />
      
      <main className="pt-0">
        {/* Hero Carousel Section */}
        <section className="relative h-screen min-h-[600px] bg-primary overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/images/hero-1.jpg"
            >
              <source src="/videos/reinsurance.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-black/40"></div>
          </div>

          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-3xl" data-aos="fade-up">
                      <span className="inline-block font-label-caps text-label-caps tracking-[0.3em] text-secondary-fixed mb-4 uppercase animate-fade-in">
                        {slide.tag}
                      </span>
                      <h1 className="font-display-lg text-4xl md:text-6xl text-white mb-6 leading-[1.1] font-bold">
                        {slide.title} <span className="text-secondary-fixed italic">{slide.titleAccent}</span> {slide.titleEnd}
                      </h1>
                      <p className="font-body-lg text-body-lg text-white/80 mb-8 max-w-xl">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/products" className="bg-secondary-container text-primary font-button text-button px-8 py-4 rounded hover:bg-secondary transition-all hover:shadow-[0_0_20px_rgba(252,212,0,0.3)] text-center">
                          Explore Solutions
                        </Link>
                        <Link to="/products" className="dark-glass text-white font-button text-button px-8 py-4 rounded hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2">
                          Case Studies <span className="material-symbols-outlined text-sm">north_east</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Nav Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-12 h-1 rounded-full transition-all ${
                  activeSlide === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Methodology / Market Analytics Section */}
        <section className="py-16 md:py-20 bg-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[600px] text-primary">analytics</span>
          </div>
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1" data-aos="fade-right">
                <div className="relative rounded-sm overflow-hidden shadow-2xl">
                  <img
                    alt="Market Analytics"
                    className="w-full h-[500px] object-cover"
                    src="/images/analytics.jpg"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:pl-12" data-aos="fade-left">
                <div className="gold-accent-line mb-6"></div>
                <span className="font-label-caps text-label-caps text-secondary font-bold mb-3 block">
                  ANALYTICAL RIGOR
                </span>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-6 leading-tight">
                  Advanced Market Analytics & Methodology
                </h2>
                <p className="font-body-lg text-body-lg text-text-secondary mb-8 leading-relaxed">
                  We leverage industry-leading data analytics to provide our clients with a competitive edge. Our technical accounting and contract wording expertise ensures that every risk is articulated with clinical precision, providing the stability your stakeholders demand.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-headline-sm text-xl text-primary mb-2">99.8%</h4>
                    <p className="text-sm text-text-secondary">Placement Success Rate</p>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-xl text-primary mb-2">24/7</h4>
                    <p className="text-sm text-text-secondary">Market Monitoring</p>
                  </div>
                </div>
                <a className="bg-primary text-white font-button text-button px-7 py-3 rounded hover:bg-tertiary transition-all inline-flex items-center gap-3 shadow-md" href="#framework">
                  Our Analytical Framework
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Expertise Section */}
        <section className="py-16 md:py-20 bg-primary text-white relative">
          <div className="absolute inset-0 opacity-20">
            <img
              alt="Expertise Visual"
              className="w-full h-full object-cover grayscale"
              src="/images/expertise.jpg"
            />
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="max-w-3xl mb-16" data-aos="fade-up">
              <div className="gold-accent-line mb-6"></div>
              <h2 className="font-display-lg text-3xl md:text-5xl mb-6 leading-tight">
                Expertise Redefined
              </h2>
              <p className="font-body-lg text-body-lg text-white/70 max-w-2xl">
                Combining the personalized service of a elite boutique firm with the technical prowess of a global powerhouse. We don't just broker; we strategize.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="dark-glass p-8 group hover:bg-white/10 transition-all" data-aos="fade-up" data-aos-delay="100">
                <div className="w-14 h-14 rounded-sm bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">handshake</span>
                </div>
                <h4 className="font-headline-sm text-xl text-white mb-3">Unyielding Integrity</h4>
                <p className="text-white/60 leading-relaxed">
                  Total transparency in every transaction. We operate with a fiduciary mindset that puts your interests above all else.
                </p>
              </div>
              <div className="dark-glass p-8 group hover:bg-white/10 transition-all" data-aos="fade-up" data-aos-delay="200">
                <div className="w-14 h-14 rounded-sm bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">person_pin</span>
                </div>
                <h4 className="font-headline-sm text-xl text-white mb-3">Client-First Framework</h4>
                <p className="text-white/60 leading-relaxed">
                  Personalized boutique services tailored to your specific risk appetite. No generic solutions, only custom strategies.
                </p>
              </div>
              <div className="dark-glass p-8 group hover:bg-white/10 transition-all" data-aos="fade-up" data-aos-delay="300">
                <div className="w-14 h-14 rounded-sm bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">lightbulb</span>
                </div>
                <h4 className="font-headline-sm text-xl text-white mb-3">Innovative Resilience</h4>
                <p className="text-white/60 leading-relaxed">
                  Pioneering new risk transfer structures that anticipate market shifts before they happen. Stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Solutions Bento */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 text-center max-w-2xl mx-auto" data-aos="fade-up">
              <span className="font-label-caps text-label-caps text-secondary font-bold mb-3 block">
                OUR CAPABILITIES
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-5">
                Strategic Reinsurance Solutions
              </h2>
              <div className="gold-accent-line mx-auto mb-6"></div>
              <p className="text-text-secondary font-body-lg">
                Tailored reinsurance programs designed for the intricacies of a modern global economy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Treaty Broking */}
              <div className="md:col-span-8 relative h-[450px] overflow-hidden group rounded-sm shadow-xl" data-aos="fade-right">
                <img
                  alt="Treaty Broking"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="/images/treaty.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="font-headline-md text-2xl md:text-3xl mb-3">Treaty Broking</h3>
                  <p className="font-body-md text-white/80 max-w-md mb-6">
                    Aggregate risk management with high-capacity placement and competitive global pricing.
                  </p>
                  <a className="bg-white text-primary px-7 py-3 rounded-sm w-fit font-button text-button hover:bg-secondary-fixed transition-all hover:px-9" href="#treaty">
                    Explore Treaty Services
                  </a>
                </div>
              </div>
              
              {/* Facultative */}
              <div className="md:col-span-4 relative h-[450px] overflow-hidden group rounded-sm shadow-xl" data-aos="fade-left">
                <img
                  alt="Facultative"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="/images/facultative.jpg"
                />
                <div className="absolute inset-0 bg-secondary/90 flex flex-col justify-end p-8 text-primary">
                  <h3 className="font-headline-sm text-xl mb-3">Facultative Reinsurance</h3>
                  <p className="font-body-md text-primary/80 mb-6">
                    Bespoke placement for individual, high-value risks requiring specialized underwriting expertise.
                  </p>
                  <a className="text-primary font-button text-button border-b-2 border-primary/30 w-fit pb-1 hover:border-primary transition-all flex items-center gap-2" href="#facultative">
                    Case Studies <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-surface relative">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-4xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-3">
                Professional Insights
              </h2>
              <p className="text-text-secondary">
                Clarity on our operational excellence and client engagement models.
              </p>
            </div>
            <div className="space-y-4">
              <details className="group glass-card rounded-sm border-none open:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
                <summary className="list-none p-6 flex justify-between items-center cursor-pointer">
                  <span className="font-headline-sm text-lg text-primary">
                    How do we ensure optimal placement pricing?
                  </span>
                  <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  Through our proprietary market analytics and extensive global network, we conduct competitive bidding processes across top-tier reinsurers to secure the most favorable terms and capacity for our clients.
                </div>
              </details>
              <details className="group glass-card rounded-sm border-none open:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
                <summary className="list-none p-6 flex justify-between items-center cursor-pointer">
                  <span className="font-headline-sm text-lg text-primary">
                    Can arrangements be tailored to specific jurisdictions?
                  </span>
                  <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  Absolutely. We specialize in cross-border reinsurance structures that comply with local regulatory requirements while maximizing capital efficiency and risk protection.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center" data-aos="fade-up">
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-widest uppercase">
              Take the Next Step
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl text-white mb-8 max-w-4xl mx-auto leading-tight">
              Secure Your Legacy with <span className="text-secondary-fixed">Guardian Prestige</span> Reinsurance
            </h2>
            <p className="font-body-lg text-body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Connect with our senior brokers for a strategic consultation on your risk portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a className="bg-secondary-container text-primary font-button text-button px-10 py-4 rounded-sm hover:bg-secondary transition-all hover:shadow-[0_10px_30px_rgba(252,212,0,0.3)] active:scale-95 inline-block" href="#consultation">
                Schedule Consultation
              </a>
              <a className="border border-white/20 text-white font-button text-button px-10 py-4 rounded-sm hover:bg-white/5 transition-all inline-block" href="#track-record">
                Our Track Record
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
