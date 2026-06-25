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
      excerpt: 'Comprehensive analysis of reinsurance market trends and capacity updates for Q3 2025.',
      featured: true
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

  const featuredInsight = insights.find(insight => insight.featured);
  const regularInsights = filteredInsights.filter(insight => !insight.featured || activeCategory !== 'All');

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - More Compact and Modern */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-[#001a3d] to-[#00152e] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-transparent"></div>
            <img 
              src="/images/analytics.jpg" 
              alt="Market Insights" 
              className="w-full h-full object-cover opacity-15"
            />
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float"></div>
            <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-tertiary/20 rounded-full blur-[80px] animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 bg-secondary/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-secondary/30 mb-6" data-aos="fade-down">
                <span className="material-symbols-outlined text-secondary text-lg">insights</span>
                <span className="text-secondary-fixed text-xs font-bold uppercase tracking-[0.2em]">Market Intelligence</span>
              </div>
              
              <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight font-bold" data-aos="fade-up">
                Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#ffd700] to-[#ffed4e] font-bold">Insights</span>
              </h1>
              
              <p className="font-body-lg text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Expert analysis and strategic intelligence on the global reinsurance landscape
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">article</span>
                  <span>14 Reports</span>
                </div>
                <div className="w-px h-5 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">update</span>
                  <span>Weekly Updates</span>
                </div>
                <div className="w-px h-5 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">public</span>
                  <span>Global Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insight - Large Hero Card */}
        {activeCategory === 'All' && featuredInsight && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary to-tertiary rounded-full"></div>
                <h2 className="font-headline-lg text-2xl md:text-3xl text-primary">Featured Insight</h2>
              </div>
              
              <div 
                className="group relative bg-gradient-to-br from-surface to-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
                data-aos="fade-up"
                onClick={() => setSelectedInsight(featuredInsight)}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <img
                      src={featuredInsight.image}
                      alt={featuredInsight.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center gap-2 bg-secondary text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                        <span className="material-symbols-outlined text-sm">star</span>
                        {featuredInsight.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-4">
                      <span className="material-symbols-outlined text-base">schedule</span>
                      <span>{featuredInsight.date}</span>
                    </div>
                    
                    <h3 className="font-headline-lg text-3xl md:text-4xl text-primary mb-4 group-hover:text-tertiary transition-colors">
                      {featuredInsight.title}
                    </h3>
                    
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                      {featuredInsight.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      <span>Explore Insight</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filter Section - Improved Design */}
        <section className="py-8 bg-surface/50 border-y border-outline-variant/20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-text-secondary">filter_alt</span>
                <span className="text-text-secondary font-medium">Filter by category:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                      activeCategory === category
                        ? 'bg-primary text-white shadow-md scale-105'
                        : 'bg-white text-text-secondary hover:bg-surface-muted hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Grid - Masonry-style Layout */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            {regularInsights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularInsights.map((insight, index) => (
                  <div
                    key={insight.id}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={Math.min(index * 50, 300)}
                    onClick={() => setSelectedInsight(insight)}
                  >
                    {/* Image with Overlay */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-secondary/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                          {insight.category}
                        </span>
                      </div>
                      
                      {/* Hover Icon */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                        <span className="material-symbols-outlined text-white text-lg">arrow_outward</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                        <span>{insight.date}</span>
                      </div>
                      
                      <h3 className="font-headline-sm text-xl text-primary mb-3 line-clamp-2 group-hover:text-tertiary transition-colors leading-snug">
                        {insight.title}
                      </h3>
                      
                      <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
                        {insight.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <span className="material-symbols-outlined text-base">east</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-4xl text-text-secondary/40">search_off</span>
                </div>
                <h3 className="text-2xl text-text-secondary mb-2">No insights found</h3>
                <p className="text-text-secondary/70">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section - Improved */}
        <section className="py-20 bg-gradient-to-br from-surface via-white to-surface">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary via-[#002850] to-tertiary rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl text-secondary-fixed">mail</span>
                </div>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-4">
                  Never Miss an Insight
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Get weekly market intelligence, expert analysis, and exclusive reports delivered to your inbox
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 rounded-xl text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg"
                  />
                  <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary-fixed transition-all hover:shadow-xl whitespace-nowrap flex items-center justify-center gap-2">
                    <span>Subscribe</span>
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </div>
                
                <p className="text-white/50 text-xs mt-4">Join 500+ industry professionals receiving our insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Modernized */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-secondary/10 p-4 rounded-2xl mb-6">
                <span className="material-symbols-outlined text-5xl text-secondary">analytics</span>
              </div>
              <h2 className="font-display-lg text-3xl md:text-5xl text-primary mb-6">
                Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Custom Analysis?</span>
              </h2>
              <p className="font-body-lg text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                Our expert team provides tailored market insights and bespoke research specific to your reinsurance portfolio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-tertiary transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Request Custom Report</span>
                  <span className="material-symbols-outlined">trending_up</span>
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  <span>Learn About Our Team</span>
                  <span className="material-symbols-outlined">group</span>
                </Link>
              </div>
            </div>
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
