import { useState } from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

import Home from "./pages/Home";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Waitlist from "./pages/Waitlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex">
        <Sidebar isOpen={isOpen} onClose={closeSidebar} />

        <div className="flex-1 flex flex-col">
          <Navbar onMenuClick={openSidebar} />

          <main className="p-4 bg-gradient-to-br from-green-100 to-blue-200 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/waitlist" element={<Waitlist />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;