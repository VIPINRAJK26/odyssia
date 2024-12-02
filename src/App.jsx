import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/whatsapp icon/WhatsApp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
