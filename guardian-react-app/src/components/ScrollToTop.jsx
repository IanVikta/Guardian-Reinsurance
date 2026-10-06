import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    // Refresh AOS positions when route changes
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
