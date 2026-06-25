import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Blog articles data - Content to be filled from Word documents
  const articles = [
    {
      id: 1,
      title: 'Thought Leadership: Reinsurance Outlook on the African Continent',
      slug: 'reinsurance-outlook-african-continent',
      excerpt: 'An in-depth analysis of the reinsurance landscape across Africa, exploring emerging opportunities, challenges, and the future of risk transfer on the continent.',
      category: 'Industry Insights',
      author: 'Guardian Reinsurance Team',
      date: 'June 15, 2026',
      readTime: '8 min read',
      image: '/images/expertise.jpg',
      featured: true,
      tags: ['Africa', 'Market Analysis', 'Industry Trends']
    },
    {
      id: 2,
      title: 'What is the Difference Between Facultative and Treaty Reinsurance?',
      slug: 'facultative-vs-treaty-reinsurance',
      excerpt: 'A comprehensive guide explaining the key differences between facultative and treaty reinsurance, helping you understand which approach best suits your risk management needs.',
      category: 'Educational',
      author: 'Guardian Reinsurance Team',
      date: 'May 28, 2026',
      readTime: '6 min read',
      image: '/images/treaty.jpg',
      featured: false,
      tags: ['Facultative', 'Treaty', 'Education']
    },
    {
      id: 3,
      title: 'What Reinsurance Teaches Us About Mental Health',
      slug: 'reinsurance-mental-health-lessons',
      excerpt: 'Exploring the unexpected parallels between reinsurance risk management principles and mental health resilience strategies.',
      category: 'Thought Leadership',
      author: 'Guardian Reinsurance Team',
      date: 'April 10, 2026',
      readTime: '5 min read',
      image: '/images/consultant.jpg',
      featured: false,
      tags: ['Mental Health', 'Risk Management', 'Wellness']
    },
    {
      id: 4,
      title: 'World AIDS Day: Our Commitment to Social Responsibility',
      slug: 'world-aids-day-commitment',
      excerpt: 'Reflecting on our corporate social responsibility initiatives and how Guardian Reinsurance supports health awareness and community well-being.',
      category: 'Corporate Social Responsibility',
      author: 'Guardian Reinsurance Team',
      date: 'December 1, 2025',
      readTime: '4 min read',
      image: '/images/global-connectivity.jpg',
      featured: false,
      tags: ['CSR', 'Health', 'Community']
    },
    {
      id: 5,
      title: 'LinkedIn Best Practices for Reinsurance Professionals',
      slug: 'linkedin-best-practices',
      excerpt: 'Professional networking strategies and content sharing tips tailored for reinsurance industry professionals on LinkedIn.',
      category: 'Professional Development',
      author: 'Guardian Reinsurance Team',
      date: 'March 20, 2026',
      readTime: '5 min read',
      image: '/images/strategic-analysis.jpg',
      featured: false,
      tags: ['LinkedIn', 'Networking', 'Professional Growth']
    }
  ];

  const categories = [
    'All',
    'Industry Insights',
    'Educational',
    'Thought Leadership',
    'Corporate Social Responsibility',
    'Professional Development'
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured || selectedCategory !== 'All');

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
              alt="Blog & Articles" 
              className="w-full h-full object-cover opacity-25 animate-slow-zoom"
            />
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-tertiary/15 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-secondary/40 shadow-2xl mb-6" data-aos="fade-down">
                <span className="material-symbols-outlined text-secondary-fixed">article</span>
                <span className="text-white text-xs font-bold uppercase tracking-[0.25em]">Blog & Articles</span>
              </div>
              
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]" data-aos="fade-up">
                Insights &
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-fixed to-[#d4a700]">
                  Thought Leadership
                </span>
              </h1>
              
              <p className="font-body-lg text-lg md:text-xl text-white/75 mb-10 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Expert perspectives, industry analysis, and educational content from Guardian Reinsurance Brokers.
              </p>

              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-secondary-fixed mb-1">{articles.length}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Articles</div>
                </div>
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-secondary-fixed mb-1">{categories.length - 1}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Categories</div>
                </div>
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-secondary-fixed mb-1">Weekly</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Updates</div>
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

        {/* Featured Article */}
        {selectedCategory === 'All' && featuredArticle && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-secondary text-2xl">star</span>
                <h2 className="font-headline-lg text-2xl text-primary">Featured Article</h2>
              </div>
              
              <Link 
                to={`/blog/${featuredArticle.slug}`}
                className="group block bg-gradient-to-br from-surface to-surface-muted rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="inline-block bg-secondary text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block text-secondary font-semibold text-sm mb-4">
                      {featuredArticle.category}
                    </span>
                    
                    <h3 className="font-headline-lg text-3xl md:text-4xl text-primary mb-4 group-hover:text-tertiary transition-colors">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-text-secondary mb-6">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">person</span>
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Read Full Article</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-12 bg-surface border-y border-outline-variant/30">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex justify-center gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-text-secondary hover:bg-surface-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            {regularArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-secondary/90 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-headline-sm text-xl text-primary mb-3 group-hover:text-tertiary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">calendar_today</span>
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-6xl text-text-secondary/30 mb-4 inline-block">search_off</span>
                <h3 className="text-2xl text-text-secondary mb-2">No articles found</h3>
                <p className="text-text-secondary/70">Try selecting a different category</p>
              </div>
            )}
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
                  Subscribe to Our Blog
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Get the latest articles, insights, and industry updates delivered directly to your inbox.
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
              Need Expert <span className="text-secondary-fixed">Reinsurance Advice?</span>
            </h2>
            <p className="font-body-lg text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Our team is ready to provide tailored solutions for your reinsurance needs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-primary px-10 py-5 rounded-xl font-semibold hover:bg-secondary hover:shadow-2xl transition-all"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
