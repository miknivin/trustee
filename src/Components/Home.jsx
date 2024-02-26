import React from "react";
import Hero from "./Layouts/Hero";
import About from "./Layouts/About";
import Gallery from "./Layouts/Gallery";
import Contact from "./Layouts/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
