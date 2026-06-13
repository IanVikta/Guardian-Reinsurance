import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
  };

  const contactInfo = [
    {
      icon: 'location_on',
      title: 'Visit Us',
      details: ['Kampala, Uganda', 'East Africa']
    },
    {
      icon: 'call',
      title: 'Call Us',
      details: ['+256 414 344 500', '+256 414 344 504']
    },
    {
      icon: 'mail',
      title: 'Email Us',
      details: ['info@guardianrebrokers.co.ug', 'support@guardianrebrokers.co.ug']
    },
    {
      icon: 'schedule',
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM']
    }
  ];

  const services = [
    'Treaty Broking',
    'Facultative Reinsurance',
    'Claims Recoveries',
    'Technical Accounting',
    'Contract Wording',
    'General Inquiry'
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-container to-tertiary-container overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-tertiary/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full mb-6 border border-white/20">
                <span className="material-symbols-outlined text-secondary-fixed text-sm">support_agent</span>
                <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Get In Touch</span>
              </div>
              
              <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Contact <span className="text-secondary-fixed">Guardian Reinsurance</span>
              </h1>
              
              <p className="font-body-lg text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Have questions about our reinsurance services? We're here to help. Reach out to our team of experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-surface relative -mt-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-outline-variant/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {info.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-lg text-primary mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-text-secondary text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Form Column */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <span className="text-secondary font-label-caps text-label-caps block mb-4 uppercase tracking-widest">
                    Send Message
                  </span>
                  <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-4">
                    Get A Free Quote
                  </h2>
                  <p className="text-text-secondary text-lg">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-outline-variant/30 focus:border-secondary focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-outline-variant/30 focus:border-secondary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-outline-variant/30 focus:border-secondary focus:outline-none transition-colors"
                        placeholder="+256 414 344 500"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-outline-variant/30 focus:border-secondary focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-outline-variant/30 focus:border-secondary focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border-2 border-outline-variant/30 focus:border-secondary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your reinsurance needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </form>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 space-y-8">
                  {/* Why Contact Us */}
                  <div className="bg-gradient-to-br from-surface to-surface-muted p-8 rounded-2xl border border-outline-variant/30">
                    <h3 className="font-headline-sm text-xl text-primary mb-6">
                      Why Contact Us?
                    </h3>
                    <div className="space-y-4">
                      {[
                        'Expert reinsurance advice',
                        'Competitive market rates',
                        'Fast response times',
                        'Personalized solutions',
                        'Global network access'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary-container rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-primary text-sm">check</span>
                          </div>
                          <p className="text-text-secondary">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Response */}
                  <div className="bg-gradient-to-br from-primary to-tertiary p-8 rounded-2xl text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary-fixed text-3xl">schedule</span>
                      <h3 className="font-headline-sm text-xl">Quick Response</h3>
                    </div>
                    <p className="text-white/80 mb-4">
                      Our team typically responds to inquiries within 2-4 business hours.
                    </p>
                    <div className="flex items-center gap-2 text-secondary-fixed text-sm font-semibold">
                      <span className="material-symbols-outlined text-sm">trending_up</span>
                      <span>98% Customer Satisfaction</span>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-white p-8 rounded-2xl border-2 border-secondary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">priority_high</span>
                      <h3 className="font-headline-sm text-xl text-primary">Emergency Claims?</h3>
                    </div>
                    <p className="text-text-secondary mb-4">
                      For urgent claims matters, contact our 24/7 hotline:
                    </p>
                    <a 
                      href="tel:+256414344500"
                      className="inline-flex items-center gap-2 bg-secondary-container text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-all"
                    >
                      <span className="material-symbols-outlined">call</span>
                      <span>+256 414 344 500</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-surface-muted">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-4">
                Find Our Office
              </h2>
              <p className="text-text-secondary text-lg">
                Visit us at our headquarters in Kampala, Uganda
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.758768903652!2d32.5825572704163!3d0.3130456996961384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc7e85574a55%3A0xaa1a85780e659fb0!2sGuardian%20Reinsurance%20Brokers%20Uganda%20Limited!5e0!3m2!1sen!2sug!4v1781348547252!5m2!1sen!2sug" 
                width="100%" 
                height="500" 
                style={{border: 0, borderRadius: '12px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Guardian Reinsurance Brokers Office Location"
                className="w-full"
              ></iframe>
            </div>

            {/* Office Info Below Map */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                </div>
                <div className="text-left">
                  <h3 className="font-headline-sm text-lg text-primary font-semibold">Guardian Reinsurance Brokers</h3>
                  <p className="text-text-secondary text-sm">Kampala, Uganda</p>
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
