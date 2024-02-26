import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  //modal js
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const scrollToElement = (ref, menuItem) => {
    setActiveMenuItem(menuItem);

    const element = document.querySelector(`#${ref}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate and then try to scroll again after a delay
      navigate(`/`);
    }
  };

  // //navigate to gallery and scroll to top
  // const handleOnClick = () => {
  //   scrollToTop();
  //   setActiveMenuItem("Gallery");
  //   navigate(`/gallery`);
  // };

  // function scrollToTop() {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entry is in view, update the activeMenuItem
            const cleanedId = entry.target.id.replace("Ref", "");
            const capitalizedId =
              cleanedId.charAt(0).toUpperCase() + cleanedId.slice(1);
            setActiveMenuItem(capitalizedId);
          }
        });
      },
      { threshold: 0.3 },
    ); // Adjust the threshold as needed

    // Observe each section
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <nav className=" bg-base-300 border-gray-200/60">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Asa Foundation
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleHidden}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isHidden && "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <button
                  className={`block py-2 px-3 ${activeMenuItem === "Home" ? "text-blue-700" : "text-white"}  rounded md:bg-transparent md:p-0`}
                  aria-current="page"
                  onClick={() => scrollToElement("homeRef", "Home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-3 ${activeMenuItem === "About" ? "text-blue-700" : "text-white"}  rounded md:bg-transparent md:p-0`}
                  onClick={() => scrollToElement("aboutRef", "About")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("galleryRef", "About")}
                  className={`block py-2 px-3 ${activeMenuItem === "Gallery" ? "text-blue-700" : "text-white"}  rounded md:bg-transparent md:p-0 text-start`}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-3 ${activeMenuItem === "Contact" ? "text-blue-700" : "text-white"}  rounded md:bg-transparent md:p-0`}
                  onClick={() => scrollToElement("contactRef", "Contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
