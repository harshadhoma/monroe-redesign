// components/Navigation/ScrollToTop.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
