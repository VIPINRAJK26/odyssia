import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Navbar = lazy(() => import("./components/header/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Whatsapp = lazy(() => import("./components/whatsapp icon/WhatsApp"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Refund = lazy(() => import("./pages/Refund"));
import SmoothScroll from "./components/scroll/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
        </div>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
            </Routes>
            <Whatsapp />
          </Suspense>
        </main>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </BrowserRouter>
    </SmoothScroll>
  );
}

export default App;
