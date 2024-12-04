import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/whatsapp icon/WhatsApp";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import TermsAndConditions from "./pages/Terms";
import RefundPolicy from "./pages/Refund";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
