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
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <ScrollToTop />

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
            path="/services"
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
          <Route
            path="/studio/:projectId"
            element={
              <PageWrapper>
                <ProjectDetail />
              </PageWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
