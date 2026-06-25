import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'Beyond Risk Transfer: How Reinsurance is Building a More Resilient Africa',
      slug: 'reinsurance-outlook-african-continent',
      excerpt: 'The narrative around Africa is often dominated by its risks. But at Guardian Reinsurance, we see a different story—one of immense opportunity, innovation, and resilience.',
      category: 'Industry Insights',
      author: 'Guardian Reinsurance Team',
      date: 'June 15, 2026',
      readTime: '6 min read',
      image: '/images/expertise.jpg',
      featured: true,
      tags: ['Africa', 'Market Analysis', 'Resilience']
    },
    {
      id: 2,
      title: 'What is the Difference Between Facultative and Treaty Reinsurance?',
      slug: 'facultative-vs-treaty-reinsurance',
      excerpt: 'Facultative reinsurance is for individual, specific risks negotiated one by one, while treaty reinsurance covers a whole portfolio of risks automatically.',
      category: 'Educational',
      author: 'Guardian Reinsurance Team',
      date: 'May 28, 2026',
      readTime: '5 min read',
      image: '/images/treaty.jpg',
      featured: false,
      tags: ['Facultative', 'Treaty', 'Education']
    },
    {
      id: 3,
      title: 'Sharing the Load: What Reinsurance Can Teach Us About Men\'s Mental Health at Work',
      slug: 'reinsurance-mental-health-lessons',
      excerpt: 'We talk a lot about resilience in business, but silence is still the default when it comes to men\'s mental health. Learn how the principle of risk sharing can transform workplace wellbeing.',
      category: 'Thought Leadership',
      author: 'Guardian Reinsurance Team',
      date: 'April 10, 2026',
      readTime: '6 min read',
      image: '/images/consultant.jpg',
      featured: false,
      tags: ['Mental Health', 'Workplace Wellbeing', 'Leadership']
    },
    {
      id: 4,
      title: 'Overcoming Disruption in Health Requires Financial Resilience',
      slug: 'world-aids-day-commitment',
      excerpt: 'This World AIDS Day, we explore how reinsurance provides the financial resilience needed to transform the AIDS response and build sustainable health systems.',
      category: 'Corporate Social Responsibility',
      author: 'Guardian Reinsurance Team',
      date: 'December 1, 2025',
      readTime: '5 min read',
      image: '/images/global-connectivity.jpg',
      featured: false,
      tags: ['CSR', 'Health', 'World AIDS Day']
    },
    {
      id: 5,
      title: 'LinkedIn Content Strategy for African Reinsurance: Best Practices That Drive Engagement',
      slug: 'linkedin-best-practices',
      excerpt: 'A comprehensive guide to building thought leadership on LinkedIn for African reinsurance professionals—from data-driven posts to engagement strategies.',
      category: 'Professional Development',
      author: 'Guardian Reinsurance Team',
      date: 'March 20, 2026',
      readTime: '8 min read',
      image: '/images/strategic-analysis.jpg',
      featured: false,
      tags: ['LinkedIn', 'Content Strategy', 'B2B Marketing', 'Thought Leadership']
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
        {/* Hero Section - Modern & Clean */}
        <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary via-[#001d42] to-[#001528] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-transparent"></div>
            <img 
              src="/images/analytics.jpg" 
              alt="Blog" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="absolute inset-0">
            <div className="absolute top-20 right-[-5%] w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-float"></div>
            <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-tertiary/15 rounded-full blur-[90px] animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 bg-secondary/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-secondary/30 mb-6" data-aos="fade-down">
                <span className="material-symbols-outlined text-secondary text-lg">edit_note</span>
                <span className="text-secondary-fixed text-xs font-bold uppercase tracking-[0.2em]">Blog & Articles</span>
              </div>
              
              <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight font-bold" data-aos="fade-up">
                Thought <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#ffd700] to-[#ffed4e] font-bold">Leadership</span>
              </h1>
              
              <p className="font-body-lg text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Expert perspectives and insights on reinsurance, risk management, and the evolving insurance landscape
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">article</span>
                  <span>{articles.length} Articles</span>
                </div>
                <div className="w-px h-5 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">category</span>
                  <span>{categories.length - 1} Topics</span>
                </div>
                <div className="w-px h-5 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">update</span>
                  <span>Weekly Updates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article - Hero Style */}
        {selectedCategory === 'All' && featuredArticle && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary to-tertiary rounded-full"></div>
                <h2 className="font-headline-lg text-2xl md:text-3xl text-primary">Featured Article</h2>
              </div>
              
              <Link 
                to={`/blog/${featuredArticle.slug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-outline-variant/20"
                data-aos="fade-up"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section - 3 columns */}
                  <div className="relative h-96 lg:h-auto lg:col-span-3 overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center gap-2 bg-secondary text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                        <span className="material-symbols-outlined text-sm">star</span>
                        Featured
                      </span>
                    </div>

                    {/* Category on Image */}
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/30">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section - 2 columns */}
                  <div className="p-8 lg:p-10 lg:col-span-2 flex flex-col justify-center">
                    <h3 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary mb-4 group-hover:text-tertiary transition-colors leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary mb-6 pb-6 border-b border-outline-variant/30">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">person</span>
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-md font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                      <span>Continue Reading</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Category Filter - Improved */}
        <section className="py-8 bg-surface/50 border-y border-outline-variant/20 sticky top-20 z-40 backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-text-secondary text-lg">filter_list</span>
                <span className="text-text-secondary font-medium text-sm">Filter:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium text-xs transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-md scale-105'
                        : 'bg-white text-text-secondary hover:bg-white/80 hover:scale-105 border border-outline-variant/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid - Modern Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            {regularArticles.length > 0 ? (
              <>
                {selectedCategory !== 'All' && (
                  <div className="mb-8">
                    <p className="text-text-secondary">
                      Showing <span className="font-semibold text-primary">{regularArticles.length}</span> {regularArticles.length === 1 ? 'article' : 'articles'} in <span className="font-semibold">{selectedCategory}</span>
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularArticles.map((article, index) => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.slug}`}
                      className="group relative bg-white rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      data-aos="fade-up"
                      data-aos-delay={Math.min(index * 50, 300)}
                    >
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-secondary/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                            {article.category}
                          </span>
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                          <span className="material-symbols-outlined text-white text-lg">arrow_outward</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-text-secondary mb-3">
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                            <span>{article.date}</span>
                          </div>
                          <span className="text-outline-variant">•</span>
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-headline-sm text-xl text-primary mb-3 line-clamp-2 group-hover:text-tertiary transition-colors leading-snug min-h-[3.5rem]">
                          {article.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4 min-h-[4rem]">
                          {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-surface text-text-secondary px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all pt-4 border-t border-outline-variant/20">
                          <span>Read Article</span>
                          <span className="material-symbols-outlined text-base">east</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-4xl text-text-secondary/40">search_off</span>
                </div>
                <h3 className="text-2xl text-text-secondary mb-2">No articles found</h3>
                <p className="text-text-secondary/70 mb-6">Try selecting a different category</p>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary transition-all"
                >
                  <span className="material-symbols-outlined">refresh</span>
                  <span>View All Articles</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section - Modern */}
        <section className="py-20 bg-gradient-to-br from-surface via-white to-surface">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary via-[#002850] to-tertiary rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl text-secondary-fixed">notifications_active</span>
                </div>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-4">
                  Never Miss an Update
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Subscribe to receive our latest articles, industry insights, and expert analysis delivered to your inbox
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
                
                <p className="text-white/50 text-xs mt-4">Join 1,000+ professionals in the reinsurance industry</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-secondary/10 p-4 rounded-2xl mb-6">
                <span className="material-symbols-outlined text-5xl text-secondary">groups</span>
              </div>
              <h2 className="font-display-lg text-3xl md:text-5xl text-primary mb-6">
                Have a Topic <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">You'd Like Us to Cover?</span>
              </h2>
              <p className="font-body-lg text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                We're always looking for relevant topics that matter to reinsurance professionals. Share your suggestions with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-tertiary transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Contact Us</span>
                  <span className="material-symbols-outlined">forum</span>
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  <span>About Our Team</span>
                  <span className="material-symbols-outlined">info</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
