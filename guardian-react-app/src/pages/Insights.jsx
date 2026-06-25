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
      featured: true,
      readTime: '5 min',
      trending: true
    },
    {
      id: 2,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.54 AM.jpeg',
      title: 'Regional Risk Assessment',
      date: 'September 9, 2025',
      category: 'Risk Analysis',
      excerpt: 'Deep dive into emerging risks and opportunities in East African reinsurance markets.',
      readTime: '4 min'
    },
    {
      id: 3,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.55 AM.jpeg',
      title: 'Industry Outlook Update',
      date: 'September 9, 2025',
      category: 'Market Report',
      excerpt: 'Forward-looking perspectives on global reinsurance capacity and pricing trends.',
      readTime: '6 min'
    },
    {
      id: 4,
      image: '/images/insights/WhatsApp Image 2025-09-10 at 11.09.43 AM.jpeg',
      title: 'Claims Management Insights',
      date: 'September 10, 2025',
      category: 'Best Practices',
      excerpt: 'Strategic approaches to optimizing claims recovery and management processes.',
      readTime: '5 min'
    },
    {
      id: 5,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.52 AM.jpeg',
      title: '2026 Market Preview',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Key trends shaping the reinsurance landscape in 2026 and beyond.',
      readTime: '7 min'
    },
    {
      id: 6,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.53 AM.jpeg',
      title: 'Capacity Trends Analysis',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Current capacity availability and pricing dynamics across major markets.',
      readTime: '5 min'
    },
    {
      id: 7,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.54 AM(1).jpeg',
      title: 'Treaty Renewal Strategies',
      date: 'January 28, 2026',
      category: 'Best Practices',
      excerpt: 'Effective strategies for navigating treaty renewals in a hardening market.',
      readTime: '6 min'
    },
    {
      id: 8,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.54 AM(2).jpeg',
      title: 'Facultative Market Update',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Latest developments in facultative reinsurance placement and pricing.',
      readTime: '4 min'
    },
    {
      id: 9,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.54 AM.jpeg',
      title: 'Regulatory Changes Impact',
      date: 'January 28, 2026',
      category: 'Risk Analysis',
      excerpt: 'How new regulations are reshaping reinsurance operations and compliance.',
      readTime: '8 min'
    },
    {
      id: 10,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.55 AM(1).jpeg',
      title: 'Technology in Reinsurance',
      date: 'January 28, 2026',
      category: 'Innovation',
      excerpt: 'Digital transformation and its impact on reinsurance broking efficiency.',
      readTime: '6 min'
    },
    {
      id: 11,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.55 AM(2).jpeg',
      title: 'Climate Risk Assessment',
      date: 'January 28, 2026',
      category: 'Risk Analysis',
      excerpt: 'Understanding and managing climate-related risks in reinsurance portfolios.',
      readTime: '7 min'
    },
    {
      id: 12,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.55 AM.jpeg',
      title: 'Global Market Dynamics',
      date: 'January 28, 2026',
      category: 'Market Report',
      excerpt: 'Cross-border reinsurance trends and international market opportunities.',
      readTime: '5 min'
    },
    {
      id: 13,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.56 AM(1).jpeg',
      title: 'Performance Metrics Review',
      date: 'January 28, 2026',
      category: 'Analytics',
      excerpt: 'Key performance indicators and benchmarks for reinsurance success.',
      readTime: '6 min'
    },
    {
      id: 14,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.56 AM.jpeg',
      title: 'Strategic Partnership Models',
      date: 'January 28, 2026',
      category: 'Best Practices',
      excerpt: 'Building effective partnerships between cedants and reinsurers.',
      readTime: '5 min'
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
      
      <main className="pt-20 bg-gradient-to-b from-surface to-white">
        {/* Hero Section - Dashboard Style with Stats */}
        <section className="relative py-12 bg-white border-b border-outline-variant/20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left: Title & Description */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg mb-4">
                  <span className="material-symbols-outlined text-secondary text-sm">bar_chart</span>
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">Market Intelligence</span>
                </div>
                
                <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-primary mb-4 leading-tight font-bold">
                  Market <span className="text-secondary">Insights</span>
                </h1>
                
                <p className="text-text-secondary text-lg mb-6 leading-relaxed max-w-2xl">
                  Data-driven analysis and strategic intelligence powering smarter reinsurance decisions
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-text-secondary">14 Reports</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                    <span className="text-text-secondary">Weekly Updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text-secondary">Global Coverage</span>
                  </div>
                </div>
              </div>

              {/* Right: Stats Cards */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary to-tertiary p-6 rounded-2xl text-white">
                    <div className="text-4xl font-bold mb-1">{insights.length}</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Total Insights</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary to-[#ffd700] p-6 rounded-2xl text-primary">
                    <div className="text-4xl font-bold mb-1">{categories.length - 1}</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Categories</div>
                  </div>
                  <div className="bg-surface border border-outline-variant/30 p-6 rounded-2xl col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Latest Report</div>
                        <div className="text-xs text-text-secondary">Updated 2 days ago</div>
                      </div>
                      <span className="material-symbols-outlined text-4xl text-secondary">trending_up</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs - Dashboard Style */}
        <section className="py-6 bg-white border-b-2 border-outline-variant/10 sticky top-20 z-40 backdrop-blur-md bg-white/95">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-surface text-text-secondary hover:bg-surface-muted border border-outline-variant/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Insight - Horizontal Card */}
        {selectedCategory === 'All' && featuredInsight && (
          <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-secondary text-xl">emoji_events</span>
                <h2 className="font-headline-lg text-xl text-primary font-bold">Featured Analysis</h2>
                {featuredInsight.trending && (
                  <span className="ml-2 inline-flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    <span className="material-symbols-outlined text-xs">local_fire_department</span>
                    Trending
                  </span>
                )}
              </div>
              
              <div 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-secondary/20"
                onClick={() => setSelectedInsight(featuredInsight)}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredInsight.image}
                      alt={featuredInsight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                        {featuredInsight.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 p-8 flex flex-col justify-center">
                    <h3 className="font-headline-lg text-2xl md:text-3xl text-primary mb-3 group-hover:text-tertiary transition-colors">
                      {featuredInsight.title}
                    </h3>
                    
                    <p className="text-text-secondary text-base leading-relaxed mb-4">
                      {featuredInsight.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-xs text-text-secondary mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                        <span>{featuredInsight.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{featuredInsight.readTime} read</span>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                      <span>View Full Report</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Insights Grid - Card Style with Metrics */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            {regularInsights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {regularInsights.map((insight, index) => (
                  <div
                    key={insight.id}
                    className="group relative bg-white rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={Math.min(index * 30, 200)}
                    onClick={() => setSelectedInsight(insight)}
                  >
                    {/* Image with Category Overlay */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-secondary/90 backdrop-blur-sm text-primary text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                          {insight.category}
                        </span>
                      </div>

                      {/* Read Time Badge */}
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/20 backdrop-blur-md rounded-md px-2 py-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-white text-xs">schedule</span>
                          <span className="text-white text-xs font-semibold">{insight.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-headline-sm text-base text-primary mb-2 line-clamp-2 group-hover:text-tertiary transition-colors leading-tight min-h-[2.5rem]">
                        {insight.title}
                      </h3>
                      
                      <p className="text-text-secondary text-xs leading-relaxed line-clamp-2 mb-3 min-h-[2.5rem]">
                        {insight.excerpt}
                      </p>

                      {/* Meta Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
                        <div className="flex items-center gap-1 text-xs text-text-secondary">
                          <span className="material-symbols-outlined text-sm">calendar_month</span>
                          <span>{new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-semibold text-xs group-hover:gap-2 transition-all">
                          <span>View</span>
                          <span className="material-symbols-outlined text-sm">east</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-4xl text-text-secondary/40">search_off</span>
                </div>
                <h3 className="text-2xl text-text-secondary mb-2 font-semibold">No insights found</h3>
                <p className="text-text-secondary/70 mb-6">Try selecting a different category</p>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary transition-all"
                >
                  <span className="material-symbols-outlined">refresh</span>
                  <span>View All Insights</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section - Data Dashboard Style */}
        <section className="py-16 bg-gradient-to-br from-primary via-[#00234a] to-tertiary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(252,212,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(252,212,0,0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-lg mb-4">
                  <span className="material-symbols-outlined text-secondary text-lg">psychology</span>
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">Custom Research</span>
                </div>
                <h2 className="font-display-lg text-3xl md:text-4xl text-white mb-4 font-bold">
                  Need Tailored <span className="text-secondary">Market Analysis?</span>
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Our research team delivers bespoke intelligence specific to your reinsurance portfolio and strategic objectives
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-3 rounded-lg font-bold hover:bg-secondary-fixed transition-all"
                  >
                    <span>Request Research</span>
                    <span className="material-symbols-outlined">science</span>
                  </Link>
                  <Link 
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    <span>Our Expertise</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-2 block">assignment</span>
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Custom Reports</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-2 block">groups</span>
                  <div className="text-2xl font-bold text-white mb-1">200+</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Clients Served</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 col-span-2">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-2 block">workspace_premium</span>
                  <div className="text-2xl font-bold text-white mb-1">Expert Analysis</div>
                  <div className="text-xs text-white/70">Powered by 20+ years of industry experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Detail Modal - Same as before */}
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
