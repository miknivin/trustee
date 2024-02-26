import "./App.css";
import GalleryPage from "./Components/GalleryPage";
import Home from "./Components/Home";
import Footer from "./Components/Layouts/Footer";
import Navbar from "./Components/Layouts/Navbar";
import PageNotFound from "./Components/Layouts/Utils/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollHandler from "./Components/Layouts/Utils/ScrollHandler";
import ScrollToSection from "./Components/Layouts/Utils/ScrollToSection";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToSection />
        <ScrollHandler />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
