import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entry is in view, update the URL directly
            const sectionId = entry.target.id;
            const newUrl = `${location.pathname}?section=${sectionId}`;
            window.history.replaceState({}, "", newUrl);
          }
        });
      },
      { threshold: 0.2 },
    ); // Adjust the threshold as needed

    const sections = document.querySelectorAll("[id$='Ref']");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [location.pathname]);

  return null;
};

export default ScrollHandler;
