import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Navigation from "./components/common/Navigation";
import ScrollToTop from "./components/common/ScrollToTop";
import KarrarSplashScreen from "./components/common/KarrarSplashScreen";

// Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Studio = lazy(() => import("./pages/Studio"));
const Karrar = lazy(() => import("./pages/Karrar"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const InsaneFooter = lazy(() => import("./components/common/InsaneFooter"));
const ScreenSizeDisplay = lazy(() => import("./components/common/ScreenSize"));

// Loading component
const PageLoader = () => <KarrarSplashScreen />;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/karrar" element={<Karrar />} />
          <Route path="/studio/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <InsaneFooter />
      </Suspense>

      {import.meta.env.VITE_ENV === "dev" && (
        <Suspense fallback={null}>
          <ScreenSizeDisplay />
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;
