import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** SPA default: preserve scroll on navigation — reset to top when the path changes. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
