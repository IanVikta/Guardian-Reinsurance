import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const articles = [
  {
    id: 1,
    title: 'Beyond Risk Transfer: How Reinsurance is Building a More Resilient Africa',
    slug: 'reinsurance-outlook-african-continent',
    excerpt: 'The narrative around Africa is often dominated by its risks. But at Guardian Reinsurance, we see a different story—one of immense opportunity, innovation, and institutional resilience across the continent.',
    category: 'Industry Insights',
    author: 'Guardian Re Research Desk',
    date: 'June 15, 2026',
    readTime: '6 min read',
    image: '/images/hero-editorial.jpg',
    featured: true,
    tags: ['Africa', 'Market Analysis', 'Resilience', 'Economic Growth']
  },
  {
    id: 2,
    title: 'What is the Difference Between Facultative and Treaty Reinsurance?',
    slug: 'facultative-vs-treaty-reinsurance',
    excerpt: 'Facultative reinsurance is for individual, high-value specific risks negotiated slip-by-slip, while treaty reinsurance covers an entire underwriting portfolio automatically under long-term contract structures.',
    category: 'Educational',
    author: 'Technical Broking Desk',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: '/images/treaty.jpg',
    featured: false,
    tags: ['Facultative', 'Treaty', 'Underwriting', 'Education']
  },
  {
    id: 3,
    title: 'Sharing the Load: What Reinsurance Can Teach Us About Executive Mental Health',
    slug: 'reinsurance-mental-health-lessons',
    excerpt: 'We talk endlessly about financial resilience in business, but silence is often the default when it comes to executive well-being. How the mathematical principles of risk syndication apply to modern leadership.',
    category: 'Thought Leadership',
    author: 'Corporate Advisory Desk',
    date: 'April 10, 2026',
    readTime: '6 min read',
    image: '/images/consultant.jpg',
    featured: false,
    tags: ['Leadership', 'Workplace Wellbeing', 'Governance']
  },
  {
    id: 4,
    title: 'Overcoming Disruption in Health Requires Balance-Sheet Resilience',
    slug: 'world-aids-day-commitment',
    excerpt: 'Exploring how reinsurance mechanisms provide the liquidity needed to strengthen healthcare financing and protect primary health insurance schemes against shock claims.',
    category: 'Healthcare & CSR',
    author: 'Guardian Re Practice Group',
    date: 'December 1, 2025',
    readTime: '5 min read',
    image: '/images/accounting-desk.jpg',
    featured: false,
    tags: ['Healthcare', 'CSR', 'Sustainability', 'Social Impact']
  }
];

const categories = ['All', 'Industry Insights', 'Educational', 'Thought Leadership', 'Healthcare & CSR'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterTouched, setNewsletterTouched] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: articles.length };
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Search and category filter
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.author.toLowerCase().includes(q) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const isDefaultView = selectedCategory === 'All' && !searchQuery.trim();

  // Non-featured articles for the grid on default view, or all filtered articles
  const gridArticles = isDefaultView
    ? filteredArticles.filter((a) => !a.featured)
    : filteredArticles;

  const validateNewsletter = (email) => {
    if (!email.trim()) return 'Please enter your corporate email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return 'Please enter a valid email format (e.g., officer@company.com).';
    }
    return '';
  };

  const handleNewsletterChange = (e) => {
    const val = e.target.value;
    setNewsletterEmail(val);
    if (newsletterTouched) {
      setNewsletterError(validateNewsletter(val));
    }
  };

  const handleNewsletterBlur = () => {
    setNewsletterTouched(true);
    setNewsletterError(validateNewsletter(newsletterEmail));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterTouched(true);
    const err = validateNewsletter(newsletterEmail);
    setNewsletterError(err);

    if (!err) {
      setIsSubmittingNewsletter(true);
      setTimeout(() => {
        setIsSubmittingNewsletter(false);
        setNewsletterSubscribed(true);
        setNewsletterEmail('');
        setNewsletterError('');
        setNewsletterTouched(false);
        setTimeout(() => setNewsletterSubscribed(false), 6000);
      }, 500);
    }
  };

  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-28 pb-16 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION & INTEL SEARCH */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pb-16">
          <div className="mb-4" data-aos="fade-down">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-azure rounded-full animate-pulse"></span>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                PUBLICATIONS & PERSPECTIVES • KAMPALA DESK
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-8" data-aos="fade-right">
              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-charcoal font-normal leading-[1.08] tracking-tight">
                Perspectives on risk, capital & market trends.
              </h1>
            </div>
            <div className="lg:col-span-4" data-aos="fade-left" data-aos-delay="100">
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
                Technical commentaries, actuarial perspectives, and executive briefings authored by Guardian Re brokers and market analysts in Kampala.
              </p>
            </div>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="space-y-4 pt-6 border-t border-[#E5E0D8]" data-aos="fade-up" data-aos-delay="150">
            {/* Live Search Input */}
            <div className="relative max-w-xl">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-muted text-lg pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications, topics, or authors..."
                className="w-full pl-10 pr-10 py-3 bg-white border border-[#E5E0D8] text-sm text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-brand-navy shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-light hover:text-charcoal"
                  aria-label="Clear search"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-150 border ${
                    selectedCategory === cat
                      ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                      : 'bg-white border-[#E5E0D8] text-charcoal-muted hover:text-charcoal hover:border-brand-navy/40 shadow-2xs'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      selectedCategory === cat
                        ? 'bg-white/20 text-white'
                        : 'bg-[#FAF8F5] text-charcoal-muted'
                    }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. COVER STORY / FEATURED EDITORIAL SPOTLIGHT */}
        {/* ========================================================================= */}
        {isDefaultView && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" data-aos="fade-up">
            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="group relative bg-white border border-[#E5E0D8] hover:border-brand-azure/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-azure to-brand-cyan group-hover:h-1.5 transition-all duration-300 z-10"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Visual Framing */}
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden bg-charcoal">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Architectural Badge */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 border border-[#E5E0D8] border-l-4 border-l-brand-azure shadow-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-azure animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                      Featured Cover Story
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-charcoal-muted">
                      <span className="font-bold text-brand-azure uppercase tracking-wider text-[11px] px-2.5 py-0.5 bg-brand-ice border border-brand-azure/20">
                        {featuredArticle.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <span className="material-symbols-outlined text-xs">schedule</span>
                        {featuredArticle.readTime}
                      </span>
                      <span>•</span>
                      <span className="text-[11px]">{featuredArticle.date}</span>
                    </div>

                    <h2 className="editorial-heading text-2xl sm:text-3xl lg:text-[2rem] text-charcoal font-normal group-hover:text-brand-navy transition-colors leading-snug">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredArticle.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium text-charcoal-muted px-2 py-0.5 bg-[#FAF8F5] border border-[#E5E0D8]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Row */}
                  <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-charcoal">
                      <div className="w-7 h-7 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-[10px]">
                        GR
                      </div>
                      <span className="font-medium text-charcoal-muted text-[11px]">
                        {featuredArticle.author}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-navy group-hover:text-brand-azure group-hover:translate-x-1 transition-all">
                      <span>Read Analysis</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 3. ARTICLES ARCHITECTURAL GRID */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          {/* Section Sub-heading if on default view */}
          {isDefaultView && (
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5E0D8]" data-aos="fade-up">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                RECENT ANALYSES & TREATISES
              </span>
              <span className="text-xs text-charcoal-muted font-mono">
                {gridArticles.length} publications
              </span>
            </div>
          )}

          {/* Active Search / Category Indicator */}
          {!isDefaultView && (
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5E0D8]" data-aos="fade-up">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted block mb-1">
                  FILTERED RESULTS
                </span>
                <p className="text-sm text-charcoal font-medium">
                  Showing publications for <span className="text-brand-navy font-bold">"{selectedCategory}"</span>
                  {searchQuery && (
                    <> matching <span className="text-brand-azure font-bold">"{searchQuery}"</span></>
                  )}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold uppercase tracking-wider text-brand-navy hover:text-brand-azure flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">refresh</span>
                <span>Reset Filters</span>
              </button>
            </div>
          )}

          {/* Zero Results State */}
          {filteredArticles.length === 0 ? (
            <div className="bg-white border border-[#E5E0D8] p-12 text-center max-w-xl mx-auto my-12" data-aos="fade-up">
              <span className="material-symbols-outlined text-5xl text-charcoal-light mb-3">
                search_off
              </span>
              <h3 className="editorial-heading text-2xl text-charcoal font-normal mb-2">
                No publications match your criteria
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mb-6 leading-relaxed">
                We couldn't find any articles matching your search query. Try alternative terms or clear your filters to view all intelligence pieces.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue transition-colors shadow-sm"
              >
                View All Publications
              </button>
            </div>
          ) : (
            /* Standard Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative bg-white border border-[#E5E0D8] hover:border-brand-azure/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Glowing Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-azure to-brand-cyan group-hover:h-1.5 transition-all duration-300 z-10"></div>

                  <div>
                    {/* Visual Media Container */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-charcoal relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                      <div className="absolute bottom-3 left-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 bg-brand-navy/90 backdrop-blur-xs border border-white/20">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Body */}
                    <div className="p-7">
                      <div className="flex items-center justify-between text-xs text-charcoal-muted mb-3 font-mono text-[11px]">
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">schedule</span>
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="editorial-heading text-xl text-charcoal font-normal group-hover:text-brand-navy transition-colors mb-3 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>

                      {/* Micro Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F0ECE4]">
                        {article.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-medium text-charcoal-muted px-2 py-0.5 bg-[#FAF8F5] border border-[#E5E0D8]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-7 pb-6 pt-2 border-t border-[#FAF8F5] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-charcoal-muted">
                      {article.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy group-hover:text-brand-azure group-hover:translate-x-1 transition-all">
                      <span>Read</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 4. THE GUARDIAN RE BRIEFING (EXECUTIVE NEWSLETTER DOCKET) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-aos="fade-up">
          <div className="p-8 sm:p-12 lg:p-14 border border-[#E5E0D8] bg-[#F4F1EA] shadow-sm relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-azure to-brand-cyan"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-azure"></span>
                  <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
                    INSTITUTIONAL INTELLIGENCE
                  </span>
                </div>

                <h2 className="editorial-heading text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
                  Subscribe to The Guardian Re Reinsurance Briefing
                </h2>

                <p className="text-sm text-charcoal-muted leading-relaxed font-light max-w-xl">
                  Receive quarterly treaty market reviews, regulatory circular analyses from IRA Uganda, and reinsurance syndicate commentary directly in your inbox.
                </p>

                <div className="flex items-center gap-6 pt-2 text-xs text-charcoal-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-brand-azure text-base">verified</span>
                    <span>Quarterly Digest</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-brand-azure text-base">lock</span>
                    <span>Zero Spam • Strictly Institutional</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                {newsletterSubscribed ? (
                  <div className="bg-white p-6 border border-[#E5E0D8] border-l-4 border-l-emerald-600 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>Subscription Registered</span>
                    </div>
                    <p className="text-xs text-charcoal-muted">
                      Thank you. You will receive our next quarterly reinsurance intelligence brief.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={handleNewsletterChange}
                        onBlur={handleNewsletterBlur}
                        placeholder="Enter corporate email address..."
                        className={`flex-1 px-4 py-3.5 bg-white border text-sm text-charcoal placeholder:text-charcoal-light focus:outline-none transition-colors shadow-sm ${
                          newsletterTouched && newsletterError
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E5E0D8] focus:border-brand-navy'
                        }`}
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingNewsletter}
                        className="px-6 py-3.5 bg-brand-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-blue border border-brand-navy transition-all shadow-sm shrink-0 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmittingNewsletter ? (
                          <>
                            <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <span>Subscribe</span>
                        )}
                      </button>
                    </div>
                    {newsletterTouched && newsletterError ? (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs">error</span>
                        <span>{newsletterError}</span>
                      </p>
                    ) : (
                      <p className="text-[11px] text-charcoal-light">
                        By subscribing, you agree to receive institutional publications from Guardian Reinsurance Brokers.
                      </p>
                    )}
                  </form>
                )}
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
