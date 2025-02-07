import "./App.css";
import "animate.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Assets from "./pages/Assets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assets" element={<Assets />} />
    </Routes>
  );
}

export default App;
