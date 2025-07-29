import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Memories from "./pages/Memories.jsx";
import Letter from "./pages/Letter.jsx";
import Final from "./pages/Final.jsx";
import Navbar from "./components/Navbar.jsx";
import Games from "./pages/Games.jsx";
function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Hide Navbar only on /final */}
      {location.pathname !== "/final" && <Navbar />}
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/final" element={<Final />} />
        <Route path="/games" element={<Games />} />

      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
