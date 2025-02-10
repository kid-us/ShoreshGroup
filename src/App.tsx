import "./App.css";
import "animate.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
