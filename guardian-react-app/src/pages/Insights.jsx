import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Insights = () => {
  const [selectedInsight, setSelectedInsight] = useState(null);

  const insights = [
    {
      id: 1,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.54 AM(1).jpeg',
      title: 'Q3 Market Analysis & Capacity Trends',
      date: 'September 2025',
      category: 'Market Report',
      excerpt: 'Comprehensive analysis of reinsurance market trends and capacity updates for regional cedants across East Africa.',
      fullContent: 'Our Q3 market analysis details the hardening of property treaty rates alongside abundant capacity in facultative marine and liability lines. Cedants that maintained transparent actuarial disclosures secured renewal terms up to 12% more favorable than the regional benchmark.'
    },
    {
      id: 2,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.54 AM.jpeg',
      title: 'Regional Risk Assessment: East Africa',
      date: 'September 2025',
      category: 'Risk Analysis',
      excerpt: 'Deep dive into emerging risks, regulatory shifts, and retention optimization in the Ugandan and Kenyan insurance markets.',
      fullContent: 'With updated regulatory capital guidelines from the Insurance Regulatory Authority, cedants must reassess their retention bands. Our analytical models demonstrate how structured quota shares buffer balance sheets while maintaining capital efficiency.'
    },
    {
      id: 3,
      image: '/images/insights/WhatsApp Image 2025-09-09 at 11.50.55 AM.jpeg',
      title: 'Global Reinsurance Capacity Outlook',
      date: 'September 2025',
      category: 'Market Report',
      excerpt: 'Forward-looking perspectives on global reinsurance capacity, Lloyd’s syndicates, and pricing trajectories.',
      fullContent: 'International reinsurers have reinforced capital reserves following global catastrophic events. Accessing AAA-rated capacity now requires manuscript wordings tailored to international compliance frameworks.'
    },
    {
      id: 4,
      image: '/images/insights/WhatsApp Image 2025-09-10 at 11.09.43 AM.jpeg',
      title: 'Claims Management & Recovery Protocols',
      date: 'September 2025',
      category: 'Best Practices',
      excerpt: 'Strategic approaches to accelerating reinsurance claims recovery and minimizing dispute friction.',
      fullContent: 'Examining the key drivers of reinsurance recovery disputes, this brief provides actionable checklists for document verification, notification timing, and multi-party claims adjustment.'
    },
    {
      id: 5,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.52 AM.jpeg',
      title: 'Annual Reinsurance Market Preview',
      date: 'January 2026',
      category: 'Market Report',
      excerpt: 'Key themes shaping the African and global reinsurance landscape for the upcoming renewal cycles.',
      fullContent: 'As economic recovery and infrastructure expansion gain momentum in East Africa, demand for specialized engineering and energy facultative facilities is projected to expand by over 18%.'
    },
    {
      id: 6,
      image: '/images/insights/WhatsApp Image 2026-01-28 at 8.50.53 AM.jpeg',
      title: 'Pricing Dynamics & Capital Optimization',
      date: 'January 2026',
      category: 'Analytics',
      excerpt: 'Quantitative breakdown of rate movements and capital adequacy implications for regional insurers.',
      fullContent: 'A detailed empirical analysis of how cedants can utilize excess-of-loss layering to protect underwriting capital while stabilizing net loss ratios.'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Market Report', 'Risk Analysis', 'Best Practices', 'Analytics'];

  const filteredInsights = activeCategory === 'All'
    ? insights
    : insights.filter((i) => i.category === activeCategory);

  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-28 pb-16 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pb-16">
          <div className="mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-charcoal-muted">
              RESEARCH & INTELLIGENCE • KAMPALA DESK
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-8">
              <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.08] tracking-tight">
                Market analytics & reinsurance intelligence.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                Authored by our technical broking and actuarial research team to help insurance executives navigate treaty renewals and market volatility.
              </p>
            </div>
          </div>

          {/* Filter Tabs - Sharp Rectilinear Buttons */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5E0D8]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-150 border ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                    : 'bg-white border-[#E5E0D8] text-charcoal-muted hover:text-charcoal hover:border-brand-navy/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INSIGHTS CARDS - Sharp Architectural Design */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedInsight(item)}
                className="bg-white border border-[#E5E0D8] flex flex-col justify-between cursor-pointer group shadow-sm hover:border-brand-navy hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-charcoal border-b border-[#E5E0D8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-charcoal-muted mb-2.5">
                      <span className="font-semibold text-brand-azure uppercase tracking-wider text-[11px]">
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="editorial-heading text-xl text-charcoal font-normal group-hover:text-brand-navy transition-colors mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-navy group-hover:text-brand-azure transition-colors">
                    <span>Read Analysis</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Article Reader - Sharp Architecture */}
        {selectedInsight && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedInsight(null)}
          >
            <div
              className="bg-white max-w-2xl w-full p-8 sm:p-10 border border-[#E5E0D8] shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedInsight(null)}
                className="absolute top-6 right-6 p-2 border border-[#E5E0D8] hover:bg-warm-card text-charcoal transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="mb-6">
                <span className="text-xs font-semibold text-brand-azure uppercase tracking-wider">
                  {selectedInsight.category} • {selectedInsight.date}
                </span>
                <h2 className="editorial-heading text-2xl sm:text-3xl text-charcoal font-normal mt-2 leading-tight">
                  {selectedInsight.title}
                </h2>
              </div>

              <div className="overflow-hidden mb-6 border border-[#E5E0D8]">
                <img
                  src={selectedInsight.image}
                  alt={selectedInsight.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-charcoal-muted leading-relaxed">
                <p className="font-medium text-charcoal">
                  {selectedInsight.excerpt}
                </p>
                <p>
                  {selectedInsight.fullContent}
                </p>
                <p>
                  For detailed technical briefings or custom exposure accumulation modeling, consult directly with our analytical practice group in Kampala.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex justify-end">
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="px-6 py-2.5 bg-brand-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-blue border border-brand-navy transition-colors shadow-sm"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Insights;
