import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/WhatsApp Image 2025-09-19 at 1.22.59 PM (1).jpeg',
      title: 'Team Collaboration',
      category: 'Events'
    },
    {
      id: 2,
      src: '/images/gallery/WhatsApp Image 2025-09-19 at 1.23.00 PM(1).jpeg',
      title: 'Professional Meeting',
      category: 'Events'
    },
    {
      id: 3,
      src: '/images/gallery/WhatsApp Image 2025-10-01 at 10.21.08 AM (3).jpeg',
      title: 'Industry Conference',
      category: 'Events'
    },
    {
      id: 4,
      src: '/images/gallery/WhatsApp Image 2026-02-10 at 2.58.35 PM.jpeg',
      title: 'Strategic Planning',
      category: 'Office'
    },
    {
      id: 5,
      src: '/images/gallery/WhatsApp Image 2026-02-10 at 2.58.36 PM (1).jpeg',
      title: 'Team Workshop',
      category: 'Office'
    },
    {
      id: 6,
      src: '/images/gallery/WhatsApp Image 2026-02-10 at 2.58.36 PM.jpeg',
      title: 'Client Engagement',
      category: 'Office'
    },
    {
      id: 7,
      src: '/images/gallery/WhatsApp Image 2026-03-24 at 3.56.32 PM (3).jpeg',
      title: 'Team Building',
      category: 'Events'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Events', 'Office'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-[#001636] to-tertiary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-tertiary/85"></div>
            <img 
              src="/images/expertise.jpg" 
              alt="Gallery" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-2xl px-5 py-2 rounded-full border border-secondary/30 shadow-xl mb-6" data-aos="fade-down">
                <span className="material-symbols-outlined text-secondary-fixed">photo_library</span>
                <span className="text-secondary-fixed text-xs font-semibold uppercase tracking-[0.2em]">Gallery</span>
              </div>
              
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold" data-aos="fade-up">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-fixed to-secondary font-bold">Journey</span> in Pictures
              </h1>
              
              <p className="font-body-lg text-lg md:text-xl text-white/70 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Capturing moments of excellence, collaboration, and growth at Guardian Reinsurance Brokers.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-outline-variant/30">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeFilter === category
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

        {/* Gallery Grid */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block text-xs font-semibold text-secondary-fixed mb-2 uppercase tracking-wider">
                        {image.category}
                      </span>
                      <h3 className="text-white font-headline-sm text-xl">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white text-lg">zoom_in</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-tertiary-container relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
            <h2 className="font-display-lg text-3xl md:text-5xl text-white mb-6">
              Join Our <span className="text-secondary-fixed">Success Story</span>
            </h2>
            <p className="font-body-lg text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Partner with Guardian Reinsurance for innovative solutions and exceptional service.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-primary px-10 py-5 rounded-xl font-semibold hover:bg-secondary hover:shadow-2xl transition-all"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <span className="inline-block text-xs font-semibold text-secondary-fixed mb-2 uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-white font-headline-md text-2xl">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
