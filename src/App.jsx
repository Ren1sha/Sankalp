import { Routes, Route } from "react-router-dom";
import Sankalp2025 from "./Sankalp2025";
import Register from "./register";
import RegisterCTR from "./register2"; // Import the new registration page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sankalp2025 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register2" element={<RegisterCTR />} /> {/* New Route */}
    </Routes>
  );
}

export default App;
