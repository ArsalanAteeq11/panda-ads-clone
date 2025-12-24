import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/Layout/ScrollToTop";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}
