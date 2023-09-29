import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import SideBar from "./components/sideBar";

import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Projet1 from "./pages/Projet1";
import Projet2 from "./pages/Projet2";
import Projet3 from "./pages/Projet3";
import Projet4 from "./pages/Projet4";
import Contact from "./pages/Contact";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <header>
        <Navigation />
        <SideBar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onClick={closeSidebar}
        />
      </header>
      <Routes>
        <Route path="*" element={<Home className="content" />} />
        <Route path="/knowledges" element={<Knowledges />} />
        <Route path="/projet1" element={<Projet1 />} />
        <Route path="/projet2" element={<Projet2 />} />
        <Route path="/projet3" element={<Projet3 />} />
        <Route path="/projet4" element={<Projet4 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
