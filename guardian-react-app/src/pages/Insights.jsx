import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Insights = () => {
  const [selectedInsight, setSelectedInsight] = useState(null);

  const insights = [
    {
      id: 1,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.54 AM(1).jpeg',
      title: 'Q3 2025 Market Analysis',
      date: 'September 9, 2025',
      category: 'Market Report',
      excerpt: 'Comprehensive analysis of reinsurance market trends and capacity updates for Q3 2025.'
    },
    {
      id: 2,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.54 AM.jpeg',
      title: 'Regional Risk Assessment',
      date: 'September 9, 2025',
      category: 'Risk Analysis',
      excerpt: 'Deep dive into emerging risks and opportunities in East African reinsurance markets.'
    },
    {
      id: 3,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.55 AM.jpeg',
      title: 'Industry Outlook Update',
      date: 'September 9, 2025',
      category: 'Market Report',
      excerpt: 'Forward-looking perspectives on global reinsurance capacity and pricing trends.'
    },
    {
      id: 4,
      image: '/images/insights/WhatsApp Image 2025-09-10 at 11.09.43 AM.jpeg',
      title: 'Claims Management Insights',
      date: 'September 10, 2025',
      category: 'Best Practices',
      excerpt: 'Strategic approaches to optimizing claims recovery and management processes.'
    },
    {
      id: 5,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.52 AM.jpeg',
      title: '2026 Market Preview',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Key trends shaping the reinsurance landscape in 2026 and beyond.'
    },
    {
      id: 6,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.53 AM.jpeg',
      title: 'Capacity Trends Analysis',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Current capacity availability and pricing dynamics across major markets.'
    },
    {
      id: 7,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.54 AM(1).jpeg',
      title: 'Treaty Renewal Strategies',
      date: 'January 28, 2026',
      category: 'Best Practices',
      excerpt: 'Effective strategies for navigating treaty renewals in a hardening market.'
    },
    {
      id: 8,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.54 AM(2).jpeg',
      title: 'Facultative Market Update',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Latest developments in facultative reinsurance placement and pricing.'
    },
    {
      id: 9,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.54 AM.jpeg',
      title: 'Regulatory Changes Impact',
      date: 'January 28, 2026',
      category: 'Risk Analysis',
      excerpt: 'How new regulations are reshaping reinsurance operations and compliance.'
    },
    {
      id: 10,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.55 AM(1).jpeg',
      title: 'Technology in Reinsurance',
      date: 'January 28, 2026',
      category: 'Innovation',
      excerpt: 'Digital transformation and its impact on reinsurance broking efficiency.'
    },
    {
      id: 11,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.55 AM(2).jpeg',
      title: 'Climate Risk Assessment',
      date: 'January 28, 2026',
      category: 'Risk Analysis',
      excerpt: 'Understanding and managing climate-related risks in reinsurance portfolios.'
    },
    {
      id: 12,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.55 AM.jpeg',
      title: 'Global Market Dynamics',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Cross-border reinsurance trends and international market opportunities.'
    },
    {
      id: 13,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.56 AM(1).jpeg',
      title: 'Performance Metrics Review',
      date: 'January 28, 2026',
      category: 'Analytics',
      excerpt: 'Key performance indicators and benchmarks for reinsurance success.'
    },
    {
      id: 14,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.56 AM.jpeg',
      title: 'Strategic Partnership Models',
      date: 'January 28, 2026',
      category: 'Best Practices',
      excerpt: 'Building effective partnerships between cedants and reinsurers.'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Market Report', 'Risk Analysis', 'Best Practices', 'Innovation', 'Analytics'];

  const filteredInsights = activeCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === activeCategory);

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-[#001636] to-tertiary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-tertiary/88"></div>
            <img 
              src="/images/analytics.jpg" 
              alt="Market Insights" 
              className="w-full h-full object-cover opacity-25 animate-slow-zoom"
            />
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-tertiary/15 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(252,212,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(252,212,0,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-secondary/40 shadow-2xl mb-6" data-aos="fade-down">
                <span className="material-symbols-outlined text-secondary-fixed">insights</span>
                <span className="text-white text-xs font-bold uppercase tracking-[0.25em]">Market Intelligence</span>
              </div>
              
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]" data-aos="fade-up">
                Data-Driven
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-fixed to-[#d4a700]">
                  Market Insights
                </span>
              </h1>
              
              <p className="font-body-lg text-lg md:text-xl text-white/75 mb-10 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Stay informed with our expert analysis, market reports, and strategic insights on the global reinsurance landscape.
              </p>

              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-secondary-fixed mb-1">50+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Reports</div>
                </div>
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-secondary-fixed mb-1">Weekly</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Updates</div>
                </div>
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-secondary-fixed mb-1">Global</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Coverage</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 80L60 72.5C120 65 240 50 360 42.5C480 35 600 35 720 40C840 45 960 55 1080 57.5C1200 60 1320 55 1380 52.5L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="currentColor" className="text-white"/>
            </svg>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-outline-variant/30">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex justify-center gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-surface text-text-secondary hover:bg-surface-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight, index) => (
                <div
                  key={insight.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  onClick={() => setSelectedInsight(insight)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                      <span className="material-symbols-outlined text-base">calendar_today</span>
                      <span>{insight.date}</span>
                    </div>
                    
                    <h3 className="font-headline-sm text-xl text-primary mb-3 group-hover:text-tertiary transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed mb-4 line-clamp-2">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-tertiary rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <span className="material-symbols-outlined text-6xl text-secondary-fixed mb-6 inline-block">mail</span>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-4">
                  Subscribe to Market Updates
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Receive weekly market insights, analysis, and reports directly to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button className="bg-secondary-container text-primary px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-tertiary-container relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <h2 className="font-display-lg text-3xl md:text-5xl text-white mb-6">
              Need Custom <span className="text-secondary-fixed">Market Analysis?</span>
            </h2>
            <p className="font-body-lg text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Our expert team can provide tailored insights specific to your reinsurance needs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-primary px-10 py-5 rounded-xl font-semibold hover:bg-secondary hover:shadow-2xl transition-all"
            >
              <span>Request Custom Report</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Detail Modal */}
      {selectedInsight && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedInsight(null)}
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            <button
              className="fixed top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50"
              onClick={() => setSelectedInsight(null)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            
            <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-96">
                <img
                  src={selectedInsight.image}
                  alt={selectedInsight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
                  <span className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    {selectedInsight.category}
                  </span>
                  <h2 className="font-headline-lg text-3xl text-white">
                    {selectedInsight.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                  <span>{selectedInsight.date}</span>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {selectedInsight.excerpt}
                  </p>
                  
                  <p className="text-text-secondary leading-relaxed mt-4">
                    For detailed analysis and full report access, please contact our team or subscribe to our premium insights service.
                  </p>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-tertiary transition-all"
                  >
                    <span>Request Full Report</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <button
                    onClick={() => setSelectedInsight(null)}
                    className="inline-flex items-center gap-2 border-2 border-outline-variant text-text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-surface transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Insights;
