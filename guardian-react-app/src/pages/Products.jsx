import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  return (
    <>
      <Header />
      
      <main className="pt-16 pb-section-gap-lg">
        {/* Hero Section */}
        <section className="hero-pattern py-section-gap-md relative overflow-hidden">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max relative z-10">
            <div className="max-w-3xl">
              <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                Our Expertise
              </span>
              <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-6 font-bold">
                Innovative & Forward Looking Reinsurance Services
              </h1>
              <p className="font-body-lg text-body-lg text-text-secondary mb-10 max-w-2xl">
                Empowering insurers with technical precision and global reach. We provide a comprehensive suite of reinsurance solutions designed to mitigate risk and optimize capital efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded font-button text-button uppercase tracking-widest hover:bg-secondary-fixed transition-colors">
                  Get a Quote
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded font-button text-button uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-surface-muted hidden lg:block transform -skew-x-12 translate-x-24"></div>
          <div className="absolute right-margin-desktop top-1/2 -translate-y-1/2 w-96 h-[500px] hidden lg:block rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img
              alt="Professional Reinsurance Consultant"
              className="w-full h-full object-cover"
              src="/images/consultant.jpg"
            />
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-section-gap-lg container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Specialized Solutions</h2>
            <p className="font-body-md text-body-md text-text-secondary">
              Tailored broking and management services for the modern risk landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Treaty Broking */}
            <div className="md:col-span-8 group relative overflow-hidden bg-white border border-outline-variant/30 flex flex-col md:flex-row product-shadow product-shadow-hover rounded-xl">
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-secondary mb-6">
                    <span className="material-symbols-outlined text-4xl">account_balance</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Treaty Broking</h3>
                  <p className="font-body-md text-body-md text-text-secondary">
                    Comprehensive portfolio protection through proportional and non-proportional treaty structures. We utilize sophisticated modeling to ensure your aggregate exposures are managed with surgical precision.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-primary font-button text-button uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                  <span>Explore Treaty Solutions</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  alt="Reinsurance Treaty Discussion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/guardian-sm-work.png"
                />
              </div>
            </div>

            {/* Facultative Reinsurance */}
            <div className="md:col-span-4 bg-primary text-on-primary p-12 flex flex-col justify-between h-auto min-h-[400px] product-shadow product-shadow-hover group rounded-xl">
              <div>
                <div className="text-secondary-fixed mb-6">
                  <span className="material-symbols-outlined text-4xl">hub</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4">Facultative Reinsurance</h3>
                <p className="font-body-md text-body-md text-on-primary/80">
                  Specific risk placement for high-value or complex exposures. Our global network allows for rapid placement of even the most challenging risks.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-secondary-fixed font-button text-button uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                <span>Risk Placement</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>

            {/* Claims Recoveries */}
            <div className="md:col-span-4 bg-surface-muted p-12 flex flex-col justify-between h-auto min-h-[400px] border border-outline-variant/30 product-shadow product-shadow-hover group rounded-xl">
              <div>
                <div className="text-primary mb-6">
                  <span className="material-symbols-outlined text-4xl">receipt_long</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Claims Recoveries</h3>
                <p className="font-body-md text-body-md text-text-secondary">
                  Dedicated support for prompt and accurate claims handling. We ensure the bridge between cedant and reinsurer remains fluid and transparent.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary font-button text-button uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                <span>Process Details</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>

            {/* Technical Accounting */}
            <div className="md:col-span-8 bg-white p-12 border border-outline-variant/30 flex flex-col md:flex-row gap-12 items-center product-shadow product-shadow-hover group rounded-xl">
              <div className="flex-1">
                <div className="text-secondary mb-6">
                  <span className="material-symbols-outlined text-4xl">monitoring</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Technical Accounting</h3>
                <p className="font-body-md text-body-md text-text-secondary">
                  Financial integrity at the core of every transaction. Our accounting team manages complex premium and commission calculations with absolute transparency.
                </p>
                <div className="mt-8 flex items-center gap-2 text-primary font-button text-button uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                  <span>Accounting Standards</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-surface rounded-full flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-primary text-6xl group-hover:scale-110 transition-transform">
                  calculate
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnerships Section */}
        <section className="py-section-gap-lg bg-surface-container-low overflow-hidden">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    alt="Dynamic Strategic Analysis"
                    className="w-full h-full object-cover"
                    src="/images/strategic-analysis.jpg"
                  />
                </div>
                {/* Decorative back-element */}
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-secondary/20 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary-container rounded-full blur-3xl opacity-50"></div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                  Global Network
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Strategic Partnerships</h2>
                <p className="font-body-lg text-body-lg text-text-secondary mb-8">
                  Our strength lies in our relationships. We bridge the gap between regional insurers and international reinsurance markets, fostering long-term stability and growth through collaborative innovation and mutual trust.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                    <div className="text-primary font-headline-sm mb-2">120+</div>
                    <div className="text-text-secondary text-sm font-label-caps uppercase">Global Markets</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                    <div className="text-primary font-headline-sm mb-2">Reliable</div>
                    <div className="text-text-secondary text-sm font-label-caps uppercase">A+ Capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-primary py-section-gap-lg text-on-primary">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-8">
                  Why Professional Firms Choose Guardian Reinsurance
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-3 bg-secondary-container rotate-45 shrink-0"></span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-secondary-fixed mb-1">Integrity</h4>
                      <p className="text-on-primary/80">
                        Trust is our foundation. We operate with unwavering ethical standards in every placement.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-3 bg-secondary-container rotate-45 shrink-0"></span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-secondary-fixed mb-1">Client-Centered</h4>
                      <p className="text-on-primary/80">
                        Every risk profile is unique. We design bespoke solutions rather than applying templates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-3 bg-secondary-container rotate-45 shrink-0"></span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-secondary-fixed mb-1">Global Reach</h4>
                      <p className="text-on-primary/80">
                        Access to leading international markets ensures competitive pricing and diverse capacity.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative">
                  <img
                    alt="Modern City Skyline"
                    className="w-full h-full object-cover opacity-60"
                    src="/images/skyline.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="text-secondary-fixed font-display-lg text-headline-lg">15+</div>
                    <div className="font-label-caps text-label-caps uppercase tracking-widest">
                      Years of Market Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="py-section-gap-lg container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max relative">
          <div className="relative h-[500px] rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <img
              alt="Global Connectivity"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 brightness-50"
              src="/images/global-connectivity.jpg"
            />
            
            {/* Glassmorphic Card */}
            <div className="glass-card relative z-10 p-10 md:p-16 max-w-2xl mx-auto text-center border border-white/20">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                Ready to secure your portfolio?
              </h2>
              <p className="font-body-lg text-body-lg text-text-secondary mb-10">
                Contact our technical experts today for a consultation on your reinsurance needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-primary text-on-primary px-10 py-4 rounded font-button text-button uppercase tracking-widest hover:bg-opacity-90 shadow-lg transition-all">
                  Get in Touch
                </Link>
                <a className="bg-white/40 border border-primary text-primary px-10 py-4 rounded font-button text-button uppercase tracking-widest hover:bg-white/60 transition-all backdrop-blur-sm" href="#all-products">
                  View All Products
                </a>
              </div>
            </div>
            
            {/* Decorative light flares */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Products;
