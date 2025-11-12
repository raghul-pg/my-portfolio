import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views on route changes.
 * Sends page view events to Vercel Web Analytics.
 */
export const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    if ((window as any).va) {
      // Vercel Analytics object
      (window as any).va('event', 'pageview');
    }
  }, [location.pathname]);
};
