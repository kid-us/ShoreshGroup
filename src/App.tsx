import "./App.css";
import "animate.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Investor from "./pages/Investor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/investor-portal" element={<Investor />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* 404 */}
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/404" />}></Route>
    </Routes>
  );
}

export default App;
