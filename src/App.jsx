import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/Layout/ScrollToTop";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import CaseStudies from "./pages/CaseStudies";
import NewsRoom from "./pages/NewsRoom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/newsroom" element={<NewsRoom />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}
