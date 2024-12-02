import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/whatsapp icon/WhatsApp";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
