import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    document.querySelector('body').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [window.location.pathname]);

  return null;
}
