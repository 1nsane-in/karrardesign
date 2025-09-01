import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navigation from "./components/common/Navigation";
import { KarrarLogo } from "./assets/index";
function App() {
  return (
    <BrowserRouter>
      <div className="size-[60px] absolute  top-6 left-[10%] -translate-x-1/2 z-50">
        <img src={KarrarLogo} alt="Karrar Logo" />
      </div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
