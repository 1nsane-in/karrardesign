import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navigation from "./components/common/Navigation";
import PageWrapper from "./components/common/PageWrapper";
import ScrollToTop from "./components/common/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Studio from "./pages/Studio";
import Karrar from "./pages/Karrar";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Work />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/karrar" element={<Karrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
