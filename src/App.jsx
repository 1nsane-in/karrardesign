import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navigation from "./components/common/Navigation";
import { KarrarLogo } from "./assets/index";
import PageWrapper from "./components/common/PageWrapper";
import ScrollToTop from "./components/common/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Studio from "./pages/Studio";
import Karrar from "./pages/Karrar";

function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <ScrollToTop />
        <div className="size-[60px] absolute  top-6 left-[10%] -translate-x-1/2 z-50">
          <img src={KarrarLogo} alt="Karrar Logo" />
        </div>

        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/work"
            element={
              <PageWrapper>
                <Work />
              </PageWrapper>
            }
          />
          <Route
            path="/studio"
            element={
              <PageWrapper>
                <Studio />
              </PageWrapper>
            }
          />
          <Route
            path="/karrar"
            element={
              <PageWrapper>
                <Karrar />
              </PageWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
