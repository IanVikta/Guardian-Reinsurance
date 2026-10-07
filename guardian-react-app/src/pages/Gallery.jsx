import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/WhatsApp Image 2026-02-10 at 2.58.35 PM.jpeg',
      title: 'FANAF 48th Annual Assembly',
      location: 'Abidjan, Côte d’Ivoire',
      category: 'Assemblies'
    },
    {
      id: 2,
      src: '/images/gallery/IMG_7272.jpg',
      title: 'Executive Syndicate Consultation',
      location: 'Continental Re & WAICA Re Session',
      category: 'Assemblies'
    },
    {
      id: 3,
      src: '/images/gallery/IMG_7142.jpg',
      title: '52nd AIO Reinsurance Assembly',
      location: 'Ghana Re & Sanlam Allianz Forum',
      category: 'Assemblies'
    },
    {
      id: 4,
      src: '/images/gallery/WhatsApp Image 2025-09-19 at 1.22.59 PM (1).jpeg',
      title: 'Strategic Portfolio Review',
      location: 'Kampala Headquarters',
      category: 'Office'
    },
    {
      id: 5,
      src: '/images/gallery/WhatsApp Image 2025-09-19 at 1.23.00 PM(1).jpeg',
      title: 'Underwriting Working Group',
      location: 'Executive Suite, Kampala',
      category: 'Office'
    },
    {
      id: 6,
      src: '/images/gallery/WhatsApp Image 2025-10-01 at 10.21.08 AM (3).jpeg',
      title: 'Regional Industry Conference',
      location: 'East Africa Risk Summit',
      category: 'Assemblies'
    },
    {
      id: 7,
      src: '/images/gallery/WhatsApp Image 2026-02-10 at 2.58.36 PM (1).jpeg',
      title: 'Treaty Broking Delegation',
      location: 'International Assembly',
      category: 'Assemblies'
    },
    {
      id: 8,
      src: '/images/gallery/WhatsApp Image 2026-02-10 at 2.58.36 PM.jpeg',
      title: 'Reinsurance Market Dinner',
      location: 'African Insurance Organisation',
      category: 'Events'
    },
    {
      id: 9,
      src: '/images/gallery/WhatsApp Image 2026-03-24 at 3.56.32 PM (3).jpeg',
      title: 'Team Capacity Workshop',
      location: 'Kampala Office',
      category: 'Office'
    },
    {
      id: 10,
      src: '/images/gallery/IMG_7151.jpg',
      title: 'Cedant Partnership Dialogue',
      location: 'AIO Networking Forum',
      category: 'Assemblies'
    },
    {
      id: 11,
      src: '/images/gallery/IMG_7155.jpg',
      title: 'Industry Stakeholder Reception',
      location: 'Annual Reinsurance Gala',
      category: 'Events'
    },
    {
      id: 12,
      src: '/images/gallery/IMG_7185.jpg',
      title: 'Treaty Slip Signing',
      location: 'Syndicate Council',
      category: 'Events'
    },
    {
      id: 13,
      src: '/images/gallery/IMG_7279.jpg',
      title: 'Technical Broking Desk Session',
      location: 'Executive Room, Kampala',
      category: 'Office'
    },
    {
      id: 14,
      src: '/images/gallery/IMG_7818.jpg',
      title: 'Annual Corporate Milestone',
      location: 'Kampala Corporate Gathering',
      category: 'Events'
    }
  ];

  const filterTabs = [
    { id: 'All', label: 'All Engagements' },
    { id: 'Assemblies', label: 'Assemblies' },
    { id: 'Events', label: 'Receptions & Forums' },
    { id: 'Office', label: 'Kampala Office' }
  ];

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
    }
  }, [selectedIndex, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [selectedIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  const currentItem = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <>
      <Header />

      <main className="pt-24 lg:pt-28 pb-20 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* CLEAN, MINIMAL HEADER */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
          <div className="max-w-3xl">
            <h1 className="editorial-heading text-4xl sm:text-5xl text-charcoal font-normal tracking-tight mb-4">
              Industry Delegations & Engagements
            </h1>
            <p className="text-base text-charcoal-muted font-light leading-relaxed">
              Photographic records from our participation in Pan-African reinsurance assemblies, bilateral syndicate sessions, and Kampala operations.
            </p>
          </div>

          {/* Minimal Text Filter Tabs - Touch Friendly Horizontal Scroll on Mobile */}
          <div className="flex items-center gap-5 sm:gap-8 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#E5E0D8] overflow-x-auto whitespace-nowrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs uppercase tracking-wider transition-colors pb-2 -mb-px border-b-2 font-mono shrink-0 ${
                  activeFilter === tab.id
                    ? 'border-brand-navy text-brand-navy font-semibold'
                    : 'border-transparent text-charcoal-muted hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CLEAN GALLERY GRID */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer"
              >
                {/* Photo Frame */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#121824]/5 border border-[#E5E0D8] group-hover:border-charcoal/40 transition-colors">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Clean, Restrained Caption */}
                <div className="pt-3.5 space-y-1">
                  <h3 className="editorial-heading text-lg sm:text-xl text-charcoal font-normal group-hover:text-brand-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted font-light">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MINIMAL LIGHTBOX MODAL */}
        {/* ========================================================================= */}
        {currentItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full bg-white border border-[#E5E0D8] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="px-5 py-3 border-b border-[#E5E0D8] flex items-center justify-between text-xs text-charcoal-muted font-mono">
                <span>
                  {selectedIndex + 1} / {filteredImages.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevImage}
                    className="p-1 hover:text-charcoal transition-colors"
                    title="Previous"
                  >
                    <span className="material-symbols-outlined text-lg block">chevron_left</span>
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-1 hover:text-charcoal transition-colors"
                    title="Next"
                  >
                    <span className="material-symbols-outlined text-lg block">chevron_right</span>
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="p-1 hover:text-charcoal transition-colors ml-2"
                    title="Close"
                  >
                    <span className="material-symbols-outlined text-lg block">close</span>
                  </button>
                </div>
              </div>

              {/* Photo Display */}
              <div className="bg-[#121824] flex items-center justify-center p-2 flex-grow min-h-[300px]">
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Caption */}
              <div className="p-5 bg-white border-t border-[#E5E0D8]">
                <h3 className="editorial-heading text-xl text-charcoal font-normal mb-1">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-charcoal-muted font-light">
                  {currentItem.location}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
