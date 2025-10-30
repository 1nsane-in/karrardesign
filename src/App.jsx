import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Navigation from "./components/common/Navigation";
import PageWrapper from "./components/common/PageWrapper";
import ScrollToTop from "./components/common/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Studio from "./pages/Studio";
import Karrar from "./pages/Karrar";
import ProjectDetail from "./pages/ProjectDetail";
import InsaneFooter from "./components/common/InsaneFooter";
import ScreenSizeDisplay from "./components/common/ScreenSize";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/karrar" element={<Karrar />} />
        <Route path="/studio/:projectId" element={<ProjectDetail />} />
      </Routes>
      <InsaneFooter />

      {/* Screen size */}
      {import.meta.env.VITE_ENV === "dev" && <ScreenSizeDisplay />}
    </BrowserRouter>
  );
}

export default App;
