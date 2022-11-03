import { useEffect } from "react";
import { useLocation } from "react-router";

/* The ScrollToTop component resets the scroll when the users goes to a different route. */
export const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

return null
};