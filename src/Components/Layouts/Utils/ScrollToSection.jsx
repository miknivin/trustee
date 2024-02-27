import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sectionId = queryParams.get("section");
    if (sectionId) {
      scroll.scrollTo(`#${sectionId}`, {
        duration: 800, // adjust duration as needed
        smooth: "easeInOutQuart" // adjust smoothness as needed
      });
    }
  }, [location.search]);

  return null;
};

export default ScrollToSection;
