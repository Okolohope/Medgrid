import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Waitlist from "./pages/Waitlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;