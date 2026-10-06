import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Claims from './pages/Claims';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Insights from './pages/Insights';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}
      <ScrollToTop />
      <div className="min-h-screen bg-warm-canvas text-charcoal font-sans antialiased selection:bg-brand-navy selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
