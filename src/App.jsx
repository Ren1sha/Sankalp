import { Routes, Route } from "react-router-dom";
import Sankalp2025 from "./Sankalp2025";
import Register1 from "./Register1";
import Register2 from "./register2";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Sankalp2025 />} />
      <Route path="/register1" element={<Register1/>} />
      <Route path="/register2" element={<Register2/>} /> 
    </Routes>
  );
}

export default App;
