import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Removed unused imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Features from "./components/Features";
import CTA from "./components/CTA";
import "./index.css"; // Make sure Tailwind is set up correctly
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Testimonial />
      <Features />
      <CTA />
    </Router>
  );
}

export default App;
